const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Research = require('../models/Research');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getExperience = async (req, res) => {
  try {
    const experience = await Experience.find().sort({ startDate: -1 });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getResearch = async (req, res) => {
  try {
    const research = await Research.find();
    res.json(research);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProjects,
  getSkills,
  getExperience,
  getResearch
};
