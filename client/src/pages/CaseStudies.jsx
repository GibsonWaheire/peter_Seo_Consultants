import { Link } from 'react-router-dom';

const studies = [
  {
    id: 'ecommerce',
    industry: 'E-Commerce',
    client: 'Online Retailer — Fashion & Apparel',
    result: '+320% Organic Revenue',
    duration: '9 Months',
    icon: '🛒',
    challenge:
      'A mid-sized online fashion retailer was losing ground to larger competitors. Their product pages were thin on content, had duplicate title tags, and zero backlink authority.',
    solution:
      'We rebuilt their site architecture, wrote keyword-rich product descriptions, launched a content hub targeting high-intent buying keywords, and executed a targeted link-building campaign through fashion media outreach.',
    metrics: [
      { label: 'Organic Traffic', value: '+280%' },
      { label: 'Revenue from SEO', value: '+320%' },
      { label: 'First-Page Keywords', value: '1,400+' },
      { label: 'Backlinks Earned', value: '340+' },
    ],
  },
  {
    id: 'legal',
    industry: 'Legal Services',
    client: 'Law Firm — Nairobi, Kenya',
    result: '+195% Qualified Leads',
    duration: '6 Months',
    icon: '⚖️',
    challenge:
      'A top Nairobi law firm had virtually no online presence. Competitors dominated search for high-value practice areas including corporate law, employment law, and conveyancing.',
    solution:
      'We developed a practice-area content strategy with 40+ authoritative pages, optimized Google Business Profile for local visibility, and built citations across Kenyan legal directories.',
    metrics: [
      { label: 'Qualified Leads', value: '+195%' },
      { label: 'Local Ranking', value: 'Top 3' },
      { label: 'Organic Sessions', value: '+240%' },
      { label: 'New Practice Pages', value: '40+' },
    ],
  },
  {
    id: 'real-estate',
    industry: 'Real Estate',
    client: 'Property Agency — Kenya',
    result: '+410% Property Enquiries',
    duration: '12 Months',
    icon: '🏠',
    challenge:
      'A real estate agency relied entirely on paid ads with no organic strategy. They had high ad spend and shrinking margins with no lasting digital asset.',
    solution:
      'We built a comprehensive local SEO strategy — area guides, neighbourhood content, structured data for listings, and a review generation system that pushed them to the top of Maps in 3 Nairobi districts.',
    metrics: [
      { label: 'Property Enquiries', value: '+410%' },
      { label: 'Google Maps Rank', value: '#1 in 3 Districts' },
      { label: 'Organic Traffic', value: '+330%' },
      { label: 'Ad Spend Reduced', value: '-60%' },
    ],
  },
  {
    id: 'healthcare',
    industry: 'Healthcare',
    client: 'Private Medical Clinic — Nairobi',
    result: '+175% Patient Bookings',
    duration: '8 Months',
    icon: '🏥',
    challenge:
      'A private clinic was invisible online despite excellent patient outcomes. Prospective patients searching for specialists were finding competitors first.',
    solution:
      'We created a full E-E-A-T content strategy featuring doctor bios, symptom-to-service content, local SEO optimization, and a schema markup implementation that produced rich results in Google search.',
    metrics: [
      { label: 'Online Bookings', value: '+175%' },
      { label: 'Organic Visitors', value: '+210%' },
      { label: 'Keywords Ranking', value: '800+' },
      { label: 'Rich Snippets', value: '12 Active' },
    ],
  },
  {
    id: 'finance',
    industry: 'Finance & Banking',
    client: 'Financial Services Brand — East Africa',
    result: '+140% Organic Lead Volume',
    duration: '10 Months',
    icon: '💳',
    challenge:
      'Operating in a heavily regulated, high-competition YMYL niche, the client needed a compliant SEO strategy that built authority without risking Google penalties.',
    solution:
      'We designed a trust-first content strategy with financial expert contributors, applied YMYL best practices, earned links from reputable financial publications, and improved Core Web Vitals from failing to excellent.',
    metrics: [
      { label: 'Organic Leads', value: '+140%' },
      { label: 'Domain Authority', value: '+28 pts' },
      { label: 'Core Web Vitals', value: 'All Green' },
      { label: 'Editorial Links', value: '120+' },
    ],
  },
  {
    id: 'saas',
    industry: 'SaaS & Technology',
    client: 'B2B Software Company — Africa',
    result: '+260% Trial Sign-ups',
    duration: '11 Months',
    icon: '💻',
    challenge:
      'A B2B SaaS startup had a great product but no inbound engine. Blog content was sparse, backlink profile was near-zero, and organic trials were single digits per month.',
    solution:
      'We built a full-funnel content engine — TOFU awareness posts, MOFU comparison guides, BOFU landing pages — combined with digital PR and partner link building to establish topical authority.',
    metrics: [
      { label: 'Trial Sign-ups', value: '+260%' },
      { label: 'Organic Traffic', value: '+380%' },
      { label: 'Content Published', value: '90+ Pages' },
      { label: 'Referring Domains', value: '+85' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <main className="pt-[104px] bg-white">

      {/* Hero */}
      <section className="bg-white py-24 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-5">
            Proven Results
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-black">
            800+ Client<br />
            <span className="text-emerald-600">Case Studies</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
            Real businesses. Real growth. Every case study below is backed by data and achieved through our proven SEO process.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {studies.map(({ id, industry, client, result, duration, icon, challenge, solution, metrics }) => (
            <div
              key={id}
              id={id}
              className="scroll-mt-[120px] border border-slate-100 shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="bg-[#0d3d6e] px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{icon}</span>
                  <div>
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">{industry}</p>
                    <h2 className="text-white text-xl font-black">{client}</h2>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 text-2xl font-black">{result}</p>
                  <p className="text-slate-400 text-xs">{duration}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest mb-3">The Challenge</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{challenge}</p>
                  <h3 className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest mt-8 mb-3">Our Solution</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{solution}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 content-start">
                  {metrics.map(({ label, value }) => (
                    <div key={label} className="bg-slate-50 border border-slate-100 p-5">
                      <p className="text-2xl font-black text-emerald-600 leading-none mb-1">{value}</p>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
            Your Turn
          </span>
          <h2 className="text-5xl font-black mb-4">Ready to Be Our Next Case Study?</h2>
          <p className="text-slate-400 text-lg max-w-xl mb-10">
            Book a free strategy call and we'll show you exactly what growth looks like for your business.
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
