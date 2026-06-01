export function Gallery() {
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
    <div className="w-full animate-in fade-in duration-500">
      <div className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24 border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-accent-black dark:text-white mb-4 tracking-tight transition-colors">Our Portfolio</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto transition-colors">
            A showcase of our recent printing projects, imported goods logistics, and trading operations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
           {images.map((img, idx) => (
             <div key={idx} className="group relative rounded-3xl overflow-hidden aspect-square bg-gray-100 dark:bg-gray-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-500">
               <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                 <span className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-2">{img.category}</span>
                 <h4 className="text-white font-display font-bold text-2xl leading-tight">{img.alt}</h4>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
