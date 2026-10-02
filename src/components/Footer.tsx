import React from 'react';
import { UserProfile } from '../types/career';
import { Heart, ArrowUp, Code2 } from 'lucide-react';

interface FooterProps {
  profile: UserProfile;
  isHindi: boolean;
}

export const Footer: React.FC<FooterProps> = ({ profile, isHindi }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand and Copyright */}
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            <span className="font-mono text-cyan-400">&lt;dart/&gt;</span>
            <span>{profile.name} · Myself Intro &amp; Career Hub</span>
          </p>
          <p className="text-slate-500 text-[11px]">
            Engineered with Flutter 3.x, Dart 3.x patterns, and modern responsive web architecture.
          </p>
        </div>

        {/* Links & Scroll to top */}
        <div className="flex items-center gap-6">
          <a href="#intro" className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'परिचय' : 'Intro'}
          </a>
          <a href="#opportunities" className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'अवसर' : 'Opportunities'}
          </a>
          <a href="#flutter-code" className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'कोड' : 'Dart Code'}
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'संपर्क' : 'Contact'}
          </a>
          <button
            onClick={scrollToTop}
            title="Scroll to top of page"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
