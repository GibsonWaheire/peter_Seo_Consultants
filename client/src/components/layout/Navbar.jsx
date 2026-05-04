import { Link } from 'react-router-dom';

const navItems = [
  {
    label: 'Services',
    to: '/services',
    dropdown: ['SEO Audit', 'On-Page SEO', 'Link Building', 'Technical SEO', 'Local SEO', 'Content Strategy'],
  },
  {
    label: 'Case Studies',
    to: '/case-studies',
    dropdown: ['All Case Studies', 'E-Commerce', 'Local Business', 'Enterprise'],
  },
  {
    label: 'Pricing',
    to: '/pricing',
    dropdown: ['SEO Packages', 'Custom Quote'],
  },
  {
    label: 'Reviews',
    to: '/reviews',
    dropdown: ['Client Reviews', 'Video Testimonials'],
  },
  {
    label: 'Contact',
    to: '/booking',
    dropdown: null,
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Announcement Bar ── */}
      <div className="bg-black h-9 flex items-center justify-center px-4">
        <p className="text-white text-xs font-bold uppercase tracking-widest text-center">
          #1 SEO Consultants in Kenya
        </p>
      </div>

      {/* ── Navbar ── */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 border-2 border-blue-600 px-3 py-1.5 text-black font-black text-base tracking-widest uppercase hover:bg-blue-600 hover:text-white transition-colors"
          >
            Peter SEO
          </Link>

          {/* Nav Links with dropdowns */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, to, dropdown }) => (
              <div key={label} className="group relative">
                <Link
                  to={to}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-black transition-colors"
                >
                  {label}
                  {dropdown && <span className="text-[10px] mt-px text-slate-400">▾</span>}
                </Link>

                {dropdown && (
                  <div className="absolute hidden group-hover:block top-full left-0 pt-1 z-50 min-w-[200px]">
                    <div className="bg-white border border-slate-200 shadow-xl py-2">
                      {dropdown.map((item) => (
                        <Link
                          key={item}
                          to={to}
                          className="block px-5 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-black transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Client Login */}
          <Link
            to="/login"
            className="hidden md:inline-block text-blue-600 hover:text-blue-800 text-sm font-bold uppercase tracking-widest transition-colors shrink-0"
          >
            Client Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
