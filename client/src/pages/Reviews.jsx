import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

const googleReviews = [
  { name: 'James Mwangi', role: 'CEO, Retail Brand', rating: 5, text: 'Iknus took our website from page 4 to page 1 for our top 3 keywords in under 5 months. The reporting is transparent, the team is responsive, and the results speak for themselves.' },
  { name: 'Amina Hassan', role: 'Marketing Director, Fintech', rating: 5, text: 'We\'ve worked with three SEO agencies before Iknus. None came close. Within 8 months, our organic leads tripled and our cost per acquisition dropped by 40%.' },
  { name: 'David Otieno', role: 'Founder, LegalTech Startup', rating: 5, text: 'Exceptional service. They explained every step clearly and the results exceeded our projections. Our trial sign-ups from organic search are now our #1 acquisition channel.' },
  { name: 'Grace Kamau', role: 'Owner, E-Commerce Store', rating: 5, text: 'I was skeptical about SEO at first, but the team showed me exactly what they were doing and why. 6 months in and our revenue from organic is up 280%. Worth every shilling.' },
  { name: 'Peter Njoroge', role: 'Head of Growth, SaaS Company', rating: 5, text: 'Professional, results-driven, and honest about timelines. They set realistic expectations and then beat them. I recommend Iknus to every founder I meet.' },
  { name: 'Sarah Achieng', role: 'Director, Healthcare Group', rating: 5, text: 'Our patient enquiries from Google doubled in 7 months. The local SEO work they did for our clinics was particularly impressive. Highly recommended.' },
];

const facebookReviews = [
  { name: 'Brian Kipchoge', role: 'Property Developer', rating: 5, text: 'Hired them for local SEO and within 4 months we were ranking #1 in three Nairobi neighbourhoods on Google Maps. Enquiries went through the roof.' },
  { name: 'Fatuma Ali', role: 'Restaurant Owner', rating: 5, text: 'Their team is amazing. We now appear in the top 3 on Google for food delivery searches in Westlands. Foot traffic and online orders are both up significantly.' },
  { name: 'Michael Odhiambo', role: 'Consultant, HR Firm', rating: 5, text: 'Very professional and thorough. They identified issues on our website that we had no idea about and fixed them quickly. Organic traffic improved within weeks.' },
  { name: 'Esther Wambui', role: 'Principal, Private School', rating: 5, text: 'We wanted to attract more enrolments through search. They built out a full content strategy and within 6 months our website was generating consistent enquiries.' },
];

const clutchReviews = [
  {
    name: 'Anonymous',
    role: 'VP Marketing, B2B Software',
    rating: 5,
    text: 'Iknus delivered a comprehensive technical audit, fixed critical crawl issues, and built a content strategy that drove a 260% increase in organic trial sign-ups over 11 months. Exceptional ROI.',
    project: 'SEO Growth — 11 Months',
  },
  {
    name: 'Anonymous',
    role: 'COO, Financial Services',
    rating: 5,
    text: 'We needed a compliant SEO strategy in a heavily regulated niche. They understood YMYL guidelines, produced expert-quality content, and doubled our organic lead volume within 10 months.',
    project: 'SEO Enterprise — 10 Months',
  },
  {
    name: 'Anonymous',
    role: 'Director, E-Commerce',
    rating: 5,
    text: 'Revenue from organic search grew by 320% in 9 months. The on-page and content work was meticulous. Link building was 100% white-hat. Reporting was always on time and easy to understand.',
    project: 'SEO Growth — 9 Months',
  },
];

const videoTestimonials = [
  { name: 'James Mwangi', role: 'CEO, Retail Brand', thumbnail: '▶', duration: '2:45', topic: 'From page 4 to page 1 in 5 months' },
  { name: 'Amina Hassan', role: 'Fintech Marketing Director', thumbnail: '▶', duration: '3:10', topic: 'Triple organic leads, 40% lower CPA' },
  { name: 'David Otieno', role: 'LegalTech Founder', thumbnail: '▶', duration: '2:20', topic: 'SEO became our #1 acquisition channel' },
  { name: 'Grace Kamau', role: 'E-Commerce Owner', thumbnail: '▶', duration: '2:55', topic: '+280% organic revenue in 6 months' },
];

