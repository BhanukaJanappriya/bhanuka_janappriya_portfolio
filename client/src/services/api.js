import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const fetchProjects = () => API.get('/projects');
export const fetchSkills = () => API.get('/skills');
export const fetchExperience = () => API.get('/experience');
export const fetchResearch = () => API.get('/research');
export const fetchCertifications = () => API.get('/certifications');
export const sendMessage = (messageData) => API.post('/contact', messageData);

export default API;
