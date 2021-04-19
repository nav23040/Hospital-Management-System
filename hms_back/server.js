const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const bcrypt = require("bcryptjs");
const cors = require('cors');
const User = require("./models/User");
const users = require('../hms_back/routes/users')
const admin = require('../hms_back/routes/admin')
const doctor = require('../hms_back/routes/doctor')
const appointment = require('../hms_back/routes/appointments')
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const keys = require("./config/keys");
dotenv.config();

const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors(
    {origin: true ,credentials: true }
    ));

const validateRegisterInput = require("./validation/register");
/*
const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`Server up and running on port ${port}`));*/

app.listen(3000, ()=> { console.log('app is running on port 3000') });


//connect to MongoDB
const MongoClient = require('mongodb').MongoClient;

    //make sure to check connection string is correct here, since this depends on the whether you are running standalone, replica, sharded cluster 

//const uri = process.env.DBURL;

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
require("./config/passport")(passport);


app.use('', users);

app.use('/admin', admin);

app.use('/doctor', doctor);

app.use('/appointment', appointment);

if(process.env.NODE_ENV === 'production') {
   
  app.use(express.static(path.join(__dirname, "client", "build")))

  app.get('*',(req, res) => {
      res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}
