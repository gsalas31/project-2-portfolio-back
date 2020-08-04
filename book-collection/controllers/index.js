const db = require('../db/index.js')
const Book = require('../models/books.js')
const Writer = require('../models/writers.js')
const Poem = require('../models/poems.js')
const Quote = require('../models/quotes.js')

//Controllers for Writers---------------------------------------------

const allWriters = async (req, res)=>{
    try {
        const allWriters=await Writer.find({}).populate('writers')
        console.log(allWriters)
        res.status(200).json(allWriters)
    }
    catch(error){
        //it will send the error to the front so you dont have to go to the back 
        res.status(400).send(error)
    }
    }

//For me only ?
/*const createWriter = async (req, res) =>{
    try{
        const newWriter = await Writer.create(req.body)
        res.status(200).json(newWriter)
    }
        catch (error){
        res.status(400).send(error)
    }
    }*/


//Controllers for Boooks -----------------------------------------------

const allBooks = async (req, res)=>{
    try {
        const allBooks=await Book.find({}).populate('books')
        console.log(allBooks)
        res.status(200).json(allBooks)
    }
    catch(error){
        res.status(400).send(error)
    }
    }


//Controllers for Poems------------------------------------------------
const allPoems = async (req, res)=>{
    try {
        const allPoems=await Poem.find({}).populate('poems')
        console.log(allPoems)
        res.status(200).json(allPoems)
       
    }
    catch(error){
        res.status(400).send(error)
    }
    }


//Controllers for Quotes------------------------------------------------
const allQuotes = async (req, res)=>{
    try {
        const allQuotes=await Quote.find({}).populate('quotes')
        console.log(allQuotes)
        res.status(200).json(allQuotes)
    }
    catch(error){
        res.status(400).send(error)
    }
    }

const destroy = async(req, res)=>{
    try{
        const deleteQuote=await Quote.findByIdAndDelete(req,params.id)
        res.status(200).json(deleteQuote)
    }
    catch(error){
        res.status(400).send(error)
    }
}

const update = async (req, res) => {
    try{
        const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedQuote)
    }
    catch(error){
        res.status(400).send(error)
    }
}


const create = async (req, res) =>{
    try{
        const newQuote = await Quote.create(req.body)
        console.log(newQuote)
        res.status(200).json(newQuote)
    }
    catch (error){
        res.status(400).send(error)
    }
}

    module.exports={
        allWriters,
        //createWriter,
        allBooks,
        allPoems,
        allQuotes,
        destroy,
        create,
        update

    }