const resultHighlights = [
  { metric: '+320%', label: 'E-Commerce Revenue', industry: 'Fashion Retail' },
  { metric: '+410%', label: 'Property Enquiries', industry: 'Real Estate' },
  { metric: '+260%', label: 'Trial Sign-ups', industry: 'SaaS / B2B' },
  { metric: '+195%', label: 'Qualified Leads', industry: 'Legal Services' },
  { metric: '+175%', label: 'Patient Bookings', industry: 'Healthcare' },
  { metric: '+140%', label: 'Organic Lead Volume', industry: 'Finance' },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  usePageMeta({
    title: 'Client Reviews & Testimonials | Iknus Consultants Kenya',
    description: 'See what Kenyan businesses say about Iknus Consultants. Real reviews from SEO, Google Ads, web design & development clients across Nairobi and Kenya.',
    canonical: 'https://iknusconsultants.com/reviews',
  });
  return (
    <main className="pt-[104px] bg-white">

      {/* Hero */}
      <section className="bg-white py-24 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-5">
            Client Reviews
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-black">
            What Our Clients<br />
            <span className="text-emerald-600">Say About Us</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
            Hundreds of verified reviews across Google, Facebook, and Clutch. Real clients, real results.
          </p>
          {/* Summary badges */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { platform: 'Google', rating: '4.8★', count: '230+ reviews' },
              { platform: 'Facebook', rating: '4.8★', count: '90+ reviews' },
              { platform: 'Clutch', rating: '4.9★', count: '45+ verified reviews' },
            ].map(({ platform, rating, count }) => (
              <div key={platform} className="flex items-center gap-3 border border-slate-200 px-5 py-3">
                <div>
                  <p className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest">{platform}</p>
                  <p className="text-xl font-black text-black">{rating}</p>
                  <p className="text-xs text-slate-400">{count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section id="google" className="scroll-mt-[120px] bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-white border border-slate-200 shadow flex items-center justify-center font-black text-lg text-blue-600">G</div>
            <div>
              <h2 className="text-2xl font-black text-black">Google Reviews</h2>
              <p className="text-slate-400 text-xs">4.8★ from 230+ verified clients</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.map(({ name, role, rating, text }) => (
              <div key={name} className="bg-white border border-slate-100 shadow-md p-6 hover:shadow-lg transition-shadow">
                <Stars count={rating} />
                <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-6">"{text}"</p>
                <div>
                  <p className="text-sm font-bold text-black">{name}</p>
                  <p className="text-xs text-slate-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Reviews */}
      <section id="facebook" className="scroll-mt-[120px] bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-blue-700 flex items-center justify-center font-black text-lg text-white">f</div>
            <div>
              <h2 className="text-2xl font-black text-black">Facebook Reviews</h2>
              <p className="text-slate-400 text-xs">4.8★ from 90+ satisfied customers</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facebookReviews.map(({ name, role, rating, text }) => (
              <div key={name} className="bg-white border border-slate-100 shadow-md p-6 hover:shadow-lg transition-shadow">
                <Stars count={rating} />
                <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-6">"{text}"</p>
                <div>
                  <p className="text-sm font-bold text-black">{name}</p>
                  <p className="text-xs text-slate-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clutch Reviews */}
      <section id="clutch" className="scroll-mt-[120px] bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-[#ff3d2e] flex items-center justify-center font-black text-lg text-white">C</div>
            <div>
              <h2 className="text-2xl font-black text-black">Clutch Reviews</h2>
              <p className="text-slate-400 text-xs">B2B verified client feedback & scores</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {clutchReviews.map(({ name, role, rating, text, project }) => (
              <div key={role} className="bg-white border border-slate-100 shadow-md p-6 hover:shadow-lg transition-shadow">
                <Stars count={rating} />
                <p className="text-[10px] font-bold text-[#1a5fa8] uppercase tracking-widest mt-4 mb-2">{project}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">"{text}"</p>
                <div>
                  <p className="text-sm font-bold text-black">{name}</p>
                  <p className="text-xs text-slate-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section id="video" className="scroll-mt-[120px] bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-black mb-3">Video Testimonials</h2>
          <p className="text-slate-500 text-sm mb-12">Watch clients share their real results in their own words.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.map(({ name, role, thumbnail, duration, topic }) => (
              <div key={name} className="bg-white border border-slate-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="bg-[#0d3d6e] h-36 flex items-center justify-center relative">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <span className="text-white text-2xl ml-1">{thumbnail}</span>
                  </div>
                  <span className="absolute bottom-2 right-3 text-white text-xs font-semibold">{duration}</span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-emerald-600 font-semibold mb-1">{topic}</p>
                  <p className="text-sm font-bold text-black">{name}</p>
                  <p className="text-xs text-slate-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Results */}
      <section id="case-studies" className="scroll-mt-[120px] bg-[#0d3d6e] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
            Data-Backed Performance
          </span>
          <h2 className="text-3xl font-black text-white mb-12">Case Study Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resultHighlights.map(({ metric, label, industry }) => (
              <div key={label} className="bg-white/10 border border-white/20 p-8">
                <p className="text-4xl font-black text-emerald-400 mb-2">{metric}</p>
                <p className="text-white font-bold text-base mb-1">{label}</p>
                <p className="text-blue-200 text-xs">{industry}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/case-studies"
              className="inline-block border border-white text-white font-bold text-sm px-8 py-3 hover:bg-white hover:text-[#0d3d6e] transition-colors"
            >
              Read Full Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
            Join 200+ Happy Clients
          </span>
          <h2 className="text-5xl font-black mb-4">Ready to Get Results Like These?</h2>
          <p className="text-slate-400 text-lg max-w-xl mb-10">
            Book a free strategy call and we'll show you exactly what's possible for your business.
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
