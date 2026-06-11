require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Research = require('../models/Research');

const projects = [
  {
    title: 'PROSE: PRObabilistic Symbolic Explainer',
    description: 'Final year research project focusing on probabilistic symbolic explanation methods.',
    technologies: ['Python', 'Probabilistic Modeling', 'Symbolic Logic'],
    features: ['Probabilistic explanations', 'Symbolic reasoning'],
    order: 1
  },
  {
    title: 'NER Pipeline Comparison',
    description: 'A comprehensive study of tokenization (BPE, WordPiece) and embedding methods (BERT, ELMo, Word2Vec) for Named Entity Recognition using BiLSTM-CRF.',
    technologies: ['Python', 'BERT', 'ELMo', 'Word2Vec', 'BiLSTM-CRF', 'PyTorch'],
    features: ['Tokenization comparison', 'Embedding analysis', 'Sequence labeling'],
    githubLink: 'https://github.com/BhanukaJanappriya',
    order: 2
  },
  {
    title: 'RAG-based Customer Support Chatbot',
    description: 'A fully local chatbot using Llama 3.2, LangChain, and ChromaDB with FastAPI and Streamlit, featuring TTS and conversation memory.',
    technologies: ['Llama 3.2', 'LangChain', 'ChromaDB', 'FastAPI', 'Streamlit', 'Python'],
    features: ['Local RAG', 'Text-to-Speech', 'Conversation Memory'],
    githubLink: 'https://github.com/BhanukaJanappriya',
    order: 3
  },
  {
    title: 'Financial AI Agent',
    description: 'A Python-based AI agent for financial analysis.',
    technologies: ['Python', 'AI Agents', 'Financial Analysis'],
    githubLink: 'https://github.com/BhanukaJanappriya',
    order: 4
  },
  {
    title: 'SoulCare',
    description: 'A TypeScript-based project focused on healthcare or wellness.',
    technologies: ['TypeScript', 'React', 'Node.js'],
    githubLink: 'https://github.com/BhanukaJanappriya',
    order: 5
  },
  {
    title: 'Tea Leaf Disease Classification',
    description: 'A machine learning project using Jupyter Notebooks for agricultural image processing.',
    technologies: ['Python', 'Machine Learning', 'Computer Vision', 'Jupyter'],
    order: 6
  }
];

const skills = [
  { name: 'Python', category: 'Programming Languages', icon: 'SiPython' },
  { name: 'Java', category: 'Programming Languages', icon: 'SiJava' },
  { name: 'JavaScript', category: 'Programming Languages', icon: 'SiJavascript' },
  { name: 'TypeScript', category: 'Programming Languages', icon: 'SiTypescript' },
  { name: 'C++', category: 'Programming Languages', icon: 'SiCplusplus' },
  { name: 'React', category: 'Frontend', icon: 'SiReact' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'SiTailwindcss' },
  { name: 'Node.js', category: 'Backend', icon: 'SiNodedotjs' },
  { name: 'Django', category: 'Backend', icon: 'SiDjango' },
  { name: 'FastAPI', category: 'Backend', icon: 'SiFastapi' },
  { name: 'PostgreSQL', category: 'Databases', icon: 'SiPostgresql' },
  { name: 'MongoDB', category: 'Databases', icon: 'SiMongodb' },
  { name: 'MySQL', category: 'Databases', icon: 'SiMysql' },
  { name: 'LangChain', category: 'AI/ML', icon: 'SiLangchain' },
  { name: 'Git', category: 'Version Control', icon: 'SiGit' },
  { name: 'Linux', category: 'Tools', icon: 'SiLinux' },
  { name: 'Arduino', category: 'Tools', icon: 'SiArduino' },
  { name: 'Figma', category: 'UI/UX', icon: 'SiFigma' },
  { name: 'Adobe Photoshop', category: 'UI/UX', icon: 'SiAdobephotoshop' }
];

const experiences = [
  {
    title: 'Computer Science Undergraduate',
    company: 'University of Peradeniya',
    location: 'Sri Lanka',
    startDate: '2021',
    endDate: 'Present',
    description: ['Focusing on software development, image processing, and problem-solving.'],
    type: 'Technical Position'
  },
  {
    title: 'Adobe Stock Contributor & Graphic Designer',
    company: 'Freelance',
    startDate: '2020',
    endDate: 'Present',
    description: ['Creating and contributing high-quality digital assets and graphic designs.'],
    type: 'Freelance'
  }
];

const research = [
  {
    title: 'PROSE: PRObabilistic Symbolic Explainer',
    summary: 'Final year research project exploring probabilistic and symbolic methods for AI explainability.',
    technologies: ['Python', 'Machine Learning', 'Probabilistic Programming'],
    status: 'In Progress',
    focusAreas: ['Explainable AI', 'Symbolic Reasoning', 'Probabilistic Graphical Models']
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    await Project.deleteMany();
    await Skill.deleteMany();
    await Experience.deleteMany();
    await Research.deleteMany();

    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    await Experience.insertMany(experiences);
    await Research.insertMany(research);

    console.log('Data Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDB();
