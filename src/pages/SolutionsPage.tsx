import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  MessageCircle
} from 'lucide-react';
import { solutionsData } from '../data/solutionsData';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/productsData';
import { companyData } from '../data/companyData';
import { SurfaceId, Product } from '../types';

interface SolutionsPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (subject?: string) => void;
}

const surfaceLabels: Record<SurfaceId, string> = {
  walls: 'Interior Walls',
  'exterior-walls': 'Exterior Facades',
  concrete: 'Roofs & Concrete',
  wood: 'Wood & Veneers',
  furniture: 'Furniture & PU',
  tiles: 'Tiles & Bathrooms',
  metal: 'Metal & Grills',
  automotive: 'Automotive Finishes'
};

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onSelectProduct,
  onOpenEnquiry
}) => {
  const [activeSurface, setActiveSurface] = useState<SurfaceId>('walls');

  const currentSolution = solutionsData.find((s) => s.surfaceId === activeSurface) || solutionsData[0];
  const surfaceName = surfaceLabels[currentSolution.surfaceId] || currentSolution.title;

  const matchingProducts = productsData.filter((p) => 
    p.surfaceIds.includes(currentSolution.surfaceId) || 
    currentSolution.suitableCategories.includes(p.categoryId)
  ).slice(0, 6);

  return (
    <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-4 space-y-10 pb-20">
      {/* HEADER */}
      <div className="bg-white rounded-[40px] sm:rounded-[60px] p-8 sm:p-14 lg:p-20 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-slate-100/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Technical Coating Systems
          </span>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold text-[#191919] leading-[1.02] tracking-tight">
            Surface <span className="gradient-text">Solutions Guide.</span>
          </h1>
          <p className="text-[#777777] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Diagnose common masonry, timber, concrete, and tile challenges in Rajasthan’s climate and apply engineered chemical systems that guarantee lasting durability.
          </p>
        </div>
      </div>

      {/* SURFACE SELECTOR TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {solutionsData.map((sol) => {
          const isActive = activeSurface === sol.surfaceId;
          const label = surfaceLabels[sol.surfaceId] || sol.title;
          return (
            <button
              key={sol.surfaceId}
              onClick={() => setActiveSurface(sol.surfaceId)}
              className={`px-5 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-[#191919] text-white border-[#191919] shadow-sm'
                  : 'bg-white text-[#777777] border-slate-200 hover:border-slate-300'
              }`}
            >
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE SOLUTION DETAILED BREAKDOWN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-6">
          {/* Solution Header */}
          <div className="sch-white-card p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#ef3479]">
              <Layers className="w-4 h-4" />
              Engineered Coating Strategy
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
              {currentSolution.tagline}
            </h2>

            <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
              {currentSolution.description}
            </p>
          </div>

          {/* Common Problems */}
          <div className="bg-amber-50/70 border border-amber-200/80 p-8 rounded-[32px] space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-950 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Common Issues We Solve on {surfaceName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentSolution.commonProblems.map((prob, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-amber-950">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0"></span>
                  <span className="font-bold">{prob}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="sch-white-card p-8 space-y-6">
            <h3 className="text-xl font-extrabold text-[#191919] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Complete {currentSolution.recommendedSteps.length}-Stage Application Workflow
            </h3>

            <div className="space-y-4">
              {currentSolution.recommendedSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-[24px] bg-[#f8f8f8] border border-slate-100 flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#191919] text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-extrabold text-sm text-[#191919]">
                        {step.title}
                      </h4>
                      <span className="text-[11px] font-bold text-[#ef3479] bg-pink-50 px-3 py-0.5 rounded-full border border-pink-200">
                        {step.productRecommended}
                      </span>
                    </div>
                    <p className="text-xs text-[#777777] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Free Assessment */}
        <div className="lg:col-span-4 space-y-6 sticky top-24">
          <div className="sch-white-card p-8 space-y-4">
            <span className="text-xs font-bold text-[#ef3479] uppercase tracking-wider block">
              Free Site Assessment in Alwar
            </span>
            <h3 className="text-xl font-extrabold text-[#191919]">
              Not sure which chemical primer or topcoat is best?
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed">
              We conduct digital pin-type moisture testing for severe dampness and salinity issues across Alwar district.
            </p>

            <div className="pt-2 space-y-3">
              <a
                href={`https://wa.me/${companyData.whatsappNumber}?text=Hello%20Shubham%20Colour%20House,%20I%20need%20a%20solution%20for%20my%20${encodeURIComponent(surfaceName)}.`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs tracking-[0.14em] w-full"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ASK SPECIALIST ON WHATSAPP</span>
              </a>

              <button
                onClick={() => onOpenEnquiry(surfaceName)}
                className="btn-secondary text-xs tracking-[0.12em] w-full"
              >
                <Sparkles className="w-4 h-4 text-[#ef3479]" />
                <span>BOOK MOISTURE INSPECTION</span>
              </button>
            </div>
          </div>

          <div className="p-6 rounded-[28px] bg-white border border-slate-200/80 text-xs text-[#777777] space-y-2">
            <h4 className="font-bold text-[#191919]">
              Certified Genuine Products
            </h4>
            <p>
              All waterproofing resins, bonding chemicals, and luxury finishes sold at Shubham Colour House carry genuine batch codes and manufacturer warranties.
            </p>
          </div>
        </div>
      </div>

      {/* RECOMMENDED PRODUCTS FOR THIS SURFACE */}
      <div className="space-y-6 pt-6 border-t border-[#f0f0f0]">
        <div>
          <h3 className="text-2xl font-extrabold text-[#191919]">
            Recommended Products for {surfaceName}
          </h3>
          <p className="text-xs text-[#777777] mt-0.5">
            Engineered formulations for maximum bond strength and visual perfection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchingProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={(p) => onSelectProduct(p)}
              onQuickQuote={() => onOpenEnquiry(prod.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
