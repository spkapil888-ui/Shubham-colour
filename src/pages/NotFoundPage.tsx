import React from 'react';
import { Home, ArrowLeft, Building2, ShoppingBag, Phone, Sparkles } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (tab: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center space-y-8">
      <div className="w-20 h-20 rounded-3xl bg-rose-50 border border-rose-200 text-[#ef3479] flex items-center justify-center mx-auto shadow-sm">
        <Building2 className="w-10 h-10" />
      </div>

      <div className="space-y-3 max-w-lg mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-[#ef3479]" />
          404 Page Error
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-[#777777] leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Use the links below to return to our catalog or contact the showroom.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={() => onNavigate('home')}
          className="btn-primary text-xs tracking-wider uppercase px-6 py-3 flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Go to Home</span>
        </button>

        <button
          onClick={() => onNavigate('brands')}
          className="btn-secondary text-xs tracking-wider uppercase px-6 py-3 flex items-center gap-2"
        >
          <Building2 className="w-4 h-4 text-[#ef3479]" />
          <span>Shop By Brand</span>
        </button>

        <button
          onClick={() => onNavigate('products')}
          className="btn-secondary text-xs tracking-wider uppercase px-6 py-3 flex items-center gap-2"
        >
          <ShoppingBag className="w-4 h-4 text-[#ff761c]" />
          <span>All Products</span>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-full text-xs font-extrabold tracking-wider uppercase bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors flex items-center gap-2"
        >
          <Phone className="w-4 h-4 text-slate-600" />
          <span>Contact Us</span>
        </button>
      </div>
    </div>
  );
};
