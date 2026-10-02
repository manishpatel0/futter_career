import React, { useState } from 'react';
import { UserProfile } from '../types/career';
import { X, CheckCircle2, User, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface EditIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onSave: (updated: UserProfile) => void;
  isHindi: boolean;
}

export const EditIntroModal: React.FC<EditIntroModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  isHindi,
}) => {
  const [formData, setFormData] = useState<UserProfile>({ ...profile });

  if (!isOpen) return null;

  const handleChange = (field: keyof UserProfile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-8">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">
              {isHindi ? 'मेरा परिचय संपादित करें (Edit Myself Intro)' : 'Edit Myself Intro & Profile'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Full Name (English) *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                नाम (Hindi, optional)
              </label>
              <input
                type="text"
                value={formData.hindiName || ''}
                onChange={(e) => handleChange('hindiName', e.target.value)}
                placeholder="उदा: मनीष पटेल"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-slate-300 mb-1">
              Professional Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-slate-300 mb-1">
              Professional Bio (English) *
            </label>
            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500 leading-relaxed"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-slate-300 mb-1">
              परिचय विवरण (Hindi Bio)
            </label>
            <textarea
              rows={2}
              value={formData.hindiBio}
              onChange={(e) => handleChange('hindiBio', e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500 leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Phone Number / WhatsApp
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Availability Status
              </label>
              <input
                type="text"
                value={formData.availability}
                onChange={(e) => handleChange('availability', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Years Exp
              </label>
              <input
                type="number"
                value={formData.yearsExperience}
                onChange={(e) => handleChange('yearsExperience', Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Apps Built
              </label>
              <input
                type="number"
                value={formData.appsPublished}
                onChange={(e) => handleChange('appsPublished', Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                Downloads
              </label>
              <input
                type="text"
                value={formData.downloads}
                onChange={(e) => handleChange('downloads', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-300 mb-1">
                GitHub Stars
              </label>
              <input
                type="text"
                value={formData.githubStars}
                onChange={(e) => handleChange('githubStars', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-950 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save Profile</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
