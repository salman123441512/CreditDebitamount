const { getRecord, createRecord, getSingleRecord, updateRecord, deleteRecord } = require('../controllers/contactUscontroller')
const { verifyAdmin } = require('../verification')


const contactUsrouter = require('express').Router()

contactUsrouter.get("/",verifyAdmin,getRecord)
contactUsrouter.post("/",createRecord)
contactUsrouter.get("/:_id",verifyAdmin,getSingleRecord)
contactUsrouter.put("/:_id",verifyAdmin,updateRecord)
contactUsrouter.delete("/:_id",verifyAdmin,deleteRecord)

module.exports = contactUsrouter