import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Sparkles, 
  Search, 
  Tag, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { blogsData, BlogPost } from '../data/blogsData';

interface BlogsPageProps {
  onSelectBlog: (slug: string) => void;
  onNavigate: (tab: string) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({
  onSelectBlog,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Costing & Estimates',
    'Climate & Wall Protection',
    'Waterproofing & Repairs',
    'Brand Comparisons',
    'Surface Preparation'
  ];

  const filteredBlogs = blogsData.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery = searchQuery.trim() === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const featuredBlog = blogsData[0];

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen pb-24">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200/80 py-3 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto flex items-center gap-2 text-xs font-medium text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-black font-semibold">Painting & Waterproofing Knowledge Hub</span>
        </div>
      </div>

      {/* HERO HEADER */}
      <section className="bg-white border-b border-slate-100 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-[1540px] mx-auto text-center space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3479] block">
            Expert Homeowner & Contractor Guides
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191919] leading-tight tracking-tight">
            Paint, Waterproofing & Surface Care Guides for Alwar & Rajasthan
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Transparent price breakdowns, practical climate protection tips, unbiased brand comparisons, and waterproofing remedies written in plain language for local homeowners.
          </p>

          {/* Search bar */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. labour cost, terrace leakage, putty...)"
                className="w-full text-xs sm:text-sm py-3 pl-10 pr-4 rounded-full border border-slate-200 focus:outline-none focus:border-black bg-slate-50"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold py-2 px-4 rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-black text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BLOG POST BANNER */}
      {selectedCategory === 'All' && searchQuery === '' && (
        <section className="max-w-[1540px] mx-auto px-4 sm:px-6 pt-12">
          <div 
            onClick={() => onSelectBlog(featuredBlog.slug)}
            className="bg-white rounded-[36px] overflow-hidden border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
          >
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto">
              <img
                src={featuredBlog.featuredImage}
                alt={featuredBlog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-black text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Featured Guide
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-bold text-[#ef3479] uppercase">{featuredBlog.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredBlog.readTime}</span>
                  <span>•</span>
                  <span>{featuredBlog.publishDate}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] group-hover:text-[#ef3479] transition-colors leading-snug">
                  {featuredBlog.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-black group-hover:text-[#ef3479] flex items-center gap-1">
                  <span>READ FULL BREAKDOWN</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-slate-400">By {featuredBlog.author}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLOG POSTS GRID */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#191919]">
            {selectedCategory === 'All' ? 'All Recommended Guides' : selectedCategory} ({filteredBlogs.length} Articles)
          </h3>
          <span className="text-xs text-slate-500">Authentic insights for Rajasthan homes</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              id={`blog-card-${blog.slug}`}
              onClick={() => onSelectBlog(blog.slug)}
              className="bg-white rounded-[28px] overflow-hidden border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
                    <span>•</span>
                    <span>{blog.publishDate}</span>
                  </div>

                  <h4 className="text-lg font-extrabold text-[#191919] group-hover:text-[#ef3479] transition-colors leading-snug line-clamp-2">
                    {blog.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#ef3479]">
                <span>READ GUIDE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM HUB NEWSLETTER / ASSISTANCE */}
      <section className="max-w-[1540px] mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-[#141820] text-white rounded-[36px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff761c]">
              Have a Specific Surface Question?
            </span>
            <h3 className="text-2xl font-extrabold">
              Ask Alwar's Local Technical Colour Consultants
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Can’t find your specific problem in our articles? Connect directly with our paint chemists and estimators at Vijay Complex, Scheme No. 2, Alwar.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary text-xs tracking-wider uppercase py-3.5 px-6 whitespace-nowrap"
          >
            Contact Showroom Desk
          </button>
        </div>
      </section>
    </div>
  );
};
