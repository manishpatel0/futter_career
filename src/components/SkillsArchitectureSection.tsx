import React from 'react';
import { UserProfile } from '../types/career';
import { 
  Cpu, 
  Layers, 
  Workflow, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Boxes, 
  GitBranch, 
  Terminal,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface SkillsArchitectureSectionProps {
  profile: UserProfile;
  isHindi: boolean;
}

export const SkillsArchitectureSection: React.FC<SkillsArchitectureSectionProps> = ({
  profile,
  isHindi,
}) => {
  const skillCategories = [
    {
      title: 'Dart 3.x Language Engine',
      description: 'Sound null-safety, Pattern Matching, Records, Object destructuring, and Dart Isolates for background multithreading.',
      icon: Terminal,
      skills: ['Dart 3.x Patterns', 'Sound Null Safety', 'Isolates & Worker Pools', 'Asynchronous Streams', 'Dart FFI (C/C++)']
    },
    {
      title: 'Flutter Framework & UI',
      description: 'Building 60/120fps fluid cross-platform user interfaces with custom render objects and slivers.',
      icon: Smartphone,
      skills: ['Flutter 3.x SDK', 'CustomPainter & Canvas', 'Slivers & CustomScrollView', 'Material 3 & Cupertino', 'Hero Animations']
    },
    {
      title: 'State Architecture',
      description: 'Predictable, unidirectional data flow with comprehensive test coverage and decoupling.',
      icon: Layers,
      skills: ['Riverpod 2.x (StateNotifier/AsyncNotifier)', 'BLoC & Cubit Pattern', 'Freezed Code Generation', 'Clean Architecture (UI/Domain/Data)']
    },
    {
      title: 'Platforms & Tooling',
      description: 'Native hardware integration and production app store release automation.',
      icon: Workflow,
      skills: ['MethodChannels (Kotlin/Swift)', 'Firebase Suite & Firestore', 'Fastlane Automation', 'GitHub Actions CI/CD', 'Golden & Unit Tests']
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL SPECIFICATIONS & ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isHindi ? 'तकनीकी दक्षता एवं आर्किटेक्चर सिद्धांत' : 'Skills & Architectural Principles'}
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Engineering scalable cross-platform software requiring deep understanding of the Flutter rendering pipeline, Dart compilation target matrices, and clean domain-driven patterns.
          </p>
        </div>

        {/* 4 Category Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Showcase Bento: Architectural Principles & Developer Studio Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8">
          {/* Left: Architectural Rigor Checklist */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Non-Negotiable Standards
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {isHindi ? 'सॉफ्टवेयर गुणवत्ता के मुख्य सिद्धांत' : 'Clean Architecture & Quality Tenets'}
              </h3>
            </div>

            <div className="space-y-3">
              {profile.architecturePrinciples.map((principle, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Studio Mockup Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl group">
              <img
                src="/src/assets/images/flutter_mobile_app_mockup_1790969697145.jpg"
                alt="Flutter Production App Mockup on modern devices"
                referrerPolicy="no-referrer"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                  const fb = document.getElementById('mockup-fallback');
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div
                id="mockup-fallback"
                style={{ display: 'none' }}
                className="w-full h-72 items-center justify-center bg-slate-900 text-center p-6"
              >
                <Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-white">Flutter UI Mockup</p>
                <p className="text-xs text-slate-400">Cross-Platform iOS &amp; Android Target</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="text-cyan-400 font-semibold">Flutter Engine 3.22</span>
                <span>Impeller GPU Backend · 120Hz ProMotion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
