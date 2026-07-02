import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { servicesBySlug, relatedServices } from '../data/servicesData';
import serviceMeta from '../data/serviceMeta';
import usePageMeta from '../hooks/usePageMeta';

/* ── Proof card variant config per slug ── */
const proofConfig = {
  'technical-seo':                { v: 'stat' },
  'on-page-seo':                  { v: 'quote' },
  'local-seo':                    { v: 'metric-grid', metrics: [{ value: '#1', label: 'Google Maps rank' }, { value: '+330%', label: 'Organic traffic' }, { value: '-60%', label: 'Ad spend cut' }] },
  'ecommerce-seo':                { v: 'before-after', before: '~0', beforeLabel: 'First-page keywords', after: '1,400+', afterLabel: 'Keywords ranking' },
  'link-building':                { v: 'growth', bars: [{ label: 'Mo. 2', pct: 15 }, { label: 'Mo. 5', pct: 42 }, { label: 'Mo. 8', pct: 72 }, { label: 'Mo. 10', pct: 100 }] },
  'enterprise-seo':               { v: 'stat-dark' },
  'ppc-google-ads':               { v: 'stat-emerald' },
  'facebook-instagram-ads':       { v: 'roas-steps', steps: [{ value: '1.2x', label: 'Start' }, { value: '2.8x', label: 'Day 45' }, { value: '3.5x', label: 'Month 3' }] },
  'email-marketing':              { v: 'quote' },
  'sms-marketing':                { v: 'metric-grid', metrics: [{ value: '8%', label: 'CTR before' }, { value: '28%', label: 'CTR after' }, { value: '3.5×', label: 'Improvement' }] },
  'content-marketing':            { v: 'growth', bars: [{ label: 'Mo. 3', pct: 18 }, { label: 'Mo. 6', pct: 44 }, { label: 'Mo. 9', pct: 76 }, { label: 'Mo. 11', pct: 100 }] },
  'conversion-rate-optimization': { v: 'before-after', before: '2.1%', beforeLabel: 'Conversion rate', after: '3.0%', afterLabel: 'After optimisation' },
  'website-design':               { v: 'quote' },
  'web-development':              { v: 'award', score: '98', scoreLabel: '/100', badge: 'PageSpeed Score' },
  'ecommerce-development':        { v: 'stat-emerald' },
  'mobile-app-development':       { v: 'stat' },
  'custom-web-applications':      { v: 'metric-grid', metrics: [{ value: '22h', label: 'Weekly time saved' }, { value: '4', label: 'Systems merged' }, { value: '0', label: 'Manual errors' }] },
  'api-system-integrations':      { v: 'before-after', before: '4 tools', beforeLabel: 'Disconnected systems', after: '1 hub', afterLabel: 'Unified platform' },
};

