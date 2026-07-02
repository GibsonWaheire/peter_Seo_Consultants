import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

/* ── Data ── */

const heroStats = [
  { num: '19,478,369', label: 'Keywords Ranked' },
  { num: '5,621,177', label: 'Leads Generated' },
  { num: '800+', label: 'Client Case Studies', link: '/case-studies' },
];

const whyUs = [
  {
    icon: '📊',
    title: 'Outstanding Results and ROI',
    desc: 'Our 800+ case studies prove the results we earn for clients across every industry and budget.',
  },
  {
    icon: '🏆',
    title: 'Full-Service Market Leader',
    desc: 'SEO, PPC, web design, social media, email — all under one roof with one dedicated team.',
  },
  {
    icon: '📅',
    title: 'Month-to-Month Contracts',
    desc: "We're so confident in our work we don't lock you into long contracts. Stay because of results.",
  },
];

const socialProofItems = [
  { icon: 'G', title: 'Premiere Google Certified Partner', rating: '4.8★', reviews: '230+ reviews' },
  { icon: 'F', title: 'Facebook Marketing Partner', rating: '4.8★', reviews: '90+ reviews' },
  { icon: '💬', title: 'Featured Customers', rating: '4.7★', reviews: '1,200+ reviews' },
  { icon: '📊', title: '500+ Ranking Factors Tested and Ranked', rating: null, reviews: null },
];

const serviceBlocks = [
  {
    heading: 'Digital Marketing',
    imageLeft: true,
    services: [
      { title: 'Search Engine Optimization (SEO)', desc: 'Our data-driven SEO strategies help businesses rank higher in search results, driving qualified organic traffic and increasing conversions month over month.' },
      { title: 'Pay Per Click (PPC)', desc: 'Targeted Google Ads and paid search campaigns that maximize ROI. Every shilling spent is tracked, tested, and optimized for peak performance.' },
      { title: 'Social, Email & SMS Marketing', desc: 'Full-funnel marketing across social platforms, email campaigns, and SMS to nurture leads and build lasting customer relationships.' },
    ],
  },
  {
    heading: 'Web Design & Development',
    imageLeft: false,
    services: [
      { title: 'Design & Development', desc: 'Beautiful, fast, conversion-optimized websites built on modern frameworks. Every design decision is backed by data and UX best practices.' },
      { title: 'Ecommerce & Shopping Carts', desc: 'Custom ecommerce solutions on Shopify, WooCommerce, and custom platforms built to convert visitors into paying customers at scale.' },
      { title: 'App & Custom Development', desc: 'Mobile apps and custom web applications tailored to your business processes and built to scale alongside your growth.' },
    ],
  },
  {
    heading: 'Software & Infrastructure',
    imageLeft: true,
    services: [
      { title: 'Custom Web Apps', desc: 'Bespoke web applications designed to automate workflows, improve operational efficiency, and give your business a sustainable competitive edge.' },
      { title: 'API Integrations', desc: 'Seamless integration with third-party tools, CRMs, payment gateways, and data platforms to keep all your systems connected and in sync.' },
      { title: 'IT Systems & Infrastructure', desc: 'Reliable IT infrastructure, hosting, and system management so your digital operations run without interruption around the clock.' },
    ],
  },
];

const caseStudies = [
  { client: 'Fashion Retailer', industry: 'E-Commerce', result: '+320%', metric: 'Organic Traffic' },
  { client: 'Law Firm Nairobi', industry: 'Legal Services', result: '+280%', metric: 'Qualified Leads' },
  { client: 'Real Estate Co.', industry: 'Property', result: '+415%', metric: 'Search Visibility' },
];

const chartBars = [28, 38, 32, 50, 44, 62, 56, 78, 86, 100];

/* ── Component ── */

