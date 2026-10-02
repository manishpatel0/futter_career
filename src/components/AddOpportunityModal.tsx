import React, { useState, useEffect } from 'react';
import { CareerOpportunity, OpportunityType, OpportunityStatus } from '../types/career';
import { X, Plus, Sparkles, Briefcase, DollarSign, MapPin, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AddOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (opportunity: CareerOpportunity) => void;
  initialData?: CareerOpportunity | null;
  isHindi: boolean;
}

export const AddOpportunityModal: React.FC<AddOpportunityModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  isHindi,
}) => {
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [type, setType] = useState<OpportunityType>('Full-time');
  const [status, setStatus] = useState<OpportunityStatus>('Active Opportunity');
  const [location, setLocation] = useState('Remote Global');
  const [period, setPeriod] = useState('2026 - Present');
  const [compensation, setCompensation] = useState('');
  const [summary, setSummary] = useState('');
  const [responsibilitiesText, setResponsibilitiesText] = useState('');
  const [techStackText, setTechStackText] = useState('');
  const [impactMetrics, setImpactMetrics] = useState('');
  const [applicationUrl, setApplicationUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [isStarred, setIsStarred] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setRole(initialData.role);
      setCompany(initialData.company);
      setType(initialData.type);
      setStatus(initialData.status);
      setLocation(initialData.location);
      setPeriod(initialData.period);
      setCompensation(initialData.compensation);
      setSummary(initialData.summary);
      setResponsibilitiesText(initialData.responsibilities.join('\n'));
      setTechStackText(initialData.techStack.join(', '));
      setImpactMetrics(initialData.impactMetrics);
      setApplicationUrl(initialData.applicationUrl || '');
      setNotes(initialData.notes || '');
      setIsStarred(!!initialData.isStarred);
    } else {
      setRole('');
      setCompany('');
      setType('Full-time');
      setStatus('Active Opportunity');
      setLocation('Remote Global / Hybrid');
      setPeriod('2026 - Present');
      setCompensation('$120,000 - $145,000 / yr');
      setSummary('');
      setResponsibilitiesText(
        'Architect and implement scalable Flutter 3 cross-platform applications.\nEnsure high test coverage and clean DDD architecture.'
      );
      setTechStackText('Flutter, Dart, Riverpod, Firebase, GraphQL, CI/CD');
      setImpactMetrics('High-leverage engineering leadership');
      setApplicationUrl('');
      setNotes('');
      setIsStarred(false);
    }
    setError(null);
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role.trim()) {
      setError(isHindi ? 'कृपया भूमिका/पद का नाम भरें' : 'Please enter the role title');
      return;
    }
    if (!company.trim()) {
      setError(isHindi ? 'कृपया कंपनी/संस्थान का नाम भरें' : 'Please enter the company name');
      return;
    }
    if (!summary.trim()) {
      setError(isHindi ? 'कृपया संक्षिप्त विवरण भरें' : 'Please enter an opportunity summary');
      return;
    }

    const techArray = techStackText
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const respArray = responsibilitiesText
      .split('\n')
      .map(s => s.replace(/^[•\-\*]\s*/, '').trim())
      .filter(Boolean);

    const updatedOpportunity: CareerOpportunity = {
      id: initialData ? initialData.id : `opp-${Date.now()}`,
      role: role.trim(),
      company: company.trim(),
      type,
      status,
      location: location.trim() || 'Remote',
      period: period.trim() || '2026',
      compensation: compensation.trim() || 'Competitive',
      summary: summary.trim(),
      responsibilities: respArray.length > 0 ? respArray : ['Lead and execute key product engineering initiatives.'],
      techStack: techArray.length > 0 ? techArray : ['Flutter', 'Dart'],
      impactMetrics: impactMetrics.trim() || 'Strategic growth milestone',
      applicationUrl: applicationUrl.trim() || undefined,
      notes: notes.trim() || undefined,
      isStarred,
      dateAdded: initialData ? initialData.dateAdded : new Date().toISOString().split('T')[0],
    };

    onSave(updatedOpportunity);

    // Confetti celebration
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#38bdf8', '#fbbf24']
      });
    } catch {
      // ignore
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">
              {initialData
                ? (isHindi ? 'करियर अवसर संपादित करें' : 'Edit Career Opportunity')
                : (isHindi ? 'नया करियर अवसर जोड़ें' : 'Add New Career Opportunity')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {error && (
            <div className="p-3 text-xs rounded-lg bg-red-950/60 border border-red-800 text-red-200">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isHindi ? 'भूमिका / पद (Role Title) *' : 'Job Role / Title *'}
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Senior Flutter & Dart Architect"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isHindi ? 'कंपनी / संगठन (Company Name) *' : 'Company / Organization *'}
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Apex Global Technologies"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isHindi ? 'अवसर का प्रकार (Type)' : 'Opportunity Type'}
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as OpportunityType)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Full-time">Full-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote Global">Remote Global</option>
                <option value="Open Source">Open Source</option>
                <option value="Founding Engineer">Founding Engineer</option>
                <option value="Freelance / Consultant">Freelance / Consultant</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isHindi ? 'वर्तमान स्थिति (Status)' : 'Status'}
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as OpportunityStatus)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Active Opportunity">Active Opportunity</option>
                <option value="In Discussion">In Discussion</option>
                <option value="Target Role">Target Role</option>
                <option value="Completed Milestone">Completed Milestone</option>
                <option value="Offer Received">Offer Received</option>
                <option value="Open to Offers">Open to Offers</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isHindi ? 'स्थान (Location)' : 'Location'}
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Remote / Bengaluru / San Francisco"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isHindi ? 'समय अवधि (Period / Timeline)' : 'Timeline / Period'}
              </label>
              <input
                type="text"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                placeholder="e.g. 2024 - Present or Q4 2026"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isHindi ? 'मुआवजा / पैकेज (Compensation)' : 'Compensation / Rate'}
              </label>
              <input
                type="text"
                value={compensation}
                onChange={(e) => setCompensation(e.target.value)}
                placeholder="e.g. $130k - $160k / yr"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {isHindi ? 'संक्षिप्त विवरण (Summary) *' : 'Summary & Scope *'}
            </label>
            <textarea
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Overview of the product, problem space, and your core technical mission..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {isHindi ? 'प्रमुख जिम्मेदारियां (Deliverables, one per line)' : 'Key Responsibilities / Deliverables (one per line)'}
            </label>
            <textarea
              rows={3}
              value={responsibilitiesText}
              onChange={(e) => setResponsibilitiesText(e.target.value)}
              placeholder="• Engineered high-performance custom render objects&#10;• Reduced latency by 40% with isolate multithreading&#10;• Led CI/CD automated deployment to App Store"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono text-[11px]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {isHindi ? 'तकनीक स्टैक (Tech Stack, comma separated)' : 'Tech Stack (comma separated)'}
            </label>
            <input
              type="text"
              value={techStackText}
              onChange={(e) => setTechStackText(e.target.value)}
              placeholder="Flutter 3, Dart 3, Riverpod, Firebase, GraphQL, Isolate"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono text-[11px]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isHindi ? 'प्रभाव / परिणाम मीट्रिक (Impact Metrics)' : 'Quantitative Impact Metrics'}
              </label>
              <input
                type="text"
                value={impactMetrics}
                onChange={(e) => setImpactMetrics(e.target.value)}
                placeholder="e.g. 1.2M+ MAU · 4.9★ Store Rating · 40% speedup"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isHindi ? 'संदर्भ लिंक / करियर पोर्टल URL' : 'Portal / Reference URL'}
              </label>
              <input
                type="url"
                value={applicationUrl}
                onChange={(e) => setApplicationUrl(e.target.value)}
                placeholder="https://company.com/careers/role"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {isHindi ? 'विशेष नोट्स (Internal Notes)' : 'Internal Notes / Strategy'}
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Interview scheduled with Engineering VP on Friday"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="isStarredCheckbox"
              checked={isStarred}
              onChange={(e) => setIsStarred(e.target.checked)}
              className="rounded bg-slate-950 border-slate-800 text-cyan-500 focus:ring-cyan-500"
            />
            <label htmlFor="isStarredCheckbox" className="text-xs text-slate-300 select-none cursor-pointer">
              {isHindi ? 'इस अवसर को हाइलाइट / स्टार करें' : 'Highlight as Featured Milestone / Top Target'}
            </label>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-950 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{initialData ? 'Update Opportunity' : 'Save Opportunity'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
