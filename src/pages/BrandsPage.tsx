import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { BrandCard } from '../components/BrandCard';
import { brandsData } from '../data/brandsData';
import { Brand } from '../types';

interface BrandsPageProps {
  onSelectBrand: (brand: Brand) => void;
  onOpenEnquiry: (brandName?: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({
  onSelectBrand,
  onOpenEnquiry
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const matchesCategory = (brand: Brand, filter: string) => {
    if (filter === 'all') return true;
    if (filter === 'paints') {
      return (
        brand.categories.includes('interior-paints') ||
        brand.categories.includes('exterior-paints')
      );
    }
    if (filter === 'waterproofing') {
      return (
        brand.categories.includes('waterproofing') ||
        brand.categories.includes('construction-chemicals')
      );
    }
    if (filter === 'wood-finishes') {
      return brand.categories.includes('wood-finishes');
    }
    if (filter === 'tile-stone') {
      return (
        brand.categories.includes('cleaning-solutions') ||
        brand.categories.includes('adhesives')
      );
    }
    if (filter === 'adhesives') {
      return brand.categories.includes('adhesives');
    }
    if (filter === 'automotive') {
      return (
        brand.categories.includes('automotive-compounds') ||
        brand.categories.includes('protective-coatings')
      );
    }
    return (brand.categories as string[]).includes(filter);
  };

  const filteredBrands = useMemo(() => {
    return brandsData.filter((brand) => {
      if (!matchesCategory(brand, selectedCategoryFilter)) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = brand.name.toLowerCase().includes(q);
        const matchDesc = brand.description.toLowerCase().includes(q);
        const matchTag = brand.tagline.toLowerCase().includes(q);
        const matchProducts = brand.keyProductsSummary?.some((p) =>
          p.toLowerCase().includes(q)
        );
        if (!matchName && !matchDesc && !matchTag && !matchProducts) return false;
      }
      return true;
    });
  }, [selectedCategoryFilter, searchQuery]);

  const isDefaultView = selectedCategoryFilter === 'all' && searchQuery.trim() === '';

  // 9 Featured Paint Brands (top section)
  const featuredPaintBrands = useMemo(() => {
    return brandsData.slice(0, 9);
  }, []);

  // 15 Specialty & Trusted Brands (following section)
  const specialtyBrands = useMemo(() => {
    return brandsData.slice(9, 24);
  }, []);

  return (
    <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-4 space-y-10 pb-20">
      {/* HEADER BANNER */}
      <div className="bg-white rounded-[40px] sm:rounded-[60px] p-8 sm:p-14 lg:p-20 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-slate-100/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            24 Authorized Manufacturer Partnerships
          </span>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold text-[#191919] leading-[1.02] tracking-tight">
            Brands We <span className="gradient-text">Work With.</span>
          </h1>
          <p className="text-[#777777] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Shubham Colour House is an authorized direct distributor and dealer for the world's finest architectural paints, construction chemicals, Italian polyurethane finishes, and specialized surface solutions in Alwar.
          </p>
        </div>
      </div>

      {/* FILTER & SEARCH STRIP */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-[28px] border border-slate-200/80 shadow-sm">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1a1a1]" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search brands (e.g. Nippon, JSW, Birla, Konkem)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#f8f8f8] border border-transparent focus:border-[#ef3479] focus:bg-white text-xs sm:text-sm font-semibold outline-none transition-all"
          />
        </div>

        {/* Categories Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {[
            { id: 'all', label: 'All Brands (24)' },
            { id: 'paints', label: 'Major Paints' },
            { id: 'waterproofing', label: 'Waterproofing & Chemicals' },
            { id: 'wood-finishes', label: 'Wood Finishes & PU' },
            { id: 'tile-stone', label: 'Tile Care & Grouts' },
            { id: 'adhesives', label: 'Adhesives & Resins' },
            { id: 'automotive', label: 'Automotive & Industrial' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategoryFilter === cat.id
                  ? 'bg-[#191919] text-white border-[#191919] shadow-sm'
                  : 'bg-[#f8f8f8] text-[#777777] border-transparent hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* BRANDS CONTENT */}
      {isDefaultView ? (
        <div className="space-y-12">
          {/* FEATURED PAINT BRANDS (TOP SECTION) */}
          <section className="space-y-6">
            <div className="border-b border-slate-200/80 pb-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] tracking-tight">
                Featured Paint Brands
              </h2>
              <p className="text-xs sm:text-sm text-[#777777] mt-1">
                India’s leading decorative and architectural paint manufacturers delivering premium interior and exterior coatings.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredPaintBrands.map((brand) => (
                <BrandCard
                  key={brand.slug}
                  brand={brand}
                  onSelect={(b) => onSelectBrand(b)}
                />
              ))}
            </div>
          </section>

          {/* SPECIALTY & TRUSTED BRANDS (FOLLOWING SECTION) */}
          <section className="space-y-6 pt-4">
            <div className="border-b border-slate-200/80 pb-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] tracking-tight">
                Specialty &amp; Trusted Brands
              </h2>
              <p className="text-xs sm:text-sm text-[#777777] mt-1">
                Specialized construction chemicals, luxury Italian wood coatings, tile installation systems, adhesives, automotive finishes, and surface preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {specialtyBrands.map((brand) => (
                <BrandCard
                  key={brand.slug}
                  brand={brand}
                  onSelect={(b) => onSelectBrand(b)}
                />
              ))}
            </div>
          </section>
        </div>
      ) : (
        /* FILTERED OR SEARCHED BRANDS GRID */
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#191919]">
              Showing {filteredBrands.length} {filteredBrands.length === 1 ? 'Brand' : 'Brands'}
            </h2>
            <button
              onClick={() => {
                setSelectedCategoryFilter('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#ef3479] hover:underline"
            >
              Reset Filters
            </button>
          </div>

          {filteredBrands.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBrands.map((brand) => (
                <BrandCard
                  key={brand.slug}
                  brand={brand}
                  onSelect={(b) => onSelectBrand(b)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-[32px] p-12 text-center space-y-3 border border-slate-100 shadow-sm">
              <p className="text-base font-bold text-[#191919]">No brands match your search criteria</p>
              <p className="text-xs text-[#777777]">Try clearing filters or searching for another brand name or product category.</p>
              <button
                onClick={() => {
                  setSelectedCategoryFilter('all');
                  setSearchQuery('');
                }}
                className="mt-2 px-5 py-2.5 rounded-full bg-[#191919] text-white text-xs font-bold"
              >
                Show All 24 Brands
              </button>
            </div>
          )}
        </div>
      )}

      {/* FOOTER CALLOUT */}
      <div className="sch-white-card p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-2xl font-extrabold text-[#191919]">
            Looking for Bulk Brand Supply or Project Quotations?
          </h3>
          <p className="text-xs text-[#777777]">
            We provide official manufacturer batch certificates, test certificates (TDS), and contractor wholesale invoicing.
          </p>
        </div>

        <button
          onClick={() => onOpenEnquiry('Bulk Brand Inquiries')}
          className="btn-primary text-xs tracking-[0.16em] whitespace-nowrap"
        >
          TALK TO BRAND DESK
        </button>
      </div>
    </div>
  );
};
