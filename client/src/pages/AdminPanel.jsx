import { useEffect, useState } from 'react';
import { useAuth, API } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const STATUS_STYLES = {
  pending:   'bg-yellow-100 text-yellow-800',
  active:    'bg-emerald-100 text-emerald-800',
  paused:    'bg-slate-100 text-slate-600',
  completed: 'bg-blue-100 text-blue-800',
};

function useApi(token) {
  async function apiFetch(path, options = {}) {
    const res = await fetch(`${API}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...options.headers,
      },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed.');
    return data;
  }
  return apiFetch;
}

const TABS = ['Clients', 'Projects'];

export default function AdminPanel() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const apiFetch = useApi(token);

  const [tab, setTab]         = useState('Clients');
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [toast, setToast]     = useState('');
  const [error, setError]     = useState('');

  // Create client form
  const [clientForm, setClientForm] = useState({ name: '', email: '', password: '', company: '', phone: '' });
  const [clientLoading, setClientLoading] = useState(false);

  // Create project form
  const [projectForm, setProjectForm] = useState({ client: '', name: '', description: '', service: '', status: 'pending', startDate: '', endDate: '', notes: '' });
  const [projectLoading, setProjectLoading] = useState(false);

  // Add report
  const [reportTarget, setReportTarget] = useState('');
  const [reportForm, setReportForm]     = useState({ title: '', description: '', fileUrl: '', date: '' });
  const [reportLoading, setReportLoading] = useState(false);

  // Status update
  const [updatingStatus, setUpdatingStatus] = useState('');

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }

  async function loadClients() {
    try {
      const data = await apiFetch('/admin/clients');
      setClients(data);
    } catch (e) { setError(e.message); }
  }

  async function loadProjects() {
    try {
      const data = await apiFetch('/admin/projects');
      setProjects(data);
    } catch (e) { setError(e.message); }
  }

  useEffect(() => { loadClients(); loadProjects(); }, []);

  function handleLogout() { logout(); navigate('/login'); }

  /* ── Create client ── */
  async function handleCreateClient(e) {
    e.preventDefault();
    setClientLoading(true);
    setError('');
    try {
      await apiFetch('/admin/clients', { method: 'POST', body: JSON.stringify(clientForm) });
      setClientForm({ name: '', email: '', password: '', company: '', phone: '' });
      await loadClients();
      showToast('Client created successfully.');
    } catch (e) { setError(e.message); }
    finally { setClientLoading(false); }
  }

  /* ── Create project ── */
  async function handleCreateProject(e) {
    e.preventDefault();
    setProjectLoading(true);
    setError('');
    try {
      await apiFetch('/admin/projects', { method: 'POST', body: JSON.stringify(projectForm) });
      setProjectForm({ client: '', name: '', description: '', service: '', status: 'pending', startDate: '', endDate: '', notes: '' });
      await loadProjects();
      showToast('Project created successfully.');
    } catch (e) { setError(e.message); }
    finally { setProjectLoading(false); }
  }

  /* ── Update project status ── */
  async function handleStatusChange(projectId, status) {
    setUpdatingStatus(projectId);
    try {
      await apiFetch(`/admin/projects/${projectId}`, { method: 'PATCH', body: JSON.stringify({ status }) });
      await loadProjects();
      showToast('Status updated.');
    } catch (e) { setError(e.message); }
    finally { setUpdatingStatus(''); }
  }

  /* ── Add report ── */
  async function handleAddReport(e) {
    e.preventDefault();
    setReportLoading(true);
    setError('');
    try {
      await apiFetch(`/admin/projects/${reportTarget}/reports`, { method: 'POST', body: JSON.stringify(reportForm) });
      setReportForm({ title: '', description: '', fileUrl: '', date: '' });
      setReportTarget('');
      await loadProjects();
      showToast('Report added.');
    } catch (e) { setError(e.message); }
    finally { setReportLoading(false); }
  }

  /* ── Delete report ── */
  async function handleDeleteReport(projectId, reportId) {
    if (!window.confirm('Delete this report?')) return;
    try {
      await apiFetch(`/admin/projects/${projectId}/reports/${reportId}`, { method: 'DELETE' });
      await loadProjects();
      showToast('Report deleted.');
    } catch (e) { setError(e.message); }
  }

  /* ── Delete project ── */
  async function handleDeleteProject(id) {
    if (!window.confirm('Delete this project?')) return;
    try {
      await apiFetch(`/admin/projects/${id}`, { method: 'DELETE' });
      await loadProjects();
      showToast('Project deleted.');
    } catch (e) { setError(e.message); }
  }

  const inputClass = 'w-full border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a5fa8] focus:border-transparent rounded-lg transition';

  return (
    <div className="min-h-screen bg-[#f0f4f8] pt-[104px]">

      {/* Toast */}
      {toast && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-600 text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-xl animate-pulse">
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="bg-[#0d3d6e] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-white font-black text-lg">Admin Panel</p>
            <p className="text-blue-300 text-xs mt-0.5">Signed in as {user?.name}</p>
          </div>
          <button onClick={handleLogout} className="text-blue-300 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors">
            Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-5 py-4 rounded-xl mb-6">
            {error}
            <button className="ml-3 font-bold hover:underline" onClick={() => setError('')}>Dismiss</button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 bg-white border border-slate-200 rounded-xl p-1 w-fit mb-8 shadow-sm">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${tab === t ? 'bg-[#0d3d6e] text-white' : 'text-slate-500 hover:text-slate-800'}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── CLIENTS TAB ── */}
        {tab === 'Clients' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Create client form */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-base font-black text-slate-900 mb-5">Create New Client</h2>
              <form onSubmit={handleCreateClient} className="space-y-4">
                <input className={inputClass} placeholder="Full Name *" required value={clientForm.name} onChange={e => setClientForm(p => ({ ...p, name: e.target.value }))} />
                <input className={inputClass} type="email" placeholder="Email *" required value={clientForm.email} onChange={e => setClientForm(p => ({ ...p, email: e.target.value }))} />
                <input className={inputClass} type="password" placeholder="Password * (min 6 chars)" required minLength={6} value={clientForm.password} onChange={e => setClientForm(p => ({ ...p, password: e.target.value }))} />
                <input className={inputClass} placeholder="Company" value={clientForm.company} onChange={e => setClientForm(p => ({ ...p, company: e.target.value }))} />
                <input className={inputClass} placeholder="Phone" value={clientForm.phone} onChange={e => setClientForm(p => ({ ...p, phone: e.target.value }))} />
                <button type="submit" disabled={clientLoading} className="w-full bg-[#1a5fa8] hover:bg-[#0d3d6e] disabled:opacity-60 text-white font-black py-3 rounded-lg text-sm uppercase tracking-widest transition-colors">
                  {clientLoading ? 'Creating…' : 'Create Client'}
                </button>
              </form>
            </div>

            {/* Clients list */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-base font-black text-slate-900 mb-5">
                All Clients <span className="text-slate-400 font-normal">({clients.length})</span>
              </h2>
              {clients.length === 0 ? (
                <p className="text-slate-400 text-sm text-center py-10">No clients yet.</p>
              ) : (
                <div className="space-y-3">
                  {clients.map(c => (
                    <div key={c._id} className="flex items-center justify-between gap-4 px-4 py-4 rounded-xl border border-slate-100">
                      <div>
                        <p className="text-sm font-bold text-slate-800">{c.name}</p>
                        <p className="text-xs text-slate-400">{c.email}</p>
                        {c.company && <p className="text-xs text-slate-400">{c.company}</p>}
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.active ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                        {c.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── PROJECTS TAB ── */}
        {tab === 'Projects' && (
          <div className="space-y-8">

            {/* Create project */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-base font-black text-slate-900 mb-5">Create New Project</h2>
              <form onSubmit={handleCreateProject} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Client *</label>
                  <select className={inputClass} required value={projectForm.client} onChange={e => setProjectForm(p => ({ ...p, client: e.target.value }))}>
                    <option value="">Select client</option>
                    {clients.map(c => <option key={c._id} value={c._id}>{c.name} — {c.email}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Project Name *</label>
                  <input className={inputClass} placeholder="e.g. SEO Growth Q1" required value={projectForm.name} onChange={e => setProjectForm(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Service</label>
                  <input className={inputClass} placeholder="e.g. Technical SEO" value={projectForm.service} onChange={e => setProjectForm(p => ({ ...p, service: e.target.value }))} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Status</label>
                  <select className={inputClass} value={projectForm.status} onChange={e => setProjectForm(p => ({ ...p, status: e.target.value }))}>
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Start Date</label>
                  <input type="date" className={inputClass} value={projectForm.startDate} onChange={e => setProjectForm(p => ({ ...p, startDate: e.target.value }))} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">End Date</label>
                  <input type="date" className={inputClass} value={projectForm.endDate} onChange={e => setProjectForm(p => ({ ...p, endDate: e.target.value }))} />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Description</label>
                  <textarea className={`${inputClass} resize-none`} rows={2} placeholder="Project overview…" value={projectForm.description} onChange={e => setProjectForm(p => ({ ...p, description: e.target.value }))} />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Notes (visible to client)</label>
                  <textarea className={`${inputClass} resize-none`} rows={2} placeholder="Internal notes…" value={projectForm.notes} onChange={e => setProjectForm(p => ({ ...p, notes: e.target.value }))} />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" disabled={projectLoading} className="bg-[#1a5fa8] hover:bg-[#0d3d6e] disabled:opacity-60 text-white font-black py-3 px-8 rounded-lg text-sm uppercase tracking-widest transition-colors">
                    {projectLoading ? 'Creating…' : 'Create Project'}
                  </button>
                </div>
              </form>
            </div>

            {/* Add report */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-base font-black text-slate-900 mb-5">Add Report to Project</h2>
              <form onSubmit={handleAddReport} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Project *</label>
                  <select className={inputClass} required value={reportTarget} onChange={e => setReportTarget(e.target.value)}>
                    <option value="">Select project</option>
                    {projects.map(p => <option key={p._id} value={p._id}>{p.client?.name} — {p.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Report Title *</label>
                  <input className={inputClass} placeholder="e.g. March SEO Report" required value={reportForm.title} onChange={e => setReportForm(p => ({ ...p, title: e.target.value }))} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Date</label>
                  <input type="date" className={inputClass} value={reportForm.date} onChange={e => setReportForm(p => ({ ...p, date: e.target.value }))} />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">Description</label>
                  <input className={inputClass} placeholder="Brief description of this report" value={reportForm.description} onChange={e => setReportForm(p => ({ ...p, description: e.target.value }))} />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">File URL (Google Drive, Dropbox, etc.)</label>
                  <input className={inputClass} type="url" placeholder="https://drive.google.com/…" value={reportForm.fileUrl} onChange={e => setReportForm(p => ({ ...p, fileUrl: e.target.value }))} />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" disabled={reportLoading} className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-black py-3 px-8 rounded-lg text-sm uppercase tracking-widest transition-colors">
                    {reportLoading ? 'Adding…' : 'Add Report'}
                  </button>
                </div>
              </form>
            </div>

            {/* Projects list */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-base font-black text-slate-900 mb-5">
                All Projects <span className="text-slate-400 font-normal">({projects.length})</span>
              </h2>
              {projects.length === 0 ? (
                <p className="text-slate-400 text-sm text-center py-10">No projects yet.</p>
              ) : (
                <div className="space-y-4">
                  {projects.map(p => (
                    <div key={p._id} className="border border-slate-200 rounded-xl p-5">
                      <div className="flex items-start justify-between flex-wrap gap-3">
                        <div>
                          <p className="font-black text-slate-900">{p.name}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{p.client?.name} — {p.client?.email}</p>
                          {p.service && <p className="text-xs text-[#1a5fa8] font-semibold mt-0.5">{p.service}</p>}
                        </div>
                        <div className="flex items-center gap-3">
                          <select
                            value={p.status}
                            disabled={updatingStatus === p._id}
                            onChange={e => handleStatusChange(p._id, e.target.value)}
                            className={`text-xs font-bold px-3 py-1.5 rounded-full border-0 cursor-pointer ${STATUS_STYLES[p.status]}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="active">Active</option>
                            <option value="paused">Paused</option>
                            <option value="completed">Completed</option>
                          </select>
                          <button onClick={() => handleDeleteProject(p._id)} className="text-red-400 hover:text-red-600 text-xs font-semibold transition-colors">
                            Delete
                          </button>
                        </div>
                      </div>

                      {/* Reports for this project */}
                      {p.reports?.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Reports</p>
                          {p.reports.map(r => (
                            <div key={r._id} className="flex items-center justify-between gap-3 bg-[#f0f4f8] px-3 py-2.5 rounded-lg">
                              <div>
                                <p className="text-xs font-semibold text-slate-700">{r.title}</p>
                                <p className="text-xs text-slate-400">{new Date(r.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                {r.fileUrl && (
                                  <a href={r.fileUrl} target="_blank" rel="noopener noreferrer" className="text-[#1a5fa8] text-xs font-semibold hover:underline">
                                    View
                                  </a>
                                )}
                                <button onClick={() => handleDeleteReport(p._id, r._id)} className="text-red-400 hover:text-red-600 text-xs font-semibold transition-colors">
                                  Remove
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
