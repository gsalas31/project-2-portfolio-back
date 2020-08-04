const db = require('../db/index.js')
const Book = require('../models/books.js')

//Controllers for Boooks -----------------------------------------------

const index = async (req, res)=>{
    try {
        const allBooks=await Book.find({}).populate('books')
        console.log(allBooks)
        res.status(200).json(allBooks)
    }
    catch(error){
        res.status(400).send(error)
    }
    }

module.exports={
    index

    }