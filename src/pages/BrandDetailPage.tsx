import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Check, 
  MessageCircle, 
  Award,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SEOHead } from '../components/SEOHead';
import { getPageSEO } from '../utils/seoConfig';
import { productsData } from '../data/productsData';
import { companyData } from '../data/companyData';
import { Brand, Product } from '../types';

interface BrandDetailPageProps {
  brand: Brand;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (brandName?: string) => void;
}

export const BrandDetailPage: React.FC<BrandDetailPageProps> = ({
  brand,
  onBack,
  onSelectProduct,
  onOpenEnquiry
}) => {
  const [logoError, setLogoError] = useState(false);

  if (!brand) {
    return (
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-16 text-center space-y-4">
        <p className="text-sm font-bold text-slate-700">Brand details not available</p>
        <button onClick={onBack} className="btn-primary text-xs px-6 py-2.5">
          Back to All Brands
        </button>
      </div>
    );
  }

  const brandProducts = productsData.filter((p) => p.brandSlug === brand.slug);

  const handleWhatsAppEnquire = () => {
    const text = `Hello Shubham Colour House! I am looking for products and pricing for: *${brand.name}*.%0A` +
      `Please share available stock, shade availability, and contractor rate. Thank you!`;
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
  };

  const pageSEO = getPageSEO('brand-detail', { brand });

  return (
    <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-6 space-y-10 pb-20">
      <SEOHead {...pageSEO} />
      {/* BREADCRUMB & BACK */}
      <div className="flex items-center justify-between text-xs text-[#777777]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-extrabold text-[#191919] hover:text-[#ef3479] transition-colors py-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to All Brands</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-[#a1a1a1]">
          <span>Home</span>
          <span>/</span>
          <span>Brands</span>
          <span>/</span>
          <span className="text-[#191919] font-bold">{brand.name}</span>
        </div>
      </div>

      {/* BRAND HERO BANNER */}
      <div className="relative rounded-[40px] overflow-hidden bg-black text-white min-h-[320px] flex items-end p-8 sm:p-14 shadow-2xl border border-white/10">
        <img
          src={brand.bannerImage}
          alt={brand.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            {brand.specialBadge ? (
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#ef3479] text-white shadow">
                {brand.specialBadge}
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-800 text-white shadow">
                Genuine Stockist in Alwar
              </span>
            )}
            {brand.foundedOrOrigin && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-xs">
                {brand.foundedOrOrigin}
              </span>
            )}
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            {!logoError && (
              <div className="bg-white rounded-2xl p-3 h-16 w-32 flex items-center justify-center shadow-lg">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  onError={() => setLogoError(true)}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            )}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {brand.name}
              </h1>
              <p className="text-base sm:text-lg text-[#ddd] font-light italic mt-1">
                "{brand.tagline}"
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#bbb] leading-relaxed max-w-2xl pt-1">
            {brand.description}
          </p>

          {brand.officialRefUrl && (
            <div className="pt-2">
              <a
                href={brand.officialRefUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white underline underline-offset-4"
              >
                <span>Official Brand Website</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* WHY CHOOSE & DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Why Choose & Highlights */}
        <div className="lg:col-span-8 space-y-6">
          <div className="sch-white-card p-8 space-y-4">
            <h3 className="text-xl font-extrabold text-[#191919] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#ef3479]" aria-hidden="true" />
              Why Choose {brand.name}?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(brand.whyChoose || []).map((reason, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#333] font-bold">
                  <Check className="w-4 h-4 text-[#ef3479] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          {brand.keyHighlights && brand.keyHighlights.length > 0 && (
            <div className="sch-white-card p-8 space-y-4">
              <h3 className="text-xl font-extrabold text-[#191919] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#ff761c]" aria-hidden="true" />
                Key Formulations &amp; Features
              </h3>
              <div className="space-y-2.5">
                {brand.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#444] font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ef3479] flex-shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications */}
          {brand.applications && brand.applications.length > 0 && (
            <div className="sch-white-card p-8 space-y-3">
              <h4 className="sch-label">
                Recommended Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {brand.applications.map((app) => (
                  <span
                    key={app}
                    className="px-4 py-2 rounded-2xl text-xs font-bold bg-[#f8f8f8] text-[#191919] border border-slate-200/60"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Quick Action */}
        <div className="lg:col-span-4 sch-white-card p-8 space-y-4 sticky top-24">
          <div className="flex items-center gap-2 text-[#ef3479] font-extrabold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            100% Genuine Factory Direct
          </div>

          <h4 className="text-xl font-extrabold text-[#191919]">
            Need Wholesale Rates or Stock in Alwar?
          </h4>

          <p className="text-xs text-[#777777] leading-relaxed">
            We maintain direct manufacturer stock for {brand.name} in high volume at our Scheme No. 2 showroom.
          </p>

          <div className="pt-2 space-y-3">
            <button
              onClick={handleWhatsAppEnquire}
              className="btn-primary text-xs tracking-[0.16em] w-full"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WHATSAPP INQUIRY</span>
            </button>

            <button
              onClick={() => onOpenEnquiry(brand.name)}
              className="btn-secondary text-xs tracking-[0.12em] w-full"
            >
              <Sparkles className="w-4 h-4 text-[#ef3479]" aria-hidden="true" />
              <span>REQUEST TECHNICAL TDS</span>
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCTS BY THIS BRAND */}
      <div className="space-y-6 pt-6 border-t border-[#f0f0f0]">
        <div>
          <h3 className="text-2xl font-extrabold text-[#191919]">
            Featured Products from {brand.name}
          </h3>
          <p className="text-xs text-[#777777] mt-0.5">
            Available at Shubham Colour House, Alwar
          </p>
        </div>

        {brandProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => onSelectProduct(p)}
                onQuickQuote={() => onOpenEnquiry(product.name)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center sch-white-card text-xs text-[#777777]">
            Full {brand.name} product line and custom color tinting available on immediate order. Call or WhatsApp our desk for stock details.
          </div>
        )}
      </div>
    </div>
  );
};
