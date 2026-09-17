import React from 'react';
import { 
  ArrowLeft, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Clock, 
  Share2 
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SEOHead } from '../components/SEOHead';
import { getPageSEO } from '../utils/seoConfig';
import { companyData } from '../data/companyData';
import { productsData } from '../data/productsData';
import { brandsData } from '../data/brandsData';
import { Product } from '../types';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (productName?: string) => void;
  onSelectBrand?: (brandSlug: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onOpenEnquiry,
  onSelectBrand
}) => {
  const brand = brandsData.find(b => b.slug === product.brandSlug);

  const relatedProducts = productsData
    .filter(p => p.id !== product.id && (p.categoryId === product.categoryId || p.brandSlug === product.brandSlug))
    .slice(0, 3);

  const handleWhatsAppEnquire = () => {
    const text = `Hello Shubham Colour House! I am looking for details and pricing on: *${product.name}* (Brand: ${product.brandName}).%0A` +
      `Please provide pack size availability, technical advice, and dealer price. Thank you!`;
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortBenefit,
        url: window.location.href,
      }).catch(() => {});
    }
  };

  const pageSEO = getPageSEO('product-detail', { product });

  return (
    <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-6 space-y-12 pb-20">
      <SEOHead {...pageSEO} />
      {/* BREADCRUMB & BACK NAVIGATION */}
      <div className="flex items-center justify-between text-xs text-[#777777]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-extrabold text-[#191919] hover:text-[#ef3479] transition-colors py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-[#a1a1a1]">
          <span>Home</span>
          <span>/</span>
          <span>Products</span>
          <span>/</span>
          <span>{product.categoryName}</span>
          <span>/</span>
          {onSelectBrand ? (
            <button
              onClick={() => onSelectBrand(product.brandSlug)}
              className="text-[#191919] font-bold hover:text-[#ef3479] transition-colors cursor-pointer"
            >
              {product.brandName}
            </button>
          ) : (
            <span className="text-[#191919] font-bold">{product.brandName}</span>
          )}
        </div>
      </div>

      {/* PRODUCT HERO & SPECS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Image Showcase */}
        <div className="lg:col-span-5 space-y-4 sticky top-24">
          <div className="relative aspect-[4/3] rounded-[38px] overflow-hidden shadow-2xl border border-slate-100 bg-[#f8f8f8]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Top brand badge */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              {onSelectBrand ? (
                <button
                  onClick={() => onSelectBrand(product.brandSlug)}
                  className="px-3 py-1 rounded-full text-xs font-extrabold bg-black/85 hover:bg-[#ef3479] transition-colors backdrop-blur-md text-white shadow cursor-pointer"
                  title={`View all ${product.brandName} products`}
                >
                  {product.brandName}
                </button>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-black/85 backdrop-blur-md text-white shadow">
                  {product.brandName}
                </span>
              )}
            </div>

            <button
              onClick={handleShare}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-[#191919] hover:text-[#ef3479] shadow transition-colors"
              title="Share product"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-3 p-5 rounded-[28px] bg-white border border-slate-200/80 text-xs">
            <div>
              <span className="text-[#a1a1a1] block font-bold">Application</span>
              <span className="font-extrabold text-[#191919]">{product.applicationArea}</span>
            </div>
            <div>
              <span className="text-[#a1a1a1] block font-bold">Approx. Coverage</span>
              <span className="font-extrabold text-[#191919]">{product.coverageApprox || 'Varies by substrate'}</span>
            </div>
            <div>
              <span className="text-[#a1a1a1] block font-bold">Finish / Texture</span>
              <span className="font-extrabold text-[#191919]">{product.sheenOrTexture || 'Smooth Standard'}</span>
            </div>
            <div>
              <span className="text-[#a1a1a1] block font-bold">Authorized Stock</span>
              <span className="font-extrabold text-emerald-600">100% Genuine</span>
            </div>
          </div>
        </div>

        {/* Right Product Details */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-50 text-[#ef3479] border border-pink-200">
                {product.categoryName}
              </span>
              <span className="text-xs text-[#a1a1a1]">•</span>
              {onSelectBrand ? (
                <button
                  onClick={() => onSelectBrand(product.brandSlug)}
                  className="text-xs font-extrabold text-[#191919] hover:text-[#ef3479] transition-colors cursor-pointer"
                >
                  Brand: {product.brandName} →
                </button>
              ) : (
                <span className="text-xs font-extrabold text-[#191919]">
                  Brand: {product.brandName}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191919] tracking-tight">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-[#777777] mt-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Benefits */}
          {product.keyBenefits && product.keyBenefits.length > 0 && (
            <div className="p-6 rounded-[28px] bg-[#f8f8f8] border border-slate-200/60 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#191919] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ef3479]" />
                Key Benefits & Technical Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-bold text-[#333]">
                    <Check className="w-4 h-4 text-[#ef3479] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ideal For & Applications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.idealFor && product.idealFor.length > 0 && (
              <div className="p-5 rounded-[28px] bg-white border border-slate-200/80 space-y-2">
                <h4 className="sch-label">
                  Ideal For
                </h4>
                <ul className="space-y-1.5 text-xs text-[#777777]">
                  {product.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ef3479] mt-1.5"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.surfaceCompatibility && product.surfaceCompatibility.length > 0 && (
              <div className="p-5 rounded-[28px] bg-white border border-slate-200/80 space-y-2">
                <h4 className="sch-label">
                  Surface Compatibility
                </h4>
                <ul className="space-y-1.5 text-xs text-[#777777]">
                  {product.surfaceCompatibility.map((surface, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27a9ef] mt-1.5"></span>
                      <span>{surface}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Available Pack Sizes */}
          {product.availablePackSizes && (
            <div className="space-y-2">
              <h4 className="sch-label">
                Available Packaging Sizes
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.availablePackSizes.map((pack) => (
                  <span
                    key={pack}
                    className="px-4 py-2 rounded-2xl text-xs font-extrabold bg-white text-[#191919] border border-slate-200 shadow-sm"
                  >
                    {pack}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* METHODOLOGY */}
          {product.howToUseSteps && product.howToUseSteps.length > 0 && (
            <div className="p-6 rounded-[28px] bg-white border border-slate-200/80 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#191919] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ef3479]" />
                Recommended Application Methodology
              </h3>
              <div className="space-y-2.5">
                {product.howToUseSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-[#777777] leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#191919] text-white font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-[0_15px_45px_rgba(0,0,0,0.04)] space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-extrabold text-lg text-[#191919]">
                  Need Help Choosing or Ready to Order?
                </h4>
                <p className="text-xs text-[#777777] mt-0.5">
                  Get authorized dealer rates, custom computerized tinting, and on-site delivery in Alwar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleWhatsAppEnquire}
                  className="btn-primary text-xs tracking-[0.16em] w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP INQUIRY</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry(product.name)}
                  className="btn-secondary text-xs tracking-[0.12em] w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4 text-[#ef3479]" />
                  <span>TALK TO EXPERT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="pt-10 border-t border-[#f0f0f0] space-y-6">
          <h3 className="text-2xl font-extrabold text-[#191919]">
            Related Solutions & Complementary Products
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onSelect={(p) => {
                  onSelectProduct(p);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onQuickQuote={() => onOpenEnquiry(rel.name)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
