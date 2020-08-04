const db = require('../db/index.js')
const Writer = require('../models/writers.js')



//Controllers for Writers---------------------------------------------

const index = async (req, res)=>{
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


module.exports={
    index
    }