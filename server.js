//=============================
//      Dependencies
//=============================
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


//=============================
//  Environment Variable
//=============================
const app = express();
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/alttpr";
const MONGODB_URI = "mongodb+srv://leo:Leolovesham8@cluster0.k9s85.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3000;

//=============================
//  Middleware
//=============================
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static("public")); // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
// app.use(cors({credentials: true, origin: '*'}));
app.use(cors());

//=============================
//  MongoDB Connection
//=============================
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Established Connection with mongo", MONGODB_URI);
});

//======================
//  DB Messaging
//======================
mongoose.connection.on("error", (err) => console.log(err.message));
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));


const notesController = require('./controllers/notes');

app.get('/', (req, res) => {
    res.redirect('/notes');
})

app.use('/notes', notesController);


//=================================================
// Listening on Port 3000
//=================================================
app.listen(PORT, () => {
    console.log(`Accessing Port... ${PORT}`);
  });