const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Programming Languages', 'Frontend', 'Backend', 'Databases', 'Frameworks', 'AI/ML', 'Tools', 'Version Control', 'Cloud', 'DevOps', 'UI/UX']
  },
  icon: String, // String reference to a React Icon
  color: String, // Hex color code for the brand
  level: { type: String, default: 'Intermediate' }
});

module.exports = mongoose.model('Skill', skillSchema);
