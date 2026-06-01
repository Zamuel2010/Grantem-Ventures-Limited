import { Printer, Globe2, Battery, Smartphone, Wheat, Building2, BatteryCharging, Sun, ArrowLeft, ArrowRight } from 'lucide-react';

interface ServicesProps {
  subPage?: string;
  setCurrentPage?: (page: string) => void;
}

export function Services({ subPage = 'services', setCurrentPage }: ServicesProps) {
  const allServices = [
    {
      id: 'services-printing',
      icon: <Printer className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Printing Business",
      desc: "High-quality professional printing, corporate branding materials, and advanced graphic solutions.",
      content: "Our highly equipped printing press offers large-format banners, promotional flyers, high-quality business cards, and corporate branding materials. We pride ourselves on sharp colors, durable materials, and rapid turnaround for bulk orders.",
      img: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800&q=80"
    },
    {
      id: 'services-import-export',
      icon: <Globe2 className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Import and Export",
      desc: "Seamless global trade logistics, robust supply chain management, and international sourcing.",
      content: "We run robust import and export channels designed to seamlessly move goods across international borders. We handle full logistics, supply chain management, and customs coordination, bringing global quality to local markets.",
      img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: 'services-tyres',
      icon: <Battery className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Importation of Tyres",
      desc: "Sourcing and distribution of premium, durable automotive and commercial vehicle tyres.",
      content: "Equipping logistics and everyday drivers with reliable, heavy-duty tyres. We import top-grade rubber capable of withstanding rough conditions, ensuring safety and longevity on the road.",
      img: "https://images.unsplash.com/photo-1580274455050-b0bb8dd37eb6?w=800&q=80"
    },
    {
      id: 'services-batteries',
      icon: <BatteryCharging className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Importation of Batteries",
      desc: "High-performance automotive, industrial, and specialized batteries for diverse energy needs.",
      content: "We supply industrial and automotive batteries that power everything from personal vehicles to massive backup energy banks. Dependable energy storage imported straight from world-class manufacturers.",
      img: "https://plus.unsplash.com/premium_photo-1664303498867-b5087532a249?w=800&q=80"
    },
    {
      id: 'services-solar',
      icon: <Sun className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Lights, Batteries, and Inverters",
      desc: "Sustainable energy solutions including high-efficiency solar panels, inverters, and components.",
      content: "Accelerating the green energy transition through the supply of high-efficiency solar panels, industrial inverters, and solar street lights. We distribute end-to-end solar kits for commercial and residential applications.",
      img: "https://images.unsplash.com/photo-1509391366360-128a30d50711?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: 'services-printing-materials',
      icon: <Printer className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Importation of Printing Materials",
      desc: "Direct procurement and supply of heavy-duty printing materials, inks, papers, and press equipment.",
      content: "We source and import premium printing supplies directly from top manufacturers globally. Our catalogue includes durable papers, high-grade inks, large-format materials, and professional press equipment.",
      img: "https://images.unsplash.com/photo-1598520286884-25e243916295?w=800&q=80"
    },
    {
      id: 'services-accessories',
      icon: <Smartphone className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Phone Accessories",
      desc: "Wholesale and retail distribution of premium phone accessories and digital gadgets for local markets.",
      content: "Supplying local tech markets with durable chargers, power banks, cases, and audio accessories.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
    },
    {
      id: 'services-general-business',
      icon: <Building2 className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "General Business",
      desc: "Versatile corporate procurement, contracting, and general service solutions to support day-to-day operations.",
      content: "We provide comprehensive business support, ranging from general contracting to bulk procurement. Our general business division exists to plug the gaps in your supply chain with speed and reliability.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      id: 'services-farm',
      icon: <Wheat className="w-8 h-8 text-primary-700 dark:text-primary-500" />,
      title: "Farm Produce",
      desc: "Sourcing, trading, and distribution of high-quality local agricultural farm produce spanning domestic and international markets.",
      content: "Bridging the gap between farmers and bulk buyers with efficient agricultural trading services.",
      img: "https://images.unsplash.com/photo-1553413002-9c3f91845180?w=800&q=80"
    }
  ];

  if (subPage !== 'services') {
    const service = allServices.find(s => s.id === subPage) || allServices[0];
    return (
      <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24 dark:bg-gray-950 min-h-screen">
        <div className="w-full h-[300px] sm:h-[400px] relative bg-gray-900 overflow-hidden">
          <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-gray-950 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 max-w-5xl mx-auto flex flex-col items-start pb-12 sm:pb-16">
            <button 
              onClick={() => setCurrentPage?.('services')}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </button>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">{service.title}</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 animate-in fade-in duration-700 delay-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/40 rounded-2xl flex items-center justify-center">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold text-accent-black dark:text-white">Overview</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-[17px] sm:text-[19px] leading-relaxed">
            {service.content}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full animate-in fade-in duration-500 dark:bg-gray-950 min-h-[calc(100vh-72px)]">
      <div className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-accent-black dark:text-white mb-4 tracking-tight transition-colors duration-300">Our Services</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
            Discover our wide range of professional operations, spanning from detailed commercial graphics to large-scale international trading.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => { setCurrentPage?.(service.id); window.scrollTo(0,0); }}
              className="flex flex-col bg-white dark:bg-gray-900 rounded-[24px] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg dark:shadow-none hover:border-primary-100 dark:hover:border-primary-500 hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 group cursor-pointer"
            >
              <div className="h-[200px] sm:h-[240px] w-full relative overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-accent-black dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-[14px] sm:text-[15px] flex-1 transition-colors">
                  {service.desc} <span className="font-medium text-primary-700 dark:text-primary-400 group-hover:underline ml-1">See more...</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
