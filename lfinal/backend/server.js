const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

//API Endpoints:
//Create Appointment:
app.post('/api/appointments', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Get Appointments:
app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).send(appointments);
  } catch (error) {
    res.status(400).send(error);
  }
});


//Register for Appointment:
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

app.post('/api/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();

    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: 'Appointment Registration Confirmation',
      text: `You have successfully registered for the appointment: ${req.body.appointmentId}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Registration successful and email sent');
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
