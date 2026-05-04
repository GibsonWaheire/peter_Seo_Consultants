import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-black font-bold text-lg tracking-tight">
          <span className="w-2.5 h-2.5 rounded-full bg-black inline-block" />
          Peter SEO
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', to: '/' },
            { label: 'Services', to: '/services' },
            { label: 'Book a Call', to: '/booking' },
          ].map(({ label, to }) => (
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
          className="bg-black hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
