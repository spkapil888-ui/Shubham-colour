import React, { useState, useMemo } from 'react';
import { X, Calculator, ArrowRight, MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

interface PaintCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaintCalculatorModal: React.FC<PaintCalculatorModalProps> = ({
  isOpen,
  onClose
}) => {
  const [projectType, setProjectType] = useState<'interior' | 'exterior' | 'waterproofing' | 'wood'>('interior');
  const [wallArea, setWallArea] = useState<number>(1200);
  const [surfaceType, setSurfaceType] = useState<'fresh' | 'repaint'>('repaint');
  const [paintTier, setPaintTier] = useState<'luxury' | 'premium' | 'economy'>('luxury');
  const [coats] = useState<number>(2);

  const handlePreset = (area: number) => {
    setWallArea(area);
  };

  const calculation = useMemo(() => {
    let topcoatCoverage = 130;
    if (projectType === 'exterior') topcoatCoverage = 60;
    if (projectType === 'waterproofing') topcoatCoverage = 25;
    if (projectType === 'wood') topcoatCoverage = 85;

    const paintLiters = Math.ceil((wallArea * coats) / (topcoatCoverage * (coats / 2)));
    const primerLiters = surfaceType === 'fresh' ? Math.ceil(wallArea / 110) : Math.ceil(wallArea / 140);
    const puttyKg = surfaceType === 'fresh' ? Math.ceil(wallArea / 14) : Math.ceil(wallArea / 40);

    let pricePerLiter = 450;
    if (paintTier === 'luxury') pricePerLiter = projectType === 'interior' ? 520 : 480;
    if (paintTier === 'premium') pricePerLiter = projectType === 'interior' ? 340 : 320;
    if (paintTier === 'economy') pricePerLiter = projectType === 'interior' ? 180 : 160;

    const materialCost = (paintLiters * pricePerLiter) + (primerLiters * 160) + (puttyKg * 28);
    const minEstimated = Math.round(materialCost * 0.95);
    const maxEstimated = Math.round(materialCost * 1.15);

    return {
      paintLiters,
      primerLiters,
      puttyKg,
      minEstimated,
      maxEstimated
    };
  }, [wallArea, coats, surfaceType, paintTier, projectType]);

  const handleSendWhatsApp = () => {
    const message = `Hello Shubham Colour House! I calculated my paint estimate on your website:%0A%0A` +
      `• Project: ${projectType.toUpperCase()}%0A` +
      `• Wall Area: ${wallArea} sq.ft%0A` +
      `• Surface Condition: ${surfaceType === 'fresh' ? 'Fresh Plaster' : 'Repainting'}%0A` +
      `• Quality Tier: ${paintTier.toUpperCase()}%0A` +
      `• Est. Topcoat Paint: ~${calculation.paintLiters} Liters%0A` +
      `• Est. Primer: ~${calculation.primerLiters} Liters%0A` +
      `• Est. Wall Putty: ~${calculation.puttyKg} Kg%0A` +
      `• Est. Material Budget: ₹${calculation.minEstimated.toLocaleString()} - ₹${calculation.maxEstimated.toLocaleString()}%0A%0A` +
      `Please provide dealer quotation and brand options. Thank you!`;
    
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-[36px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f8f8f8] text-[#ef3479] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#191919]">
                Paint & Material Calculator
              </h2>
              <p className="text-xs text-[#777777]">
                Instant material estimate for homes and commercial buildings
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Project Type Tabs */}
          <div>
            <label className="sch-label">
              1. Select Project Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'interior', label: 'Interior Walls' },
                { id: 'exterior', label: 'Exterior Facade' },
                { id: 'waterproofing', label: 'Waterproofing' },
                { id: 'wood', label: 'Wood Polish' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectType(tab.id as any)}
                  className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all border ${
                    projectType === tab.id
                      ? 'bg-[#191919] text-white border-[#191919] shadow-sm'
                      : 'bg-[#f8f8f8] text-[#777777] border-slate-200 hover:text-[#191919]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Area Input & Presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="sch-label">
                2. Approximate Wall / Surface Area
              </label>
              <span className="text-xs font-extrabold text-[#ef3479] bg-pink-50 px-3 py-1 rounded-full">
                {wallArea.toLocaleString()} sq.ft
              </span>
            </div>

            <input
              type="range"
              min="100"
              max="8000"
              step="50"
              value={wallArea}
              onChange={(e) => setWallArea(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ef3479]"
            />

            {/* Quick BHK presets */}
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="text-xs text-[#a1a1a1]">Presets:</span>
              {[
                { label: '1 Room (350 sqft)', val: 350 },
                { label: '1 BHK (850 sqft)', val: 850 },
                { label: '2 BHK (1,400 sqft)', val: 1400 },
                { label: '3 BHK (2,200 sqft)', val: 2200 },
                { label: '4 BHK Villa (3,600 sqft)', val: 3600 }
              ].map((p) => (
                <button
                  key={p.label}
                  onClick={() => handlePreset(p.val)}
                  className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${
                    wallArea === p.val
                      ? 'bg-[#191919] text-white border-[#191919]'
                      : 'bg-white text-[#777777] border-slate-200 hover:border-[#191919]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Surface Condition & Tier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="sch-label">
                3. Surface Condition
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSurfaceType('repaint')}
                  className={`py-2.5 px-3 rounded-2xl text-xs font-bold border transition-all ${
                    surfaceType === 'repaint'
                      ? 'bg-[#191919] text-white border-[#191919]'
                      : 'bg-[#f8f8f8] text-[#777777] border-slate-200'
                  }`}
                >
                  Repainting
                </button>
                <button
                  onClick={() => setSurfaceType('fresh')}
                  className={`py-2.5 px-3 rounded-2xl text-xs font-bold border transition-all ${
                    surfaceType === 'fresh'
                      ? 'bg-[#191919] text-white border-[#191919]'
                      : 'bg-[#f8f8f8] text-[#777777] border-slate-200'
                  }`}
                >
                  Fresh Plaster
                </button>
              </div>
            </div>

            <div>
              <label className="sch-label">
                4. Quality Tier
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'luxury', label: 'Luxury' },
                  { id: 'premium', label: 'Premium' },
                  { id: 'economy', label: 'Economy' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setPaintTier(tier.id as any)}
                    className={`py-2.5 px-2 rounded-2xl text-xs font-bold border transition-all text-center ${
                      paintTier === tier.id
                        ? 'bg-[#ef3479] text-white border-[#ef3479] shadow-sm'
                        : 'bg-[#f8f8f8] text-[#777777] border-slate-200'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ESTIMATE RESULTS DISPLAY */}
          <div className="p-6 rounded-[28px] bg-[#080808] text-white space-y-5 border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#a1a1a1]">
                Recommended Quantity Breakdown
              </span>
              <span className="text-xs text-[#ef3479] font-bold">
                {coats} Coats System
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#171717] p-4 rounded-2xl border border-white/5">
                <div className="text-2xl font-extrabold text-[#27a9ef]">
                  ~{calculation.paintLiters}
                </div>
                <div className="text-xs text-white font-bold mt-0.5">
                  Liters Paint
                </div>
                <div className="text-[10px] text-[#777777]">
                  {paintTier === 'luxury' ? 'Royale / Silk' : 'Emulsion'}
                </div>
              </div>

              <div className="bg-[#171717] p-4 rounded-2xl border border-white/5">
                <div className="text-2xl font-extrabold text-[#ff761c]">
                  ~{calculation.primerLiters}
                </div>
                <div className="text-xs text-white font-bold mt-0.5">
                  Liters Primer
                </div>
                <div className="text-[10px] text-[#777777]">
                  Base Coat
                </div>
              </div>

              <div className="bg-[#171717] p-4 rounded-2xl border border-white/5">
                <div className="text-2xl font-extrabold text-emerald-400">
                  ~{calculation.puttyKg}
                </div>
                <div className="text-xs text-white font-bold mt-0.5">
                  Kg Putty
                </div>
                <div className="text-[10px] text-[#777777]">
                  Wall Leveler
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-2 text-center sm:text-left">
              <div>
                <span className="text-xs text-[#a1a1a1]">Estimated Material Cost:</span>
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  ₹{calculation.minEstimated.toLocaleString()} – ₹{calculation.maxEstimated.toLocaleString()}
                </div>
              </div>
              <div className="text-[11px] text-[#777777] max-w-xs">
                *Subject to wall porosity. Free on-site laser confirmation in Alwar.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="btn-secondary py-3 px-6 text-xs w-full sm:w-auto"
          >
            CLOSE
          </button>

          <button
            onClick={handleSendWhatsApp}
            className="btn-primary py-3.5 px-7 text-xs tracking-[0.16em] w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>SEND TO WHATSAPP</span>
          </button>
        </div>
      </div>
    </div>
  );
};
