import { useEffect, useState } from 'react';
import { useAuth, API } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const STATUS_STYLES = {
  pending:   'bg-yellow-100 text-yellow-800',
  active:    'bg-emerald-100 text-emerald-800',
  paused:    'bg-slate-100 text-slate-600',
  completed: 'bg-blue-100 text-blue-800',
};

const STATUS_DOT = {
  pending:   'bg-yellow-400',
  active:    'bg-emerald-400',
  paused:    'bg-slate-400',
  completed: 'bg-blue-400',
};

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

  function handleLogout() {
    logout();
    navigate('/login');
  }

  const project = projects.find(p => p._id === selected);

  return (
    <div className="min-h-screen bg-[#f0f4f8] pt-[104px]">

      {/* Top bar */}
      <div className="bg-[#0d3d6e] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-white font-black text-lg">Client Dashboard</p>
            <p className="text-blue-300 text-xs mt-0.5">Welcome back, {user?.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-blue-300 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-[#1a5fa8] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-5 py-4 rounded-xl">
            {error}
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-4xl mb-4">📋</p>
            <p className="font-semibold text-slate-600">No projects yet.</p>
            <p className="text-sm mt-1">Your project manager will set things up shortly.</p>
          </div>
        )}

        {!loading && projects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Sidebar — project list */}
            <div className="lg:col-span-1 space-y-3">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                Your Projects
              </h2>
              {projects.map(p => (
                <button
                  key={p._id}
                  onClick={() => setSelected(p._id)}
                  className={`w-full text-left px-4 py-4 rounded-xl border transition-all ${
                    selected === p._id
                      ? 'bg-white border-[#1a5fa8] shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <p className={`text-sm font-bold mb-1 ${selected === p._id ? 'text-[#0d3d6e]' : 'text-slate-800'}`}>
                    {p.name}
                  </p>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLES[p.status]}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[p.status]}`} />
                    {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
                  </span>
                </button>
              ))}
            </div>

            {/* Main — project detail */}
            {project && (
              <div className="lg:col-span-3 space-y-6">

                {/* Project header */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h1 className="text-2xl font-black text-slate-900">{project.name}</h1>
                      {project.service && (
                        <p className="text-sm text-[#1a5fa8] font-semibold mt-1">{project.service}</p>
                      )}
                      {project.description && (
                        <p className="text-slate-500 text-sm mt-3 leading-relaxed">{project.description}</p>
                      )}
                    </div>
                    <span className={`inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full ${STATUS_STYLES[project.status]}`}>
                      <span className={`w-2 h-2 rounded-full ${STATUS_DOT[project.status]}`} />
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>

                  {/* Dates */}
                  {(project.startDate || project.endDate) && (
                    <div className="mt-5 flex gap-8 border-t border-slate-100 pt-5">
                      {project.startDate && (
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-1">Start Date</p>
                          <p className="text-sm font-bold text-slate-700">
                            {new Date(project.startDate).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </p>
                        </div>
                      )}
                      {project.endDate && (
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-1">Target End</p>
                          <p className="text-sm font-bold text-slate-700">
                            {new Date(project.endDate).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {project.notes && (
                    <div className="mt-4 bg-[#f0f4f8] rounded-lg px-4 py-3">
                      <p className="text-xs font-black text-slate-500 uppercase tracking-wide mb-1">Notes</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{project.notes}</p>
                    </div>
                  )}
                </div>

                {/* Reports */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                  <h2 className="text-base font-black text-slate-900 mb-5">
                    Reports <span className="text-slate-400 font-normal">({project.reports?.length || 0})</span>
                  </h2>

                  {!project.reports?.length ? (
                    <div className="text-center py-10 text-slate-400">
                      <p className="text-3xl mb-3">📄</p>
                      <p className="text-sm">No reports uploaded yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {project.reports.map(r => (
                        <div key={r._id} className="flex items-center justify-between gap-4 px-4 py-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#f0f4f8] flex items-center justify-center text-xl shrink-0">
                              📊
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-800">{r.title}</p>
                              {r.description && (
                                <p className="text-xs text-slate-400 mt-0.5">{r.description}</p>
                              )}
                              <p className="text-xs text-slate-400 mt-0.5">
                                {new Date(r.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })}
                              </p>
                            </div>
                          </div>
                          {r.fileUrl && (
                            <a
                              href={r.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 bg-[#0d3d6e] hover:bg-[#1a5fa8] text-white text-xs font-black px-4 py-2 rounded-lg uppercase tracking-widest transition-colors"
                            >
                              Download
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
