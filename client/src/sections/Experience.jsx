import { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Calendar, MapPin, Zap, GraduationCap, 
  Award, Sparkles, Code, Palette, Users, Trophy, 
  LayoutGrid, Clock
} from 'lucide-react';

import logoUop from '../assets/UOP.png';
import logoCsup from '../assets/logo1.png';
import logoSired from '../assets/sired.jpg';

const Experience = () => {
  const { experience, loading } = useData();
  const [viewMode, setViewMode] = useState('grouped'); // 'grouped' or 'timeline'
  const [timelineFilter, setTimelineFilter] = useState('all'); // 'all', 'leadership', 'technical', 'creative'

  // Helper to parse dates for sorting
  const parseDate = (dateStr) => {
    if (!dateStr) return new Date(0);
    if (dateStr.toLowerCase() === 'present') return new Date();
    const parts = dateStr.trim().split(' ');
    if (parts.length === 1) {
      return new Date(parseInt(parts[0]), 0, 1);
    }
    const months = {
      jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
      jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
    };
    const month = months[parts[0].toLowerCase().substring(0, 3)] ?? 0;
    const year = parseInt(parts[1]);
    return new Date(year, month, 1);
  };



  const getCompanyLogo = (companyName, sizeClass = "w-16 h-16") => {
    const name = companyName.toLowerCase();
    let imageSrc = null;
    if (name.includes('computer society') || name.includes('csup')) {
      imageSrc = logoCsup;
    } else if (name.includes('sired') || name.includes('industrial relations')) {
      imageSrc = logoSired;
    } else if (name.includes('university of peradeniya')) {
      imageSrc = logoUop;
    }

    if (imageSrc) {
      return (
        <img 
          src={imageSrc} 
          alt={companyName} 
          className={`${sizeClass} object-cover rounded-2xl border border-slate-200/60 dark:border-white/10 group-hover:border-accent-blue/30 transition-all duration-300 shadow-inner`} 
        />
      );
    }

    const iconSize = sizeClass.includes("w-10") ? 18 : 24;
    return (
      <div className={`${sizeClass} bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center border border-slate-200/60 dark:border-white/10 group-hover:border-accent-blue/30 group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-all duration-300 shadow-inner`}>
        {name.includes('computer society') || name.includes('csup') ? <Users className="text-blue-400" size={iconSize} /> :
         name.includes('sired') || name.includes('industrial relations') ? <Sparkles className="text-amber-400" size={iconSize} /> :
         name.includes('we lead') || name.includes('career skills') ? <Award className="text-emerald-400" size={iconSize} /> :
         name.includes('dataex') || name.includes('data science') ? <Code className="text-purple-400" size={iconSize} /> :
         name.includes('university of peradeniya') ? <GraduationCap className="text-rose-400" size={iconSize} /> :
         name.includes('adobe') ? <Palette className="text-pink-400" size={iconSize} /> :
         name.includes('chess') || name.includes('sports') ? <Trophy className="text-yellow-400" size={iconSize} /> :
         <Briefcase className="text-accent-blue" size={iconSize} />}
      </div>
    );
  };

  // Helper to classify experiences for filtering
  const classifyExperience = (item) => {
    const title = item.title.toLowerCase();
    const skills = (item.skills || []).map(s => s.toLowerCase());
    const type = (item.type || '').toLowerCase();

    const isTech = title.includes('developer') || 
                   title.includes('web') || 
                   title.includes('undergraduate') || 
                   title.includes('data') ||
                   title.includes('designing course') ||
                   skills.some(s => s.includes('web') || s.includes('python') || s.includes('arduino') || s.includes('software') || s.includes('development') || s.includes('coding') || s.includes('pcb') || s.includes('circuit'));

    const isCreative = title.includes('designer') || 
                       title.includes('graphic') || 
                       title.includes('social media') || 
                       title.includes('creative') ||
                       title.includes('illustrator') ||
                       skills.some(s => s.includes('illustrator') || s.includes('photoshop') || s.includes('design') || s.includes('creative') || s.includes('poster') || s.includes('media'));

    const isLeadership = title.includes('treasurer') || 
                         title.includes('officer') || 
                         title.includes('manager') || 
                         title.includes('chairperson') || 
                         title.includes('committee') ||
                         type.includes('society') ||
                         skills.some(s => s.includes('leadership') || s.includes('management') || s.includes('resources'));

    return { isTech, isCreative, isLeadership };
  };

  // Group experiences by company
  const groupedExperiences = useMemo(() => {
    if (!experience || experience.length === 0) return [];
    
    const groups = {};
    experience.forEach(item => {
      const company = item.company;
      if (!groups[company]) {
        groups[company] = {
          company,
          roles: [],
        };
      }
      groups[company].roles.push(item);
    });

    // Sort roles inside each company newest first
    Object.keys(groups).forEach(company => {
      groups[company].roles.sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));
      groups[company].latestStartDate = groups[company].roles[0].startDate;
    });

    // Sort companies by latest role's start date
    return Object.values(groups).sort((a, b) => parseDate(b.latestStartDate) - parseDate(a.latestStartDate));
  }, [experience]);

  // Filtered timeline experiences
  const filteredTimelineExperiences = useMemo(() => {
    if (!experience || experience.length === 0) return [];

    let items = [...experience];
    
    // Sort chronologically newest first
    items.sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));

    if (timelineFilter === 'all') return items;

    return items.filter(item => {
      const { isTech, isCreative, isLeadership } = classifyExperience(item);
      if (timelineFilter === 'leadership') return isLeadership;
      if (timelineFilter === 'technical') return isTech;
      if (timelineFilter === 'creative') return isCreative;
      return true;
    });
  }, [experience, timelineFilter]);

  if (loading || !experience || experience.length === 0) return null;

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 dark:from-black dark:via-dark-soft dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Decorative radial gradients for premium feel */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 dark:from-white dark:via-white dark:to-white/40 bg-clip-text text-transparent">
            University & Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-accent-gray max-w-2xl mx-auto text-base md:text-lg mb-8 leading-relaxed font-medium">
            A comprehensive look at my leadership roles, technical development, and creative contributions during my academic journey.
          </p>

          {/* View Toggle */}
          <div className="inline-flex p-1.5 bg-slate-100/80 dark:bg-dark-card/60 backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-2xl relative shadow-2xl">
            <button
              onClick={() => setViewMode('grouped')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all relative z-10 ${
                viewMode === 'grouped' ? 'text-white' : 'text-slate-500 dark:text-accent-gray hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              <LayoutGrid size={16} />
              <span>Company View</span>
              {viewMode === 'grouped' && (
                <motion.div
                  layoutId="activeViewTab"
                  className="absolute inset-0 bg-accent-blue rounded-xl -z-10 shadow-[0_4px_20px_rgba(0,113,227,0.3)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all relative z-10 ${
                viewMode === 'timeline' ? 'text-white' : 'text-slate-500 dark:text-accent-gray hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              <Clock size={16} />
              <span>Timeline View</span>
              {viewMode === 'timeline' && (
                <motion.div
                  layoutId="activeViewTab"
                  className="absolute inset-0 bg-accent-blue rounded-xl -z-10 shadow-[0_4px_20px_rgba(0,113,227,0.3)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </div>
        </motion.div>

        {/* --- COMPANY GROUPED VIEW --- */}
        {viewMode === 'grouped' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-12"
          >
            {groupedExperiences.map((companyGroup, index) => (
              <motion.div
                key={companyGroup.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.4) }}
                className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:border-slate-300 dark:hover:border-white/15 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* Subtle gradient glow in card corner */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-slate-950/2 dark:bg-white/2 rounded-full blur-2xl group-hover:bg-accent-blue/5 transition-all duration-500" />

                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200/50 dark:border-white/5 mb-8">
                  <div className="flex items-center space-x-5">
                    {getCompanyLogo(companyGroup.company)}
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white group-hover:text-accent-blue transition-colors duration-300">
                        {companyGroup.company}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-slate-500 dark:text-accent-gray text-sm font-semibold">
                        {companyGroup.roles[0].location && (
                          <span className="flex items-center">
                            <MapPin size={14} className="mr-1 text-slate-400 dark:text-white/40" />
                            {companyGroup.roles[0].location}
                          </span>
                        )}
                        <span className="text-slate-300 dark:text-white/20">•</span>
                        <span className="text-accent-blue/90 uppercase tracking-widest text-xs font-black">
                          {companyGroup.roles[0].type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-slate-600 dark:text-accent-gray text-xs md:text-sm font-black uppercase tracking-widest bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-xl border border-slate-200/50 dark:border-white/5 self-start md:self-auto">
                    {companyGroup.roles[companyGroup.roles.length - 1].startDate} — {companyGroup.roles[0].endDate}
                  </div>
                </div>

                {/* Roles list within company */}
                <div className="relative pl-6 md:pl-10 space-y-12">
                  {/* Internal vertical line linking roles */}
                  {companyGroup.roles.length > 1 && (
                    <div className="absolute left-2.5 md:left-4.5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent-blue/40 via-slate-200 dark:via-white/5 to-slate-200 dark:to-white/5" />
                  )}

                  {companyGroup.roles.map((role, rIndex) => (
                    <div key={role._id || rIndex} className="relative">
                      {/* Timeline Node dot */}
                      <div className="absolute -left-[29px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-slate-50 dark:bg-black border-2 border-accent-blue group-hover:border-slate-800 dark:group-hover:border-white transition-all shadow-[0_0_10px_rgba(0,113,227,0.5)] z-10" />
                      
                      <div className="flex flex-col md:flex-row md:items-start gap-4 justify-between mb-4">
                        <div>
                          <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white tracking-wide">
                            {role.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 dark:text-accent-gray font-semibold mt-0.5">
                            <Calendar size={13} className="opacity-60" />
                            <span>{role.startDate} — {role.endDate}</span>
                          </div>
                        </div>
                      </div>

                      {/* Role Descriptions */}
                      <div className="space-y-3 mb-5 max-w-4xl">
                        {role.description.map((desc, dIndex) => (
                          <div key={dIndex} className="flex items-start text-sm md:text-base text-slate-600 dark:text-accent-gray leading-relaxed font-medium">
                            <Zap size={14} className="text-accent-blue mr-3 mt-1.5 flex-shrink-0 opacity-60" />
                            <p className="flex-1">{desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      {role.skills && role.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {role.skills.map((skill, sIndex) => (
                            <span 
                              key={sIndex} 
                              className="text-xs font-bold px-3 py-1.5 bg-slate-100 hover:bg-accent-blue/10 border border-slate-200 hover:border-accent-blue/30 text-slate-600 dark:bg-white/5 dark:border-white/5 dark:text-accent-gray dark:hover:text-white rounded-lg transition-all duration-200 hover:text-accent-blue dark:hover:text-white"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* --- CHRONOLOGICAL TIMELINE VIEW --- */}
        {viewMode === 'timeline' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Filter Bar */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {['all', 'leadership', 'technical', 'creative'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimelineFilter(filter)}
                  className={`text-xs md:text-sm font-semibold capitalize px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    timelineFilter === filter
                      ? 'bg-accent-blue text-white border-accent-blue shadow-xl scale-105'
                      : 'bg-slate-100 dark:bg-dark-card/50 text-slate-600 dark:text-accent-gray border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-800 dark:hover:text-white'
                  }`}
                >
                  {filter === 'all' ? 'All Roles' : filter === 'tech' ? 'Technical & Web' : filter}
                </button>
              ))}
            </div>

            {/* Timeline Wrapper */}
            <div className="relative border-l border-slate-200 dark:border-white/10 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
              <AnimatePresence mode="popLayout">
                {filteredTimelineExperiences.map((item, index) => (
                  <motion.div
                    key={item._id || `${item.title}-${index}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="relative group"
                  >
                    {/* Glowing Timeline Marker */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-slate-50 dark:bg-black border-2 border-accent-blue group-hover:bg-accent-blue group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(0,113,227,0.4)] z-10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Card container */}
                    <div className="glass p-8 rounded-[2rem] hover:border-accent-blue/30 transition-all duration-300 shadow-sm hover:shadow-xl">
                      
                      {/* Meta information row */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-accent-blue text-xs font-black uppercase tracking-widest">
                          <Calendar size={13} />
                          <span>{item.startDate} — {item.endDate}</span>
                        </div>
                        
                        <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-slate-500 dark:text-accent-gray px-3 py-1 rounded-md">
                          {item.type}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-800 dark:text-white group-hover:text-accent-blue transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center space-x-3 mb-6">
                        {getCompanyLogo(item.company, "w-10 h-10")}
                        <div>
                          <div className="text-slate-800 dark:text-white font-bold text-sm md:text-base leading-tight">
                            {item.company}
                          </div>
                          {item.location && (
                            <span className="flex items-center text-xs text-slate-500 dark:text-accent-gray/80 mt-0.5">
                              <MapPin size={11} className="mr-1 text-slate-400 dark:text-white/30" />
                              {item.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bullet descriptions */}
                      <div className="space-y-3 mb-6">
                        {item.description.map((desc, dIndex) => (
                          <div key={dIndex} className="flex items-start text-sm md:text-base text-slate-600 dark:text-accent-gray leading-relaxed font-medium">
                            <Zap size={14} className="text-accent-blue mr-3 mt-1.5 flex-shrink-0 opacity-60" />
                            <p className="flex-1">{desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Skills tags */}
                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/50 dark:border-white/5">
                          {item.skills.map((skill, sIndex) => (
                            <span 
                              key={sIndex} 
                              className="text-xs font-bold px-3 py-1.5 bg-slate-100 hover:bg-accent-blue/10 border border-slate-200 hover:border-accent-blue/30 text-slate-600 dark:bg-white/5 dark:border-white/5 dark:text-accent-gray dark:hover:text-white rounded-lg transition-all duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredTimelineExperiences.length === 0 && (
                <div className="text-center py-12 text-slate-500 dark:text-accent-gray font-semibold">
                  No experiences match this filter.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;
