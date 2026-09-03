import React, { useState } from 'react';
import { 
  Eye, 
  MessageCircle, 
  Check, 
  AlertCircle
} from 'lucide-react';
import { colorSwatchesData, colorPalettesData } from '../data/colorsData';
import { companyData } from '../data/companyData';
import { ColorSwatch } from '../types';

export const ColourInspirationPage: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<'all' | 'warm' | 'cool' | 'neutral' | 'bold' | 'earthy'>('all');
  const [activeSwatch, setActiveSwatch] = useState<ColorSwatch>(colorSwatchesData[0]);
  const [roomType, setRoomType] = useState<'living' | 'bedroom' | 'exterior' | 'dining'>('living');
  const [lightingCondition, setLightingCondition] = useState<'daylight' | 'warm' | 'cool'>('daylight');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredSwatches = selectedFamily === 'all'
    ? colorSwatchesData
    : colorSwatchesData.filter((s) => s.family === selectedFamily);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleWhatsAppOrder = (swatch: ColorSwatch) => {
    const text = `Hello Shubham Colour House! I want to tint and order this colour shade:%0A%0A` +
      `• Shade Name: *${swatch.name}*%0A` +
      `• Shade Code: *${swatch.code}*%0A` +
      `• Hex Equivalent: ${swatch.hex}%0A` +
      `• Category: Royale / Luxury Emulsion%0A%0A` +
      `Please provide pack sizes and computerized tinting price. Thank you!`;
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
  };

  const getLightingFilter = () => {
    if (lightingCondition === 'warm') return 'brightness(95%) sepia(20%) hue-rotate(-10deg)';
    if (lightingCondition === 'cool') return 'brightness(102%) saturate(95%) hue-rotate(10deg)';
    return 'none';
  };

  const roomImages = {
    living: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    bedroom: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    exterior: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    dining: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80'
  };

  return (
    <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-4 space-y-12 pb-20">
      {/* HEADER BANNER */}
      <div className="bg-white rounded-[40px] sm:rounded-[60px] p-8 sm:p-14 lg:p-20 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-slate-100/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Digital Colour Studio & Visualizer
          </span>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold text-[#191919] leading-[1.02] tracking-tight">
            Find Your <span className="gradient-text">Signature Shade.</span>
          </h1>
          <p className="text-[#777777] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Experiment with curated architectural hues, understand light reflection, and discover harmonious colour pairings. Visit our Alwar showroom to experience physical fan decks and velvet drawdown cards.
          </p>
        </div>
      </div>

      {/* INTERACTIVE ROOM VISUALIZER */}
      <div className="bg-[#080808] text-white rounded-[40px] sm:rounded-[48px] p-6 sm:p-12 shadow-2xl border border-white/10 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#ef3479]">
              <Eye className="w-4 h-4" />
              Live Room Visualizer
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Preview <span style={{ color: activeSwatch.hex }} className="underline decoration-wavy decoration-[#ef3479]">{activeSwatch.name}</span> in Real Spaces
            </h2>
          </div>

          {/* Room Type Selector */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-[#a1a1a1] font-bold mr-1">Room:</span>
            {[
              { id: 'living', label: 'Living Room' },
              { id: 'bedroom', label: 'Master Bedroom' },
              { id: 'dining', label: 'Dining Space' },
              { id: 'exterior', label: 'Modern Villa' }
            ].map((room) => (
              <button
                key={room.id}
                onClick={() => setRoomType(room.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  roomType === room.id
                    ? 'bg-[#ef3479] text-white border-[#ef3479] shadow-sm'
                    : 'bg-[#171717] text-[#bbb] border-white/10 hover:bg-[#222]'
                }`}
              >
                {room.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visualizer Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Stage */}
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-black">
            <img
              src={roomImages[roomType]}
              alt={roomType}
              style={{ filter: getLightingFilter() }}
              className="w-full h-full object-cover transition-all duration-700"
            />

            {/* Smart Blend Tint Overlay */}
            <div
              className="absolute inset-0 transition-all duration-500 pointer-events-none mix-blend-multiply opacity-40"
              style={{ backgroundColor: activeSwatch.hex }}
            ></div>

            {/* Accent Glow */}
            <div
              className="absolute inset-0 transition-all duration-500 pointer-events-none mix-blend-color-burn opacity-25"
              style={{ backgroundColor: activeSwatch.hex }}
            ></div>

            {/* Top Lighting Controls */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-full border border-white/10">
              <span className="text-[10px] text-[#a1a1a1] font-bold px-2">LIGHT:</span>
              <button
                onClick={() => setLightingCondition('daylight')}
                className={`px-3 py-1 rounded-full text-[10px] font-extrabold transition-colors ${
                  lightingCondition === 'daylight' ? 'bg-white text-black shadow' : 'text-[#bbb] hover:text-white'
                }`}
              >
                Daylight (5000K)
              </button>
              <button
                onClick={() => setLightingCondition('warm')}
                className={`px-3 py-1 rounded-full text-[10px] font-extrabold transition-colors ${
                  lightingCondition === 'warm' ? 'bg-[#ff761c] text-white shadow' : 'text-[#bbb] hover:text-white'
                }`}
              >
                Warm (2700K)
              </button>
              <button
                onClick={() => setLightingCondition('cool')}
                className={`px-3 py-1 rounded-full text-[10px] font-extrabold transition-colors ${
                  lightingCondition === 'cool' ? 'bg-[#27a9ef] text-white shadow' : 'text-[#bbb] hover:text-white'
                }`}
              >
                Cool (4000K)
              </button>
            </div>

            {/* Bottom Swatch Badge */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl border border-white/30 shadow-inner"
                  style={{ backgroundColor: activeSwatch.hex }}
                ></div>
                <div>
                  <div className="text-sm font-extrabold text-white">
                    {activeSwatch.name}
                  </div>
                  <div className="text-[11px] text-[#a1a1a1]">
                    Code: {activeSwatch.code} • Family: {activeSwatch.family.toUpperCase()}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleWhatsAppOrder(activeSwatch)}
                className="btn-primary text-xs tracking-[0.12em] py-2.5 px-5"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">ORDER SHADE</span>
              </button>
            </div>
          </div>

          {/* Right Palette */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-[#171717] p-6 rounded-[28px] border border-white/5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#a1a1a1]">
                Selected Shade
              </span>
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl border-2 border-white/20 shadow-md"
                  style={{ backgroundColor: activeSwatch.hex }}
                ></div>
                <div>
                  <h3 className="font-extrabold text-xl text-white">
                    {activeSwatch.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-[#bbb] font-mono bg-black px-2 py-0.5 rounded">
                      {activeSwatch.code}
                    </span>
                    <button
                      onClick={() => handleCopy(activeSwatch.code)}
                      className="text-[11px] text-[#27a9ef] hover:underline font-bold"
                    >
                      {copiedCode === activeSwatch.code ? 'Copied!' : 'Copy Code'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#bbb] space-y-2 pt-3 border-t border-white/10">
                <div className="flex justify-between">
                  <span className="text-[#777]">LRV (Reflectance):</span>
                  <span className="font-bold text-white">~62% (Moderate High)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777]">Recommended Sheen:</span>
                  <span className="font-bold text-white">Soft Sheen / Matt Royale</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777]">Coats Needed:</span>
                  <span className="font-bold text-white">2 Coats with Primer</span>
                </div>
              </div>
            </div>

            {/* Quick Swatch Selector */}
            <div>
              <span className="sch-label text-white/70">
                Click to Test Popular Shades
              </span>
              <div className="grid grid-cols-4 gap-2">
                {colorSwatchesData.slice(0, 8).map((swatch) => (
                  <button
                    key={swatch.id}
                    onClick={() => setActiveSwatch(swatch)}
                    className={`h-12 rounded-2xl transition-all border relative flex items-center justify-center ${
                      activeSwatch.id === swatch.id
                        ? 'ring-2 ring-[#ef3479] scale-105 border-white shadow-lg'
                        : 'border-white/10 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: swatch.hex }}
                    title={`${swatch.name} (${swatch.code})`}
                  >
                    {activeSwatch.id === swatch.id && (
                      <Check className="w-4 h-4 text-white drop-shadow-md" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleWhatsAppOrder(activeSwatch)}
              className="btn-primary text-xs tracking-[0.14em] w-full py-4"
            >
              <MessageCircle className="w-4 h-4" />
              <span>SEND SHADE CODE TO WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>

      {/* CURATED COLOR PALETTES */}
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Harmonious Colour Combinations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191919]">
            Architectural Colour <span className="gradient-text">Palettes.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {colorPalettesData.map((pal) => (
            <div
              key={pal.id}
              className="sch-white-card p-8 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-extrabold text-[#191919]">
                    {pal.name}
                  </h3>
                  <span className="text-[11px] font-bold text-[#ef3479] bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
                    {pal.mood}
                  </span>
                </div>
                <p className="text-xs text-[#777777] leading-relaxed mb-4">
                  {pal.description}
                </p>

                {/* Color swatches strip */}
                <div className="grid grid-cols-3 gap-2">
                  {pal.colors.map((c) => (
                    <div
                      key={c.name}
                      onClick={() => {
                        const matched = colorSwatchesData.find(s => s.name === c.name);
                        if (matched) {
                          setActiveSwatch(matched);
                          window.scrollTo({ top: 400, behavior: 'smooth' });
                        }
                      }}
                      className="group p-3 rounded-2xl bg-[#f8f8f8] border border-slate-200/60 hover:border-[#ef3479] transition-all cursor-pointer"
                    >
                      <div
                        className="h-12 rounded-xl border border-slate-200/60 shadow-inner group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: c.hex }}
                      ></div>
                      <div className="mt-2 text-center">
                        <div className="text-[11px] font-bold text-[#191919] line-clamp-1">
                          {c.name}
                        </div>
                        <div className="text-[10px] text-[#777777] font-mono">
                          {c.code}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs">
                <span className="text-[#777777] font-medium">
                  Ideal for: {pal.suitableFor}
                </span>
                <button
                  onClick={() => {
                    const text = `Hello Shubham Colour House! I love the *${pal.name}* colour palette (${pal.colors.map(c => c.name).join(', ')}). Please provide price for 2 BHK.`;
                    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
                  }}
                  className="font-extrabold text-[#ef3479] hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire Palette</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="p-6 rounded-[28px] bg-amber-50/70 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-extrabold uppercase tracking-wider text-amber-950">
            Digital Colour Representation Notice
          </div>
          <p className="leading-relaxed text-[#777]">
            Due to differences in computer monitors, smartphone displays, screen brightness, and ambient lighting, digital representations of colors cannot be guaranteed as 100% exact matches to tinted paint cans. We strongly advise visiting our physical showroom at Scheme No. 2, Alwar to view official printed shade cards or applying a test patch on your wall before final purchase.
          </p>
        </div>
      </div>
    </div>
  );
};
