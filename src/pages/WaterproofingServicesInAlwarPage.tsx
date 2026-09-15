import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Droplets, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  HelpCircle, 
  Sparkles, 
  Layers, 
  Wrench, 
  Home, 
  Building2, 
  ChevronRight,
  Package,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { companyData } from '../data/companyData';
import { productsData } from '../data/productsData';
import { Product } from '../types';

interface WaterproofingServicesPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (customNote?: string) => void;
  onNavigate: (tab: string) => void;
}

export const WaterproofingServicesInAlwarPage: React.FC<WaterproofingServicesPageProps> = ({
  onSelectProduct,
  onOpenEnquiry,
  onNavigate
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [serviceForm, setServiceForm] = useState({
    name: '',
    phone: '',
    leakageType: 'Terrace Leakage & Roof Ponding',
    locality: 'Scheme No. 2, Alwar',
    propertyType: 'Residential Villa / Kothi'
  });
  const [formSent, setFormSent] = useState(false);

  // Relevant waterproofing products in catalog
  const waterproofingProducts = productsData.filter(
    p => p.categoryId === 'waterproofing' || p.brandSlug === 'konkem' || p.slug.includes('smartcare') || p.slug.includes('fixit')
  );

  const waterproofingServices = [
    {
      id: 'terrace-waterproofing',
      title: 'Terrace Waterproofing in Alwar',
      tag: 'Elastomeric Liquid Membranes',
      icon: Droplets,
      description: 'Permanent terrace leakage solutions using fiber-mesh reinforced elastomeric membranes that expand and contract with Rajasthan summer heat without cracking.',
      benefits: [
        'Bridges hairline thermal cracks up to 2mm',
        'Reflects solar radiation, reducing top-floor heat by up to 10°C',
        'Direct application over cement coba or China mosaic tiles without demolition'
      ],
      recommendedBrand: 'Asian Paints SmartCare Damp Proof / Konkem K2 Seal'
    },
    {
      id: 'roof-waterproofing',
      title: 'Roof Waterproofing & Sloped Slab Seepage',
      tag: 'Heavy Rainfall Defense',
      icon: ShieldAlert,
      description: 'Complete sealing for sloped RCC roofs, tin shed J-bolts, rainwater gutter channels, and expansion joints to stop torrential rain ingress.',
      benefits: [
        'UV-resistant non-yellowing acrylic polymers',
        'Zero joint failure around rainwater pipes',
        'Prevents water pooling at low-slope corners'
      ],
      recommendedBrand: 'Pidilite Dr. Fixit Raincoat / Konkem K2 Bond'
    },
    {
      id: 'bathroom-waterproofing',
      title: 'Bathroom Waterproofing in Alwar',
      tag: 'Sunken Slabs & Epoxy Grouts',
      icon: Home,
      description: 'End bathroom tile leakage and bedroom wall dampness permanently. We treat sunken slabs with polymer slurries and regrout tile joints with 100% solid epoxy.',
      benefits: [
        'Zero-breakage epoxy regrouting with MYK Latapoxy SP-100',
        'Stops water migration into adjacent bedroom walls',
        'Acid and chemical-resistant joint barriers'
      ],
      recommendedBrand: 'MYK Laticrete Latapoxy SP-100 / Konkem K2 Bond SBR'
    },
    {
      id: 'wall-waterproofing',
      title: 'Wall Waterproofing & Shora (Efflorescence) Cure',
      tag: 'Rising Dampness Barriers',
      icon: Layers,
      description: 'Stop white salt efflorescence (shora) from destroying your wall putty and paint. We strip salt-saturated plaster and inject crystalline polymer barriers.',
      benefits: [
        'Neutralizes subsoil mineral salts chemically',
        'Penetrates deep into brick masonry pores',
        'Permits plaster to breathe while halting liquid water'
      ],
      recommendedBrand: 'Konkem K2 Bond SBR / SmartCare HydroBloc'
    },
    {
      id: 'leakage-repair',
      title: 'Crack Sealing & Structural Leakage Repair',
      tag: 'Polymer Injection & Mortars',
      icon: Wrench,
      description: 'Precision chemical grouting and fiber-reinforced mortar repair for active water leaks, expansion joints, basement retaining walls, and overhead water tanks.',
      benefits: [
        'Non-shrink polymer grouts',
        'Withstands high hydrostatic water pressure',
        'Potable water certified for overhead tanks'
      ],
      recommendedBrand: 'Dr. Fixit CrackX Paste / Konkem Micro-Concrete'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Digital Dampness Meter & Root-Cause Diagnosis',
      desc: 'We measure moisture percentages in slabs and walls to identify whether water ingress is from terrace ponding, plumbing pipe cracks, or subsoil rising dampness.'
    },
    {
      step: '02',
      title: 'Substrate Cleaning & Crack V-Grooving',
      desc: 'All loose cement, algae, and defective coatings are mechanically ground off. Cracks are grooved into a V-profile to allow deep polymer anchor bonding.'
    },
    {
      step: '03',
      title: 'Polymer Coving (Fillet) at 90° Junctions',
      desc: 'We build a 50mm curved mortar fillet along the wall-to-floor corner using Konkem SBR mortar to eliminate vulnerable right-angle stress fractures.'
    },
    {
      step: '04',
      title: 'Multi-Coat Membrane & Mesh Reinforcement',
      desc: 'We apply the manufacturer-specified chemical membrane (Konkem K2 Seal, SmartCare Damp Proof) embedding non-woven glass fiber mesh at high-stress joints.'
    },
    {
      step: '05',
      title: 'Water Ponding Test & Warranty Certificate',
      desc: 'We dam the roof edges and pond water for 48 hours to verify absolute leak-tightness before delivering project completion documentation.'
    }
  ];

  const faqs = [
    {
      q: 'Who is the leading waterproofing contractor in Alwar?',
      a: 'Shubham Colour House is Alwar’s trusted waterproofing specialist since 1995. We combine certified civil chemical engineering products from Konkem, Pidilite, and Asian Paints with trained applicator teams.'
    },
    {
      q: 'How can I solve terrace leakage permanently in Alwar?',
      a: 'Permanent terrace waterproofing requires an elastomeric liquid membrane (such as Asian Paints SmartCare Damp Proof or Konkem K2 Seal) with crack bridging properties and glass-fiber mesh reinforcement, applied over a clean, properly sloped concrete slab.'
    },
    {
      q: 'Can bathroom leakage be repaired without breaking tiles?',
      a: 'Yes! In most cases, water seeps through eroded white cement joints. By cleaning joints and regrouting with Latapoxy SP-100 100% solid epoxy grout, we create a waterproof, stain-proof seal without removing tiles.'
    },
    {
      q: 'What is the best waterproof paint in Alwar for exterior walls?',
      a: 'Asian Paints Apex Ultima, Berger WeatherCoat Long Life, and Dr. Fixit Raincoat are the top waterproof paints for Alwar homes, providing both vibrant colour and heavy-duty water barrier protection.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.name || !serviceForm.phone) return;
    setFormSent(true);
    const text = encodeURIComponent(
      `Hello Shubham Colour House! I need Waterproofing Services in Alwar:%0A` +
      `• Name: ${serviceForm.name}%0A` +
      `• Phone: ${serviceForm.phone}%0A` +
      `• Leakage Issue: ${serviceForm.leakageType}%0A` +
      `• Locality: ${serviceForm.locality}%0A` +
      `• Property Type: ${serviceForm.propertyType}%0A` +
      `Please schedule a free digital moisture inspection.`
    );
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen pb-24">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200/80 py-3 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-xs font-medium text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button onClick={() => onNavigate('products/waterproofing')} className="hover:text-black transition-colors">Waterproofing Products</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-black font-semibold">Waterproofing Services in Alwar</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-white border-b border-slate-100 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-xs font-bold text-emerald-800 uppercase tracking-wider border border-emerald-200">
              <ShieldAlert className="w-4 h-4 text-emerald-600" />
              <span>Engineered Chemical Waterproofing Solutions in Alwar</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191919] leading-[1.1] tracking-tight">
              Roof, Terrace & Bathroom Waterproofing Services in Alwar
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Suffering from ceiling dampness, terrace ponding leaks, or white salt efflorescence (shora) in Alwar? As authorized distributors of <strong>Konkem</strong>, <strong>Asian Paints SmartCare</strong>, and <strong>Pidilite Dr. Fixit</strong>, we provide engineered chemical solutions backed by certified applicators and digital dampness meter testing.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <span className="block text-xl font-extrabold text-emerald-600">Zero Demo</span>
                <span className="text-xs text-slate-500 font-medium">Over-Tile Solutions</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <span className="block text-xl font-extrabold text-[#191919]">Konkem & Pidilite</span>
                <span className="text-xs text-slate-500 font-medium">Certified Chemicals</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 col-span-2 sm:col-span-1">
                <span className="block text-xl font-extrabold text-blue-600">Up to 8 Yrs</span>
                <span className="text-xs text-slate-500 font-medium">System Warranty</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#waterproofing-booking-card"
                className="btn-primary text-xs tracking-wider uppercase py-3.5 px-6 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
              >
                <span>BOOK FREE MOISTURE INSPECTION</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('products/waterproofing')}
                className="btn-secondary text-xs tracking-wider uppercase py-3 px-5 flex items-center gap-2"
              >
                <Package className="w-4 h-4 text-emerald-600" />
                <span>VIEW WATERPROOF PRODUCTS</span>
              </button>
            </div>
          </div>

          {/* Quick Booking Card */}
          <div id="waterproofing-booking-card" className="lg:col-span-5">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
                  Free Site Inspection • Alwar
                </span>
                <h3 className="text-xl font-extrabold text-[#191919]">
                  Schedule a Moisture Meter Inspection
                </h3>
                <p className="text-xs text-slate-500">
                  Our waterproofing engineer will inspect your roof or damp walls with digital instruments.
                </p>
              </div>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900">Request Sent Successfully!</h4>
                  <p className="text-xs text-emerald-800">
                    We have opened WhatsApp to confirm your preferred inspection time. Our technical supervisor will reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={serviceForm.name}
                      onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                      placeholder="e.g. Amit Meena"
                      className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={serviceForm.phone}
                      onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                      placeholder="e.g. 98290XXXXX"
                      className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Leakage Type</label>
                      <select
                        value={serviceForm.leakageType}
                        onChange={(e) => setServiceForm({ ...serviceForm, leakageType: e.target.value })}
                        className="w-full text-xs py-2.5 px-2 rounded-xl border border-slate-200 focus:outline-none focus:border-black bg-white"
                      >
                        <option>Terrace Leakage</option>
                        <option>Roof Ponding Seepage</option>
                        <option>Bathroom Tile Seepage</option>
                        <option>Wall Dampness / Shora</option>
                        <option>Basement Tanking</option>
                        <option>Overhead Water Tank</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Locality in Alwar</label>
                      <input
                        type="text"
                        value={serviceForm.locality}
                        onChange={(e) => setServiceForm({ ...serviceForm, locality: e.target.value })}
                        placeholder="e.g. Scheme No. 1"
                        className="w-full text-xs py-2.5 px-3 rounded-xl border border-slate-200 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 text-xs font-bold tracking-wider uppercase mt-2 bg-emerald-600 hover:bg-emerald-700"
                  >
                    Confirm Free Moisture Assessment
                  </button>
                  <p className="text-[11px] text-center text-slate-400">
                    Completely free. No obligation to purchase.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CORE WATERPROOFING SERVICE VERTICALS */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-16 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 block">
            Specialized Chemical Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191919]">
            Comprehensive Waterproofing Services in Alwar
          </h2>
          <p className="text-sm text-slate-600">
            Engineered systems designed to withstand heavy rainfall, thermal shock, and high mineral efflorescence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {waterproofingServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={`wp-card-${service.id}`}
                className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#191919]">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-xs font-semibold text-slate-500 bg-slate-50 p-2.5 rounded-xl">
                    <span className="text-slate-800">System: </span>{service.recommendedBrand}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenEnquiry(`Waterproofing inquiry for ${service.title}`)}
                    className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <span>Request Diagnosis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Alwar On-Site
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED WATERPROOFING CHEMICAL PRODUCTS */}
      <section className="bg-white border-y border-slate-200/80 py-16 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 block">
                Authorized Material Stock
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
                Genuine Waterproofing Products in Alwar
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products/waterproofing')}
              className="text-xs font-bold uppercase tracking-wider text-emerald-700 hover:underline flex items-center gap-1"
            >
              <span>View All Waterproofing Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {waterproofingProducts.slice(0, 3).map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-600 cursor-pointer transition-all duration-300 flex flex-col justify-between group bg-slate-50/50"
              >
                <div className="space-y-3">
                  <div className="rounded-xl overflow-hidden aspect-[16/10] bg-white border border-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase">{product.brandName}</span>
                  <h4 className="font-extrabold text-base text-[#191919] group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {product.shortBenefit}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Product Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMATIC WATERPROOFING PROCESS */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff761c] block">
            Quality Assurance Protocol
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191919]">
            5-Step Permanent Waterproofing Methodology
          </h2>
          <p className="text-sm text-slate-600">
            How we eliminate moisture ingress without short-term patchwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div key={step.step} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <span className="text-2xl font-black text-emerald-600">{step.step}</span>
              <h4 className="text-sm font-bold text-[#191919]">{step.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200/80 space-y-6">
          <h2 className="text-2xl font-extrabold text-[#191919]">
            Waterproofing in Alwar: Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
                <h3 className="text-base font-bold text-[#191919] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600" />
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

      {/* BOTTOM CTA */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-[#141820] text-white rounded-[36px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff761c]">
              Stop Seepage Before Next Rain
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Get an Engineered Waterproofing Assessment in Alwar
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Don’t let water weaken your building’s concrete slabs and reinforcement steel. Call our technical desk at Vijay Complex, Scheme No. 2, Alwar.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${companyData.phonePrimary}`}
              className="btn-primary text-xs tracking-wider uppercase py-3.5 px-6 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
            >
              <Phone className="w-4 h-4" />
              <span>CALL {companyData.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenEnquiry('Waterproofing Services Consultation')}
              className="btn-secondary text-xs tracking-wider uppercase py-3 px-5 text-white border-white/20 hover:bg-white/10"
            >
              SCHEDULE INSPECTION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
