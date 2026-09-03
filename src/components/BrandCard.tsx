import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Brand } from '../types';

interface BrandCardProps {
  brand: Brand;
  onSelect: (brand: Brand) => void;
}

export const BrandCard: React.FC<BrandCardProps> = ({
  brand,
  onSelect
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onSelect(brand)}
      className="group sch-brand-card overflow-hidden flex flex-col cursor-pointer p-6 relative transition-all duration-300 hover:shadow-lg"
    >
      {/* Top section: Original company logo container */}
      <div className="relative h-32 rounded-[20px] overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:border-slate-200 group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all">
        {/* Subtle badge on top-right */}
        {brand.specialBadge && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-gradient-to-r from-[#ef3479] to-[#ff761c] text-white shadow-xs flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 flex-shrink-0" aria-hidden="true" />
              <span>{brand.specialBadge}</span>
            </span>
          </div>
        )}

        {/* Original Company Logo */}
        {!imgError ? (
          <img
            src={brand.logo}
            alt={`${brand.name} Logo`}
            onError={() => setImgError(true)}
            className="max-h-14 max-w-[82%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="text-center">
            <span className="text-base font-extrabold text-[#191919] tracking-tight">{brand.name}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="pt-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#191919] tracking-tight group-hover:text-[#ef3479] transition-colors">
              {brand.name}
            </h3>
          </div>
          
          <p className="text-[11px] font-semibold text-[#ef3479] line-clamp-1 italic mt-0.5">
            {brand.tagline}
          </p>

          <p className="text-xs text-[#777777] leading-relaxed line-clamp-3 mt-2">
            {brand.description}
          </p>

          {/* Key Products Summary */}
          {brand.keyProductsSummary && (
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {brand.keyProductsSummary.slice(0, 3).map((prod) => (
                <span
                  key={prod}
                  className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#f5f6f8] text-[#555] border border-slate-200/60"
                >
                  {prod}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className="mt-5 pt-3.5 border-t border-[#f0f0f0] flex items-center justify-between">
          <span className="text-[11px] text-[#a1a1a1] font-semibold">
            {brand.foundedOrOrigin || 'Authorized Partner'}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#191919] group-hover:text-[#ef3479] group-hover:translate-x-1 transition-all">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
