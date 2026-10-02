import React from 'react';
import { CareerOpportunity } from '../types/career';
import { X, ExternalLink, Calendar, MapPin, DollarSign, CheckCircle2, Sparkles, Star, Tag } from 'lucide-react';

interface OpportunityDetailModalProps {
  opportunity: CareerOpportunity | null;
  onClose: () => void;
  isHindi: boolean;
}

export const OpportunityDetailModal: React.FC<OpportunityDetailModalProps> = ({
  opportunity,
  onClose,
  isHindi,
}) => {
  if (!opportunity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="border-b border-slate-800 px-6 py-5 bg-slate-950">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{opportunity.role}</h3>
                {opportunity.isStarred && (
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                )}
              </div>
              <p className="text-sm font-semibold text-cyan-400 mt-1">{opportunity.company}</p>
              
              {/* Unboxed metadata */}
              <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-400">
                <span>{opportunity.location}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">{opportunity.type}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-slate-300">{opportunity.period}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-emerald-400">{opportunity.status}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-xs">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
              Executive Summary & Scope
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/80">
              {opportunity.summary}
            </p>
          </div>

          {/* Impact Metrics Bar */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-950 to-slate-950 border border-cyan-800/40 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-amber-300">Quantitative Rigor & Impact:</p>
              <p className="text-xs text-slate-300 mt-0.5">{opportunity.impactMetrics}</p>
            </div>
          </div>

          {/* Compensation */}
          {opportunity.compensation && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400">Estimated Compensation / Rate:</span>
              <span className="font-mono font-semibold text-emerald-400 text-sm">
                {opportunity.compensation}
              </span>
            </div>
          )}

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
              Key Deliverables & Architectural Milestones
            </h4>
            <ul className="space-y-2.5">
              {opportunity.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
              Technology Stack & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {opportunity.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 font-mono text-xs rounded-md bg-slate-950 border border-slate-800 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Notes */}
          {opportunity.notes && (
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-semibold text-slate-300">Strategic Notes: </span>
              <span className="text-slate-400">{opportunity.notes}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4 bg-slate-950">
          <span className="text-[11px] text-slate-500 font-mono">
            ID: {opportunity.id} · Logged: {opportunity.dateAdded}
          </span>
          <div className="flex items-center gap-3">
            {opportunity.applicationUrl && (
              <a
                href={opportunity.applicationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 border border-cyan-800 rounded-lg transition-colors"
              >
                <span>Open Reference Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
