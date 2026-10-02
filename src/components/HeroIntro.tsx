import React from 'react';
import { UserProfile } from '../types/career';
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Phone, 
  Edit3, 
  ArrowUpRight, 
  Terminal, 
  Sparkles,
  FileCode2
} from 'lucide-react';

interface HeroIntroProps {
  profile: UserProfile;
  isHindi: boolean;
  onEditProfile: () => void;
  onExploreCareers: () => void;
  onViewFlutterCode: () => void;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({
  profile,
  isHindi,
  onEditProfile,
  onExploreCareers,
  onViewFlutterCode,
}) => {
  return (
    <section id="intro" className="relative pt-8 pb-16 md:pt-12 md:pb-24 border-b border-slate-900">
      {/* Subtle ambient gradient mesh in background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.12),rgba(255,255,255,0))]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Availability unboxed metadata header */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {profile.availability}
          </span>
          <span aria-hidden="true">·</span>
          <span>{profile.location}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono text-cyan-400">Flutter 3.x / Dart 3.x</span>
        </div>

        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: High-character typography and intro */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">
                  {isHindi ? 'पेशेवर प्रोफाइल और बायोडाटा' : 'Mobile Architect & Engineer'}
                </span>
                <button
                  onClick={onEditProfile}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 font-medium transition-colors"
                  title="Customize your personal name, bio, and contacts"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isHindi ? 'प्रोफ़ाइल बदलें' : 'Edit Intro'}</span>
                </button>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
                {profile.name}
                {profile.hindiName && (
                  <span className="block text-2xl sm:text-3xl font-medium text-slate-400 mt-1">
                    {profile.hindiName}
                  </span>
                )}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-cyan-300 leading-snug">
                {profile.title}
              </p>
            </div>

            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              {isHindi ? profile.hindiBio : profile.bio}
            </p>

            {/* Editorial Quantitative Rigor Metrics */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-slate-800/80 py-5">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-white">
                  {profile.yearsExperience}+
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-white">
                  {profile.appsPublished}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Production Apps</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-cyan-400">
                  {profile.downloads}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">App Store Downloads</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-sky-400">
                  {profile.githubStars}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">GitHub Repos & Stars</p>
              </div>
            </div>

            {/* Action buttons & direct links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreCareers}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all"
              >
                <span>{isHindi ? 'सभी करियर अवसर देखें' : 'Explore Career Opportunities'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewFlutterCode}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <FileCode2 className="w-4 h-4 text-cyan-400" />
                <span>{isHindi ? 'डार्ट / फ्लटर कोड देखें' : 'View Flutter Dart Source'}</span>
              </button>
            </div>

            {/* Contact channels */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profile.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">|</span>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profile.phone}</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">|</span>
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor with Portrait & Flutter Terminal Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative subtle glow */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-transparent blur-lg opacity-70" />
              
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
                {/* Image slot with strict Zero-Broken-Image fallback container */}
                <div className="aspect-square w-full relative bg-slate-950 overflow-hidden">
                  <img
                    src={profile.avatarUrl}
                    alt={`${profile.name} - Flutter Software Engineer`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      // Fallback to high-contrast stylized avatar container if image fails
                      (e.currentTarget as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById('hero-img-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    id="hero-img-fallback"
                    style={{ display: 'none' }}
                    className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 to-slate-950 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-mono text-2xl font-bold mb-4">
                      FD
                    </div>
                    <p className="text-white font-bold text-lg">{profile.name}</p>
                    <p className="text-xs text-slate-400 mt-1">Flutter & Dart Architect</p>
                  </div>

                  {/* Scrim overlay for high contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Badgeless overlay text at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>$ flutter run --release -d web,mobile</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-xs text-slate-400">
                      <span>Dart 3.x AOT Engine</span>
                      <span className="text-emerald-400 font-mono">60 FPS Stable</span>
                    </div>
                  </div>
                </div>

                {/* Bottom code snippet accent */}
                <div className="p-4 bg-slate-950/90 border-t border-slate-800/80 font-mono text-xs text-slate-400">
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <span>lib/main.dart</span>
                    <span className="text-cyan-500">MaterialApp( )</span>
                  </div>
                  <pre className="text-slate-300 overflow-x-auto text-[11px] leading-snug">
                    <code>{`final engineer = FlutterDeveloper(
  name: '${profile.name}',
  status: OpportunityStatus.openToOffers,
  specialty: const ['Riverpod', 'CleanArch', 'C++ Channels'],
);`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
