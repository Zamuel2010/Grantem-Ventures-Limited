import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface GalleryProps {
  setCurrentPage?: (page: string) => void;
}

export function Gallery({ setCurrentPage }: GalleryProps) {
  const images = [
    { src: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800&q=80', alt: 'Commercial Printing Works', category: 'Printing' },
    { src: 'https://images.unsplash.com/photo-1553413002-9c3f91845180?w=800&q=80', alt: 'Import & Export Logistics', category: 'Import & Export' },
    { src: 'https://images.unsplash.com/photo-1509391366360-128a30d50711?w=800&q=80', alt: 'Solar & Inverter Storage', category: 'Electrical' },
    { src: 'https://images.unsplash.com/photo-1510515152549-0158a1bd6488?w=800&q=80', alt: 'Phone Accessories Inventory', category: 'Gadgets' },
    { src: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800&q=80', alt: 'Farm Produce Sourcing', category: 'Agriculture' },
    { src: 'https://images.unsplash.com/photo-1516322073981-645063ef8013?w=800&q=80', alt: 'Business Graphics & Branding', category: 'Branding' },
    { src: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80', alt: 'Warehouse Distribution', category: 'Logistics' },
    { src: 'https://images.unsplash.com/photo-1621644485552-3eb4dd77ea7c?w=800&q=80', alt: 'Heavy Duty Car Tyres', category: 'Automobile' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative overflow-hidden dark:bg-gray-950 min-h-[calc(100vh-72px)]"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-[100px] pointer-events-none -z-10" />

      <div className="bg-white/40 dark:bg-gray-950/40 backdrop-blur-md pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-gray-100/50 dark:border-gray-800/50 transition-colors relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 relative">
          
          <div className="w-full flex justify-start mb-8 lg:absolute lg:top-0 lg:left-6 lg:mb-0 z-20">
            <button 
              onClick={() => { setCurrentPage?.('home'); window.scrollTo(0,0); }}
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
              <ImageIcon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-[12px] font-bold tracking-[0.1em] text-gray-700 dark:text-gray-300 uppercase">
                Gallery & Operations
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-accent-black dark:text-white mb-6 tracking-tight drop-shadow-sm transition-colors"
            >
              Our <span className="text-primary-700 dark:text-primary-500">Portfolio</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium transition-colors"
            >
              A showcase of our recent printing projects, imported goods logistics, and trading operations.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
           {images.map((img, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
               className="group relative rounded-3xl overflow-hidden aspect-square border border-gray-200/50 dark:border-gray-800/50 bg-gray-100 dark:bg-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
             >
               <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                 <span className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-2 backdrop-blur-md px-3 py-1 rounded-full border border-primary-500/30 inline-flex w-fit">{img.category}</span>
                 <h4 className="text-white font-display font-medium text-xl leading-[1.2]">{img.alt}</h4>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </motion.div>
  );
}
