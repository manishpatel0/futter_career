import React, { useState, useMemo } from 'react';
import { UserProfile, CareerOpportunity } from '../types/career';
import { flutterProjectFiles, FlutterSourceFile } from '../data/flutterCode';
import { 
  FileCode, 
  Copy, 
  Check, 
  Download, 
  Terminal, 
  FolderTree, 
  FileText, 
  Code2, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface FlutterCodeViewerProps {
  profile: UserProfile;
  opportunities: CareerOpportunity[];
  isHindi: boolean;
  onDownloadZip: () => void;
}

export const FlutterCodeViewer: React.FC<FlutterCodeViewerProps> = ({
  profile,
  opportunities,
  isHindi,
  onDownloadZip,
}) => {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeFile: FlutterSourceFile = flutterProjectFiles[activeFileIndex] || flutterProjectFiles[0];

  const currentCode = useMemo(() => {
    return activeFile.getCode(profile, opportunities);
  }, [activeFile, profile, opportunities]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="flutter-code" className="py-16 md:py-24 border-b border-slate-900 bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>PRODUCTION FLUTTER & DART SOURCE REPOSITORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isHindi ? 'फ्लटर डार्ट सोर्स कोड (Flutter Dart Code)' : 'Flutter Dart Source Architecture'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl">
              Complete, idiomatic Flutter 3.x / Dart 3.x source files for this exact portfolio and career tracking app. Includes models, widgets, slivers, and forms.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onDownloadZip}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>{isHindi ? 'संपूर्ण फ्लटर प्रोजेक्ट डाउनलोड करें (.zip)' : 'Download Flutter Project (.zip)'}</span>
            </button>
          </div>
        </div>

        {/* Code Explorer Window */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
          {/* Top Bar of Code Editor */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5 gap-3">
            {/* File Switcher Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
              {flutterProjectFiles.map((file, idx) => {
                const isActive = idx === activeFileIndex;
                return (
                  <button
                    key={file.path}
                    onClick={() => {
                      setActiveFileIndex(idx);
                      setCopied(false);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-slate-950 text-cyan-300 border border-slate-800 shadow-sm font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span>{file.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Actions: Copy & Path */}
            <div className="flex items-center gap-3 text-xs">
              <span className="hidden sm:inline font-mono text-[11px] text-slate-500">
                {activeFile.path}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                title="Copy file code to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* File Meta Info Banner */}
          <div className="px-5 py-2.5 bg-slate-900/40 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-300">{activeFile.name}</span>
              <span aria-hidden="true">·</span>
              <span>{activeFile.description}</span>
            </div>
            <span className="font-mono text-[11px] text-cyan-400">Dart 3.x Sound Null Safety</span>
          </div>

          {/* Syntax-Highlighted Code Body */}
          <div className="relative p-5 overflow-x-auto max-h-[550px] font-mono text-xs leading-relaxed bg-[#030712]">
            <pre className="text-slate-200 selection:bg-cyan-500/30">
              <code>{currentCode}</code>
            </pre>
          </div>

          {/* Terminal Quick Instructions */}
          <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>How to execute:</span>
              <code className="text-cyan-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                flutter create . &amp;&amp; flutter run -d chrome
              </code>
            </div>
            <div className="text-slate-500 text-[11px]">
              Ready for production build on Web, Android, and iOS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
