import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50 flex items-center min-h-[90vh]">
      {/* Background with simple elegant shapes or image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-50/80 via-white to-gray-50/50 backdrop-blur-3xl z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" 
          alt="Business Trading"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6 tracking-tight">
            Gratem Ventures <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Limited
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 font-medium">
            Printing • Import & Export • General Trading
          </p>
          
          <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Delivering excellence across borders. We provide premium printing solutions, streamlined global trade, and comprehensive general trading services to scale your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              View Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex w-full sm:w-auto gap-4">
              <a 
                href="tel:+1234567890" 
                className="flex-1 sm:w-auto px-6 py-4 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all shadow-sm border border-gray-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-gray-600" />
                Call Us
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" rel="noopener noreferrer"
                className="flex-1 sm:w-auto px-6 py-4 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-medium hover:bg-[#C8E6C9] transition-all shadow-sm border border-[#A5D6A7] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square max-w-lg ml-auto">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2532&auto=format&fit=crop" 
              alt="Trading and Logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent flex flex-col justify-end p-8">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                <p className="font-display font-semibold text-gray-900">Global Reach</p>
                <p className="text-sm text-gray-600">Connecting businesses worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
