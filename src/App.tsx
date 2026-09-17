import React, { useState, useEffect } from 'react';
import { TopHeader } from './components/TopHeader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { PaintCalculatorModal } from './components/PaintCalculatorModal';
import { QuickEnquiryModal } from './components/QuickEnquiryModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { BrandsPage } from './pages/BrandsPage';
import { BrandDetailPage } from './pages/BrandDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ColourInspirationPage } from './pages/ColourInspirationPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PaintingServicesInAlwarPage } from './pages/PaintingServicesInAlwarPage';
import { WaterproofingServicesInAlwarPage } from './pages/WaterproofingServicesInAlwarPage';
import { ConcernsPage } from './pages/ConcernsPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';

// Data & Types
import { Product, Brand, CategoryId } from './types';
import { brandsData } from './data/brandsData';
import { productsData } from './data/productsData';
import { companyData } from './data/companyData';
import { SEOHead } from './components/SEOHead';
import { getPageSEO } from './utils/seoConfig';
import { findBrand } from './utils/brandUtils';
import { BrandNotFoundView } from './components/BrandNotFoundView';
import { NotFoundPage } from './pages/NotFoundPage';
import { ShieldCheck, ArrowLeft, Sparkles, Scale, FileText, Lock } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<CategoryId | 'all'>('all');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string | 'all'>('all');
  const [selectedConcernSlug, setSelectedConcernSlug] = useState<string | null>(null);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(null);

  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialNote, setEnquiryInitialNote] = useState<string>('');

  // 1. Initial URL routing and popstate listener
  useEffect(() => {
    const parseUrl = () => {
      let path = window.location.pathname.replace(/^\/+|\/+$/g, '');

      // Check hash if path is empty or index.html (supports single-page hash routing #/brands/asian-paints)
      if (!path || path === 'index.html') {
        if (window.location.hash) {
          path = window.location.hash.replace(/^#\/?/, '').replace(/^\/+|\/+$/g, '');
        }
      }

      // Handle query parameters if present (e.g. /#products?brand=asian-paints)
      let queryStr = window.location.search;
      const qIndex = path.indexOf('?');
      if (qIndex !== -1) {
        queryStr = path.substring(qIndex);
        path = path.substring(0, qIndex);
      }

      const urlParams = new URLSearchParams(queryStr);
      const brandParam = urlParams.get('brand') || urlParams.get('brandSlug');
      if (brandParam) {
        const br = findBrand(brandParam);
        if (br) {
          setSelectedBrand(br);
          setActiveTab('brand-detail');
          return;
        }
      }

      const segments = path ? path.split('/') : [];

      if (!path || path === 'home') {
        setActiveTab('home');
      } else if (path === 'about' || path === 'about-us') {
        setActiveTab('about');
      } else if (path === 'products') {
        setSelectedCategoryFilter('all');
        setActiveTab('products');
      } else if (segments[0] === 'products' && segments[1]) {
        setSelectedCategoryFilter(segments[1] as CategoryId);
        setActiveTab(`products/${segments[1]}`);
      } else if (segments[0] === 'product' && segments[1]) {
        const prod = productsData.find(p => p.slug === segments[1]);
        if (prod) {
          setSelectedProduct(prod);
          setActiveTab('product-detail');
        } else {
          setActiveTab('products');
        }
      } else if (path === 'brands' || path === 'brand' || path === 'shop-by-brand') {
        setSelectedBrand(null);
        setActiveTab('brands');
      } else if ((segments[0] === 'brands' || segments[0] === 'brand') && segments[1]) {
        const brandSlug = segments[1];
        const br = findBrand(brandSlug);
        if (br) {
          setSelectedBrand(br);
          setActiveTab('brand-detail');
        } else {
          setSelectedBrand(null);
          setActiveTab(`brands/${brandSlug}`);
        }
      } else if (path === 'shop-by-concern' || path === 'concerns') {
        setSelectedConcernSlug(null);
        setActiveTab('shop-by-concern');
      } else if (segments[0] === 'concerns' && segments[1]) {
        setSelectedConcernSlug(segments[1]);
        setActiveTab(`concerns/${segments[1]}`);
      } else if (path === 'painting-services-in-alwar') {
        setActiveTab('painting-services-in-alwar');
      } else if (path === 'waterproofing-services-in-alwar') {
        setActiveTab('waterproofing-services-in-alwar');
      } else if (path === 'blogs' || path === 'colour-inspiration') {
        setSelectedBlogSlug(null);
        setActiveTab('blogs');
      } else if (segments[0] === 'blogs' && segments[1]) {
        setSelectedBlogSlug(segments[1]);
        setActiveTab(`blogs/${segments[1]}`);
      } else if (path === 'contact' || path === 'contact-us') {
        setActiveTab('contact');
      } else if (path === 'projects') {
        setActiveTab('projects');
      } else if (path === 'services') {
        setActiveTab('painting-services-in-alwar');
      } else if (path === 'legal-disclaimer' || path === 'legal-privacy' || path === 'legal-terms') {
        setActiveTab(path);
      } else {
        // Retain unhandled path for fallback page or subroute
        setActiveTab(path);
      }
    };

    parseUrl();

    const handlePopState = () => {
      parseUrl();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 2. Scroll to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Compute dynamic SEO metadata based on current active page/tab
  const seoData = getPageSEO(activeTab, {
    product: selectedProduct,
    brand: selectedBrand,
    category: selectedCategoryFilter,
    brandFilter: selectedBrandFilter,
  });

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    let url = '/';
    if (tab === 'home') url = '/';
    else if (tab.startsWith('/')) url = tab;
    else url = `/${tab}`;

    if (window.location.pathname !== url) {
      window.history.pushState(null, '', url);
    }
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('product-detail');
    window.history.pushState(null, '', `/product/${product.slug}`);
  };

  const handleSelectBrand = (brandOrSlug: Brand | string) => {
    if (typeof brandOrSlug === 'string') {
      const found = findBrand(brandOrSlug);
      if (found) {
        setSelectedBrand(found);
        setActiveTab('brand-detail');
        window.history.pushState(null, '', `/brands/${found.slug}`);
      } else {
        const cleanSlug = brandOrSlug.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        setSelectedBrand(null);
        setActiveTab(`brands/${cleanSlug}`);
        window.history.pushState(null, '', `/brands/${cleanSlug}`);
      }
    } else {
      setSelectedBrand(brandOrSlug);
      setActiveTab('brand-detail');
      window.history.pushState(null, '', `/brands/${brandOrSlug.slug}`);
    }
  };

  const handleSelectCategory = (categoryId: CategoryId | string) => {
    setSelectedCategoryFilter(categoryId as CategoryId);
    setActiveTab(`products/${categoryId}`);
    window.history.pushState(null, '', `/products/${categoryId}`);
  };

  const handleSelectConcern = (slug: string) => {
    setSelectedConcernSlug(slug);
    setActiveTab(`concerns/${slug}`);
    window.history.pushState(null, '', `/concerns/${slug}`);
  };

  const handleSelectBlog = (slug: string) => {
    setSelectedBlogSlug(slug);
    setActiveTab(`blogs/${slug}`);
    window.history.pushState(null, '', `/blogs/${slug}`);
  };

  const handleOpenEnquiry = (customNote?: string) => {
    setEnquiryInitialNote(customNote || '');
    setIsEnquiryOpen(true);
  };

  const handleOpenCalculator = () => {
    setIsCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-800 font-['Inter',sans-serif] selection:bg-rose-500 selection:text-white antialiased">
      {/* DYNAMIC SEO HEAD FOR CURRENT PAGE */}
      <SEOHead {...seoData} />

      {/* TOP HEADER (CALL, WHATSAPP, ADDRESS, QUICK LINKS) */}
      <TopHeader
        onOpenCalculator={handleOpenCalculator}
        onOpenEnquiry={handleOpenEnquiry}
        onNavigate={handleNavigate}
      />

      {/* GLOBAL MAIN NAVBAR WITH ENHANCED MULTI-PAGE MENUS */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenCalculator={handleOpenCalculator}
        onOpenEnquiry={handleOpenEnquiry}
        onSelectCategory={handleSelectCategory}
        onSelectBrand={handleSelectBrand}
        onSelectConcern={handleSelectConcern}
      />

      {/* MAIN VIEW ROUTING */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onSelectBrand={handleSelectBrand}
            onSelectCategory={handleSelectCategory}
            onOpenCalculator={handleOpenCalculator}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}

        {/* ALL PRODUCTS OR FILTERED CATALOG */}
        {activeTab === 'products' && (
          <ProductsPage
            initialCategory={selectedCategoryFilter}
            initialBrand={selectedBrandFilter}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={(prodName) => handleOpenEnquiry(prodName ? `Inquiry regarding: ${prodName}` : undefined)}
          />
        )}

        {/* DEDICATED CATEGORY DETAIL PAGES */}
        {activeTab.startsWith('products/') && (
          <CategoryDetailPage
            categoryId={(activeTab.replace('products/', '') || selectedCategoryFilter) as CategoryId}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenCalculator={handleOpenCalculator}
            onNavigate={handleNavigate}
          />
        )}

        {/* SINGLE PRODUCT DETAIL */}
        {(activeTab === 'product-detail' || activeTab.startsWith('product/')) && (
          (() => {
            const slug = activeTab.startsWith('product/') ? activeTab.replace('product/', '') : selectedProduct?.slug;
            const currentProd = (slug ? productsData.find(p => p.slug === slug) : null) || selectedProduct;
            if (!currentProd) return (
              <ProductsPage
                initialCategory={selectedCategoryFilter}
                initialBrand={selectedBrandFilter}
                onSelectProduct={handleSelectProduct}
                onOpenEnquiry={(prodName) => handleOpenEnquiry(prodName ? `Inquiry regarding: ${prodName}` : undefined)}
              />
            );
            return (
              <ProductDetailPage
                product={currentProd}
                onBack={() => handleNavigate('products')}
                onSelectProduct={handleSelectProduct}
                onOpenEnquiry={(prodName) => handleOpenEnquiry(prodName ? `Inquiry regarding: ${prodName}` : undefined)}
                onSelectBrand={handleSelectBrand}
              />
            );
          })()
        )}

        {/* ALL BRANDS DIRECTORY */}
        {activeTab === 'brands' && (
          <BrandsPage
            onSelectBrand={handleSelectBrand}
            onOpenEnquiry={(brandName) => handleOpenEnquiry(brandName ? `Quote for: ${brandName}` : undefined)}
          />
        )}

        {/* DEDICATED BRAND DETAIL PAGE OR BRAND NOT FOUND VIEW */}
        {(activeTab === 'brand-detail' || activeTab.startsWith('brands/') || activeTab.startsWith('brand/')) && (
          (() => {
            const rawSlug = activeTab.startsWith('brands/')
              ? activeTab.replace('brands/', '')
              : activeTab.startsWith('brand/')
              ? activeTab.replace('brand/', '')
              : selectedBrand?.slug || '';

            const currentBrand = selectedBrand || (rawSlug ? findBrand(rawSlug) : undefined);

            if (!currentBrand) {
              return (
                <BrandNotFoundView
                  requestedSlug={rawSlug}
                  onNavigate={handleNavigate}
                  onSelectBrand={handleSelectBrand}
                  onOpenEnquiry={(note) => handleOpenEnquiry(note)}
                />
              );
            }

            return (
              <BrandDetailPage
                brand={currentBrand}
                onBack={() => handleNavigate('brands')}
                onSelectProduct={handleSelectProduct}
                onOpenEnquiry={(brandName) => handleOpenEnquiry(brandName ? `Quote for: ${brandName}` : undefined)}
              />
            );
          })()
        )}

        {/* SHOP BY CONCERN DIRECTORY & DETAIL */}
        {(activeTab === 'shop-by-concern' || activeTab.startsWith('concerns')) && (
          <ConcernsPage
            initialConcernSlug={selectedConcernSlug || (activeTab.startsWith('concerns/') ? activeTab.replace('concerns/', '') : null)}
            onSelectCategory={handleSelectCategory}
            onSelectProductBySlug={(slug) => {
              const p = productsData.find(prod => prod.slug === slug);
              if (p) handleSelectProduct(p);
            }}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenCalculator={handleOpenCalculator}
            onNavigate={handleNavigate}
          />
        )}

        {/* PAINTING SERVICES IN ALWAR */}
        {activeTab === 'painting-services-in-alwar' && (
          <PaintingServicesInAlwarPage
            onOpenEnquiry={handleOpenEnquiry}
            onOpenCalculator={handleOpenCalculator}
            onNavigate={handleNavigate}
          />
        )}

        {/* WATERPROOFING SERVICES IN ALWAR */}
        {activeTab === 'waterproofing-services-in-alwar' && (
          <WaterproofingServicesInAlwarPage
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={handleOpenEnquiry}
            onNavigate={handleNavigate}
          />
        )}

        {/* BLOGS DIRECTORY */}
        {activeTab === 'blogs' && (
          <BlogsPage
            onSelectBlog={handleSelectBlog}
            onNavigate={handleNavigate}
          />
        )}

        {/* INDIVIDUAL BLOG POST DETAIL */}
        {activeTab.startsWith('blogs/') && (
          <BlogDetailPage
            slug={selectedBlogSlug || activeTab.replace('blogs/', '')}
            onSelectBlog={handleSelectBlog}
            onSelectCategory={handleSelectCategory}
            onSelectBrand={handleSelectBrand}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenCalculator={handleOpenCalculator}
            onNavigate={handleNavigate}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenEnquiry={() => handleOpenEnquiry()}
            onOpenCalculator={handleOpenCalculator}
            onSelectBrand={handleSelectBrand}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            onOpenCalculator={handleOpenCalculator}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage
            onOpenEnquiry={handleOpenEnquiry}
            onOpenCalculator={handleOpenCalculator}
            onNavigate={handleNavigate}
          />
        )}

        {/* LEGAL VIEWS (Disclaimer, Privacy, Terms) */}
        {(activeTab === 'legal-disclaimer' || activeTab === 'legal-privacy' || activeTab === 'legal-terms') && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 animate-fadeIn">
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            {activeTab === 'legal-disclaimer' && (
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">Digital Shade Disclaimer</h1>
                    <p className="text-xs text-slate-500">Important technical note on computerized color representation</p>
                  </div>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    The shades and swatches displayed on digital screens (laptops, smartphones, and tablets) are electronic RGB representations and may vary slightly from the actual dried paint finish on physical surfaces due to screen backlight variations, room lighting conditions, surface texture, and substrate porosity.
                  </p>
                  <p>
                    For critical shade selections, we invite you to review physical manufacturer shade fandecks at our showroom at <strong>Plot No. 43, Vijay Complex, Near Bhagat Singh Circle, Scheme No. 2, Alwar</strong>, or request on-site sample application patches prior to final tinting.
                  </p>
                  <p className="font-semibold text-slate-800">
                    All custom-tinted paints are mixed using computerized factory-calibrated tinting machines from Asian Paints and respective manufacturers.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'legal-privacy' && (
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">Privacy Policy</h1>
                    <p className="text-xs text-slate-500">How Shubham Colour House protects your personal information</p>
                  </div>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    At {companyData.name}, we respect the privacy of our customers, contractors, and website visitors. Any contact details provided through our quotation forms, WhatsApp inquiries, or on-site consultation bookings are used solely to provide customer service, schedule visits, and provide accurate material estimates.
                  </p>
                  <p>
                    We do not sell, rent, or lease your personal telephone numbers or addresses to third-party telemarketers.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'legal-terms' && (
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">Terms of Service & Delivery</h1>
                    <p className="text-xs text-slate-500">Commercial supply terms & customer guidelines</p>
                  </div>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong>1. 100% Genuine Product Assurance:</strong> All materials sold by Shubham Colour House are sourced directly from verified manufacturer depots with original batch markings and sealed containers.
                  </p>
                  <p>
                    <strong>2. Computerized Tinting Orders:</strong> Custom tinted shades mixed on automated tinting dispensers are prepared uniquely according to customer-selected color codes. Please confirm shade numbers accurately before dispensing.
                  </p>
                  <p>
                    <strong>3. Site Delivery Services:</strong> Prompt delivery to construction sites, residences, and commercial facilities is available across Alwar city, Scheme No. 1 & 2, MIA Industrial Area, Bhiwadi, and Neemrana.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CATCH-ALL ROUTE FALLBACK (404) */}
        {![
          'home',
          'about',
          'products',
          'product-detail',
          'brands',
          'brand-detail',
          'shop-by-concern',
          'painting-services-in-alwar',
          'waterproofing-services-in-alwar',
          'blogs',
          'contact',
          'projects',
          'legal-disclaimer',
          'legal-privacy',
          'legal-terms',
        ].includes(activeTab) &&
          !activeTab.startsWith('products/') &&
          !activeTab.startsWith('product/') &&
          !activeTab.startsWith('brands/') &&
          !activeTab.startsWith('brand/') &&
          !activeTab.startsWith('concerns') &&
          !activeTab.startsWith('blogs/') && (
            <NotFoundPage onNavigate={handleNavigate} />
          )}
      </main>

      {/* FOOTER */}
      <Footer
        setActiveTab={handleNavigate}
        onOpenCalculator={handleOpenCalculator}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onSelectCategory={handleSelectCategory}
        onSelectBrand={handleSelectBrand}
      />

      {/* FLOATING ACTION BUTTONS */}
      <FloatingActions
        onOpenCalculator={handleOpenCalculator}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* MODALS */}
      <PaintCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <QuickEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialNote={enquiryInitialNote}
      />
    </div>
  );
}
