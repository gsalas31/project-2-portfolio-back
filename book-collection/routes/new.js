  
const express = require("express")
const router = express.Router()
const {create} = require("../controllers/new.js")

router.post('/', create)

module.exports = router