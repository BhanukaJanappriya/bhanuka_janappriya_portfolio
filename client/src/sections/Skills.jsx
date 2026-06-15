import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiPostgresql,
  SiReact, SiTailwindcss, SiHtml5, SiNodedotjs, SiExpress,
  SiDjango, SiFastapi, SiLangchain, SiPytorch, SiOpencv, SiHuggingface,
  SiMongodb, SiMysql, SiGit, SiLinux, SiArduino, SiFigma, SiCss
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';
import { DiCss3, DiPhotoshop, DiIllustrator } from 'react-icons/di';

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
