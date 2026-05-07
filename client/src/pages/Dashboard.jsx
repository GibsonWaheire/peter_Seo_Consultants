import { useEffect, useState } from 'react';
import { useAuth, API } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const STATUS = {
  pending:   { label: 'Pending',   dot: 'bg-amber-400',   badge: 'bg-amber-50 text-amber-700 border-amber-200',   bar: 'bg-amber-400'   },
  active:    { label: 'Active',    dot: 'bg-emerald-400', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', bar: 'bg-emerald-400' },
  paused:    { label: 'Paused',    dot: 'bg-slate-400',   badge: 'bg-slate-100 text-slate-600 border-slate-200',   bar: 'bg-slate-400'   },
  completed: { label: 'Completed', dot: 'bg-blue-400',    badge: 'bg-blue-50 text-blue-700 border-blue-200',       bar: 'bg-blue-400'    },
};

function StatCard({ icon, label, value, sub, color }) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex items-start gap-4`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-black text-slate-900">{value}</p>
        <p className="text-sm font-semibold text-slate-700 mt-0.5">{label}</p>
        {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

function ProjectCard({ project, active, onClick }) {
  const s = STATUS[project.status] || STATUS.pending;
  const reportCount = project.reports?.length || 0;

  // Progress % based on status
  const progress = { pending: 10, active: 55, paused: 55, completed: 100 }[project.status] || 10;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 ${
        active
          ? 'border-[#1a5fa8] bg-white shadow-lg shadow-blue-100'
          : 'border-slate-100 bg-white hover:border-slate-300 hover:shadow-md'
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className={`font-black text-base leading-tight ${active ? 'text-[#0d3d6e]' : 'text-slate-800'}`}>
          {project.name}
        </h3>
        <span className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${s.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
          {s.label}
        </span>
      </div>

      {/* Service */}
      {project.service && (
        <p className="text-xs text-[#1a5fa8] font-semibold mb-3">{project.service}</p>
      )}

      {/* Progress bar */}
      <div className="mb-3">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all duration-700 ${s.bar}`} style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
        <span className="text-xs text-slate-400">
          {project.startDate
            ? new Date(project.startDate).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })
            : 'Start TBD'}
        </span>
        <span className="text-xs font-semibold text-slate-500">
          {reportCount} {reportCount === 1 ? 'report' : 'reports'}
        </span>
      </div>
    </button>
  );
}

