//DEPENDENCIES
require("dotenv").config(); 
const express = require("express"); 
const app = express(); 
const morgan = require("morgan"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 

const BooksRouter= require("./routes/books")
const PoemsRouter= require("./routes/poems")
const QuotesRouter= require("./routes/quotes")
const WritersRouter= require("./routes/writers")
const NewRouter= require("./routes/new")

//GlOBAL VARIABLES

const PORT = process.env.PORT; 
const NODE_ENV = process.env.NODE_ENV; 
const mongoURI = process.env.mongoURI + "selene"; //URI for connecting to database specified in .env
const db = mongoose.connection; 
const mongoConfigObject = { useNewUrlParser: true, useUnifiedTopology: true }; //Config option to eliminate deprecation warnings


//CONNECT TO DATABASE
mongoose.connect(mongoURI, mongoConfigObject, () => {
  console.log("CONNECTED TO MONGO");
});



//CONNECTION MESSAGING
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected!"));
db.on("disconnected", () => console.log("mongo disconnected"));


// CORS SECURITY CONFIGURATIONS
const whitelist = ["http://localhost:3000/", "http://example2.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error("Not allowed by CORS, domain needs to be added to whitelist")
      );
    }
  },
};


// MIDDLEWARE
//NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions)); //ternary operator
app.use(cors())

// Enables websites in whitelist to make API calls to your server, enables all sites in development
app.use(express.json()); 
app.use(morgan("dev")); 
app.use(express.static("public")); 


// ROUTES AND ROUTERS

app.use("/books", BooksRouter)
app.use("/poems",PoemsRouter)
app.use("/quotes",QuotesRouter)
app.use("/writers",WritersRouter)
app.use("/new",NewRouter)





//ROOT ROUTE (FOR TESTING)
app.get("/", (req, res) => {
  res.send("If you see this then the server is working!");
});


// Server Listener

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
