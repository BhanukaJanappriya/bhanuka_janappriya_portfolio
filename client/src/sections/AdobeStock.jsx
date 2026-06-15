import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa';
const adobestockVideo = "https://www.dropbox.com/scl/fi/xphyfr7m7l4qwm600aa7s/adobestock.mp4?rlkey=eyih01j5y9ufxafdwbipyxni8&st=ivpmk630&raw=1";
const pinterestVideo = "https://www.dropbox.com/scl/fi/f0jed5b6m2crmrn79jee0/pinterest.mp4?rlkey=h9wka3yvjltmzyn42katy45i8&st=13hc9b7k&raw=1";

const AdobeStock = () => {
  const portfolios = [
    {
      id: 'adobe-stock',
      name: 'Adobe Stock Portfolio',
      subtitle: 'Premium vectors, templates & creative assets',
      url: 'https://stock.adobe.com/lk/contributor/211966186/Bhanuka',
      videoSrc: adobestockVideo,
      themeColor: 'from-amber-500 to-orange-600',
      shadowColor: 'rgba(245,158,11,0.2)',
      btnBg: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-[0_4px_20px_rgba(245,158,11,0.25)]',
      icon: (
        <div className="w-7 h-7 rounded-lg bg-[#FF0000] flex items-center justify-center text-white font-extrabold text-[13px] shadow-sm select-none">
          A
        </div>
      )
    },
    {
      id: 'pinterest',
      name: 'Pinterest Portfolio',
      subtitle: 'Visual inspiration, design ideas & moodboards',
      url: 'https://www.pinterest.com/bhanukajanappriya2001/',
      videoSrc: pinterestVideo,
      themeColor: 'from-rose-500 to-red-600',
      shadowColor: 'rgba(244,63,94,0.2)',
      btnBg: 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 shadow-[0_4px_20px_rgba(244,63,94,0.25)]',
      icon: <FaPinterest className="w-7 h-7 text-[#E60023]" />
    }
  ];

  return (
    <section id="adobe-portfolio" className="section-padding bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 dark:from-black dark:via-dark-soft dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/30 dark:border-white/5 text-slate-600 dark:text-accent-gray text-xs font-black uppercase tracking-widest mb-4">
            Creative Portfolios Walkthrough
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">
            Design Portfolios
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-accent-gray text-sm md:text-base max-w-2xl mx-auto font-medium">
            Take a look at my design profiles. Watch live portfolio walkthroughs or click the buttons below to visit the official sites directly.
          </p>
        </motion.div>

        {/* Portfolios Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              {/* Card Title Header */}
              <div className="flex items-center space-x-4 mb-4 px-2">
                {portfolio.icon}
                <div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white leading-tight">
                    {portfolio.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-accent-gray font-semibold">
                    {portfolio.subtitle}
                  </p>
                </div>
              </div>

              {/* Simulated Browser Frame */}
              <div 
                className="w-full flex-1 rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-dark-card/60 backdrop-blur-xl flex flex-col transition-all duration-300 hover:border-slate-300 dark:hover:border-white/15"
                style={{ boxShadow: `0 20px 40px ${portfolio.shadowColor}` }}
              >
                {/* Browser Top Bar */}
                <div className="flex items-center space-x-3 px-6 py-4 bg-slate-100 dark:bg-black/40 border-b border-slate-200/80 dark:border-white/5">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex-1 max-w-md mx-auto flex items-center bg-white/95 dark:bg-black/30 border border-slate-200/50 dark:border-white/5 px-4 py-1.5 rounded-xl text-[10px] md:text-xs font-semibold text-slate-400 dark:text-accent-gray select-all">
                    <Globe size={11} className="mr-2 text-slate-400 shrink-0" />
                    <span className="truncate flex-1">{portfolio.url}</span>
                  </div>
                </div>

                {/* Viewport Area - Custom Video Player */}
                <div className="relative w-full aspect-video bg-slate-50 dark:bg-black/20 overflow-hidden flex items-center justify-center">
                  <video 
                    src={portfolio.videoSrc}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center mt-6">
                <a
                  href={portfolio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full text-white font-extrabold text-xs md:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 ${portfolio.btnBg}`}
                >
                  <span>Open {portfolio.id === 'pinterest' ? 'Pinterest' : 'Adobe Stock'} Page</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdobeStock;
