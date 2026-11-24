import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ChevronRight, 
  Package, 
  Phone, 
  MessageCircle,
  Calculator
} from 'lucide-react';
import { categoriesData } from '../data/categoriesData';
import { productsData } from '../data/productsData';
import { CategoryId, Product } from '../types';
import { companyData } from '../data/companyData';

interface CategoryDetailPageProps {
  categoryId: CategoryId | string;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (categoryId: CategoryId) => void;
  onOpenEnquiry: (note?: string) => void;
  onOpenCalculator: () => void;
  onNavigate: (tab: string) => void;
}

export const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({
  categoryId,
  onSelectProduct,
  onSelectCategory,
  onOpenEnquiry,
  onOpenCalculator,
  onNavigate
}) => {
  const currentCategory = categoriesData.find(c => c.id === categoryId) || categoriesData[0];
  const categoryProducts = productsData.filter(p => p.categoryId === currentCategory.id);
  const otherCategories = categoriesData.filter(c => c.id !== currentCategory.id).slice(0, 4);

  // Category specific localized advice & SEO keywords
  const getCategoryContext = (id: string) => {
    switch (id) {
      case 'interior-paints':
        return {
          h1: 'Interior Paints in Alwar: Luxury Emulsions, Washable Sheens & Velvet Finishes',
          tagline: 'Premium indoor paints engineered for washability, low VOCs, and rich color payoff in Alwar homes.',
          intro: 'Searching for the best interior paint in Alwar? At Shubham Colour House, we stock genuine luxury emulsions, satin sheens, and budget-friendly washable wall paints from Asian Paints, Berger, Nerolac, and Soldier Paints. Whether you need Teflon-protected stain resistance for living rooms or anti-bacterial low-VOC paints for children’s bedrooms, our computerized tinting delivers your exact shade in minutes.',
          buyingGuide: [
            'For high-traffic living rooms: Choose luxury emulsions like Asian Paints Royale Glitz or Berger Silk Glamor with Teflon stain-proof technology.',
            'For budget-conscious rental homes or ceilings: Opt for high-opacity acrylic distemper or Tractor Emulsion.',
            'Moisture testing: Ensure interior walls are checked with a digital moisture meter before painting to prevent bubbling.'
          ],
          faqs: [
            {
              q: 'Which is the best washable wall paint for homes in Alwar?',
              a: 'Asian Paints Royale Glitz and Berger Silk Glamor offer the highest stain cleanability against turmeric, tea, and crayons, with up to 100,000 scrub cycles.'
            },
            {
              q: 'Can I get computerized tinting for Asian Paints and Berger shades in Alwar?',
              a: 'Yes, our showroom at Scheme No. 2, Alwar houses manufacturer-calibrated tinting machines capable of mixing thousands of shades instantly in 1L, 4L, 10L, and 20L containers.'
            }
          ]
        };
      case 'exterior-paints':
        return {
          h1: 'Exterior Paints in Alwar: Weatherproof, Heat-Reflective & Anti-Algal Coatings',
          tagline: 'Heavy-duty exterior wall coatings engineered to conquer Rajasthan heat, dust storms, and heavy monsoon rains.',
          intro: 'Protect your building facade against extreme Alwar temperatures and heavy monsoons with advanced elastomeric exterior paints. We supply Asian Paints Apex Ultima, Berger WeatherCoat Long Life, and Nerolac Excel Mica Marble—formulated with Dirt Pick-Up Resistance (DPUR) and UV-reflective binders to prevent fading, cracking, and algae growth.',
          buyingGuide: [
            'Heat defense: In Rajasthan’s 45°C+ summer climate, select paints with natural mica or SRI reflective pigments like Nerolac Excel Mica Marble or Apex Ultima.',
            'Rain & algae defense: Choose formulations with active biocide capsules that release fungus-preventing agents during damp monsoon spells.',
            'Surface crack filling: Always seal structural fissures with exterior polymer crack fillers before applying primer and topcoat.'
          ],
          faqs: [
            {
              q: 'How long does exterior paint last in Alwar’s climate?',
              a: 'Standard exterior emulsions last 3 to 4 years, while high-performance elastomeric coatings like Apex Ultima or WeatherCoat Long Life provide 7 to 10 years of warranted protection.'
            },
            {
              q: 'Do exterior paints help in cooling house temperatures?',
              a: 'Yes, light-toned exterior paints with high Solar Reflectance Index (SRI) reflect solar radiation, cooling inner wall surfaces by up to 5°C to 8°C.'
            }
          ]
        };
      case 'waterproofing':
        return {
          h1: 'Waterproofing Solutions & Chemicals in Alwar',
          tagline: 'Permanent protection against roof ponding, wall dampness, efflorescence (shora), and bathroom leakage.',
          intro: 'Damp walls and terrace leakages require engineered chemical solutions, not temporary surface cover-ups. Shubham Colour House is Alwar’s premier distributor of Konkem K2 Bond SBR, Asian Paints SmartCare Damp Proof, and Pidilite Dr. Fixit systems for high hydrostatic pressure barriers, terrace coatings, and basement waterproofing.',
          buyingGuide: [
            'Terrace leakage: Apply 2 to 3 coats of elastomeric liquid membrane reinforced with glass fiber mesh over a properly sloped concrete slab.',
            'Rising dampness (Shora): Strip damaged plaster, apply a deep-penetrating SBR polymer bonding slurry, and replaster with water-repellent cement mortar.',
            'Bathroom joints: Use stain-free 100% solid epoxy grout like Latapoxy SP-100 instead of porous white cement.'
          ],
          faqs: [
            {
              q: 'How do I fix terrace leakage without breaking existing roof tiles in Alwar?',
              a: 'Apply Asian Paints SmartCare Damp Proof or Konkem K2 Seal directly over the clean existing roof slab with glass-mesh reinforcement.'
            }
          ]
        };
      case 'wood-finishes':
        return {
          h1: 'Italian Wood Finishes & Polyurethane (PU) Polishes in Alwar',
          tagline: 'Luxury Italian PU, waterborne wood sealers, natural stains, and scratch-resistant furniture lacquers.',
          intro: 'Elevate solid teak, sheesham, and natural wood veneers with world-class Italian polyurethane polishes from ICA Pidilite, Taralac, and JACPL Charmwood. Our showroom provides expert recipes for non-yellowing acrylic PU, zero-odor waterborne wood fillers, and mirror polyester polishes.',
          buyingGuide: [
            'Modular kitchens & dining tables: Use two-pack Italian PU (polyurethane) for supreme resistance against hot water, oil, and alcohol stains.',
            'Light veneer & natural oak: Insist on non-yellowing acrylic PU to preserve the natural light timber grain over decades.',
            'Odorless indoor application: ICA 1kStuk water-based wood filler provides fast drying and zero harsh solvent odors.'
          ],
          faqs: [
            {
              q: 'What is the benefit of Italian PU over Melamine polish?',
              a: 'Italian PU does not yellow with age, offers far higher scratch and heat resistance, and provides an exquisite silken or glass-like clarity.'
            }
          ]
        };
      default:
        return {
          h1: `${currentCategory.name} in Alwar: Professional Architectural Grade Systems`,
          tagline: currentCategory.shortDescription,
          intro: `Explore our authentic range of ${currentCategory.name} at Shubham Colour House, Alwar. We supply genuine contractor-grade products with manufacturer warranties, computerized tinting, and technical application guidance.`,
          buyingGuide: [
            'Check surface moisture and cleanliness before application.',
            'Follow manufacturer recoat drying intervals for optimal adhesion.',
            'Consult our technical team for exact coverage estimates.'
          ],
          faqs: [
            {
              q: `Are these ${currentCategory.name} suitable for Alwar's local weather?`,
              a: 'Yes, all products in our catalog are specifically selected for performance in North Indian weather, high mineral content water, and thermal stress.'
            }
          ]
        };
    }
  };

  const context = getCategoryContext(currentCategory.id);

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen pb-24">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200/80 py-3 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-xs font-medium text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button onClick={() => onNavigate('products')} className="hover:text-black transition-colors">Products</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-black font-semibold">{currentCategory.name}</span>
        </div>
      </div>

      {/* HERO BANNER */}
      <section className="bg-white border-b border-slate-100 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-800 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#ef3479]" />
              <span>Category Focus | Alwar Showroom</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191919] leading-[1.1] tracking-tight">
              {context.h1}
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
              {context.intro}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="category-btn-consultation"
                onClick={() => onOpenEnquiry(`Consultation for ${currentCategory.name}`)}
                className="btn-primary text-xs tracking-wider uppercase py-3.5 px-6 flex items-center gap-2"
              >
                <span>GET EXPERT QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="category-btn-calculator"
                onClick={onOpenCalculator}
                className="btn-secondary text-xs tracking-wider uppercase py-3 px-5 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#ff761c]" />
                <span>ESTIMATE PAINT</span>
              </button>
              <button
                id="category-btn-services"
                onClick={() => onNavigate('painting-services-in-alwar')}
                className="inline-flex items-center gap-2 py-3 px-4 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Need a Certified Painter?</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative rounded-[32px] overflow-hidden shadow-xl border border-slate-200/80 aspect-[4/3] group">
              <img
                src={currentCategory.image}
                alt={`${currentCategory.name} in Alwar`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-bold text-lg tracking-wide drop-shadow-md">
                  {currentCategory.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS LISTING */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
              Available Stock & Formulations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
              Featured {currentCategory.name} Range ({categoryProducts.length} Products)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            100% Genuine Factory Sealed • Computerized Tinting Available
          </p>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
            <Package className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700">Products currently updating</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We carry the full line of {currentCategory.name} at our Vijay Complex, Alwar store. Contact our desk for immediate availability.
            </p>
            <button
              onClick={() => onOpenEnquiry(`Inquiry about ${currentCategory.name}`)}
              className="btn-primary text-xs py-3 px-6 uppercase tracking-wider"
            >
              Contact Sales Desk
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.slug}`}
                onClick={() => onSelectProduct(product)}
                className="bg-white rounded-[28px] p-6 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-4">
                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-50 border border-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-sm border border-slate-200/50">
                      {product.brandName}
                    </div>
                  </div>

                  {/* Title & shortBenefit */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-[#191919] group-hover:text-[#ef3479] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {product.shortBenefit}
                    </p>
                  </div>

                  {/* Key points */}
                  {product.keyBenefits && product.keyBenefits.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      {product.keyBenefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pack sizes badge */}
                  {product.availablePackSizes && (
                    <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-semibold text-slate-700">Packs:</span>
                      <span className="truncate">{product.availablePackSizes.join(', ')}</span>
                    </div>
                  )}
                </div>

                {/* Footer action */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#ef3479] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenEnquiry(`Quotation request for ${product.name}`);
                    }}
                    className="text-[11px] font-bold py-1.5 px-3 rounded-full bg-slate-900 text-white hover:bg-[#ef3479] transition-colors"
                  >
                    Quick Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PRACTICAL BUYING & APPLICATION GUIDE */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff761c] block">
              Alwar Field Advice & Application Tips
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
              How to Select & Apply {currentCategory.name} in Alwar
            </h2>
            <p className="text-sm text-slate-600">
              Guidance from our technical team with over 30 years of local building material experience in Rajasthan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {context.buyingGuide.map((guide, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {guide}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      {context.faqs && context.faqs.length > 0 && (
        <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-8">
          <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200/80 space-y-6">
            <h2 className="text-2xl font-extrabold text-[#191919]">
              Frequently Asked Questions: {currentCategory.name}
            </h2>
            <div className="space-y-4">
              {context.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#fbfbfb] border border-slate-200/70 space-y-2">
                  <h3 className="text-base font-bold text-[#191919] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#ef3479]" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED CATEGORIES */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-8 space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#191919]">
          Explore Related Product Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as CategoryId)}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-black cursor-pointer transition-all duration-300 group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-sm text-[#191919] group-hover:text-[#ef3479] transition-colors">
                  {cat.name}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-1">{cat.badgeText || 'View products'}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM SHOWROOM ASSISTANCE BANNER */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-[#141820] text-white rounded-[36px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff761c]">
              Shubham Colour House, Alwar
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Need Help Choosing the Right Paint or System?
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Visit our showroom at Vijay Complex, Scheme No. 2, Alwar for shade sampling, digital moisture inspections, and computerized tinting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${companyData.phoneTel}`}
              className="btn-primary text-xs tracking-wider uppercase py-3.5 px-6 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL SHOWROOM</span>
            </a>
            <button
              onClick={() => onOpenEnquiry(`Question regarding ${currentCategory.name}`)}
              className="btn-secondary text-xs tracking-wider uppercase py-3 px-5 text-white border-white/20 hover:bg-white/10"
            >
              SEND INQUIRY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
