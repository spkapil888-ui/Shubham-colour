import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ShubhamLogo } from './ShubhamLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCalculator: () => void;
  onOpenEnquiry: () => void;
  onSelectCategory?: (categoryId: string) => void;
  onSelectBrand?: (brandSlug: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenCalculator,
  onOpenEnquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'products', label: 'OUR PRODUCTS' },
    { id: 'calculator', label: 'PAINT CALCULATOR', isAction: true },
    { id: 'brands', label: 'BRANDS' },
    { id: 'services', label: 'NEED A PAINTER?' },
    { id: 'colour-inspiration', label: 'BLOGS' }
  ];

  const handleNavClick = (link: { id: string; label: string; isAction?: boolean }) => {
    if (link.isAction && link.id === 'calculator') {
      onOpenCalculator();
    } else {
      setActiveTab(link.id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto bg-white px-6 sm:px-10 py-3 sm:py-4 shadow-[0_15px_45px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center justify-between gap-4 transition-all duration-300">
        {/* LOGO */}
        <div
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer flex-shrink-0"
        >
          <ShubhamLogo className="h-9 sm:h-12 w-auto" />
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`text-[13px] 2xl:text-[14px] font-bold uppercase transition-colors relative py-1 text-black ${
                  isActive
                    ? 'opacity-100'
                    : 'opacity-80 hover:opacity-100'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CONTACT CTA BUTTON */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setActiveTab('contact')}
            className="btn-primary text-xs tracking-[0.16em] uppercase py-3.5 px-7 shadow-md"
          >
            CONTACT
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 text-slate-800 hover:text-[#ef3479] rounded-full transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-24 z-50 bg-white rounded-[36px] shadow-2xl border border-slate-100 p-6 space-y-4 animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`text-left px-5 py-3.5 rounded-2xl font-bold text-sm uppercase transition-all flex items-center justify-between text-black ${
                    isActive
                      ? 'bg-slate-100'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <button
              onClick={() => {
                setActiveTab('contact');
                setMobileMenuOpen(false);
              }}
              className="btn-primary w-full py-4 text-xs tracking-[0.16em]"
            >
              CONTACT SHOWROOM
            </button>
            <button
              onClick={() => {
                onOpenEnquiry();
                setMobileMenuOpen(false);
              }}
              className="btn-secondary w-full py-3.5 text-xs tracking-[0.12em]"
            >
              QUICK ESTIMATE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
