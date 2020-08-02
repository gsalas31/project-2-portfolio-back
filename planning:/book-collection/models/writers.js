const mongoose = require('mongoose')
const Schema = mongoose.Schema

const writerSchema = new Schema(
    {
        name: { type: String, required: true },
        portrait: { type: URL, required: true },
        bio: [
            {
                year: Number,
                description: {type:String, required:true}
            }
             ]
    }
)

module.exports = mongoose.model('Writer', writerSchema)