const db = require('../db/index.js')
const New= require('../models/new.js')

const create = async (req, res) =>{
    try{
        const newW = await New.create(req.body)
        console.log(newW)
        res.status(200).json(newW)
    }
    catch (error){
        res.status(400).send(error)
    }
}
module.exports={
    create
}