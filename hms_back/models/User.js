const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema=new Schema({
        first_name: String,
        last_name: String,
        father_name: String,
        mother_name: String,
        gender: { type: String },
        date_of_birth: { type: Date, trim: true },
    profile_role: { type: String },
        address: String,
        mobile_number: String,
        father_phone_number: String,
    email: { type: String, unique: true }, // unique id
    password: String,
});

module.exports=mongoose.model("Users", userSchema);
