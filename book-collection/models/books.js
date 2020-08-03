const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema(
    {
        title: [String],
        name: {
            type: Schema.Types.ObjectId,
            ref: 'writers'
          },
        "rease-year": String,
        type:{ type: String, required: true },
        pages: Number
    }
)

module.exports = mongoose.model('Book', bookSchema)