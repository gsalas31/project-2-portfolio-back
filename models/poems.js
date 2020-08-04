const mongoose = require('mongoose')
const Schema = mongoose.Schema

const poemSchema = new Schema(
    {
        writer:{
            type: Schema.Types.ObjectId,
             ref:'Writer'
        },
        title: {type:String},
        "release-year": String
     }
)

module.exports = mongoose.model('Poem', poemSchema)
