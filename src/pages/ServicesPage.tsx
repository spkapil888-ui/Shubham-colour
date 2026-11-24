import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Users, 
  ShieldAlert, 
  Layers, 
  Sparkles, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Clock, 
  Award, 
  ShieldCheck, 
  Building2, 
  Zap, 
  ChevronDown 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  onOpenEnquiry: (customNote?: string) => void;
  onOpenCalculator: () => void;
  onNavigate: (tab: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenEnquiry,
  onOpenCalculator,
  onNavigate
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    serviceType: 'On-Site Dampness & Paint Inspection',
    addressOrArea: '',
    preferredDate: '',
    propertyType: 'Residential Villa / House',
    notes: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-[#ef3479]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#27a9ef]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#ff761c]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#9a2ce0]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#ef3479]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#191919]" />;
      default:
        return <Award className="w-6 h-6 text-[#ef3479]" />;
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone) return;
    
    const msg = `*New Service Booking Request - Shubham Colour House*\n` +
      `*Name:* ${bookingForm.name}\n` +
      `*Phone:* ${bookingForm.phone}\n` +
      `*Service:* ${bookingForm.serviceType}\n` +
      `*Property:* ${bookingForm.propertyType}\n` +
      `*Area/Location:* ${bookingForm.addressOrArea || 'Alwar'}\n` +
      `*Preferred Date:* ${bookingForm.preferredDate || 'Earliest available'}\n` +
      `*Notes:* ${bookingForm.notes || 'Please call to confirm.'}`;
    
    setBookingSubmitted(true);
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const serviceFaqs = [
    {
      q: 'Is the on-site inspection and digital moisture testing really free?',
      a: 'Yes! We provide complimentary on-site visits within Alwar city and nearby areas. Our team brings a calibrated digital moisture pin-meter, laser measuring tool, and physical shade swatches to evaluate your walls with zero obligation.'
    },
    {
      q: 'How do you verify your painter network in Alwar?',
      a: 'Contractors and master painters in our network have a verified track record with us spanning years. They receive technical product training on modern spray equipment, dust-free sanding machines, and manufacturer-recommended drying times.'
    },
    {
      q: 'Can I get a detailed material estimate before starting work?',
      a: 'Absolutely. We generate a computerized Bill of Quantities (BOQ) breaking down primer, putty, undercoats, topcoats, and waterproofing chemicals so you know the exact quantities and transparent cost breakdown.'
    },
    {
      q: 'Do you provide bulk contractor supply with GST invoices and TDS certificates?',
      a: 'Yes. Our Contractor & Architect Wholesale Desk provides prompt GST billing, technical data sheets (TDS), and direct batch coordination for commercial and large residential projects.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 max-w-[1540px] mx-auto px-4 sm:px-6 pb-20">
      {/* 1. HERO SECTION */}
      <section className="bg-white rounded-[40px] sm:rounded-[60px] p-8 sm:p-14 lg:p-20 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-slate-100/80">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            End-to-End Surface Mastery
          </span>

          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold text-[#191919] leading-[1.02] tracking-tight">
            Expert Surface Diagnosis & <br />
            <span className="gradient-text">Verified Master Painters.</span>
          </h1>

          <p className="text-[#777777] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            From free digital moisture testing and laser area calculation to certified master painters and Italian wood coating guidance—we turn surface challenges into flawless finishes.
          </p>

          {/* Key Stat Badges */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { val: '100% Free', lbl: 'On-Site Dampness Check' },
              { val: '50+', lbl: 'Verified Master Painters' },
              { val: 'Digital', lbl: 'Tinting & Quantity Calc' },
              { val: '30+ Years', lbl: 'Alwar Coating Expertise' }
            ].map((st, i) => (
              <div key={i} className="p-5 rounded-[24px] bg-[#f8f8f8] border border-slate-200/60">
                <div className="text-2xl font-extrabold text-[#191919]">{st.val}</div>
                <div className="text-xs text-[#777777] mt-0.5 font-bold">{st.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Our Core Services
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#191919]">
            Comprehensive Solutions For <span className="gradient-text">Every Surface.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="sch-white-card p-8 flex flex-col justify-between relative group"
            >
              {service.badge && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#ef3479] text-[11px] font-bold">
                  {service.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#f8f8f8] flex items-center justify-center">
                  {getServiceIcon(service.iconName)}
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#191919] group-hover:text-[#ef3479] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-[#ef3479] mt-1">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-xs text-[#777777] leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-3 border-t border-[#f0f0f0]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#a1a1a1] block">
                    What's Included:
                  </span>
                  <ul className="space-y-1.5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-[#333] flex items-start gap-2 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ef3479] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-[11px] bg-[#f8f8f8] p-3 rounded-2xl text-[#777777] border border-slate-200/60">
                  <span className="font-bold text-[#191919]">Ideal For: </span>
                  {service.idealFor}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0f0f0] flex items-center gap-3">
                <button
                  onClick={() => {
                    setBookingForm((prev) => ({ ...prev, serviceType: service.title }));
                    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary flex-1 text-xs tracking-[0.14em] py-3.5"
                >
                  <span>BOOK SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${companyData.whatsappNumber}?text=Hello%20Shubham%20Colour%20House,%20I%20am%20interested%20in%20your%20service:%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STEP-BY-STEP SERVICE WORKFLOW */}
      <section className="bg-[#050505] text-white py-16 sm:py-20 px-6 sm:px-12 rounded-[40px] sm:rounded-[60px] shadow-2xl">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
              Our 5-Step Process
            </span>
            <h2 className="text-[34px] sm:text-[46px] font-extrabold text-white leading-tight">
              How We Deliver <span className="gradient-text">Flawless Results.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Free Request',
                desc: 'Call, WhatsApp, or submit booking with your project address in Alwar.'
              },
              {
                step: '02',
                title: 'Site Audit',
                desc: 'Technician conducts on-site moisture testing and laser area calculation.'
              },
              {
                step: '03',
                title: 'Exact BOQ',
                desc: 'Transparent Bill of Quantities with primer, putty, & paint requirements.'
              },
              {
                step: '04',
                title: 'Trained Execution',
                desc: 'Trained painters apply systems adhering strictly to drying times.'
              },
              {
                step: '05',
                title: 'Quality Warranty',
                desc: 'Final inspection, touch-up check, and manufacturer warranty paperwork.'
              }
            ].map((stepItem) => (
              <div
                key={stepItem.step}
                className="sch-dark-card p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-3xl font-extrabold text-[#ef3479]">
                    {stepItem.step}
                  </div>
                  <h3 className="font-extrabold text-white text-base">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-[#929292] leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOOKING FORM */}
      <section id="booking-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5 bg-white rounded-[36px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-slate-100">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
              Book Consultation
            </span>

            <h3 className="text-3xl font-extrabold text-[#191919]">
              Schedule Your Free On-Site Inspection
            </h3>

            <p className="text-[#777777] text-sm leading-relaxed">
              Fill out the quick form to have our technical surface expert visit your home, villa, or commercial site in Alwar. We verify wall dampness and recommend optimal paint systems.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#f0f0f0] text-xs text-[#777777]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#ef3479] flex-shrink-0" />
                <div>
                  <span className="text-[#a1a1a1] block text-[10px] uppercase font-bold">Call Directly</span>
                  <a href={`tel:${companyData.phoneTel}`} className="font-bold text-[#191919] hover:underline">
                    {companyData.phonePrimary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <div>
                  <span className="text-[#a1a1a1] block text-[10px] uppercase font-bold">WhatsApp Direct</span>
                  <a
                    href={companyData.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-emerald-700 hover:underline"
                  >
                    {companyData.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#27a9ef] flex-shrink-0" />
                <div>
                  <span className="text-[#a1a1a1] block text-[10px] uppercase font-bold">Service Hours</span>
                  <span className="font-bold text-[#191919]">Monday – Sunday: 9:00 AM – 8:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7 sch-white-card p-8 sm:p-10">
          {bookingSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#191919]">
                Consultation Request Sent!
              </h3>
              <p className="text-sm text-[#777777] max-w-md mx-auto">
                Thank you, <strong>{bookingForm.name}</strong>. We have opened WhatsApp with your booking details.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setBookingSubmitted(false)}
                  className="btn-secondary py-3 px-6 text-xs"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="sch-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="sch-input"
                  />
                </div>

                <div>
                  <label className="sch-label">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98XXX XXXXX"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="sch-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="sch-label">
                    Service Required
                  </label>
                  <select
                    value={bookingForm.serviceType}
                    onChange={(e) => setBookingForm({ ...bookingForm, serviceType: e.target.value })}
                    className="sch-input bg-[#f8f8f8]"
                  >
                    <option value="On-Site Dampness & Paint Inspection">Free Moisture Check & Site Inspection</option>
                    <option value="Verified Painters Network">Hire Certified Master Painters</option>
                    <option value="Waterproofing & Seepage Diagnosis">Waterproofing & Roof Leakage Treatment</option>
                    <option value="Italian Wood Finishing PU">Italian Wood Polishing (ICA/PU)</option>
                    <option value="Tile Care & Bathroom Sealing">Tile Installation & Cleaning (Clenza/Latapoxy)</option>
                    <option value="Wholesale Contractor Bulk Supply">Wholesale Contractor Bulk Supply</option>
                  </select>
                </div>

                <div>
                  <label className="sch-label">
                    Property Type
                  </label>
                  <select
                    value={bookingForm.propertyType}
                    onChange={(e) => setBookingForm({ ...bookingForm, propertyType: e.target.value })}
                    className="sch-input bg-[#f8f8f8]"
                  >
                    <option value="Residential Villa / House">Residential Villa / Independent House</option>
                    <option value="Apartment / Flat">Apartment / Flat</option>
                    <option value="Commercial Showroom / Office">Commercial Showroom / Office</option>
                    <option value="Industrial / Factory Building">Industrial / Factory Building</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="sch-label">
                    Location / Area in Alwar
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Scheme No. 2, Lajpat Nagar, MIA"
                    value={bookingForm.addressOrArea}
                    onChange={(e) => setBookingForm({ ...bookingForm, addressOrArea: e.target.value })}
                    className="sch-input"
                  />
                </div>

                <div>
                  <label className="sch-label">
                    Preferred Date / Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tomorrow 11:00 AM"
                    value={bookingForm.preferredDate}
                    onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                    className="sch-input"
                  />
                </div>
              </div>

              <div>
                <label className="sch-label">
                  Specific Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your surface issues (e.g. wall moisture, peeling paint, terrace leakage)..."
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  className="sch-input resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary text-xs tracking-[0.16em] w-full"
              >
                <span>REQUEST FREE ON-SITE INSPECTION</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Frequently Asked Questions
          </span>
          <h2 className="text-[30px] sm:text-[38px] font-extrabold text-[#191919]">
            Everything You Need To Know
          </h2>
        </div>

        <div className="space-y-3">
          {serviceFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="sch-white-card overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-[#191919] text-base hover:text-[#ef3479]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#a1a1a1] transition-transform ${
                      isOpen ? 'rotate-180 text-[#ef3479]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#777777] leading-relaxed border-t border-[#f0f0f0] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
