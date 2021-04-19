const express = require("express");
const router = express.Router();
const verifyToken = require("../auth/verifytoken");
const pendingAppointment = require("../models/Pending_Appointment");
const Confirmed_Appointment = require("../models/Confirmed_Appointment");
const Doctor = require("../models/Doctor");
const Pending_Appointment = require("../models/Pending_Appointment");


const app = router;

app.post('/book_appointment', verifyToken, (req, res) => {
    const app_day = req.body.app_day;
    const app_time = req.body.app_date_time;
    Pending_Appointment.findOne({ app_date_time: Date.parse(req.body.app_date_time) }).then(appointment => {

        if (appointment) {
            return res.status(400).json("Appointment Exists");
        }
        else {
            const new_appointment = new Pending_Appointment({
                name: req.body.name,
                age: req.body.age,
                specialization: req.body.specialization,
                gender: req.body.gender,
                email: req.body.email,
                Doctor_Reg_ID: req.body.Doctor_Reg_ID,
                app_date_time: Date.parse(req.body.app_date_time),
                app_day: req.body.app_day
            })
            new_appointment.save()
                .then(user => res.json('success'))
                .catch(err => res.json('Invalid'));

        }
    })
})

app.get('/pending_appointments', verifyToken, async (req, res) => {
    Doctor.findById(req.userId, { password: 0 }, function (err, doctor) {
        if (err) return res.status(500).send("There was a problem finding the doctor.");
        if (!doctor) return res.status(404).send("No doctor found.");
        console.log(doctor.registrationid)
        Pending_Appointment.find({ Doctor_Reg_ID: doctor.registrationid }, function (err, appointments) {
            if (err) return res.status(500).send("There was a problem finding the appointments.");
            if (!appointments) return res.status(404).send("No appointments found.");
            res.status(200).send(appointments);
        })
    });
})

app.post('/confirm_appointment', verifyToken, async (req, res) => {
    Pending_Appointment.findByIdAndDelete(req.body.appointmentid, function (err, appointment) {
        if (err) return res.status(500).send("There was a problem finding the appointment.");
        if (!appointment) return res.status(404).send("No appointment found.");
        console.log(appointment.name);
        const newConfApp = new Confirmed_Appointment({
            name: appointment.name,
            age: appointment.age,
            specialization: appointment.specialization,
            gender: appointment.gender,
            email: appointment.email,
            Doctor_Reg_ID: appointment.Doctor_Reg_ID,
            app_date_time: appointment.app_date_time,
            app_day: appointment.app_day
        })
        newConfApp.save()
        .then(user => res.json('success'))
                .catch(err => res.json('Invalid'));

    })


})

app.get('/confirmed_appointments', verifyToken, async (req, res) => {
    Doctor.findById(req.userId, { password: 0 }, function (err, doctor) {
        if (err) return res.status(500).send("There was a problem finding the doctor.");
        if (!doctor) return res.status(404).send("No doctor found.");
        console.log(doctor.registrationid)
        Confirmed_Appointment.find({ Doctor_Reg_ID: doctor.registrationid }, function (err, appointments) {
            if (err) return res.status(500).send("There was a problem finding the appointments.");
            if (!appointments) return res.status(404).send("No appointments found.");
            res.status(200).send(appointments);
        })
    });
})

module.exports = app;