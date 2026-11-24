import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Navigation
} from 'lucide-react';
import { companyData } from '../data/companyData';

interface ContactPageProps {
  onOpenCalculator: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Home Painting Quotation',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const msg = `*New Contact Enquiry - Shubham Colour House Website*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Type:* ${formData.inquiryType}\n` +
      `*Message:* ${formData.message || 'I would like more information.'}`;

    setIsSubmitted(true);
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="space-y-16 max-w-[1540px] mx-auto px-4 sm:px-6 pb-20">
      {/* 1. HERO SECTION */}
      <section className="bg-white rounded-[40px] sm:rounded-[60px] p-8 sm:p-14 lg:p-20 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-slate-100/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Visit Our Alwar Showroom
          </span>

          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold text-[#191919] leading-[1.02] tracking-tight">
            Let’s Connect & Bring <br />
            <span className="gradient-text">Your Surfaces to Life.</span>
          </h1>

          <p className="text-[#777777] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about shade combinations, wall dampness diagnosis, Italian wood finishes, or contractor bulk supply? Our team in Alwar is here to help.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & INTERACTIVE FORM */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Store Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sch-white-card p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-pink-50 text-[#ef3479] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#191919]">
                  Main Showroom & Store
                </h3>
                <p className="text-xs text-[#777777]">Scheme No. 2, Alwar</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#777777]">
              <p className="leading-relaxed font-bold text-[#191919]">
                {companyData.mainStoreAddress.fullFormatted}
              </p>

              <div className="pt-3 border-t border-[#f0f0f0] space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#27a9ef] flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#a1a1a1] block font-bold">Call Us</span>
                    <a href={`tel:${companyData.phoneTel}`} className="font-bold text-[#191919] hover:text-[#ef3479]">
                      {companyData.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#a1a1a1] block font-bold">WhatsApp Direct</span>
                    <a
                      href={companyData.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-emerald-700 hover:underline"
                    >
                      {companyData.whatsappDisplay} (Instant Help)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#ff761c] flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#a1a1a1] block font-bold">Email Helpdesk</span>
                    <a href={`mailto:${companyData.email}`} className="font-bold text-[#191919] hover:text-[#ef3479]">
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#ef3479] flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#a1a1a1] block font-bold">Working Hours</span>
                    <span className="font-bold text-[#191919]">Mon – Sun: 9:00 AM – 8:30 PM (All 7 Days)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                <a
                  href={`tel:${companyData.phoneTel}`}
                  className="btn-secondary !px-4 text-xs tracking-[0.12em] w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW</span>
                </a>
                <a
                  href={companyData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white text-xs font-extrabold tracking-[0.12em] px-4 py-4 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={companyData.mainStoreAddress.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs tracking-[0.16em] w-full"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS ON MAP</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 sch-white-card p-8 sm:p-10">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#191919]">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-[#777777] max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. We have opened WhatsApp to connect you directly with our Alwar showroom experts.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary py-3 px-6 text-xs"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-2xl font-extrabold text-[#191919]">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs text-[#777777] mt-1">
                  Fill out the details below and we will get back to you with advice & quotations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="sch-label">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Singhal"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="sch-input"
                  />
                </div>

                <div>
                  <label className="sch-label">
                    Phone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98XXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="sch-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="sch-label">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rajesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="sch-input"
                  />
                </div>

                <div>
                  <label className="sch-label">
                    Inquiry Category
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="sch-input bg-[#f8f8f8]"
                  >
                    <option value="Home Painting Quotation">Home Painting & Shade Selection</option>
                    <option value="Waterproofing & Dampness Issue">Waterproofing & Dampness Treatment</option>
                    <option value="Italian Wood Polishing ICA">Italian Wood Finishing / PU</option>
                    <option value="Tile Cleaning & Latapoxy Grout">Tile Installation & Cleaning Chemistry</option>
                    <option value="Contractor / Wholesale Supply">Contractor & Architect Wholesale Bulk</option>
                    <option value="Automotive Compounds">Automotive Rubbing & Compounds</option>
                    <option value="General Store Visit">General Inquiry / Store Visit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="sch-label">
                  Your Message / Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your room dimensions, surface type, preferred brands, or specific issues..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="sch-input resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary text-xs tracking-[0.16em] w-full"
              >
                <Send className="w-4 h-4" />
                <span>SEND INQUIRY & OPEN WHATSAPP</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 3. MAP EMBED */}
      <section className="sch-white-card p-8 sm:p-10 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-extrabold text-[#191919] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ef3479]" />
              Find Us in Alwar
            </h3>
            <p className="text-xs text-[#777777]">
              Plot No. 43, Vijay Complex, Near Bhagat Singh Circle, Scheme No. 2, Alwar, Rajasthan
            </p>
          </div>

          <a
            href={companyData.mainStoreAddress.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs tracking-[0.12em] py-3 px-6"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>DIRECTIONS</span>
          </a>
        </div>

        <div className="w-full h-80 sm:h-96 rounded-[28px] overflow-hidden border border-slate-200">
          <iframe
            title="Shubham Colour House Location Map"
            src={companyData.mainStoreAddress.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
