import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PaymentSheet from '../components/PaymentSheet'

const PROJECTS = [
  // SEO Monthly Plans
  { group: 'SEO Monthly Plans', label: 'SEO Starter Plan' },
  { group: 'SEO Monthly Plans', label: 'SEO Growth Plan' },
  { group: 'SEO Monthly Plans', label: 'SEO Enterprise Plan' },
  // Individual / One-Off SEO
  { group: 'Individual SEO Services', label: 'Keyword Research Report' },
  { group: 'Individual SEO Services', label: 'Technical SEO Audit (One-time)' },
  { group: 'Individual SEO Services', label: 'On-Page SEO (per page)' },
  { group: 'Individual SEO Services', label: 'Meta Tags Optimization (5 pages)' },
  { group: 'Individual SEO Services', label: 'Schema Markup Setup' },
  { group: 'Individual SEO Services', label: 'Google Business Profile Setup' },
  { group: 'Individual SEO Services', label: 'Local SEO' },
  { group: 'Individual SEO Services', label: 'Link Building' },
  { group: 'Individual SEO Services', label: 'E-Commerce SEO' },
  // Content
  { group: 'Content & Writing', label: 'Technical Writing (1 article)' },
  { group: 'Content & Writing', label: 'Content Brief' },
  { group: 'Content & Writing', label: 'Blog Writing (Monthly)' },
  { group: 'Content & Writing', label: 'Content Strategy' },
  // Paid Advertising
  { group: 'Paid Advertising', label: 'PPC / Google Ads Management' },
  { group: 'Paid Advertising', label: 'Meta Ads (Facebook & Instagram)' },
  // Web
  { group: 'Web & Development', label: 'Landing Page Website' },
  { group: 'Web & Development', label: 'Simple Website' },
  { group: 'Web & Development', label: 'Business Website' },
  { group: 'Web & Development', label: 'E-Commerce Website' },
  { group: 'Web & Development', label: 'Web Design Package' },
  { group: 'Web & Development', label: 'Custom Web Application' },
  // Design & Branding
  { group: 'Design & Branding', label: 'Logo Design' },
  { group: 'Design & Branding', label: 'Business Card Design' },
  { group: 'Design & Branding', label: 'Flyer / Poster Design' },
  { group: 'Design & Branding', label: 'Company Profile Design' },
  { group: 'Design & Branding', label: 'Facebook Page Setup' },
  { group: 'Design & Branding', label: 'Social Media Profile Optimization' },
  { group: 'Design & Branding', label: 'Email Signature Design' },
  { group: 'Design & Branding', label: 'Monthly Social Management' },
  // Other
  { group: 'Other', label: 'Custom / Other' },
]

