import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Unfinished Surface',
  afterLabel = 'Finished Luxury Interior',
  title,
  subtitle,
  className = ''
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div className={`w-full ${className}`}>
      {(title || subtitle) && (
        <div className="mb-4 text-center sm:text-left">
          {title && (
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#191919] flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#ef3479]" />
              {title}
            </h3>
          )}
          {subtitle && <p className="text-sm text-[#777777] mt-1">{subtitle}</p>}
        </div>
      )}

      <div
        ref={containerRef}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[540px] rounded-[28px] overflow-hidden shadow-2xl select-none cursor-ew-resize border border-slate-200/80 group"
      >
        {/* AFTER IMAGE */}
        <img
          src={afterImage}
          alt="Transformed Space - Shubham Colour House"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* AFTER LABEL BADGE */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide bg-black/80 backdrop-blur-md text-white border border-white/20 shadow-lg flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {afterLabel}
          </span>
        </div>

        {/* BEFORE IMAGE */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={beforeImage}
            alt="Before Transformation"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              maxWidth: 'none'
            }}
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

          {/* BEFORE LABEL BADGE */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide bg-black/80 backdrop-blur-md text-white border border-white/20 shadow-lg">
              {beforeLabel}
            </span>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER */}
        <div
          className="absolute top-0 bottom-0 z-20"
          style={{ left: `${sliderPos}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"></div>

          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#191919] shadow-2xl flex items-center justify-center border-2 border-[#ef3479] transition-transform group-hover:scale-110 active:scale-95 cursor-grab active:cursor-grabbing">
            <ChevronsLeftRight className="w-5 h-5 text-[#ef3479]" />
          </div>
        </div>

        {/* Helper bottom hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/60 backdrop-blur-sm text-white shadow">
            Drag slider left or right to compare
          </span>
        </div>
      </div>
    </div>
  );
};
