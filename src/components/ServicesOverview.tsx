import { motion } from 'motion/react';
import { Printer, Globe2, ShoppingBag, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Professional Printing',
    description: 'High-quality commercial printing services. From business cards and brochures to large-format banners and product packaging, we deliver crisp, vibrant results.',
    icon: Printer,
    color: 'bg-blue-50 text-blue-600',
    borderColor: 'border-blue-100',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2664&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Import & Export',
    description: 'Seamless international trade logistics. We handle sourcing, customs clearance, and global shipping to connect you with international markets efficiently.',
    icon: Globe2,
    color: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-emerald-100',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'General Trading',
    description: 'Your reliable procurement partner. We source and supply a wide range of premium commodities and industrial equipment to meet diverse business needs.',
    icon: ShoppingBag,
    color: 'bg-purple-50 text-purple-600',
    borderColor: 'border-purple-100',
    image: 'https://images.unsplash.com/photo-1553413002-9c3f91845180?q=80&w=2670&auto=format&fit=crop'
  }
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive solutions tailored to accelerate your business growth. We combine industry expertise with unwavering reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col pt-8 pb-10 px-8 rounded-3xl border ${service.borderColor} bg-white shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-sm`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                {service.description}
              </p>
              
              <div className="mt-auto overflow-hidden rounded-xl h-48 mb-6 relative">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <a href="#contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
