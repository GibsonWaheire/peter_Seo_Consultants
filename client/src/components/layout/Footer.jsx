import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Book a Call', to: '/booking' },
];

const serviceLinks = [
  'SEO Audit',
  'On-Page SEO',
  'Link Building',
  'Technical SEO',
  'Local SEO',
  'Content Strategy',
];

export default function Footer() {
  return (
    <footer className="bg-black text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="text-white font-black text-xl mb-4">
            Peter<span className="text-emerald-600">SEO</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Data-driven SEO strategies that deliver real, measurable results for businesses that want to grow.
          </p>
          <div className="flex gap-3">
            {['LinkedIn', 'Twitter', 'Facebook'].map((s) => (
              <span
                key={s}
                className="text-xs border border-slate-700 hover:border-emerald-600 hover:text-emerald-600 px-3 py-1.5 rounded-md cursor-pointer transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="text-sm hover:text-emerald-600 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map((s) => (
              <li key={s} className="text-sm">{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>hello@peterseo.com</li>
            <li>+1 (555) 000-0000</li>
            <li className="leading-relaxed">123 Growth Ave,<br />San Francisco, CA 94103</li>
          </ul>
          <Link
            to="/booking"
            className="inline-block mt-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 transition-colors"
          >
            Book a Free Call
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Peter SEO Consultants. All rights reserved.</p>
          <div className="flex gap-5">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
