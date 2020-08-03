const mongoose = require('mongoose')
const Schema = mongoose.Schema

const poemSchema = new Schema(
    {
        name: { type: String, require:true},
        book:[
            {
                title:{ type: String, required: true },
                "release-year": { type: String, required: true },
                type:{ type: String, required: true } 
            }
            ]
    }
)

module.exports = mongoose.model('Poem', poemSchema)
