import { Link } from 'react-router-dom';

const metrics = [
  { label: 'Domain Authority', value: '87', suffix: '' },
  { label: 'Organic Traffic', value: '+143', suffix: '%' },
  { label: 'Keywords Ranked', value: '2,400', suffix: '+' },
];

const services = [
  {
    icon: '🔍',
    title: 'SEO Audit',
    desc: "A comprehensive review of your site's technical health, on-page factors, and competitive gaps.",
  },
  {
    icon: '📝',
    title: 'On-Page SEO',
    desc: 'Optimized content, meta tags, and internal linking that signal relevance to search engines.',
  },
  {
    icon: '🔗',
    title: 'Link Building',
    desc: 'High-authority backlinks that build domain trust and push your pages to the top of search results.',
  },
];

export default function Home() {
  return (
    <main className="pt-16">

      {/* ── Hero ── */}
      <section className="bg-slate-900 text-white min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">

          {/* Left — copy */}
          <div>
            <span className="inline-block text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
              SEO Consultants
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">
              Rank Higher.{' '}
              <span className="text-emerald-400">Grow Faster.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
              Data-driven SEO strategies that deliver real, measurable results for your business.
              We turn search intent into sustainable organic growth.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/booking"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Book a Call
              </Link>
              <Link
                to="/services"
                className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right — metrics card */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
              Live Client Results
            </p>
            <div className="space-y-6">
              {metrics.map(({ label, value, suffix }) => (
                <div key={label} className="flex items-end justify-between border-b border-slate-700 pb-6 last:border-0 last:pb-0">
                  <span className="text-slate-400 text-sm">{label}</span>
                  <span className="text-3xl font-black text-emerald-400 tabular-nums">
                    {value}
                    <span className="text-emerald-500">{suffix}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-2 text-slate-500 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Updated in real-time
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-emerald-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { num: '200+', label: 'Clients' },
            { num: '5 Yrs', label: 'Experience' },
            { num: '98%', label: 'Retention' },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="text-5xl font-black">{num}</p>
              <p className="mt-2 text-emerald-100 text-sm font-semibold uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 text-center mb-4">What We Do</h2>
          <p className="text-slate-500 text-center max-w-xl mx-auto mb-16">
            End-to-end SEO services designed to increase visibility, drive traffic, and grow revenue.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-10 shadow-md hover:shadow-xl transition-shadow bg-white">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 text-2xl mb-6">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            Let's Work Together
          </span>
          <h2 className="text-5xl font-black mb-4">Ready to Rank?</h2>
          <p className="text-slate-400 text-lg max-w-xl mb-10">
            Let's build an SEO strategy tailored to your goals — and turn your website into your top-performing sales channel.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-base px-10 py-4 rounded-lg transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

    </main>
  );
}
