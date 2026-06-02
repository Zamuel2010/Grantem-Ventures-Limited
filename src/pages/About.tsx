import { ArrowLeft, Target, HeartHandshake, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

export function About({ setCurrentPage }: AboutProps) {
  const aboutSections = [
    { 
       title: "Built on Integrity", 
       desc: "Gratem Ventures Limited is a multi-disciplinary enterprise committed to excellence in Nigeria and internationally. We are structured to address critical supply chain, procurement, and branding needs for a diverse range of corporate and private clients.", 
       img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1600&auto=format&fit=crop" 
    },
    { 
       title: "Robust Infrastructure", 
       desc: "Our infrastructure is built to deliver fast, effectively, and professionally—spanning premium printing to rigorous import-export pipelines. We specialize in facilitating the steady import and export of essential commodities, including automotive tyres, robust solar equipment, inverters, and high-quality phone accessories.", 
       img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1600&auto=format&fit=crop",
       reverse: true
    },
    { 
       title: "Versatile Solutions", 
       desc: "Whether you need bulk phone accessories or high-quality farm produce trading, we execute every transaction with absolute professionalism. Concurrently, our printing division handles high-end commercial graphics—producing precision banners, flyers, and branding materials at scale.", 
       img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop" 
    },
    { 
       title: "Our Commitment", 
       desc: "We focus heavily on executing every transaction with absolute professionalism, transparency, and a commitment to unwavering quality. Our team understands that modern businesses require a reliable backbone for operations, and we step in exactly where we are needed most.", 
       img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
       reverse: true
    },
    { 
       title: "Strategic Expansion", 
       desc: "We are continually expanding our operational networks locally and globally. By bridging the gap between quality suppliers and demanding markets, Gratem Ventures brings efficiency and reliability to international trading, ensuring that every supply chain link is optimized for success.", 
       img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop" 
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-100/50 dark:bg-primary-900/20 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-[100px] pointer-events-none -z-10" />

      <div className="bg-white/40 dark:bg-gray-950/40 backdrop-blur-md pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-gray-100/50 dark:border-gray-800/50 transition-colors relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 relative">
          
          <div className="w-full flex justify-start mb-8 lg:absolute lg:top-0 lg:left-6 lg:mb-0 z-20">
            <button 
              onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}
              className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-bold transition-all group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-100 dark:border-gray-800 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform stroke-[2.5]" />
              Back to Home
            </button>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-primary-100/50 dark:border-primary-900/40 bg-white/60 dark:bg-black/20 backdrop-blur-md rounded-full px-4 py-2 mb-8 shadow-sm"
            >
              <Target className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-[12px] font-bold tracking-[0.1em] text-gray-700 dark:text-gray-300 uppercase">
                Who We Are
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-accent-black dark:text-white mb-6 tracking-tight drop-shadow-sm"
            >
              About <span className="text-primary-700 dark:text-primary-500">Gratem Ventures</span> Limited
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
            >
              A comprehensive, multi-disciplinary trading and operations firm dedicated to scaling businesses across Nigeria through professional services.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20 sm:py-32 relative z-10">
        
        {/* Mapped Informational Stack */}
        <div className="space-y-24 lg:space-y-40 mb-40 max-w-6xl mx-auto">
          {aboutSections.map((section, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${section.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
               <div className="flex-1 w-full relative group">
                 <div className="absolute inset-0 bg-primary-600/10 dark:bg-primary-500/10 rounded-[32px] sm:rounded-[48px] transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500 -z-10 blur-xl"></div>
                 <div className="aspect-[4/3] rounded-[32px] sm:rounded-[48px] overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-white/60 dark:border-gray-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transform group-hover:scale-[1.02] transition-transform duration-700 ease-in-out relative">
                    <img src={section.img} alt={section.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                 </div>
               </div>
               <div className="flex-1 text-left">
                 <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 text-accent-black dark:text-white tracking-tight leading-tight">{section.title}</h2>
                 <p className="text-gray-600 dark:text-gray-300/90 text-base sm:text-lg leading-[1.8]">
                   {section.desc}
                 </p>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Our Values Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
             <h2 className="font-display font-bold text-3xl sm:text-5xl text-accent-black dark:text-white tracking-tight">Core Principles</h2>
             <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">The foundation of our operations and partnerships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-[32px] p-8 sm:p-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] group hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/50 dark:to-primary-800/20 rounded-2xl shadow-inner text-primary-700 dark:text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-200/50 dark:border-primary-800/30 group-hover:scale-110 transition-transform duration-300">
                 <Target className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl text-accent-black dark:text-white mb-3">Our Mission</h4>
              <p className="text-[15px] sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">Providing seamless operational, trading, and printing solutions to empower corporate growth.</p>
            </div>

            <div className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-[32px] p-8 sm:p-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] group hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/50 dark:to-primary-800/20 rounded-2xl shadow-inner text-primary-700 dark:text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-200/50 dark:border-primary-800/30 group-hover:scale-110 transition-transform duration-300">
                 <HeartHandshake className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl text-accent-black dark:text-white mb-3">Our Values</h4>
              <p className="text-[15px] sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">Built on a foundation of unyielding integrity, mutual respect, and client-first communication.</p>
            </div>

            <div className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-[32px] p-8 sm:p-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] group hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/50 dark:to-primary-800/20 rounded-2xl shadow-inner text-primary-700 dark:text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-200/50 dark:border-primary-800/30 group-hover:scale-110 transition-transform duration-300">
                 <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl text-accent-black dark:text-white mb-3">Our Growth</h4>
              <p className="text-[15px] sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">Strategically expanding our supply chain to provide better access to international markets.</p>
            </div>

            <div className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-[32px] p-8 sm:p-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] group hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/50 dark:to-primary-800/20 rounded-2xl shadow-inner text-primary-700 dark:text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-200/50 dark:border-primary-800/30 group-hover:scale-110 transition-transform duration-300">
                 <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl text-accent-black dark:text-white mb-3">Our Promise</h4>
              <p className="text-[15px] sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">Consistent delivery of high-quality products and flawless execution of your printing needs.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
