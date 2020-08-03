const mongoose = require('mongoose')
const Schema = mongoose.Schema

const poemSchema = new Schema(
    {
        title: [String],
        name: {
            type: Schema.Types.ObjectId,
            ref: 'writers'
          },
        "rease-year": String,
        type:{ type: String, required: true },
    }
)

module.exports = mongoose.model('Poem', poemSchema)
