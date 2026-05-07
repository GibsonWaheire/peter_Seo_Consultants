import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Book a Call', to: '/booking' },
];

const serviceLinks = [
  { label: 'Technical SEO', to: '/services/technical-seo' },
  { label: 'On-Page SEO', to: '/services/on-page-seo' },
  { label: 'Local SEO', to: '/services/local-seo' },
  { label: 'E-Commerce SEO', to: '/services/ecommerce-seo' },
  { label: 'Link Building', to: '/services/link-building' },
  { label: 'PPC / Google Ads', to: '/services/ppc-google-ads' },
  { label: 'Web Design', to: '/services/website-design' },
  { label: 'Content Strategy', to: '/services/content-marketing' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d3d6e] text-blue-200 border-t border-blue-900">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block mb-4">
            <span className="border-2 border-white px-3 py-1.5 text-white font-black text-base tracking-widest uppercase">
              Goshen
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6 text-blue-300">
            Kenya's top-rated SEO agency. Data-driven strategies that deliver measurable results for businesses that want to grow online.
          </p>
          <div className="flex gap-3">
            {['LinkedIn', 'Twitter', 'Facebook'].map((s) => (
              <span
                key={s}
                className="text-xs border border-blue-600 hover:border-white hover:text-white px-3 py-1.5 cursor-pointer transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-5 pb-2 border-b border-blue-800">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-sm text-blue-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#1a5fa8]">›</span> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-5 pb-2 border-b border-blue-800">
            Our Services
          </h4>
          <ul className="space-y-2.5">
            {serviceLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-sm text-blue-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#1a5fa8]">›</span> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-5 pb-2 border-b border-blue-800">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#1a5fa8] mt-0.5 text-base shrink-0">📍</span>
              <span className="text-blue-300 leading-relaxed">
                Timestar Apartment,<br />
                Mirema Springs,<br />
                Nairobi, Kenya
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#1a5fa8] text-base shrink-0">📞</span>
              <a
                href="tel:+254727957175"
                className="text-blue-300 hover:text-white transition-colors"
              >
                +254 727 957 175
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#1a5fa8] text-base shrink-0">✉️</span>
              <a
                href="mailto:hello@goshen.co.ke"
                className="text-blue-300 hover:text-white transition-colors"
              >
                hello@goshen.co.ke
              </a>
            </li>
          </ul>
          <Link
            to="/booking"
            className="inline-block mt-6 bg-[#1a5fa8] hover:bg-white hover:text-[#0d3d6e] text-white text-xs font-black px-5 py-3 uppercase tracking-widest transition-colors"
          >
            Book a Free Call
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-500">
          <p>© {new Date().getFullYear()} Goshen Writing and Consultancies. All rights reserved.</p>
          <p className="text-blue-600">
            Developed by{' '}
            <span className="text-blue-400 font-semibold">Gibson Giteru</span>
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms"   className="hover:text-blue-300 transition-colors">Terms of Service</Link>
            <Link to="/refund"  className="hover:text-blue-300 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
