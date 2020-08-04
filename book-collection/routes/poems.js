const express = require("express")
const router = express.Router()
const {index} = require("../controllers/poems.js")


router.get('/', index)

module.exports = router