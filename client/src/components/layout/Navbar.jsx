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
    label: 'Contact Us',
    to: '/booking',
    dropdown: null,
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top bar ── */}
      <div className="bg-[#1a5fa8] h-9 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="text-white text-xs font-semibold hidden sm:block">
            📊 800+ Client Case Studies — Proving Our Results
          </span>
          <div className="flex items-center gap-6 ml-auto">
            <span className="hidden md:flex items-center gap-1.5 text-white text-xs font-medium">
              📞 +254 712 000 000
            </span>
            <Link
              to="/booking"
              className="text-white text-xs font-black uppercase tracking-widest hover:text-yellow-300 transition-colors"
            >
              Get a Free Proposal
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 border-2 border-[#0d3d6e] px-3 py-1.5 text-[#0d3d6e] font-black text-base tracking-widest uppercase hover:bg-[#0d3d6e] hover:text-white transition-colors"
          >
            Peter SEO
          </Link>

          {/* Nav with dropdowns */}
          <div className="hidden lg:flex items-center">
            {navItems.map(({ label, to, dropdown }) => (
              <div key={label} className="group relative">
                <Link
                  to={to}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#1a5fa8] transition-colors whitespace-nowrap"
                >
                  {label}
                  {dropdown && <span className="text-[10px] text-slate-400 ml-0.5">▾</span>}
                </Link>
                {dropdown && (
                  <div className="absolute hidden group-hover:block top-full left-0 pt-1 z-50 min-w-[210px]">
                    <div className="bg-white border border-slate-200 shadow-xl py-2">
                      {dropdown.map((item) => (
                        <Link
                          key={item}
                          to={to}
                          className="block px-5 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1a5fa8] transition-colors"
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
            className="hidden lg:inline-block text-[#1a5fa8] hover:text-[#0d3d6e] text-sm font-black uppercase tracking-widest transition-colors shrink-0"
          >
            Client Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
