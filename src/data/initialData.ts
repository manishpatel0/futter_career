import { CareerOpportunity, UserProfile } from '../types/career';

export const initialProfile: UserProfile = {
  name: 'Manish Patel',
  hindiName: 'मनीष पटेल',
  title: 'Senior Flutter & Dart Cross-Platform Software Engineer',
  tagline: 'Crafting 60fps high-performance mobile, web, and desktop experiences with Dart & Flutter.',
  bio: 'Specialized in building scalable, production-grade Flutter applications with clean Dart architecture. Experienced in state management (Riverpod/BLoC), native platform channels (Android/iOS), offline-first architectures, and high-framerate custom rendering.',
  hindiBio: 'फ्लटर और डार्ट में विशेषज्ञता के साथ उच्च-प्रदर्शन मोबाइल, वेब और डेस्कटॉप एप्लिकेशन का विकास। स्वच्छ आर्किटेक्चर, स्टेट मैनेजमेंट और स्केलेबल सिस्टम में अनुभव।',
  location: 'Bengaluru / Remote Global',
  email: 'mp0000091@gmail.com',
  phone: '+91 98765 43210',
  github: 'https://github.com/manishpatel-dev',
  linkedin: 'https://linkedin.com/in/manish-patel-flutter',
  twitter: 'https://twitter.com/manish_flutter',
  website: 'https://flutter-dev-portfolio.io',
  avatarUrl: '/src/assets/images/hero_flutter_dev_portrait_1790969683178.jpg',
  availability: 'Open for Staff / Senior Roles & High-Impact Contracts',
  yearsExperience: 5,
  appsPublished: 14,
  downloads: '2.5M+',
  githubStars: '1.8k',
  primarySkills: [
    'Flutter 3.x',
    'Dart 3 (Null Safety, Patterns, Records)',
    'Riverpod & BLoC Pattern',
    'Clean Architecture & DDD',
    'Native Platform Channels (Kotlin/Swift)',
    'Firebase Suite & Cloud Firestore',
    'RESTful APIs & GraphQL',
    'SQLite / Hive / Isar Local DB',
    'CI/CD (Fastlane & GitHub Actions)',
    'Automated Testing (Unit, Widget, Golden)'
  ],
  architecturePrinciples: [
    'Strict Separation of Concerns (UI, Domain, Data Layers)',
    'Predictable & Testable State Management with Freezed & Riverpod',
    'Zero-Jank 60/120fps Animations with RepaintBoundary & CustomPainter',
    'Modular Feature-First Package Structure with Monorepo Tooling',
    'Robust Offline Synchronization & Optimistic UI Updates'
  ]
};

