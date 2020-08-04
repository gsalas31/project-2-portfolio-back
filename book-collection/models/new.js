const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userNewSchema = new Schema(
    {
        author: { type: String, required:true },
        type:{ type: String, required: true },
        title: { type: String, required: true },
        email:{ type: String, required: false }
    },
    {
        timestamps:true
    }
)


module.exports = mongoose.model('New', userNewSchema)
