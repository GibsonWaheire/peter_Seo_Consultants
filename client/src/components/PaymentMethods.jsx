// Payment via Paystack inline v2.
// Paystack natively handles: Card, Apple Pay (Safari), Google Pay, M-Pesa.
// Apple Pay renders automatically on Safari — no extra config needed.
import { useState, useRef } from 'react'
import { paymentConfig } from '../constants/paymentConfig'

function generateRef() {
  const ts   = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).substring(2, 7).toUpperCase()
  return `PSC-${ts}-${rand}`
}

const Spinner = () => (
  <svg className="w-4 h-4 animate-spin shrink-0" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
)

export default function PaymentMethods({
  amount,
  serviceName,
  category    = '',
  description = '',
  customerEmail = '',
  customerPhone = '',
  customerName  = '',
  onPaymentSuccess,
}) {
  const fmt = (n) => `KES ${Number(n).toLocaleString()}`

  const buildWaUrl = (ref) => {
    const msg = `Hi, I just paid for *${serviceName}*.\nAmount: ${fmt(amount)}\nMethod: Card / Apple Pay / M-Pesa\nReference: ${ref}\n\nPlease confirm and proceed.`
    return `https://wa.me/${paymentConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`
  }

  const copyText = (text, setter) => {
    navigator.clipboard.writeText(text)
    setter(true)
    setTimeout(() => setter(false), 2000)
  }

  const [email,         setEmail]         = useState(customerEmail)
  const [status,        setStatus]        = useState('idle') // idle | loading | success
  const [ref,           setRef]           = useState('')
  const [copiedRef,     setCopiedRef]     = useState(false)
  const successRef = useRef(false)

  const handlePay = async () => {
    if (!email || !window.PaystackPop) return
    successRef.current = false
    setStatus('loading')
    const txRef = generateRef()
    const pop = new window.PaystackPop()
    await pop.checkout({
      key:      import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email,
      amount:   Math.round(amount * 100), // kobo/cents
      currency: 'KES',
      ref:      txRef,
      label:    serviceName,
      firstname: customerName.split(' ')[0] || '',
      lastname:  customerName.split(' ').slice(1).join(' ') || '',
      metadata: {
        custom_fields: [
          { display_name: 'Service',     variable_name: 'service',     value: serviceName },
          { display_name: 'Category',    variable_name: 'category',    value: category || '—' },
          { display_name: 'Customer',    variable_name: 'customer',    value: customerName || '—' },
          { display_name: 'Phone',       variable_name: 'phone',       value: customerPhone || '—' },
          { display_name: 'Description', variable_name: 'description', value: description || '—' },
        ],
      },
      onSuccess: (transaction) => {
        successRef.current = true
        setRef(transaction.reference)
        setStatus('success')
        onPaymentSuccess?.({ method: 'Paystack', reference: transaction.reference, amount })
      },
      onCancel: () => {},
    })
    if (!successRef.current) setStatus('idle')
  }

  // ── Success state ───────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="py-4">

        {/* Check icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center animate-scale-in">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h3 className="text-lg font-bold text-zinc-900 text-center mb-1">Payment Successful!</h3>
        <p className="text-zinc-500 text-sm text-center mb-5">Your payment has been received and confirmed.</p>

        {/* Summary */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 mb-4 space-y-2.5">
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 text-xs">Service</span>
            <span className="text-zinc-900 font-semibold text-xs text-right max-w-[58%] leading-snug">{serviceName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 text-xs">Amount paid</span>
            <span className="text-emerald-600 font-bold text-sm">{fmt(amount)}</span>
          </div>
          <div className="flex justify-between items-center pt-2.5 border-t border-zinc-200">
            <span className="text-zinc-400 text-xs">Reference</span>
            <button
              onClick={() => copyText(ref, setCopiedRef)}
              className="flex items-center gap-1.5 text-zinc-700 hover:text-zinc-900 font-mono text-xs transition-colors"
              title="Copy reference"
            >
              {ref}
              <span className="text-zinc-400">{copiedRef ? '✓' : '⎘'}</span>
            </button>
          </div>
        </div>

        {/* What happens next */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">What happens next</p>
          <div className="space-y-2.5">
            {[
              'We receive your payment notification automatically.',
              "We'll confirm and kick off your SEO campaign within a few hours.",
              'Send us a WhatsApp to speed things up — include your reference.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-zinc-600 text-xs leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={buildWaUrl(ref)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
        >
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Message us on WhatsApp
        </a>

        <p className="text-zinc-400 text-xs text-center mt-3">
          Save your ref: <span className="font-mono text-zinc-600">{ref}</span>
        </p>
      </div>
    )
  }

  // ── Pay form ────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-3">

      {/* Method badges */}
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex items-center gap-0.5 bg-zinc-900 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Apple Pay
        </span>
        <span className="bg-blue-700 text-white text-[10px] font-black px-1.5 py-0.5 rounded tracking-tight">VISA</span>
        <span className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded tracking-tight">MC</span>
        <span className="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">M-Pesa</span>
        <span className="ml-auto text-[10px] font-semibold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full shrink-0">Secured by Paystack</span>
      </div>

      {/* Email input */}
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address for receipt"
        className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 placeholder-zinc-400 text-base sm:text-sm focus:outline-none focus:border-indigo-400"
      />

      {/* Pay button */}
      <button
        onClick={handlePay}
        disabled={!email || status === 'loading'}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
      >
        {status === 'loading'
          ? <><Spinner /> Opening checkout…</>
          : `Pay ${fmt(amount)}`
        }
      </button>

      <p className="text-zinc-400 text-[11px] text-center">
        Apple Pay available on Safari · All payments in KES
      </p>
    </div>
  )
}
