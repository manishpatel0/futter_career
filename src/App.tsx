/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { UserProfile, CareerOpportunity } from './types/career';
import { initialProfile, initialOpportunities } from './data/initialData';
import { downloadFlutterZip } from './utils/exportFlutterZip';
import { Navbar } from './components/Navbar';
import { HeroIntro } from './components/HeroIntro';
import { CareerOpportunitiesSection } from './components/CareerOpportunitiesSection';
import { FlutterSimulator } from './components/FlutterSimulator';
import { FlutterCodeViewer } from './components/FlutterCodeViewer';
import { SkillsArchitectureSection } from './components/SkillsArchitectureSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AddOpportunityModal } from './components/AddOpportunityModal';
import { EditIntroModal } from './components/EditIntroModal';
import { OpportunityDetailModal } from './components/OpportunityDetailModal';
import { Check, Info } from 'lucide-react';

const STORAGE_KEY_PROFILE = 'flutter_myself_profile_v1';
const STORAGE_KEY_OPPORTUNITIES = 'flutter_myself_opportunities_v1';
const STORAGE_KEY_LANG = 'flutter_myself_is_hindi_v1';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      return saved ? JSON.parse(saved) : initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [opportunities, setOpportunities] = useState<CareerOpportunity[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_OPPORTUNITIES);
      return saved ? JSON.parse(saved) : initialOpportunities;
    } catch {
      return initialOpportunities;
    }
  });

  const [isHindi, setIsHindi] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LANG);
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const [activeSection, setActiveSection] = useState('intro');

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingOpportunity, setEditingOpportunity] = useState<CareerOpportunity | null>(null);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [inspectingOpportunity, setInspectingOpportunity] = useState<CareerOpportunity | null>(null);

  // Toast banner
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    } catch {
      // storage unavailable
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_OPPORTUNITIES, JSON.stringify(opportunities));
    } catch {
      // storage unavailable
    }
  }, [opportunities]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LANG, JSON.stringify(isHindi));
    } catch {
      // storage unavailable
    }
  }, [isHindi]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Opportunity Handlers
  const handleSaveOpportunity = (opp: CareerOpportunity) => {
    setOpportunities(prev => {
      const existsIndex = prev.findIndex(item => item.id === opp.id);
      if (existsIndex >= 0) {
        const updated = [...prev];
        updated[existsIndex] = opp;
        return updated;
      } else {
        return [opp, ...prev];
      }
    });
    showToast(editingOpportunity ? 'Career opportunity updated successfully' : 'New career opportunity added to profile');
    setEditingOpportunity(null);
  };

  const handleDeleteOpportunity = (id: string) => {
    const opp = opportunities.find(o => o.id === id);
    if (window.confirm(`Delete opportunity "${opp?.role || 'item'}"?`)) {
      setOpportunities(prev => prev.filter(item => item.id !== id));
      showToast('Opportunity removed');
    }
  };

  const handleToggleStar = (id: string) => {
    setOpportunities(prev =>
      prev.map(item => (item.id === id ? { ...item, isStarred: !item.isStarred } : item))
    );
  };

  const handleSaveProfile = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
    showToast('Profile and intro updated successfully');
  };

  const handleDownloadZip = () => {
    downloadFlutterZip(profile, opportunities);
    showToast('Generating and downloading Flutter project zip...');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-slate-900 border border-cyan-500/50 px-4 py-3 text-xs text-white shadow-2xl animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        onOpenAddModal={() => {
          setEditingOpportunity(null);
          setIsAddModalOpen(true);
        }}
        onDownloadZip={handleDownloadZip}
        activeSection={activeSection}
        isHindi={isHindi}
        onToggleLanguage={() => setIsHindi(!isHindi)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero Myself Intro */}
        <HeroIntro
          profile={profile}
          isHindi={isHindi}
          onEditProfile={() => setIsEditProfileOpen(true)}
          onExploreCareers={() => scrollToSection('opportunities')}
          onViewFlutterCode={() => scrollToSection('flutter-code')}
        />

        {/* Section 2: Career Opportunities (Core user requirement) */}
        <CareerOpportunitiesSection
          opportunities={opportunities}
          isHindi={isHindi}
          onOpenAddModal={() => {
            setEditingOpportunity(null);
            setIsAddModalOpen(true);
          }}
          onEditOpportunity={(opp) => {
            setEditingOpportunity(opp);
            setIsAddModalOpen(true);
          }}
          onDeleteOpportunity={handleDeleteOpportunity}
          onToggleStar={handleToggleStar}
          onViewDetails={(opp) => setInspectingOpportunity(opp)}
        />

        {/* Section 3: Live Flutter Mobile Simulator & Widget Inspector */}
        <FlutterSimulator
          profile={profile}
          opportunities={opportunities}
          isHindi={isHindi}
          onOpenAddModal={() => {
            setEditingOpportunity(null);
            setIsAddModalOpen(true);
          }}
          onViewCode={() => scrollToSection('flutter-code')}
        />

        {/* Section 4: Flutter Dart Source Code Explorer */}
        <FlutterCodeViewer
          profile={profile}
          opportunities={opportunities}
          isHindi={isHindi}
          onDownloadZip={handleDownloadZip}
        />

        {/* Section 5: Skills & Architecture Principles */}
        <SkillsArchitectureSection
          profile={profile}
          isHindi={isHindi}
        />

        {/* Section 6: Contact & Opportunities Inquiry */}
        <ContactSection
          profile={profile}
          isHindi={isHindi}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} isHindi={isHindi} />

      {/* Modals */}
      <AddOpportunityModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingOpportunity(null);
        }}
        onSave={handleSaveOpportunity}
        initialData={editingOpportunity}
        isHindi={isHindi}
      />

      <EditIntroModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        isHindi={isHindi}
      />

      <OpportunityDetailModal
        opportunity={inspectingOpportunity}
        onClose={() => setInspectingOpportunity(null)}
        isHindi={isHindi}
      />
    </div>
  );
}
