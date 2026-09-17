import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Calculator, 
  MessageCircle, 
  Phone, 
  Sun, 
  ChevronRight, 
  ChevronLeft,
  Clock, 
  MapPin, 
  Star,
  Check,
  Paintbrush,
  Droplets,
  Layers,
  Wrench,
  Sparkle,
  Users,
  Shield,
  HelpCircle,
  Palette
} from 'lucide-react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { BrandCard } from '../components/BrandCard';
import { companyData, testimonialsData, faqsData } from '../data/companyData';
import { brandsData } from '../data/brandsData';
import { colorSwatchesData } from '../data/colorsData';
import { Product, Brand, CategoryId } from '../types';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onSelectProduct: (product: Product) => void;
  onSelectBrand: (brand: Brand) => void;
  onSelectCategory: (categoryId: CategoryId) => void;
  onOpenCalculator: () => void;
  onOpenEnquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectBrand,
  onSelectCategory,
  onOpenCalculator,
  onOpenEnquiry
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedColorFamily, setSelectedColorFamily] = useState<'all' | 'warm' | 'cool' | 'neutral' | 'bold'>('all');

  // Why Choose Us Slider State (Step index 0 to 6)
  const [whySliderIndex, setWhySliderIndex] = useState<number>(0);

  const filteredSwatches = selectedColorFamily === 'all' 
    ? colorSwatchesData.slice(0, 8) 
    : colorSwatchesData.filter(c => c.family === selectedColorFamily);

  // 10 Detailed Why Choose Us Points
  const whyChooseUsFullData = [
    {
      title: 'Free On-site Consultation',
      desc: 'Book a free on-site consultation with our experts, who visit your space, understand your requirements, and guide you with the right painting solutions.',
      icon: MapPin,
      tag: 'On-Site Visit',
      color: '#3B82F6'
    },
    {
      title: 'Accurate & Specific Quotation',
      desc: 'Receive a clear, accurate, and detailed quotation tailored to your space, surface condition, finish preference, and project scope.',
      icon: Calculator,
      tag: 'Transparent',
      color: '#F97316'
    },
    {
      title: 'Certified Painters',
      desc: 'Our trained and certified painters ensure professional workmanship, smooth finishes, and reliable execution for every project.',
      icon: Award,
      tag: 'Master Craftsmen',
      color: '#7C3AED'
    },
    {
      title: 'Colour Consultation',
      desc: 'Our expert team helps you choose the right shades, combinations, and finishes to match your space, style, and lighting.',
      icon: Palette,
      tag: 'Design Studio',
      color: '#EC4899'
    },
    {
      title: 'On-time Job Completion',
      desc: 'We follow a planned and supervised workflow to ensure your painting project is completed on time without compromising quality.',
      icon: Clock,
      tag: 'Punctual',
      color: '#10B981'
    },
    {
      title: 'Post-painting Clean-up',
      desc: 'Our service includes proper site clean-up after completion, leaving your home or workspace neat, fresh, and ready to use.',
      icon: Sparkles,
      tag: 'Hassle-Free',
      color: '#06B6D4'
    },
    {
      title: 'After-Sales Services',
      desc: 'We continue to support you even after the project is completed, with responsive service and dependable post-painting assistance.',
      icon: ShieldCheck,
      tag: 'Ongoing Support',
      color: '#8B5CF6'
    },
    {
      title: 'Eco-Friendly Products',
      desc: 'We promote healthier living spaces by offering quality low-VOC and eco-friendly paint solutions that are safer for your family and environment.',
      icon: Sun,
      tag: 'Low-VOC',
      color: '#84CC16'
    },
    {
      title: 'Mechanised Tools',
      desc: 'We use modern mechanised tools for faster, smoother, and more efficient painting with reduced noise and better finish quality.',
      icon: Wrench,
      tag: 'Advanced Tools',
      color: '#F59E0B'
    },
    {
      title: 'Furniture & Floor Covering',
      desc: 'We carefully protect your furniture, flooring, and valuable surfaces before starting work to keep your space safe and clean.',
      icon: Layers,
      tag: 'Full Protection',
      color: '#6366F1'
    }
  ];

  // Why choose us slider navigation functions
  const maxSliderIndex = whyChooseUsFullData.length - 4; // 10 - 4 = 6
  const handlePrevSlide = () => {
    setWhySliderIndex((prev) => Math.max(0, prev - 1));
  };
  const handleNextSlide = () => {
    setWhySliderIndex((prev) => Math.min(maxSliderIndex, prev + 1));
  };


  // 9 Curated Collection Items
  const productRangeItems = [
    {
      id: 'interior-paints',
      title: 'Interior Paints',
      desc: 'Transform your living spaces with premium finishes and vibrant shades.',
      image: '/images/categories/interior-paints.jpg',
      badge: 'Popular'
    },
    {
      id: 'exterior-paints',
      title: 'Exterior Paints',
      desc: 'Weather-resistant protection for your home against harsh climates.',
      image: '/images/categories/exterior-paints.jpg',
      badge: 'Weather Proof'
    },
    {
      id: 'wood-finishes',
      title: 'Wood & Metal',
      desc: 'Durable and elegant finishes for all wooden and metal surfaces.',
      image: '/images/categories/wood-finishes.jpg',
      badge: 'Italian PU'
    },
    {
      id: 'waterproofing',
      title: 'Waterproofing',
      desc: 'Advanced solutions for leak-proof homes and long-lasting protection.',
      image: '/images/categories/waterproofing.jpg',
      badge: 'Zero Dampness'
    },
    {
      id: 'automotive-compounds',
      title: 'Automotive Paint',
      desc: 'High-performance coatings for vehicles and industrial applications.',
      image: '/images/categories/automotive-paint.jpg',
      badge: '3M Auto'
    },
    {
      id: 'wall-care',
      title: 'Wall Care & Putty',
      desc: 'White cement putties, acrylic primers and surface levelers for flawless walls.',
      image: '/images/categories/wall-care.jpg',
      badge: 'Birla White & JK'
    },
    {
      id: 'construction-chemicals',
      title: 'Construction Chemicals',
      desc: 'SBR bonding latex, polymer modifiers, structural repair and tile fixing solutions.',
      image: '/images/categories/construction-chemicals.jpg',
      badge: 'Konkem & Pidilite'
    },
    {
      id: 'decorative-finishes',
      title: 'Texture Finishes',
      desc: 'Unique wall textures that create depth and a luxurious feel in any room.',
      image: '/images/categories/texture-finishes.jpg',
      badge: 'Artisan'
    }
  ];

  // Institutional Partners Data
  const institutionalPartners = [
    { 
      name: 'D-Mart Niti Khand 3 Indirapuram Ghaziabad', 
      logo: '/images/partners/dmart-logo.png',
      alt: 'D-Mart Niti Khand 3 Indirapuram Ghaziabad Logo'
    },
    { 
      name: 'Apna Ghar', 
      logo: '/images/partners/apna-ghar-logo.png',
      alt: 'Apna Ghar Logo'
    }
  ];

  return (
    <div className="w-full">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — FULL WIDTH EDGE-TO-EDGE BANNER */}
      {/* ========================================================================= */}
      <section className="hero-banner">
        <img
          src="https://sarsglobal.io/assets/img/banner.png"
          alt="Shubham Colour House"
        />

        {/* Subtle local gradient behind the content side */}
        <div className="hero-gradient-overlay" aria-hidden="true" />

        <div className="hero-content-wrapper">
          <div className="hero-glass-panel">
            <h1 className="hero-title">
              <span className="block">Colouring Spaces.</span>
              <span className="block">Creating Emotions.</span>
            </h1>

            <div className="hero-highlight">
              Building Trust Since 1995.
            </div>

            <p className="hero-description">
              Premium paints. Expert guidance.<br className="hidden sm:inline" />
              Complete solutions for beautiful, lasting spaces.
            </p>

            <div className="hero-btn-group">
              <button
                id="hero-btn-explore-products"
                onClick={() => onNavigate('products')}
                className="hero-primary-btn"
              >
                EXPLORE PRODUCTS →
              </button>
              <button
                id="hero-btn-talk-experts"
                onClick={onOpenEnquiry}
                className="hero-secondary-btn"
              >
                TALK TO OUR EXPERTS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAIN HOMEPAGE SECTIONS CONTAINER */}
      {/* ========================================================================= */}
      <div className="space-y-16 sm:space-y-24 px-4 sm:px-6 max-w-[1540px] mx-auto py-16 sm:py-24">

        {/* ========================================================================= */}
        {/* 2. HERITAGE & VISION SECTION */}
        {/* ========================================================================= */}
        <section className="bg-white rounded-[40px] sm:rounded-[56px] p-8 sm:p-14 lg:p-16 border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)]">
        <div className="space-y-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
                Heritage & Vision
              </span>
              <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#191919] leading-tight tracking-tight">
                Three Decades of <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-[#666666] text-sm sm:text-base leading-relaxed pt-2">
                Since 1995, Shubham Colour House has been Alwar's most trusted destination for architectural coatings. We combine traditional values with modern technology to deliver unmatched results.
              </p>
            </div>

            <button
              id="heritage-our-story-btn"
              onClick={() => onNavigate('about')}
              className="btn-primary text-xs tracking-[0.16em] self-start lg:self-auto flex items-center gap-2"
            >
              <span>OUR STORY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 sm:p-8 rounded-[30px] bg-[#fbfbfb] border border-slate-200/70 hover:border-[#3B82F6] hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#3B82F6] flex items-center justify-center mb-5 border border-blue-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#191919] mb-2">Top Brands</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Authorized dealer for Asian & Berger.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-[30px] bg-[#fbfbfb] border border-slate-200/70 hover:border-[#7C3AED] hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7C3AED] flex items-center justify-center mb-5 border border-purple-100">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#191919] mb-2">Expert Advice</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Personalized color consultations.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-[30px] bg-[#fbfbfb] border border-slate-200/70 hover:border-[#059669] hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-5 border border-emerald-100">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#191919] mb-2">Waterproofing</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Advanced leak-proof solutions.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-[30px] bg-[#fbfbfb] border border-slate-200/70 hover:border-[#EC4899] hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#EC4899] flex items-center justify-center mb-5 border border-pink-100">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#191919] mb-2">Verified Painters</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Professional, hassle-free work.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STATS STRIP */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-r from-[#191919] via-[#222222] to-[#191919] text-white rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 lg:p-14 shadow-xl border border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="space-y-2 py-4 md:py-0">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight gradient-text">
              14K+
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide uppercase">
              Happy Customers
            </div>
            <p className="text-xs text-[#999999]">Serving Alwar families across 3 generations</p>
          </div>

          <div className="space-y-2 py-4 md:py-0">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              17K+
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide uppercase">
              Projects Completed
            </div>
            <p className="text-xs text-[#999999]">Homes, villas, corporate & industrial surfaces</p>
          </div>

          <div className="space-y-2 py-4 md:py-0">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-400">
              100%
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide uppercase">
              Satisfaction Rate
            </div>
            <p className="text-xs text-[#999999]">Authentic manufacturer warranty guarantee</p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CURATED COLLECTION — OUR PRODUCT RANGE */}
      {/* ========================================================================= */}
      <section className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block mb-2">
              Curated Collection
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#191919] leading-tight tracking-tight">
              Our Product <span className="gradient-text">Range</span>
            </h2>
            <p className="text-[#666666] text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
              Explore our comprehensive collection of paints and coatings designed for every surface and requirement.
            </p>
          </div>
          <button
            id="curated-collection-view-all"
            onClick={() => onNavigate('products')}
            className="btn-secondary text-xs tracking-[0.12em] self-start md:self-auto"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productRangeItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (['interior-paints', 'exterior-paints', 'wood-finishes', 'waterproofing', 'automotive-compounds', 'decorative-finishes', 'wall-care', 'construction-chemicals'].includes(item.id)) {
                  onSelectCategory(item.id as CategoryId);
                  onNavigate('products');
                } else {
                  onNavigate('products');
                }
              }}
              className="sch-white-card p-6 flex flex-col justify-between cursor-pointer group hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#191919] backdrop-blur-md">
                    {item.badge}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base font-extrabold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#f0f0f0] flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#191919] group-hover:text-[#ef3479] transition-colors">
                <span>Explore Range</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. READY TO PAINT CTA */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-br from-[#1b1b1b] to-[#0f0f0f] border border-white/10 rounded-[40px] sm:rounded-[56px] p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden text-white shadow-2xl">
        <div className="space-y-4 text-center lg:text-left max-w-2xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479]">
            Alwar's Premier Paint Destination
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Ready to Paint <br className="hidden sm:inline" />
            <span className="gradient-text">Your Dreams?</span>
          </h2>
          <p className="text-[#a0a0a0] text-sm sm:text-base leading-relaxed">
            Contact us today for expert color samples and detailed paint estimates.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 flex-shrink-0 w-full sm:w-auto">
          <button
            id="ready-cta-request-estimates"
            onClick={() => onNavigate('contact')}
            className="btn-primary text-xs tracking-[0.16em] w-full sm:w-auto"
          >
            REQUEST ESTIMATES
          </button>
          <button
            id="ready-cta-paint-calculator"
            onClick={onOpenCalculator}
            className="btn-secondary text-xs tracking-[0.12em] bg-transparent text-white border-white/20 hover:border-white w-full sm:w-auto"
          >
            PAINT CALCULATOR
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PREMIUM SOLUTIONS — BRING LIFE TO YOUR WALLS */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-[40px] sm:rounded-[56px] p-8 sm:p-14 lg:p-16 border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479]">
              Premium Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191919] tracking-tight leading-tight">
              Bring Life to <span className="gradient-text">Your Walls</span>
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              At Shubham Colour House, we believe every wall tells a story. We help you transform dull walls into vibrant, lasting spaces full of life and style.
            </p>

            <div className="space-y-3.5 pt-2">
              {[
                'Wide variety of shades & finishes',
                'Weather-resistant for Rajasthan climate',
                'Long-lasting, durable quality',
                'Expert guidance for every room',
                'Professional flawless results'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#222222]">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('solutions')}
                className="btn-primary text-xs tracking-[0.16em]"
              >
                VIEW SURFACE SOLUTIONS
              </button>
              <button
                onClick={onOpenEnquiry}
                className="btn-secondary text-xs tracking-[0.12em]"
              >
                BOOK SITE AUDIT
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[36px] overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Premium Walls"
                className="w-full h-full object-cover min-h-[380px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="text-xs uppercase tracking-widest font-bold text-[#ef3479] mb-1">
                  Engineered for Alwar
                </div>
                <div className="text-xl font-bold">
                  All-Weather Architectural Protection
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  UV-reflective, dust-repellent & anti-fungal formulations.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHY CHOOSE US — 4-GRID SLIDER */}
      {/* ========================================================================= */}
      <section className="bg-[#0A0A0C] text-white py-16 sm:py-24 px-6 sm:px-12 lg:px-16 rounded-[40px] sm:rounded-[60px] relative overflow-hidden shadow-2xl border border-white/10">
        {/* Subtle Ambient Glows */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-[#EC4899]/15 rounded-full blur-3xl" 
        />

        <div className="space-y-10 relative z-10">
          
          {/* Section Header with Slider Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#EC4899] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Shubham Advantage</span>
              </div>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[58px] font-extrabold text-white leading-[1.05] tracking-[-0.03em]">
                Why <span className="gradient-text">Choose Us?</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="text-xs font-semibold text-slate-400 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10">
                Showing <strong className="text-white">{whySliderIndex + 1}–{Math.min(whySliderIndex + 4, whyChooseUsFullData.length)}</strong> of 10 Advantages
              </div>

              {/* Slider Navigation Arrows */}
              <div className="flex items-center gap-2.5">
                <button
                  id="why-choose-prev-btn"
                  onClick={handlePrevSlide}
                  disabled={whySliderIndex === 0}
                  aria-label="Previous Advantages"
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    whySliderIndex === 0
                      ? 'bg-white/5 border-white/10 text-slate-600 cursor-not-allowed opacity-40'
                      : 'bg-white/10 border-white/20 text-white hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#7C3AED] hover:border-transparent hover:scale-105 active:scale-95 shadow-lg'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  id="why-choose-next-btn"
                  onClick={handleNextSlide}
                  disabled={whySliderIndex >= maxSliderIndex}
                  aria-label="Next Advantages"
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    whySliderIndex >= maxSliderIndex
                      ? 'bg-white/5 border-white/10 text-slate-600 cursor-not-allowed opacity-40'
                      : 'bg-white/10 border-white/20 text-white hover:bg-gradient-to-r hover:from-[#EC4899] hover:to-[#F97316] hover:border-transparent hover:scale-105 active:scale-95 shadow-lg'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Cards Shown Side-by-Side (Desktop 4-Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {whyChooseUsFullData.slice(whySliderIndex, whySliderIndex + 4).map((item, idx) => {
              const actualIdx = whySliderIndex + idx;
              const IconComp = item.icon;
              return (
                <div
                  key={actualIdx}
                  className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 p-6 sm:p-7 rounded-[28px] flex flex-col justify-between min-h-[340px] transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl relative group overflow-hidden"
                >
                  {/* Subtle top color accent */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: item.color || '#EC4899' }}
                  />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-xs font-extrabold tracking-[0.16em] uppercase"
                        style={{ color: item.color || '#EC4899' }}
                      >
                        {actualIdx < 9 ? `0${actualIdx + 1}` : actualIdx + 1}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">
                        {item.tag}
                      </span>
                    </div>

                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        backgroundColor: `${item.color}18`,
                        color: item.color || '#3B82F6'
                      }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white leading-snug group-hover:text-pink-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-6">
                    <span className="text-[11px] font-semibold text-slate-400">Verified Service Standard</span>
                    <CheckCircle2 
                      className="w-4 h-4" 
                      style={{ color: item.color || '#EC4899' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {Array.from({ length: maxSliderIndex + 1 }).map((_, dotIdx) => {
              const isActive = whySliderIndex === dotIdx;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setWhySliderIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-8 h-2.5 bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#EC4899]'
                      : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FIND YOUR PERFECT PALETTE */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-[40px] sm:rounded-[56px] p-8 sm:p-14 border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479]">
              Colour Studio & Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191919] tracking-tight leading-tight">
              Find Your <span className="gradient-text">Perfect Palette</span>
            </h2>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
              The right colors can transform your home. We help you pick shades that make small rooms look bigger and large spaces more inviting.
            </p>

            {/* 2 Sub-points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#f8f8f8] border border-slate-200/70">
                <div className="font-extrabold text-sm text-[#191919] mb-1">Free Consultation</div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Expert guidance in selecting colors, finishes, and types tailored to your style.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f8f8] border border-slate-200/70">
                <div className="font-extrabold text-sm text-[#191919] mb-1">Quick Support</div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Our team helps with queries on product use, maintenance, or after-service care.
                </p>
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { id: 'all', label: 'All Shades' },
                { id: 'warm', label: 'Warm & Ochre' },
                { id: 'cool', label: 'Cool Indigos' },
                { id: 'neutral', label: 'Neutral Greige' },
                { id: 'bold', label: 'Bold Jewel' }
              ].map((fam) => (
                <button
                  key={fam.id}
                  onClick={() => setSelectedColorFamily(fam.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    selectedColorFamily === fam.id
                      ? 'bg-[#191919] text-white border-[#191919] shadow-sm'
                      : 'bg-[#f8f8f8] text-[#777777] border-slate-200 hover:text-[#191919]'
                  }`}
                >
                  {fam.label}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('colour-inspiration')}
                className="btn-primary text-xs tracking-[0.16em]"
              >
                OPEN COLOUR STUDIO
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {filteredSwatches.map((swatch) => (
                <div
                  key={swatch.id}
                  onClick={() => onNavigate('colour-inspiration')}
                  className="p-3 rounded-2xl bg-[#f8f8f8] border border-slate-200/80 hover:border-[#ef3479] transition-all cursor-pointer group flex flex-col justify-between h-36"
                >
                  <div
                    className="w-full h-14 rounded-xl shadow-inner group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: swatch.hex }}
                  ></div>
                  <div className="mt-2">
                    <div className="font-bold text-xs text-[#191919] line-clamp-1">
                      {swatch.name}
                    </div>
                    <div className="text-[10px] text-[#777777] flex items-center justify-between mt-0.5">
                      <span>{swatch.code}</span>
                      <span className="uppercase text-[#ef3479] text-[9px] font-bold">{swatch.family}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. LOCKED SECTION: "Industry Leaders — Brands We Work With." */}
      {/* (LOCKED — PRESERVED EXACTLY AS IT CURRENTLY EXISTS) */}
      {/* ========================================================================= */}
      <section className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block mb-2">
              Industry Leaders
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-extrabold text-[#191919] leading-tight tracking-tight">
              Brands We <span className="gradient-text">Work With.</span>
            </h2>
          </div>
          <button
            onClick={() => onNavigate('brands')}
            className="btn-secondary text-xs tracking-[0.12em] self-start md:self-auto"
          >
            EXPLORE ALL 24 BRANDS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandsData.slice(0, 8).map((brand) => (
            <BrandCard
              key={brand.slug}
              brand={brand}
              onSelect={(b) => onSelectBrand(b)}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. OUR PARTNERS — TRUSTED BY LEADING ORGANIZATIONS (SEPARATE SECTION) */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-[40px] sm:rounded-[56px] p-8 sm:p-14 border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)] space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Our Partners
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#191919] leading-tight tracking-tight">
            Trusted By <span className="gradient-text">Leading Organizations</span>
          </h2>
          <p className="text-sm text-[#666666]">
            Supplying certified architectural coatings and waterproofing solutions to prominent infrastructure, heritage resorts, and institutional builders across Rajasthan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto gap-6 sm:gap-8 pt-4 w-full">
          {institutionalPartners.map((partner, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-slate-200/80 flex flex-col justify-center items-center text-center hover:border-[#7C3AED] hover:bg-white transition-all duration-300 shadow-sm group min-h-[140px]"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-w-[190px] max-h-[60px] w-auto h-auto object-contain object-center"
                  loading="lazy"
                />
              </div>
              <div className="font-extrabold text-sm sm:text-base text-[#191919] leading-snug">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CONTRACTOR & ARCHITECT PROGRAM */}
      {/* ========================================================================= */}
      <section className="bg-white rounded-[40px] sm:rounded-[56px] p-8 sm:p-14 border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479]">
              For Builders, Contractors & Architects
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
              Built for <span className="gradient-text">Professionals Too.</span>
            </h2>
            <p className="text-[#777777] text-sm leading-relaxed">
              We provide dedicated commercial support for architects, builders, master painting contractors, and carpenters across Alwar and Jaipur division. Get immediate wholesale rates and express dispatch.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold text-[#555]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ef3479]" />
                <span>Tiered wholesale volume discounts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ef3479]" />
                <span>Direct on-site material dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ef3479]" />
                <span>Technical applicator training sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ef3479]" />
                <span>Konkem & Soldier bulk supply</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            <a
              href={`https://wa.me/${companyData.whatsappNumber}?text=Hello%20Shubham%20Colour%20House,%20I%20am%20a%20Contractor/Architect%20and%20need%20wholesale%20rates.`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs tracking-[0.16em] w-full text-center"
            >
              CONTRACTOR PRICING
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-secondary text-xs tracking-[0.12em] w-full"
            >
              VISIT SHOWROOM
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. TESTIMONIALS & REVIEWS */}
      {/* ========================================================================= */}
      <section className="space-y-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block mb-2">
            Verified Reviews
          </span>
          <h2 className="text-[34px] sm:text-[44px] font-extrabold text-[#191919] leading-tight tracking-tight">
            Trusted Across <span className="gradient-text">Alwar.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="sch-white-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#ff761c] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#555] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-sm text-[#191919]">{t.name}</div>
                  <div className="text-xs text-[#777777]">{t.role} • {t.location}</div>
                </div>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#f5f6f8] text-[#ef3479] border border-slate-200/60">
                  {t.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block mb-2">
            Common Inquiries
          </span>
          <h2 className="text-[34px] sm:text-[44px] font-extrabold text-[#191919] leading-tight tracking-tight">
            Frequently Asked <span className="gradient-text">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="sch-white-card overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base text-[#191919] hover:text-[#ef3479] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 flex-shrink-0 text-[#a1a1a1] transition-transform ${isOpen ? 'rotate-90 text-[#ef3479]' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-[#777777] leading-relaxed border-t border-[#f0f0f0] mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      </div>
    </div>
  );
};
