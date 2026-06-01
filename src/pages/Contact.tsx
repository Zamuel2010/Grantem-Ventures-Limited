import { Phone, MapPin, Mail, Send } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us. We will get back to you shortly.');
  };

  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24 border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-accent-black dark:text-white mb-4 tracking-tight transition-colors">Get In Touch</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto transition-colors">
            We're here to answer any questions about our printing, importing, or trading services. Reach out today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="flex-1">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-accent-black dark:text-white tracking-tight transition-colors">Contact Information</h2>
          
          <div className="space-y-10 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/40 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-primary-700 dark:text-primary-400" />
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-xl text-accent-black dark:text-white mb-3 transition-colors">Phone numbers</h4>
                <div className="flex flex-col gap-2">
                   <a href="tel:08027074837" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 text-lg sm:text-xl font-medium transition-colors">0802 707 4837</a>
                   <a href="tel:08027485271" className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 text-lg sm:text-xl font-medium transition-colors">0802 748 5271</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/40 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-primary-700 dark:text-primary-400" />
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-xl text-accent-black dark:text-white mb-3 transition-colors">Business Address</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-md transition-colors">
                  No. 6, Atewolara, Off Headway Road, Favour of God CDA, Ijumo Layout, Iyesi Ota, Ogun State, Nigeria
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-[#25D366]" />
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-xl text-accent-black dark:text-white mb-3 transition-colors">WhatsApp Direct</h4>
                <a href="https://wa.me/2348027074837" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#25D366] text-lg font-medium inline-block transition-colors">
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
          <div className="bg-white dark:bg-gray-900 border text-left border-gray-200 dark:border-gray-800 rounded-[32px] p-8 sm:p-12 shadow-sm">
            <h3 className="font-display font-bold text-3xl mb-8 border-b border-gray-100 dark:border-gray-800 pb-6 text-accent-black dark:text-white tracking-tight transition-colors">Send us a message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="name" className="text-sm font-bold text-accent-black dark:text-white transition-colors">Full Name</label>
                <input type="text" id="name" required className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-700/50 dark:focus:ring-primary-400/50 focus:border-primary-700 transition-all font-medium" placeholder="Enter your full name" />
              </div>
              
              <div className="flex flex-col gap-2.5">
                <label htmlFor="phone" className="text-sm font-bold text-accent-black dark:text-white transition-colors">Phone Number</label>
                <input type="tel" id="phone" required className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-700/50 dark:focus:ring-primary-400/50 focus:border-primary-700 transition-all font-medium" placeholder="0802..." />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="text-sm font-bold text-accent-black dark:text-white transition-colors">Your Message</label>
                <textarea id="message" rows={5} required className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-700/50 dark:focus:ring-primary-400/50 focus:border-primary-700 transition-all resize-none font-medium" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="mt-4 bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 active:scale-95 transition-all text-white font-bold text-[16px] px-8 py-5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-xl">
                <Send className="w-5 h-5" />
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
