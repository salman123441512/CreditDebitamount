const router = require('express').Router()


const contactUsrouter = require('./contacUsrouter')
const Userrouter = require('./Userrouter')



router.use("/User",Userrouter)
router.use("/contactUs",contactUsrouter)

module.exports = router