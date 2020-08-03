const mongoose = require('mongoose')
const Schema = mongoose.Schema

const writerSchema = new Schema(
    {
        name: { type: String, required: true },
        portrait: { type: String, required: true },
        bio:{
                dob: {type:String},
                description: {type:String, required:true}
            }
    }
)

module.exports = mongoose.model('Writer', writerSchema)