const Userrouter = require('express').Router()
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload/Users')
    },
    filename: function (req, file, cb) {
        
        cb(null, Date.now()+file.originalname)
    }
})

const upload = multer({ storage: storage })
const { getRecord, createRecord, getSingleRecord, updateRecord, deleteRecord, login, forgetPassword1, forgetPassword2, forgetPassword3 } = require('../controllers/Usercontroller')
const { verifyAdmin,  verifyBoth } = require('../verification')


Userrouter.get("/",verifyAdmin,getRecord)
Userrouter.post("/",verifyAdmin,upload.single('image'),createRecord)
Userrouter.get("/:_id",verifyBoth,getSingleRecord)
Userrouter.put("/:_id",verifyBoth,upload.single('image'),updateRecord)
Userrouter.delete("/:_id",verifyAdmin,deleteRecord)
Userrouter.post("/login",login)
Userrouter.post("/forget-Password-1",forgetPassword1)
Userrouter.post("/forget-Password-2",forgetPassword2)
Userrouter.post("/forget-Password-3",forgetPassword3)

module.exports = Userrouter