import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, 'public', 'assets', 'projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

const svgs = {
  'loan-approval.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <pattern id="dot-grid-loan" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" fill="#11110F" opacity="0.12" />
    </pattern>
  </defs>
  <rect width="800" height="450" fill="#F4F0E6" stroke="#11110F" stroke-width="6"/>
  <rect width="800" height="450" fill="url(#dot-grid-loan)" />
  
  <rect x="30" y="25" width="740" height="45" fill="#4F63FF" stroke="#11110F" stroke-width="4"/>
  <text x="50" y="54" fill="#FFFFFF" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="16">AI ENGINE // LOAN_APPROVAL_PREDICTION_SYSTEM</text>
  <rect x="650" y="35" width="100" height="24" fill="#C7FF2F" stroke="#11110F" stroke-width="2"/>
  <text x="700" y="51" fill="#11110F" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" text-anchor="middle">XGBOOST ML</text>

  <!-- Left: Applicant Profile Box -->
  <rect x="40" y="90" width="340" height="320" fill="#FFFFFF" stroke="#11110F" stroke-width="4" />
  <rect x="40" y="90" width="340" height="35" fill="#11110F" />
  <text x="60" y="113" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="13">APPLICANT_EVALUATION</text>

  <rect x="60" y="145" width="300" height="110" fill="#C7FF2F" stroke="#11110F" stroke-width="3" />
  <text x="80" y="175" fill="#11110F" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="20">ELIGIBILITY: APPROVED</text>
  <text x="80" y="200" fill="#11110F" font-family="'JetBrains Mono', monospace" font-size="12">CREDIT HISTORY: VERIFIED</text>
  <text x="80" y="222" fill="#11110F" font-family="'JetBrains Mono', monospace" font-size="12">DEBT-TO-INCOME: 24.5%</text>
  <text x="80" y="244" fill="#11110F" font-family="'JetBrains Mono', monospace" font-size="12">PROBABILITY SCORE: 94.8%</text>

  <!-- SQL & Cloud Run Info -->
  <rect x="60" y="275" width="300" height="115" fill="#11110F" />
  <text x="75" y="300" fill="#C7FF2F" font-family="'JetBrains Mono', monospace" font-size="11">> SELECT * FROM loan_applications</text>
  <text x="75" y="320" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="11">> Flask + SQLite Backend API</text>
  <text x="75" y="345" fill="#4F63FF" font-family="'JetBrains Mono', monospace" font-size="11">> Deployed: Google Cloud Run</text>
  <text x="75" y="370" fill="#FF5964" font-family="'JetBrains Mono', monospace" font-size="11">> Model: XGBoost + Scikit-learn</text>

  <!-- Right: Feature Weights & Analytics -->
  <rect x="410" y="90" width="350" height="320" fill="#FFFFFF" stroke="#11110F" stroke-width="4" />
  <rect x="410" y="90" width="350" height="35" fill="#11110F" />
  <text x="430" y="113" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="13">REAL-TIME_FEATURE_IMPORTANCE</text>

  <text x="430" y="155" fill="#11110F" font-family="'JetBrains Mono', monospace" font-size="12">Credit Score &amp; History (0.38)</text>
  <rect x="430" y="165" width="310" height="18" fill="#F4F0E6" stroke="#11110F" stroke-width="1.5" />
  <rect x="430" y="165" width="240" height="18" fill="#4F63FF" stroke="#11110F" stroke-width="1.5" />

  <text x="430" y="210" fill="#11110F" font-family="'JetBrains Mono', monospace" font-size="12">Applicant Income (0.24)</text>
  <rect x="430" y="220" width="310" height="18" fill="#F4F0E6" stroke="#11110F" stroke-width="1.5" />
  <rect x="430" y="220" width="170" height="18" fill="#C7FF2F" stroke="#11110F" stroke-width="1.5" />

  <text x="430" y="265" fill="#11110F" font-family="'JetBrains Mono', monospace" font-size="12">Loan Amount / Term Ratio (0.19)</text>
  <rect x="430" y="275" width="310" height="18" fill="#F4F0E6" stroke="#11110F" stroke-width="1.5" />
  <rect x="430" y="275" width="130" height="18" fill="#FF5964" stroke="#11110F" stroke-width="1.5" />

  <text x="430" y="320" fill="#11110F" font-family="'JetBrains Mono', monospace" font-size="12">Co-Applicant Solvency (0.12)</text>
  <rect x="430" y="330" width="310" height="18" fill="#F4F0E6" stroke="#11110F" stroke-width="1.5" />
  <rect x="430" y="330" width="90" height="18" fill="#11110F" />

  <text x="430" y="385" fill="#5A5A55" font-family="'JetBrains Mono', monospace" font-size="11">Interactive Admin Dashboard • Live Analytics</text>
</svg>`,

  'smart-calculator.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <pattern id="dot-grid-calc" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" fill="#11110F" opacity="0.12" />
    </pattern>
  </defs>
  <rect width="800" height="450" fill="#F4F0E6" stroke="#11110F" stroke-width="6"/>
  <rect width="800" height="450" fill="url(#dot-grid-calc)" />
  
  <rect x="30" y="25" width="740" height="45" fill="#C7FF2F" stroke="#11110F" stroke-width="4"/>
  <text x="50" y="54" fill="#11110F" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="16">FLUTTER // SMART_CALCULATOR_AI_PLATFORM</text>
  <rect x="630" y="35" width="120" height="24" fill="#11110F" />
  <text x="690" y="51" fill="#C7FF2F" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" text-anchor="middle">OCR + AI SOLVER</text>

  <!-- Left Card: Mobile Calculator Interface -->
  <rect x="40" y="90" width="330" height="320" fill="#FFFFFF" stroke="#11110F" stroke-width="4" />
  <rect x="40" y="90" width="330" height="35" fill="#11110F" />
  <text x="60" y="113" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="13">SMART_MATH_ENGINE</text>

  <rect x="55" y="140" width="300" height="60" fill="#11110F" stroke="#11110F" stroke-width="2" />
  <text x="70" y="165" fill="#C7FF2F" font-family="'JetBrains Mono', monospace" font-size="12">OCR SCAN: 2x² + 5x - 12 = 0</text>
  <text x="70" y="188" fill="#FFFFFF" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="16">ROOTS: x = 1.5, x = -4</text>

  <!-- Keypad Visual -->
  <g transform="translate(55, 215)">
    <rect x="0" y="0" width="68" height="40" fill="#F4F0E6" stroke="#11110F" stroke-width="2"/>
    <text x="34" y="25" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="bold">AI SOLVE</text>
    
    <rect x="76" y="0" width="68" height="40" fill="#FF5964" stroke="#11110F" stroke-width="2"/>
    <text x="110" y="25" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="bold" fill="#FFF">OCR</text>
    
    <rect x="152" y="0" width="68" height="40" fill="#4F63FF" stroke="#11110F" stroke-width="2"/>
    <text x="186" y="25" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="bold" fill="#FFF">GRAPH</text>
    
    <rect x="228" y="0" width="68" height="40" fill="#C7FF2F" stroke="#11110F" stroke-width="2"/>
    <text x="262" y="25" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="bold">VOICE</text>

    <!-- Row 2 -->
    <rect x="0" y="50" width="68" height="40" fill="#FFFFFF" stroke="#11110F" stroke-width="2"/>
    <text x="34" y="75" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="bold">EMI CALC</text>
    
    <rect x="76" y="50" width="68" height="40" fill="#FFFFFF" stroke="#11110F" stroke-width="2"/>
    <text x="110" y="75" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="bold">CURRENCY</text>
    
    <rect x="152" y="50" width="68" height="40" fill="#FFFFFF" stroke="#11110F" stroke-width="2"/>
    <text x="186" y="75" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="bold">PDF EXP</text>
    
    <rect x="228" y="50" width="68" height="40" fill="#FFFFFF" stroke="#11110F" stroke-width="2"/>
    <text x="262" y="75" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-weight="bold">OFFLINE</text>
  </g>
  <text x="60" y="395" fill="#5A5A55" font-family="'JetBrains Mono', monospace" font-size="10">Sync: Firebase Firestore • Realtime Cloud State</text>

  <!-- Right Card: Graph & Feature Capabilities -->
  <rect x="390" y="90" width="370" height="320" fill="#FFFFFF" stroke="#11110F" stroke-width="4" />
  <rect x="390" y="90" width="370" height="35" fill="#11110F" />
  <text x="410" y="113" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="13">AI_MATH_&amp;_GRAPH_VISUALIZER</text>

  <!-- Curve plotting -->
  <path d="M420,330 L420,150 L730,150" fill="none" stroke="#11110F" stroke-width="2" />
  <line x1="420" y1="240" x2="730" y2="240" stroke="#11110F" stroke-width="1.5" stroke-dasharray="3,3" />
  <line x1="575" y1="150" x2="575" y2="330" stroke="#11110F" stroke-width="1.5" stroke-dasharray="3,3" />
  <path d="M440,310 Q575,120 710,310" fill="none" stroke="#4F63FF" stroke-width="4" />
  <circle cx="575" cy="180" r="5" fill="#FF5964" stroke="#11110F" stroke-width="2" />
  <text x="590" y="185" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="bold">VERTEX (0, 4.5)</text>

  <rect x="420" y="345" width="310" height="50" fill="#F4F0E6" stroke="#11110F" stroke-width="2" />
  <text x="435" y="365" fill="#11110F" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="11">STACK: Flutter • Dart • Firebase • Cloud Firestore • OCR APIs</text>
  <text x="435" y="383" fill="#5A5A55" font-family="'JetBrains Mono', monospace" font-size="10">Features: Voice Input • Graph Plotting • EMI &amp; Currency</text>
</svg>`,

  'fraud-detection.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <pattern id="dot-grid-fraud" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" fill="#11110F" opacity="0.12" />
    </pattern>
  </defs>
  <rect width="800" height="450" fill="#F4F0E6" stroke="#11110F" stroke-width="6"/>
  <rect width="800" height="450" fill="url(#dot-grid-fraud)" />
  
  <rect x="30" y="25" width="740" height="45" fill="#FF5964" stroke="#11110F" stroke-width="4"/>
  <text x="50" y="54" fill="#FFFFFF" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="16">SYSTEM // AI_FRAUD_DETECTION_ENGINE</text>
  <rect x="670" y="35" width="80" height="24" fill="#11110F" />
  <text x="710" y="51" fill="#C7FF2F" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" text-anchor="middle">REALTIME</text>

  <!-- Left Card: Risk Gauge & Transactions -->
  <rect x="40" y="90" width="340" height="320" fill="#FFFFFF" stroke="#11110F" stroke-width="4" />
  <rect x="40" y="90" width="340" height="35" fill="#11110F" />
  <text x="60" y="113" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="13">TRANSACTION_STREAM</text>
  
  <!-- Anomaly Alert Card -->
  <rect x="60" y="145" width="300" height="65" fill="#FF5964" fill-opacity="0.15" stroke="#FF5964" stroke-width="2"/>
  <text x="75" y="170" fill="#11110F" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="13">TX #94821 - FLAG: ANOMALY</text>
  <text x="75" y="193" fill="#5A5A55" font-family="'JetBrains Mono', monospace" font-size="11">Amount: $4,290.00 | Risk Score: 94/100</text>

  <rect x="60" y="225" width="300" height="65" fill="#C7FF2F" fill-opacity="0.2" stroke="#11110F" stroke-width="2"/>
  <text x="75" y="250" fill="#11110F" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="13">TX #94822 - VERIFIED OK</text>
  <text x="75" y="273" fill="#5A5A55" font-family="'JetBrains Mono', monospace" font-size="11">Amount: $12.50 | Risk Score: 03/100</text>

  <rect x="60" y="305" width="300" height="85" fill="#F4F0E6" stroke="#11110F" stroke-width="2"/>
  <text x="75" y="330" fill="#11110F" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="12">MODEL: SCIKIT-LEARN + FLASK</text>
  <text x="75" y="350" fill="#5A5A55" font-family="'JetBrains Mono', monospace" font-size="10">Database: SQLite • Prediction History Logs</text>
  <text x="75" y="372" fill="#4F63FF" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11">Admin Dashboard • Interactive Risk Charts</text>

  <!-- Right Card: Decision Visualizer -->
  <rect x="410" y="90" width="350" height="320" fill="#FFFFFF" stroke="#11110F" stroke-width="4" />
  <rect x="410" y="90" width="350" height="35" fill="#11110F" />
  <text x="430" y="113" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="13">RISK_DISTRIBUTION_MAP</text>

  <!-- Chart visualization -->
  <path d="M440,360 L440,150 L730,150" fill="none" stroke="#11110F" stroke-width="2" />
  <line x1="440" y1="360" x2="730" y2="360" stroke="#11110F" stroke-width="2" />
  
  <path d="M450,350 Q520,340 560,280 T640,350" fill="#C7FF2F" fill-opacity="0.3" stroke="#11110F" stroke-width="3" />
  <path d="M620,350 Q660,200 700,350" fill="#FF5964" fill-opacity="0.4" stroke="#FF5964" stroke-width="3" />
  
  <line x1="610" y1="160" x2="610" y2="360" stroke="#11110F" stroke-width="2" stroke-dasharray="4,4" />
  <rect x="580" y="160" width="60" height="20" fill="#11110F" />
  <text x="610" y="174" fill="#C7FF2F" font-family="'JetBrains Mono', monospace" font-size="9" text-anchor="middle">THRESHOLD</text>
  
  <text x="490" y="385" fill="#11110F" font-family="'JetBrains Mono', monospace" font-size="10">LEGITIMATE</text>
  <text x="650" y="385" fill="#FF5964" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="bold">FRAUD RISK</text>
</svg>`
};

// Also alias smartloan.svg to loan-approval.svg
svgs['smartloan.svg'] = svgs['loan-approval.svg'];

for (const [filename, svg] of Object.entries(svgs)) {
  const filePath = path.join(projectsDir, filename);
  fs.writeFileSync(filePath, svg.trim());
  console.log(`Generated: ${filePath}`);
}
