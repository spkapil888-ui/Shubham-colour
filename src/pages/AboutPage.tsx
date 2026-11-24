import React, { useState, useMemo } from 'react';
import { 
  Award, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';
import { companyData, testimonialsData } from '../data/companyData';
import { brandsData } from '../data/brandsData';
import { Brand } from '../types';

interface AboutPageProps {
  onNavigate: (tab: string) => void;
  onOpenEnquiry: () => void;
  onOpenCalculator: () => void;
  onSelectBrand?: (brand: Brand) => void;
}

interface AboutBrandCardProps {
  brand: Brand;
  onClick: () => void;
}

const AboutBrandCard: React.FC<AboutBrandCardProps> = ({ brand, onClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="p-4 sm:p-5 rounded-[24px] bg-white border border-slate-200/80 hover:border-[#ef3479] hover:shadow-[0_10px_30px_rgba(239,52,121,0.08)] transition-all text-center cursor-pointer group flex flex-col justify-between items-center relative overflow-hidden"
    >
      {/* Top subtle badge if available */}
      {brand.specialBadge && (
        <span className="absolute top-2.5 right-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200/60 group-hover:bg-pink-50 group-hover:text-[#ef3479] group-hover:border-[#ef3479]/30 transition-colors">
          {brand.specialBadge}
        </span>
      )}

      {/* Logo container */}
      <div className="w-full h-16 sm:h-20 flex items-center justify-center p-2 rounded-xl bg-white">
        {!imgError ? (
          <img
            src={brand.logo}
            alt={`${brand.name} Logo`}
            onError={() => setImgError(true)}
            className="max-h-11 sm:max-h-13 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-12 w-full flex items-center justify-center">
            <span className="text-xs sm:text-sm font-extrabold text-[#191919]">{brand.name}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="w-full mt-2 pt-2.5 border-t border-slate-100 flex flex-col justify-center">
        <div className="font-extrabold text-xs sm:text-sm text-[#191919] group-hover:text-[#ef3479] transition-colors line-clamp-1">
          {brand.name}
        </div>
        <p className="text-[10px] text-[#777777] line-clamp-1 mt-0.5 font-medium">
          {brand.tagline}
        </p>
      </div>
    </div>
  );
};

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenEnquiry,
  onSelectBrand
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  const filteredBrands = useMemo(() => {
    if (selectedCategoryFilter === 'all') return brandsData;
    if (selectedCategoryFilter === 'paints') {
      return brandsData.filter(
        (b) =>
          b.categories.includes('interior-paints') ||
          b.categories.includes('exterior-paints')
      );
    }
    if (selectedCategoryFilter === 'waterproofing') {
      return brandsData.filter(
        (b) =>
          b.categories.includes('waterproofing') ||
          b.categories.includes('construction-chemicals')
      );
    }
    if (selectedCategoryFilter === 'wood') {
      return brandsData.filter((b) => b.categories.includes('wood-finishes'));
    }
    if (selectedCategoryFilter === 'specialty') {
      return brandsData.filter(
        (b) =>
          b.categories.includes('adhesives') ||
          b.categories.includes('cleaning-solutions') ||
          b.categories.includes('automotive-compounds') ||
          b.categories.includes('protective-coatings')
      );
    }
    return brandsData;
  }, [selectedCategoryFilter]);
  return (
    <div className="space-y-16 sm:space-y-24 max-w-[1540px] mx-auto px-4 sm:px-6 pb-20">
      {/* 1. HERO STORY SECTION */}
      <section className="bg-white rounded-[40px] sm:rounded-[60px] p-8 sm:p-14 lg:p-20 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-slate-100/80">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Three Decades of Integrity • Since 1995
          </span>

          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold text-[#191919] leading-[1.02] tracking-tight">
            Transforming Alwar's Spaces, <br />
            <span className="gradient-text">One Wall at a Time.</span>
          </h1>

          <p className="text-[#777777] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Established in 1995 at the heart of Alwar, Shubham Colour House has evolved from a pioneering local paint shop into Rajasthan’s most trusted technical destination for architectural coatings, Italian PU wood finishes, waterproofing chemistry, and professional surface care.
          </p>

          {/* Core Stats Bar */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {companyData.stats.slice(0, 4).map((st, idx) => (
              <div key={idx} className="p-6 rounded-[28px] bg-[#f8f8f8] border border-slate-200/60">
                <div className="text-3xl font-extrabold text-[#191919]">
                  {st.value}
                </div>
                <div className="text-xs text-[#777777] mt-1 font-bold">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE 1995 ORIGIN & OUR EVOLUTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Our Heritage & Vision
          </span>

          <h2 className="text-[34px] sm:text-[44px] font-extrabold text-[#191919] leading-tight tracking-tight">
            Built on Trust, Technical Knowledge & Factory Authenticity.
          </h2>

          <p className="text-sm sm:text-base text-[#777777] leading-relaxed">
            When Shubham Colour House opened its doors in 1995 near Bhagat Singh Circle, our mission was simple yet uncompromising: ensure every homeowner, painter, and contractor in Alwar receives <strong>100% genuine factory-sealed paint</strong> at transparent fair pricing, coupled with true technical guidance.
          </p>

          <p className="text-sm sm:text-base text-[#777777] leading-relaxed">
            Over the last 30 years, we built state-of-the-art computerized tinting labs and on-site moisture diagnosis services to empower our customers with dependable results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              'Zero Duplicate / Old Stock Policy',
              'Digital Computerized Shade Tinting',
              'Free On-Site Moisture Testing',
              'Contractor Wholesale Bulk Pricing'
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#333]">
                <CheckCircle2 className="w-4 h-4 text-[#ef3479] flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="btn-primary text-xs tracking-[0.16em]"
            >
              TALK TO EXPERT
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="btn-secondary text-xs tracking-[0.12em]"
            >
              EXPLORE CATALOG
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80"
              alt="Shubham Colour House Showroom Experience"
              className="w-full h-[460px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white space-y-1">
                <div className="text-lg font-extrabold">Showroom & Distribution Hub</div>
                <div className="text-xs text-[#a1a1a1]">Plot No. 43, Vijay Complex, Near Bhagat Singh Circle, Alwar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS */}
      <section className="bg-[#050505] text-white py-16 sm:py-20 px-6 sm:px-12 rounded-[40px] sm:rounded-[60px] shadow-2xl">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
              Core Principles
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-extrabold text-white leading-tight">
              The Four Pillars of <span className="gradient-text">Shubham Colour House.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.trustPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="sch-dark-card p-8 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#ef3479] uppercase tracking-wider">0{idx + 1}</span>
                  <h3 className="text-xl font-extrabold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#929292] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AUTHORIZED BRAND ECOSYSTEM */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Authorized Partner Portfolio
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#191919]">
            24 Globally Recognized <span className="gradient-text">Paint &amp; Chemical Brands.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#777777] max-w-2xl mx-auto leading-relaxed">
            Direct authorized dealerships, genuine factory-sealed warranties, and computerized tinting precision for India's and the world's most reputable surface brands.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {[
            { id: 'all', label: 'All Brands (24)' },
            { id: 'paints', label: 'Major Paints (9)' },
            { id: 'waterproofing', label: 'Waterproofing & Chemicals' },
            { id: 'wood', label: 'Wood Finishes & PU' },
            { id: 'specialty', label: 'Tile Care, Adhesives & Auto' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                selectedCategoryFilter === cat.id
                  ? 'bg-[#191919] text-white border-[#191919] shadow-xs'
                  : 'bg-white text-[#666] border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Brand Cards with Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredBrands.map((brand) => (
            <AboutBrandCard
              key={brand.slug}
              brand={brand}
              onClick={() => {
                if (onSelectBrand) {
                  onSelectBrand(brand);
                } else {
                  onNavigate('brands');
                }
              }}
            />
          ))}
        </div>

        {/* Action Button to Brands page */}
        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('brands')}
            className="btn-secondary text-xs tracking-[0.12em] inline-flex items-center gap-2"
          >
            <span>EXPLORE FULL BRAND PORTFOLIO &amp; SPECIFICATIONS</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Customer Stories
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#191919]">
            Trusted by 14,000+ <span className="gradient-text">Homeowners & Professionals.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="sch-white-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#ff761c] mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#555] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-[#f0f0f0] mt-6 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-xs text-[#191919]">{t.name}</div>
                  <div className="text-[11px] text-[#777777]">{t.role} • {t.location}</div>
                </div>
                <span className="text-[10px] font-bold bg-[#f5f6f8] text-[#ef3479] px-2.5 py-1 rounded-full border border-slate-200/60">
                  {t.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VISIT STORE BANNER */}
      <section className="bg-white rounded-[40px] p-8 sm:p-14 border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479]">
            Direct Showroom Visit
          </span>
          <h3 className="text-3xl font-extrabold text-[#191919]">
            Visit Our Alwar Experience Center
          </h3>
          <p className="text-sm text-[#777777] max-w-xl leading-relaxed">
            Touch and feel physical Italian PU finish samples, explore over 2,000+ computerized shade fandecks, and discuss your home renovation with our specialists.
          </p>
          <div className="text-xs text-[#191919] font-bold pt-1">
            Plot No. 43, Vijay Complex, Near Bhagat Singh Circle, Scheme No. 2, Alwar
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary text-xs tracking-[0.16em]"
          >
            GET STORE DIRECTIONS
          </button>
          <a
            href={`tel:${companyData.phoneTel}`}
            className="btn-secondary text-xs tracking-[0.12em]"
          >
            CALL {companyData.phonePrimary}
          </a>
        </div>
      </section>
    </div>
  );
};