export default function Home() {
  usePageMeta({
    title: 'Iknus Consultants | SEO & Digital Marketing Agency Kenya',
    description: "Kenya's top-rated SEO and digital marketing agency. We help businesses grow online with data-driven SEO, PPC, content marketing, and web development.",
    canonical: 'https://iknusconsultants.com/',
  });
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', tips: false });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  return (
    <main className="pt-[104px] bg-white">

      {/* ════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════ */}
      <section className="relative min-h-screen bg-slate-600 bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-900/75" />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">

          <h1 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-5">
            Need More Clients?
          </h1>
          <p className="text-xl md:text-2xl font-light text-white uppercase tracking-widest mb-12">
            Meet Your New SEO Agency in Kenya
          </p>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
            {heroStats.map(({ num, label, link }) => {
              const content = (
                <>
                  <p className="text-4xl md:text-5xl font-black text-white leading-none mb-2">{num}</p>
                  <p className="text-yellow-300 uppercase text-xs md:text-sm tracking-widest font-semibold">{label}</p>
                </>
              );
              return link ? (
                <Link
                  key={label}
                  to={link}
                  className="bg-blue-900/80 border border-blue-700/40 px-6 py-10 flex flex-col items-center hover:bg-blue-800/80 transition-colors"
                >
                  {content}
                </Link>
              ) : (
                <div key={label} className="bg-blue-900/80 border border-blue-700/40 px-6 py-10 flex flex-col items-center">
                  {content}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            to="/booking"
            className="mt-10 inline-block bg-lime-400 hover:bg-lime-300 text-black font-black text-sm md:text-base px-12 py-5 rounded-full uppercase tracking-widest transition-colors"
          >
            Get a Free Strategy Review
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 2 — ABOUT INTRO
      ════════════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Centered intro */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">
              Iknus Consultants — Kenya's Top-Rated SEO Company
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
              Founded in Nairobi, Iknus Consultants is Kenya's leading data-driven digital marketing agency. We combine deep local market expertise with world-class SEO strategies to help businesses grow their online presence, generate more leads, and increase revenue.
            </p>
          </div>

          {/* Two column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                We Generate 500% More Results Than the Average Agency
              </h3>
              <p className="text-gray-500 leading-relaxed mb-5">
                Most agencies promise results and deliver reports. We deliver rankings, traffic, and revenue. Our team of specialists has helped over 1,000 clients across East Africa achieve measurable growth through proven SEO and digital marketing strategies.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                From technical SEO and content strategy to link building and conversion rate optimization, every service we offer is engineered for one outcome: your business growth.
              </p>
              <Link
                to="/booking"
                className="inline-block bg-[#0d3d6e] hover:bg-[#1a5fa8] text-white font-black text-sm px-8 py-4 uppercase tracking-widest transition-colors"
              >
                Talk to Your SEO Strategist Now
              </Link>
            </div>

            {/* Right — chart card + overlapping review */}
            <div className="relative pb-10 pr-4">
              <div className="bg-white shadow-xl rounded-xl p-6 border border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Organic Traffic Growth</p>
                <p className="text-2xl font-black text-slate-900 mb-6">+320% in 12 Months</p>
                <div className="flex items-end gap-1.5 h-36 mb-3">
                  {chartBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i >= 7 ? '#c8f000' : '#1a5fa8',
                        opacity: i >= 7 ? 1 : 0.3 + i * 0.07,
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
                </div>
              </div>

              {/* Overlapping review card */}
              <div className="absolute -bottom-2 -right-2 md:right-0 bg-white shadow-xl rounded-xl p-5 w-[240px] border border-slate-100 z-10">
                <div className="text-yellow-400 text-sm mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-sm text-slate-700 italic mb-2 leading-snug">
                  "Iknus doubled our organic traffic in just 3 months!"
                </p>
                <p className="text-xs font-bold text-slate-900">— James K., CEO, TechHub Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 3 — WHY WORK WITH US
      ════════════════════════════════════ */}
      <section className="bg-[#f0f4f8] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-14">
            Why You'll Love Working With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#1a5fa8] flex items-center justify-center text-2xl mx-auto mb-5">
                  {icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 4 — TEXT LEFT + FORM RIGHT
      ════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — editorial content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5 leading-tight">
              An SEO Agency Built for the Age of AI
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              The SEO landscape has fundamentally shifted. Artificial intelligence is reshaping how search engines evaluate content, rank pages, and deliver results. Agencies that don't adapt are already falling behind — and taking their clients with them.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              At Iknus, we've rebuilt our entire methodology around AI-era search signals: topical authority, entity optimization, structured data, and experience-driven content. We don't just keep up — we stay ahead.
            </p>

            <h3 className="text-xl font-black text-slate-900 mb-3">Watch Out for Pretenders</h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              The digital marketing space is full of agencies that promise the world and deliver a monthly PDF. Be wary of anyone guaranteeing "#1 rankings in 30 days" or selling cheap backlink packages. Real SEO takes strategy, expertise, and consistent execution.
            </p>

            <h3 className="text-xl font-black text-slate-900 mb-3">Why Iknus?</h3>
            <p className="text-gray-500 leading-relaxed">
              Because we treat your business like our own. Our strategists work directly with you — no account managers passing messages, no outsourced work. Just experienced SEO professionals committed to growing your revenue through organic search.
            </p>
          </div>

          {/* Right — contact form */}
          <div className="lg:sticky lg:top-[120px]">
            <div className="bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden">
              <div className="bg-[#1a5fa8] px-8 py-5">
                <p className="text-white font-black text-lg">Get a Free Account Review</p>
                <p className="text-blue-200 text-sm mt-1">No obligation. Results in 24 hours.</p>
              </div>
              <div className="p-8 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a5fa8] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a5fa8] transition-colors"
                />
                <div className="flex">
                  <span className="bg-slate-100 border border-r-0 border-slate-200 px-4 py-3 text-sm text-slate-500 font-semibold shrink-0">
                    +254
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="712 000 000"
                    value={form.phone}
                    onChange={handleChange}
                    className="flex-1 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a5fa8] transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your business and goals..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a5fa8] transition-colors resize-none"
                />
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="tips"
                    checked={form.tips}
                    onChange={handleChange}
                    className="mt-0.5 accent-[#1a5fa8]"
                  />
                  <span className="text-sm text-slate-600 leading-snug">
                    I'd like to receive SEO tips and digital marketing insights
                  </span>
                </label>
                <button
                  type="button"
                  className="w-full bg-[#1a5fa8] hover:bg-[#0d3d6e] text-white font-black py-4 uppercase tracking-widest text-sm transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 5 — QUOTE BANNER
      ════════════════════════════════════ */}
      <section className="bg-[#1a5fa8] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-xl md:text-2xl italic font-light leading-relaxed max-w-3xl mx-auto mb-6">
            "Our mission is simple: to be the most results-driven SEO agency in Kenya. Every strategy we build, every campaign we run, every report we deliver — it all comes back to one question: is this growing our client's business?"
          </p>
          <p className="text-white font-black text-sm uppercase tracking-widest">
            — Iknus, Founder &amp; Director
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 6 — SOCIAL PROOF
      ════════════════════════════════════ */}
      <section className="bg-[#f0f4f8] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="bg-slate-300 rounded-xl h-96 flex items-center justify-center">
            <p className="text-slate-500 text-sm font-medium">Team / Office Photo</p>
          </div>

          {/* Trust items */}
          <div className="space-y-8">
            {socialProofItems.map(({ icon, title, rating, reviews }) => (
              <div key={title} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#1a5fa8] flex items-center justify-center text-white font-black text-base shrink-0">
                  {icon}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-base">{title}</h4>
                  {rating && (
                    <p className="text-sm text-gray-500 mt-0.5">
                      <span className="text-yellow-500 font-bold">{rating}</span> · {reviews}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 7 — OUR SERVICES (alternating)
      ════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Everything your business needs to dominate online — under one roof.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-slate-100">
            {serviceBlocks.map(({ heading, imageLeft, services: svcList }) => (
              <div key={heading} className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 items-center">
                {/* Image placeholder */}
                <div className={`bg-slate-100 rounded-xl h-80 flex items-center justify-center ${!imageLeft ? 'lg:order-2' : ''}`}>
                  <p className="text-slate-400 text-sm font-medium">{heading}</p>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${!imageLeft ? 'lg:order-1' : ''}`}>
                  <p className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest mb-6 border-l-2 border-[#1a5fa8] pl-3">
                    {heading}
                  </p>
                  <div className="space-y-6">
                    {svcList.map(({ title, desc }) => (
                      <div key={title}>
                        <h3 className="text-base font-black text-[#1a5fa8] mb-1">{title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 8 — CASE STUDIES TEASER
      ════════════════════════════════════ */}
      <section className="bg-[#f0f4f8] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Our Case Studies</h2>
            <Link to="/case-studies" className="text-[#1a5fa8] text-sm font-bold hover:underline hidden sm:block">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudies.map(({ client, industry, result, metric }) => (
              <div key={client} className="bg-[#0d3d6e] rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-bold text-blue-300 uppercase tracking-widest border border-blue-600/60 px-3 py-1 rounded-full mb-5">
                    {industry}
                  </span>
                  <h3 className="text-white font-black text-lg mb-4">{client}</h3>
                  <p className="text-5xl font-black leading-none mb-1" style={{ color: '#c8f000' }}>
                    {result}
                  </p>
                  <p className="text-blue-300 text-sm">{metric}</p>
                </div>
                <Link
                  to="/case-studies"
                  className="mt-6 inline-flex items-center gap-1 text-[#1a5fa8] text-sm font-bold bg-white hover:bg-slate-100 px-4 py-2 rounded transition-colors self-start"
                >
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 9 — PAY ONLINE
      ════════════════════════════════════ */}
      <section className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Left — copy */}
          <div className="flex-1">
            <span className="inline-block text-[#1a5fa8] text-xs font-black uppercase tracking-widest mb-4">
              Secure Online Payment
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
              Already Know What You Need?<br />Pay Online in Seconds.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6 max-w-lg">
              Skip the back-and-forth. Select your service, enter your details, and pay instantly using M-Pesa, card, or Apple Pay — we'll kick off your campaign the same day.
            </p>
            {/* Payment method badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 bg-zinc-900 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Apple Pay
              </span>
              <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">M-Pesa</span>
              <span className="bg-blue-700 text-white text-xs font-black px-2.5 py-1 rounded-full tracking-tight">VISA</span>
              <span className="bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded-full">Mastercard</span>
              <span className="text-slate-400 text-xs ml-1">· Secured by Paystack</span>
            </div>
          </div>

          {/* Right — pay card */}
          <div className="w-full lg:w-auto lg:min-w-[340px]">
            <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">Ready to start?</p>
              <p className="text-white font-black text-xl mb-1">Pay for Your Service</p>
              <p className="text-slate-400 text-sm mb-7">KES · AED · All major cards</p>

              {/* Quick plan buttons */}
              <div className="space-y-2.5 mb-6">
                {[
                  { label: 'SEO Starter Plan', price: 35000 },
                  { label: 'SEO Growth Plan',  price: 75000 },
                ].map(({ label, price }) => (
                  <button
                    key={label}
                    onClick={() => navigate('/pay', { state: { serviceName: label, price, currency: 'KES' } })}
                    className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                  >
                    <span>{label}</span>
                    <span className="text-slate-300 font-mono text-xs">KES {price.toLocaleString()}</span>
                  </button>
                ))}
              </div>

              {/* Main CTA */}
              <button
                onClick={() => navigate('/pay')}
                className="w-full bg-lime-400 hover:bg-lime-300 text-black font-black py-3.5 rounded-xl transition-colors text-sm uppercase tracking-wider"
                style={{ backgroundColor: '#c8f000' }}
              >
                Pay for Any Service →
              </button>
              <p className="text-slate-500 text-xs text-center mt-3">Choose your own service &amp; amount</p>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 10 — FINAL CTA
      ════════════════════════════════════ */}
      <section className="bg-[#0d3d6e] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ready to Grow Your Business?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Join 1,000+ businesses across Kenya that trust Iknus Consultants to drive their online growth.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-lime-400 hover:bg-lime-300 text-black font-black text-base px-12 py-5 rounded-full uppercase tracking-widest transition-colors"
            style={{ backgroundColor: '#c8f000' }}
          >
            Get a Free Proposal
          </Link>
        </div>
      </section>

    </main>
  );
}
