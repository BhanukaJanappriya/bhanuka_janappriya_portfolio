const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  startDate: { type: String, required: true },
  endDate: { type: String, default: 'Present' },
  description: [String],
  skills: [String],
  type: { 
    type: String, 
    enum: ['Internship', 'Full-time', 'Volunteer', 'Freelance', 'Technical Position', 'Society Involvement']
  }
});

module.exports = mongoose.model('Experience', experienceSchema);
