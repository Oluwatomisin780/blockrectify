const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// POST endpoint for sending emails
app.post('/mail', (req, res) => {
  const { from, to, subject, text } = req.body;

  // Create a SMTP transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Humphreyheather03@gmail.com',
      pass: 'rfkauqbjenvfrafx',
    },
  });

  // Construct email options
  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text,
  };

  // Send mail
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
