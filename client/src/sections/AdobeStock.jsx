import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Grid, Eye, Globe, Sparkles, Download, Star, Compass } from 'lucide-react';

const AdobeStock = () => {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' or 'live'
  const [filter, setFilter] = useState('all');

  const contributorUrl = "https://stock.adobe.com/lk/contributor/211966186/Bhanuka";

  const stockAssets = [
    {
      title: 'Abstract Holographic Gradients',
      category: 'vectors',
      downloads: '1.2k+',
      rating: '4.9',
      imageBg: 'bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400',
      tags: ['Abstract', 'Background', 'Vibrant']
    },
    {
      title: 'Minimalist Device Mockup Kit',
      category: 'mockups',
      downloads: '850+',
      rating: '4.8',
      imageBg: 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900',
      tags: ['Device', 'UI/UX', 'Presentation']
    },
    {
      title: 'Modern Corporate Poster Template',
      category: 'templates',
      downloads: '980+',
      rating: 'Best Seller',
      imageBg: 'bg-gradient-to-br from-blue-600 via-accent-blue to-teal-400',
      tags: ['Branding', 'Print', 'Layout']
    },
    {
      title: 'Isometric Tech Icon Set',
      category: 'vectors',
      downloads: '2.1k+',
      rating: '5.0',
      imageBg: 'bg-gradient-to-tr from-emerald-500 via-teal-600 to-indigo-700',
      tags: ['Icons', 'Isometric', 'Tech']
    },
    {
      title: 'Social Media Marketing Pack',
      category: 'templates',
      downloads: '1.5k+',
      rating: '4.9',
      imageBg: 'bg-gradient-to-br from-rose-500 via-red-500 to-orange-400',
      tags: ['Instagram', 'Branding', 'Post']
    },
    {
      title: 'Glassmorphism UI Component Kit',
      category: 'vectors',
      downloads: '740+',
      rating: '4.7',
      imageBg: 'bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600',
      tags: ['UI Kit', 'Web', 'Glassmorphism']
    }
  ];

  const filteredAssets = filter === 'all' 
    ? stockAssets 
    : stockAssets.filter(item => item.category === filter);

  return (
    <section id="adobe-portfolio" className="section-padding bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 dark:from-black dark:via-dark-soft dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-widest mb-4">
            Adobe Stock Contributor Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">Creative Design Showcase</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-8" />
          
          {/* Main View Toggle */}
          <div className="inline-flex p-1.5 bg-slate-100/80 dark:bg-dark-card/60 backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-2xl relative shadow-2xl mb-8">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all relative z-10 ${
                activeTab === 'gallery' ? 'text-white' : 'text-slate-500 dark:text-accent-gray hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              <Grid size={16} />
              <span>Simulated Gallery</span>
              {activeTab === 'gallery' && (
                <motion.div
                  layoutId="activeStockTab"
                  className="absolute inset-0 bg-amber-500 rounded-xl -z-10 shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('live')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all relative z-10 ${
                activeTab === 'live' ? 'text-white' : 'text-slate-500 dark:text-accent-gray hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              <Eye size={16} />
              <span>Live Embed View</span>
              {activeTab === 'live' && (
                <motion.div
                  layoutId="activeStockTab"
                  className="absolute inset-0 bg-amber-500 rounded-xl -z-10 shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </div>
        </motion.div>

        {/* Content container */}
        <AnimatePresence mode="wait">
          {activeTab === 'gallery' ? (
            <motion.div
              key="gallery-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {[
                  { id: 'all', label: 'All Assets' },
                  { id: 'vectors', label: 'Vector Graphics' },
                  { id: 'mockups', label: 'Mockup Kits' },
                  { id: 'templates', label: 'Design Templates' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                      filter === tab.id
                        ? 'bg-slate-900 border-slate-900 dark:bg-white dark:border-white text-white dark:text-black shadow-md scale-105'
                        : 'glass text-slate-600 border-slate-200/50 hover:border-slate-300 hover:text-slate-800 dark:text-accent-gray dark:border-white/5 dark:hover:border-white/15 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Assets Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredAssets.map((asset, index) => (
                  <motion.div
                    key={asset.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="glass p-5 rounded-3xl flex flex-col justify-between hover:border-amber-500/30 group transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
                  >
                    <div>
                      {/* Asset visual preview */}
                      <div className={`aspect-video rounded-2xl ${asset.imageBg} mb-5 flex items-center justify-center p-6 relative overflow-hidden shadow-inner`}>
                        <Sparkles className="absolute top-4 right-4 text-white/20 animate-pulse" size={24} />
                        <div className="text-white text-center transform group-hover:scale-105 transition-transform duration-500">
                          <Compass size={40} className="mx-auto mb-2 opacity-30 group-hover:rotate-12 transition-transform duration-500" />
                          <span className="text-[10px] font-black tracking-widest uppercase bg-black/10 px-3 py-1 rounded-md border border-white/10 backdrop-blur-xs">
                            {asset.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <a
                            href={contributorUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-black rounded-full hover:bg-amber-500 hover:text-white transition-all transform scale-90 group-hover:scale-100 duration-300 shadow-lg"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="font-bold text-lg text-slate-800 dark:text-white mb-3 leading-snug group-hover:text-amber-500 transition-colors duration-300">
                        {asset.title}
                      </h4>
                    </div>

                    <div>
                      {/* Metadata tags */}
                      <div className="flex flex-wrap gap-1 mb-5">
                        {asset.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-slate-500 dark:text-accent-gray rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="h-[1px] bg-slate-200/60 dark:bg-white/5 mb-4" />

                      {/* Footer Info */}
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-accent-gray font-semibold">
                        <span className="flex items-center">
                          <Download size={13} className="mr-1 text-amber-500" />
                          {asset.downloads} Downloads
                        </span>
                        <span className="flex items-center bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded font-black text-[9px] tracking-wide uppercase">
                          <Star size={10} className="mr-0.5 fill-current" />
                          {asset.rating}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="live-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Simulated Browser Frame */}
              <div className="w-full rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl bg-white dark:bg-dark-card/60 backdrop-blur-xl">
                {/* Browser bar */}
                <div className="flex items-center space-x-3 px-6 py-4 bg-slate-100 dark:bg-black/40 border-b border-slate-200/80 dark:border-white/5">
                  <div className="flex space-x-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex-1 max-w-xl mx-auto flex items-center bg-white/80 dark:bg-black/30 border border-slate-200/50 dark:border-white/5 px-4 py-1.5 rounded-xl text-xs font-semibold text-slate-400 dark:text-accent-gray">
                    <Globe size={13} className="mr-2 text-slate-400" />
                    <span className="truncate flex-1 select-all">{contributorUrl}</span>
                  </div>
                </div>

                {/* Iframe content viewport */}
                <div className="relative aspect-[16/10] w-full min-h-[500px] bg-slate-50 dark:bg-black/10 flex flex-col items-center justify-center">
                  
                  {/* Warning background banner/card overlaying */}
                  <div className="absolute inset-x-0 top-0 bg-amber-500/10 border-b border-amber-500/20 px-6 py-3 text-center text-xs font-semibold text-amber-700 dark:text-amber-400 flex items-center justify-center space-x-2 z-20">
                     <span>⚠️ If Adobe blocks this embed, please use the button below to visit my live portfolio.</span>
                  </div>

                  <iframe 
                    src={contributorUrl} 
                    className="w-full h-full border-none z-10 pt-10" 
                    title="Adobe Stock Contributor Page"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global CTA Button */}
        <motion.div 
          layout
          className="text-center mt-12"
        >
          <a
            href={contributorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full font-black text-sm transition-all duration-300 shadow-[0_4px_25px_rgba(245,158,11,0.25)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)] hover:scale-105 cursor-pointer"
          >
            <span>Visit Live Adobe Stock Portfolio</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default AdobeStock;
