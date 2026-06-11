require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Research = require('../models/Research');
const Certification = require('../models/Certification');

const projects = [
  {
    title: 'PROSE: PRObabilistic Symbolic Explainer',
    description: 'Final year research project developing a framework to provide interpretable, symbolic explanations for complex probabilistic models. Focused on bridging the gap between high-performance "black-box" AI and human-understandable logic.',
    technologies: ['Python', 'Probabilistic Modeling', 'Symbolic Logic', 'Explainable AI'],
    features: ['Probabilistic explanations', 'Symbolic reasoning', 'Interpretability framework'],
    order: 1
  },
  {
    title: 'RAG-based Customer Support Chatbot',
    description: 'A robust, fully local chatbot designed for privacy-conscious customer support, featuring advanced NLP capabilities and real-time interactions.',
    technologies: ['Llama 3.2', 'LangChain', 'ChromaDB', 'FastAPI', 'Streamlit', 'Python'],
    features: [
      'Fully local execution for maximum data privacy',
      'SSE streaming for real-time response generation',
      'Integrated Text-to-Speech (TTS) with gender selection',
      'Conversation memory and source citation'
    ],
    githubLink: 'https://github.com/BhanukaJanappriya',
    order: 2
  },
  {
    title: 'NER Pipeline Comparison',
    description: 'A comprehensive study of tokenization (BPE, WordPiece, NLTK) and embedding methods (Word2Vec, GloVe, FastText, ELMo, BERT) for Named Entity Recognition using BiLSTM-CRF.',
    technologies: ['Python', 'BERT', 'ELMo', 'FastText', 'BiLSTM-CRF', 'PyTorch', 'NLTK'],
    features: [
      'Comparative analysis of 5+ embedding techniques',
      'Evaluation of multiple tokenization strategies',
      'Sequence labeling performance benchmarking'
    ],
    githubLink: 'https://github.com/BhanukaJanappriya',
    order: 3
  },
  {
    title: 'Financial AI Agent',
    description: 'An intelligent Python-based agent engineered for financial data analysis and automated decision-making processes.',
    technologies: ['Python', 'AI Agents', 'Financial Analysis', 'Data Mining'],
    githubLink: 'https://github.com/BhanukaJanappriya',
    order: 4
  },
  {
    title: 'Image-Based Turbidity Measurement',
    description: 'An innovative hardware-software integrated system using Arduino and computer vision to measure water quality through real-time image analysis.',
    technologies: ['Arduino', 'C++', 'Python', 'OpenCV', 'Image Processing'],
    features: [
      'Real-time water quality monitoring',
      'Hardware-software integration',
      'Computer vision-based analysis'
    ],
    order: 5
  },
  {
    title: 'Tea Leaf Disease Classification',
    description: 'A machine learning initiative utilizing image processing to identify and categorize diseases in agricultural tea leaves, aiding in crop protection.',
    technologies: ['Python', 'Machine Learning', 'Computer Vision', 'Jupyter'],
    features: ['Image classification', 'Agricultural AI', 'Disease detection'],
    order: 6
  }
];

