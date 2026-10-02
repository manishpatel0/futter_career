import React from 'react';
import { Plus, Download, Code2, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenAddModal: () => void;
  onDownloadZip: () => void;
  activeSection: string;
  isHindi: boolean;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAddModal,
  onDownloadZip,
  activeSection,
  isHindi,
  onToggleLanguage,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#intro" 
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
        >
          <span className="font-mono text-cyan-400 font-extrabold">&lt;dart/&gt;</span>
          <span>myself.dart</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a
            href="#intro"
            className={`transition-colors hover:text-cyan-400 ${
              activeSection === 'intro' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            {isHindi ? 'मेरा परिचय' : 'Intro'}
          </a>
          <a
            href="#opportunities"
            className={`transition-colors hover:text-cyan-400 ${
              activeSection === 'opportunities' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            {isHindi ? 'करियर अवसर' : 'Career Opportunities'}
          </a>
          <a
            href="#simulator"
            className={`transition-colors hover:text-cyan-400 ${
              activeSection === 'simulator' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            {isHindi ? 'फ्लटर सिम्युलेटर' : 'Flutter Simulator'}
          </a>
          <a
            href="#flutter-code"
            className={`transition-colors hover:text-cyan-400 ${
              activeSection === 'flutter-code' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            {isHindi ? 'डार्ट कोड' : 'Dart Source Code'}
          </a>
          <a
            href="#skills"
            className={`transition-colors hover:text-cyan-400 ${
              activeSection === 'skills' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            {isHindi ? 'दक्षता व सिद्धांत' : 'Skills & Architecture'}
          </a>
          <a
            href="#contact"
            className={`transition-colors hover:text-cyan-400 ${
              activeSection === 'contact' ? 'text-cyan-400 font-semibold' : ''
            }`}
          >
            {isHindi ? 'संपर्क' : 'Contact'}
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLanguage}
            title="Toggle Hindi / English text"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-xs">{isHindi ? 'EN' : 'हिन्दी'}</span>
          </button>

          <button
            onClick={onDownloadZip}
            title="Download full Flutter & Dart project as ZIP"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Export Flutter App</span>
          </button>

          <button
            onClick={onOpenAddModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>{isHindi ? 'नया अवसर जोड़ें' : 'Add Opportunity'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
