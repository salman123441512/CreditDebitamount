const { transporter } = require('../mailTransporter')
const contactUs = require('../models/contactUs')

async function getRecord(req, res) {
    try {
        let data = await contactUs.find().sort({ _id: -1 })
        res.send({ status: '200', success: 'true', message: "You are get Record Suuccessfully  ", Total: data.length, data: data })
    } catch (error) {

        res.send({ status: '400', success: 'fail', message: "Internal Server Error" })
    }
}
async function createRecord(req, res) {
    try {
        let data = new contactUs(req.body)
        data.Date = new Date()
        await data.save()
        userMailOptions = {
            from: process.env.EMAIL_USER,
            to: data.email,
            subject: "Your Query Recieved   : Team Ambedkar-Fund",
            html: `
               <p> Hello <b>${data.name},</b></p>
               <p> Your Message : <b>${data.message},</b></p>
               <p> Your Query Recieve Our Team will contact you soon  <br>
                Regard, Team Ambedkar Fund</p>
            `
        };
         adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Query Received',
            html: `
                <h2>New Query Received</h2>
                <p>
                Name: ${data.name}<br>
                Email: ${data.email}<br>
                Subject: ${data.subject}<br>
                Phone: ${data.phone}<br>
                Message: ${data.message}<br>
                Date: ${data.Date}<br>
                </p>
                
            `
        };

        transporter.sendMail(userMailOptions);
        transporter.sendMail(adminMailOptions)

        res.send({ status: '200', success: 'true', message: "Your Query Recieved Our Team Will Contact You Soon ! ", data: data })
    } catch (error) {

        if (error.errors) {
            const errorMessage = error.errors.name?.message ||
                error.errors.email?.message ||
                error.errors.phone?.message ||
                error.errors.subject?.message ||
                error.errors.message?.message;


            res.status(400).send({
                Success: false,
                message: errorMessage
            });
        }
        else
            res.send({ status: '400', success: 'fail', message: "Internal Server Error" })

    }
}

async function getSingleRecord(req, res) {
    try {
        const data = await contactUs.findOne({ _id: req.params._id });

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
        const data = await contactUs.findOne({ _id: req.params._id });

        if (data) {
            data.active = req.body.active ?? data.active

            await data.save()
            res.status(200).send({ success: true, message: "Your contactUs Updated Successfully.", data: data });
        } else {
            res.status(404).send({ success: false, message: "Record not found." });
        }
    } catch (error) {
        if (error.keyValue)
            res.send({ status: '400', success: 'fail', message: "This contactUs Name Already Exist." })
        else
            res.status(500).send({ success: false, message: "Internal server error." });
    }
}

async function deleteRecord(req, res) {
    try {
        const data = await contactUs.findOne({ _id: req.params._id });

        if (data) {
            await data.deleteOne()
            res.status(200).send({ success: true, message: "contactUs is Deleted" });
        } else {
            res.status(404).send({ success: false, message: "Record not found." });
        }
    } catch (error) {
        res.status(500).send({
            success: false, message: "Internal server error."
        });
    }
}


module.exports = {
    getRecord: getRecord,
    createRecord: createRecord,
    getSingleRecord: getSingleRecord,
    updateRecord: updateRecord,
    deleteRecord: deleteRecord
}