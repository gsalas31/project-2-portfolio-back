const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema(
    {
        writer:{
            type: Schema.Types.ObjectId,
             ref:'Writer'
        },
        title: {type:String},
        "release-year": String,
        pages: Number
     }
            
)


module.exports = mongoose.model('Book', bookSchema)