import { useState } from 'react';
import { Link } from 'react-router-dom';

const heroStats = [
  { num: '19,478,369', label: 'Keywords Ranked' },
  { num: '5,621,177', label: 'Leads Generated' },
  { num: '800+', label: 'Client Case Studies', link: '/case-studies' },
];

const stats = [
  { num: '$2.3B', label: 'Revenue Generated for Clients' },
  { num: '+200%', label: 'Average Organic Traffic Increase' },
  { num: '1,000+', label: 'Clients Worldwide' },
  { num: '97%', label: 'Client Retention Rate' },
];

const services = [
  { icon: '🔍', title: 'SEO Audit', desc: 'Uncover every technical gap holding your site back.' },
  { icon: '📝', title: 'On-Page SEO', desc: 'Content and structure optimized for search and users.' },
  { icon: '🔗', title: 'Link Building', desc: 'Authority backlinks that move the needle on rankings.' },
  { icon: '⚙️', title: 'Technical SEO', desc: 'Speed, crawlability, and indexation done right.' },
  { icon: '📍', title: 'Local SEO', desc: 'Dominate Google Maps and local search results.' },
  { icon: '✍️', title: 'Content Strategy', desc: 'Topic authority that drives compounding organic growth.' },
];

const caseStudy = {
  client: 'E-Commerce Retailer',
  industry: 'Fashion & Apparel',
  result: 'Grew organic revenue from $1.2M to $4.8M in 18 months.',
  stat: '+300%',
  label: 'Organic Revenue',
};

const socialProof = ['Forbes', 'Clutch', 'Inc. 5000', 'Google Partner', 'Shopify Plus'];

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main className="pt-[104px] bg-white">

      {/* ── Hero ── */}
      <section className="relative min-h-screen bg-slate-700 bg-cover bg-center">
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-blue-900/70" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-5">
            Need More Clients?
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light text-white uppercase tracking-widest mb-14">
            Meet Your New SEO Agency
          </p>

          {/* Stat Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mb-12">
            {heroStats.map(({ num, label, link }) => {
              const inner = (
                <>
                  <p className="text-3xl md:text-4xl font-black text-white leading-none mb-2">{num}</p>
                  <p className="text-yellow-300 uppercase text-xs md:text-sm tracking-widest font-semibold">
                    {label}{link ? ' →' : ''}
                  </p>
                </>
              );
              return link ? (
                <Link
                  key={label}
                  to={link}
                  className="bg-blue-900/80 border border-blue-700/50 px-6 py-8 flex flex-col items-center justify-center hover:bg-blue-800/80 transition-colors"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={label}
                  className="bg-blue-900/80 border border-blue-700/50 px-6 py-8 flex flex-col items-center justify-center"
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            to="/booking"
            className="bg-lime-400 hover:bg-lime-300 text-black font-black text-sm md:text-base px-12 py-5 rounded-full uppercase tracking-widest transition-colors"
          >
            Get a Free Strategy Review
          </Link>
        </div>
      </section>

      {/* ── Social Proof Bar ── */}
      <section className="bg-slate-100 border-y border-slate-200 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">As Seen On</span>
          {socialProof.map((name) => (
            <span key={name} className="text-slate-500 text-sm font-bold tracking-wide">{name}</span>
          ))}
        </div>
      </section>

      {/* ── Results ── */}
      <section className="bg-zinc-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              We Get <span className="text-emerald-600">Results.</span>
            </h2>
            <p className="text-slate-400 text-lg mt-3 max-w-xl">
              Real numbers. Real clients. Proven SEO performance across every industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-700">
            {stats.map(({ num, label }) => (
              <div key={label} className="bg-zinc-900 p-10">
                <p className="text-5xl font-black text-emerald-600 mb-3">{num}</p>
                <p className="text-slate-300 text-sm leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-black mb-3">Our Services</h2>
            <p className="text-slate-500 text-lg max-w-xl">
              Full-service SEO solutions built to increase your visibility and grow revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group border-b border-r border-slate-200 p-8 cursor-pointer transition-colors hover:bg-slate-50"
              >
                <span className="text-2xl block mb-4">{icon}</span>
                <h3 className="text-base font-bold text-black mb-1 group-hover:text-emerald-600 transition-colors">
                  {title}
                </h3>
                <div className="w-0 group-hover:w-8 h-0.5 bg-emerald-600 mb-3 transition-all duration-300" />
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/services"
              className="text-sm font-semibold text-black hover:text-emerald-600 transition-colors inline-flex items-center gap-2"
            >
              View All Services <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="bg-zinc-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">
              Featured Case Study
            </p>
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-2">
              {caseStudy.client} · {caseStudy.industry}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
              {caseStudy.result}
            </h2>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold border-b border-white hover:border-emerald-600 hover:text-emerald-600 pb-0.5 transition-colors"
            >
              View Case Study <span>→</span>
            </Link>
          </div>
          <div className="text-center lg:text-right">
            <p className="text-8xl md:text-9xl font-black text-emerald-600 leading-none">
              {caseStudy.stat}
            </p>
            <p className="text-slate-400 text-base font-semibold mt-2">{caseStudy.label}</p>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Ready to <span className="text-emerald-600">Dominate</span> Search?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Enter your email and we&apos;ll send you a free SEO audit of your website.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your work email"
              required
              className="flex-1 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 px-5 py-4 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-7 py-4 transition-colors shrink-0"
            >
              Get Free Audit
            </button>
          </form>
          <p className="text-zinc-600 text-xs mt-4">No spam. Unsubscribe at any time.</p>
        </div>
      </section>

    </main>
  );
}
