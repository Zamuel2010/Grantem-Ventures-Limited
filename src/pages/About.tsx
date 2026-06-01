import { ArrowLeft, Target, HeartHandshake, TrendingUp, ShieldCheck } from 'lucide-react';

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
    <div className="w-full animate-in fade-in duration-500">
      <div className="bg-gray-50 dark:bg-gray-900/50 py-12 sm:py-20 border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <button 
            onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}
            className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-semibold mb-6 transition-colors group bg-white dark:bg-gray-900 px-5 py-2 rounded-full shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform stroke-[3]" />
            Back to Home
          </button>
          
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-accent-black dark:text-white mb-4 tracking-tight transition-colors">About Gratem Ventures Limited</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto transition-colors">
            A comprehensive, multi-disciplinary trading and operations firm dedicated to scaling businesses across Nigeria through professional services.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        
        {/* Mapped Informational Stack */}
        <div className="space-y-20 lg:space-y-32 mb-32">
          {aboutSections.map((section, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${section.reverse ? 'lg:flex-row-reverse' : ''}`}>
               <div className="flex-1 w-full relative">
                 <div className="aspect-[4/3] rounded-[24px] sm:rounded-[40px] overflow-hidden bg-gray-100 dark:bg-gray-800 border-4 border-gray-50 dark:border-gray-900 shadow-md transform hover:scale-[1.02] transition-transform duration-500 ease-in-out">
                    <img src={section.img} alt={section.title} className="w-full h-full object-cover" />
                 </div>
               </div>
               <div className="flex-1">
                 <h2 className="font-display font-bold text-3xl sm:text-4xl mb-5 text-accent-black dark:text-white tracking-tight leading-tight transition-colors">{section.title}</h2>
                 <p className="text-gray-600 dark:text-gray-300 text-[16px] sm:text-[18px] leading-relaxed transition-colors">
                   {section.desc}
                 </p>
               </div>
            </div>
          ))}
        </div>

        {/* Our Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[20px] p-6 text-center shadow-sm hover:shadow-md hover:border-primary-100 dark:hover:border-primary-500 transition-all">
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-primary-700 dark:text-primary-400 flex items-center justify-center mx-auto mb-4 border border-gray-100 dark:border-gray-700">
               <Target className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-accent-black dark:text-white mb-2">Our Mission</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Providing seamless operational, trading, and printing solutions to empower corporate growth.</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[20px] p-6 text-center shadow-sm hover:shadow-md hover:border-primary-100 dark:hover:border-primary-500 transition-all">
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-primary-700 dark:text-primary-400 flex items-center justify-center mx-auto mb-4 border border-gray-100 dark:border-gray-700">
               <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-accent-black dark:text-white mb-2">Our Values</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Built on a foundation of unyielding integrity, mutual respect, and client-first communication.</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[20px] p-6 text-center shadow-sm hover:shadow-md hover:border-primary-100 dark:hover:border-primary-500 transition-all">
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-primary-700 dark:text-primary-400 flex items-center justify-center mx-auto mb-4 border border-gray-100 dark:border-gray-700">
               <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-accent-black dark:text-white mb-2">Our Growth</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Strategically expanding our supply chain to provide better access to international markets.</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[20px] p-6 text-center shadow-sm hover:shadow-md hover:border-primary-100 dark:hover:border-primary-500 transition-all">
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-primary-700 dark:text-primary-400 flex items-center justify-center mx-auto mb-4 border border-gray-100 dark:border-gray-700">
               <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-accent-black dark:text-white mb-2">Our Promise</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Consistent delivery of high-quality products and flawless execution of your printing needs.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
