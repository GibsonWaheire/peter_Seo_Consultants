import { Link, useNavigate } from 'react-router-dom';

const plans = [
  {
    id: 'seo-starter',
    name: 'SEO Starter',
    price: 'KES 35,000',
    numericPrice: 35000,
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
    toPayPage: true,
  },
  {
    id: 'seo-growth',
    name: 'SEO Growth',
    price: 'KES 75,000',
    numericPrice: 75000,
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
    toPayPage: true,
  },
  {
    id: 'seo-enterprise',
    name: 'SEO Enterprise',
    price: 'KES 150,000+',
    numericPrice: null,
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
    toPayPage: false,
  },
];

const quickServices = [
  { name: 'Keyword Research Report',       price: 'KES 3,500',  numericPrice: 3500,  icon: '🔍', desc: 'Priority keyword list, competitor gap analysis & content recommendations for your niche.' },
  { name: 'Technical Writing (1 article)', price: 'KES 1,500',  numericPrice: 1500,  icon: '✍️', desc: 'SEO-optimised long-form article (1,000–2,000 words) targeting your chosen keyword.' },
  { name: 'On-Page SEO (per page)',        price: 'KES 2,000',  numericPrice: 2000,  icon: '📝', desc: 'Titles, meta, headings, internal links & schema markup for a single page.' },
  { name: 'Content Brief',                 price: 'KES 1,000',  numericPrice: 1000,  icon: '📋', desc: 'Comprehensive brief with target keywords, structure outline, and search intent analysis.' },
  { name: 'Google Business Profile Setup', price: 'KES 4,500',  numericPrice: 4500,  icon: '📍', desc: 'Full GBP setup, verification support, categories, photos & review acquisition strategy.' },
  { name: 'Schema Markup Setup',           price: 'KES 3,000',  numericPrice: 3000,  icon: '{}', desc: 'Structured data for products, services, FAQs, or local business — ready to validate.' },
  { name: 'Meta Tags Optimization (5 pages)', price: 'KES 2,500', numericPrice: 2500, icon: '🏷️', desc: 'Rewrite titles & meta descriptions for 5 key pages with click-through rate in mind.' },
  { name: 'Technical SEO Audit (One-time)', price: 'KES 8,000', numericPrice: 8000,  icon: '⚙️', desc: 'Full crawl audit, Core Web Vitals analysis & prioritised fix list — no retainer needed.' },
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
    serviceName: 'PPC / Google Ads Management',
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
    serviceName: 'Web Design Package',
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
    serviceName: 'Custom / Other',
  },
];

const webPackages = [
  {
    name: 'Landing Page',
    price: 'KES 6,000',
    numericPrice: 6000,
    turnaround: '3–5 days',
    badge: null,
    tagline: 'Single-page site built to convert',
    features: [
      'Custom design (1 page)',
      'Mobile-first & fully responsive',
      'Contact / lead capture form',
      'Google Analytics setup',
      'Basic on-page SEO',
      'Fast delivery in 3–5 days',
    ],
  },
  {
    name: 'Simple Website',
    price: 'KES 22,000',
    numericPrice: 22000,
    turnaround: '5–7 days',
    badge: null,
    tagline: 'Up to 5 pages — perfect for small businesses',
    features: [
      'Up to 5 custom pages',
      'Mobile-first & responsive',
      'Contact form + Google Maps',
      'Google Analytics & Search Console',
      'On-page SEO on all pages',
      'Core Web Vitals optimized',
      '1 round of revisions',
    ],
  },
  {
    name: 'Business Website',
    price: 'KES 18,000',
    numericPrice: 18000,
    turnaround: '7–10 days',
    badge: 'Most Popular',
    tagline: 'Professional multi-page site with CMS',
    features: [
      'Up to 10 custom pages',
      'CMS (manage content yourself)',
      'Blog / news section',
      'Mobile-first & responsive',
      'Full on-page SEO',
      'Core Web Vitals optimized',
      'Speed & performance tuning',
      '2 rounds of revisions',
    ],
  },
  {
    name: 'E-Commerce Website',
    price: 'KES 80,000',
    numericPrice: 80000,
    turnaround: '14–21 days',
    badge: null,
    tagline: 'Full online store with M-Pesa & card payments',
    features: [
      'Shopify / WooCommerce or custom',
      'M-Pesa & card payment integration',
      'Unlimited product pages',
      'Product schema & SEO',
      'Cart abandonment setup',
      'Inventory management',
      'Order & delivery tracking',
      '3 rounds of revisions',
    ],
  },
];

