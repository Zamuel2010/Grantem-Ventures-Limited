import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 border-t-[8px] border-primary-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-primary-700 rounded-sm transform rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 bg-white transform -rotate-45" />
            </div>
            <span className="font-display font-extrabold text-xl text-white tracking-tight">
              gratem<span className="text-primary-600 font-medium">ventures</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
            A premier business enterprise providing top-notch corporate services, trade logistics, and printing solutions in Nigeria.
          </p>
        </div>

        <div>
           <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
           <div className="flex flex-col gap-3 text-gray-400 text-sm">
             <button onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }} className="text-left hover:text-white transition-colors">Home</button>
             <button onClick={() => { setCurrentPage('about'); window.scrollTo(0,0); }} className="text-left hover:text-white transition-colors">About Us</button>
             <button onClick={() => { setCurrentPage('services'); window.scrollTo(0,0); }} className="text-left hover:text-white transition-colors">Our Services</button>
             <button onClick={() => { setCurrentPage('gallery'); window.scrollTo(0,0); }} className="text-left hover:text-white transition-colors">Gallery</button>
             <button onClick={() => { setCurrentPage('contact'); window.scrollTo(0,0); }} className="text-left hover:text-white transition-colors">Contact</button>
           </div>
        </div>

        <div>
           <h4 className="font-semibold text-lg mb-6 text-white">Contact Informations</h4>
           <div className="flex flex-col gap-4 text-gray-400 text-sm">
             <div className="flex items-start gap-3">
               <Phone className="w-4 h-4 mt-1 shrink-0 text-primary-500" />
               <div className="flex flex-col gap-1">
                 <a href="tel:08027074837" className="hover:text-white">0802 707 4837</a>
                 <a href="tel:08027485271" className="hover:text-white">0802 748 5271</a>
               </div>
             </div>
             <div className="flex items-start gap-3">
               <MapPin className="w-4 h-4 mt-1 text-primary-500 shrink-0" />
               <span className="leading-relaxed">No. 6, Atewolara, Off Headway Road, Favour of God CDA, Ijumo Layout, Iyesi Ota, Ogun State, Nigeria</span>
             </div>
             <div className="flex items-start gap-3 mt-1">
               <Mail className="w-4 h-4 mt-1 text-primary-500 shrink-0" />
               <a href="mailto:info@gratemventures.com" className="hover:text-white">info@gratemventures.com</a>
             </div>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col items-center text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Gratem Ventures Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
