import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Award, 
  Sparkles, 
  Layers, 
  Wrench, 
  Home, 
  Building2, 
  Briefcase, 
  Store, 
  Calendar,
  HelpCircle,
  Calculator,
  ChevronRight,
  ClipboardCheck,
  Zap
} from 'lucide-react';
import { companyData } from '../data/companyData';

interface PaintingServicesPageProps {
  onOpenEnquiry: (customNote?: string) => void;
  onOpenCalculator: () => void;
  onNavigate: (tab: string) => void;
}

export const PaintingServicesInAlwarPage: React.FC<PaintingServicesPageProps> = ({
  onOpenEnquiry,
  onOpenCalculator,
  onNavigate
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    serviceType: 'Residential Painting in Alwar',
    areaLocality: 'Scheme No. 2',
    propertyType: '3BHK Flat / House',
    timeline: 'Within 2 Weeks'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const serviceCategories = [
    {
      id: 'interior-painting',
      title: 'Interior Painting Services in Alwar',
      tag: 'Velvet Smooth Living Spaces',
      icon: Home,
      description: 'Complete indoor painting for drawing rooms, bedrooms, dining halls, and ceilings with dust-free mechanized sanding and odorless luxury emulsions.',
      features: ['Birla White 2-coat putty leveling', 'Acrylic primer porosity sealing', 'Royale Glitz / Silk Glamor washable topcoats']
    },
    {
      id: 'exterior-painting',
      title: 'Exterior Painting Services in Alwar',
      tag: 'Rajasthan Sun & Rain Shield',
      icon: Building2,
      description: 'Heavy-duty exterior wall coatings with elastomeric crack-bridging, scaffolding support, and 7 to 10-year anti-fading warranties.',
      features: ['High-pressure water washing', 'Fiber crack filling up to 3mm', 'Apex Ultima / WeatherCoat Long Life 10']
    },
    {
      id: 'residential-painting',
      title: 'Residential Painting Services in Alwar',
      tag: 'Flats, Builder Floors & Independent Kothis',
      icon: Sparkles,
      description: 'Complete home painting packages tailored for families in Alwar. We protect all furniture and floors before starting and leave spaces immaculate.',
      features: ['Full drop-cloth furniture covering', 'Daily progress supervision', 'Post-painting comprehensive cleaning']
    },
    {
      id: 'commercial-painting',
      title: 'Commercial Painting Services in Alwar',
      tag: 'Offices, Showrooms & Institutions',
      icon: Briefcase,
      description: 'Rapid turnaround painting for commercial corporate offices, clinics, retail shops, and schools with low-odor paints and night/weekend shifts.',
      features: ['Flexible non-disruptive timings', 'Formal tax invoices & BOQs', 'Heavy-duty scrub-resistant coatings']
    },
    {
      id: 'flat-painting',
      title: 'Flat & Apartment Painting in Alwar',
      tag: '1BHK, 2BHK, 3BHK & Penthouse Packages',
      icon: Layers,
      description: 'Fast, systematic apartment repainting. Transparent computerized square-foot rates with zero hidden material surcharges.',
      features: ['Completed in 3 to 5 working days', 'Curated designer shade palettes', 'Touch-up warranty included']
    },
    {
      id: 'villa-painting',
      title: 'Villa & Bungalow Painting in Alwar',
      tag: 'Architectural Heritage & Modern Luxury',
      icon: Award,
      description: 'High-end architectural finishes including Italian PU wood polish, metallic accent walls, Venetian stucco plasters, and facade weatherproofing.',
      features: ['Italian PU spray application', 'Custom wall stencils & textures', 'Dedicated site project manager']
    },
    {
      id: 'office-painting',
      title: 'Office Painting in Alwar',
      tag: 'Productive Workspaces',
      icon: Zap,
      description: 'Modernise commercial office interiors with high-reflectance, eye-strain reducing colors and low-VOC paints that preserve indoor air quality.',
      features: ['Zero toxic solvent fumes', 'Fast-drying formulations', 'Conference room acoustic & accent walls']
    },
    {
      id: 'shop-painting',
      title: 'Shop & Retail Showroom Painting',
      tag: 'Retail Spaces & Boutiques',
      icon: Store,
      description: 'High-impact retail paint jobs designed to highlight merchandising, with durable scuff-resistant finishes that endure daily foot traffic.',
      features: ['High-sheen light bounce', 'Durable baseboard protection', 'Overnight execution available']
    },
    {
      id: 'repainting-services',
      title: 'Whole-Home Repainting & Plaster Refresh',
      tag: 'Modernise Old Plaster & Distemper',
      icon: Wrench,
      description: 'Upgrade from old peeling distemper or faded paint to contemporary washable emulsions with deep-penetrating primer binders.',
      features: ['Complete dead paint scraping', 'Shora & salt efflorescence treatment', 'Plaster crack stabilization']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Free On-Site Inspection & Moisture Meter Test',
      desc: 'Our technical consultant visits your location in Alwar with digital moisture meters to evaluate substrate health and measure square footage with laser precision.'
    },
    {
      step: '02',
      title: 'Itemized Computerized Quotation (BOQ)',
      desc: 'You receive a transparent bill of quantities detailing exact square footage, brand options, primer, putty, and topcoat specifications with zero hidden extras.'
    },
    {
      step: '03',
      title: 'Furniture & Floor Masking Protection',
      desc: 'Before any sanding or scraping begins, our crew covers your furniture, switchboards, doors, and flooring with heavy-duty drop cloths and masking tape.'
    },
    {
      step: '04',
      title: 'Mechanized Sanding & Surface Preparation',
      desc: 'We use modern electric sanders connected to dust collectors to smooth walls and putty without filling your living quarters with chalk dust.'
    },
    {
      step: '05',
      title: 'Multi-Coat Primer & Emulsion Application',
      desc: 'Certified master painters apply the specified primer and 2 to 3 coats of premium emulsion, observing strict manufacturer recoat drying intervals.'
    },
    {
      step: '06',
      title: 'Site Clean-up & Final Quality Handover',
      desc: 'We clean all masked areas, wash floor edges, and walk through the property with you for final approval.'
    }
  ];

  const serviceLocalities = [
    'Scheme No. 1, Alwar',
    'Scheme No. 2, Alwar (Vijay Complex)',
    'Scheme No. 3 & Scheme No. 4',
    'Scheme No. 8 & Scheme No. 10',
    'MIA Industrial Area Alwar',
    'Shanti Kunj & Company Bagh',
    'Bhiwadi Industrial Corridor',
    'Neemrana & Japanese Zone',
    'Tijara & Kishangarh Bas',
    'Rajgarh & Khairthal'
  ];

  const faqs = [
    {
      q: 'How much do professional painting services in Alwar cost per sq ft?',
      a: 'In Alwar, standard 2-coat repaint jobs range from ₹12 to ₹18 per sq.ft including material and labour. Luxury washable finishes (like Asian Paints Royale) over freshly puttied walls typically range from ₹26 to ₹38 per sq.ft.'
    },
    {
      q: 'Do your painters bring genuine factory-sealed paint?',
      a: 'Yes, 100%. All paints, putties, and primers originate directly from our authorized warehouse at Shubham Colour House, Scheme No. 2, Alwar with verifiable batch codes and computerized tinting.'
    },
    {
      q: 'How long does it take to paint a 3BHK flat in Alwar?',
      a: 'A standard 3BHK home repainting project with scraping, primer, and 2 topcoats takes 4 to 6 working days. Fresh plaster work requiring full 2-coat putty takes 7 to 9 days.'
    },
    {
      q: 'Do you provide a free site visit and moisture inspection in Alwar?',
      a: 'Yes, we provide complimentary on-site moisture meter testing, laser area measurement, and physical shade card sampling across Alwar city.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone) return;
    setFormSubmitted(true);
    const text = encodeURIComponent(
      `Hello Shubham Colour House! I want to request Painting Services in Alwar:%0A` +
      `• Name: ${bookingForm.name}%0A` +
      `• Phone: ${bookingForm.phone}%0A` +
      `• Service: ${bookingForm.serviceType}%0A` +
      `• Locality/Area: ${bookingForm.areaLocality}%0A` +
      `• Property: ${bookingForm.propertyType}%0A` +
      `• Desired Timeline: ${bookingForm.timeline}%0A` +
      `Please confirm the free site inspection appointment.`
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
          <span className="text-black font-semibold">Painting Services in Alwar</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-white border-b border-slate-100 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-800 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified Painting Contractors & Master Painters in Alwar</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191919] leading-[1.1] tracking-tight">
              Professional House & Commercial Painting Services in Alwar
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Looking for reliable <strong>house painting services in Alwar</strong> or experienced <strong>paint contractors near you</strong>? Shubham Colour House pairs authentic manufacturer paints with certified master painters trained in dust-free mechanized sanding, laser area measurements, and punctual site clean-up.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <span className="block text-xl font-extrabold text-[#191919]">30+ Yrs</span>
                <span className="text-xs text-slate-500 font-medium">Alwar Heritage</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <span className="block text-xl font-extrabold text-[#191919]">100%</span>
                <span className="text-xs text-slate-500 font-medium">Genuine Paints</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 col-span-2 sm:col-span-1">
                <span className="block text-xl font-extrabold text-[#191919]">Free</span>
                <span className="text-xs text-slate-500 font-medium">Site Moisture Test</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#quick-booking-section"
                className="btn-primary text-xs tracking-wider uppercase py-3.5 px-6 flex items-center gap-2"
              >
                <span>BOOK FREE SITE INSPECTION</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenCalculator}
                className="btn-secondary text-xs tracking-wider uppercase py-3 px-5 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#ff761c]" />
                <span>CALCULATE PAINT COST</span>
              </button>
            </div>
          </div>

          {/* Quick Booking Card */}
          <div id="quick-booking-section" className="lg:col-span-5">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ef3479] block">
                  Fast Response | Local Alwar Team
                </span>
                <h3 className="text-xl font-extrabold text-[#191919]">
                  Request Free On-Site Measurement
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in your details and our technical supervisor will call within 2 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900">Request Dispatched!</h4>
                  <p className="text-xs text-emerald-800">
                    We have opened WhatsApp to confirm your site visit slot. Our supervisor will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      placeholder="e.g. 98290XXXXX"
                      className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                      <select
                        value={bookingForm.serviceType}
                        onChange={(e) => setBookingForm({ ...bookingForm, serviceType: e.target.value })}
                        className="w-full text-xs py-2.5 px-2 rounded-xl border border-slate-200 focus:outline-none focus:border-black bg-white"
                      >
                        <option>Interior Painting</option>
                        <option>Exterior Painting</option>
                        <option>Complete Residential</option>
                        <option>Flat / Apartment</option>
                        <option>Villa / Bungalow</option>
                        <option>Office / Commercial</option>
                        <option>Whole-Home Repainting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Locality in Alwar</label>
                      <input
                        type="text"
                        value={bookingForm.areaLocality}
                        onChange={(e) => setBookingForm({ ...bookingForm, areaLocality: e.target.value })}
                        placeholder="e.g. Scheme No. 2"
                        className="w-full text-xs py-2.5 px-3 rounded-xl border border-slate-200 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 text-xs font-bold tracking-wider uppercase mt-2"
                  >
                    Confirm Free Inspection Appointment
                  </button>
                  <p className="text-[11px] text-center text-slate-400">
                    No advance payment required. 100% free consultation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ALL 9 SERVICE CATEGORIES */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-16 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            End-to-End Execution Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191919]">
            Complete Range of Painting Services in Alwar
          </h2>
          <p className="text-sm text-slate-600">
            From single-room refresh to multi-storey institutional buildings, we deploy certified painter crews equipped with mechanized tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCategories.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
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
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenEnquiry(`Booking inquiry for ${service.title}`)}
                    className="text-xs font-bold text-[#ef3479] hover:underline flex items-center gap-1"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`tel:${companyData.phoneTel}`}
                    className="text-[11px] font-semibold text-slate-500 hover:text-black"
                  >
                    Call: {companyData.phoneDisplay}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* STEP-BY-STEP SYSTEMATIC PROCESS */}
      <section className="bg-white border-y border-slate-200/80 py-16 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff761c] block">
              The Shubham Standard
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191919]">
              Our Step-by-Step Professional Painting Process
            </h2>
            <p className="text-sm text-slate-600">
              No guesswork, no dust mess. Here is how our certified painters in Alwar execute every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                <span className="text-3xl font-black text-slate-300 block">{step.step}</span>
                <h4 className="text-base font-bold text-[#191919]">{step.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS IN ALWAR & REGION */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#059669] block">
            Local Presence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
            Painting Service Areas Covered in Alwar District
          </h2>
          <p className="text-sm text-slate-600">
            Our painting crews and technical consultants regularly service all key sectors and neighboring industrial corridors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {serviceLocalities.map((loc, idx) => (
            <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 text-center text-xs font-semibold text-slate-800 flex items-center justify-center gap-1.5 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#ef3479] flex-shrink-0" />
              <span>{loc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200/80 space-y-6">
          <h2 className="text-2xl font-extrabold text-[#191919]">
            Painting Services in Alwar: Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
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

      {/* FINAL ASSISTANCE CTA */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-[#141820] text-white rounded-[36px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff761c]">
              Get Started Today
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Connect With Alwar's Most Trusted Paint Contractors
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Visit our showroom at Plot No. 43, Vijay Complex, Scheme No. 2, Alwar or speak directly with our senior paint consultant.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${companyData.phoneTel}`}
              className="btn-primary text-xs tracking-wider uppercase py-3.5 px-6 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL {companyData.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenEnquiry('Painting Services Inquiry')}
              className="btn-secondary text-xs tracking-wider uppercase py-3 px-5 text-white border-white/20 hover:bg-white/10"
            >
              REQUEST CALL BACK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