const designServices = [
  { name: 'Logo Design',             price: 'KES 2,500',  numericPrice: 2500,  icon: '🎨', desc: 'Professional logo with 3 concepts, unlimited revisions, and all source files.' },
  { name: 'Business Card Design',    price: 'KES 1,500',  numericPrice: 1500,  icon: '🪪', desc: 'Print-ready business card design — front & back, delivered in 1 business day.' },
  { name: 'Flyer / Poster Design',   price: 'KES 1,500',  numericPrice: 1500,  icon: '📄', desc: 'Eye-catching digital or print flyer for events, promotions, or services.' },
  { name: 'Company Profile Design',  price: 'KES 3,000',  numericPrice: 3000,  icon: '📁', desc: 'Professionally designed company profile PDF for pitches and client proposals.' },
  { name: 'Facebook Page Setup',     price: 'KES 800',    numericPrice: 800,   icon: '📱', desc: 'Full Facebook Business Page setup — cover, profile, info, and CTA button.' },
  { name: 'Social Media Profile Optimization', price: 'KES 1,500', numericPrice: 1500, icon: '⭐', desc: 'Optimize bio, links, highlights & consistency across all your social profiles.' },
  { name: 'Email Signature Design',  price: 'KES 800',    numericPrice: 800,   icon: '✉️', desc: 'Professional HTML email signature with logo, links, and brand colors.' },
  { name: 'Monthly Social Management', price: 'KES 5,000/mo', numericPrice: 5000, icon: '📅', desc: '12 posts/month, captions, hashtags, and performance reporting.' },
];

const faqs = [
  { q: 'Are there long-term contracts?', a: "No. All plans are month-to-month. We earn your business every month through results, not paperwork." },
  { q: 'How soon will I see results?', a: "Most clients see meaningful ranking improvements within 3–4 months. Competitive niches may take 6–9 months for full impact." },
  { q: 'Can I change plans later?', a: "Yes. You can upgrade or adjust your plan at any time with 30 days notice." },
  { q: 'Do your prices include VAT?', a: "Prices shown are exclusive of VAT. VAT at the prevailing rate will be applied to invoices." },
];

