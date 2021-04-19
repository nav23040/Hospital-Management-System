const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pendingAppointment = new Schema({
    name: String,
    age: Number,
    specialization: String,
    gender: { type: String },
    email: String,
    Doctor_Reg_ID: { type: String },
    app_date_time: { type: Date, required: true },
    app_day: { type: String}
    
});

module.exports = mongoose.model("PendingAppointments", pendingAppointment);
