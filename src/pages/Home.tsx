import { useState, useEffect, useRef } from 'react';
import { Star, Printer, Globe2, ShoppingBag, ArrowRight, Phone, MessageCircle, Clock, Users, ShieldCheck, CheckCircle, Award, ThumbsUp, BadgeCheck, Map } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

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

  const scrollSpyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollSpyRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % aboutSlides.length), 6000);
    return () => clearInterval(timer);
  }, [aboutSlides.length]);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-100/50 dark:bg-primary-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-[100px] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="w-full px-4 pt-16 pb-16 sm:pt-28 sm:pb-28 max-w-[1400px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 w-full pl-2 sm:pl-8 lg:pl-16 relative z-10">
          
          <div className="flex-1 w-full max-w-3xl lg:max-w-none text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 border border-primary-100/50 dark:border-primary-900/40 bg-white/60 dark:bg-black/20 backdrop-blur-md rounded-full pl-1.5 pr-4 py-1.5 mb-8 shadow-sm"
            >
              <div className="w-6 h-6 rounded-full bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center shadow-sm border border-primary-100 dark:border-primary-800">
                 <Star className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.08em] text-gray-700 dark:text-gray-300 uppercase">
                Gratem Ventures Limited
              </span>
            </motion.div>

            <h1 className="leading-[1.05] tracking-[-0.03em] mb-6 w-full pt-2">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15 }}
                className="block text-[42px] sm:text-[60px] lg:text-[72px] text-accent-black dark:text-white font-display font-bold max-w-[900px] leading-[1.05] drop-shadow-sm"
              >
                Reliable Printing, <br className="hidden sm:block"/> <span className="text-primary-700 dark:text-primary-500 relative">Import & Export<div className="absolute -bottom-1 left-0 right-0 h-2 bg-primary-200/50 dark:bg-primary-900/40 -z-10 blur-sm rounded-full"></div></span> <br className="hidden sm:block"/> and Trading.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[16px] sm:text-[18px] leading-[1.65] text-gray-600 dark:text-gray-300 mb-10 max-w-lg sm:max-w-2xl font-medium"
            >
              We are a multi-disciplinary enterprise committed to excellence in Nigeria and internationally. Partner with us for high-quality printing, rigorous supply chain logistics, and trusted product sourcing.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-start"
            >
              <a
                href="tel:08027074837"
                className="group relative flex w-full sm:w-auto min-w-[200px] items-center justify-center gap-2.5 bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-bold text-[16px] px-8 py-4 rounded-full shadow-[0_8px_30px_rgba(200,30,30,0.3)] transition-all active:scale-95 border border-primary-600/50"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/2348027074837"
                target="_blank" rel="noopener noreferrer"
                className="group relative flex w-full sm:w-auto min-w-[200px] items-center justify-center gap-2.5 bg-white/80 dark:bg-black/40 backdrop-blur-md border hover:border-[#25D366] border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold text-[16px] px-8 py-4 rounded-full shadow-sm hover:shadow-lg hover:shadow-[#25D366]/20 transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Chat</span>
              </a>
            </motion.div>

            {/* Core Vertical Strip */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
              className="mt-16 sm:mt-24 w-full flex flex-col items-start pt-8 pb-4 border-t border-gray-200/50 dark:border-gray-800/50"
            >
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                Our Core Business Verticals
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6 sm:gap-14 opacity-80">
                <div className="flex items-center gap-2.5">
                  <Printer className="w-4 h-4 sm:w-5 sm:h-5 text-accent-black dark:text-gray-300" />
                  <span className="text-[12px] sm:text-[13px] font-bold text-accent-black dark:text-gray-300 tracking-widest uppercase">Printing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-black dark:text-gray-300" />
                  <span className="text-[12px] sm:text-[13px] font-bold text-accent-black dark:text-gray-300 tracking-widest uppercase">Export</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-accent-black dark:text-gray-300" />
                  <span className="text-[12px] sm:text-[13px] font-bold text-accent-black dark:text-gray-300 tracking-widest uppercase">Trading</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Visual Section */}
          <div className="flex-1 w-full hidden lg:flex justify-end relative h-[600px] perspective-1000">
            <motion.div 
              initial={{ opacity: 0, x: 40, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative w-full max-w-[600px] h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-blue-500/10 rounded-[40px] blur-3xl" />
              <div className="absolute right-0 top-[10%] w-[80%] h-[70%] bg-white dark:bg-gray-900 rounded-[40px] border-[8px] border-white dark:border-gray-800 shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 z-20">
                <img src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1600&auto=format&fit=crop" alt="Containers" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[5%] bottom-[15%] w-[55%] h-[40%] bg-white dark:bg-gray-950 rounded-3xl border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden z-30"
              >
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop" alt="Printing" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-[80%] top-[40%] w-[120px] h-[120px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-white dark:border-gray-700 shadow-xl flex items-center justify-center flex-col gap-2 z-40"
              >
                <ShieldCheck className="w-10 h-10 text-primary-600" />
                <span className="text-[11px] font-bold tracking-widest text-gray-800 dark:text-gray-200">TRUSTED</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Why Choose Us & Trust Indicators */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-950 py-16 sm:py-24 max-w-[1400px] mx-auto px-6 border-t border-gray-100 dark:border-gray-800 transition-colors"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 max-w-2xl">
            <div className="mb-4 text-[11px] font-bold tracking-widest text-primary-700 uppercase">Trust & Reliability</div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-accent-black dark:text-white mb-4 tracking-tight">Why Choose Gratem Ventures?</h2>
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-[17px] leading-relaxed mb-10">We bring years of proven expertise in international trade, printing logistics, and enterprise solutions. Our commitment to excellence guarantees that every partnership is built on trust, efficiency, and high-level execution.</p>
            
            <div ref={scrollSpyRef} className="relative space-y-10 sm:space-y-12 mt-8">
              {/* Vertical line background */}
              <div className="absolute left-[15.5px] sm:left-[23.5px] top-4 bottom-4 w-[2px] bg-gray-200 dark:bg-gray-800" />
              {/* Active scroll line */}
              <motion.div 
                className="absolute left-[15.5px] sm:left-[23.5px] top-4 bottom-4 w-[2px] bg-primary-700 dark:bg-primary-500 origin-top max-h-full"
                style={{ scaleY: lineHeight }}
              />
              
              {[
                { title: "Years of Experience", desc: "A proven history of executing complex logistics and printing projects." },
                { title: "Satisfied Clients", desc: "Trusted by hundreds of businesses for reliable product sourcing." },
                { title: "Quality Assurance", desc: "Stringent quality checks on all imports, trades, and printing materials." },
                { title: "Global Network", desc: "Seamless supply chains with strong direct ties to international manufacturers." }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-12 sm:pl-16 group">
                   <motion.div 
                     initial={{ scale: 0.6, backgroundColor: '#d1d5db', outlineColor: '#f3f4f6' }}
                     whileInView={{ scale: 1.3, backgroundColor: '#b92626', outlineColor: '#fbe5e5' }}
                     viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="absolute left-[11px] sm:left-[19px] top-[7px] w-[11px] h-[11px] rounded-full outline outline-[3px] outline-offset-0 z-10 shadow-sm"
                   />
                   <h4 className="font-bold text-lg sm:text-[20px] text-accent-black dark:text-white mb-2">{item.title}</h4>
                   <p className="text-[15px] sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full relative">
             <div className="aspect-[4/3] sm:aspect-auto sm:h-[540px] w-full rounded-[32px] overflow-hidden group shadow-lg">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop" alt="Business professionals meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
               <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:bg-black/0" />
             </div>
          </div>
        </div>
      </motion.section>

      {/* About Preview Carousel Section (Moved to be third) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-gray-50 dark:bg-gray-900 rounded-[24px] sm:rounded-[40px] p-6 sm:p-12 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
          <div className="flex-1 w-full flex justify-center relative">
             <div className="aspect-[4/3] rounded-[24px] w-full max-w-md relative overflow-hidden bg-white border-4 border-white shadow-md">
               <AnimatePresence>
                 <motion.img 
                   key={currentSlide}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.8 }}
                   src={aboutSlides[currentSlide].img} 
                   alt={aboutSlides[currentSlide].title} 
                   className="absolute inset-0 w-full h-full object-cover"
                 />
               </AnimatePresence>
             </div>
          </div>
          <div className="flex-1 flex flex-col justify-center min-h-[250px] w-full lg:pr-8">
            <div className="mb-4 text-[11px] font-bold tracking-widest text-primary-700 uppercase">About Gratem Ventures</div>
            <div className="relative min-h-[140px] sm:min-h-[160px] w-full">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 w-full"
                >
                  <h2 className="font-display font-bold text-2xl sm:text-4xl text-accent-black dark:text-white mb-4 tracking-tight leading-tight transition-colors">{aboutSlides[currentSlide].title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-[15px] sm:text-[17px] leading-relaxed max-w-md transition-colors">{aboutSlides[currentSlide].desc}</p>
                </motion.div>
              </AnimatePresence>
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
      </motion.section>

      {/* Services Preview Section (Moved to be third) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-950 py-16 sm:py-24 border-y border-gray-100 dark:border-gray-800 transition-colors"
      >
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
              title="Printing Services"
              desc="High-quality professional printing, corporate branding, and importation of press materials."
              img="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800&q=80"
              setCurrentPage={setCurrentPage}
            />
            <ServiceCardSlide 
              id="services-import-export"
              title="Import & Export"
              desc="Seamless global trade logistics, supply chain management, and general business contracting."
              img="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800&auto=format&fit=crop"
              setCurrentPage={setCurrentPage}
            />
            <ServiceCardSlide 
              id="services-solar"
              title="Solar Products"
              desc="Sustainable energy solutions including solar panels, inverters, and solar street lights."
              img="https://images.unsplash.com/photo-1509391366360-128a30d50711?q=80&w=800&auto=format&fit=crop"
              setCurrentPage={setCurrentPage}
            />
            <ServiceCardSlide 
              id="services-tyres-batteries"
              title="Tyres & Batteries"
              desc="Sourcing and distribution of premium automotive tyres, industrial batteries, and power solutions."
              img="https://images.unsplash.com/photo-1580274455050-b0bb8dd37eb6?w=800&q=80"
              setCurrentPage={setCurrentPage}
            />
            <ServiceCardSlide 
              id="services-farm"
              title="Farm Produce"
              desc="Sourcing, trading, and distribution of high-quality local agricultural farm produce."
              img="https://images.unsplash.com/photo-1553413002-9c3f91845180?w=800&q=80"
              setCurrentPage={setCurrentPage}
            />
            <ServiceCardSlide 
              id="services-accessories"
              title="Phone Accessories"
              desc="Wholesale and retail distribution of premium phone accessories and digital gadgets."
              img="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative py-20 sm:py-32 overflow-hidden border-y border-gray-100/50 dark:border-gray-800/50"
      >
        {/* Animated Background for Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white to-blue-50/80 dark:from-primary-900/10 dark:via-gray-950 dark:to-blue-900/10 -z-10" />
        <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary-100/40 dark:bg-primary-900/20 blur-[100px] pointer-events-none drop-shadow-2xl -z-10" />

        <div className="max-w-4xl mx-auto text-center mb-16 px-6">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] text-primary-700 uppercase bg-white/50 dark:bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 dark:border-white/5 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-current" /> Client Reviews
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-accent-black dark:text-white mt-4 tracking-tight drop-shadow-sm">Trusted by Partners Worldwide</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our commitment to quality speaks through the success of our clients. Here is what some of our trusted partners have to say.
          </p>
        </div>
        
        {/* Fast Carousel Marquee */}
        <div className="w-full relative overflow-hidden flex py-10" style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
          <div className="flex gap-8 px-4 w-max animate-marquee hover:animation-play-state-paused items-center">
            {[
              { quote: "Gratem Ventures transformed our local supply chain. The quality of their imported solar products is unmatched, and delivery is always on time.", author: "Samuel O.", role: "Procurement Manager" },
              { quote: "We rely heavily on their printing services for all our corporate branding. The colors are always sharp and the materials are heavily durable.", author: "Aisha M.", role: "Marketing Director" },
              { quote: "Seamless export logistics. They handled large-scale trades spanning multiple borders without a single delay. Truly professional.", author: "David T.", role: "Operations Lead" },
              { quote: "Gratem Ventures transformed our local supply chain. The quality of their imported solar products is unmatched, and delivery is always on time.", author: "Samuel O.", role: "Procurement Manager" },
              { quote: "We rely heavily on their printing services for all our corporate branding. The colors are always sharp and the materials are heavily durable.", author: "Aisha M.", role: "Marketing Director" },
              { quote: "Seamless export logistics. They handled large-scale trades spanning multiple borders without a single delay. Truly professional.", author: "David T.", role: "Operations Lead" }
            ].map((testimonial, idx) => (
              <div key={idx} className="w-[320px] sm:w-[400px] flex-shrink-0 bg-white/40 dark:bg-white-[0.02] backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-[1.02] hover:bg-white/60 dark:hover:bg-white/5 relative">
                <div className="absolute top-6 right-8 text-primary-600/20 dark:text-primary-400/20 group-hover:text-primary-600/30 transition-colors">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <div className="flex gap-1 mb-6">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold drop-shadow-sm" />)}
                </div>
                <p className="text-gray-800 dark:text-gray-200 text-[15px] sm:text-[17px] leading-relaxed mb-8 relative z-10 font-medium tracking-tight">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-white/60 dark:bg-black/40 shadow-sm border border-white/40 dark:border-white/10 rounded-full flex items-center justify-center font-bold text-primary-700 dark:text-primary-400">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-accent-black dark:text-white text-sm sm:text-[16px] drop-shadow-sm">{testimonial.author}</h4>
                    <p className="text-xs sm:text-[13px] text-gray-500 font-medium uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 sm:py-32 max-w-4xl mx-auto px-6 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-[120px] pointer-events-none -z-10" />

        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-accent-black dark:text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">Have questions about our operations? We have answers.</p>
        </div>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            { q: "What areas do your import and export services cover?", a: "We manage logistics and supply chains spanning domestic Nigerian borders and key international hubs in Asia, Europe, and North America." },
            { q: "Can you handle bulk printing for large corporations?", a: "Yes, our highly equipped printing press is optimized for bulk orders including large-format banners, thousands of business documents, and heavy-duty corporate branding materials." },
            { q: "Do you supply solar products for residential use?", a: "We primarily supply end-to-end solar kits, industrial inverters, and heavy-duty batteries ideal for commercial usage, but we also supply high-tier setups for large residences." },
            { q: "How quickly can you source and deliver specific tech equipment?", a: "Depending on the scale and rarity of the order, turnaround times range from a few weeks for standard imported phone accessories and goods, to extended timelines for specialty heavy-duty components." }
          ].map((faq, idx) => (
             <details key={idx} className="group bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-800/50 cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
               <summary className="flex items-center justify-between p-6 sm:p-8 font-bold text-lg sm:text-[19px] text-accent-black dark:text-white tracking-tight list-none">
                 {faq.q}
                 <span className="w-10 h-10 rounded-full flex shrink-0 items-center justify-center transition-all duration-300 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group-open:rotate-45 group-open:bg-primary-50 dark:group-open:bg-primary-900/40 text-primary-700 dark:text-primary-400">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                 </span>
               </summary>
               <div className="px-6 sm:px-8 pb-8 pt-0">
                 <p className="text-gray-600 dark:text-gray-300/90 text-[15.5px] sm:text-[16.5px] leading-relaxed">{faq.a}</p>
               </div>
             </details>
          ))}
        </div>
      </motion.section>

      {/* Gallery Preview Section (Last, scrollable) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 sm:py-28 max-w-[1400px] mx-auto overflow-hidden"
      >
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
      </motion.section>

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