export default function Pricing() {
  const navigate = useNavigate();

  const handlePlanCta = (plan) => {
    if (plan.toPayPage && plan.numericPrice) {
      navigate('/pay', {
        state: {
          serviceName: `${plan.name} Plan`,
          price: plan.numericPrice,
          currency: 'KES',
        },
      });
    } else {
      navigate('/booking');
    }
  };

  const handleServiceCta = (service) => {
    navigate('/pay', {
      state: {
        serviceName: service.serviceName,
        currency: 'KES',
      },
    });
  };

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
            {plans.map((plan) => {
              const { id, name, price, period, badge, tagline, features, cta } = plan;
              return (
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
                    <button
                      onClick={() => handlePlanCta(plan)}
                      className={`block w-full text-center font-bold text-sm py-3 transition-colors ${badge ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-black hover:bg-[#0d3d6e] text-white'}`}
                    >
                      {cta}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* A-La-Carte / Individual Services */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3">
                No Retainer Needed
              </span>
              <h2 className="text-3xl font-black text-black">Individual Services</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-lg">
                Need just one thing done? Order individual SEO tasks from as little as <span className="font-bold text-black">KES 1,000</span>. Pay once, no monthly commitment.
              </p>
            </div>
            <button
              onClick={() => navigate('/pay')}
              className="shrink-0 text-[#1a5fa8] border border-[#1a5fa8] hover:bg-[#1a5fa8] hover:text-white text-sm font-bold px-5 py-2.5 transition-colors"
            >
              Pay a Custom Amount →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickServices.map((svc) => (
              <div key={svc.name} className="bg-white border border-slate-200 p-6 flex flex-col hover:border-emerald-400 hover:shadow-md transition-all">
                <span className="text-2xl mb-3">{svc.icon}</span>
                <p className="text-sm font-black text-black mb-1 leading-snug">{svc.name}</p>
                <p className="text-xs text-slate-400 leading-relaxed flex-1 mb-4">{svc.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-emerald-700 font-black text-base">{svc.price}</span>
                  <button
                    onClick={() => navigate('/pay', { state: { serviceName: svc.name, price: svc.numericPrice, currency: 'KES' } })}
                    className="text-xs font-bold text-white bg-[#0d3d6e] hover:bg-[#1a5fa8] px-3 py-1.5 transition-colors"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-black mb-12">Other Services & Pricing</h2>
          <div className="space-y-8">
            {otherServices.map((service) => {
              const { id, name, icon, tagline, desc, includes, price } = service;
              return (
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
                    <p className="text-black font-black text-lg mb-5">{price}</p>
                    <button
                      onClick={() => handleServiceCta(service)}
                      className="inline-block bg-black hover:bg-[#0d3d6e] text-white font-bold text-sm px-6 py-2.5 transition-colors"
                    >
                      Get Started
                    </button>
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest mb-4">What&apos;s Included</p>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Web & Development Packages */}
      <section className="bg-[#0d3d6e] py-24 px-6" id="web-design">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
            Web Design &amp; Development
          </span>
          <h2 className="text-3xl font-black text-white mb-3">Website Packages</h2>
          <p className="text-blue-200 text-sm max-w-xl mb-12">
            From a simple landing page to a full e-commerce store. All sites are mobile-first, SEO-optimized, and built for performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col bg-white ${pkg.badge ? 'ring-2 ring-emerald-400' : ''}`}
              >
                {pkg.badge ? (
                  <div className="bg-emerald-600 text-white text-xs font-black uppercase tracking-widest text-center py-2">
                    {pkg.badge}
                  </div>
                ) : <div className="h-8" />}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-black text-black mb-1">{pkg.name}</h3>
                  <p className="text-slate-400 text-xs mb-4">{pkg.tagline}</p>
                  <div className="mb-2">
                    <span className="text-2xl font-black text-[#0d3d6e]">{pkg.price}</span>
                  </div>
                  <p className="text-emerald-600 text-xs font-bold mb-5">Delivered in {pkg.turnaround}</p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/pay', { state: { serviceName: `${pkg.name} Website`, price: pkg.numericPrice, currency: 'KES' } })}
                    className={`block w-full text-center font-bold text-sm py-3 transition-colors ${pkg.badge ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-[#0d3d6e] hover:bg-[#1a5fa8] text-white'}`}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design & Branding Add-Ons */}
      <section className="bg-white py-24 px-6 border-t border-slate-100" id="design-branding">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3">
            Design &amp; Branding
          </span>
          <h2 className="text-3xl font-black text-black mb-3">Design Add-Ons</h2>
          <p className="text-slate-500 text-sm max-w-xl mb-12">
            Individual design and social media tasks. Order what you need, pay once.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {designServices.map((svc) => (
              <div key={svc.name} className="bg-slate-50 border border-slate-200 p-6 flex flex-col hover:border-[#1a5fa8] hover:shadow-md transition-all">
                <span className="text-2xl mb-3">{svc.icon}</span>
                <p className="text-sm font-black text-black mb-1 leading-snug">{svc.name}</p>
                <p className="text-xs text-slate-400 leading-relaxed flex-1 mb-4">{svc.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200">
                  <span className="text-[#0d3d6e] font-black text-sm">{svc.price}</span>
                  <button
                    onClick={() => navigate('/pay', { state: { serviceName: svc.name, price: svc.numericPrice, currency: 'KES' } })}
                    className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 transition-colors"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-100">
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
            Book a free 30-minute call and we&apos;ll recommend the right strategy for your budget and goals.
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
