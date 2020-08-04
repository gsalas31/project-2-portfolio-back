  
const express = require("express")
const router = express.Router()
const {index, destroy, update, create} = require("../controllers/quotes.js")


router.get('/', index)
router.delete('/:id', destroy)
router.put('/:id', update)
router.post('/', create)



module.exports = router