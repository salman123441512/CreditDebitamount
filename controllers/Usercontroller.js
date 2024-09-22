const User = require('../models/User')
const bcrypt = require('bcrypt')
var passwordValidator = require('password-validator');
const fs = require('fs');
const { transporter } = require('../mailTransporter');
const jwt = require('jsonwebtoken')

// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
    .is().min(7)                                    // Minimum length 7
    .is().max(100)                                  // Maximum length 100
    .has().uppercase(1)                              // Must have uppercase letters
    .has().lowercase(1)                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 1 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Password', 'Password123']); // Blacklist these value

async function getRecord(req, res) {
    try {
        let data = await User.find().sort({ _id: -1 })
        res.send({ status: '200', success: 'true', message: "You are get Record Suuccessfully  ",  data: data })
    } catch (error) {

        res.send({ status: '400', success: 'fail', message: "Internal Server Error" })
    }
}
async function createRecord(req, res) {
    try {
        // Validate password
        if (!req.body.password || !schema.validate(req.body.password)) {
            return res.status(400).send({
                status: '400',
                success: 'fail',
                message: "Invalid password. Must contain: 1 uppercase letter, 1 lowercase letter, at least 1 digit, and no spaces. Maximum length: 100 characters."
            });
        }

                                                  // Prepare new user data
        let newUser = new User(req.body);
     
                    console.log(req.file)                            // Handle image upload if provided
        if (req.file) {

            try {
                if (newUser.image) {
                    fs.unlinkSync(newUser.image); // Remove old image if it exists
                }
            } catch (error) {
                console.error("Error removing old image:", error);
            }
            newUser.image = req.file.path;                   // Set new image path

        }
                                                             // Hash the password
        bcrypt.hash(req.body.password, 12, async (error, hash) => {
            if (error) {
                console.error("Error hashing password:", error);
                return res.status(500).send({ status: '500', success: 'fail', message: "Internal Server Error" });
            }

            newUser.password = hash;

            try {
                                                              // Save the new user
              await newUser.save();

                                                              // Send confirmation email
                const userMailOptions = {
                    from: process.env.EMAIL_USER,
                    to: newUser.email,
                    subject: "Your Account is Created Successfully : Team Ambedkar-Fund",
                    html: `
                        <h5>Hello <b>${newUser.name},</b></h5>
                        <p>Your Account has been created successfully in Br. Ambedkar Fund.<br>
                        Please never share your username and password with anyone.<br>
                        Regards, Team Ambedkar Fund</p>
                    `
                };
                transporter.sendMail(userMailOptions);

                                                        // Respond with success
                res.status(200).send({
                    status: '200',
                    success: true,
                    message: "You are a User holder in Br Ambedkar Fund.",
                    data: newUser
                });
            } catch (error) {
                console.error("Error saving user:", error);

                if (error.code === 11000) {
                                                    // Duplicate key error (e.g., email or username already exists)
                    if (error.keyValue.email) {
                        return res.status(400).send({ Success: false, message: 'This Email is Already Taken' });
                    } else if (error.keyValue.username) {
                        return res.status(400).send({ status: '400', success: 'fail', message: "This User Name Already Exists." });
                    }
                }

                // Other validation errors
                if (error.errors) {
                    if (error.errors.name) {
                        return res.status(400).send({ Success: false, message: error.errors.name.message });
                    } else if (error.errors.phone) {
                        return res.status(400).send({ Success: false, message: error.errors.phone.message });
                    }
                }

                // General error response
                res.status(500).send({ status: '500', success: 'fail', message: "Internal Server Error" });
            }
        });
    } catch (error) {
        console.error("Unexpected error:", error);
        res.status(500).send({ status: '500', success: 'fail', message: "Internal Server Error" });
    }
}

async function getSingleRecord(req, res) {
    try {
        const data = await User.findOne({ _id: req.params._id });

        if (data) {
            res.status(200).send({ success: true, message: "You have successfully retrieved the record.", data: data });
        } else {
            res.status(404).send({ success: false, message: "Record not found." });
        }
    } catch (error) {
        res.status(500).send({
            success: false, message: "Internal server error."
        });
    }
}

