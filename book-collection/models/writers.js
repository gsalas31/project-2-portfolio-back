const mongoose = require('mongoose')
const Schema = mongoose.Schema

const writerSchema = new Schema(
    {
        name: { type: String, required: true },
        portrait: { type: String, required: true },
        bio:{
                dob: {type:String},
                description: {type:String, required:true}
            }, 
        book: [
            {
                type: Schema.Types.ObjectId,
                 ref:'poems',
                 ref:'books'
            }
                 ]
    }
)

module.exports = mongoose.model('Writer', writerSchema)