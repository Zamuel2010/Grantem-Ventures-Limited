import { MessageCircle } from 'lucide-react';

export function WhatsAppFAB() {
  return (
    <a 
      href="https://wa.me/2348027074837" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.4)] hover:bg-[#1ebd5a] hover:-translate-y-1 active:scale-95 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