function ProjectDetail({ project }) {
  const s = STATUS[project.status] || STATUS.pending;
  const progress = { pending: 10, active: 55, paused: 55, completed: 100 }[project.status] || 10;

  return (
    <div className="space-y-6">

      {/* Header card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-[#0d3d6e] to-[#1a5fa8] px-8 py-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">{project.service || 'Project'}</p>
              <h2 className="text-white text-2xl font-black leading-tight">{project.name}</h2>
            </div>
            <span className={`shrink-0 inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full border ${s.badge}`}>
              <span className={`w-2 h-2 rounded-full ${s.dot}`} />
              {s.label}
            </span>
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-blue-300 mb-2">
              <span>Overall Progress</span>
              <span className="font-bold">{progress}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full transition-all duration-700" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {/* Meta row */}
        <div className="px-8 py-5 grid grid-cols-2 sm:grid-cols-3 gap-6 border-b border-slate-100">
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-1">Start Date</p>
            <p className="text-sm font-bold text-slate-800">
              {project.startDate
                ? new Date(project.startDate).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })
                : '—'}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-1">Target End</p>
            <p className="text-sm font-bold text-slate-800">
              {project.endDate
                ? new Date(project.endDate).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })
                : '—'}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-1">Reports</p>
            <p className="text-sm font-bold text-slate-800">{project.reports?.length || 0} available</p>
          </div>
        </div>

        {/* Description + Notes */}
        {(project.description || project.notes) && (
          <div className="px-8 py-5 space-y-4">
            {project.description && (
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-2">About this project</p>
                <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
              </div>
            )}
            {project.notes && (
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <p className="text-xs text-amber-600 uppercase tracking-wide font-bold mb-1">Notes from your team</p>
                <p className="text-sm text-slate-700 leading-relaxed">{project.notes}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Reports */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-black text-slate-900 text-lg">Reports</h3>
          <span className="text-xs text-slate-400 font-semibold">{project.reports?.length || 0} total</span>
        </div>

        {!project.reports?.length ? (
          <div className="text-center py-14">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">📄</div>
            <p className="text-slate-600 font-semibold">No reports yet</p>
            <p className="text-slate-400 text-sm mt-1">Your team will upload reports here as they become available.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {project.reports.map((r, i) => (
              <div key={r._id} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-[#f0f4f8] flex items-center justify-center text-xl shrink-0 group-hover:bg-[#e0eaf5] transition-colors">
                  📊
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 truncate">{r.title}</p>
                  {r.description && <p className="text-xs text-slate-400 mt-0.5 truncate">{r.description}</p>}
                  <p className="text-xs text-slate-400 mt-0.5">
                    {new Date(r.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
                {r.fileUrl ? (
                  <a
                    href={r.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 bg-[#0d3d6e] hover:bg-[#1a5fa8] text-white text-xs font-black px-4 py-2.5 rounded-xl uppercase tracking-widest transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Download
                  </a>
                ) : (
                  <span className="shrink-0 text-xs text-slate-300 font-semibold px-4 py-2.5">No file</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState('');

  useEffect(() => {
    fetch(`${API}/client/projects`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProjects(data);
          if (data.length > 0) setSelected(data[0]._id);
        } else {
          setError('Failed to load projects.');
        }
      })
      .catch(() => setError('Could not reach server.'))
      .finally(() => setLoading(false));
  }, [token]);

  function handleLogout() { logout(); navigate('/login'); }

  const activeCount    = projects.filter(p => p.status === 'active').length;
  const completedCount = projects.filter(p => p.status === 'completed').length;
  const reportCount    = projects.reduce((acc, p) => acc + (p.reports?.length || 0), 0);
  const project        = projects.find(p => p._id === selected);

  return (
    <div className="min-h-screen bg-[#f0f4f8] pt-[104px]">

      {/* Top bar */}
      <div className="bg-white border-b border-slate-200 sticky top-[104px] z-30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0d3d6e] flex items-center justify-center text-white font-black text-sm shrink-0">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-black text-slate-900 leading-none">{user?.name}</p>
              {user?.company && <p className="text-xs text-slate-400 mt-0.5">{user.company}</p>}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-semibold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900">
            Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 17 ? 'afternoon' : 'evening'},{' '}
            {user?.name?.split(' ')[0]} 👋
          </h1>
          <p className="text-slate-500 mt-1">Here's an overview of your projects and reports.</p>
        </div>

        {loading && (
          <div className="flex justify-center py-24">
            <div className="w-10 h-10 border-4 border-[#1a5fa8] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl mb-6 text-sm">{error}</div>
        )}

        {!loading && !error && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <StatCard icon="📁" label="Total Projects"    value={projects.length} sub="all time"           color="bg-slate-100" />
              <StatCard icon="🚀" label="Active"            value={activeCount}     sub="in progress"        color="bg-emerald-100" />
              <StatCard icon="✅" label="Completed"         value={completedCount}  sub="delivered"          color="bg-blue-100" />
              <StatCard icon="📊" label="Reports Available" value={reportCount}     sub="ready to download"  color="bg-amber-100" />
            </div>

            {projects.length === 0 ? (
              /* Empty state */
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm text-center py-24 px-6">
                <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">📋</div>
                <h2 className="text-xl font-black text-slate-800 mb-2">No projects yet</h2>
                <p className="text-slate-400 text-sm max-w-xs mx-auto mb-8">
                  Your project manager will set up your first project shortly. You'll see everything here once it's ready.
                </p>
                <Link
                  to="/booking"
                  className="inline-block bg-[#1a5fa8] hover:bg-[#0d3d6e] text-white font-black text-sm px-8 py-3 rounded-xl uppercase tracking-widest transition-colors"
                >
                  Book a Strategy Call
                </Link>
              </div>
            ) : (
              /* Main layout */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Project list */}
                <div className="lg:col-span-1">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Your Projects</p>
                  <div className="space-y-3">
                    {projects.map(p => (
                      <ProjectCard
                        key={p._id}
                        project={p}
                        active={selected === p._id}
                        onClick={() => setSelected(p._id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Project detail */}
                <div className="lg:col-span-2">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Project Detail</p>
                  {project ? <ProjectDetail project={project} /> : (
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center h-64">
                      <p className="text-slate-400 text-sm">Select a project to view details</p>
                    </div>
                  )}
                </div>

              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
