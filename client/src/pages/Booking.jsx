import { useState } from 'react';

const trustPoints = [
  { icon: '📞', title: 'Free 30-Min Strategy Call', desc: 'No commitment. We map out what SEO growth looks like for your specific business.' },
  { icon: '📊', title: 'Custom Audit Included', desc: "You'll receive a tailored audit with actionable insights — whether or not we work together." },
  { icon: '🏆', title: '200+ Clients Served', desc: "We've helped businesses across industries achieve first-page rankings and real revenue growth." },
];

const inputClass =
  'w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition bg-white';

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', website: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="pt-[68px] bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-white text-black py-20 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">
            Book a Call
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight text-black">
            Let&apos;s Talk About<br />
            <span className="text-emerald-600">Your Growth</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-lg">
            Fill out the form below and we&apos;ll get back to you within 24 hours to schedule your free strategy call.
          </p>
        </div>
      </section>

      {/* Split layout */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left — trust */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-black mb-2">Why Book a Call?</h2>
            <p className="text-slate-500 text-sm mb-10">No pressure. No sales pitch. Just a clear SEO roadmap for your business.</p>
            <div className="space-y-8">
              {trustPoints.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-xl shadow-sm">
                    {icon}
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm mb-1">{title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="flex gap-1 text-emerald-600 mb-3">
                {Array(5).fill('★').map((s, i) => <span key={i} className="text-lg">{s}</span>)}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic mb-4">
                &ldquo;Peter&apos;s team took us from page 4 to the top 3 results in under 90 days. The ROI has been incredible.&rdquo;
              </p>
              <p className="text-slate-500 text-xs font-semibold">— Sarah M., E-commerce Founder</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-slate-100 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl mb-6">✓</div>
                <h3 className="text-2xl font-black text-black mb-3">We&apos;ve Got Your Request!</h3>
                <p className="text-slate-500 text-sm max-w-sm">
                  Thanks for reaching out. We&apos;ll review your details and get back to you within 24 hours to schedule your call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-10 border border-slate-100 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                      Full Name <span className="text-emerald-600">*</span>
                    </label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                      Email <span className="text-emerald-600">*</span>
                    </label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Website URL</label>
                  <input type="url" name="website" value={form.website} onChange={handleChange} placeholder="https://yoursite.com" className={inputClass} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                      <option value="">Select a service</option>
                      <option>SEO Audit</option>
                      <option>On-Page SEO</option>
                      <option>Link Building</option>
                      <option>Technical SEO</option>
                      <option>Local SEO</option>
                      <option>Content Strategy</option>
                      <option>Full SEO Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Monthly Budget</label>
                    <select name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                      <option value="">Select a range</option>
                      <option>Under $1,000</option>
                      <option>$1,000 – $3,000</option>
                      <option>$3,000 – $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">Tell Us About Your Goals</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you hoping to achieve? Any context about your current SEO situation helps."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 transition-colors">
                  Send My Request
                </button>

                <p className="text-center text-slate-400 text-xs">We respond within 24 hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
