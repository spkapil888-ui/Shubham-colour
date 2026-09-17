import React, { useState, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Droplets, 
  Paintbrush, 
  Wrench, 
  ShieldCheck,
  Phone,
  BookOpen,
  FolderKanban,
  Info,
  Calculator,
  MoreHorizontal,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { ShubhamLogo } from './ShubhamLogo';
import { CategoryId } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCalculator: () => void;
  onOpenEnquiry: (customNote?: string) => void;
  onSelectCategory?: (categoryId: CategoryId) => void;
  onSelectBrand?: (brandSlug: string) => void;
  onSelectConcern?: (concernSlug: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenCalculator,
  onOpenEnquiry,
  onSelectCategory,
  onSelectBrand,
  onSelectConcern
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const productCategories = [
    { id: 'interior-paints', label: 'Interior Paints', desc: 'Luxury washable emulsions & distempers' },
    { id: 'exterior-paints', label: 'Exterior Paints', desc: 'UV & rain-shield exterior coatings' },
    { id: 'waterproofing', label: 'Waterproofing', desc: 'Terrace, roof & bathroom chemical barriers' },
    { id: 'wood-finishes', label: 'Wood & Metal Finishes', desc: 'Italian PU, melamine, stains & enamels' },
    { id: 'adhesives', label: 'Adhesives & Putty', desc: 'Tile adhesives, Birla White putty & polymers' },
    { id: 'protective-coatings', label: 'Primers & Tools', desc: 'Deep-penetrating primers, rollers & brushes' },
  ];

  const brandLinks = [
    { slug: 'asian-paints', name: 'Asian Paints', desc: 'Apex Ultima, Royale, SmartCare authorized' },
    { slug: 'berger-paints', name: 'Berger Paints', desc: 'Silk Glamor, WeatherCoat Long Life 10' },
    { slug: 'nerolac', name: 'Nerolac Paints', desc: 'Beauty Gold, Excel Mica Marble & Enamels' },
    { slug: 'nippon-paint', name: 'Nippon Paint', desc: 'Spot-less, Weatherbond & Momento' },
    { slug: 'birla-opus', name: 'Birla Opus', desc: 'One Decor, Calista & Prime luxury' },
    { slug: 'pidilite', name: 'Pidilite / Dr. Fixit', desc: 'Fevicol, Dr. Fixit waterproofing & M-Seal' },
    { slug: 'all', name: 'All 24+ Brands', desc: 'Explore all authorized paint & chemical partners' },
  ];

  const concernLinks = [
    { slug: 'interior-walls', label: 'Interior Walls', desc: 'Peeling, patches & washable luxury' },
    { slug: 'exterior-walls', label: 'Exterior Walls', desc: 'Sun fading, algae & hairline cracks' },
    { slug: 'waterproofing', label: 'Waterproofing', desc: 'Comprehensive moisture barrier systems' },
    { slug: 'terrace-leakage', label: 'Terrace Leakage', desc: 'Ponding, slab joints & heat reflection' },
    { slug: 'roof-leakage', label: 'Roof Leakage', desc: 'Sloped slabs, rainwater gutters & shed bolts' },
    { slug: 'bathroom-leakage', label: 'Bathroom Leakage', desc: 'Sunken slabs & epoxy grouting without demolition' },
    { slug: 'wood-finishing', label: 'Wood Finishing', desc: 'Teak restoration, Italian PU & UV gloss' },
    { slug: 'metal-painting', label: 'Metal Painting', desc: 'Rust prevention, gates & industrial grills' },
    { slug: 'automotive-paint-coatings', label: 'Automotive Paints', desc: 'High-solids 2K clears, primers & thinners' },
    { slug: 'repainting', label: 'Repainting Old Walls', desc: 'Old distemper scrape & full renewal' },
  ];

  // Secondary items cleanly housed inside the "More" dropdown
  const moreMenuItems = [
    {
      id: 'painting-services-in-alwar',
      label: 'Painting Services in Alwar',
      desc: 'Residential & commercial painting with dust-free sanding',
      icon: Paintbrush,
      badge: 'Popular',
      color: 'text-[#ef3479] bg-rose-50'
    },
    {
      id: 'waterproofing-services-in-alwar',
      label: 'Waterproofing Services in Alwar',
      desc: 'Terrace leakage, roof ponding & bathroom sealing without demolition',
      icon: Droplets,
      badge: 'Certified',
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      id: 'blogs',
      label: 'Painting Guides & Blogs',
      desc: 'Paint cost per sq ft in Alwar, waterproofing tips & shade guides',
      icon: BookOpen,
      badge: null,
      color: 'text-sky-600 bg-sky-50'
    },
    {
      id: 'projects',
      label: 'Recent Projects',
      desc: 'Villas, residences & commercial project gallery across Alwar',
      icon: FolderKanban,
      badge: null,
      color: 'text-amber-600 bg-amber-50'
    },
    {
      id: 'about',
      label: 'About Shubham Colour House',
      desc: 'Established paint showroom legacy in Scheme No. 2 Alwar',
      icon: Info,
      badge: null,
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      id: 'contact',
      label: 'Contact Showroom',
      desc: 'Store address, phone numbers, map directions & store timings',
      icon: Phone,
      badge: null,
      color: 'text-teal-600 bg-teal-50'
    }
  ];

  // Check if active tab belongs to the "More" menu
  const isMoreActive = moreMenuItems.some(
    (item) => activeTab === item.id || activeTab.startsWith(`${item.id}/`)
  );

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryId: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId as CategoryId);
    } else {
      handleNavigate(`products/${categoryId}`);
    }
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleBrandClick = (slug: string) => {
    if (slug === 'all') {
      handleNavigate('brands');
    } else {
      if (onSelectBrand) {
        onSelectBrand(slug);
      } else {
        handleNavigate(`brands/${slug}`);
      }
    }
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleConcernClick = (slug: string) => {
    if (onSelectConcern) {
      onSelectConcern(slug);
    } else {
      handleNavigate(`concerns/${slug}`);
    }
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-200">
      <div className="max-w-[1540px] mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        {/* LOGO */}
        <div
          onClick={() => handleNavigate('home')}
          className="cursor-pointer flex-shrink-0"
        >
          <ShubhamLogo className="h-7 sm:h-8.5 w-auto" />
        </div>

        {/* COMPACT STREAMLINED DESKTOP NAVIGATION (Visible on lg and above) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {/* 1. HOME */}
          <button
            onClick={() => handleNavigate('home')}
            className={`px-3 py-1.5 text-[13px] font-bold tracking-tight rounded-lg transition-colors ${
              activeTab === 'home'
                ? 'text-[#ef3479] bg-rose-50/80'
                : 'text-slate-700 hover:text-black hover:bg-slate-100/70'
            }`}
          >
            Home
          </button>

          {/* 2. PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => handleNavigate('products')}
              className={`px-3 py-1.5 text-[13px] font-bold tracking-tight rounded-lg transition-colors inline-flex items-center gap-1 ${
                activeTab.startsWith('products')
                  ? 'text-[#ef3479] bg-rose-50/80'
                  : 'text-slate-700 hover:text-black hover:bg-slate-100/70'
              }`}
            >
              <span>Products</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {openDropdown === 'products' && (
              <div className="absolute left-0 top-full mt-1.5 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2.5 z-50 animate-fadeIn space-y-1">
                <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Categories</span>
                  <button
                    onClick={() => handleNavigate('products')}
                    className="text-[11px] font-bold text-[#ef3479] hover:underline"
                  >
                    All Products →
                  </button>
                </div>
                {productCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 transition-colors group flex flex-col"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#ef3479] transition-colors">
                      {cat.label}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-tight">
                      {cat.desc}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. SHOP BY BRAND DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('brands')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => handleNavigate('brands')}
              className={`px-3 py-1.5 text-[13px] font-bold tracking-tight rounded-lg transition-colors inline-flex items-center gap-1 ${
                activeTab.startsWith('brand') || activeTab === 'shop-by-brand'
                  ? 'text-[#ef3479] bg-rose-50/80'
                  : 'text-slate-700 hover:text-black hover:bg-slate-100/70'
              }`}
            >
              <span>Brands</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {openDropdown === 'brands' && (
              <div className="absolute left-0 top-full mt-1.5 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2.5 z-50 animate-fadeIn space-y-1">
                <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Authorized Brands</span>
                  <button
                    onClick={() => handleBrandClick('all')}
                    className="text-[11px] font-bold text-[#ef3479] hover:underline"
                  >
                    View 24+ Brands →
                  </button>
                </div>
                {brandLinks.map((b) => (
                  <button
                    key={b.slug}
                    onClick={() => handleBrandClick(b.slug)}
                    className="w-full text-left p-2 rounded-xl hover:bg-slate-50 transition-colors group flex flex-col"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#ef3479] transition-colors">
                      {b.name}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-tight">
                      {b.desc}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. SHOP BY CONCERN DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('concerns')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => handleNavigate('shop-by-concern')}
              className={`px-3 py-1.5 text-[13px] font-bold tracking-tight rounded-lg transition-colors inline-flex items-center gap-1 ${
                activeTab.startsWith('concerns') || activeTab === 'shop-by-concern'
                  ? 'text-[#ef3479] bg-rose-50/80'
                  : 'text-slate-700 hover:text-black hover:bg-slate-100/70'
              }`}
            >
              <span>Shop By Concern</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {openDropdown === 'concerns' && (
              <div className="absolute left-0 xl:left-1/2 xl:-translate-x-1/2 top-full mt-1.5 w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 z-50 animate-fadeIn">
                <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Surface & Leakage Problem Diagnostics
                  </span>
                  <button
                    onClick={() => handleNavigate('shop-by-concern')}
                    className="text-[11px] font-bold text-[#ef3479] hover:underline"
                  >
                    View All 10 Concerns →
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-1 max-h-[340px] overflow-y-auto pr-1">
                  {concernLinks.map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => handleConcernClick(c.slug)}
                      className="text-left p-2 rounded-xl hover:bg-slate-50 transition-colors group flex flex-col"
                    >
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#ef3479] transition-colors">
                        {c.label}
                      </span>
                      <span className="text-[11px] text-slate-400 line-clamp-1 leading-tight">
                        {c.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 5. "MORE" BUTTON / DROPDOWN FOR OVERFLOW MENU ITEMS */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('more')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setOpenDropdown(openDropdown === 'more' ? null : 'more')}
              className={`px-3 py-1.5 text-[13px] font-bold tracking-tight rounded-lg transition-colors inline-flex items-center gap-1.5 ${
                isMoreActive
                  ? 'text-[#ef3479] bg-rose-50/90 border border-rose-200/70'
                  : 'text-slate-700 hover:text-black hover:bg-slate-100/70'
              }`}
            >
              <span>More</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${openDropdown === 'more' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'more' && (
              <div className="absolute right-0 top-full mt-1.5 w-[330px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2.5 z-50 animate-fadeIn space-y-1">
                <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Services & Information</span>
                </div>

                <div className="space-y-0.5 pt-1">
                  {moreMenuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id || activeTab.startsWith(`${item.id}/`);
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group ${
                          isActive ? 'bg-rose-50/70 text-slate-900' : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-105 ${item.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className={`text-xs font-bold transition-colors ${
                              isActive ? 'text-[#ef3479]' : 'text-slate-800 group-hover:text-[#ef3479]'
                            }`}>
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-rose-100 text-[#ef3479]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1 leading-tight mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Quick Calculator Shortcut inside More Menu */}
                <div className="pt-2 border-t border-slate-100 px-1">
                  <button
                    onClick={() => {
                      onOpenCalculator();
                      setOpenDropdown(null);
                    }}
                    className="w-full text-left p-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between text-xs font-bold text-slate-700 hover:text-black"
                  >
                    <div className="flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-[#ff761c]" />
                      <span>Paint Area Calculator</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenEnquiry('Consultation & Price Quote Request')}
            className="btn-primary text-xs tracking-wider uppercase py-2 px-4 shadow-xs whitespace-nowrap"
          >
            Get Free Quote
          </button>

          {/* MOBILE MENU TOGGLE (Visible below lg) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-700 hover:text-[#ef3479] rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN ACCORDION MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-16 z-50 bg-white rounded-3xl shadow-2xl border border-slate-200 p-4 space-y-2 animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <button
              onClick={() => handleNavigate('home')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-sm ${
                activeTab === 'home' ? 'text-[#ef3479] bg-rose-50' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* MOBILE PRODUCTS EXPANDABLE */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'products' ? null : 'products')}
                className="w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'products' && (
                <div className="pl-3 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl my-1">
                  {productCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="w-full text-left px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#ef3479]"
                    >
                      {cat.label}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNavigate('products')}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-[#ef3479]"
                  >
                    View All Products →
                  </button>
                </div>
              )}
            </div>

            {/* MOBILE BRANDS EXPANDABLE */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'brands' ? null : 'brands')}
                className="w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Shop By Brand</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'brands' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'brands' && (
                <div className="pl-3 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl my-1">
                  {brandLinks.map((b) => (
                    <button
                      key={b.slug}
                      onClick={() => handleBrandClick(b.slug)}
                      className="w-full text-left px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#ef3479]"
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* MOBILE CONCERNS EXPANDABLE */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'concerns' ? null : 'concerns')}
                className="w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Shop By Concern</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'concerns' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'concerns' && (
                <div className="pl-3 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl my-1 max-h-56 overflow-y-auto">
                  {concernLinks.map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => handleConcernClick(c.slug)}
                      className="w-full text-left px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#ef3479]"
                    >
                      {c.label}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNavigate('shop-by-concern')}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-[#ef3479]"
                  >
                    View All 10 Concerns →
                  </button>
                </div>
              )}
            </div>

            {/* MOBILE SERVICES & EXTRA PAGES */}
            <div className="pt-2 border-t border-slate-100 space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3">Services & Info</span>
              {moreMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-between ${
                    activeTab === item.id ? 'text-[#ef3479] bg-rose-50' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-rose-100 text-[#ef3479]">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                onOpenCalculator();
                setMobileMenuOpen(false);
              }}
              className="btn-secondary w-full py-2.5 text-xs tracking-wider uppercase font-bold"
            >
              Paint Calculator
            </button>
            <button
              onClick={() => {
                onOpenEnquiry('Mobile Navbar Consultation');
                setMobileMenuOpen(false);
              }}
              className="btn-primary w-full py-2.5 text-xs tracking-wider uppercase"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
