import React, { useState } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { companyData } from '../data/companyData';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductOrBrand?: string;
  initialSubject?: string;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialProductOrBrand = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Painting & Surface Solutions',
    specificProduct: initialProductOrBrand,
    location: 'Alwar (City / Area)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    const text = `*New Website Enquiry - Shubham Colour House*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Requirement:* ${formData.serviceType}%0A` +
      `*Product/Brand:* ${formData.specificProduct || 'General Guidance'}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Message:* ${formData.message || 'Please contact with dealer quote and shade details.'}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-[36px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-50 text-[#ef3479] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#191919]">
                Get Expert Quotation
              </h2>
              <p className="text-xs text-[#777777]">
                Direct response from Shubham Colour House technical team
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 text-[#777] hover:text-[#191919] hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#191919]">
              Thank You, {formData.name || 'Valued Customer'}!
            </h3>
            <p className="text-sm text-[#777777] max-w-md mx-auto leading-relaxed">
              Your inquiry has been logged. We are opening WhatsApp to instantly connect you with our colour specialist at Shubham Colour House.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${companyData.phonePrimary}`}
                className="btn-secondary py-3 px-6 text-xs"
              >
                <Phone className="w-4 h-4 text-[#ef3479]" />
                <span>Call: {companyData.phonePrimary}</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-primary py-3.5 px-7 text-xs tracking-[0.16em]"
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="sch-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Sharma"
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
                  placeholder="e.g. 9414017918"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="sch-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="sch-label">
                  Service / Category
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="sch-input bg-[#f8f8f8]"
                >
                  <option value="Interior Paints & Royale">Interior Paints & Royale</option>
                  <option value="Exterior Weather Protection">Exterior Weather Protection</option>
                  <option value="Waterproofing & Damp Solution">Waterproofing & Damp Solution</option>
                  <option value="Italian Wood Finishes & PU">Italian Wood Finishes & PU</option>
                  <option value="MYK Tile Cleaners & Grouts">MYK Tile Cleaners & Grouts</option>
                  <option value="3M Automotive Compounds">3M Automotive Compounds</option>
                  <option value="Free On-Site Moisture Inspection">Free On-Site Moisture Inspection</option>
                  <option value="Contractor / Bulk Inquiry">Contractor / Bulk Inquiry</option>
                </select>
              </div>

              <div>
                <label className="sch-label">
                  Product / Brand
                </label>
                <input
                  type="text"
                  placeholder="e.g. Konkem K2, Asian Paints, ICA PU"
                  value={formData.specificProduct}
                  onChange={(e) => setFormData({ ...formData, specificProduct: e.target.value })}
                  className="sch-input"
                />
              </div>
            </div>

            <div>
              <label className="sch-label">
                Site Location / Area in Alwar
              </label>
              <input
                type="text"
                placeholder="e.g. Scheme No. 2, Lajpat Nagar, Delhi Road, Behror"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="sch-input"
              />
            </div>

            <div>
              <label className="sch-label">
                Requirement Details
              </label>
              <textarea
                rows={3}
                placeholder="Describe your wall area, surface condition, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="sch-input resize-none"
              ></textarea>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://wa.me/${companyData.whatsappNumber}?text=Hello%20Shubham%20Colour%20House,%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20rates.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Directly</span>
              </a>

              <button
                type="submit"
                className="btn-primary text-xs tracking-[0.16em] w-full sm:w-auto"
              >
                <Send className="w-4 h-4" />
                <span>SEND INQUIRY</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
