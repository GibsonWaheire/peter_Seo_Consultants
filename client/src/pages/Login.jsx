import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function EyeIcon({ open }) {
  return open ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.97 9.97 0 012.087-3.388M6.88 6.88A9.963 9.963 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.97 9.97 0 01-1.563 3.029M6.88 6.88L3 3m3.88 3.88l10.24 10.24M17.12 17.12L21 21" />
    </svg>
  );
}

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm]       = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);

  if (user) {
    navigate(user.role === 'admin' ? '/admin' : '/dashboard', { replace: true });
    return null;
  }

  function handleChange(e) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    setError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const u = await login(form.email, form.password);
      navigate(u.role === 'admin' ? '/admin' : '/dashboard', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex pt-[104px]">

      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0d3d6e] flex-col justify-between px-16 py-16">
        <Link to="/" className="inline-block border-2 border-white px-4 py-2 text-white font-black text-xl tracking-widest uppercase w-fit">
          Iknus
        </Link>
        <div>
          <h2 className="text-white text-4xl font-black leading-tight mb-6">
            Track your projects.<br />Download your reports.<br />Stay in the loop.
          </h2>
          <p className="text-blue-300 text-base leading-relaxed max-w-sm">
            Your dedicated workspace for monitoring SEO progress, campaign performance, and growth milestones — all in one place.
          </p>
        </div>
        <div className="flex gap-4">
          {['Trusted by 1,000+ businesses', 'Kenya-based team', 'Real-time updates'].map(t => (
            <span key={t} className="text-xs text-blue-400 border border-blue-700 px-3 py-1.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right panel — form */}
      <div className="w-full lg:w-1/2 bg-[#f0f4f8] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-10">
            <Link to="/" className="inline-block border-2 border-[#0d3d6e] px-4 py-2 text-[#0d3d6e] font-black text-xl tracking-widest uppercase">
              Iknus
            </Link>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-black text-slate-900">Welcome back</h1>
            <p className="text-slate-500 mt-2 text-base">Sign in to view your projects and reports.</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-5 py-4 rounded-xl mb-6 flex items-start gap-3">
              <span className="text-red-400 shrink-0 mt-0.5">✕</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full border-2 border-slate-200 bg-white px-5 py-4 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a5fa8] rounded-xl transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  required
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full border-2 border-slate-200 bg-white px-5 py-4 pr-14 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a5fa8] rounded-xl transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                  tabIndex={-1}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  <EyeIcon open={showPass} />
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1a5fa8] hover:bg-[#0d3d6e] disabled:opacity-60 text-white font-black py-4 rounded-xl text-base uppercase tracking-widest transition-colors shadow-lg shadow-blue-200"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in…
                </span>
              ) : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-8">
            Need access?{' '}
            <Link to="/booking" className="text-[#1a5fa8] font-semibold hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
