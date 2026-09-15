import React from 'react';
import { 
  ChevronRight, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  Share2, 
  BookOpen,
  Calculator,
  Phone,
  MessageCircle,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { blogsData, BlogPost } from '../data/blogsData';
import { companyData } from '../data/companyData';
import { CategoryId } from '../types';

interface BlogDetailPageProps {
  slug: string;
  onSelectBlog: (slug: string) => void;
  onSelectCategory?: (categoryId: CategoryId) => void;
  onSelectBrand?: (brandSlug: string) => void;
  onOpenEnquiry: (note?: string) => void;
  onOpenCalculator: () => void;
  onNavigate: (tab: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  slug,
  onSelectBlog,
  onSelectCategory,
  onSelectBrand,
  onOpenEnquiry,
  onOpenCalculator,
  onNavigate
}) => {
  const currentBlog = blogsData.find((b) => b.slug === slug) || blogsData[0];
  const relatedBlogs = blogsData.filter((b) => currentBlog.relatedBlogSlugs.includes(b.slug) && b.slug !== currentBlog.slug);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentBlog.title,
        text: currentBlog.metaDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen pb-24">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200/80 py-3 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-xs font-medium text-slate-500 overflow-x-auto whitespace-nowrap">
          <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <button onClick={() => onNavigate('blogs')} className="hover:text-black transition-colors">Blogs</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span className="text-black font-semibold truncate">{currentBlog.title}</span>
        </div>
      </div>

      {/* ARTICLE HEADER HERO */}
      <header className="bg-white border-b border-slate-100 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-black text-white font-bold uppercase tracking-wider">
              {currentBlog.category}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3.5 h-3.5" /> {currentBlog.readTime}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3.5 h-3.5" /> {currentBlog.publishDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191919] leading-[1.15] tracking-tight">
            {currentBlog.title}
          </h1>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#ef3479]" />
              <span>Written by <strong className="text-slate-800">{currentBlog.author}</strong></span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 py-1 px-3 rounded-full hover:bg-slate-100 text-slate-700 transition-colors font-semibold"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN ARTICLE BODY & SIDEBAR */}
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* ARTICLE CONTENT */}
          <article className="lg:col-span-8 bg-white rounded-[36px] p-6 sm:p-12 border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-8">
            
            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100 border border-slate-200">
              <img
                src={currentBlog.featuredImage}
                alt={currentBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Intro Lead */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed bg-slate-50 p-6 rounded-2xl border-l-4 border-[#ef3479]">
              {currentBlog.content.intro}
            </p>

            {/* Content Sections */}
            <div className="space-y-10">
              {currentBlog.content.sections.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] tracking-tight">
                    {section.heading}
                  </h2>

                  {section.subheading && (
                    <h3 className="text-lg font-bold text-slate-700">
                      {section.subheading}
                    </h3>
                  )}

                  {section.body.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Bullet points */}
                  {section.bulletPoints && (
                    <ul className="space-y-2.5 pt-2 pl-2">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Table (if any) */}
                  {section.table && (
                    <div className="pt-2 overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                        <thead className="bg-slate-900 text-white font-bold text-xs uppercase tracking-wider">
                          <tr>
                            {section.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="py-3 px-4 border-b border-slate-800">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={`py-3 px-4 text-slate-700 ${cIdx === 0 ? 'font-semibold' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Callout box */}
                  {section.callout && (
                    <div className={`p-5 rounded-2xl text-xs sm:text-sm leading-relaxed flex items-start gap-3 ${
                      section.callout.type === 'tip'
                        ? 'bg-blue-50 text-blue-950 border border-blue-200'
                        : section.callout.type === 'warning'
                        ? 'bg-rose-50 text-rose-950 border border-rose-200'
                        : 'bg-emerald-50 text-emerald-950 border border-emerald-200'
                    }`}>
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>{section.callout.text}</div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Article FAQs */}
            {currentBlog.content.faqs && currentBlog.content.faqs.length > 0 && (
              <div className="pt-8 border-t border-slate-200 space-y-6">
                <h3 className="text-2xl font-extrabold text-[#191919]">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {currentBlog.content.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
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

            {/* Article Tags & Internal Linking */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-slate-400 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> Related Tags:
              </span>
              {currentBlog.keywords.map((kw, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                  #{kw}
                </span>
              ))}
            </div>

            {/* Direct Consultation CTA box inside article */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0">
              <div className="space-y-1">
                <h4 className="text-xl font-bold">Have Questions About Your Painting Project?</h4>
                <p className="text-xs text-slate-400">Speak directly with our technical coatings team in Alwar.</p>
              </div>
              <button
                onClick={() => onOpenEnquiry(`Question arising from reading: ${currentBlog.title}`)}
                className="btn-primary text-xs py-3.5 px-6 uppercase tracking-wider"
              >
                Get Expert Advice
              </button>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Quick Paint Calculator Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-[#191919]">Paint Quantity Calculator</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Estimate exact liters of paint, primer, and putty required for your rooms with our interactive tool.
              </p>
              <button
                onClick={onOpenCalculator}
                className="btn-primary w-full py-3 text-xs uppercase tracking-wider font-bold"
              >
                Launch Paint Calculator
              </button>
            </div>

            {/* Related Service Link */}
            {currentBlog.relatedServiceSlug && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-extrabold text-[#191919]">Need Execution Services in Alwar?</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We provide certified master painters and chemical waterproofing applicators across Alwar city.
                </p>
                <button
                  onClick={() => onNavigate(currentBlog.relatedServiceSlug!)}
                  className="w-full py-3 px-4 rounded-full border border-black text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                >
                  View Services & Book Site Visit
                </button>
              </div>
            )}

            {/* Related Product Category */}
            {currentBlog.relatedProductCategory && onSelectCategory && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
                <span className="text-[11px] font-bold uppercase text-[#ef3479]">Featured Category</span>
                <h4 className="text-base font-extrabold text-[#191919] capitalize">
                  {currentBlog.relatedProductCategory.replace(/-/g, ' ')}
                </h4>
                <p className="text-xs text-slate-500">
                  Browse products, pack sizes, and computerized tinting shades available in Alwar.
                </p>
                <button
                  onClick={() => onSelectCategory(currentBlog.relatedProductCategory as CategoryId)}
                  className="text-xs font-bold text-black hover:text-[#ef3479] flex items-center gap-1 pt-1"
                >
                  <span>Explore Category Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
                <h4 className="text-base font-extrabold text-[#191919] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#ef3479]" />
                  <span>Related Articles</span>
                </h4>
                <div className="space-y-3">
                  {relatedBlogs.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onSelectBlog(rel.slug)}
                      className="p-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition-colors space-y-1 group"
                    >
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{rel.category}</span>
                      <h5 className="text-xs font-bold text-slate-800 group-hover:text-[#ef3479] transition-colors line-clamp-2">
                        {rel.title}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};
