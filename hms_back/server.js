const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const bcrypt = require("bcryptjs");
const cors = require('cors');
const User = require("./models/User");
const users = require('../hms_back/routes/users')
const cookieParser = require('cookie-parser');

// Passport config

const jwt = require("jsonwebtoken");
const keys = require("./config/keys");


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


/*app.post("/register", (req, res) => {
    
  //Form validation
  console.log(req.body);
  /*const {errors, isValid} = validateRegisterInput(req.body.email, req.body.password);
  
  if(!isValid){
      return res.status(400).json(errors);
  } 
 
  User.findOne({email:req.body.email}).then(user=>{

      if(user){
          return res.status(400).json({email:"Email already exists"});
      } else{
          const newUser = new User({
              name:req.body.name,
              father_name:req.body.fatherName,
              mother_name:req.body.motherName,
              password:req.body.password,
              email:req.body.email,
              dob: Date.parse(req.body.age),gender:req.body.gender,
              address:req.body.address,mobile_number:req.body.mobile,father_phone_number:req.body.parentMobile
          });

          // Hash password before storing in database
          const rounds  = 10;
          bcrypt.genSalt(rounds, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                  .save()
                  .then(user => res.json('success'))
                  .catch(err => console.log(err));
              });
          });
      }
        
  });
    
});
// Routes
//app.use("/users", users);

app.post("/signin",(req,res) => {

  //Form Valdiation
 /*  const {errors, isValid} = validateLoginInput(req.body);

  if (!isValid) {
      return res.status(400).json(errors);
  } 

  const email = req.body.email;
  const password = req.body.password;
 
  //Find user by Email
  User.findOne({email}).then(user=>{
      if(!user){
          return res.status(404).json({ emailnotfound: "Email not found" });
      }

  // Check password
  bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
          // Create JWT Payload
          const payload = {
              id: user.id,
              name: user.name
          };

          // Sign token
          jwt.sign(
              payload,
              keys.secretOrKey,
              {
               expiresIn: 31556926 
              },
              (err, token) => {
              res.json({
                  success: true,
                  token: "Bearer " + token
              });
              }
          );

          res.json('success');
      }
      else {
       res.status(400).json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});*/


if(process.env.NODE_ENV === 'production') {
   
  app.use(express.static(path.join(__dirname, "client", "build")))

  app.get('*',(req, res) => {
      res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}

