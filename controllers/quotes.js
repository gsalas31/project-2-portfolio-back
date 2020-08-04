const db = require('../db/index.js')
const Quote = require('../models/quotes.js')

//Controllers for Quotes------------------------------------------------
const index = async (req, res)=>{
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
        const deleteQuote = await Quote.findByIdAndDelete(req.params.id)
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
    index,
    destroy,
    create,
    update

}