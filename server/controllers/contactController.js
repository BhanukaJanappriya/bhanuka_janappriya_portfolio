const Message = require('../models/Message');
const nodemailer = require('nodemailer');

// @desc    Send a message and save to DB
// @route   POST /api/contact
// @access  Public
const sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    // Send Email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: 'bhanukajanappriya2001@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Note: We don't await email to avoid delaying the response, 
    // but in production you might want to handle failures.
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).json({
      success: true,
      data: newMessage,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error: Could not send message',
    });
  }
};

module.exports = { sendMessage };
