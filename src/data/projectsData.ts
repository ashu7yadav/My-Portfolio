import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'loan-approval-system',
    number: '01',
    title: 'Loan Approval Prediction & Analytical AI System',
    category: 'MACHINE LEARNING / FINTECH / CLOUD',
    categoryTags: ['XGBOOST', 'SCIKIT-LEARN', 'FLASK', 'SQLITE', 'GOOGLE CLOUD RUN'],
    badgeTheme: 'blue',
    description:
      'A machine-learning system designed to evaluate credit-applicant eligibility in real time using gradient-boosted decision trees, automated feature engineering, SQLite storage, and Google Cloud Run microservice deployment.',
    features: [
      'Advanced classification models (XGBoost & Scikit-learn)',
      'Data preprocessing & feature scaling pipeline',
      'Automated missing-value imputation & EDA',
      'Interactive admin dashboard for loan officers',
      'Real-time prediction analytics & probability scoring',
      'Transaction & applicant data visualization',
      'Containerized Google Cloud Run production deployment'
    ],
    techStack: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'SQLite', 'Google Cloud Run'],
    githubUrl: 'https://github.com/ashu7yadav/loan-approval-prediction-system',
    liveDemoUrl: 'https://demo.example.com/loan-approval',
    image: '/assets/projects/loan-approval.svg',
    details: {
      problem:
        'Financial institutions face lengthy underwriting turnaround times and subjective decision-making when reviewing applicant credit eligibility across multiple interdependent financial parameters.',
      solution:
        'Developed an end-to-end Machine Learning classification pipeline powered by XGBoost with automated preprocessing, missing-value imputation, and an interactive Flask + SQLite web platform deployed on Google Cloud Run.',
      architecture: [
        'Data Pipeline: Comprehensive Exploratory Data Analysis (EDA), median imputation, and categorical one-hot encoding.',
        'Feature Engineering: Debt-to-Income ratios, credit history scoring, combined co-applicant income multiplier, and term scaling.',
        'Model Layer: Gradient Boosted Decision Trees (XGBoost) evaluated with ROC-AUC, Precision, and Recall optimization.',
        'Backend & DB: Lightweight Flask REST API with SQLite database persistence for applicant records and audit trails.',
        'Cloud Deployment: Fully containerized Docker image deployed as a serverless microservice on Google Cloud Run.',
        'Admin Dashboard: Responsive frontend with real-time risk gauges, applicant filter tables, and decision explainability.'
      ],
      metrics: [
        { label: 'Model Accuracy', value: '93.8%' },
        { label: 'Inference Latency', value: '< 28ms' },
        { label: 'Deployment', value: 'Google Cloud Run' },
        { label: 'Database Engine', value: 'SQLite3' }
      ],
      highlights: [
        'Built during internship at Innovation & Incubation Hub, MNNIT Allahabad.',
        'Interactive admin dashboard with real-time prediction analytics and data visualization.',
        'Robust data preprocessing pipeline handling null values and skewed numerical features.',
        'Seamless containerization and deployment on Google Cloud Run.'
      ],
      flowDiagram: [
        'Applicant Financial Input',
        'EDA Preprocessing & Imputation',
        'XGBoost Classifier Inference',
        'SQLite Record Logging',
        'Interactive Admin Dashboard'
      ]
    }
  },
  {
    id: 'smart-calculator-ai',
    number: '02',
    title: 'Smart Calculator AI',
    category: 'MOBILE APP / FLUTTER / COMPUTER VISION / AI',
    categoryTags: ['FLUTTER', 'FIREBASE', 'DART', 'OCR APIS', 'CLOUD FIRESTORE'],
    badgeTheme: 'lime',
    description:
      'A cross-platform smart calculator combining traditional mathematical calculations with AI-powered utilities, camera OCR equation recognition, voice input, interactive graph plotting, and cloud synchronization.',
    features: [
      'AI Math Solver with step-by-step solutions',
      'OCR equation recognition via camera scanning',
      'Voice input for hands-free mathematical expressions',
      'Interactive 2D graph plotting for mathematical functions',
      'Multi-currency live conversion engine',
      'EMI & loan amortization financial calculator',
      'PDF export of calculation histories & solutions',
      'Offline mode with local persistence',
      'Firebase & Cloud Firestore real-time cloud synchronization'
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'OCR APIs', 'Math Engine', 'PDF Generation'],
    githubUrl: 'https://github.com/ashu7yadav/smart-calculator-ai',
    liveDemoUrl: 'https://demo.example.com/smart-calculator',
    image: '/assets/projects/smart-calculator.svg',
    details: {
      problem:
        'Standard mobile calculators are limited to basic arithmetic and cannot parse handwritten math equations, visualize functions graphically, compute complex financial scenarios, or sync calculation histories across devices.',
      solution:
        'Built a modern Flutter mobile application integrating optical character recognition (OCR) APIs, natural speech input, dynamic function graphing, financial EMI tools, and seamless Cloud Firestore synchronization.',
      architecture: [
        'Client Application: High-performance cross-platform Flutter/Dart architecture with responsive state management.',
        'Vision & OCR Pipeline: Image capture module with OCR APIs extracting handwritten and printed mathematical expressions.',
        'Math & Graphing Engine: Custom expression parser evaluating complex algebra, calculus, and plotting interactive 2D function graphs.',
        'Voice Processing: Integrated speech-to-text engine converting verbal queries into mathematical operations.',
        'Financial Modules: Dedicated EMI calculation, loan breakdown graphs, and multi-currency converter.',
        'Cloud & Storage: Real-time Cloud Firestore synchronization paired with robust SQLite offline cache and PDF export.'
      ],
      metrics: [
        { label: 'OCR Recognition', value: '96.5%' },
        { label: 'Platforms', value: 'Android / iOS / Web' },
        { label: 'Cloud Sync', value: 'Firestore Realtime' },
        { label: 'Offline Support', value: '100% Core Features' }
      ],
      highlights: [
        'Combines camera OCR equation scanning, AI math solving, and voice input.',
        'Interactive real-time graph plotting for algebraic equations.',
        'Financial EMI calculation suite and live currency conversion.',
        'Export detailed step-by-step math solutions as formatted PDF documents.'
      ],
      flowDiagram: [
        'Camera OCR / Voice / Keypad Input',
        'Expression Parser & AI Math Solver',
        'Interactive Graph & Financial Engine',
        'PDF Export Generator',
        'Cloud Firestore Sync'
      ]
    }
  },
  {
    id: 'fraud-detection-system',
    number: '03',
    title: 'AI-Based Fraud Detection System',
    category: 'AI / MACHINE LEARNING / FINTECH / SECURITY',
    categoryTags: ['MACHINE LEARNING', 'SCIKIT-LEARN', 'FLASK', 'SQLITE', 'PYTHON'],
    badgeTheme: 'coral',
    description:
      'An AI-based system designed to detect potentially fraudulent financial transactions in real time, featuring an administrative dashboard, interactive charts, prediction history logs, and fraud-risk metrics.',
    features: [
      'Real-time fraud detection pipeline',
      'Administrative dashboard for fraud analysts',
      'Interactive risk distribution charts & analytics',
      'Comprehensive prediction history & transaction audit logs',
      'Fraud-risk probability scoring & anomaly indicators',
      'Flask REST API for low-latency model inference',
      'SQLite database logging for historical analytics'
    ],
    techStack: ['Python', 'Flask', 'Scikit-learn', 'SQLite', 'Pandas', 'NumPy', 'HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/ashu7yadav/ai-fraud-detection-system',
    liveDemoUrl: 'https://demo.example.com/fraud-detection',
    image: '/assets/projects/fraud-detection.svg',
    details: {
      problem:
        'Financial institutions lose significant revenue to rapid fraudulent activity that bypasses static rule checks while causing high false-positive alerts on legitimate customer transactions.',
      solution:
        'Created an intelligent fraud detection system with Scikit-learn and Flask, backed by SQLite, offering an interactive admin portal with real-time risk metrics and prediction audit history.',
      architecture: [
        'Data Ingestion: Streaming payload validation for transaction amounts, timing, velocity, and user profiles.',
        'Imbalance Handling & Scaling: Preprocessing pipeline utilizing standard scaling and synthetic oversampling.',
        'Classification Core: Tuned Scikit-learn ensemble classifier optimized for high recall and low false-positive rates.',
        'Backend Server: Flask web server exposing clean JSON endpoints for automated inference and database storage.',
        'Admin Dashboard: Visual UI featuring transaction risk heatmaps, anomaly flags, and historical trend charts.'
      ],
      metrics: [
        { label: 'ROC-AUC Score', value: '98.4%' },
        { label: 'Inference Latency', value: '< 32ms' },
        { label: 'Risk Metric Resolution', value: 'Continuous 0-100' },
        { label: 'Database Storage', value: 'SQLite3 Schema' }
      ],
      highlights: [
        'End-to-end real-time fraud detection pipeline built in Python with Flask and Scikit-learn.',
        'Full administrative dashboard with interactive risk charts and probability metrics.',
        'Comprehensive prediction history audit trail stored in SQLite.',
        'Optimized for instant anomaly detection on streaming financial transaction payloads.'
      ],
      flowDiagram: [
        'Transaction Payload',
        'Preprocessing & Scaling',
        'Scikit-learn Model Scoring',
        'Fraud Risk Threshold Check',
        'Admin Dashboard & Alert'
      ]
    }
  }
];
