import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFAB } from './components/WhatsAppFAB';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 w-full flex flex-col selection:bg-primary-100 dark:selection:bg-primary-900/50 selection:text-primary-900 dark:selection:text-white transition-colors duration-300">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1 mt-[72px]">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <About setCurrentPage={setCurrentPage} />}
        {currentPage.startsWith('services') && <Services subPage={currentPage} setCurrentPage={setCurrentPage} />}
        {currentPage === 'gallery' && <Gallery setCurrentPage={setCurrentPage} />}
        {currentPage === 'contact' && <Contact setCurrentPage={setCurrentPage} />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppFAB />
    </div>
  );
}
