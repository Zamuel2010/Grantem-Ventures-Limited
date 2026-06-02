import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, ArrowLeft, Copy, Check } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { motion } from 'motion/react';

interface ContactProps {
  setCurrentPage?: (page: string) => void;
}

export function Contact({ setCurrentPage }: ContactProps) {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopy = (text: string, type: 'phone1' | 'phone2' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(type);
      setTimeout(() => setCopiedPhone(null), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us. We will get back to you shortly.');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[30%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-[100px] pointer-events-none -z-10" />

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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-accent-black dark:text-white mb-6 tracking-tight drop-shadow-sm"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
            >
              We're here to answer any questions about our printing, importing, or trading services. Reach out today.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-accent-black dark:text-white tracking-tight transition-colors">Contact Information</h2>
          
          <div className="space-y-10 mb-12">
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-all">
                <Phone className="w-7 h-7 text-primary-700 dark:text-primary-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-xl text-accent-black dark:text-white mb-3 transition-colors">Phone numbers</h4>
                <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-3">
                     <a href="tel:08027074837" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 text-lg sm:text-xl font-medium transition-colors">0802 707 4837</a>
                     <button onClick={() => handleCopy('08027074837', 'phone1')} className="p-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-500 transition-colors" title="Copy Phone Number">
                       {copiedPhone === 'phone1' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                     </button>
                   </div>
                   <div className="flex items-center gap-3">
                     <a href="tel:08027485271" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 text-lg sm:text-xl font-medium transition-colors">0802 748 5271</a>
                     <button onClick={() => handleCopy('08027485271', 'phone2')} className="p-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-500 transition-colors" title="Copy Phone Number">
                       {copiedPhone === 'phone2' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                     </button>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-all">
                <Mail className="w-7 h-7 text-primary-700 dark:text-primary-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-xl text-accent-black dark:text-white mb-3 transition-colors">Email Address</h4>
                <div className="flex items-center gap-3">
                  <a href="mailto:info@gratemventures.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 text-lg font-medium transition-colors break-all">info@gratemventures.com</a>
                  <button onClick={() => handleCopy('info@gratemventures.com', 'email')} className="p-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-500 transition-colors shrink-0" title="Copy Email Address">
                    {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-all">
                <MapPin className="w-7 h-7 text-primary-700 dark:text-primary-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-xl text-accent-black dark:text-white mb-3 transition-colors">Business Address</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-md transition-colors font-medium">
                  No. 6, Atewolara, Off Headway Road, Favour of God CDA, Ijumo Layout, Iyesi Ota, Ogun State, Nigeria
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-[#25D366]/20 dark:border-gray-800/60 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-all">
                <WhatsAppIcon className="w-7 h-7 text-[#25D366] group-hover:scale-110 transition-transform" />
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-xl text-accent-black dark:text-white mb-2 transition-colors">WhatsApp Direct</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 font-medium">Fastest way to reach us</p>
                <a href="https://wa.me/2348027074837" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20A656] text-white px-6 py-3.5 rounded-xl font-bold shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_20px_rgba(37,211,102,0.4)] transition-all active:scale-95">
                  <WhatsAppIcon className="w-5 h-5 fill-white text-[#25D366]" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8 }}
           className="flex-1 w-full max-w-xl mx-auto lg:mx-0"
        >
          <div className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border text-left border-gray-200/60 dark:border-gray-800/60 rounded-[40px] p-8 sm:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <h3 className="font-display font-bold text-3xl mb-8 border-b border-gray-200/50 dark:border-gray-800/50 pb-6 text-accent-black dark:text-white tracking-tight transition-colors">Send us a message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="name" className="text-[15px] font-bold text-accent-black dark:text-white transition-colors">Full Name</label>
                <input type="text" id="name" required className="bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-gray-800 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600/50 focus:border-primary-600 transition-all font-medium shadow-sm hover:border-gray-300 dark:hover:border-gray-700" placeholder="Enter your full name" />
              </div>
              
              <div className="flex flex-col gap-2.5">
                <label htmlFor="phone" className="text-[15px] font-bold text-accent-black dark:text-white transition-colors">Phone Number</label>
                <input type="tel" id="phone" required className="bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-gray-800 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600/50 focus:border-primary-600 transition-all font-medium shadow-sm hover:border-gray-300 dark:hover:border-gray-700" placeholder="0802..." />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="text-[15px] font-bold text-accent-black dark:text-white transition-colors">Your Message</label>
                <textarea id="message" rows={5} required className="bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-gray-800 rounded-2xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600/50 focus:border-primary-600 transition-all resize-none font-medium shadow-sm hover:border-gray-300 dark:hover:border-gray-700" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="group mt-6 bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 active:scale-95 transition-all text-white font-bold text-[16px] px-8 py-5 rounded-2xl flex items-center justify-center gap-2.5 shadow-[0_8px_24px_rgba(200,30,30,0.25)] hover:shadow-[0_12px_32px_rgba(200,30,30,0.35)]">
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Enquiry
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
