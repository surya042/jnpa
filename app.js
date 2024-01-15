const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/sendOTP', (req, res) => {
    // OTP generation and sending logic
});
app.post('/submitForm', (req, res) => {
    // Form submission and data storage logic
});
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Replace with your email service
    auth: {
        user: 'suryars042@gmail.com', // Your email address
        pass: 'surya@54321', // Your email password
    },
});
