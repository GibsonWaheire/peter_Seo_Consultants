import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────
   Mega-menu for Services (3 grouped cols)
───────────────────────────────────────── */
const serviceGroups = [
  {
    category: 'SEO Services',
    items: [
      { title: 'Technical SEO', desc: 'Fix crawl issues, speed & Core Web Vitals', to: '/services/technical-seo' },
      { title: 'On-Page SEO', desc: 'Optimize content, titles & meta structure', to: '/services/on-page-seo' },
      { title: 'Local SEO', desc: 'Dominate Google Maps & local search', to: '/services/local-seo' },
      { title: 'E-Commerce SEO', desc: 'Drive product traffic and increase sales', to: '/services/ecommerce-seo' },
      { title: 'Link Building', desc: 'Build authority with quality backlinks', to: '/services/link-building' },
      { title: 'Enterprise SEO', desc: 'Scalable strategies for large websites', to: '/services/enterprise-seo' },
    ],
  },
  {
    category: 'Paid & Social Media',
    items: [
      { title: 'PPC / Google Ads', desc: 'Targeted paid ads that maximize ROI', to: '/services/ppc-google-ads' },
      { title: 'Facebook & Instagram Ads', desc: 'Social campaigns engineered to convert', to: '/services/facebook-instagram-ads' },
      { title: 'Email Marketing', desc: 'Nurture leads with smart automation', to: '/services/email-marketing' },
      { title: 'SMS Marketing', desc: 'Reach customers instantly on mobile', to: '/services/sms-marketing' },
      { title: 'Content Marketing', desc: 'Authority content that ranks and converts', to: '/services/content-marketing' },
      { title: 'Conversion Rate Optimization', desc: 'Turn more visitors into paying customers', to: '/services/conversion-rate-optimization' },
    ],
  },
  {
    category: 'Web & Development',
    items: [
      { title: 'Website Design', desc: 'Beautiful, conversion-focused websites', to: '/services/website-design' },
      { title: 'Web Development', desc: 'Custom builds on modern frameworks', to: '/services/web-development' },
      { title: 'E-Commerce Development', desc: 'Shopify, WooCommerce & custom stores', to: '/services/ecommerce-development' },
      { title: 'Mobile App Development', desc: 'iOS and Android apps built to scale', to: '/services/mobile-app-development' },
      { title: 'Custom Web Applications', desc: 'Bespoke tools to automate your business', to: '/services/custom-web-applications' },
      { title: 'API & System Integrations', desc: 'Connect your CRM, ERP & third-party tools', to: '/services/api-system-integrations' },
    ],
  },
];

