const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema(
    {
        name:{ type: String, required: true },
        book:[
            {title: [String],
            "release-year": String,
            type:{ type: String, required: true },
            pages: Number
            }
            ]
    }
)


module.exports = mongoose.model('Book', bookSchema)