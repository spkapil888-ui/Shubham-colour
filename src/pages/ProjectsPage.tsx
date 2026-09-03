import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  MessageCircle 
} from 'lucide-react';
import { galleryData } from '../data/galleryData';
import { companyData } from '../data/companyData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ProjectItem } from '../types';

interface ProjectsPageProps {
  onOpenEnquiry: (note?: string) => void;
  onOpenCalculator: () => void;
  onNavigate: (tab: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenEnquiry,
  onOpenCalculator,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Interiors', 'Exteriors', 'Wood Finishes', 'Waterproofing', 'Commercial'];

  const filteredProjects = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-4 space-y-12 pb-20">
      {/* 1. HERO SECTION */}
      <div className="bg-white rounded-[40px] sm:rounded-[60px] p-8 sm:p-14 lg:p-20 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-slate-100/80">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            17,000+ Completed Transformations
          </span>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold text-[#191919] leading-[1.02] tracking-tight">
            Real Transformations Across <br />
            <span className="gradient-text">Alwar & Rajasthan.</span>
          </h1>
          <p className="text-[#777777] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our curated portfolio of residential bungalows, luxury interior suites, heritage wood restorations, and commercial facades executed with genuine paints & chemicals from Shubham Colour House.
          </p>

          {/* Interactive filter tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#191919] text-white border-[#191919] shadow-sm'
                    : 'bg-[#f8f8f8] text-[#777777] border-transparent hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. PROJECTS SHOWCASE GRID WITH BEFORE/AFTER */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
              Featured Case Studies ({filteredProjects.length})
            </h2>
            <p className="text-xs sm:text-sm text-[#777777] mt-1">
              Drag the interactive sliders to inspect the before-and-after surface quality.
            </p>
          </div>

          <button
            onClick={onOpenCalculator}
            className="btn-secondary text-xs tracking-[0.12em] hidden sm:flex items-center gap-2 py-3 px-6"
          >
            <Sparkles className="w-4 h-4 text-[#ef3479]" />
            <span>CALCULATE MATERIALS</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="sch-white-card p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              {/* Media Section */}
              <div className="pb-4">
                {proj.beforeImage ? (
                  <BeforeAfterSlider
                    beforeImage={proj.beforeImage}
                    afterImage={proj.afterImage}
                    beforeLabel="Before"
                    afterLabel="After Shubham"
                    className="h-64 sm:h-80 shadow-inner rounded-[24px]"
                  />
                ) : (
                  <div className="relative h-64 sm:h-80 rounded-[24px] overflow-hidden shadow-inner bg-[#f8f8f8]">
                    <img
                      src={proj.afterImage}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold">
                      Completed Project
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#777777]">
                  <span className="px-3 py-1 rounded-full bg-pink-50 text-[#ef3479] font-bold border border-pink-200">
                    {proj.category}
                  </span>
                  <div className="flex items-center gap-3 font-semibold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#a1a1a1]" />
                      {proj.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#a1a1a1]" />
                      {proj.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#191919]">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                  {proj.description}
                </p>

                {/* Products & Brands Used */}
                <div className="pt-3 border-t border-[#f0f0f0] space-y-1.5">
                  <div className="text-[11px] text-[#777777]">
                    <span className="font-extrabold text-[#191919]">Products Deployed: </span>
                    {proj.productsUsed.join(', ')}
                  </div>
                  <div className="text-[11px] text-[#777777]">
                    <span className="font-extrabold text-[#191919]">Brands Involved: </span>
                    {proj.brandsUsed.join(' • ')}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenEnquiry(`Regarding project style: ${proj.title} in ${proj.location}`)}
                    className="btn-primary text-xs tracking-[0.14em] flex-1 py-3"
                  >
                    <span>GET SIMILAR FINISH</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${companyData.whatsappNumber}?text=Hello%20Shubham%20Colour%20House,%20I%20love%20the%20${encodeURIComponent(proj.title)}%20project%20in%20${encodeURIComponent(proj.location)}.%20Please%20guide%20me.`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                    title="Ask on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SUBMIT YOUR PROJECT BANNER */}
      <section>
        <div className="sch-white-card p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="px-3.5 py-1 rounded-full bg-pink-50 text-[#ef3479] text-xs font-bold uppercase tracking-wider border border-pink-200 inline-block">
              For Contractors & Architects
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191919]">
              Have Your Work Featured in Our Gallery
            </h3>
            <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
              Are you a master painter, architect, or interior contractor using Shubham Colour House materials? Share your finished site photos to get featured across our showroom displays and digital media.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              href={`https://wa.me/${companyData.whatsappNumber}?text=Hello%20Shubham%20Colour%20House,%20I%20am%20a%20contractor/architect%20and%20would%20like%20to%20submit%20project%20photos.`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs tracking-[0.14em]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>SUBMIT VIA WHATSAPP</span>
            </a>

            <button
              onClick={() => onNavigate('services')}
              className="btn-secondary text-xs tracking-[0.12em]"
            >
              EXPLORE SERVICES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
