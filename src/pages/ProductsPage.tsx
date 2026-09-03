import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  SlidersHorizontal 
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SEOHead } from '../components/SEOHead';
import { getPageSEO } from '../utils/seoConfig';
import { productsData } from '../data/productsData';
import { categoriesData } from '../data/categoriesData';
import { brandsData } from '../data/brandsData';
import { Product, CategoryId, SurfaceId } from '../types';

interface ProductsPageProps {
  initialCategory?: CategoryId | 'all';
  initialBrand?: string | 'all';
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory = 'all',
  initialBrand = 'all',
  onSelectProduct,
  onOpenEnquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string | 'all'>(initialBrand);
  const [selectedSurface, setSelectedSurface] = useState<SurfaceId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'brand'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      if (selectedCategory !== 'all' && product.categoryId !== selectedCategory) {
        return false;
      }
      if (selectedBrand !== 'all' && product.brandSlug !== selectedBrand) {
        return false;
      }
      if (selectedSurface !== 'all' && !product.surfaceIds.includes(selectedSurface)) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBrand = product.brandName.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesBenefit = product.shortBenefit.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesDesc && !matchesBenefit) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'brand') {
        return a.brandName.localeCompare(b.brandName);
      }
      return 0;
    });
  }, [selectedCategory, selectedBrand, selectedSurface, searchQuery, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedSurface('all');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedBrand !== 'all' || selectedSurface !== 'all' || searchQuery !== '';

  const pageSEO = getPageSEO('products', {
    category: selectedCategory,
    brandFilter: selectedBrand,
  });

  return (
    <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-4 space-y-10 pb-20">
      <SEOHead {...pageSEO} />
      {/* PAGE HEADER */}
      <div className="bg-white rounded-[40px] sm:rounded-[60px] p-8 sm:p-14 lg:p-20 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-slate-100/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Authentic Product Catalog
          </span>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold text-[#191919] leading-[1.02] tracking-tight">
            Paints, Coatings & <br />
            <span className="gradient-text">Surface Chemistry.</span>
          </h1>
          <p className="text-[#777777] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Browse our complete inventory of authorized architectural emulsions, Konkem waterproofing agents, Italian ICA wood finishes, MYK tile cleaners, and 3M auto compounds in Alwar.
          </p>
        </div>
      </div>

      {/* SEARCH & CONTROLS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-[28px] border border-slate-200/80 shadow-sm">
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1a1a1]" />
          <input
            type="text"
            placeholder="Search products, brands or requirements..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#f8f8f8] border border-transparent focus:border-[#ef3479] focus:bg-white text-xs sm:text-sm font-semibold outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] hover:text-[#191919]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort & Filter Controls */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden px-4 py-2.5 rounded-full bg-pink-50 text-[#ef3479] font-bold text-xs flex items-center gap-2 border border-pink-200"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters {hasActiveFilters && '(Active)'}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#777777] font-bold hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2.5 rounded-full border border-slate-200 text-xs font-bold bg-[#f8f8f8] text-[#191919] focus:outline-none focus:border-[#ef3479]"
            >
              <option value="featured">Featured First</option>
              <option value="name-asc">Product Name (A-Z)</option>
              <option value="brand">By Brand Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* ACTIVE FILTER CHIPS */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="text-[#777777] font-bold">Active filters:</span>
          {selectedCategory !== 'all' && (
            <span className="px-3 py-1 rounded-full bg-pink-50 text-[#ef3479] font-bold flex items-center gap-1 border border-pink-200">
              Category: {categoriesData.find(c => c.id === selectedCategory)?.name}
              <button onClick={() => setSelectedCategory('all')}><X className="w-3 h-3 ml-1" /></button>
            </span>
          )}
          {selectedBrand !== 'all' && (
            <span className="px-3 py-1 rounded-full bg-sky-50 text-[#27a9ef] font-bold flex items-center gap-1 border border-sky-200">
              Brand: {brandsData.find(b => b.slug === selectedBrand)?.name}
              <button onClick={() => setSelectedBrand('all')}><X className="w-3 h-3 ml-1" /></button>
            </span>
          )}
          {selectedSurface !== 'all' && (
            <span className="px-3 py-1 rounded-full bg-orange-50 text-[#ff761c] font-bold flex items-center gap-1 border border-orange-200">
              Surface: {selectedSurface}
              <button onClick={() => setSelectedSurface('all')}><X className="w-3 h-3 ml-1" /></button>
            </span>
          )}
          <button
            onClick={clearAllFilters}
            className="text-xs text-[#ef3479] hover:underline font-bold ml-2"
          >
            Reset All
          </button>
        </div>
      )}

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* DESKTOP SIDEBAR FILTERS */}
        <div className="hidden lg:block lg:col-span-3 space-y-6 sch-white-card p-6 sticky top-24">
          <div className="flex items-center justify-between pb-3 border-b border-[#f0f0f0]">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#191919]">
              Filter Products
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-[11px] font-bold text-[#ef3479] hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <h4 className="sch-label">
              Categories
            </h4>
            <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#191919] text-white shadow-sm'
                    : 'text-[#777777] hover:bg-[#f8f8f8]'
                }`}
              >
                All Categories ({productsData.length})
              </button>
              {categoriesData.map((cat) => {
                const count = productsData.filter(p => p.categoryId === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      selectedCategory === cat.id
                        ? 'bg-[#191919] text-white shadow-sm'
                        : 'text-[#777777] hover:bg-[#f8f8f8]'
                    }`}
                  >
                    <span className="line-clamp-1">{cat.name}</span>
                    <span className="text-[10px] opacity-70 ml-1">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brands Filter */}
          <div className="pt-3 border-t border-[#f0f0f0]">
            <h4 className="sch-label">
              Brands
            </h4>
            <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
              <button
                onClick={() => setSelectedBrand('all')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedBrand === 'all'
                    ? 'bg-[#ef3479] text-white shadow-sm'
                    : 'text-[#777777] hover:bg-[#f8f8f8]'
                }`}
              >
                All Brands ({brandsData.length})
              </button>
              {brandsData.map((brand) => {
                const count = productsData.filter(p => p.brandSlug === brand.slug).length;
                return (
                  <button
                    key={brand.slug}
                    onClick={() => setSelectedBrand(brand.slug)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      selectedBrand === brand.slug
                        ? 'bg-[#ef3479] text-white shadow-sm'
                        : 'text-[#777777] hover:bg-[#f8f8f8]'
                    }`}
                  >
                    <span className="line-clamp-1">{brand.name}</span>
                    <span className="text-[10px] opacity-70 ml-1">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Surface Filter */}
          <div className="pt-3 border-t border-[#f0f0f0]">
            <h4 className="sch-label">
              Surface Type
            </h4>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'all', label: 'All' },
                { id: 'walls', label: 'Walls' },
                { id: 'exterior-walls', label: 'Exterior' },
                { id: 'concrete', label: 'Concrete' },
                { id: 'wood', label: 'Wood' },
                { id: 'tiles', label: 'Tiles' },
                { id: 'automotive', label: 'Auto' },
                { id: 'metal', label: 'Metal' }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSurface(s.id as any)}
                  className={`py-2 px-2 rounded-xl text-[11px] font-bold border text-center transition-all ${
                    selectedSurface === s.id
                      ? 'bg-[#191919] text-white border-[#191919]'
                      : 'bg-[#f8f8f8] text-[#777777] border-transparent hover:border-slate-300'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="lg:col-span-9 space-y-6">
          <div className="flex items-center justify-between text-xs text-[#777777] font-bold">
            <span>Showing <strong className="text-[#191919]">{filteredProducts.length}</strong> verified products</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="p-16 text-center sch-white-card space-y-4">
              <div className="w-14 h-14 rounded-full bg-pink-50 text-[#ef3479] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[#191919]">
                No matching products found
              </h3>
              <p className="text-xs text-[#777777] max-w-sm mx-auto">
                Try adjusting your search keywords or resetting active brand and category filters.
              </p>
              <button
                onClick={clearAllFilters}
                className="btn-primary text-xs tracking-[0.16em]"
              >
                RESET FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onSelect={(p) => onSelectProduct(p)}
                  onQuickQuote={() => onOpenEnquiry(prod.name)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
