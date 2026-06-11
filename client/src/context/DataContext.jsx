import React, { createContext, useContext, useEffect, useState } from 'react';
import * as api from '../services/api';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [research, setResearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [projRes, skillRes, expRes, resRes] = await Promise.all([
          api.fetchProjects(),
          api.fetchSkills(),
          api.fetchExperience(),
          api.fetchResearch(),
        ]);

        setProjects(projRes.data);
        setSkills(skillRes.data);
        setExperience(expRes.data);
        setResearch(resRes.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load portfolio data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ projects, skills, experience, research, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