const skills = [
  // Programming Languages
  { name: 'Python', category: 'Programming Languages', icon: 'SiPython' },
  { name: 'Java', category: 'Programming Languages', icon: 'SiJava' },
  { name: 'JavaScript', category: 'Programming Languages', icon: 'SiJavascript' },
  { name: 'TypeScript', category: 'Programming Languages', icon: 'SiTypescript' },
  { name: 'C', category: 'Programming Languages', icon: 'SiC' },
  { name: 'C++', category: 'Programming Languages', icon: 'SiCplusplus' },
  { name: 'SQL', category: 'Programming Languages', icon: 'SiPostgresql' },
  
  // Frontend
  { name: 'React', category: 'Frontend', icon: 'SiReact' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'SiTailwindcss' },
  { name: 'HTML5', category: 'Frontend', icon: 'SiHtml5' },
  { name: 'CSS3', category: 'Frontend', icon: 'SiCss3' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'SiNodedotjs' },
  { name: 'Express.js', category: 'Backend', icon: 'SiExpress' },
  { name: 'Django', category: 'Backend', icon: 'SiDjango' },
  { name: 'FastAPI', category: 'Backend', icon: 'SiFastapi' },
  
  // AI/ML
  { name: 'LangChain', category: 'AI/ML', icon: 'SiLangchain' },
  { name: 'PyTorch', category: 'AI/ML', icon: 'SiPytorch' },
  { name: 'OpenCV', category: 'AI/ML', icon: 'SiOpencv' },
  { name: 'Hugging Face', category: 'AI/ML', icon: 'SiHuggingface' },
  
  // Databases
  { name: 'MongoDB', category: 'Databases', icon: 'SiMongodb' },
  { name: 'PostgreSQL', category: 'Databases', icon: 'SiPostgresql' },
  { name: 'MySQL', category: 'Databases', icon: 'SiMysql' },
  { name: 'ChromaDB', category: 'Databases', icon: 'SiChroma' },
  
  // Tools & UI/UX
  { name: 'Git', category: 'Version Control', icon: 'SiGit' },
  { name: 'Linux', category: 'Tools', icon: 'SiLinux' },
  { name: 'Arduino', category: 'Tools', icon: 'SiArduino' },
  { name: 'Figma', category: 'UI/UX', icon: 'SiFigma' },
  { name: 'Adobe Photoshop', category: 'UI/UX', icon: 'SiAdobephotoshop' },
  { name: 'Adobe Illustrator', category: 'UI/UX', icon: 'SiAdobeillustrator' }
];

const experiences = [
  {
    title: 'Computer Science Undergraduate',
    company: 'University of Peradeniya',
    location: 'Sri Lanka',
    startDate: '2021',
    endDate: 'Present',
    description: [
      'Specializing in Software Engineering, Artificial Intelligence, and Image Processing.',
      'Maintaining a strong academic focus on probabilistic modeling and high-performance computing.'
    ],
    type: 'Technical Position'
  },
  {
    title: 'Adobe Stock Contributor & Graphic Designer',
    company: 'Adobe Stock',
    startDate: '2020',
    endDate: 'Present',
    description: [
      'Specializing in visual identity, UI/UX, and high-quality graphic asset creation.',
      'Actively contributing to a global digital marketplace with professional-grade designs.'
    ],
    type: 'Freelance'
  },
  {
    title: 'Competitive Chess Player',
    company: 'Sports & Strategy',
    startDate: '2015',
    endDate: 'Present',
    description: [
      'Applying analytical thinking and strategic planning skills in competitive environments.',
      'Demonstrating disciplined problem-solving and focus through tournament play.'
    ],
    type: 'Society Involvement'
  }
];

const research = [
  {
    title: 'PROSE: PRObabilistic Symbolic Explainer',
    summary: 'Developing a novel framework that bridges the gap between complex probabilistic models and human-understandable logic through symbolic explanations.',
    objectives: [
      'Enhance AI interpretability for black-box models.',
      'Develop symbolic reasoning algorithms for probabilistic frameworks.',
      'Bridge complex AI outputs with human-readable logic.'
    ],
    technologies: ['Python', 'Probabilistic Programming', 'Symbolic Logic', 'MLOps'],
    status: 'Ongoing Research',
    focusAreas: ['Explainable AI', 'Symbolic Reasoning', 'AI Interpretability']
  }
];

const certifications = [
  {
    title: 'GitHub Pull Shark (x2)',
    issuer: 'GitHub',
    date: '2024',
    link: 'https://github.com/BhanukaJanappriya'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for enriched seeding...');

    await Project.deleteMany();
    await Skill.deleteMany();
    await Experience.deleteMany();
    await Research.deleteMany();
    await Certification.deleteMany();

    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    await Experience.insertMany(experiences);
    await Research.insertMany(research);
    await Certification.insertMany(certifications);

    console.log('Data Seeded Successfully with Enriched Content!');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDB();
