import { Link } from 'react-router-dom';

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
    <main className="pt-16 bg-white">

      {/* ── Hero ── */}
      <section
        className="relative bg-slate-50 text-black min-h-screen flex items-center px-6 border-b border-slate-200 overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">

          {/* Left — copy */}
          <div>
            <span className="inline-block text-slate-500 text-xs font-bold uppercase tracking-widest mb-5">
              SEO Consultants
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6 text-black">
              Rank Higher.{' '}
              <span className="text-slate-400">Grow Faster.</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-lg mb-10">
              Data-driven SEO strategies that deliver real, measurable results for your business.
              We turn search intent into sustainable organic growth.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/booking"
                className="bg-black hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Book a Call
              </Link>
              <Link
                to="/services"
                className="border border-slate-300 hover:border-black text-slate-700 hover:text-black font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right — abstract visual */}
          <div className="relative bg-slate-50 rounded-3xl border border-slate-200 p-8 overflow-hidden">
            {/* Dot grid decoration */}
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />

            {/* Bar chart */}
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                Organic Traffic Growth
              </p>
              <div className="flex items-end gap-2 h-40 mb-6">
                {[28, 42, 35, 55, 48, 70, 62, 88, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-md transition-all ${
                      i === 9 ? 'bg-black' : i >= 6 ? 'bg-slate-400' : 'bg-slate-200'
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex items-end justify-between border-t border-slate-200 pt-5">
                <div>
                  <p className="text-4xl font-black text-black">+143%</p>
                  <p className="text-slate-400 text-xs mt-1">avg. traffic increase</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-black">2,400+</p>
                  <p className="text-slate-400 text-xs mt-1">keywords ranked</p>
                </div>
              </div>
            </div>

            {/* Corner badge */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-black opacity-20" />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { num: '200+', label: 'Clients' },
            { num: '5 Yrs', label: 'Experience' },
            { num: '98%', label: 'Retention' },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="text-5xl font-black">{num}</p>
              <p className="mt-2 text-slate-400 text-sm font-semibold uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-black text-center mb-4">What We Do</h2>
          <p className="text-slate-500 text-center max-w-xl mx-auto mb-16">
            End-to-end SEO services designed to increase visibility, drive traffic, and grow revenue.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-10 shadow-md hover:shadow-xl transition-shadow bg-white border border-slate-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 text-2xl mb-6">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
            Let's Work Together
          </span>
          <h2 className="text-5xl font-black mb-4">Ready to Rank?</h2>
          <p className="text-slate-400 text-lg max-w-xl mb-10">
            Let's build an SEO strategy tailored to your goals — and turn your website into your top-performing sales channel.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-white hover:bg-slate-100 text-black font-semibold text-base px-10 py-4 rounded-lg transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

    </main>
  );
}
