const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema(
    {
        name: {
            type: Schema.Types.ObjectId,
            ref: 'writers'
          },
        type:{ type: String, required: true },
        title: { type: String, required: true }   
    }
)

module.exports = mongoose.model('Book', bookSchema)