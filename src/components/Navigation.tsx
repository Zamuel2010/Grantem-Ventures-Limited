import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial dark mode
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    setIsDarkMode(root.classList.contains('dark'));
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { 
      id: 'services', 
      label: 'Services',
      subItems: [
        { id: 'services-printing', label: 'Printing Services' },
        { id: 'services-import-export', label: 'Import & Export' },
        { id: 'services-solar', label: 'Solar Products' },
        { id: 'services-tyres-batteries', label: 'Tyres & Batteries' },
        { id: 'services-farm', label: 'Farm Produce' },
        { id: 'services-accessories', label: 'Phone Accessories' },
      ]
    },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 h-[72px] transition-all duration-300 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 ${scrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50' : 'bg-transparent border-b border-transparent'}`}>
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
        <div className="w-6 h-6 bg-primary-700 dark:bg-primary-600 rounded-sm transform rotate-45 flex items-center justify-center shadow-lg">
          <div className="w-3 h-3 bg-white transform -rotate-45" />
        </div>
        <span className="font-display font-extrabold text-[18px] sm:text-xl text-accent-black dark:text-white tracking-tight drop-shadow-sm">
          gratem<span className="text-primary-700 dark:text-primary-500 font-medium">ventures</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map(item => (
          <div 
            key={item.id} 
            className="relative"
            onMouseEnter={() => item.subItems && setServicesOpen(true)}
            onMouseLeave={() => item.subItems && setServicesOpen(false)}
          >
            <button 
              onClick={() => handleNavClick(item.id)}
              className={`text-[15px] flex items-center gap-1 font-semibold transition-colors border-b-2 py-6 ${
                currentPage.startsWith(item.id) ? 'text-primary-700 border-primary-700 dark:text-primary-400 dark:border-primary-400' : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-accent-black dark:hover:text-white'
              }`}
            >
              {item.label}
              {item.subItems && <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />}
            </button>
            
            {item.subItems && servicesOpen && (
              <div className="absolute top-[68px] left-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-200/50 dark:border-gray-800/50 rounded-2xl py-3 min-w-[260px] flex flex-col z-50 animate-in fade-in slide-in-from-top-2">
                {item.subItems.map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => handleNavClick(sub.id)}
                    className={`text-left px-6 py-2.5 text-[14px] font-semibold transition-all hover:bg-gray-50/80 dark:hover:bg-gray-800/80 hover:pl-7 ${
                      currentPage === sub.id ? 'text-primary-700 dark:text-primary-400 pl-7' : 'text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-300'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleDarkMode} 
          className="p-2 text-gray-500 hover:text-accent-black dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-50 dark:hover:bg-gray-800"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <a href="tel:08027074837" className="hidden sm:flex items-center gap-2 bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors text-white px-5 py-2.5 text-[14px] font-semibold rounded-md shadow-sm">
          <Phone className="w-4 h-4" />
          Call Us
        </a>
        <button 
          className="md:hidden text-accent-black dark:text-white p-1 active:scale-95 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7 stroke-[2.5px]" /> : <Menu className="w-7 h-7 stroke-[2.5px]" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-[72px] bg-black/20 dark:bg-black/60 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-[72px] left-0 right-0 bg-white dark:bg-gray-950 shadow-xl border-t border-gray-50 dark:border-gray-800 flex flex-col p-4 md:hidden overflow-y-auto max-h-[calc(100vh-72px)] z-50">
            {navItems.map(item => (
             <div key={item.id} className="flex flex-col border-b border-gray-50 dark:border-gray-800">
               <div className="flex items-center justify-between">
                 <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left w-full text-lg font-semibold py-4 transition-colors ${
                      currentPage.startsWith(item.id) && !item.subItems ? 'text-primary-700 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300'
                    }`}
                 >
                   {item.label}
                 </button>
                 {item.subItems && (
                   <button onClick={() => setServicesOpen(!servicesOpen)} className="p-4">
                     <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180 text-primary-700 dark:text-primary-400' : 'text-gray-400 dark:text-gray-500'}`} />
                   </button>
                 )}
               </div>
               
               {item.subItems && servicesOpen && (
                 <div className="flex flex-col pl-4 pb-2 bg-gray-50 dark:bg-gray-900 rounded-lg mb-2">
                   {item.subItems.map(sub => (
                     <button
                        key={sub.id}
                        onClick={() => handleNavClick(sub.id)}
                        className={`text-left text-base font-medium py-3 border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors ${
                          currentPage === sub.id ? 'text-primary-700 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
                        }`}
                     >
                       {sub.label}
                     </button>
                   ))}
                 </div>
               )}
             </div>
           ))}
           <a href="tel:08027074837" className="mt-6 w-full flex justify-center items-center gap-2 bg-primary-700 text-white px-4 py-3.5 text-[16px] font-semibold rounded-md shadow-md">
             <Phone className="w-5 h-5" />
             0802 707 4837
           </a>
        </div>
        </>
      )}
    </header>
  );
}
