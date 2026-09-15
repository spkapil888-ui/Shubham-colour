import React, { useState } from 'react';
import { 
  Paintbrush, 
  Sun, 
  ShieldAlert, 
  Droplets, 
  Layers, 
  ShieldCheck, 
  Gauge, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  Phone, 
  MessageCircle,
  Wrench,
  AlertTriangle
} from 'lucide-react';
import { concernsData, ConcernItem } from '../data/concernsData';
import { CategoryId, Product } from '../types';
import { companyData } from '../data/companyData';

interface ConcernsPageProps {
  initialConcernSlug?: string | null;
  onSelectCategory: (categoryId: CategoryId) => void;
  onSelectProductBySlug?: (productSlug: string) => void;
  onOpenEnquiry: (note?: string) => void;
  onOpenCalculator: () => void;
  onNavigate: (tab: string) => void;
}

export const ConcernsPage: React.FC<ConcernsPageProps> = ({
  initialConcernSlug,
  onSelectCategory,
  onOpenEnquiry,
  onOpenCalculator,
  onNavigate
}) => {
  const [selectedConcernSlug, setSelectedConcernSlug] = useState<string | null>(initialConcernSlug || null);

  const selectedConcern = selectedConcernSlug 
    ? concernsData.find(c => c.slug === selectedConcernSlug) || null
    : null;

  const getConcernIcon = (iconName: string) => {
    switch (iconName) {
      case 'Paintbrush':
        return <Paintbrush className="w-5 h-5 text-[#7C3AED]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#0284C7]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#059669]" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-[#0EA5E9]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#EA580C]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#334155]" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-[#DC2626]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#9333EA]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#ff761c]" />;
    }
  };

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen pb-24">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200/80 py-3 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-xs font-medium text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button 
            onClick={() => {
              setSelectedConcernSlug(null);
              window.history.pushState(null, '', '/shop-by-concern');
            }} 
            className="hover:text-black transition-colors"
          >
            Shop By Concern
          </button>
          {selectedConcern && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-black font-semibold">{selectedConcern.title}</span>
            </>
          )}
        </div>
      </div>

      {/* HERO HEADER */}
      <section className="bg-white border-b border-slate-100 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto text-center space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Targeted Architectural Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191919] leading-tight tracking-tight">
            Shop By Concern: Diagnose & Solve Wall, Roof & Surface Problems
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Don’t guess which paint can to buy. Select the exact issue your home or property is facing—from terrace leakage and efflorescence (shora) to heat reflection and wood restoration—for proven multi-step systems.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-3">
            {concernsData.map((item) => {
              const isSelected = selectedConcernSlug === item.slug;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    const newSlug = isSelected ? null : item.slug;
                    setSelectedConcernSlug(newSlug);
                    if (newSlug) {
                      window.history.pushState(null, '', `/concerns/${newSlug}`);
                    } else {
                      window.history.pushState(null, '', '/shop-by-concern');
                    }
                  }}
                  className={`text-xs font-semibold py-2 px-3.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-black text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{item.title.split(':')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* IF A SPECIFIC CONCERN IS SELECTED, SHOW DETAIL VIEW */}
      {selectedConcern ? (
        <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-12 space-y-12 animate-fadeIn">
          {/* Active Concern Banner */}
          <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-800">
                {getConcernIcon(selectedConcern.iconName)}
                <span>{selectedConcern.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191919]">
                {selectedConcern.title}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {selectedConcern.problemStatement}
              </p>

              {/* Symptoms */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">
                  Common Warning Signs & Symptoms:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  {selectedConcern.commonSymptoms.map((sym, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-rose-50/60 p-2.5 rounded-xl border border-rose-100/80">
                      <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-md">
                <img
                  src={selectedConcern.image}
                  alt={selectedConcern.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <span className="text-xs font-semibold text-slate-500 block">Need a free moisture or surface inspection?</span>
                <button
                  onClick={() => onOpenEnquiry(`Inspection request for ${selectedConcern.title}`)}
                  className="btn-primary w-full py-3 text-xs tracking-wider uppercase"
                >
                  Book Free Site Visit in Alwar
                </button>
              </div>
            </div>
          </div>

          {/* Recommended Step-by-Step Solution */}
          <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#059669] block">
                Standard Engineering Protocol
              </span>
              <h3 className="text-2xl font-extrabold text-[#191919]">
                Recommended 3-Step Treatment Process
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {selectedConcern.recommendedSteps.map((step) => (
                <div key={step.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-black text-white text-xs font-bold">
                      Step 0{step.step}
                    </span>
                    <h4 className="text-base font-bold text-[#191919]">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {step.productRecommendation && (
                    <div className="pt-3 border-t border-slate-200 text-xs font-semibold text-[#059669]">
                      Recommended: {step.productRecommendation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Practical Advice */}
            {selectedConcern.practicalAdvice && (
              <div className="mt-6 p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                  Important Contractor & Homeowner Advice:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-amber-900">
                  {selectedConcern.practicalAdvice.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Suitable Product Categories */}
          <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200/80 space-y-6">
            <h3 className="text-2xl font-extrabold text-[#191919]">
              Browse Recommended Categories For This Concern
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedConcern.suitableCategoryIds.map((catId) => (
                <div
                  key={catId}
                  onClick={() => onSelectCategory(catId as CategoryId)}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-black cursor-pointer transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="font-bold text-sm text-[#191919] group-hover:text-[#ef3479] capitalize">
                    {catId.replace(/-/g, ' ')}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {selectedConcern.faqs && (
            <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200/80 space-y-6">
              <h3 className="text-2xl font-extrabold text-[#191919]">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {selectedConcern.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
                    <h4 className="text-base font-bold text-[#191919] flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#ef3479]" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back button */}
          <div className="text-center">
            <button
              onClick={() => {
                setSelectedConcernSlug(null);
                window.history.pushState(null, '', '/shop-by-concern');
              }}
              className="text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full border border-slate-300 hover:bg-slate-100 transition-colors"
            >
              ← View All 10 Concerns
            </button>
          </div>
        </div>
      ) : (
        /* ALL 10 CONCERNS GRID */
        <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {concernsData.map((concern) => (
              <div
                key={concern.id}
                id={`concern-card-${concern.slug}`}
                onClick={() => {
                  setSelectedConcernSlug(concern.slug);
                  window.history.pushState(null, '', `/concerns/${concern.slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top badge & icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center">
                      {getConcernIcon(concern.iconName)}
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {concern.badge}
                    </span>
                  </div>

                  {/* Title & shortDesc */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-extrabold text-[#191919] group-hover:text-[#ef3479] transition-colors">
                      {concern.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {concern.shortDesc}
                    </p>
                  </div>

                  {/* Symptoms sample */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 block">Top symptoms:</span>
                    {concern.commonSymptoms.slice(0, 2).map((sym, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <span className="line-clamp-1">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#ef3479]">
                  <span>VIEW PROVEN SOLUTION</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BOTTOM ASSISTANCE CTA */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 pt-8">
        <div className="bg-[#141820] text-white rounded-[36px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff761c]">
              Not Sure Which Concern Applies?
            </span>
            <h3 className="text-2xl font-extrabold">
              Book a Free On-Site Inspection in Alwar
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Our technical consultant visits your location with digital dampness meters, checks slab slopes, and provides an itemized bill of quantities without obligation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry('Free On-Site Inspection Request')}
              className="btn-primary text-xs tracking-wider uppercase py-3.5 px-6 whitespace-nowrap"
            >
              Request Free Inspection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
