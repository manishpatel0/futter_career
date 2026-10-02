import JSZip from 'jszip';
import { flutterProjectFiles } from '../data/flutterCode';
import { CareerOpportunity, UserProfile } from '../types/career';

export async function downloadFlutterZip(profile: UserProfile, opportunities: CareerOpportunity[]): Promise<void> {
  const zip = new JSZip();

  // Root folder inside zip
  const root = zip.folder('flutter_myself_intro') || zip;

  // Add Flutter files
  flutterProjectFiles.forEach(file => {
    const code = file.getCode(profile, opportunities);
    root.file(file.path, code);
  });

  // Add README.md with clear instructions on how to run the Flutter app
  const readmeContent = `# ${profile.name} - Myself Intro & Career Opportunities (Flutter)

A cross-platform portfolio and career opportunities showcase app written in **Flutter 3.x** and **Dart 3.x**.

## 🚀 How to Run this Flutter App

1. Ensure you have Flutter installed:
   \`\`\`bash
   flutter --version
   \`\`\`

2. Get dependencies:
   \`\`\`bash
   flutter pub get
   \`\`\`

3. Run on Chrome (Web):
   \`\`\`bash
   flutter run -d chrome
   \`\`\`

4. Or run on an Android / iOS device or simulator:
   \`\`\`bash
   flutter run
   \`\`\`

## 📁 Architecture Overview
- \`lib/main.dart\`: Material 3 theme configuration & entry point
- \`lib/models/career_opportunity.dart\`: Type-safe Dart model with JSON serialization
- \`lib/screens/intro_screen.dart\`: Sliver-based layout with Hero intro and career list
- \`lib/widgets/career_card.dart\`: Interactive Material card with expandable details
- \`lib/screens/add_opportunity_dialog.dart\`: Dynamic form to add opportunities

Generated from the web builder with your live data.
`;

  root.file('README.md', readmeContent);

  // Generate blob and trigger download
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `flutter_${profile.name.toLowerCase().replace(/\s+/g, '_')}_intro_app.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
