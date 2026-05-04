import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/booking' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-black font-black text-xl tracking-tight shrink-0">
          Peter<span className="text-emerald-600">SEO</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-black' : 'text-slate-500 hover:text-black'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/booking"
          className="hidden md:inline-block bg-black hover:bg-zinc-800 text-white text-sm font-semibold px-5 py-2.5 transition-colors shrink-0"
        >
          Get a Proposal
        </Link>
      </div>
    </nav>
  );
}