/* ─────────────────────────────────────────
   Standard dropdowns for other nav items
───────────────────────────────────────── */
const navItems = [
  {
    label: 'Services',
    to: '/services',
    mega: true,
  },
  {
    label: 'Case Studies',
    to: '/case-studies',
    dropdown: [
      { title: 'E-Commerce Results', desc: 'How we grew an online retailer by +320%', to: '/case-studies#ecommerce' },
      { title: 'Legal Services', desc: 'Lead generation for law firms in Nairobi', to: '/case-studies#legal' },
      { title: 'Real Estate', desc: 'Property visibility & organic lead generation', to: '/case-studies#real-estate' },
      { title: 'Healthcare', desc: 'Patient acquisition via organic search', to: '/case-studies#healthcare' },
      { title: 'Finance & Banking', desc: 'Compliant SEO strategies for financial brands', to: '/case-studies#finance' },
      { title: 'SaaS & Technology', desc: 'B2B growth through content & technical SEO', to: '/case-studies#saas' },
    ],
  },
  {
    label: 'Pricing',
    to: '/pricing',
    dropdown: [
      { title: 'SEO Starter', desc: 'Perfect for small businesses & startups', to: '/pricing#seo-starter' },
      { title: 'SEO Growth', desc: 'For scaling companies with serious ambition', to: '/pricing#seo-growth' },
      { title: 'SEO Enterprise', desc: 'High-volume strategies for large websites', to: '/pricing#seo-enterprise' },
      { title: 'PPC Management', desc: 'Paid ads management, fully managed for you', to: '/pricing#ppc-management' },
      { title: 'Web Design Packages', desc: 'Sites built to convert visitors into clients', to: '/pricing#web-design' },
      { title: 'Custom Strategy', desc: 'Bespoke pricing for unique business needs', to: '/pricing#custom-strategy' },
    ],
  },
  {
    label: 'Reviews',
    to: '/reviews',
    dropdown: [
      { title: 'Google Reviews', desc: '4.8★ from 230+ verified clients', to: '/reviews#google' },
      { title: 'Facebook Reviews', desc: '4.8★ from 90+ satisfied customers', to: '/reviews#facebook' },
      { title: 'Clutch Reviews', desc: 'B2B verified client feedback & scores', to: '/reviews#clutch' },
      { title: 'Video Testimonials', desc: 'Watch clients share their real results', to: '/reviews#video' },
      { title: 'Case Study Results', desc: 'Data-backed proof of our performance', to: '/reviews#case-studies' },
    ],
  },
  {
    label: 'Contact Us',
    to: '/booking',
    dropdown: [
      { title: 'Book a Strategy Call', desc: 'Free 30-minute consultation with an expert', to: '/booking' },
      { title: 'Get a Free Proposal', desc: 'Custom SEO roadmap for your website', to: '/booking' },
      { title: 'Send Us a Message', desc: 'We respond within 24 hours, guaranteed', to: '/booking' },
      { title: 'Our Nairobi Office', desc: 'Visit us at our Kenya headquarters', to: '/booking' },
    ],
  },
];

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
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
            <a
              href="tel:+254727957175"
              className="hidden md:flex items-center gap-1.5 text-white text-xs font-medium hover:text-yellow-300 transition-colors"
            >
              📞 +254 727 957 175
            </a>
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

          {/* Nav links */}
          <div className="hidden lg:flex items-center">
            {navItems.map(({ label, to, mega, dropdown }) => (
              <div key={label} className="group relative">

                {/* Nav trigger */}
                <Link
                  to={to}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#1a5fa8] transition-colors whitespace-nowrap"
                >
                  {label}
                  {(mega || dropdown) && (
                    <span className="text-[10px] text-slate-400 ml-0.5">▾</span>
                  )}
                </Link>

                {/* ── Mega menu (Services) ── */}
                {mega && (
                  <div className="absolute hidden group-hover:block top-full left-0 pt-1 z-50 w-[720px]">
                    <div className="bg-white border border-slate-200 shadow-2xl">
                      {/* Header strip */}
                      <div className="bg-[#0d3d6e] px-6 py-3 flex items-center justify-between">
                        <p className="text-white text-xs font-black uppercase tracking-widest">All Services</p>
                        <Link to="/services" className="text-blue-300 text-xs font-semibold hover:text-white transition-colors">
                          View All →
                        </Link>
                      </div>
                      {/* 3 columns */}
                      <div className="grid grid-cols-3 divide-x divide-slate-100">
                        {serviceGroups.map(({ category, items }) => (
                          <div key={category} className="py-4">
                            <p className="px-5 pb-2 text-[10px] font-black text-[#1a5fa8] uppercase tracking-widest border-b border-slate-100 mb-2">
                              {category}
                            </p>
                            {items.map(({ title, desc, to: itemTo }) => (
                              <Link
                                key={title}
                                to={itemTo}
                                className="block px-5 py-2.5 hover:bg-[#f0f4f8] group/item transition-colors"
                              >
                                <p className="text-sm font-semibold text-slate-800 group-hover/item:text-[#1a5fa8] transition-colors leading-none mb-0.5">
                                  {title}
                                </p>
                                <p className="text-xs text-slate-400 leading-snug">{desc}</p>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Standard dropdown ── */}
                {!mega && dropdown && (
                  <div className="absolute hidden group-hover:block top-full left-0 pt-1 z-50 w-[280px]">
                    <div className="bg-white border border-slate-200 shadow-xl">
                      <div className="bg-[#0d3d6e] px-5 py-2.5">
                        <p className="text-white text-[10px] font-black uppercase tracking-widest">{label}</p>
                      </div>
                      {dropdown.map(({ title, desc, to: itemTo }) => (
                        <Link
                          key={title}
                          to={itemTo}
                          className="block px-5 py-3 hover:bg-[#f0f4f8] group/item border-b border-slate-50 last:border-0 transition-colors"
                        >
                          <p className="text-sm font-semibold text-slate-800 group-hover/item:text-[#1a5fa8] transition-colors leading-none mb-0.5">
                            {title}
                          </p>
                          <p className="text-xs text-slate-400 leading-snug">{desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/pay"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-black px-5 py-2 transition-colors uppercase tracking-widest"
            >
              Pay Now
            </Link>
            <Link
              to="/login"
              className="text-[#1a5fa8] hover:text-[#0d3d6e] text-sm font-black uppercase tracking-widest transition-colors"
            >
              Client Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