const PROJECT_SUGGESTIONS = {
  'SEO Starter Plan':               'Monthly SEO management — up to 10 keywords, full technical audit, on-page optimization, and monthly ranking report.',
  'SEO Growth Plan':                'Monthly SEO management — up to 30 keywords, content creation (4 posts/mo), link building (8 links/mo), and bi-weekly strategy calls.',
  'SEO Enterprise Plan':            'Enterprise SEO — unlimited keywords, aggressive link building (20+ links/mo), international SEO, weekly calls, and custom reporting.',
  'Keyword Research Report':        'In-depth keyword research report with priority targets, competitor gaps, and content recommendations.',
  'Technical SEO Audit (One-time)': 'Full technical SEO audit with prioritized recommendations for crawlability, speed, and indexation issues.',
  'On-Page SEO (per page)':         'Titles, meta descriptions, headings, internal links & schema markup optimized for a single page.',
  'Meta Tags Optimization (5 pages)':'Rewrite titles and meta descriptions for 5 key pages with click-through rate improvement in mind.',
  'Schema Markup Setup':            'Structured data implementation for products, services, FAQs, or local business — ready to validate.',
  'Google Business Profile Setup':  'Full GBP setup, verification support, categories, photos & review acquisition strategy.',
  'Local SEO':                      'Local SEO — Google Business Profile optimization, citation building, and local keyword targeting.',
  'Link Building':                  'High-authority link acquisition campaign to improve domain authority and organic rankings.',
  'E-Commerce SEO':                 'E-commerce SEO — product page optimization, category SEO, schema markup, and conversion tracking.',
  'Technical Writing (1 article)':  'SEO-optimised long-form article (1,000–2,000 words) targeting your chosen keyword.',
  'Content Brief':                  'Comprehensive brief with target keywords, content structure, and search intent analysis.',
  'Blog Writing (Monthly)':         'Monthly blog posts — SEO-optimized, long-form articles targeting your top keywords.',
  'Content Strategy':               'SEO content plan — topic clusters, keyword mapping, editorial calendar, and content briefs.',
  'PPC / Google Ads Management':    'Google Ads management — campaign setup, keyword research, bid optimization, and monthly performance reporting.',
  'Meta Ads (Facebook & Instagram)':'Meta Ads campaign management — ad creative strategy, audience targeting, A/B testing, and monthly reporting.',
  'Landing Page Website':           'Single-page custom website built to convert — contact form, analytics, and basic SEO included.',
  'Simple Website':                 'Up to 5-page website — mobile-first, Core Web Vitals optimized, and full on-page SEO built in.',
  'Business Website':               'Up to 10-page professional site with CMS so you can manage content yourself. SEO-optimized.',
  'E-Commerce Website':             'Full online store with M-Pesa & card integration, product schema, and inventory management.',
  'Web Design Package':             'Custom mobile-first website optimized for Core Web Vitals and on-page SEO from day one.',
  'Custom Web Application':         'Bespoke web app — CRM, booking system, dashboard, or automation tool built to your spec.',
  'Logo Design':                    'Professional logo — 3 concepts, unlimited revisions, all source files delivered.',
  'Business Card Design':           'Print-ready business card design — front & back, delivered in 1 business day.',
  'Flyer / Poster Design':          'Eye-catching digital or print flyer for events, promotions, or services.',
  'Company Profile Design':         'Professionally designed company profile PDF for pitches and client proposals.',
  'Facebook Page Setup':            'Full Facebook Business Page setup — cover, profile, info, and CTA button.',
  'Social Media Profile Optimization': 'Bio, links, highlights & brand consistency optimized across all social profiles.',
  'Email Signature Design':         'Professional HTML email signature with logo, social links, and brand colors.',
  'Monthly Social Management':      '12 posts/month with captions, hashtags, and monthly performance reporting.',
  'Custom / Other':                 '',
}

const MIN_KES = 100
const MAX_KES = 500_000

const COUNTRIES = [
  { code: '+254', flag: '🇰🇪', name: 'Kenya',        placeholder: '7XX XXX XXX',  regex: /^0?[71]\d{8}$/ },
  { code: '+971', flag: '🇦🇪', name: 'UAE',          placeholder: '5X XXX XXXX',  regex: /^0?5\d{8}$/ },
  { code: '+974', flag: '🇶🇦', name: 'Qatar',        placeholder: '5XXX XXXX',    regex: /^[3-7]\d{7}$/ },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia', placeholder: '5X XXX XXXX',  regex: /^0?5\d{8}$/ },
  { code: '+1',   flag: '🇺🇸', name: 'USA / Canada', placeholder: 'XXX XXX XXXX', regex: /^\d{10}$/ },
  { code: '+44',  flag: '🇬🇧', name: 'UK',           placeholder: '7XXX XXXXXX',  regex: /^0?7\d{9}$/ },
  { code: '+255', flag: '🇹🇿', name: 'Tanzania',     placeholder: '7XX XXX XXX',  regex: /^0?[67]\d{8}$/ },
  { code: '+256', flag: '🇺🇬', name: 'Uganda',       placeholder: '7XX XXX XXX',  regex: /^0?[37]\d{8}$/ },
  { code: '+27',  flag: '🇿🇦', name: 'South Africa', placeholder: '7X XXX XXXX',  regex: /^0?[67]\d{8}$/ },
  { code: '+91',  flag: '🇮🇳', name: 'India',        placeholder: 'XXXXX XXXXX',  regex: /^[6-9]\d{9}$/ },
  { code: '+other', flag: '🌍', name: 'Other',       placeholder: 'XXXXXXXXXX',   regex: /^\d{6,15}$/ },
]

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const inputCls = (err) =>
  `w-full bg-white border px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a5fa8] focus:border-transparent transition ${err ? 'border-red-400' : 'border-slate-200'}`

const labelCls = 'block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2'

