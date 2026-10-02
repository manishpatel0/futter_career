import { CareerOpportunity, UserProfile } from '../types/career';

export interface FlutterSourceFile {
  name: string;
  path: string;
  language: 'dart' | 'yaml';
  description: string;
  getCode: (profile: UserProfile, opportunities: CareerOpportunity[]) => string;
}

export const flutterProjectFiles: FlutterSourceFile[] = [
  {
    name: 'main.dart',
    path: 'lib/main.dart',
    language: 'dart',
    description: 'Flutter application entry point with Material 3 Dark theme and responsive layout.',
    getCode: (profile, _opportunities) => `// Flutter 3.x / Dart 3.x Application Entry Point
// ${profile.name} - Myself Intro & Career Opportunities
// Generated for Flutter Web, iOS, Android, and Desktop

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'screens/intro_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
    ),
  );
  runApp(const MyselfIntroApp());
}

class MyselfIntroApp extends StatelessWidget {
  const MyselfIntroApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '${profile.name} - Myself Intro',
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.dark,
      darkTheme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF030712), // Slate 950
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFF06B6D4), // Cyan 500
          secondary: Color(0xFF0284C7), // Sky 600
          surface: Color(0xFF0F172A), // Slate 900
          onSurface: Color(0xFFF1F5F9),
          outline: Color(0xFF1E293B), // Slate 800
        ),
        fontFamily: 'PlusJakartaSans',
        cardTheme: CardTheme(
          color: const Color(0xFF0F172A),
          elevation: 0,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
            side: const BorderSide(color: Color(0xFF1E293B), width: 1),
          ),
        ),
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xFF030712),
          elevation: 0,
          scrolledUnderElevation: 0,
          centerTitle: false,
        ),
      ),
      home: const IntroHomeScreen(),
    );
  }
}
`
  },
  {
    name: 'career_opportunity.dart',
    path: 'lib/models/career_opportunity.dart',
    language: 'dart',
    description: 'Data model with Dart 3 null safety, JSON serialization, and immutability.',
    getCode: (_profile, opportunities) => `// Dart Model for Career Opportunities with full serialization
// Supports state tracking, tech stacks, and metrics

class CareerOpportunity {
  final String id;
  final String role;
  final String company;
  final String type; // Full-time, Contract, Remote Global, Open Source
  final String status; // Active, Interviewing, Target, Milestone
  final String location;
  final String period;
  final String compensation;
  final String summary;
  final List<String> responsibilities;
  final List<String> techStack;
  final String impactMetrics;
  final String? applicationUrl;
  final String? notes;
  final bool isStarred;

  const CareerOpportunity({
    required this.id,
    required this.role,
    required this.company,
    required this.type,
    required this.status,
    required this.location,
    required this.period,
    required this.compensation,
    required this.summary,
    required this.responsibilities,
    required this.techStack,
    required this.impactMetrics,
    this.applicationUrl,
    this.notes,
    this.isStarred = false,
  });

  Map<String, dynamic> toJson() => {
    'id': id,
    'role': role,
    'company': company,
    'type': type,
    'status': status,
    'location': location,
    'period': period,
    'compensation': compensation,
    'summary': summary,
    'responsibilities': responsibilities,
    'techStack': techStack,
    'impactMetrics': impactMetrics,
    'applicationUrl': applicationUrl,
    'notes': notes,
    'isStarred': isStarred,
  };

  factory CareerOpportunity.fromJson(Map<String, dynamic> json) {
    return CareerOpportunity(
      id: json['id'] as String,
      role: json['role'] as String,
      company: json['company'] as String,
      type: json['type'] as String,
      status: json['status'] as String,
      location: json['location'] as String,
      period: json['period'] as String,
      compensation: json['compensation'] as String,
      summary: json['summary'] as String,
      responsibilities: List<String>.from(json['responsibilities'] ?? []),
      techStack: List<String>.from(json['techStack'] ?? []),
      impactMetrics: json['impactMetrics'] as String,
      applicationUrl: json['applicationUrl'] as String?,
      notes: json['notes'] as String?,
      isStarred: json['isStarred'] as bool? ?? false,
    );
  }
}

// Current In-Memory Initial Opportunities Seed
final List<CareerOpportunity> initialOpportunitiesData = [
${opportunities.map(opp => `  CareerOpportunity(
    id: '${opp.id.replace(/'/g, "\\'")}',
    role: '${opp.role.replace(/'/g, "\\'")}',
    company: '${opp.company.replace(/'/g, "\\'")}',
    type: '${opp.type.replace(/'/g, "\\'")}',
    status: '${opp.status.replace(/'/g, "\\'")}',
    location: '${opp.location.replace(/'/g, "\\'")}',
    period: '${opp.period.replace(/'/g, "\\'")}',
    compensation: '${opp.compensation.replace(/'/g, "\\'")}',
    summary: '${opp.summary.replace(/'/g, "\\'")}',
    responsibilities: [
${opp.responsibilities.map(r => `      '${r.replace(/'/g, "\\'")}',`).join('\n')}
    ],
    techStack: [
${opp.techStack.map(t => `      '${t.replace(/'/g, "\\'")}',`).join('\n')}
    ],
    impactMetrics: '${opp.impactMetrics.replace(/'/g, "\\'")}',
    isStarred: ${opp.isStarred ? 'true' : 'false'},
  ),`).join('\n')}
];
`
  },
  {
    name: 'intro_screen.dart',
    path: 'lib/screens/intro_screen.dart',
    language: 'dart',
    description: 'Sliver-based main screen with Hero intro, stats, filtering, and opportunity list.',
    getCode: (profile, _opportunities) => `// Flutter Interactive Intro & Career Opportunities Screen
import 'package:flutter/material.dart';
import '../models/career_opportunity.dart';
import '../widgets/career_card.dart';
import 'add_opportunity_dialog.dart';

class IntroHomeScreen extends StatefulWidget {
  const IntroHomeScreen({super.key});

  @override
  State<IntroHomeScreen> createState() => _IntroHomeScreenState();
}

class _IntroHomeScreenState extends State<IntroHomeScreen> {
  late List<CareerOpportunity> _opportunities;
  String _selectedFilter = 'All';
  String _searchQuery = '';

  @override
  void initState() {
    super.initState();
    _opportunities = List.from(initialOpportunitiesData);
  }

  void _addNewOpportunity(CareerOpportunity opp) {
    setState(() {
      _opportunities.insert(0, opp);
    });
  }

  void _openAddModal() async {
    final result = await showDialog<CareerOpportunity>(
      context: context,
      builder: (ctx) => const AddOpportunityDialog(),
    );
    if (result != null) {
      _addNewOpportunity(result);
    }
  }

  @override
  Widget build(BuildContext context) {
    final filtered = _opportunities.where((item) {
      final matchesFilter = _selectedFilter == 'All' || item.type == _selectedFilter;
      final query = _searchQuery.toLowerCase();
      final matchesSearch = item.role.toLowerCase().contains(query) ||
          item.company.toLowerCase().contains(query) ||
          item.techStack.any((t) => t.toLowerCase().contains(query));
      return matchesFilter && matchesSearch;
    }).toList();

    return Scaffold(
      backgroundColor: const Color(0xFF030712),
      appBar: AppBar(
        title: const Text(
          'myself.dart',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            letterSpacing: -0.5,
            color: Color(0xFFF1F5F9),
          ),
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 16.0),
            child: ElevatedButton.icon(
              onPressed: _openAddModal,
              icon: const Icon(Icons.add, size: 16),
              label: const Text('Add Career Opportunity'),
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF06B6D4),
                foregroundColor: const Color(0xFF030712),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
            ),
          ),
        ],
      ),
      body: CustomScrollView(
        slivers: [
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 32.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Profile Intro Card
                  Container(
                    padding: const EdgeInsets.all(28.0),
                    decoration: BoxDecoration(
                      color: const Color(0xFF0F172A),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: const Color(0xFF1E293B)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '${profile.name} (${profile.hindiName ?? ''})',
                          style: const TextStyle(
                            fontSize: 32,
                            fontWeight: FontWeight.w800,
                            letterSpacing: -1,
                            color: Colors.white,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          '${profile.title}',
                          style: const TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.w600,
                            color: Color(0xFF38BDF8),
                          ),
                        ),
                        const SizedBox(height: 16),
                        Text(
                          '${profile.bio}',
                          style: const TextStyle(
                            fontSize: 15,
                            height: 1.6,
                            color: Color(0xFF94A3B8),
                          ),
                        ),
                        const SizedBox(height: 24),
                        // Quick Stats Row
                        Wrap(
                          spacing: 24,
                          runSpacing: 16,
                          children: [
                            _buildStatItem('${profile.yearsExperience}+ Years', 'Flutter & Mobile Exp'),
                            _buildStatItem('${profile.appsPublished}', 'Production Apps'),
                            _buildStatItem('${profile.downloads}', 'Global Downloads'),
                            _buildStatItem('${profile.githubStars}', 'GitHub Stars'),
                          ],
                        ),
                      ],
                    ),
                  ),

                  const SizedBox(height: 48),

                  // Career Opportunities Header
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'Career Opportunities (करियर अवसर)',
                            style: TextStyle(
                              fontSize: 24,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            '\${_opportunities.length} detailed engineering pathways and milestones',
                            style: const TextStyle(
                              fontSize: 14,
                              color: Color(0xFF64748B),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),

          // Sliver List of Career Opportunities
          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 24.0),
            sliver: SliverList(
              delegate: SliverChildBuilderDelegate(
                (context, index) {
                  final opp = filtered[index];
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 16.0),
                    child: CareerOpportunityCard(opportunity: opp),
                  );
                },
                childCount: filtered.length,
              ),
            ),
          ),
          const SliverToBoxAdapter(child: SizedBox(height: 60)),
        ],
      ),
    );
  }

  Widget _buildStatItem(String value, String label) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          value,
          style: const TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Color(0xFF06B6D4),
          ),
        ),
        Text(
          label,
          style: const TextStyle(
            fontSize: 12,
            color: Color(0xFF64748B),
          ),
        ),
      ],
    );
  }
}
`
  },
  {
    name: 'career_card.dart',
    path: 'lib/widgets/career_card.dart',
    language: 'dart',
    description: 'Material 3 interactive card widget showcasing role, status, tech tags, and impact.',
    getCode: (_profile, _opportunities) => `// Flutter Career Opportunity Card Component
import 'package:flutter/material.dart';
import '../models/career_opportunity.dart';

class CareerOpportunityCard extends StatefulWidget {
  final CareerOpportunity opportunity;

  const CareerOpportunityCard({super.key, required this.opportunity});

  @override
  State<CareerOpportunityCard> createState() => _CareerOpportunityCardState();
}

class _CareerOpportunityCardState extends State<CareerOpportunityCard> {
  bool _isExpanded = false;

  @override
  Widget build(BuildContext context) {
    final opp = widget.opportunity;

    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF0F172A),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: opp.isStarred ? const Color(0xFF0284C7).withOpacity(0.5) : const Color(0xFF1E293B),
        ),
      ),
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: () => setState(() => _isExpanded = !_isExpanded),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header Row: Role & Period
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          opp.role,
                          style: const TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          '\${opp.company} · \${opp.location}',
                          style: const TextStyle(
                            fontSize: 14,
                            color: Color(0xFF38BDF8),
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: const Color(0xFF1E293B),
                      borderRadius: BorderRadius.circular(6),
                    ),
                    child: Text(
                      opp.type,
                      style: const TextStyle(fontSize: 12, color: Color(0xFF94A3B8)),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 12),
              Text(
                opp.summary,
                style: const TextStyle(
                  fontSize: 14,
                  height: 1.5,
                  color: Color(0xFF94A3B8),
                ),
              ),

              const SizedBox(height: 14),

              // Tech stack badges
              Wrap(
                spacing: 8,
                runSpacing: 6,
                children: opp.techStack.map((tech) {
                  return Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    decoration: BoxDecoration(
                      color: const Color(0xFF030712),
                      borderRadius: BorderRadius.circular(4),
                      border: Border.all(color: const Color(0xFF1E293B)),
                    ),
                    child: Text(
                      tech,
                      style: const TextStyle(fontSize: 11, color: Color(0xFF06B6D4), fontFamily: 'Courier'),
                    ),
                  );
                }).toList(),
              ),

              // Expanded Details
              if (_isExpanded) ...[
                const SizedBox(height: 16),
                const Divider(color: Color(0xFF1E293B)),
                const SizedBox(height: 12),
                const Text(
                  'Key Deliverables & Responsibilities:',
                  style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Colors.white),
                ),
                const SizedBox(height: 8),
                ...opp.responsibilities.map((resp) => Padding(
                      padding: const EdgeInsets.only(bottom: 6.0),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text('• ', style: TextStyle(color: Color(0xFF06B6D4))),
                          Expanded(
                            child: Text(
                              resp,
                              style: const TextStyle(fontSize: 13, color: Color(0xFF94A3B8)),
                            ),
                          ),
                        ],
                      ),
                    )),
                const SizedBox(height: 12),
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: const Color(0xFF030712),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.bolt, size: 16, color: Color(0xFFFBBF24)),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          opp.impactMetrics,
                          style: const TextStyle(fontSize: 12, color: Color(0xFFFBBF24), fontWeight: FontWeight.w600),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}
`
  },
  {
    name: 'add_opportunity_dialog.dart',
    path: 'lib/screens/add_opportunity_dialog.dart',
    language: 'dart',
    description: 'Flutter Dialog form to add new career opportunities dynamically.',
    getCode: (_profile, _opportunities) => `// Dialog form for adding new opportunities
import 'package:flutter/material.dart';
import '../models/career_opportunity.dart';

class AddOpportunityDialog extends StatefulWidget {
  const AddOpportunityDialog({super.key});

  @override
  State<AddOpportunityDialog> createState() => _AddOpportunityDialogState();
}

class _AddOpportunityDialogState extends State<AddOpportunityDialog> {
  final _formKey = GlobalKey<FormState>();
  final _roleController = TextEditingController();
  final _companyController = TextEditingController();
  final _locationController = TextEditingController();
  final _compensationController = TextEditingController();
  final _summaryController = TextEditingController();
  final _techController = TextEditingController();
  final _metricsController = TextEditingController();
  String _selectedType = 'Full-time';

  @override
  void dispose() {
    _roleController.dispose();
    _companyController.dispose();
    _locationController.dispose();
    _compensationController.dispose();
    _summaryController.dispose();
    _techController.dispose();
    _metricsController.dispose();
    super.dispose();
  }

  void _submit() {
    if (_formKey.currentState!.validate()) {
      final newOpp = CareerOpportunity(
        id: 'opp-\${DateTime.now().millisecondsSinceEpoch}',
        role: _roleController.text.trim(),
        company: _companyController.text.trim(),
        type: _selectedType,
        status: 'Active Opportunity',
        location: _locationController.text.trim().isEmpty ? 'Remote / Hybrid' : _locationController.text.trim(),
        period: 'Current Target',
        compensation: _compensationController.text.trim().isEmpty ? 'Competitive' : _compensationController.text.trim(),
        summary: _summaryController.text.trim(),
        responsibilities: [
          'Lead and architect modern Flutter 3 cross-platform features.',
          'Enforce Clean Architecture and robust automated test suites.'
        ],
        techStack: _techController.text
            .split(',')
            .map((s) => s.trim())
            .where((s) => s.isNotEmpty)
            .toList(),
        impactMetrics: _metricsController.text.trim().isEmpty ? 'High Impact Core Initiative' : _metricsController.text.trim(),
      );
      Navigator.of(context).pop(newOpp);
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      backgroundColor: const Color(0xFF0F172A),
      title: const Text('Add Career Opportunity', style: TextStyle(color: Colors.white)),
      content: SingleChildScrollView(
        child: SizedBox(
          width: 500,
          child: Form(
            key: _formKey,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextFormField(
                  controller: _roleController,
                  decoration: const InputDecoration(labelText: 'Job Role / Title', hintText: 'e.g. Senior Flutter Architect'),
                  validator: (v) => v == null || v.isEmpty ? 'Please enter a title' : null,
                ),
                TextFormField(
                  controller: _companyController,
                  decoration: const InputDecoration(labelText: 'Company / Organization', hintText: 'e.g. Acme FinTech'),
                  validator: (v) => v == null || v.isEmpty ? 'Please enter company' : null,
                ),
                TextFormField(
                  controller: _techController,
                  decoration: const InputDecoration(labelText: 'Tech Stack (comma separated)', hintText: 'Flutter, Dart, Riverpod, Firebase'),
                ),
                TextFormField(
                  controller: _summaryController,
                  maxLines: 3,
                  decoration: const InputDecoration(labelText: 'Opportunity Summary', hintText: 'Key objectives and technical scope'),
                  validator: (v) => v == null || v.isEmpty ? 'Please enter summary' : null,
                ),
              ],
            ),
          ),
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Cancel')),
        ElevatedButton(
          onPressed: _submit,
          style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF06B6D4)),
          child: const Text('Save Opportunity', style: TextStyle(color: Color(0xFF030712))),
        ),
      ],
    );
  }
}
`
  },
  {
    name: 'pubspec.yaml',
    path: 'pubspec.yaml',
    language: 'yaml',
    description: 'Flutter project specification file with dependencies and assets.',
    getCode: (profile, _opportunities) => `name: myself_intro_career_hub
description: "Myself Intro and Career Opportunities application for ${profile.name} written in Flutter and Dart."
publish_to: 'none'

version: 1.0.0+1

environment:
  sdk: '>=3.3.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.8
  google_fonts: ^6.2.1
  url_launcher: ^6.3.0
  intl: ^0.19.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
`
  }
];
