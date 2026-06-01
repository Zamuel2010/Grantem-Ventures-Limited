import { useState, useEffect } from 'react';
import { Star, Printer, Globe2, ShoppingBag, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const aboutSlides = [
    { title: "Built on Integrity", desc: "Gratem Ventures Limited is a multi-disciplinary enterprise committed to excellence in Nigeria and internationally.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1600&auto=format&fit=crop" },
    { title: "Robust Infrastructure", desc: "Our infrastructure is built to deliver fast, effectively, and professionally—spanning premium printing to rigorous import-export pipelines.", img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1600&auto=format&fit=crop" },
    { title: "Versatile Solutions", desc: "Whether you need bulk phone accessories or high-quality farm produce trading, we execute every transaction with absolute professionalism.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop" }
  ];

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800&q=80', type: 'landscape', class: 'aspect-[3/2] w-[300px] sm:w-[450px]' },
    { src: 'https://images.unsplash.com/photo-1553413002-9c3f91845180?w=800&q=80', type: 'portrait', class: 'aspect-[3/4] w-[220px] sm:w-[300px]' },
    { src: 'https://images.unsplash.com/photo-1509391366360-128a30d50711?w=800&q=80', type: 'landscape', class: 'aspect-[3/2] w-[300px] sm:w-[450px]' },
    { src: 'https://images.unsplash.com/photo-1510515152549-0158a1bd6488?w=800&q=80', type: 'portrait', class: 'aspect-[3/4] w-[220px] sm:w-[300px]' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % aboutSlides.length), 5000);
    return () => clearInterval(timer);
  }, [aboutSlides.length]);

  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="w-full px-4 pt-16 pb-16 sm:pt-24 sm:pb-24 max-w-7xl mx-auto overflow-hidden">
        <div className="pl-2 sm:pl-8 lg:pl-16 relative z-10 flex flex-col items-start text-left w-full max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="w-full"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
              className="inline-flex items-center gap-2 border border-gray-100 bg-gray-50 rounded-full pl-1.5 pr-4 py-1.5 mb-8 shadow-sm"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                 <Star className="w-3 h-3 text-accent-gold" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.08em] text-gray-500 dark:text-gray-400 uppercase">
                Gratem Ventures Limited
              </span>
            </motion.div>

            <h1 className="leading-[0.85] tracking-[-0.03em] mb-10 w-full pt-4 sm:pt-6">
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } } }}
                className="block text-[72px] sm:text-[110px] lg:text-[150px] xl:text-[180px] text-primary-700 dark:text-primary-500 pb-2 sm:pb-4 transform origin-bottom-left font-display font-black tracking-[-0.04em] pl-1 sm:pl-3"
              >
                Printing
              </motion.span>
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 2.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] } } }}
                className="block text-[22px] sm:text-[30px] lg:text-[40px] text-accent-black dark:text-white font-display font-extrabold max-w-[800px] mt-8 leading-[1.2] pl-1 sm:pl-3"
              >
                Import & Export <br className="hidden sm:block"/> General Trading Solutions
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] sm:text-[17px] leading-[1.6] text-gray-500 dark:text-gray-400 mb-10 max-w-md sm:max-w-2xl"
          >
            Delivering quality across borders. We provide <span className="font-semibold text-accent-black dark:text-white">high-end printing, global product sourcing</span>, and <span className="font-semibold text-accent-black dark:text-white">essential business services</span> to move your operations forward.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-start"
          >
            <a
              href="tel:08027074837"
              className="group relative flex w-full sm:w-auto min-w-[200px] items-center justify-center gap-2.5 bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-semibold text-[15px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(153,0,0,0.2)] transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/2348027074837"
              target="_blank" rel="noopener noreferrer"
              className="group relative flex w-full sm:w-auto min-w-[200px] items-center justify-center gap-2.5 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-[#25D366] dark:hover:border-[#25D366] hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-900 dark:text-white font-semibold text-[15px] px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <div className="bg-[#25D366] text-white p-1 rounded-full flex items-center justify-center">
                 <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" />
              </div>
              <span>WhatsApp Chat</span>
            </a>
          </motion.div>
        </div>

        {/* Core Vertical Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 sm:mt-32 w-full flex flex-col items-start pl-2 sm:pl-8 lg:pl-16 pt-8 pb-4"
        >
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-8 sm:mb-10">
            Our Core Business Verticals
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-6 sm:gap-14 opacity-60">
            <div className="flex items-center gap-2">
              <Printer className="w-4 h-4 sm:w-5 sm:h-5 text-accent-black dark:text-white transition-colors" />
              <span className="text-[11px] sm:text-xs font-bold text-accent-black dark:text-white tracking-widest uppercase transition-colors">Printing</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-black dark:text-white transition-colors" />
              <span className="text-[11px] sm:text-xs font-bold text-accent-black dark:text-white tracking-widest uppercase transition-colors">Export</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-accent-black dark:text-white transition-colors" />
              <span className="text-[11px] sm:text-xs font-bold text-accent-black dark:text-white tracking-widest uppercase transition-colors">Trading</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Preview Carousel Section (Moved to be second) */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-gray-50 dark:bg-gray-900 rounded-[24px] sm:rounded-[40px] p-6 sm:p-12 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
          <div className="flex-1 w-full flex justify-center relative">
             <div className="aspect-[4/3] rounded-[24px] w-full max-w-md relative overflow-hidden bg-white border-4 border-white shadow-md">
               {aboutSlides.map((slide, idx) => (
                 <img 
                   key={idx}
                   src={slide.img} 
                   alt={slide.title} 
                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`} 
                 />
               ))}
             </div>
          </div>
          <div className="flex-1 flex flex-col justify-center min-h-[250px] w-full lg:pr-8">
            <div className="mb-4 text-[11px] font-bold tracking-widest text-primary-700 uppercase">About Gratem Ventures</div>
            <div className="relative min-h-[140px] sm:min-h-[160px] w-full">
              {aboutSlides.map((slide, idx) => (
                <div key={idx} className={`absolute top-0 left-0 w-full transition-all duration-700 ${idx === currentSlide ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  <h2 className="font-display font-bold text-2xl sm:text-4xl text-accent-black dark:text-white mb-4 tracking-tight leading-tight transition-colors">{slide.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-[15px] sm:text-[17px] leading-relaxed max-w-md transition-colors">{slide.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-2 mt-4 mb-10">
              {aboutSlides.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)} 
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-primary-700' : 'w-2 bg-gray-300 hover:bg-gray-400'}`} 
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="mt-auto">
              <button 
                onClick={() => { setCurrentPage('about'); window.scrollTo(0,0); }}
                className="inline-flex items-center gap-2 text-primary-700 font-bold hover:text-primary-800 transition-colors uppercase tracking-wider text-xs sm:text-[13px] group bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100"
              >
                See More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section (Moved to be third) */}
      <section className="bg-white dark:bg-gray-950 py-16 sm:py-24 border-y border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 pl-2 sm:pl-8 lg:pl-16">
            <div className="max-w-xl">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-accent-black dark:text-white mb-3 tracking-tight">Our Core Services</h2>
              <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">Comprehensive solutions tailored to accelerate your business operations.</p>
            </div>
            <button 
              onClick={() => { setCurrentPage('services'); window.scrollTo(0,0); }}
              className="group flex flex-shrink-0 items-center text-primary-700 dark:text-primary-400 font-bold hover:text-primary-800 dark:hover:text-primary-300 transition-colors uppercase tracking-wider text-xs sm:text-sm"
            >
              See all services <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform stroke-[3]" />
            </button>
          </div>

          {/* Horizontal Slider for Services */}
          <div className="flex flex-nowrap gap-6 sm:gap-8 overflow-x-auto pb-10 snap-x snap-mandatory px-2 sm:px-8 lg:px-16 hide-scrollbar items-stretch">
            <ServiceCardSlide 
              id="services-printing"
              title="Printing Business"
              desc="High-quality professional printing, corporate branding materials, and advanced graphic solutions."
              img="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800&q=80"
              setCurrentPage={setCurrentPage}
            />
            <ServiceCardSlide 
              id="services-import-export"
              title="Import and Export"
              desc="Seamless global trade logistics, robust supply chain management, and international sourcing."
              img="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800&auto=format&fit=crop"
              setCurrentPage={setCurrentPage}
            />
            <ServiceCardSlide 
              id="services-tyres"
              title="Importation of Tyres"
              desc="Sourcing and distribution of premium, durable automotive and commercial vehicle tyres."
              img="https://images.unsplash.com/photo-1580274455050-b0bb8dd37eb6?w=800&q=80"
              setCurrentPage={setCurrentPage}
            />
            <ServiceCardSlide 
              id="services-batteries"
              title="Importation of Batteries"
              desc="High-performance automotive, industrial, and specialized batteries for diverse energy needs."
              img="https://plus.unsplash.com/premium_photo-1664303498867-b5087532a249?w=800&q=80"
              setCurrentPage={setCurrentPage}
            />
            <ServiceCardSlide 
              id="services-solar"
              title="Lights, Batteries, and Inverters"
              desc="Sustainable energy solutions including high-efficiency solar panels, inverters, and components."
              img="https://images.unsplash.com/photo-1509391366360-128a30d50711?q=80&w=800&auto=format&fit=crop"
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </section>

      {/* Gallery Preview Section (Last, scrollable) */}
      <section className="py-20 sm:py-28 max-w-[1400px] mx-auto overflow-hidden">
        <div className="px-6 sm:px-12 mb-10 flex justify-between items-end pl-4 sm:pl-10 lg:pl-16">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-accent-black dark:text-white mb-2 tracking-tight">Gallery</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">A glimpse into our recent operations.</p>
          </div>
          <button 
            onClick={() => { setCurrentPage('gallery'); window.scrollTo(0,0); }}
            className="group flex flex-shrink-0 items-center text-primary-700 dark:text-primary-400 font-bold hover:text-primary-800 dark:hover:text-primary-300 transition-colors uppercase tracking-wider text-xs sm:text-sm bg-primary-50 dark:bg-primary-900/40 px-5 py-2.5 rounded-full"
          >
            More <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform stroke-[3]" />
          </button>
        </div>
        
        {/* Scrollable container with landscape and portrait items */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory px-6 sm:px-12 lg:px-16 hide-scrollbar items-center">
           {galleryImages.map((img, idx) => (
             <div key={idx} className={`${img.class} flex-shrink-0 snap-center rounded-[24px] sm:rounded-[32px] overflow-hidden bg-gray-100 shadow-sm border border-gray-100`}>
                <img src={img.src} alt="Gallery item" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
             </div>
           ))}
        </div>
      </section>

    </div>
  );
}

function ServiceCardSlide({ id, title, desc, img, setCurrentPage }: { id: string, title: string, desc: string, img: string, setCurrentPage: (page: string) => void }) {
  return (
    <div onClick={() => { setCurrentPage(id); window.scrollTo(0,0); }} className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] snap-center bg-gray-50 dark:bg-gray-900 rounded-[24px] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg dark:shadow-none hover:border-primary-100 dark:hover:border-primary-500 hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 group flex flex-col cursor-pointer">
      <div className="h-[200px] sm:h-[240px] w-full relative overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-accent-black dark:text-white mb-3">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-[14px] sm:text-[15px] flex-1">{desc}</p>
        <div className="mt-6 flex items-center text-primary-700 dark:text-primary-400 font-bold text-sm tracking-wider uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
           Learn More <ArrowRight className="w-4 h-4 ml-1.5 stroke-[3]" />
        </div>
      </div>
    </div>
  );
}