export const initialOpportunities: CareerOpportunity[] = [
  {
    id: 'opp-1',
    role: 'Lead Flutter & Mobile Platform Engineer',
    company: 'NovaPay Global Financial Technologies',
    type: 'Full-time',
    status: 'Active Opportunity',
    location: 'Remote Global / Hybrid',
    period: '2024 - Present',
    compensation: '$135,000 - $160,000 / yr + Equity',
    summary: 'Spearheading the core consumer mobile wallet app serving 1.2M+ monthly active users across Android and iOS using Flutter 3 and Riverpod.',
    responsibilities: [
      'Architected biometric authentication, end-to-end encrypted ledger syncing, and payment gateway SDK integrations.',
      'Reduced cold app startup latency by 42% through deferred component loading and bytecode tree-shaking.',
      'Mentored a squad of 7 mobile engineers, enforcing golden tests and 90%+ code coverage on domain entities.'
    ],
    techStack: ['Flutter 3.22', 'Dart 3', 'Riverpod 2.x', 'Biometrics API', 'Secure Storage', 'Fastlane'],
    impactMetrics: '1.2M+ MAU · 4.8★ App Store Rating · 42% Startup Optimization',
    applicationUrl: 'https://careers.novapay.io/lead-flutter-engineer',
    notes: 'Primary production architecture showcase. Core focus on banking-grade encryption and deterministic state.',
    isStarred: true,
    dateAdded: '2026-08-15'
  },
  {
    id: 'opp-2',
    role: 'Senior Cross-Platform Architect',
    company: 'PulseHealth Digital Care & Telemedicine',
    type: 'Full-time',
    status: 'Completed Milestone',
    location: 'Bengaluru / Hybrid',
    period: '2022 - 2024',
    compensation: '$110,000 - $130,000 / yr',
    summary: 'Delivered an integrated telemedicine and patient monitoring suite connecting real-time BLE medical sensors with live WebRTC video consultations.',
    responsibilities: [
      'Engineered low-latency WebRTC video consultations with picture-in-picture background streaming.',
      'Built native platform channels in Kotlin and Swift for Bluetooth Low Energy (BLE) pulse oximeter telemetry.',
      'Implemented offline-first synchronization using Isar DB and background sync isolates.'
    ],
    techStack: ['Flutter', 'Dart', 'BLoC Pattern', 'WebRTC', 'Bluetooth LE', 'Isar Database', 'Firebase'],
    impactMetrics: '650k+ Consultations · 99.98% Crash-Free Rate · Sub-80ms Telemetry Sync',
    applicationUrl: 'https://pulsehealth.tech/careers',
    notes: 'Key achievement in Bluetooth IoT communication and background thread isolate processing.',
    isStarred: true,
    dateAdded: '2026-07-10'
  },
  {
    id: 'opp-3',
    role: 'Principal Flutter Consultant & UI/UX Specialist',
    company: 'Stratum Ventures & Early-Stage Labs',
    type: 'Contract',
    status: 'Open to Offers',
    location: 'Remote (US/EU/APAC Timezones)',
    period: '2023 - Present',
    compensation: '$85 - $110 / hr',
    summary: 'Partnering with Series A/B founders to conceptualize, scaffold, and launch MVP cross-platform apps within 8 to 12 week go-to-market cycles.',
    responsibilities: [
      'Engineered bespoke micro-interactions, spring physics, and canvas visualizations using Flutter CustomPainter.',
      'Audited and refactored legacy Flutter applications, eliminating memory leaks and frame drops.',
      'Delivered turn-key CI/CD pipelines deploying directly to Apple TestFlight and Google Play Internal Track.'
    ],
    techStack: ['Flutter', 'Dart', 'CustomPainter', 'RevenueCat', 'Supabase', 'GitHub Actions'],
    impactMetrics: '5 MVP Launches · $12M Raised by Client Startups · 100% On-Time Delivery',
    notes: 'Available for 15-20 hrs/week advisory or selective high-leverage sprint builds.',
    isStarred: true,
    dateAdded: '2026-09-01'
  },
  {
    id: 'opp-4',
    role: 'Core Author & Open Source Maintainer',
    company: 'flutter_smooth_sheets & Dart Community Hub',
    type: 'Open Source',
    status: 'Active Opportunity',
    location: 'Worldwide Community',
    period: '2023 - Present',
    compensation: 'Sponsorships & Community Grants',
    summary: 'Developing and maintaining widely-adopted open-source Flutter UI packages and Dart utility libraries with over 300,000 pub.dev downloads.',
    responsibilities: [
      'Published flutter_smooth_sheets package featuring gesture-driven physics and sliver coordination.',
      'Contributed bug fixes and documentation improvements to the official Flutter engine repository.',
      'Reviewed 120+ community pull requests and authored comprehensive benchmark test suites.'
    ],
    techStack: ['Dart 3', 'Flutter Engine', 'Physics Simulation', 'Golden Toolkit', 'Pub.dev'],
    impactMetrics: '300k+ Pub Downloads · 1,800 GitHub Stars · 99/100 Pub Score',
    applicationUrl: 'https://pub.dev/packages/flutter_smooth_sheets',
    notes: 'Deep understanding of Flutter rendering pipeline (RenderObject, PipelineOwner, LayerTree).',
    isStarred: false,
    dateAdded: '2026-06-20'
  },
  {
    id: 'opp-5',
    role: 'Founding Mobile Architect',
    company: 'OmniTrade Autonomous Commerce',
    type: 'Founding Engineer',
    status: 'In Discussion',
    location: 'San Francisco, CA / Remote',
    period: 'Target Q4 2026',
    compensation: '$150,000 - $180,000 + 1.5% Equity',
    summary: 'Evaluating prospective founding engineer role to lead the cross-platform mobile client for next-generation automated B2B procurement.',
    responsibilities: [
      'Drafting technical RFP for multi-tenant mobile architecture and offline catalogue caching.',
      'Designing GraphQL schema integrations with sub-second optimistic mutations.',
      'Defining security protocol for localized hardware enclave key storage.'
    ],
    techStack: ['Flutter 3.x', 'Dart 3', 'GraphQL', 'Riverpod', 'Hardware Enclave', 'Figma API'],
    impactMetrics: 'Series Seed Pipeline · Architecture Phase · 0-to-1 Build',
    notes: 'Initial conversations underway with venture partners. Prioritizing equity alignment and technical autonomy.',
    isStarred: false,
    dateAdded: '2026-09-28'
  }
];
