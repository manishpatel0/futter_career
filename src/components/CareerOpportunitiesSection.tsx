import React, { useState, useMemo } from 'react';
import { CareerOpportunity, OpportunityType, OpportunityStatus } from '../types/career';
import { 
  Plus, 
  Search, 
  Filter, 
  Star, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Briefcase, 
  DollarSign, 
  Clock, 
  MapPin, 
  Trash2, 
  Edit2, 
  Sparkles,
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';

interface CareerOpportunitiesSectionProps {
  opportunities: CareerOpportunity[];
  isHindi: boolean;
  onOpenAddModal: () => void;
  onEditOpportunity: (opp: CareerOpportunity) => void;
  onDeleteOpportunity: (id: string) => void;
  onToggleStar: (id: string) => void;
  onViewDetails: (opp: CareerOpportunity) => void;
}

export const CareerOpportunitiesSection: React.FC<CareerOpportunitiesSectionProps> = ({
  opportunities,
  isHindi,
  onOpenAddModal,
  onEditOpportunity,
  onDeleteOpportunity,
  onToggleStar,
  onViewDetails,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const typesList: (string | OpportunityType)[] = [
    'All',
    'Full-time',
    'Contract',
    'Remote Global',
    'Open Source',
    'Founding Engineer',
    'Freelance / Consultant'
  ];

  const statusesList: (string | OpportunityStatus)[] = [
    'All',
    'Active Opportunity',
    'In Discussion',
    'Target Role',
    'Completed Milestone',
    'Open to Offers'
  ];

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(item => {
      const matchType = selectedType === 'All' || item.type === selectedType;
      const matchStatus = selectedStatus === 'All' || item.status === selectedStatus;
      
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = !query || 
        item.role.toLowerCase().includes(query) ||
        item.company.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.techStack.some(t => t.toLowerCase().includes(query));

      return matchType && matchStatus && matchSearch;
    });
  }, [opportunities, selectedType, selectedStatus, searchQuery]);

  const activeCount = opportunities.filter(o => o.status === 'Active Opportunity' || o.status === 'In Discussion').length;

  return (
    <section id="opportunities" className="py-16 md:py-24 border-b border-slate-900 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER PATHWAYS & OPPORTUNITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isHindi ? 'विस्तृत करियर अवसर व अनुभव' : 'Career Opportunities & Track Record'}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-white tabular-nums">{opportunities.length} Total Milestones</span>
              <span aria-hidden="true">·</span>
              <span className="text-cyan-400 tabular-nums">{activeCount} Active or In Pipeline</span>
              <span aria-hidden="true">·</span>
              <span>Updated October 2026</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              <span>{isHindi ? 'नया अवसर जोड़ें (Add Opportunity)' : 'Add Career Opportunity'}</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="space-y-4 mb-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isHindi ? "भूमिका, कंपनी या तकनीक खोजें (उदा: Flutter, Riverpod)..." : "Search role, company, or tech stack (e.g. Riverpod, BLE, GraphQL)..."}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 whitespace-nowrap hidden sm:inline">Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                aria-label="Filter opportunities by status"
                className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                {statusesList.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Type Segmented Filter Controls */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs text-slate-400 mr-2 flex items-center gap-1 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
              <span>Type:</span>
            </span>
            {typesList.map((type) => {
              const isActive = selectedType === type;
              return (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-950/60 border border-slate-800/80 hover:bg-slate-800'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Opportunities List Container */}
        {filteredOpportunities.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-800 p-12 text-center">
            <Briefcase className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-base font-medium text-slate-300">
              {isHindi ? 'कोई अवसर नहीं मिला' : 'No matching career opportunities found'}
            </p>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              {searchQuery || selectedType !== 'All' || selectedStatus !== 'All'
                ? 'Try clearing the search query or switching filters to see more results.'
                : 'Click "+ Add Career Opportunity" to begin detailing your journey.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
                setSelectedStatus('All');
              }}
              className="mt-4 px-3.5 py-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 border border-cyan-800 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOpportunities.map((opp) => {
              const isExpanded = expandedId === opp.id;

              return (
                <div
                  key={opp.id}
                  className={`group relative rounded-xl border transition-all duration-200 bg-slate-900/70 hover:bg-slate-900 ${
                    opp.isStarred
                      ? 'border-cyan-500/40 ring-1 ring-cyan-500/10'
                      : 'border-slate-800/90 hover:border-slate-700'
                  }`}
                >
                  <div className="p-5 sm:p-6">
                    {/* Top Row: Role, Company, Status, and Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {opp.role}
                          </h3>
                          {opp.isStarred && (
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline shrink-0" />
                          )}
                        </div>

                        {/* Unboxed Metadata Line with typographic separators */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                          <span className="font-semibold text-slate-200">{opp.company}</span>
                          <span aria-hidden="true">·</span>
                          <span>{opp.location}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-cyan-400">{opp.type}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono text-slate-300">{opp.period}</span>
                        </div>
                      </div>

                      {/* Right Meta & Actions */}
                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {opp.status}
                        </span>

                        <div className="flex items-center gap-1 text-slate-400">
                          <button
                            onClick={() => onToggleStar(opp.id)}
                            title="Toggle star / highlight"
                            className="p-1.5 hover:text-amber-400 transition-colors rounded hover:bg-slate-800"
                          >
                            <Star className={`w-3.5 h-3.5 ${opp.isStarred ? 'fill-amber-400 text-amber-400' : ''}`} />
                          </button>
                          <button
                            onClick={() => onEditOpportunity(opp)}
                            title="Edit opportunity details"
                            className="p-1.5 hover:text-cyan-400 transition-colors rounded hover:bg-slate-800"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => onDeleteOpportunity(opp.id)}
                            title="Delete this opportunity"
                            className="p-1.5 hover:text-red-400 transition-colors rounded hover:bg-slate-800"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {opp.summary}
                    </p>

                    {/* Tech Stack Unboxed Tags */}
                    <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                      {opp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 font-mono text-[11px] rounded bg-slate-950 border border-slate-800 text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact Quantitative Rigor Metric Bar */}
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-slate-800/80 text-xs">
                      <div className="flex items-center gap-2 text-amber-300 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{opp.impactMetrics}</span>
                      </div>

                      <div className="flex items-center gap-3 text-slate-400">
                        {opp.compensation && (
                          <span className="font-mono text-slate-300">
                            {opp.compensation}
                          </span>
                        )}

                        <button
                          onClick={() => setExpandedId(isExpanded ? null : opp.id)}
                          className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                        >
                          <span>{isExpanded ? 'Less' : 'Deliverables'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        <button
                          onClick={() => onViewDetails(opp)}
                          className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                        >
                          <span>Inspect</span>
                          <ArrowRight className="w-3 h-3 text-slate-500" />
                        </button>
                      </div>
                    </div>

                    {/* Expandable Deliverables Section */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-800 space-y-3 bg-slate-950/40 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-5 sm:p-6 rounded-b-xl">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                          Key Deliverables & Technical Architecture:
                        </p>
                        <ul className="space-y-2">
                          {opp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                              <span className="text-cyan-400 font-mono mt-0.5">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {opp.notes && (
                          <div className="pt-2 text-xs text-slate-400 italic">
                            <span className="font-semibold text-slate-300 not-italic">Note: </span>
                            {opp.notes}
                          </div>
                        )}

                        {opp.applicationUrl && (
                          <div className="pt-2">
                            <a
                              href={opp.applicationUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300"
                            >
                              <span>Official Career Portal / Reference</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
