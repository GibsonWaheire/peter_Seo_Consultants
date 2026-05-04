import { Link } from 'react-router-dom';

const services = [
  {
    icon: '🔍',
    title: 'SEO Audit',
    desc: "A deep-dive into your site's technical health, on-page factors, and competitive gaps.",
    includes: ['Technical crawl report', 'Core Web Vitals analysis', 'Competitor gap analysis', 'Priority action plan'],
  },
  {
    icon: '📝',
    title: 'On-Page SEO',
    desc: 'Optimized content, meta tags, and internal linking that signal strong relevance to search engines.',
    includes: ['Title & meta optimization', 'Header structure', 'Internal link strategy', 'Schema markup'],
  },
  {
    icon: '🔗',
    title: 'Link Building',
    desc: 'High-authority backlinks that build domain trust and push your pages to the top of results.',
    includes: ['Outreach campaigns', 'Guest posting', 'Digital PR', 'Anchor text strategy'],
  },
  {
    icon: '⚙️',
    title: 'Technical SEO',
    desc: 'Fix the foundation — crawlability, indexability, site speed, and structured data.',
    includes: ['Sitemap & robots.txt', 'Page speed optimization', 'Canonical tags', 'Redirect audits'],
  },
  {
    icon: '📍',
    title: 'Local SEO',
    desc: 'Dominate local search results and Google Maps to capture nearby customers.',
    includes: ['Google Business Profile', 'Local citations', 'Review strategy', 'Local keyword targeting'],
  },
  {
    icon: '✍️',
    title: 'Content Strategy',
    desc: 'Keyword-driven content that ranks, converts, and establishes topical authority.',
    includes: ['Keyword research', 'Content calendar', 'Pillar page strategy', 'Blog & landing pages'],
  },
];

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn about your business, goals, and current SEO situation in a free 30-minute strategy call.' },
  { num: '02', title: 'Full Audit', desc: 'We perform a comprehensive audit of your site and competitors to identify the highest-leverage opportunities.' },
  { num: '03', title: 'Strategy & Roadmap', desc: 'You receive a clear, prioritized roadmap with expected timelines and measurable milestones.' },
  { num: '04', title: 'Execution & Reporting', desc: 'We implement the strategy and deliver monthly reports showing rankings, traffic, and ROI.' },
];

export default function Services() {
  return (
    <main className="pt-[104px] bg-white">

      {/* Hero */}
      <section className="bg-white text-black py-24 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-5">
            What We Offer
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-black">
            SEO Services That<br />
            <span className="text-emerald-600">Actually Work</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
            Every service is built around one goal: sustainable organic growth that compounds over time.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon, title, desc, includes }) => (
              <div key={title} className="rounded-2xl p-10 shadow-md hover:shadow-xl transition-shadow bg-white border border-slate-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 text-2xl mb-6">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-2">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">
            Our Process
          </span>
          <h2 className="text-4xl font-black text-black mb-16">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num}>
                <p className="text-5xl font-black text-emerald-200 mb-4">{num}</p>
                <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
            Get Started
          </span>
          <h2 className="text-5xl font-black mb-4">Ready to Grow?</h2>
          <p className="text-slate-400 text-lg max-w-xl mb-10">
            Book a free 30-minute strategy call and find out exactly what it would take to rank your site.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-10 py-4 transition-colors"
          >
            Book a Free Call
          </Link>
        </div>
      </section>

    </main>
  );
}
