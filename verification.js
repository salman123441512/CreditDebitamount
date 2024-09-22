const jwt = require('jsonwebtoken')

// async function verifyAdmin (req,res,next){
// try {
//     let token = req.headers.authorization
//     console.log(token)
//     if(token && jwt.verify(token,process.env.JWT_SALT_KEY_ADMIN))
//       next()
//    else
//    res.send({status:401,succcess:'fail',message:"UnAutorized Activity."})
// }
// catch (error) {
//      res.send({status:440,succcess:'fail',message:"Login Session Time Out Please Login Again."})

// }
// }

async function verifyAdmin(req, res, next) {

    let token = req.headers.authorization
    
    if (token) {
        jwt.verify(token, process.env.JWT_SALT_KEY_ADMIN, (error) => {
            if (error)
                res.send({ status: 440, succcess: 'fail', message: "Login Session Time Out Please Login Again." })
                else
               next()
        })
    }
    else
        res.send({ status: 401, succcess: 'fail', message: "UnAutorized Activityadmin." })
}

async function verifyBuyer(req, res, next) {

    let token = req.headers.authorization
    if (token) {
        jwt.verify(token, process.env.JWT_SALT_KEY_BUYER, (error) => {
            if (error)
                res.send({ status: 440, succcess: 'fail', message: "Login Session Time Out Please Login Again." })
            else
                next()
        })
    }
    else
        res.send({ status: 401, succcess: 'fail', message: "UnAutorized Activity buyer." })
}

async function verifyBoth(req, res, next) {

    let token = req.headers.authorization
    if (token) {
        jwt.verify(token, process.env.JWT_SALT_KEY_ADMIN, (error) => {
            if (error) {
                jwt.verify(token, process.env.JWT_SALT_KEY_BUYER, (error) => {
                    if (error)
                        res.send({ status: 440, succcess: 'fail', message: "Login Session Time Out Please Login Again." })
                    else
                        next()
                })
            }
             else
                next()

            })
    }
    else
        res.send({ status: 401, succcess: 'fail', message: "UnAutorized Activity both." })
}


module.exports = {

    verifyAdmin: verifyAdmin,
    verifyBuyer: verifyBuyer,
    verifyBoth:verifyBoth,
}