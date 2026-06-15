export const fallbackProjects = [
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

export const fallbackSkills = [
  // Programming Languages
  { name: 'Python', category: 'Programming Languages', icon: 'SiPython', color: '#3776AB' },
  { name: 'Java', category: 'Programming Languages', icon: 'SiJava', color: '#007396' },
  { name: 'JavaScript', category: 'Programming Languages', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Programming Languages', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'C', category: 'Programming Languages', icon: 'SiC', color: '#A8B9CC' },
  { name: 'C++', category: 'Programming Languages', icon: 'SiCplusplus', color: '#00599C' },
  { name: 'SQL', category: 'Programming Languages', icon: 'SiPostgresql', color: '#4169E1' },
  
  // Frontend
  { name: 'React', category: 'Frontend', icon: 'SiReact', color: '#61DAFB' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'SiTailwindcss', color: '#06B6D4' },
  { name: 'HTML5', category: 'Frontend', icon: 'SiHtml5', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', icon: 'SiCss3', color: '#1572B6' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'SiNodedotjs', color: '#339933' },
  { name: 'Express.js', category: 'Backend', icon: 'SiExpress', color: '#000000' },
  { name: 'Django', category: 'Backend', icon: 'SiDjango', color: '#092E20' },
  { name: 'FastAPI', category: 'Backend', icon: 'SiFastapi', color: '#05998B' },
  
  // AI/ML
  { name: 'LangChain', category: 'AI/ML', icon: 'SiLangchain', color: '#1C3C3C' },
  { name: 'PyTorch', category: 'AI/ML', icon: 'SiPytorch', color: '#EE4C2C' },
  { name: 'OpenCV', category: 'AI/ML', icon: 'SiOpencv', color: '#5C3EE8' },
  { name: 'Hugging Face', category: 'AI/ML', icon: 'SiHuggingface', color: '#FFD21E' },
  
  // Databases
  { name: 'MongoDB', category: 'Databases', icon: 'SiMongodb', color: '#47A248' },
  { name: 'PostgreSQL', category: 'Databases', icon: 'SiPostgresql', color: '#4169E1' },
  { name: 'MySQL', category: 'Databases', icon: 'SiMysql', color: '#4479A1' },
  
  // Tools & UI/UX
  { name: 'Git', category: 'Tools', icon: 'SiGit', color: '#F05032' },
  { name: 'Linux', category: 'Tools', icon: 'SiLinux', color: '#FCC624' },
  { name: 'Arduino', category: 'Tools', icon: 'SiArduino', color: '#00979D' },
  { name: 'Docker', category: 'Tools', icon: 'SiDocker', color: '#2496ED' },
  { name: 'Onshape', category: 'Tools', icon: 'SiOnshape', color: '#0A85EA' },
  { name: 'CapCut', category: 'Tools', icon: 'SiCapcut', color: '#25F4EE' },
  { name: 'Microsoft Office', category: 'Tools', icon: 'SiMicrosoftoffice', color: '#D83B01' },
  { name: 'Microsoft Excel', category: 'Tools', icon: 'SiMicrosoftexcel', color: '#107C41' },
  { name: 'Microsoft PowerPoint', category: 'Tools', icon: 'SiMicrosoftpowerpoint', color: '#C43E1C' },
  { name: 'Figma', category: 'UI/UX', icon: 'SiFigma', color: '#F24E1E' },
  { name: 'Canva', category: 'UI/UX', icon: 'SiCanva', color: '#00C4CC' },
  { name: 'Adobe Photoshop', category: 'UI/UX', icon: 'SiAdobephotoshop', color: '#31A8FF' },
  { name: 'Adobe Illustrator', category: 'UI/UX', icon: 'SiAdobeillustrator', color: '#FF9A00' }
];

export const fallbackExperience = [
  {
    title: 'Junior Treasurer',
    company: 'Computer Society University of Peradeniya (CSUP)',
    location: 'University of Peradeniya · On-site',
    startDate: 'Jan 2026',
    endDate: 'Present',
    description: [
      'Manage the financial budget, funds allocation, and accounting records for all society events and workshops.',
      'Coordinate with executive committee members to ensure transparent resource allocation and financial planning.',
      'Collaborate on project management and human resources tasks to drive successful event executions.'
    ],
    skills: ['Human Resources (HR)', 'Project Management', 'Finance & Budgeting'],
    type: 'Society Involvement'
  },
  {
    title: 'Public Relations Officer',
    company: 'Computer Society University of Peradeniya (CSUP)',
    location: 'University of Peradeniya · On-site',
    startDate: 'Jan 2025',
    endDate: 'Feb 2026',
    description: [
      'Spearheaded PR campaigns, public announcements, and brand image management for the society.',
      'Fostered relationships with external stakeholders, industry partners, and media organizations.',
      'Designed outreach strategies to improve student participation and event registrations.'
    ],
    skills: ['Management', 'Public Relations', 'Communication'],
    type: 'Society Involvement'
  },
  {
    title: 'Social Media Manager',
    company: 'Computer Society University of Peradeniya (CSUP)',
    location: 'University of Peradeniya · On-site',
    startDate: 'Jun 2025',
    endDate: 'Jan 2026',
    description: [
      'Curated visually compelling content and managed all official social media platforms for CSUP.',
      'Monitored social media metrics and user engagement to iterate on content distribution strategies.',
      'Created digital graphics and copy promoting society initiatives, hackathons, and webinars.'
    ],
    skills: ['Management', 'Social Media', 'Content Creation', 'Digital Marketing'],
    type: 'Society Involvement'
  },
  {
    title: 'Web Developer',
    company: 'Society of Industrial Relations and Entrepreneurship Development (SIRED) - University of Peradeniya',
    location: 'University of Peradeniya · On-site',
    startDate: 'Jan 2025',
    endDate: 'Jan 2026',
    description: [
      'Designed, built, and maintained web systems for the society using modern web technologies.',
      'Awarded the Certificate of Appreciation at AGM 2026 for outstanding commitment to web development tasks.',
      'Optimized site reliability, responsiveness, and UI aesthetics for society landing pages and event forms.'
    ],
    skills: ['Web Design', 'Web Development', 'UI/UX Design'],
    type: 'Society Involvement'
  },
  {
    title: 'Member',
    company: 'Society of Industrial Relations and Entrepreneurship Development (SIRED) - University of Peradeniya',
    location: 'University of Peradeniya · On-site',
    startDate: 'Jan 2024',
    endDate: 'Dec 2024',
    description: [
      'Actively participated in organizing entrepreneurship development programs and networking events.',
      'Collaborated with corporate partners to bridge the gap between academia and industrial relations.'
    ],
    skills: ['Teamwork', 'Communication', 'Event Coordination'],
    type: 'Society Involvement'
  },
  {
    title: 'Chairperson of Product Designing Course',
    company: 'We Lead - Career Skills Society of University of Peradeniya',
    location: 'University of Peradeniya · On-site',
    startDate: 'Oct 2024',
    endDate: 'Jan 2025',
    description: [
      'Led the planning and execution of an innovative Product Designing Workshop focusing on IoT design, 3D printing, circuit design, and PCB design.',
      'Coordinated with industry experts to formulate a comprehensive curriculum and managed event logistics.',
      'Spearheaded marketing efforts to attract a diverse student group and fostered hands-on learning experiences.',
      'Fostered students\' academic and professional growth through feedback loops and technical skill development.'
    ],
    skills: ['Creativity Skills', 'Problem Solving', 'Leadership', 'Project Management'],
    type: 'Society Involvement'
  },
  {
    title: 'Committee Member',
    company: 'DataEx - Data Science Society of University of Peradeniya',
    location: 'University of Peradeniya · On-site',
    startDate: 'Jan 2024',
    endDate: 'Jan 2025',
    description: [
      'Contributed to organizing data science workshops, webinars, and promotional campaigns.',
      'Designed posters and social media marketing graphics using Adobe Illustrator and Photoshop.',
      'Collaborated on membership recruitment and student engagement programs to expand the society\'s reach.'
    ],
    skills: ['Poster Design', 'Adobe Illustrator', 'Adobe Photoshop'],
    type: 'Society Involvement'
  },
  {
    title: 'Graphic Designer',
    company: 'Society of Industrial Relations and Entrepreneurship Development (SIRED) - University of Peradeniya',
    location: 'University of Peradeniya · Hybrid',
    startDate: 'Sep 2023',
    endDate: 'Nov 2023',
    description: [
      'Responsible for designing all promotional materials, visual aids, and presentation slides for the ALLROUNDER Phase 4 workshop.',
      'Created the official thank you cover image and other graphics to maintain a consistent aesthetic theme.',
      'Worked closely with workshop facilitators to explain Adobe Illustrator tools visually for beginners.'
    ],
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'Graphic Design'],
    type: 'Society Involvement'
  },
  {
    title: 'Chairperson of Allrounder Phase 4',
    company: 'Society of Industrial Relations and Entrepreneurship Development (SIRED) - University of Peradeniya',
    location: 'University of Peradeniya · Hybrid',
    startDate: 'Sep 2023',
    endDate: 'Nov 2023',
    description: [
      'Led the planning, resource coordination, and execution of the ALLROUNDER Phase 4 Adobe Illustrator beginners workshop.',
      'Coordinated with industry instructors to structure a hands-on learning syllabus covering design principles.',
      'Managed registration logistics, student mentorship, and feedback loops to ensure high training quality.'
    ],
    skills: ['Leadership', 'Management', 'Project Planning'],
    type: 'Society Involvement'
  },
  {
    title: 'Undergraduate Student',
    company: 'University of Peradeniya',
    location: 'Colombo, Western Province, Sri Lanka',
    startDate: 'Oct 2021',
    endDate: 'Present',
    description: [
      'Pursuing a Bachelor of Science degree, specializing in Computer Science, Software Engineering, and Artificial Intelligence.',
      'Developed expertise in Leadership, Excel Dashboards, Probabilistic Modeling, and High-Performance Computing.'
    ],
    skills: ['Leadership', 'Excel Dashboards', 'Probabilistic Modeling', 'Software Engineering'],
    type: 'Technical Position'
  },
  {
    title: 'Adobe Stock Contributor & Graphic Designer',
    company: 'Adobe Stock',
    location: 'Remote',
    startDate: '2020',
    endDate: 'Present',
    description: [
      'Specializing in visual identity, UI/UX, and high-quality graphic asset creation.',
      'Actively contributing to a global digital marketplace with professional-grade designs.'
    ],
    skills: ['Vector Illustration', 'Graphic Asset Creation', 'Adobe Illustrator'],
    type: 'Freelance'
  },
  {
    title: 'Competitive Chess Player',
    company: 'Sports & Strategy',
    location: 'Sri Lanka',
    startDate: '2015',
    endDate: 'Present',
    description: [
      'Applying analytical thinking and strategic planning skills in competitive environments.',
      'Demonstrating disciplined problem-solving and focus through tournament play.'
    ],
    skills: ['Strategic Planning', 'Critical Thinking', 'Problem Solving'],
    type: 'Society Involvement'
  }
];

export const fallbackResearch = [
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

export const fallbackCertifications = [
  {
    title: 'DevOps Foundations',
    issuer: 'LinkedIn',
    date: 'Jul 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['DevOps'],
    order: 1
  },
  {
    title: 'Introduction to Career Skills in Software Development',
    issuer: 'LinkedIn',
    date: 'Jul 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Career Management', 'Management', 'Software Development'],
    order: 2
  },
  {
    title: 'Learning Docker',
    issuer: 'LinkedIn',
    date: 'Jul 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Docker Products'],
    order: 3
  },
  {
    title: 'Learning the OWASP Top 10',
    issuer: 'LinkedIn',
    date: 'Jul 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Web Application Security', 'OWASP'],
    order: 4
  },
  {
    title: 'Leveraging AI for Governance, Risk, and Compliance',
    issuer: 'LinkedIn',
    date: 'Jul 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Governance, Risk, and Compliance (GRC)', 'AI Governance'],
    order: 5
  },
  {
    title: 'Boosting Your Time Management with AI Tools',
    issuer: 'LinkedIn',
    date: 'Jun 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Time Management', 'AI Productivity'],
    order: 6
  },
  {
    title: 'Artificial Intelligence and Application Security',
    issuer: 'LinkedIn',
    date: 'Jun 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Application Security', 'Artificial Intelligence (AI)'],
    order: 7
  },
  {
    title: 'How to Grow your Creator Business with Experiments Nano Tips',
    issuer: 'LinkedIn',
    date: 'Jun 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Personal Branding', 'Social Media Content Creation'],
    order: 8
  },
  {
    title: 'Facebook Marketing Nano Tips for Beginners',
    issuer: 'LinkedIn',
    date: 'Jun 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Facebook Marketing', 'Social Media Marketing'],
    order: 9
  },
  {
    title: 'Introductory Computer Programming (Python)',
    issuer: 'Information Technology Center (ITC)',
    date: 'Mar 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Problem Solving', 'Python (Programming Language)'],
    order: 10
  },
  {
    title: 'Advanced Prompt Engineering Techniques',
    issuer: 'LinkedIn',
    date: 'Jun 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Prompt Engineering', 'Artificial Intelligence (AI)'],
    order: 11
  },
  {
    title: 'Prompt Engineering: How to Talk to the AIs',
    issuer: 'LinkedIn',
    date: 'Jun 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Large Language Models (LLM)', 'Prompt Engineering'],
    order: 12
  },
  {
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn',
    date: 'Jun 2025',
    link: 'https://www.linkedin.com/in/bhanuka-janappriya-nambuwasam/details/certifications/',
    skills: ['Generative AI', 'Generative AI Tools'],
    order: 13
  },
  {
    title: 'GitHub Pull Shark (x2)',
    issuer: 'GitHub',
    date: '2024',
    link: 'https://github.com/BhanukaJanappriya',
    skills: ['Open Source', 'Git'],
    order: 14
  }
];
