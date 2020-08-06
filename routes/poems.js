const express = require("express")
const router = express.Router()
const {index, getPoem} = require("../controllers/poems.js")


router.get('/', index)
router.get('/:id', getPoem)

module.exports = router