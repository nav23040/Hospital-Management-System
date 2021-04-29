const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const cors = require('cors');
const User = require("../models/User");
const Diagnosis_Details = require("../models/Diagnosis_Details")
const ConfirmedAppointments = require("../models/Confirmed_Appointment")

const verifyToken = require("../auth/verifytoken");
const Room = require("../models/Room");

const app = router;

app.post('/add_prescription', verifyToken, async (req, res) => {

    await ConfirmedAppointments.findByIdAndDelete(req.body.appointmentid, (err, appointment) => {
        const newPrescription = new Diagnosis_Details({
            patient_name: req.body.patient_name,
            patient_age: req.body.patient_age,
            patient_email: appointment.email,
            patient_age: req.body.age,
            prescription: req.body.prescription,
            gender: req.body.gender,
            symptoms: req.body.symptoms,
            disease: req.body.disease,
            doctor_id: req.body.doctor_id,
            doctor_name: req.body.doctor_name,
            app_date: appointment.app_date,
            app_time: appointment.app_time
        })
        newPrescription.save()
            .then(data => res.json('success'))
            .catch(err => res.json('failure'))
    })
})

app.get('/user_case_history', verifyToken, async (req, res) => {
    User.findById(req.userId, (err, user) => {
        Diagnosis_Details.find({ patient_email: user.email }, (err, prescriptions) => {
            if (err) return res.json("Error in getting diagnosis history")
            res.json(prescriptions);

        })
    })

})

app.post('/all_patients_case_history', verifyToken, async (req, res) => {
    Diagnosis_Details.distinct('patient_email', { doctor_id: req.body.doctor_id }, (err, prescriptions) => {
        if (err) return res.json("Error in getting diagnosis history")
        res.json(prescriptions);
    })
})

app.post('/patient_case_history', verifyToken, async (req, res) => {
    Diagnosis_Details.find({ patient_email: req.body.patient_email }, (err, prescriptions) => {
        if (err) return res.json("Error in getting diagnosis history")
        res.json(prescriptions);

    })
})

module.exports = app;