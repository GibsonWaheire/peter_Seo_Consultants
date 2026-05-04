import { Link } from 'react-router-dom';

const plans = [
  {
    id: 'seo-starter',
    name: 'SEO Starter',
    price: 'KES 35,000',
    period: '/ month',
    badge: null,
    tagline: 'Perfect for small businesses & startups',
    features: [
      'Up to 10 target keywords',
      'Full technical SEO audit',
      'On-page optimization (5 pages/mo)',
      'Google Business Profile setup & optimization',
      'Monthly ranking & traffic report',
      'Dedicated account manager',
      'Email & chat support',
    ],
    cta: 'Get Started',
  },
  {
    id: 'seo-growth',
    name: 'SEO Growth',
    price: 'KES 75,000',
    period: '/ month',
    badge: 'Most Popular',
    tagline: 'For scaling companies with serious ambition',
    features: [
      'Up to 30 target keywords',
      'Advanced technical SEO',
      'On-page optimization (15 pages/mo)',
      'Content creation (4 blog posts/mo)',
      'Link building (8 high-authority links/mo)',
      'Competitor gap analysis',
      'Bi-weekly strategy calls',
      'Monthly ROI report',
    ],
    cta: 'Get Started',
  },
  {
    id: 'seo-enterprise',
    name: 'SEO Enterprise',
    price: 'KES 150,000+',
    period: '/ month',
    badge: null,
    tagline: 'High-volume strategies for large websites',
    features: [
      'Unlimited target keywords',
      'Enterprise-grade technical SEO',
      'On-page optimization (40+ pages/mo)',
      'Content creation (12+ pieces/mo)',
      'Aggressive link building (20+ links/mo)',
      'International & multi-location SEO',
      'Weekly strategy calls',
      'Custom reporting dashboard',
      'Dedicated senior SEO strategist',
    ],
    cta: 'Request a Quote',
  },
];

const otherServices = [
  {
    id: 'ppc-management',
    name: 'PPC Management',
    icon: '📢',
    tagline: 'Paid ads management, fully managed for you',
    desc: 'We handle your Google Ads, Meta Ads, and display campaigns end-to-end — from strategy and copy to bid management and A/B testing. You only pay for performance.',
    includes: [
      'Campaign setup & structure',
      'Keyword research & negative lists',
      'Ad copy & creative strategy',
      'Bid optimization & budget pacing',
      'Conversion tracking setup',
      'Monthly performance reporting',
    ],
    price: 'From KES 25,000 / month + ad spend',
  },
  {
    id: 'web-design',
    name: 'Web Design Packages',
    icon: '🎨',
    tagline: 'Sites built to convert visitors into clients',
    desc: 'Our web design packages are built for speed, SEO, and conversions. Every site is custom-designed, mobile-first, and optimized for Core Web Vitals from day one.',
    includes: [
      'Custom design (no templates)',
      'Mobile-first & responsive',
      'Core Web Vitals optimized',
      'On-page SEO built in',
      'CMS integration (if needed)',
      '3 months post-launch support',
    ],
    price: 'From KES 80,000 one-time',
  },
  {
    id: 'custom-strategy',
    name: 'Custom Strategy',
    icon: '🧩',
    tagline: 'Bespoke pricing for unique business needs',
    desc: "No two businesses are the same. If your needs don't fit a standard package, we'll build a fully custom strategy — combining SEO, PPC, content, CRO, and development as needed.",
    includes: [
      'Tailored service scope',
      'Dedicated strategy team',
      'Custom reporting & KPIs',
      'Flexible contract terms',
      'Multi-channel campaign support',
      'Quarterly strategy reviews',
    ],
    price: 'Contact us for a custom quote',
  },
];

const faqs = [
  { q: 'Are there long-term contracts?', a: "No. All plans are month-to-month. We earn your business every month through results, not paperwork." },
  { q: 'How soon will I see results?', a: "Most clients see meaningful ranking improvements within 3–4 months. Competitive niches may take 6–9 months for full impact." },
  { q: 'Can I change plans later?', a: "Yes. You can upgrade or adjust your plan at any time with 30 days notice." },
  { q: 'Do your prices include VAT?', a: "Prices shown are exclusive of VAT. VAT at the prevailing rate will be applied to invoices." },
];

export default function Pricing() {
  return (
    <main className="pt-[104px] bg-white">

      {/* Hero */}
      <section className="bg-white py-24 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-5">
            Transparent Pricing
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-black">
            Plans Built for<br />
            <span className="text-emerald-600">Every Stage of Growth</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
            No hidden fees. No long-term lock-ins. Just clear, results-driven SEO packages priced for Kenyan and African businesses.
          </p>
        </div>
      </section>

      {/* SEO Plans */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-black mb-12">SEO Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map(({ id, name, price, period, badge, tagline, features, cta }) => (
              <div
                key={id}
                id={id}
                className={`scroll-mt-[120px] flex flex-col border ${badge ? 'border-emerald-500 shadow-xl' : 'border-slate-200 shadow-md'} hover:shadow-2xl transition-shadow`}
              >
                {badge ? (
                  <div className="bg-emerald-600 text-white text-xs font-black uppercase tracking-widest text-center py-2">
                    {badge}
                  </div>
                ) : (
                  <div className="h-8" />
                )}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-black mb-1">{name}</h3>
                  <p className="text-slate-500 text-xs mb-6">{tagline}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-black text-black">{price}</span>
                    <span className="text-slate-400 text-sm ml-1">{period}</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/booking"
                    className={`block text-center font-bold text-sm py-3 transition-colors ${badge ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-black hover:bg-[#0d3d6e] text-white'}`}
                  >
                    {cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-black mb-12">Other Services & Pricing</h2>
          <div className="space-y-8">
            {otherServices.map(({ id, name, icon, tagline, desc, includes, price }) => (
              <div
                key={id}
                id={id}
                className="scroll-mt-[120px] bg-white border border-slate-100 shadow-md p-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{icon}</span>
                    <h3 className="text-xl font-black text-black">{name}</h3>
                  </div>
                  <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3">{tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <p className="text-black font-black text-lg">{price}</p>
                </div>
                <div>
                  <p className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest mb-4">What's Included</p>
                  <ul className="space-y-2.5">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-black mb-12">Pricing FAQs</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-slate-100 pb-6">
                <p className="text-base font-bold text-black mb-2">{q}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
            Get a Custom Quote
          </span>
          <h2 className="text-5xl font-black mb-4">Not Sure Which Plan Is Right?</h2>
          <p className="text-slate-400 text-lg max-w-xl mb-10">
            Book a free 30-minute call and we'll recommend the right strategy for your budget and goals.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-10 py-4 transition-colors"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>

    </main>
  );
}
