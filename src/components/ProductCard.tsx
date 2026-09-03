import React from 'react';
import { ArrowRight, Check, MessageCircle, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { companyData } from '../data/companyData';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickQuote?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect
}) => {
  const handleWhatsAppEnquire = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Hello Shubham Colour House! I am interested in: *${product.name}* (${product.brandName}).%0A` +
      `Please provide pack size options, availability, and dealer price. Thank you!`;
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      onClick={() => onSelect(product)}
      className="group sch-white-card overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 m-3 rounded-[24px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white">
            {product.brandName}
          </span>
          {product.isFeatured && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-[#ef3479] to-[#ff761c] text-white flex items-center gap-1 shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              Featured
            </span>
          )}
        </div>

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-[#191919] shadow-sm">
            {product.categoryName}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {product.applicationArea}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777] block mb-1">
            {product.brandName}
          </span>
          <h3 className="font-extrabold text-[#191919] text-lg group-hover:text-[#ef3479] transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-[#777777] mt-2 line-clamp-2 leading-relaxed">
            {product.shortBenefit}
          </p>

          {/* Key Benefits */}
          {product.keyBenefits && product.keyBenefits.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {product.keyBenefits.slice(0, 2).map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#555]">
                  <Check className="w-3.5 h-3.5 text-[#ef3479] flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{benefit}</span>
                </div>
              ))}
            </div>
          )}

          {/* Pack sizes preview */}
          {product.availablePackSizes && (
            <div className="mt-4 flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#a1a1a1]">Packs:</span>
              {product.availablePackSizes.slice(0, 3).map((pack) => (
                <span key={pack} className="text-[10px] font-bold bg-[#f5f6f8] text-[#555] px-2 py-0.5 rounded-full border border-slate-200/60">
                  {pack}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="mt-5 pt-4 border-t border-[#f0f0f0] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleWhatsAppEnquire}
            className="p-2.5 rounded-full text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors flex items-center gap-1.5 text-xs font-bold"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[11px]">Quote</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#191919] group-hover:text-[#ef3479] group-hover:translate-x-1 transition-all">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
