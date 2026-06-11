const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  objectives: [String],
  technologies: [String],
  status: String,
  publications: [String],
  supervisor: String,
  focusAreas: [String]
});

module.exports = mongoose.model('Research', researchSchema);
