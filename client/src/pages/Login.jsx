import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm]     = useState({ email: '', password: '' });
  const [error, setError]   = useState('');
  const [loading, setLoading] = useState(false);

  // Already logged in
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
    <main className="min-h-screen bg-[#f0f4f8] flex items-center justify-center px-4 pt-[104px]">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block border-2 border-[#0d3d6e] px-4 py-2 text-[#0d3d6e] font-black text-lg tracking-widest uppercase">
            Goshen
          </Link>
          <p className="text-slate-500 text-sm mt-3">Client Portal — Sign In</p>
        </div>

        <div className="bg-white shadow-xl border border-slate-100 rounded-xl overflow-hidden">
          <div className="bg-[#0d3d6e] px-8 py-5">
            <h1 className="text-white font-black text-xl">Welcome Back</h1>
            <p className="text-blue-300 text-sm mt-0.5">Sign in to view your projects and reports.</p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a5fa8] focus:border-transparent rounded-lg transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a5fa8] focus:border-transparent rounded-lg transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1a5fa8] hover:bg-[#0d3d6e] disabled:opacity-60 text-white font-black py-3.5 rounded-lg text-sm uppercase tracking-widest transition-colors"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Need access?{' '}
          <Link to="/booking" className="text-[#1a5fa8] hover:underline">Contact us</Link>
        </p>
      </div>
    </main>
  );
}
