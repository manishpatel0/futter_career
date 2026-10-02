import React, { useState } from 'react';
import { UserProfile, CareerOpportunity } from '../types/career';
import { 
  Smartphone, 
  RotateCw, 
  Layers, 
  Sparkles, 
  ChevronRight, 
  ExternalLink, 
  Terminal, 
  Flame, 
  Zap, 
  Code,
  CheckCircle,
  Briefcase
} from 'lucide-react';

interface FlutterSimulatorProps {
  profile: UserProfile;
  opportunities: CareerOpportunity[];
  isHindi: boolean;
  onOpenAddModal: () => void;
  onViewCode: () => void;
}

export const FlutterSimulator: React.FC<FlutterSimulatorProps> = ({
  profile,
  opportunities,
  isHindi,
  onOpenAddModal,
  onViewCode,
}) => {
  const [deviceModel, setDeviceModel] = useState<'iphone' | 'pixel'>('iphone');
  const [activeTab, setActiveTab] = useState<'intro' | 'careers' | 'tree'>('careers');
  const [isHotReloading, setIsHotReloading] = useState(false);
  const [reloadMessage, setReloadMessage] = useState<string | null>(null);

  const handleHotReload = () => {
    setIsHotReloading(true);
    setReloadMessage('Performing Flutter Hot Reload...');
    setTimeout(() => {
      setIsHotReloading(false);
      setReloadMessage('⚡ Hot Reload completed in 142ms. State preserved.');
      setTimeout(() => setReloadMessage(null), 3500);
    }, 400);
  };

  return (
    <section id="simulator" className="py-16 md:py-24 border-b border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Smartphone className="w-3.5 h-3.5" />
              <span>LIVE FLUTTER ENGINE SIMULATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isHindi ? 'फ्लटर मोबाइल सिमुलेटर व विजेट इन्स्पेक्टर' : 'Flutter Mobile Simulator & Widget Inspector'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl">
              Experience the Flutter & Dart mobile application with real-time state synchronization, Material 3 Dark theme, and interactive widget tree inspection.
            </p>
          </div>

          {/* Simulator Toolbar Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleHotReload}
              disabled={isHotReloading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-800/80 rounded-lg hover:bg-amber-900/40 transition-colors"
            >
              <Zap className={`w-3.5 h-3.5 text-amber-400 ${isHotReloading ? 'animate-spin' : ''}`} />
              <span>⚡ Hot Reload</span>
            </button>

            {/* Device Switcher */}
            <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
              <button
                onClick={() => setDeviceModel('iphone')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  deviceModel === 'iphone'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                iPhone 16 Pro
              </button>
              <button
                onClick={() => setDeviceModel('pixel')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  deviceModel === 'pixel'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Pixel 9 Pro
              </button>
            </div>
          </div>
        </div>

        {/* Hot Reload Status Notification */}
        {reloadMessage && (
          <div className="mb-6 p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800 text-xs font-mono text-cyan-300 flex items-center justify-between">
            <span>{reloadMessage}</span>
            <span className="text-[10px] text-cyan-500">AOT JIT · 60fps</span>
          </div>
        )}

        {/* Main Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side: Mobile Phone Shell */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              className={`relative bg-slate-950 border-[8px] sm:border-[10px] shadow-2xl transition-all duration-300 overflow-hidden ${
                deviceModel === 'iphone'
                  ? 'border-slate-800 rounded-[48px] w-[320px] sm:w-[360px] h-[640px] sm:h-[690px]'
                  : 'border-slate-800 rounded-[38px] w-[320px] sm:w-[350px] h-[650px] sm:h-[690px]'
              }`}
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30">
                {deviceModel === 'iphone' ? (
                  <div className="w-24 h-5 bg-black rounded-full flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-900" />
                  </div>
                ) : (
                  <div className="w-3.5 h-3.5 bg-black rounded-full border border-slate-900" />
                )}
              </div>

              {/* In-Phone Flutter Viewport */}
              <div className="w-full h-full flex flex-col bg-[#030712] text-slate-100 font-sans select-none overflow-hidden">
                {/* Phone Status Bar */}
                <div className="pt-2 px-6 pb-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <div className="w-4 h-2 rounded-sm border border-slate-400 p-0.5 flex items-center">
                      <div className="w-2.5 h-full bg-slate-400 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Simulated Flutter AppBar */}
                <div className="px-4 py-2.5 border-b border-slate-900 flex items-center justify-between bg-slate-950/80">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-cyan-400">&lt;flutter/&gt;</span>
                    <span className="text-xs font-bold text-white tracking-tight">myself.dart</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={onOpenAddModal}
                      className="px-2 py-0.5 text-[10px] font-semibold text-slate-950 bg-cyan-400 rounded"
                    >
                      + Add
                    </button>
                  </div>
                </div>

                {/* Sub-Tabs inside Phone */}
                <div className="flex items-center border-b border-slate-900 bg-slate-950 px-2">
                  <button
                    onClick={() => setActiveTab('careers')}
                    className={`flex-1 py-1.5 text-[11px] font-medium transition-colors text-center border-b-2 ${
                      activeTab === 'careers'
                        ? 'text-cyan-400 border-cyan-400 font-semibold'
                        : 'text-slate-400 border-transparent hover:text-slate-200'
                    }`}
                  >
                    Careers ({opportunities.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('intro')}
                    className={`flex-1 py-1.5 text-[11px] font-medium transition-colors text-center border-b-2 ${
                      activeTab === 'intro'
                        ? 'text-cyan-400 border-cyan-400 font-semibold'
                        : 'text-slate-400 border-transparent hover:text-slate-200'
                    }`}
                  >
                    Intro Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('tree')}
                    className={`flex-1 py-1.5 text-[11px] font-medium transition-colors text-center border-b-2 ${
                      activeTab === 'tree'
                        ? 'text-cyan-400 border-cyan-400 font-semibold'
                        : 'text-slate-400 border-transparent hover:text-slate-200'
                    }`}
                  >
                    Widget Tree
                  </button>
                </div>

                {/* Phone Scrollable Body */}
                <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                  {activeTab === 'careers' && (
                    <div className="space-y-3">
                      <div className="text-[10px] text-slate-400 flex items-center justify-between pb-1 border-b border-slate-900">
                        <span>SliverList.builder ({opportunities.length} items)</span>
                        <span className="text-cyan-400">CardTheme.m3</span>
                      </div>

                      {opportunities.map((opp) => (
                        <div
                          key={opp.id}
                          className="p-3 rounded-xl bg-slate-900 border border-slate-800/90 text-left space-y-1.5 shadow-sm"
                        >
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="text-xs font-bold text-white leading-tight">
                              {opp.role}
                            </h4>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                              {opp.type}
                            </span>
                          </div>

                          <p className="text-[11px] text-cyan-300 font-medium">
                            {opp.company} · {opp.location}
                          </p>

                          <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                            {opp.summary}
                          </p>

                          <div className="flex flex-wrap gap-1 pt-1">
                            {opp.techStack.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="px-1.5 py-0.2 rounded bg-slate-950 font-mono text-[9px] text-slate-400 border border-slate-800/80"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="pt-1.5 border-t border-slate-800/70 flex items-center justify-between text-[10px]">
                            <span className="text-amber-400 font-mono font-medium truncate max-w-[170px]">
                              {opp.impactMetrics}
                            </span>
                            <span className="text-slate-400 font-mono text-[9px]">{opp.period}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'intro' && (
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-2">
                        <div className="flex items-center gap-3">
                          <img
                            src={profile.avatarUrl}
                            alt={profile.name}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded-xl object-cover border border-cyan-500/30"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-white">{profile.name}</h4>
                            <p className="text-[10px] text-cyan-400">{profile.title}</p>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed pt-1">
                          {isHindi ? profile.hindiBio : profile.bio}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-center text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <p className="font-mono text-cyan-400 font-bold">{profile.yearsExperience}+ Years</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Flutter Exp</p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <p className="font-mono text-cyan-400 font-bold">{profile.appsPublished}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Live Apps</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-[11px] text-slate-300">
                        <p className="font-semibold text-white text-xs mb-1">Architecture Pillars:</p>
                        {profile.architecturePrinciples.map((principle, idx) => (
                          <p key={idx} className="flex items-start gap-1.5 text-[10px] text-slate-400">
                            <span className="text-cyan-400 font-mono">›</span>
                            <span>{principle}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'tree' && (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[10px] font-mono space-y-1 text-slate-300">
                      <p className="text-cyan-400 font-semibold mb-2 text-[11px]">Flutter Inspector Widget Tree:</p>
                      <div className="pl-1 text-sky-400">MaterialApp(darkTheme: m3)</div>
                      <div className="pl-3 text-cyan-400">└── Scaffold(backgroundColor: 0xFF030712)</div>
                      <div className="pl-5 text-indigo-400">├── AppBar(title: Text('myself.dart'))</div>
                      <div className="pl-5 text-emerald-400">└── CustomScrollView</div>
                      <div className="pl-7 text-amber-400">├── SliverToBoxAdapter(HeroProfile)</div>
                      <div className="pl-7 text-rose-400">└── SliverList.builder</div>
                      <div className="pl-9 text-slate-400">└── CareerOpportunityCard [{opportunities.length}]</div>
                      <div className="pl-11 text-slate-500">├── AnimatedContainer(elevation: 0)</div>
                      <div className="pl-11 text-slate-500">└── InkWell(onTap: expand)</div>
                    </div>
                  )}
                </div>

                {/* Home Indicator Bar */}
                <div className="py-2 flex justify-center">
                  <div className="w-28 h-1 rounded-full bg-slate-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Architecture explanation & Dart connection */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Dart 3 & Flutter 3.x Framework
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {isHindi ? 'डार्ट और फ्लटर में रचित संपूर्ण आर्किटेक्चर' : 'Written in Pure Dart & Flutter Architecture'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every component displayed in this website is directly mapped to a production-ready Flutter widget. You can inspect the Flutter widget tree, test dynamic additions, and extract the complete Dart codebase.
              </p>
            </div>

            {/* Feature Bento Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Sliver Architecture</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Smooth 120fps scrolling using <code className="text-slate-300 font-mono">CustomScrollView</code> and sliver delegates for optimal memory recycling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                  <Flame className="w-4 h-4" />
                  <span>Dart 3 Null Safety</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Pattern matching, record returns, sound null safety, and clean immutable value objects.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                  <Zap className="w-4 h-4" />
                  <span>Stateful Synchrony</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  When you add or edit career opportunities above, the simulator and Dart source files update synchronously.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold mb-1">
                  <Code className="w-4 h-4" />
                  <span>Multi-Target Export</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Ready to deploy to Android APK/AAB, iOS IPA, macOS, Windows, Linux, and Web from a single codebase.
                </p>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2">
              <button
                onClick={onViewCode}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors"
              >
                <span>{isHindi ? 'डार्ट सोर्स कोड एक्सप्लोर करें' : 'Explore Flutter Dart Codebase'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
