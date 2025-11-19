import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, User, Briefcase, Target, Activity, Clock, Save, X, Sparkles } from 'lucide-react';

const today = new Date().toISOString().split('T')[0];
const initialForm = {
  name: '',
  workDate: today,
  person: '',
  project: '',
  milestone: 'None',
  genericActivity: '',
  plannedStart: '',
  plannedEnd: '',
  actualStart: '',
  actualEnd: '',
};

const defaultProjects = ['Project Alpha', 'Project Beta', 'Project Gamma'];
const defaultPeople = ['John Doe', 'Jane Smith', 'Alex Johnson'];
const defaultMilestones = ['None', 'MVP', 'Phase 1', 'Phase 2', 'Launch'];
const defaultActivities = ['Development', 'Design', 'Testing', 'Documentation', 'Review'];

function AddTaskPage() {
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [alert, setAlert] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setAlert(null);
    setSaving(true);

    setTimeout(() => {
      setAlert({ type: 'success', message: 'Task saved successfully!' });
      setSaving(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 md:p-8">
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .form-field {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        .form-field:nth-child(1) { animation-delay: 0.1s; }
        .form-field:nth-child(2) { animation-delay: 0.15s; }
        .form-field:nth-child(3) { animation-delay: 0.2s; }
        .form-field:nth-child(4) { animation-delay: 0.25s; }
        .form-field:nth-child(5) { animation-delay: 0.3s; }
        .form-field:nth-child(6) { animation-delay: 0.35s; }

        .input-field {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .input-field:hover {
          border-color: #8b5cf6;
          background: rgba(139, 92, 246, 0.05);
          transform: translateY(-2px);
        }

        .input-field:focus {
          outline: none;
          border-color: #8b5cf6;
          background: rgba(139, 92, 246, 0.08);
          box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.4);
          transform: translateY(-2px);
        }

        .btn {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px -8px rgba(139, 92, 246, 0.5);
        }

        .btn:active:not(:disabled) {
          transform: translateY(-1px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #8b5cf6 100%);
          background-size: 200% 200%;
        }

        .btn-primary:hover:not(:disabled) {
          background-position: right center;
        }

        .btn-saving {
          background: linear-gradient(270deg, #8b5cf6, #a78bfa, #8b5cf6);
          background-size: 600% 600%;
          animation: shimmer 2s ease infinite;
        }

        .card {
          backdrop-filter: blur(20px);
          background: rgba(30, 27, 75, 0.5);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .card:hover {
          border-color: rgba(139, 92, 246, 0.4);
          background: rgba(30, 27, 75, 0.6);
        }

        .icon-wrapper {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .form-group:hover .icon-wrapper {
          transform: scale(1.15) rotate(8deg);
          color: #a78bfa;
        }

        .alert {
          animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .section-badge {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.2));
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .glass-effect {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.05));
          backdrop-filter: blur(10px);
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`mb-8 ${mounted ? 'animate-slide-down' : 'opacity-0'}`}>
          <button className="flex items-center gap-2 text-slate-400 hover:text-violet-400 mb-6 transition-all duration-300 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="font-medium">Back to Tasks</span>
          </button>
          
          <div className="relative overflow-hidden rounded-3xl p-12 shadow-2xl" style={{background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)', backdropFilter: 'blur(20px)', border: '1px solid rgba(139, 92, 246, 0.3)'}}>
            <div className="absolute top-4 right-4 section-badge px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
                <span className="text-xs font-semibold text-violet-300 uppercase tracking-wider">WORK MANAGER 2.0</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-3">Add Task / Activity</h1>
            <p className="text-slate-300 text-lg max-w-3xl">
              Capture daily work, orchestrate schedules, and surface insights that keep your delivery rhythm smooth—without spreadsheets or status-chasing.
            </p>
          </div>
        </div>

        {/* Alert */}
        {alert && (
          <div className={`alert mb-6 p-5 rounded-2xl ${
            alert.type === 'success' 
              ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 border-2 border-emerald-500/40 text-emerald-200' 
              : 'bg-gradient-to-r from-red-500/20 to-rose-500/20 border-2 border-red-500/40 text-red-200'
          } shadow-2xl backdrop-blur-xl`}>
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${alert.type === 'success' ? 'bg-emerald-400' : 'bg-red-400'} animate-pulse shadow-lg`}></div>
              <span className="font-semibold">{alert.message}</span>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className={`${mounted ? 'animate-scale-in' : 'opacity-0'}`}>
          {/* Basic Information Section */}
          <div className="card rounded-3xl shadow-2xl p-8 mb-6 transition-all duration-500 hover:shadow-violet-500/20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg animate-float">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Basic Information</h2>
                <p className="text-slate-400 text-sm mt-1">Core details about your task</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Task Name */}
              <div className="form-field md:col-span-2 form-group">
                <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                  Task Name
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 icon-wrapper">
                    <Activity className="w-5 h-5 text-violet-400" />
                  </div>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter task name"
                    className="input-field w-full pl-14 pr-5 py-4 border-2 border-slate-700 rounded-2xl text-white placeholder-slate-500 bg-slate-800/50"
                  />
                </div>
              </div>

              {/* Today's Date */}
              <div className="form-field form-group">
                <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                  Today's Date
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 icon-wrapper">
                    <Calendar className="w-5 h-5 text-violet-400" />
                  </div>
                  <input
                    name="workDate"
                    type="date"
                    value={form.workDate}
                    onChange={handleChange}
                    className="input-field w-full pl-14 pr-5 py-4 border-2 border-slate-700 rounded-2xl text-white bg-slate-800/50"
                  />
                </div>
              </div>

              {/* Person */}
              <div className="form-field form-group">
                <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                  Person
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 icon-wrapper">
                    <User className="w-5 h-5 text-violet-400" />
                  </div>
                  <input
                    name="person"
                    type="text"
                    list="people-options"
                    value={form.person}
                    onChange={handleChange}
                    placeholder="Who is responsible?"
                    className="input-field w-full pl-14 pr-5 py-4 border-2 border-slate-700 rounded-2xl text-white placeholder-slate-500 bg-slate-800/50"
                  />
                  <datalist id="people-options">
                    {defaultPeople.map((person) => (
                      <option key={person} value={person} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Project */}
              <div className="form-field form-group">
                <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                  Project
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 icon-wrapper pointer-events-none z-10">
                    <Briefcase className="w-5 h-5 text-violet-400" />
                  </div>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className="input-field w-full pl-14 pr-5 py-4 border-2 border-slate-700 rounded-2xl text-white bg-slate-800/50 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a project</option>
                    {defaultProjects.map((project) => (
                      <option key={project} value={project} className="bg-slate-800">{project}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Milestone */}
              <div className="form-field form-group">
                <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                  Milestone
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 icon-wrapper pointer-events-none z-10">
                    <Target className="w-5 h-5 text-violet-400" />
                  </div>
                  <select
                    name="milestone"
                    value={form.milestone}
                    onChange={handleChange}
                    className="input-field w-full pl-14 pr-5 py-4 border-2 border-slate-700 rounded-2xl text-white bg-slate-800/50 appearance-none cursor-pointer"
                  >
                    {defaultMilestones.map((milestone) => (
                      <option key={milestone} value={milestone} className="bg-slate-800">{milestone}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Generic Activity */}
              <div className="form-field form-group">
                <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                  Generic Activity
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 icon-wrapper pointer-events-none z-10">
                    <Activity className="w-5 h-5 text-violet-400" />
                  </div>
                  <select
                    name="genericActivity"
                    value={form.genericActivity}
                    onChange={handleChange}
                    className="input-field w-full pl-14 pr-5 py-4 border-2 border-slate-700 rounded-2xl text-white bg-slate-800/50 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select activity type</option>
                    {defaultActivities.map((activity) => (
                      <option key={activity} value={activity} className="bg-slate-800">{activity}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Dates Section */}
          <div className="card rounded-3xl shadow-2xl p-8 mb-8 transition-all duration-500 hover:shadow-violet-500/20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Timeline & Dates</h2>
                <p className="text-slate-400 text-sm mt-1">Plan and track execution dates</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Planned Start Date */}
              <div className="form-field form-group">
                <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                  Planned Start Date
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 icon-wrapper">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <input
                    name="plannedStart"
                    type="date"
                    value={form.plannedStart}
                    onChange={handleChange}
                    className="input-field w-full pl-14 pr-5 py-4 border-2 border-slate-700 rounded-2xl text-white bg-slate-800/50"
                  />
                </div>
              </div>

              {/* Planned End Date */}
              <div className="form-field form-group">
                <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                  Planned End Date
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 icon-wrapper">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <input
                    name="plannedEnd"
                    type="date"
                    value={form.plannedEnd}
                    onChange={handleChange}
                    className="input-field w-full pl-14 pr-5 py-4 border-2 border-slate-700 rounded-2xl text-white bg-slate-800/50"
                  />
                </div>
              </div>

              {/* Actual Start Date */}
              <div className="form-field form-group">
                <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                  Actual Start Date
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 icon-wrapper">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <input
                    name="actualStart"
                    type="date"
                    value={form.actualStart}
                    onChange={handleChange}
                    className="input-field w-full pl-14 pr-5 py-4 border-2 border-slate-700 rounded-2xl text-white bg-slate-800/50"
                  />
                </div>
              </div>

              {/* Actual End Date */}
              <div className="form-field form-group">
                <label className="block text-sm font-bold text-slate-300 mb-3 uppercase tracking-wide">
                  Actual End Date
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 icon-wrapper">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <input
                    name="actualEnd"
                    type="date"
                    value={form.actualEnd}
                    onChange={handleChange}
                    className="input-field w-full pl-14 pr-5 py-4 border-2 border-slate-700 rounded-2xl text-white bg-slate-800/50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-end animate-fade-in">
            <button
              type="button"
              className="btn px-10 py-4 bg-slate-800/80 border-2 border-slate-600 text-slate-300 font-bold rounded-2xl hover:bg-slate-700/80 hover:border-slate-500 flex items-center justify-center gap-3 shadow-xl"
              onClick={() => setForm(initialForm)}
            >
              <X className="w-6 h-6" />
              Cancel
            </button>
            <button
              type="button"
              disabled={saving}
              onClick={handleSubmit}
              className={`btn px-10 py-4 ${saving ? 'btn-saving' : 'btn-primary'} text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-2xl disabled:opacity-75 disabled:cursor-not-allowed relative overflow-hidden`}
            >
              <Save className={`w-6 h-6 ${saving ? 'animate-spin' : ''}`} />
              <span className="relative z-10">{saving ? 'Saving...' : 'Start logging work'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskPage;