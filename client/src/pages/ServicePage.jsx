import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { servicesBySlug, relatedServices } from '../data/servicesData';

/* ── Hero themes ── */
const themes = {
  navy:  { bg: 'bg-[#0d3d6e]', accent: 'text-blue-300',  statColor: 'text-emerald-400', badge: 'bg-blue-800/60 text-blue-200' },
  dark:  { bg: 'bg-slate-900', accent: 'text-slate-400',  statColor: 'text-emerald-400', badge: 'bg-slate-700 text-slate-300' },
  black: { bg: 'bg-black',     accent: 'text-slate-400',  statColor: 'text-emerald-400', badge: 'bg-zinc-800 text-zinc-300' },
};

/* ── FAQ accordion item ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-bold text-black leading-snug">{q}</span>
        <span className="text-slate-400 text-lg leading-none flex-shrink-0 mt-0.5">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm text-slate-500 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const service = servicesBySlug[slug];

  if (!service) return <Navigate to="/services" replace />;

  const {
    category, icon, title, tagline,
    heroHeadline, heroDesc, heroStat, heroTheme,
    overview, whyItMatters,
    process, includes,
    proof, whoFor, faqs,
    relatedSlugs,
  } = service;

  const theme = themes[heroTheme] || themes.navy;
  const related = relatedServices(relatedSlugs);
  const headlineLines = heroHeadline.split('\n');

  return (
    <main className="pt-[104px] bg-white">

      {/* ── Hero ── */}
      <section className={`${theme.bg} py-28 px-6`}>
        <div className="max-w-6xl mx-auto">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link to="/services" className={`${theme.accent} text-xs font-bold uppercase tracking-widest hover:text-white transition-colors`}>
              Services
            </Link>
            <span className={`${theme.accent} text-xs`}>/</span>
            <span className="text-white text-xs font-bold uppercase tracking-widest">{title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-5 px-3 py-1 ${theme.badge}`}>
                {category}
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                {headlineLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h1>
              <p className={`${theme.accent} text-lg leading-relaxed mb-10 max-w-lg`}>
                {heroDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/booking"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-4 transition-colors"
                >
                  Get a Free Proposal
                </Link>
                <Link
                  to="/pricing"
                  className="inline-block border border-white/30 hover:border-white text-white font-bold text-sm px-8 py-4 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Hero stat card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm p-10 max-w-xs w-full">
                <div className="text-6xl mb-6">{icon}</div>
                <p className={`text-5xl font-black ${theme.statColor} mb-2`}>{heroStat.value}</p>
                <p className="text-white/70 text-sm leading-snug">{heroStat.label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-white py-20 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">
              Overview
            </span>
            <h2 className="text-3xl font-black text-black mb-6">What Is {title}?</h2>
            <p className="text-slate-600 text-base leading-relaxed">{overview}</p>
          </div>
          <div>
            <p className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest mb-5">Why It Matters</p>
            <ul className="space-y-4">
              {whyItMatters.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">
            How We Do It
          </span>
          <h2 className="text-3xl font-black text-black mb-16">Our {title} Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map(({ step, title: stepTitle, desc }) => (
              <div key={step} className="bg-white border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-4xl font-black text-emerald-200 mb-4">{step}</p>
                <h3 className="text-base font-black text-black mb-3">{stepTitle}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">
              What You Get
            </span>
            <h2 className="text-3xl font-black text-black mb-8">Everything Included</h2>
            <ul className="space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="w-5 h-5 bg-[#0d3d6e] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Proof card */}
          <div>
            <div className="bg-[#0d3d6e] p-10">
              <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-6">Real Result</p>
              <p className="text-6xl font-black text-emerald-400 mb-2">{proof.stat}</p>
              <p className="text-white font-bold text-lg mb-6">{proof.statLabel}</p>
              <p className="text-blue-100 text-sm leading-relaxed">{proof.desc}</p>
            </div>

            <div className="mt-6 bg-slate-50 border border-slate-100 p-8">
              <p className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest mb-4">Who This Is For</p>
              <ul className="space-y-3">
                {whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl font-black text-black mb-12">{title} FAQs</h2>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      {related.length > 0 && (
        <section className="bg-white py-20 px-6 border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest mb-8">Related Services</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/services/${rel.slug}`}
                  className="group border border-slate-100 p-6 hover:border-[#1a5fa8] hover:shadow-md transition-all"
                >
                  <div className="text-2xl mb-3">{rel.icon}</div>
                  <p className="text-sm font-black text-black group-hover:text-[#1a5fa8] transition-colors mb-1">
                    {rel.title}
                  </p>
                  <p className="text-xs text-slate-400 leading-snug">{rel.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
              Ready to Get Started?
            </span>
            <h2 className="text-4xl font-black mb-4">Let's Talk About Your {title} Strategy</h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Book a free 30-minute strategy call. We'll review your current situation, identify your biggest opportunities, and give you a clear view of what {title.toLowerCase()} can do for your business.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-start">
            <Link
              to="/booking"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-10 py-4 transition-colors text-center"
            >
              Book a Free Strategy Call
            </Link>
            <Link
              to="/pricing"
              className="inline-block border border-slate-600 hover:border-white text-white font-bold text-sm px-10 py-4 transition-colors text-center"
            >
              See Pricing Plans
            </Link>
            <Link
              to="/case-studies"
              className="inline-block text-slate-400 hover:text-white text-sm font-semibold px-10 py-4 transition-colors text-center"
            >
              View Case Studies →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
