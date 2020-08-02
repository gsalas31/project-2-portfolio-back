const mongoose = require('mongoose')
const Schema = mongoose.Schema

const poemSchema = new Schema(
    {
        name: {
            type: Schema.Types.ObjectId,
            ref: 'writers'
          },
        type:{ type: String, required: true },
        title: [String]   
    }
)

module.exports = mongoose.model('Poem', poemSchema)
