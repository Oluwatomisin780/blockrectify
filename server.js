const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/mail', (req, res) => {
  const { to, subject, html } = req.body;

  // Replace the following with your email service or SMTP server configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nyshabazz@icloud.com',
      pass: 'Olumhede1605?',
    },
  });

  const mailOptions = {
    from: 'nyshabazz.icloud.com',
    to,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
