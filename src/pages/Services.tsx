import { Printer, Globe2, Battery, Smartphone, Wheat, Building2, BatteryCharging, Sun, ArrowLeft, ArrowRight, AppWindow } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  subPage?: string;
  setCurrentPage?: (page: string) => void;
}

export function Services({ subPage = 'services', setCurrentPage }: ServicesProps) {
  const allServices = [
    {
      id: 'services-printing',
      icon: <Printer className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Printing Services",
      desc: "High-quality professional printing, corporate branding, and importation of press materials.",
      content: "Our highly equipped printing press offers large-format banners, promotional flyers, high-quality business cards, and corporate branding materials. We also source and import premium printing supplies directly from top manufacturers globally, including durable papers, high-grade inks, large-format materials, and professional press equipment.",
      img: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800&q=80"
    },
    {
      id: 'services-import-export',
      icon: <Globe2 className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Import & Export",
      desc: "Seamless global trade logistics, supply chain management, and general business contracting.",
      content: "We run robust import and export channels designed to seamlessly move goods across international borders. We handle full logistics, supply chain management, customs coordination, and general business contracting to provide comprehensive support for your daily operations.",
      img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: 'services-solar',
      icon: <Sun className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Solar Products",
      desc: "Sustainable energy solutions including solar panels, inverters, and solar street lights for diverse applications.",
      content: "Accelerating the green energy transition through the supply of high-efficiency solar panels, industrial inverters, and solar street lights. We distribute end-to-end solar kits for commercial and residential applications.",
      img: "https://images.unsplash.com/photo-1509391366360-128a30d50711?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: 'services-tyres-batteries',
      icon: <Battery className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Tyres & Batteries",
      desc: "Sourcing and distribution of premium automotive tyres, industrial batteries, and power solutions.",
      content: "We supply top-grade commercial vehicle tyres capable of withstanding rough conditions, ensuring safety and longevity. Additionally, we provide high-performance industrial and automotive batteries that power everything from personal vehicles to massive backup energy banks.",
      img: "https://images.unsplash.com/photo-1580274455050-b0bb8dd37eb6?w=800&q=80"
    },
    {
      id: 'services-farm',
      icon: <Wheat className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Farm Produce",
      desc: "Sourcing, trading, and distribution of high-quality local agricultural farm produce.",
      content: "Bridging the gap between farmers and bulk buyers with efficient agricultural trading services, spanning domestic and international markets.",
      img: "https://images.unsplash.com/photo-1553413002-9c3f91845180?w=800&q=80"
    },
    {
      id: 'services-accessories',
      icon: <Smartphone className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Phone Accessories",
      desc: "Wholesale and retail distribution of premium phone accessories and digital gadgets.",
      content: "Supplying local tech markets with durable chargers, power banks, cases, and audio accessories. We ensure quality and reliability for all personal tech needs.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
    }
  ];

  if (subPage !== 'services') {
    const service = allServices.find(s => s.id === subPage) || allServices[0];
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full relative pb-24 dark:bg-gray-950 min-h-screen z-10"
      >
        <div className="w-full h-[400px] sm:h-[500px] relative bg-gray-900 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={service.img} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 max-w-[1400px] mx-auto flex flex-col items-start pb-12 sm:pb-20">
            <button 
              onClick={() => setCurrentPage?.('services')}
              className="group flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors font-bold text-[15px] bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform" /> Back to Services
            </button>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-lg"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[1400px] mx-auto px-6 py-16 sm:py-24 relative"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-[10%] w-[40%] h-[300px] bg-primary-100/30 dark:bg-primary-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-[24px] shadow-sm flex items-center justify-center text-primary-700 dark:text-primary-400">
                {service.icon}
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent-black dark:text-white tracking-tight">Overview</h2>
            </div>
            
            <div className="bg-white/40 dark:bg-gray-900/20 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-[32px] p-8 sm:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
              <p className="text-gray-600 dark:text-gray-300 text-[18px] sm:text-[20px] leading-[1.8] font-medium">
                {service.content}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative overflow-hidden dark:bg-gray-950 min-h-[calc(100vh-72px)]"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary-100/50 dark:bg-primary-900/20 blur-[120px] pointer-events-none -z-10" />

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
              <AppWindow className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-[12px] font-bold tracking-[0.1em] text-gray-700 dark:text-gray-300 uppercase">
                What We Do
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-accent-black dark:text-white mb-6 tracking-tight drop-shadow-sm transition-colors duration-300"
            >
              Our <span className="text-primary-700 dark:text-primary-500">Services</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium transition-colors duration-300"
            >
              Discover our wide range of professional operations, spanning from detailed commercial graphics to large-scale international trading.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => { setCurrentPage?.(service.id); window.scrollTo(0,0); }}
              className="flex flex-col bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-[32px] overflow-hidden border border-gray-200/60 dark:border-gray-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-500 group cursor-pointer"
            >
              <div className="h-[220px] sm:h-[260px] w-full relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 text-white shadow-lg group-hover:bg-primary-600 group-hover:border-primary-500 group-hover:scale-110 transition-all duration-500 mb-4">
                      {service.icon}
                   </div>
                   <h3 className="font-display font-bold text-2xl text-white drop-shadow-sm group-hover:text-primary-100 transition-colors">{service.title}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col bg-white/40 dark:bg-gray-900/20">
                <p className="text-gray-600 dark:text-gray-300/90 leading-relaxed text-[15px] sm:text-[16px] flex-1 font-medium transition-colors">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary-700 dark:text-primary-400 font-bold group-hover:gap-4 transition-all uppercase tracking-wider text-sm">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
