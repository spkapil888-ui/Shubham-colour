import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Sparkles,
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
  Navigation,
  CheckCircle2,
  Droplets,
  Palette
} from 'lucide-react';
import { companyData } from '../data/companyData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenCalculator: () => void;
  onOpenEnquiry: () => void;
  onSelectBrand?: (brandSlug: string) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenCalculator,
  onOpenEnquiry,
  onSelectCategory
}) => {
  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryNav = (catId: string) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="sch-footer mt-20 relative overflow-hidden text-[#16181D]">
      {/* 1. VIBRANT MULTI-COLOR TOP ACCENT BAR */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] via-[#EC4899] to-[#F97316]" />

      {/* 2. SUBTLE BRAND COLOR AMBIENT DECORATIONS */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-20 -left-20 w-[460px] h-[460px] bg-[#3B82F6]/10 rounded-full blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-[#7C3AED]/10 rounded-full blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 -right-20 w-[480px] h-[480px] bg-[#F97316]/12 rounded-full blur-3xl"
      />

      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 relative z-10 space-y-16">
        
        {/* 3. PREMIUM COLORFUL BRAND CTA BLOCK */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 lg:p-14 border border-slate-200/90 shadow-[0_20px_50px_rgba(124,58,237,0.08)] relative overflow-hidden">
          {/* Subtle gradient light flare */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#EC4899]/10 via-[#7C3AED]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3B82F6]/10 via-[#F97316]/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#3B82F6]/10 via-[#7C3AED]/10 to-[#EC4899]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-extrabold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
                <span>Building Trust Since 1995 • Alwar’s Premier Paint Destination</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16181D] tracking-tight leading-tight">
                Ready to Transform <span className="gradient-text">Your Space?</span>
              </h2>
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                Get expert guidance for paints, colors, waterproofing and complete surface solutions. Visit our showroom or request computerized estimates today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto flex-shrink-0">
              <button
                id="footer-cta-talk-experts"
                onClick={() => onOpenEnquiry()}
                className="w-full sm:w-auto btn-primary text-xs tracking-[0.16em] flex items-center justify-center gap-2.5"
              >
                <span>TALK TO OUR EXPERTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="footer-cta-contact-us"
                onClick={() => handleNav('contact')}
                className="w-full sm:w-auto btn-secondary text-xs tracking-[0.12em] flex items-center justify-center gap-2"
              >
                <span>CONTACT US</span>
              </button>

              <button
                id="footer-cta-calculator"
                onClick={onOpenCalculator}
                className="w-full sm:w-auto px-6 py-4 rounded-full font-extrabold text-xs tracking-wider uppercase text-[#4B5563] hover:text-[#16181D] bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/80 transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <span>Calculator</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#7C3AED]" />
              </button>
            </div>
          </div>

          {/* Value Props Row */}
          <div className="mt-8 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-[#3B82F6] flex items-center justify-center flex-shrink-0 border border-blue-200/60">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#16181D]">Established 1995</div>
                <div className="text-[11px] text-[#6B7280]">30+ Years Trust in Alwar</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-[#7C3AED] flex items-center justify-center flex-shrink-0 border border-purple-200/60">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#16181D]">18+ Top Brands</div>
                <div className="text-[11px] text-[#6B7280]">100% Genuine Stock Guarantee</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-pink-500/10 text-[#EC4899] flex items-center justify-center flex-shrink-0 border border-pink-200/60">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#16181D]">Free On-Site Audits</div>
                <div className="text-[11px] text-[#6B7280]">Moisture Pin Testing</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-200/60">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#16181D]">WhatsApp Desk</div>
                <div className="text-[11px] text-[#6B7280]">Instant Shade Cards</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. MAIN 4-COLUMN FOOTER LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* COLUMN 1: BRAND (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* BRAND LOGO (Requested transparent URL) */}
            <div 
              className="cursor-pointer inline-block"
              onClick={() => handleNav('home')}
            >
              <img
                src="https://sarsglobal.io/assets/img/shc-tr.png"
                alt="Shubham Colour House"
                className="w-[240px] sm:w-[280px] lg:w-[310px] max-w-full h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-sm text-[#555555] leading-relaxed max-w-md">
              Alwar’s premier destination for architectural coatings, computerized shade tinting, Italian wood PU finishes, waterproofing chemistry, and automotive surface care since 1995.
            </p>

            {/* BRAND COLOR BADGES */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-[#3B82F6] border border-blue-200/80">
                Asian & Berger Dealer
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-purple-50 text-[#7C3AED] border border-purple-200/80">
                Italian PU Center
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                Waterproofing Pro
              </span>
            </div>

            {/* SOCIAL ICONS */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#16181D]">
                Connect With Us
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  id="footer-social-whatsapp"
                  href={companyData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-white border border-emerald-200 text-emerald-600 hover:bg-emerald-500 hover:text-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  id="footer-social-phone"
                  href={`tel:${companyData.phoneTel}`}
                  aria-label="Call Store"
                  className="w-10 h-10 rounded-full bg-white border border-blue-200 text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                </a>

                <a
                  id="footer-social-maps"
                  href={companyData.mainStoreAddress.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Store Location Map"
                  className="w-10 h-10 rounded-full bg-white border border-pink-200 text-[#EC4899] hover:bg-[#EC4899] hover:text-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                </a>

                <a
                  id="footer-social-instagram"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white border border-purple-200 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  id="footer-social-facebook"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white border border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  id="footer-social-youtube"
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-white border border-red-200 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-bold text-[#4B5563]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open 7 Days a Week • Computerized Tinting Station</span>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899]"></span>
              <h4 className="font-extrabold text-base text-[#16181D] tracking-tight">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'products', label: 'Our Products' },
                { id: 'brands', label: 'Shop By Brand' },
                { id: 'shop-by-concern', label: 'Shop By Concern' },
                { id: 'painting-services-in-alwar', label: 'Painting Services in Alwar' },
                { id: 'waterproofing-services-in-alwar', label: 'Waterproofing in Alwar' },
                { id: 'calculator', label: 'Paint Calculator', action: () => onOpenCalculator() },
                { id: 'blogs', label: 'Painting Guides & Blogs' },
                { id: 'contact', label: 'Contact Showroom' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-link-${item.id}`}
                    onClick={() => {
                      if (item.action) {
                        item.action();
                      } else {
                        handleNav(item.id);
                      }
                    }}
                    className="group flex items-center gap-2 text-sm font-semibold text-[#555555] hover:text-[#191919] transition-all text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#EC4899] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span className="group-hover:gradient-text transition-colors">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: PRODUCTS / SOLUTIONS (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></span>
              <h4 className="font-extrabold text-base text-[#16181D] tracking-tight">Products & Solutions</h4>
            </div>
            <ul className="space-y-3">
              {[
                { id: 'interior-paints', label: 'Interior Paints & Emulsions', color: 'bg-pink-500' },
                { id: 'exterior-paints', label: 'Exterior Weatherproof Paints', color: 'bg-blue-500' },
                { id: 'wood-finishes', label: 'Italian PU & Wood Coatings', color: 'bg-amber-500' },
                { id: 'waterproofing', label: 'Certified Waterproofing Systems', color: 'bg-emerald-500' },
                { id: 'automotive-compounds', label: 'Automotive & 3M Coatings', color: 'bg-purple-500' },
                { id: 'wall-care', label: 'Wall Putty, Primers & Plaster', color: 'bg-orange-500' },
                { id: 'construction-chemicals', label: 'Construction Chemicals & Grout', color: 'bg-cyan-500' },
                { id: 'decorative-finishes', label: 'Designer Textures & Finishes', color: 'bg-indigo-500' }
              ].map((cat) => (
                <li key={cat.id}>
                  <button
                    id={`footer-cat-${cat.id}`}
                    onClick={() => handleCategoryNav(cat.id)}
                    className="group flex items-center gap-2.5 text-sm font-semibold text-[#555555] hover:text-[#191919] transition-all text-left"
                  >
                    <span className={`w-2 h-2 rounded-full ${cat.color} opacity-75 group-hover:scale-125 transition-transform`}></span>
                    <span className="group-hover:text-[#3B82F6] transition-colors">{cat.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT SHOWROOM (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]"></span>
              <h4 className="font-extrabold text-base text-[#16181D] tracking-tight">Showroom & Contact</h4>
            </div>
            <div className="space-y-4 text-sm text-[#4B5563]">
              
              {/* Address */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-pink-50 text-[#EC4899] flex items-center justify-center flex-shrink-0 mt-0.5 border border-pink-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs leading-relaxed text-[#4B5563]">
                  <strong className="text-[#16181D] block mb-0.5 font-extrabold">Showroom Address:</strong>
                  {companyData.mainStoreAddress.fullFormatted}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#3B82F6] flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-[#6B7280] block text-[11px] font-semibold">Direct Call Desk</span>
                  <a 
                    href={`tel:${companyData.phoneTel}`} 
                    className="font-extrabold text-[#16181D] hover:text-[#3B82F6] transition-colors"
                  >
                    {companyData.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-[#6B7280] block text-[11px] font-semibold">Instant WhatsApp Consultation</span>
                  <a 
                    href={companyData.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-[#16181D] hover:text-emerald-600 transition-colors"
                  >
                    {companyData.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center flex-shrink-0 border border-orange-100">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-[#6B7280] block text-[11px] font-semibold">Official Email</span>
                  <a 
                    href={`mailto:${companyData.email}`} 
                    className="font-bold text-[#16181D] hover:text-[#F97316] transition-colors"
                  >
                    {companyData.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center flex-shrink-0 mt-0.5 border border-purple-100">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs text-[#4B5563]">
                  <strong className="text-[#16181D] block mb-0.5 font-extrabold">Showroom Timings:</strong>
                  <div>Mon – Sat: 9:00 AM – 8:30 PM</div>
                  <div className="text-[#6B7280]">Sunday: 9:30 AM – 6:00 PM</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5. FOOTER BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div className="font-medium text-center sm:text-left">
            © 1995 – {new Date().getFullYear()} <strong className="text-[#191919]">{companyData.name}</strong>. All Rights Reserved. Alwar, Rajasthan.
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center font-semibold">
            <button
              id="footer-legal-privacy"
              onClick={() => handleNav('legal-privacy')}
              className="text-[#6B7280] hover:text-[#16181D] hover:underline transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-slate-300">•</span>
            <button
              id="footer-legal-terms"
              onClick={() => handleNav('legal-terms')}
              className="text-[#6B7280] hover:text-[#16181D] hover:underline transition-colors"
            >
              Terms of Service
            </button>
            <span className="text-slate-300">•</span>
            <button
              id="footer-legal-sitemap"
              onClick={() => handleNav('solutions')}
              className="text-[#6B7280] hover:text-[#16181D] hover:underline transition-colors"
            >
              Sitemap
            </button>
            <span className="text-slate-300">•</span>
            <button
              id="footer-legal-disclaimer"
              onClick={() => handleNav('legal-disclaimer')}
              className="text-[#6B7280] hover:text-[#16181D] hover:underline transition-colors"
            >
              Shade Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};


