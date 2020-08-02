const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quoteSchema = new Schema(
    {
        name: {
            type: Schema.Types.ObjectId,
            ref: 'writers'
          },
        type:{ type: URL, required: true },   
    }
)

module.exports = mongoose.model('Quote', quoteSchema)