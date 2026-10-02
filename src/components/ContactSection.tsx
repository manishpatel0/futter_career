import React, { useState } from 'react';
import { UserProfile } from '../types/career';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles, Github, Linkedin, Twitter } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  profile: UserProfile;
  isHindi: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, isHindi }) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [opportunityRole, setOpportunityRole] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#06b6d4', '#38bdf8', '#10b981']
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-950/90 border-b border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Workspace */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>CONNECT &amp; INQUIRE</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                {isHindi ? 'सम्पर्क करें व अवसर साझा करें' : 'Discuss a Career Opportunity'}
              </h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Open for high-impact Staff / Senior Mobile roles, architectural advisory, and high-velocity Flutter sprint contracts.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800 text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Direct Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800 text-cyan-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Phone &amp; WhatsApp</p>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Primary Location &amp; Timezone</p>
                  <p className="text-sm font-semibold text-white">
                    {profile.location} (IST / UTC+5:30 · Global Overlap)
                  </p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-4 text-slate-400">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Opportunity Pitch & Message Box */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                {isHindi ? 'एक नया अवसर प्रस्तुत करें' : 'Pitch an Opportunity or Send a Note'}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to discuss a prospective role, consulting sprint, or technical collaboration.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-cyan-950/40 border border-cyan-800/80 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Thank You for Connecting!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong className="text-cyan-300">{opportunityRole || 'the engineering opportunity'}</strong> has been received. {profile.name} will respond to <strong className="text-white">{senderEmail}</strong> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                      setOpportunityRole('');
                    }}
                    className="mt-2 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-slate-300 mb-1">Work Email *</label>
                      <input
                        type="email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. s.jenkins@company.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-slate-300 mb-1">Role / Opportunity Focus</label>
                    <input
                      type="text"
                      value={opportunityRole}
                      onChange={(e) => setOpportunityRole(e.target.value)}
                      placeholder="e.g. Staff Flutter Engineer or MVP Architecture Sprint"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-300 mb-1">Message &amp; Timeline *</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about the engineering challenge, team size, tech stack, and goals..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500 leading-relaxed"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-500 font-mono">
                      Average response time: &lt; 24 hours
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isHindi ? 'संदेश भेजें' : 'Send Inquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
