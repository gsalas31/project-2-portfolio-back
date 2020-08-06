const express = require("express")
const router = express.Router()
const {index, getBook} = require("../controllers/books")



router.get('/', index)
router.get('/:id', getBook)

module.exports = router