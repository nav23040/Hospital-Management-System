const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

const users = require("./users");

const app = express();

// Bodyparser middleware
app.use(express.urlencoded);

app.use(express.json());
require('dotenv').config();


//connect to MongoDB
const MongoClient = require('mongodb').MongoClient;

    //make sure to check connection string is correct here, since this depends on the whether you are running standalone, replica, sharded cluster 

const uri = "mongodb+srv://naveen:naveen@cluster0.e6pk5.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

if(process.env.NODE_ENV === 'production') {
   
  app.use(express.static(path.join(__dirname, "client", "build")))

  app.get('*',(req, res) => {
      res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}


const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server up and running on port ${port}`));