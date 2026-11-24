import React, { useState } from 'react';
import { Search, ArrowLeft, MessageCircle, Phone, Sparkles, Building2 } from 'lucide-react';
import { brandsData } from '../data/brandsData';
import { companyData } from '../data/companyData';
import { BrandCard } from './BrandCard';
import { Brand } from '../types';

interface BrandNotFoundViewProps {
  requestedSlug?: string;
  onNavigate: (tab: string) => void;
  onSelectBrand: (brand: Brand | string) => void;
  onOpenEnquiry: (note?: string) => void;
}

export const BrandNotFoundView: React.FC<BrandNotFoundViewProps> = ({
  requestedSlug,
  onNavigate,
  onSelectBrand,
  onOpenEnquiry
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const displaySlug = requestedSlug ? requestedSlug.replace(/[-_]/g, ' ') : 'Requested Brand';

  const filteredBrands = brandsData.filter((b) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      b.name.toLowerCase().includes(q) ||
      b.slug.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q)
    );
  });

  const handleWhatsAppHelp = () => {
    const text = `Hello Shubham Colour House! I was searching on your website for the brand: *${displaySlug}*.%0A` +
      `Do you have products or stock for this brand available at your Alwar showroom?`;
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-8 space-y-12 pb-24">
      {/* TOP BREADCRUMB */}
      <div className="flex items-center justify-between text-xs text-[#777777]">
        <button
          onClick={() => onNavigate('brands')}
          className="flex items-center gap-2 font-extrabold text-[#191919] hover:text-[#ef3479] transition-colors py-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All 24 Brands</span>
        </button>
        <span className="font-bold text-slate-400">Brand Directory</span>
      </div>

      {/* NOT FOUND CALLOUT CARD */}
      <div className="bg-white rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 border border-slate-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.04)] text-center max-w-3xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-rose-50 border border-rose-200/60 text-[#ef3479] flex items-center justify-center mx-auto shadow-xs">
          <Building2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Brand Catalog Notice
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#191919] tracking-tight">
            Brand Page Not Found
          </h1>
          <p className="text-sm text-[#666666] max-w-xl mx-auto leading-relaxed">
            We could not find a dedicated page matching <strong className="text-[#191919]">"{displaySlug}"</strong>.
            Shubham Colour House is an authorized direct dealer for 24+ major brands in Alwar. You can explore our catalog below or message our desk directly.
          </p>
        </div>

        {/* SEARCH INPUT */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search brands (e.g. Asian Paints, Berger, Nerolac)..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#ef3479] focus:bg-white transition-all shadow-xs"
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('brands')}
            className="btn-primary text-xs tracking-wider uppercase px-6 py-3"
          >
            Browse All 24 Brands
          </button>

          <button
            onClick={handleWhatsAppHelp}
            className="px-5 py-3 rounded-full text-xs font-extrabold tracking-wider uppercase bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-2 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask On WhatsApp</span>
          </button>

          <a
            href={`tel:${companyData.phoneTel}`}
            className="btn-secondary text-xs tracking-wider uppercase px-5 py-3 flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#ef3479]" />
            <span>Call Showroom</span>
          </a>
        </div>
      </div>

      {/* AUTHORIZED BRANDS LIST */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-[#191919]">
              Authorized Manufacturer Partners
            </h2>
            <p className="text-xs text-[#777777] mt-0.5">
              Select any verified paint, chemical, or finish brand below to view products and specifications.
            </p>
          </div>
          <span className="text-xs font-extrabold text-[#ef3479] bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100 self-start sm:self-auto">
            {filteredBrands.length} Brands Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBrands.slice(0, 8).map((brand) => (
            <BrandCard
              key={brand.slug}
              brand={brand}
              onSelect={(b) => onSelectBrand(b)}
            />
          ))}
        </div>

        {filteredBrands.length > 8 && (
          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('brands')}
              className="btn-secondary text-xs tracking-wider uppercase px-8 py-3.5"
            >
              Explore Full 24+ Brand Directory
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
