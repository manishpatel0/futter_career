export type OpportunityType = 
  | 'Full-time'
  | 'Contract'
  | 'Remote Global'
  | 'Open Source'
  | 'Founding Engineer'
  | 'Freelance / Consultant';

export type OpportunityStatus = 
  | 'Active Opportunity'
  | 'In Discussion'
  | 'Target Role'
  | 'Offer Received'
  | 'Completed Milestone'
  | 'Open to Offers';

export interface CareerOpportunity {
  id: string;
  role: string;
  company: string;
  type: OpportunityType;
  status: OpportunityStatus;
  location: string;
  period: string;
  compensation: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  impactMetrics: string;
  applicationUrl?: string;
  notes?: string;
  isStarred?: boolean;
  dateAdded: string;
}

export interface UserProfile {
  name: string;
  hindiName?: string;
  title: string;
  tagline: string;
  bio: string;
  hindiBio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
  avatarUrl: string;
  availability: string;
  yearsExperience: number;
  appsPublished: number;
  downloads: string;
  githubStars: string;
  primarySkills: string[];
  architecturePrinciples: string[];
}
