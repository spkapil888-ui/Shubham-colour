import React from 'react';
import { MessageCircle, Phone, MapPin, Calculator, Calendar, PhoneForwarded } from 'lucide-react';
import { companyData } from '../data/companyData';

interface TopHeaderProps {
  onOpenCalculator: () => void;
  onOpenEnquiry: (note?: string) => void;
  onNavigate: (tab: string) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  onOpenCalculator,
  onOpenEnquiry,
  onNavigate
}) => {
  return (
    <div className="w-full bg-[#0f141d] text-slate-300 text-[11px] py-1 px-3 sm:px-6 border-b border-slate-800/80">
      <div className="max-w-[1540px] mx-auto flex items-center justify-between gap-3 text-[11px]">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-3 sm:gap-4 truncate">
          <a
            href={`tel:${companyData.phoneTel}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors flex-shrink-0"
            title="Call Now"
          >
            <Phone className="w-3 h-3 text-[#ff761c]" />
            <span className="font-semibold tracking-tight">{companyData.phonePrimary}</span>
          </a>

          <a
            href={companyData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors flex-shrink-0 font-medium"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-3 h-3 fill-current" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
          </a>

          <span className="hidden md:inline text-slate-700">|</span>

          <div className="hidden md:flex items-center gap-1 text-slate-400 truncate text-[11px]">
            <MapPin className="w-3 h-3 text-rose-400 flex-shrink-0" />
            <span className="truncate">Plot No. 43, Scheme No. 2, Alwar</span>
          </div>
        </div>

        {/* Right: Quick Action Links */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={() => onOpenEnquiry('Request Callback: Quick phone consultation')}
            className="hover:text-white transition-colors text-slate-300 flex items-center gap-1 text-[11px]"
          >
            <PhoneForwarded className="w-2.5 h-2.5 text-sky-400" />
            <span className="hidden sm:inline">Callback</span>
          </button>

          <span className="text-slate-700">•</span>

          <button
            onClick={onOpenCalculator}
            className="hover:text-white transition-colors text-slate-300 flex items-center gap-1 font-medium text-[11px]"
          >
            <Calculator className="w-2.5 h-2.5 text-[#ff761c]" />
            <span>Calculator</span>
          </button>

          <span className="text-slate-700 hidden sm:inline">•</span>

          <button
            onClick={() => onOpenEnquiry('Free On-Site Inspection & Moisture Test')}
            className="text-emerald-400 hover:text-emerald-300 transition-colors hidden sm:flex items-center gap-1 font-semibold text-[11px]"
          >
            <Calendar className="w-2.5 h-2.5" />
            <span>Free Visit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