async function updateRecord(req, res) {
    try {
        const data = await User.findOne({ _id: req.params._id });

        if (data) {

           
            data.phone = req.body.phone || data.phone;
            data.address = req.body.address || data.address;
            data.Image = req.body.Image || data.image;
            data.date = req.body.date || data.date;
            data.amount = req.body.amount || data.amount;


            if (req.file) {
                try {
                    if (data.image) {
                        fs.unlinkSync(data.image);
                    }
                } catch (error) {
                    console.error("Error removing old image:", error);
                }
                data.image = req.file.path;
            }


            await data.save();

            res.status(200).send({ success: true, message: "Your Account Updated Successfully.", data: data });
        } else {
            res.status(404).send({ success: false, message: "Record not found." });
        }
    } catch (error) {
        console.error("Error updating user:", error);

        if (error.code === 11000) {

            return res.status(400).send({ status: '400', success: 'fail', message: "This User Name Already Exist." });
        }


        res.status(500).send({ success: false, message: "Internal server error." });
    }
}

async function deleteRecord(req, res) {
    try {
        const data = await User.findOne({ _id: req.params._id });

        if (data) {
            try {
                fs.unlinkSync(data.image)
            } catch (error) { }

            await data.deleteOne()
            res.status(200).send({ success: true, message: "Account is Deleted" });
        } else {
            res.status(404).send({ success: false, message: "Record not found." });
        }
    } catch (error) {
        res.status(500).send({
            success: false, message: "Internal server error."
        });
    }
}

async function login(req, res) {
    try {
        let data = await User.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.username }
            ]
        })
        if (data) {
            if (await bcrypt.compare(req.body.password, data.password,)) {
                let key = data.role === 'admin' ? process.env.JWT_SALT_KEY_ADMIN : process.env.JWT_SALT_KEY_BUYER
                jwt.sign({ data }, key, { expiresIn: 1296000 }, (error, token) => {
                    if (error)
                        res.status(500).send({ success: false, message: "Internal server error." });
                    else
                        res.send({ success: "true", status: '200', message: "You are Login Successfully!", data: data, token: token })

                })
            }
            else
                res.send({ success: "fail", status: '401', message: "Invalid  Password" })

        }
        else
            res.send({ success: "fail", status: '401', message: "Invalid Username " })

    } catch (error) {
        res.status(500).send({ success: false, message: "Internal server error." });

    }
}

async function forgetPassword1(req, res) {
    try {
        let data = await User.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.username }
            ]
        })
        if (data) {
            let otp = parseInt(Math.random() * 1000000)
            data.otp = otp
            await data.save()
            userMailOptions = {
                from: process.env.EMAIL_USER,
                to: data.email,
                subject: "OTP for Reset Password : Team Ambedkar-Fund",
                html: `
                   <p> Hello <b>${data.name},</b></p>
                   <p> OTP for Reset Password : ${data.otp} <br>
                    Please Never Share Your OTP anyone : Team Ambedkar Fund</p>
                `
            };
            transporter.sendMail(userMailOptions, ((error) => {
                if (error) {
                    res.send({ status: "400", success: "Fail", message: "Please Enter Valid Email." })
                }
                else
                    res.send({ status: "200", success: "True", message: "OTP Send on Your Register Email.", })
            }));
            res.send({ status: "200", success: "True", message: "OTP Send on Your Register Email.", })
        }
        else
            res.send({ status: "400", success: "Fail", message: "User Not Found." })
    } catch (error) {
        res.send({ status: "400", success: "Fail", message: "Internal Server Error." })
    }
}

async function forgetPassword2(req, res) {
    try {
        let data = await User.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.username }
            ]
        })
        if (data) {
            if (data.otp == req.body.otp)
                res.send({ status: "200", success: "True", message: "Done", })
            else
                res.send({ status: "405", success: "false", message: "Invalid OTP", })
        }
        else
            res.send({ status: "401", success: "Fail", message: "Anauthorized Activity." })
    } catch (error) {
        res.send({ status: "400", success: "Fail", message: "Internal Server Error." })
    }
}

async function forgetPassword3(req, res) {
    try {
        let data = await User.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.username }
            ]
        })
        if (data) {
            bcrypt.hash(req.body.password, 12, async (error, hash) => {
                if (error)
                    res.send({ status: "400", success: "Fail", message: "Internal Server Error." })
                else {
                    data.password = hash
                    await data.save()
                    res.send({ status: "200", success: "True", message: "Password Has been Reset", })
                }
            })

        }
        else
            res.send({ status: "401", success: "Fail", message: "Anauthorized Activity." })
    } catch (error) {
        res.send({ status: "400", success: "Fail", message: "Internal Server Error." })
    }
}


module.exports = {
    getRecord: getRecord,
    createRecord: createRecord,
    getSingleRecord: getSingleRecord,
    updateRecord: updateRecord,
    deleteRecord: deleteRecord,
    login: login,
    forgetPassword1: forgetPassword1,
    forgetPassword2: forgetPassword2,
    forgetPassword3: forgetPassword3,
}