import { Phone, MessageCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Top Contact Strip */}
      <div className="bg-primary-900 text-primary-50 py-2 px-4 sm:px-6 lg:px-8 text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Us: </span>
              +1 234 567 890
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span className="hidden sm:inline">WhatsApp: </span>
              +1 234 567 890
            </a>
          </div>
          <div className="hidden md:block text-primary-100">
            Open Mon-Fri, 9:00 AM - 5:00 PM
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-display font-bold text-xl shadow-md">
            G
          </div>
          <span className="font-display font-bold text-xl sm:text-2xl text-gray-900 tracking-tight">
            Gratem Ventures
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#services" className="hover:text-primary-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-primary-600 transition-colors">About Us</a>
          <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:flex px-5 py-2.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all shadow-sm shadow-primary-600/30 active:scale-95">
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