export default function ClientPayPage() {
  const { state } = useLocation()

  const allLabels = PROJECTS.map(p => p.label)

  const [project, setProject] = useState(() => {
    if (!state?.serviceName) return ''
    return allLabels.includes(state.serviceName) ? state.serviceName : 'Custom / Other'
  })
  const [notes, setNotes] = useState(() => {
    if (!state?.serviceName) return ''
    if (allLabels.includes(state.serviceName)) return PROJECT_SUGGESTIONS[state.serviceName] || ''
    return state.serviceName
  })
  const [userEditedNotes, setUserEditedNotes] = useState(
    !!(state?.serviceName && !allLabels.includes(state.serviceName))
  )
  const [inputCurrency, setInputCurrency] = useState(state?.currency || 'KES')
  const [inputAmount,   setInputAmount]   = useState(state?.price ? String(state.price) : '')
  const [paymentType,    setPaymentType]   = useState('full')
  const [partialPercent, setPartialPercent] = useState(50)
  const [name,          setName]          = useState('')
  const [email,         setEmail]         = useState('')
  const [phoneCountry,  setPhoneCountry]  = useState(COUNTRIES[0])
  const [phoneLocal,    setPhoneLocal]    = useState('')
  const [agreed,        setAgreed]        = useState(false)
  const [errors,        setErrors]        = useState({})
  const [step,          setStep]          = useState(1)
  const [sheetOpen,     setSheetOpen]     = useState(false)

  const [rate,        setRate]        = useState(null)
  const [rateLoading, setRateLoading] = useState(true)

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/KES')
      .then(r => r.json())
      .then(d => { setRate(d.rates?.AED ?? 0.027); setRateLoading(false) })
      .catch(() => { setRate(0.027); setRateLoading(false) })
  }, [])

  const parsedInput   = parseFloat(inputAmount) || 0
  const amountKES     = inputCurrency === 'KES' ? parsedInput : (rate ? Math.ceil(parsedInput / rate) : 0)
  const amountAED     = inputCurrency === 'AED' ? parsedInput : (rate ? parsedInput * rate : 0)
  const partialKES    = amountKES * (partialPercent / 100)
  const chargeKES     = paymentType === 'full' ? amountKES : partialKES

  const fmt = (n, currency) =>
    new Intl.NumberFormat('en-KE', { style: 'currency', currency, maximumFractionDigits: 2 }).format(n)

  const fullPhone = phoneLocal
    ? (phoneCountry.code === '+other' ? phoneLocal : phoneCountry.code + phoneLocal.replace(/^0+/, ''))
    : ''

  const emailInvalid  = email.length > 5 && !EMAIL_REGEX.test(email)
  const phoneInvalid  = phoneLocal.length > 3 && !phoneCountry.regex.test(phoneLocal.replace(/\s/g, ''))

  const validate = () => {
    const e = {}
    if (!project)                                       e.project = 'Select a service type'
    if (!name.trim())                                   e.name    = 'Enter your full name'
    if (!email.trim())                                  e.email   = 'Enter your email address'
    else if (!EMAIL_REGEX.test(email))                  e.email   = 'Enter a valid email address'
    if (!phoneLocal.trim())                             e.phone   = 'Enter your phone number'
    else if (phoneInvalid)                              e.phone   = `Invalid number for ${phoneCountry.name} — expected format: ${phoneCountry.placeholder}`
    if (chargeKES < MIN_KES)                            e.amount  = `Minimum is ${fmt(MIN_KES, 'KES')}`
    if (amountKES > MAX_KES)                            e.amount  = `Maximum is ${fmt(MAX_KES, 'KES')} — contact us for larger projects`
    if (paymentType === 'partial') {
      if (partialPercent <= 0 || partialPercent >= 100) e.partial = 'Select a valid deposit percentage'
    }
    if (notes.trim().length > 0 && notes.trim().length < 5) e.notes = 'Add a bit more detail about your project.'
    if (!agreed)                                        e.agreed  = 'Please accept the terms to continue'
    return e
  }

  const handleContinue = () => {
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setStep(2)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const first = ['project','notes','amount','partial','name','email','phone','agreed'].find(f => e[f])
      if (first) document.getElementById(`field-${first}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const errMsg = (field) => errors[field]
    ? <p className="text-red-500 text-xs mt-1.5">{errors[field]}</p>
    : null

  // Group projects by group for <optgroup>
  const groups = PROJECTS.reduce((acc, p) => {
    if (!acc[p.group]) acc[p.group] = []
    acc[p.group].push(p.label)
    return acc
  }, {})

  // ── Step 2: Payment ──────────────────────────────────────────────────────────
  if (step === 2) {
    return (
      <main className="min-h-screen bg-slate-50 pt-[104px]">

        {/* Page header strip */}
        <section className="bg-[#0d3d6e] py-10 px-6">
          <div className="max-w-lg mx-auto">
            <span className="text-blue-300 text-xs font-black uppercase tracking-widest">Step 2 of 2</span>
            <h1 className="text-2xl font-black text-white mt-1">Confirm & Pay</h1>
          </div>
        </section>

        <div className="max-w-lg mx-auto px-4 sm:px-6 py-10">

          <button
            onClick={() => setStep(1)}
            className="flex items-center gap-2 text-sm font-semibold text-[#1a5fa8] hover:text-[#0d3d6e] mb-6 transition-colors"
          >
            ← Back &amp; edit details
          </button>

          {/* Order summary */}
          <div className="bg-white border border-slate-200 p-6 mb-4">
            <p className="text-xs font-black text-[#1a5fa8] uppercase tracking-widest mb-4">Order Summary</p>
            <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
              <div>
                <p className="font-black text-slate-900 text-lg">{project}</p>
                {notes && <p className="text-slate-500 text-xs mt-1 max-w-xs leading-relaxed">{notes}</p>}
              </div>
              <div className="text-right shrink-0">
                <p className="text-3xl font-black text-[#0d3d6e]">{fmt(chargeKES, 'KES')}</p>
                {inputCurrency === 'AED' && (
                  <p className="text-slate-400 text-xs mt-0.5">≈ {fmt(amountAED * (chargeKES / amountKES || 1), 'AED')}</p>
                )}
              </div>
            </div>
            <div className="border-t border-slate-100 pt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500">
              <span><strong className="text-slate-700">Name:</strong> {name}</span>
              <span><strong className="text-slate-700">Email:</strong> {email}</span>
              <span><strong className="text-slate-700">Phone:</strong> {fullPhone}</span>
              {paymentType === 'partial' && (
                <span><strong className="text-slate-700">Total:</strong> {fmt(amountKES, 'KES')} · <span className="text-amber-600">Paying deposit</span></span>
              )}
            </div>
          </div>

          {/* Payment method badges */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="inline-flex items-center gap-1 bg-slate-900 text-white text-[10px] font-semibold px-2 py-1">Apple Pay</span>
            <span className="bg-blue-700 text-white text-[10px] font-black px-2 py-1">VISA</span>
            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1">MC</span>
            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-1">M-Pesa</span>
            <span className="ml-auto text-[10px] font-semibold text-slate-500">Secured by Paystack</span>
          </div>

          <button
            onClick={() => setSheetOpen(true)}
            className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[.99] text-white font-black py-4 transition-all text-base flex items-center justify-center gap-2.5 uppercase tracking-widest"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            Pay {fmt(chargeKES, 'KES')}
          </button>

          <p className="text-slate-400 text-xs text-center mt-3">
            M-Pesa · Card · Apple Pay · All charges in KES
          </p>

          <PaymentSheet
            open={sheetOpen}
            onClose={() => setSheetOpen(false)}
            amount={chargeKES}
            serviceName={project}
            customerEmail={email}
            customerPhone={fullPhone}
            customerName={name}
          />

        </div>
      </main>
    )
  }

  // ── Step 1: Details form ─────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-slate-50 pt-[104px]">

      {/* Page header */}
      <section className="bg-[#0d3d6e] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-blue-300 text-xs font-black uppercase tracking-widest">Secure Payment</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 leading-tight">
            Pay for Your<br />
            <span className="text-emerald-400">SEO Service</span>
          </h1>
          <p className="text-blue-200 text-sm mt-4 max-w-md">
            From KES 1,000 for individual tasks to full monthly retainers. Pay with M-Pesa, card, or Apple Pay.
          </p>
        </div>
      </section>

      <div className="max-w-lg mx-auto px-4 sm:px-6 py-12">

        <div className="bg-white border border-slate-200 p-8 space-y-6">

          {/* Service */}
          <div id="field-project">
            <label className={labelCls}>
              Service <span className="text-emerald-600">*</span>
            </label>
            <select
              value={project}
              onChange={e => {
                const val = e.target.value
                setProject(val)
                setErrors(v => ({ ...v, project: '', notes: '' }))
                if (!userEditedNotes) setNotes(PROJECT_SUGGESTIONS[val] ?? '')
              }}
              className={inputCls(errors.project)}
            >
              <option value="">Select a service…</option>
              {Object.entries(groups).map(([group, labels]) => (
                <optgroup key={group} label={group}>
                  {labels.map(l => <option key={l} value={l}>{l}</option>)}
                </optgroup>
              ))}
            </select>
            {errMsg('project')}
          </div>

          {/* Description */}
          <div id="field-notes">
            <label className={labelCls}>
              Description <span className="text-slate-400 font-normal normal-case tracking-normal">optional</span>
            </label>
            <p className="text-slate-400 text-xs mb-2">
              {project === 'Custom / Other'
                ? 'Tell us exactly what you need.'
                : 'Auto-filled. Edit freely or leave as is.'}
            </p>
            <textarea
              value={notes}
              autoComplete="off"
              onChange={e => { setNotes(e.target.value); setUserEditedNotes(true); setErrors(v => ({ ...v, notes: '' })) }}
              placeholder={project === 'Custom / Other' ? 'e.g. Monthly SEO for a law firm targeting 15 keywords' : ''}
              rows={project === 'Custom / Other' ? 3 : 2}
              className={`w-full bg-white border px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a5fa8] resize-none transition ${errors.notes ? 'border-red-400' : 'border-slate-200'}`}
            />
            {errMsg('notes')}
          </div>

          {/* Amount */}
          <div id="field-amount">
            <label className={labelCls}>
              Amount <span className="text-emerald-600">*</span>
            </label>
            {/* Quick amounts for small orders — only shown when KES is selected */}
            {!parsedInput && inputCurrency === 'KES' && (
              <div className="flex flex-wrap gap-2 mb-3">
                {[1000, 1500, 2000, 3500, 5000].map(amt => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setInputCurrency('KES'); setInputAmount(String(amt)); setErrors(v => ({ ...v, amount: '' })) }}
                    className="text-xs border border-slate-200 hover:border-[#1a5fa8] hover:text-[#1a5fa8] px-3 py-1.5 text-slate-500 font-semibold transition-colors"
                  >
                    KES {amt.toLocaleString()}
                  </button>
                ))}
              </div>
            )}
            <div className="flex gap-2 mb-2.5">
              {['KES', 'AED'].map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => { setInputCurrency(c); setInputAmount(''); setErrors(v => ({ ...v, amount: '' })) }}
                  className={`px-4 py-1.5 text-sm font-bold border transition-colors ${
                    inputCurrency === c ? 'bg-[#0d3d6e] text-white border-[#0d3d6e]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#1a5fa8]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">{inputCurrency}</span>
              <input
                type="number"
                min="0"
                autoComplete="off"
                value={inputAmount}
                onChange={e => { setInputAmount(e.target.value); setErrors(v => ({ ...v, amount: '' })) }}
                placeholder="0.00"
                className={`w-full bg-white border pl-16 pr-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a5fa8] transition ${errors.amount ? 'border-red-400' : 'border-slate-200'}`}
              />
            </div>
            {errMsg('amount')}
            {parsedInput > 0 && rate && (
              <div className="mt-2 flex items-center justify-between bg-slate-50 border border-slate-200 px-4 py-3">
                <div>
                  <p className="text-slate-900 font-bold text-sm">{fmt(amountKES, 'KES')}</p>
                  <p className="text-slate-400 text-xs">≈ {fmt(amountAED, 'AED')}</p>
                </div>
                <p className="text-slate-400 text-xs text-right">
                  {rateLoading ? 'Loading…' : `1 KES = ${rate.toFixed(4)} AED`}
                  <br /><span className="text-slate-300">live rate</span>
                </p>
              </div>
            )}
          </div>

          {/* Full / partial */}
          {parsedInput > 0 && (
            <div id="field-partial">
              <label className={labelCls}>Payment type</label>
              <div className="flex gap-2 mb-2.5">
                {[['full', 'Full payment'], ['partial', 'Deposit / Partial']].map(([val, lbl]) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setPaymentType(val)}
                    className={`px-4 py-1.5 text-sm font-bold border transition-colors ${
                      paymentType === val ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-500'
                    }`}
                  >
                    {lbl}
                  </button>
                ))}
              </div>
              {paymentType === 'partial' && (
                <div>
                  <p className="text-slate-400 text-xs mb-2">Choose how much to pay now:</p>
                  <div className="flex gap-2">
                    {[25, 50, 75].map(pct => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => { setPartialPercent(pct); setErrors(v => ({ ...v, partial: '' })) }}
                        className={`flex-1 py-2.5 text-sm font-bold border transition-colors ${
                          partialPercent === pct ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-500'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                  {parsedInput > 0 && (
                    <p className="text-slate-500 text-xs mt-2">
                      Paying <span className="font-bold text-slate-800">{fmt(chargeKES, 'KES')}</span>
                      {inputCurrency === 'AED' && <span> ≈ {fmt(parsedInput * (partialPercent / 100), 'AED')}</span>}
                      {' '}now · remaining {fmt(amountKES - partialKES, 'KES')} due on delivery
                    </p>
                  )}
                  {errMsg('partial')}
                </div>
              )}
            </div>
          )}

          <div className="border-t border-slate-100" />

          {/* Name */}
          <div id="field-name">
            <label className={labelCls}>Full name <span className="text-emerald-600">*</span></label>
            <input
              type="text"
              autoComplete="off"
              value={name}
              onChange={e => { setName(e.target.value); setErrors(v => ({ ...v, name: '' })) }}
              placeholder="Jane Smith"
              className={inputCls(errors.name)}
            />
            {errMsg('name')}
          </div>

          {/* Email */}
          <div id="field-email">
            <label className={labelCls}>Email <span className="text-emerald-600">*</span></label>
            <input
              type="email"
              autoComplete="off"
              value={email}
              onChange={e => { setEmail(e.target.value); setErrors(v => ({ ...v, email: '' })) }}
              placeholder="jane@company.com"
              className={`${inputCls(errors.email)} ${emailInvalid && !errors.email ? 'border-red-400' : ''}`}
            />
            {emailInvalid && !errors.email && (
              <p className="text-red-500 text-xs mt-1.5">Enter a valid email — e.g. name@example.com</p>
            )}
            {errMsg('email')}
          </div>

          {/* Phone */}
          <div id="field-phone">
            <label className={labelCls}>Phone <span className="text-emerald-600">*</span></label>
            <div className={`flex border overflow-hidden transition-colors ${errors.phone || phoneInvalid ? 'border-red-400' : 'border-slate-200'}`}>
              <select
                value={phoneCountry.code}
                onChange={e => { setPhoneCountry(COUNTRIES.find(c => c.code === e.target.value)); setPhoneLocal(''); setErrors(v => ({ ...v, phone: '' })) }}
                className="bg-slate-50 border-r border-slate-200 text-slate-700 text-sm px-2 py-3 focus:outline-none shrink-0 cursor-pointer"
              >
                {COUNTRIES.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code === '+other' ? 'Other' : c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                autoComplete="off"
                value={phoneLocal}
                onChange={e => { setPhoneLocal(e.target.value.replace(/[^\d\s]/g, '')); setErrors(v => ({ ...v, phone: '' })) }}
                placeholder={phoneCountry.placeholder}
                className="flex-1 bg-white px-3 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
              />
            </div>
            {phoneInvalid && !errors.phone && (
              <p className="text-red-500 text-xs mt-1.5">
                Expected format: <span className="font-medium">{phoneCountry.placeholder}</span>
              </p>
            )}
            {errMsg('phone')}
          </div>

          {/* Terms */}
          <div id="field-agreed">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => { setAgreed(e.target.checked); setErrors(v => ({ ...v, agreed: '' })) }}
                className="mt-0.5 w-4 h-4 accent-emerald-600 cursor-pointer shrink-0"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                I agree to Goshen Writing and Consultancies&apos;{' '}
                <Link to="/terms"   target="_blank" className="underline text-slate-900">Terms of Service</Link>,{' '}
                <Link to="/refund"  target="_blank" className="underline text-slate-900">Refund Policy</Link>, and{' '}
                <Link to="/privacy" target="_blank" className="underline text-slate-900">Privacy Policy</Link>.
              </span>
            </label>
            {errMsg('agreed')}
          </div>

          {/* Notice */}
          <div className="bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-500 space-y-1">
            <p><span className="font-semibold text-slate-700">Refunds:</span> Eligible within 48 hours if work has not started. See our{' '}
              <Link to="/refund" target="_blank" className="underline text-slate-700">Refund Policy</Link>.
            </p>
            <p><span className="font-semibold text-slate-700">Questions?</span> Contact us via{' '}
              <Link to="/booking" className="underline text-slate-700">WhatsApp or our booking form</Link> — we respond within 24 hours.
            </p>
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-[#0d3d6e] hover:bg-[#1a5fa8] text-white font-black py-4 transition-colors text-base uppercase tracking-widest"
          >
            Continue to Payment →
          </button>

          <p className="text-slate-400 text-xs text-center">
            Payments secured by Paystack · M-Pesa · Card · Apple Pay
          </p>

        </div>
      </div>
    </main>
  )
}
