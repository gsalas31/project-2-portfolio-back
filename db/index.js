const mongoose = require('mongoose')

// use environment URI if available
//here is where i need to add my DB  and name can be anything
let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://localhost:27017/selene'

// connect to database
mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error:', e.message)
    })

const db = mongoose.connection

// connection messaging
db.on("error", (err) => console.log(err.message + "\nIs Mongod not running?"));
db.on("connected", () => console.log("MongoDB connected!"));
db.on("disconnected", () => console.log("MongoDB disconnected."));

module.exports = db