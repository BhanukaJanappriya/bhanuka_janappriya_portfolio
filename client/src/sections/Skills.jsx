import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiPostgresql,
  SiReact, SiTailwindcss, SiHtml5, SiNodedotjs, SiExpress,
  SiDjango, SiFastapi, SiLangchain, SiPytorch, SiOpencv, SiHuggingface,
  SiMongodb, SiMysql, SiGit, SiLinux, SiArduino, SiFigma, SiCss,
  SiDocker, SiCanva
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';
import { DiCss3, DiPhotoshop, DiIllustrator } from 'react-icons/di';

// Custom SVG components for icons not present in react-icons
const SiOnshape = ({ size = 28, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path d="M12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 2.5a4 4 0 110 8 4 4 0 010-8z" fill="white" />
    <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="white" opacity="0.6" />
  </svg>
);

const SiCapcut = ({ size = 28, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M7.41 4.5A3.91 3.91 0 003.5 8.41v7.18c0 2.16 1.75 3.91 3.91 3.91h9.18c2.16 0 3.91-1.75 3.91-3.91V8.41c0-2.16-1.75-3.91-3.91-3.91H7.41zm.83 3.9h2.36l1.8 3.6-1.8 3.6H8.24l1.8-3.6H7.68V8.4h.56zm5.12 0h2.36l-1.8 3.6 1.8 3.6h-2.36l-1.8-3.6 1.8-3.6z" />
  </svg>
);

const SiMicrosoftoffice = ({ size = 28, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12.5 2.5L2 6.8v10.4l10.5 4.3 9.5-4.3V6.8L12.5 2.5z" fill="currentColor" opacity="0.1" />
    <path d="M12.5 2.5L2 6.8l10.5 4.3 9.5-4.3-9.5-4.3z" fill="#E33E10" />
    <path d="M2 6.8v10.4l10.5 4.3V11.1L2 6.8z" fill="#F25F22" />
    <path d="M22 6.8v10.4l-10.5 4.3V11.1L22 6.8z" fill="#B72E00" />
  </svg>
);

const SiMicrosoftexcel = ({ size = 28, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <rect x="5" y="3" width="14" height="18" rx="2" fill="currentColor" opacity="0.15" />
    <rect x="9" y="3" width="10" height="18" rx="1.5" fill="currentColor" />
    <path d="M11 7h6M11 11h6M11 15h6M13 7v10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    <rect x="3" y="6" width="7" height="12" rx="1" fill="#107C41" />
    <path d="M4.5 9l4 6M8.5 9l-4 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SiMicrosoftpowerpoint = ({ size = 28, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <rect x="5" y="3" width="14" height="18" rx="2" fill="currentColor" opacity="0.15" />
    <rect x="9" y="3" width="10" height="18" rx="1.5" fill="currentColor" />
    <circle cx="14" cy="12" r="3.5" stroke="white" strokeWidth="1.5" />
    <path d="M14 12V8.5A3.5 3.5 0 0117.5 12H14z" fill="white" />
    <rect x="3" y="6" width="7" height="12" rx="1" fill="#C43E1C" />
    <path d="M5 9h2.2c.8 0 1.3.4 1.3 1s-.5 1-1.3 1H5v3M5 11h2.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const iconMap = {
  SiPython,
  SiJava: FaJava,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3: DiCss3,
  SiCss: SiCss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiLangchain,
  SiPytorch,
  SiOpencv,
  SiHuggingface,
  SiMongodb,
  SiMysql,
  SiGit,
  SiLinux,
  SiArduino,
  SiDocker,
  SiCanva,
  SiOnshape,
  SiCapcut,
  SiMicrosoftoffice,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiFigma,
  SiAdobephotoshop: DiPhotoshop,
  SiAdobeillustrator: DiIllustrator
};

const Skills = () => {
  const { skills, loading } = useData();

  const categories = [
    'Programming Languages',
    'Frontend',
    'Backend',
    'AI/ML',
    'Databases',
    'Tools',
    'UI/UX'
  ];

  const getIcon = (iconName, color) => {
    // Case-insensitive key lookup to prevent DB capitalization mismatches
    const matchedKey = Object.keys(iconMap).find(
      key => key.toLowerCase() === iconName.toLowerCase()
    );
    const IconComponent = matchedKey ? iconMap[matchedKey] : FaCode;
    return <IconComponent size={28} style={{ color: color || 'currentColor' }} />;
  };

  if (loading) return null;

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {categories.map((category) => {
            const categorySkills = skills.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <div className="flex items-center space-x-4 mb-8">
                   <h3 className="text-sm font-black uppercase tracking-[0.2em] text-accent-blue">
                     {category}
                   </h3>
                   <div className="h-[1px] flex-grow bg-slate-200 dark:bg-white/5" />
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill._id || index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ 
                        y: -8, 
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderColor: `${skill.color}44` // Add 44 for partial transparency
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="glass px-4 py-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 group border-slate-200/50 dark:border-white/5 transition-all duration-300 shadow-sm hover:shadow-lg"
                    >
                      <div 
                        className="transition-all duration-500 group-hover:scale-125 filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                      >
                        {getIcon(skill.icon, skill.color)}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
