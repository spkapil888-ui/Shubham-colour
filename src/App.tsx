import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { PaintCalculatorModal } from './components/PaintCalculatorModal';
import { QuickEnquiryModal } from './components/QuickEnquiryModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BrandsPage } from './pages/BrandsPage';
import { BrandDetailPage } from './pages/BrandDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ColourInspirationPage } from './pages/ColourInspirationPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Data & Types
import { Product, Brand, CategoryId } from './types';
import { brandsData } from './data/brandsData';
import { productsData } from './data/productsData';
import { companyData } from './data/companyData';
import { ShieldCheck, ArrowLeft, Sparkles, Scale, FileText, Lock } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<CategoryId | 'all'>('all');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string | 'all'>('all');

  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialNote, setEnquiryInitialNote] = useState<string>('');

  // Scroll to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('product-detail');
  };

  const handleSelectBrand = (brandOrSlug: Brand | string) => {
    if (typeof brandOrSlug === 'string') {
      const found = brandsData.find((b) => b.slug === brandOrSlug);
      if (found) {
        setSelectedBrand(found);
        setActiveTab('brand-detail');
      } else {
        setSelectedBrandFilter(brandOrSlug);
        setActiveTab('brands');
      }
    } else {
      setSelectedBrand(brandOrSlug);
      setActiveTab('brand-detail');
    }
  };

  const handleSelectCategory = (categoryId: CategoryId | string) => {
    setSelectedCategoryFilter(categoryId as CategoryId);
    setActiveTab('products');
  };

  const handleOpenEnquiry = (customNote?: string) => {
    setEnquiryInitialNote(customNote || '');
    setIsEnquiryOpen(true);
  };

  const handleOpenCalculator = () => {
    setIsCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/60 text-slate-800 font-['Inter',sans-serif] selection:bg-purple-600 selection:text-white antialiased">
      {/* GLOBAL TOP NAVIGATION */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenCalculator={handleOpenCalculator}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onSelectCategory={handleSelectCategory}
        onSelectBrand={handleSelectBrand}
      />

      {/* MAIN VIEW SWITCHER */}
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

        {activeTab === 'products' && (
          <ProductsPage
            initialCategory={selectedCategoryFilter}
            initialBrand={selectedBrandFilter}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={(prodName) => handleOpenEnquiry(prodName ? `Inquiry regarding: ${prodName}` : undefined)}
          />
        )}

        {activeTab === 'product-detail' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setActiveTab('products')}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={(prodName) => handleOpenEnquiry(prodName ? `Inquiry regarding: ${prodName}` : undefined)}
          />
        )}

        {activeTab === 'brands' && (
          <BrandsPage
            onSelectBrand={handleSelectBrand}
            onOpenEnquiry={(brandName) => handleOpenEnquiry(brandName ? `Authorized brand quote for: ${brandName}` : undefined)}
          />
        )}

        {activeTab === 'brand-detail' && selectedBrand && (
          <BrandDetailPage
            brand={selectedBrand}
            onBack={() => setActiveTab('brands')}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={(brandName) => handleOpenEnquiry(brandName ? `Authorized brand quote for: ${brandName}` : undefined)}
          />
        )}

        {activeTab === 'solutions' && (
          <SolutionsPage
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={(subject) => handleOpenEnquiry(subject ? `Solution consultation: ${subject}` : undefined)}
          />
        )}

        {activeTab === 'colour-inspiration' && (
          <ColourInspirationPage />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            onOpenEnquiry={handleOpenEnquiry}
            onOpenCalculator={handleOpenCalculator}
            onNavigate={handleNavigate}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage
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

        {/* LEGAL VIEWS (Disclaimer, Privacy, Terms) */}
        {(activeTab === 'legal-disclaimer' || activeTab === 'legal-privacy' || activeTab === 'legal-terms') && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 animate-fadeIn">
            <button
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-purple-600 transition-colors"
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
                    <h1 className="text-2xl font-bold text-slate-900 font-['Outfit']">Digital Shade Disclaimer</h1>
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
                    <h1 className="text-2xl font-bold text-slate-900 font-['Outfit']">Privacy Policy</h1>
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
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900 font-['Outfit']">Terms of Service & Delivery</h1>
                    <p className="text-xs text-slate-500">Retail & wholesale supply terms in Alwar</p>
                  </div>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    1. <strong>Authenticity:</strong> All materials supplied by Shubham Colour House are 100% factory-sealed original stock from authorized manufacturers.
                  </p>
                  <p>
                    2. <strong>Warranty:</strong> Product performance warranties (such as Asian Paints SmartCare or Apex Ultima warranties) are backed directly by the respective manufacturer's terms upon proper substrate preparation and recommended coat application.
                  </p>
                  <p>
                    3. <strong>Site Delivery:</strong> Job-site delivery across Alwar and industrial zones (MIA, Neemrana, Bhiwadi) is coordinated upon confirmation with our contractor wholesale desk.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* GLOBAL FOOTER */}
      <Footer
        setActiveTab={handleNavigate}
        onOpenCalculator={handleOpenCalculator}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onSelectBrand={handleSelectBrand}
        onSelectCategory={handleSelectCategory}
      />

      {/* FLOATING QUICK ACTIONS */}
      <FloatingActions
        onOpenCalculator={handleOpenCalculator}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* MODALS */}
      <PaintCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <QuickEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialSubject={enquiryInitialNote}
      />
    </div>
  );
}
