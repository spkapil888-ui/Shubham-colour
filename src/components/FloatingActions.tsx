import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Calculator, Navigation, ArrowUp } from 'lucide-react';
import { companyData } from '../data/companyData';

interface FloatingActionsProps {
  onOpenCalculator: () => void;
  onOpenEnquiry: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenCalculator
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* DESKTOP & TABLET FLOATING WHATSAPP & SCROLL TOP */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white hover:bg-slate-50 text-[#191919] shadow-xl flex items-center justify-center transition-all hover:scale-110 border border-slate-200"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-[#191919]" />
          </button>
        )}

        <a
          href={companyData.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#191919] hover:bg-black text-white shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#ef3479] rounded-full animate-ping"></span>
          </div>
          <span className="text-xs font-extrabold uppercase tracking-wider">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Spacer so the fixed mobile bar never covers forms or footer content */}
      <div className="sm:hidden h-[calc(4.25rem+env(safe-area-inset-bottom))]" aria-hidden="true" />

      {/* MOBILE BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] px-4 flex items-center justify-around shadow-2xl">
        {/* Call */}
        <a
          href={`tel:${companyData.phoneTel}`}
          className="flex flex-col items-center gap-1 text-[#777] hover:text-[#191919] text-[10px] font-bold"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 text-[#191919] flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </div>
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={companyData.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-col items-center gap-1 text-emerald-700 hover:text-emerald-800 text-[10px] font-bold"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span>WhatsApp</span>
        </a>

        {/* Calculator */}
        <button
          onClick={onOpenCalculator}
          className="flex flex-col items-center gap-1 text-[#777] hover:text-[#191919] text-[10px] font-bold"
        >
          <div className="w-8 h-8 rounded-full bg-pink-50 text-[#ef3479] flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </div>
          <span>Calculator</span>
        </button>

        {/* Directions */}
        <a
          href={companyData.mainStoreAddress.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-[#777] hover:text-[#191919] text-[10px] font-bold"
        >
          <div className="w-8 h-8 rounded-full bg-orange-50 text-[#ff761c] flex items-center justify-center">
            <Navigation className="w-4 h-4" />
          </div>
          <span>Store</span>
        </a>
      </div>
    </>
  );
};
