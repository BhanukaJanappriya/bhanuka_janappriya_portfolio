import React, { createContext, useContext, useEffect, useState } from 'react';
import * as api from '../services/api';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [research, setResearch] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [projRes, skillRes, expRes, resRes, certRes] = await Promise.all([
          api.fetchProjects(),
          api.fetchSkills(),
          api.fetchExperience(),
          api.fetchResearch(),
          api.fetchCertifications(),
        ]);

        setProjects(projRes.data);
        setSkills(skillRes.data);
        setExperience(expRes.data);
        setResearch(resRes.data);
        setCertifications(certRes.data);
        setError(null);
      } catch (err) {
        console.warn('API connection failed. Falling back to local static dataset.', err);
        try {
          const fallback = await import('../utils/fallbackData');
          setProjects(fallback.fallbackProjects);
          setSkills(fallback.fallbackSkills);
          setExperience(fallback.fallbackExperience);
          setResearch(fallback.fallbackResearch);
          setCertifications(fallback.fallbackCertifications);
          setError(null);
        } catch (fallbackErr) {
          console.error('Fallback load failed:', fallbackErr);
          setError('Failed to load portfolio data. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ projects, skills, experience, research, certifications, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
