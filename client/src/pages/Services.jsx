import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

/* ── Data ── */

const stats = [
  { value: '18+', label: 'Service Areas' },
  { value: '800+', label: 'Client Case Studies' },
  { value: '200+', label: 'Active Clients' },
  { value: '97%', label: 'Retention Rate' },
];

const seoServices      = servicesData.filter(s => s.category === 'SEO Services');
const paidSocialServices = servicesData.filter(s => s.category === 'Paid & Social Media');
const webDevServices   = servicesData.filter(s => s.category === 'Web & Development');

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'Free 30-minute strategy call to understand your business, goals, and current digital situation.' },
  { num: '02', title: 'Full Audit', desc: 'Comprehensive audit of your site, competitors, and market to identify the highest-leverage opportunities.' },
  { num: '03', title: 'Strategy & Roadmap', desc: 'A clear, prioritized action plan with expected timelines and measurable milestones.' },
  { num: '04', title: 'Execution', desc: 'We implement the strategy with precision — on time, on budget, with regular communication.' },
  { num: '05', title: 'Reporting & Growth', desc: 'Monthly reports tracking rankings, traffic, leads, and ROI — with ongoing optimization.' },
];

/* ── Sub-components ── */

function ServiceCard({ slug, icon, title, tagline, overview, includes, proof }) {
  return (
    <div className="bg-white border border-slate-100 shadow-md hover:shadow-xl transition-shadow">
      {/* Card header */}
      <div className="border-b border-slate-100 p-8 flex items-start gap-5">
        <div className="w-14 h-14 flex items-center justify-center bg-slate-50 border border-slate-100 text-2xl flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-black text-black leading-tight mb-1">{title}</h3>
          <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest">{tagline}</p>
        </div>
      </div>

      {/* Card body */}
      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4">{overview}</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 px-5 py-4">
            <p className="text-xs font-black text-emerald-700 uppercase tracking-widest mb-1">Typical Result</p>
            <p className="text-sm text-emerald-800 font-medium leading-snug">{proof.stat} {proof.statLabel}</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest mb-4">What's Included</p>
          <ul className="space-y-2.5">
            {includes.slice(0, 6).map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-8 pb-8 flex gap-3">
        <Link
          to={`/services/${slug}`}
          className="inline-block bg-black hover:bg-[#0d3d6e] text-white text-xs font-black uppercase tracking-widest px-6 py-3 transition-colors"
        >
          Learn More
        </Link>
        <Link
          to="/booking"
          className="inline-block border border-slate-200 hover:border-black text-black text-xs font-black uppercase tracking-widest px-6 py-3 transition-colors"
        >
          Get a Proposal
        </Link>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="mb-12">
      <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3">
        {eyebrow}
      </span>
      <h2 className="text-4xl font-black text-black mb-4">{title}</h2>
      {desc && <p className="text-slate-500 text-base max-w-2xl leading-relaxed">{desc}</p>}
    </div>
  );
}

/* ── Page ── */

export default function Services() {
  return (
    <main className="pt-[104px] bg-white">

      {/* ── Hero ── */}
      <section className="bg-white py-24 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-5">
            Full-Service Digital Agency
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-black">
            Every Service You Need<br />
            <span className="text-emerald-600">Under One Roof</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed mb-12">
            From technical SEO and paid ads to web development and mobile apps — we deliver measurable results across every digital channel. One agency. One strategy. Zero guesswork.
          </p>
          {/* Stats row */}
          <div className="flex flex-wrap gap-10">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-black text-black">{value}</p>
                <p className="text-slate-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick jump nav ── */}
      <section className="bg-[#0d3d6e] px-6 py-5 sticky top-[104px] z-40">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-x-8 gap-y-2">
          {[
            { label: 'SEO Services', href: '#technical-seo' },
            { label: 'Paid & Social', href: '#ppc-google-ads' },
            { label: 'Web & Development', href: '#website-design' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-blue-200 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* ── SEO Services ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="SEO Services"
            title="Search Engine Optimization"
            desc="Data-driven SEO strategies that build lasting organic visibility. We work across every dimension of SEO — technical, on-page, off-page, and local — to drive compounding growth."
          />
          <div className="space-y-8">
            {seoServices.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── Paid & Social ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Paid & Social Media"
            title="Paid Advertising & Content"
            desc="Performance-driven campaigns across every major paid and social channel. We build funnels, manage budgets, and optimize relentlessly until every shilling works harder."
          />
          <div className="space-y-8">
            {paidSocialServices.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── Web & Development ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Web & Development"
            title="Design, Development & Apps"
            desc="We build digital products that are fast, beautiful, and built to convert. From landing pages to full web applications, every build is engineered for performance and growth."
          />
          <div className="space-y-8">
            {webDevServices.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#0d3d6e] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
            Our Process
          </span>
          <h2 className="text-4xl font-black text-white mb-16">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num}>
                <p className="text-5xl font-black text-blue-800 mb-4">{num}</p>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us strip ── */}
      <section className="bg-slate-50 py-16 px-6 border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: '📅', title: 'Month-to-Month', desc: 'No long-term lock-ins. Stay because of results, not contracts.' },
            { icon: '📊', title: 'Full Transparency', desc: 'You own all accounts, data, and assets. Clear reporting every month.' },
            { icon: '🏆', title: 'Proven Results', desc: '800+ case studies across every industry and budget level.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="text-2xl">{icon}</span>
              <div>
                <p className="text-sm font-black text-black mb-1">{title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
            Get Started
          </span>
          <h2 className="text-5xl font-black mb-4">Not Sure Where to Start?</h2>
          <p className="text-slate-400 text-lg max-w-xl mb-10">
            Book a free 30-minute strategy call. We'll audit your current digital presence and recommend exactly which services will move the needle fastest.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/booking"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-10 py-4 transition-colors"
            >
              Book a Free Call
            </Link>
            <Link
              to="/pricing"
              className="inline-block border border-slate-600 hover:border-white text-white font-semibold text-base px-10 py-4 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