function ProofCard({ proof, slug }) {
  const config = proofConfig[slug] || { v: 'stat' };
  const { v } = config;

  if (v === 'stat') return (
    <div className="bg-[#0d3d6e] p-10">
      <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-6">Real Result</p>
      <p className="text-6xl font-black text-emerald-400 mb-2">{proof.stat}</p>
      <p className="text-white font-bold text-lg mb-6">{proof.statLabel}</p>
      <p className="text-blue-100 text-sm leading-relaxed">{proof.desc}</p>
    </div>
  );

  if (v === 'stat-dark') return (
    <div className="bg-slate-900 p-10">
      <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-6">Real Result</p>
      <p className="text-6xl font-black text-emerald-400 mb-2">{proof.stat}</p>
      <p className="text-white font-bold text-lg mb-6">{proof.statLabel}</p>
      <p className="text-slate-400 text-sm leading-relaxed">{proof.desc}</p>
    </div>
  );

  if (v === 'stat-emerald') return (
    <div className="bg-emerald-600 p-10">
      <p className="text-emerald-100 text-xs font-black uppercase tracking-widest mb-6">Real Result</p>
      <p className="text-6xl font-black text-white mb-2">{proof.stat}</p>
      <p className="text-emerald-100 font-bold text-lg mb-6">{proof.statLabel}</p>
      <p className="text-white/80 text-sm leading-relaxed">{proof.desc}</p>
    </div>
  );

  if (v === 'quote') return (
    <div className="bg-white border-2 border-slate-100 p-10 relative overflow-hidden">
      <div className="absolute top-2 left-5 text-8xl text-slate-100 font-black leading-none select-none">"</div>
      <div className="relative">
        <div className="flex gap-0.5 mb-5">
          {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-lg">★</span>)}
        </div>
        <p className="text-slate-700 text-sm leading-relaxed italic mb-8">{proof.desc}</p>
        <div className="border-t border-slate-100 pt-5 flex items-end justify-between">
          <div>
            <p className="text-3xl font-black text-emerald-600">{proof.stat}</p>
            <p className="text-slate-400 text-xs mt-1">{proof.statLabel}</p>
          </div>
          <span className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest">Verified Result</span>
        </div>
      </div>
    </div>
  );

  if (v === 'before-after') {
    const { before, beforeLabel, after, afterLabel } = config;
    return (
      <div className="overflow-hidden border border-slate-200">
        <div className="bg-slate-800 px-6 py-3">
          <p className="text-slate-300 text-xs font-black uppercase tracking-widest">Real Result</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="bg-red-50 border-r border-red-100 p-7">
            <p className="text-red-400 text-[10px] font-black uppercase tracking-widest mb-4">Before</p>
            <p className="text-3xl font-black text-red-500 mb-2">{before}</p>
            <p className="text-red-400 text-xs leading-snug">{beforeLabel}</p>
          </div>
          <div className="bg-emerald-50 p-7">
            <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-4">After</p>
            <p className="text-3xl font-black text-emerald-600 mb-2">{after}</p>
            <p className="text-emerald-700 text-xs leading-snug">{afterLabel}</p>
          </div>
        </div>
        <div className="bg-slate-50 p-5 border-t border-slate-200">
          <p className="text-slate-600 text-xs leading-relaxed">{proof.desc}</p>
        </div>
      </div>
    );
  }

  if (v === 'metric-grid') {
    const { metrics } = config;
    return (
      <div className="bg-white border border-slate-200 overflow-hidden">
        <div className="bg-[#1a5fa8] px-6 py-3">
          <p className="text-white text-xs font-black uppercase tracking-widest">Real Result</p>
        </div>
        <div className="grid grid-cols-3 divide-x divide-slate-100">
          {metrics.map(({ value, label }) => (
            <div key={label} className="p-5 text-center">
              <p className="text-2xl font-black text-[#0d3d6e] mb-1">{value}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wide leading-snug">{label}</p>
            </div>
          ))}
        </div>
        <div className="p-5 border-t border-slate-100 bg-slate-50">
          <p className="text-slate-600 text-xs leading-relaxed">{proof.desc}</p>
        </div>
      </div>
    );
  }

  if (v === 'growth') {
    const { bars } = config;
    return (
      <div className="bg-slate-900 p-10">
        <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Real Result</p>
        <p className="text-4xl font-black text-emerald-400 mb-1">{proof.stat}</p>
        <p className="text-white text-sm mb-8">{proof.statLabel}</p>
        <div className="flex items-end gap-3 h-20 mb-2">
          {bars.map(({ label, pct }) => (
            <div key={label} className="flex-1 flex flex-col justify-end">
              <div className="w-full bg-emerald-500 rounded-sm" style={{ height: `${pct}%` }} />
            </div>
          ))}
        </div>
        <div className="flex gap-3 mb-6">
          {bars.map(({ label }) => (
            <p key={label} className="flex-1 text-center text-[9px] text-slate-500 uppercase tracking-wide">{label}</p>
          ))}
        </div>
        <p className="text-slate-500 text-xs leading-relaxed">{proof.desc}</p>
      </div>
    );
  }

  if (v === 'roas-steps') {
    const { steps } = config;
    return (
      <div className="bg-white border border-slate-200 overflow-hidden">
        <div className="bg-blue-700 px-6 py-3">
          <p className="text-white text-xs font-black uppercase tracking-widest">Real Result · ROAS Growth</p>
        </div>
        <div className="flex items-stretch divide-x divide-slate-100">
          {steps.map(({ value, label }, i) => (
            <div key={label} className={`flex-1 p-6 text-center ${i === steps.length - 1 ? 'bg-emerald-50' : ''}`}>
              <p className={`text-3xl font-black mb-1 ${i === steps.length - 1 ? 'text-emerald-600' : 'text-slate-700'}`}>{value}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
        <div className="p-5 border-t border-slate-100 bg-slate-50">
          <p className="text-slate-600 text-xs leading-relaxed">{proof.desc}</p>
        </div>
      </div>
    );
  }

  if (v === 'award') {
    const { score, scoreLabel, badge } = config;
    return (
      <div className="bg-gradient-to-br from-[#0d3d6e] to-slate-900 p-10 text-center">
        <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-8">Real Result</p>
        <div className="inline-flex items-end gap-1 mb-3">
          <p className="text-8xl font-black text-white leading-none">{score}</p>
          <p className="text-3xl font-black text-blue-300 leading-none mb-2">{scoreLabel}</p>
        </div>
        <p className="text-emerald-400 font-bold text-sm mb-6 uppercase tracking-widest">{badge}</p>
        <p className="text-blue-100 text-xs leading-relaxed text-left">{proof.desc}</p>
      </div>
    );
  }

  // fallback
  return (
    <div className="bg-[#0d3d6e] p-10">
      <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-6">Real Result</p>
      <p className="text-6xl font-black text-emerald-400 mb-2">{proof.stat}</p>
      <p className="text-white font-bold text-lg mb-6">{proof.statLabel}</p>
      <p className="text-blue-100 text-sm leading-relaxed">{proof.desc}</p>
    </div>
  );
}

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
  const meta = serviceMeta[slug] || {};
  usePageMeta(meta);

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
            <ProofCard proof={proof} slug={slug} />

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
