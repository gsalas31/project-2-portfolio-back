const express = require("express")
const router = express.Router()
const {index} = require("../controllers/books")


router.get('/', index)

module.exports = router