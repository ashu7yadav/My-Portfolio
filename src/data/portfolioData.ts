import type {
  ExpertiseItem,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  AchievementItem,
  SocialLink,
  SpokenLanguage,
} from '../types';

import { getAssetUrl } from '../utils/assets';

export const personalInfo = {
  name: 'Ashutosh Yadav',
  firstName: 'Ashutosh',
  lastName: 'Yadav',
  role: 'B.Tech CSE | Artificial Intelligence & Machine Learning',
  shortRole: 'AI/ML ENGINEER & SOFTWARE DEVELOPER',
  subHeading: 'B.TECH CSE (AI/ML) STUDENT',
  location: 'Lucknow, Uttar Pradesh, India',
  phone: '+91 8881707331',
  maskedPhone: '+91 8881••••31',
  rawPhone: '8881707331',
  whatsappUrl: 'https://wa.me/918881707331',
  email: 'ashutosh7yadav@gmail.com',
  maskedEmail: 'ashutosh••••••@gmail.com',
  mailtoUrl: 'mailto:ashutosh7yadav@gmail.com?subject=Collaboration%20/%20Opportunity',
  linkedinUrl: 'https://www.linkedin.com/in/ashutosh-yadav-632540342/',
  githubUrl: 'https://github.com/ashu7yadav',
  statusBadge: 'OPEN TO AI/ML INTERNSHIPS & COLLABORATIONS',
  heroBio:
    'Passionate about building intelligent applications where AI, software engineering, and modern development come together.',
  aboutBio:
    'I am a passionate B.Tech Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning. I have hands-on experience in Machine Learning, Python, Flutter, and Full-Stack Development. I completed an AI & Machine Learning internship at MNNIT Allahabad, where I worked on real-world AI applications, including a Loan Approval Prediction System. My interests include Generative AI, Data Science, Mobile App Development, and Software Engineering.',
  resumeFileName: 'Ashutosh_Yadav_Resume.pdf',
  resumeUrl: getAssetUrl('assets/Ashutosh_Yadav_Resume.pdf'),
  profileImage: getAssetUrl('assets/profile.jpg'),
  avatarSvg: getAssetUrl('assets/profile.svg'),
  aboutImage: getAssetUrl('assets/about_portrait.jpg'),

  quickStats: [
    { label: 'DEGREE', value: 'B.Tech CSE (AI/ML)' },
    { label: 'GRADUATION', value: 'Expected 2028' },
    { label: 'INTERNSHIP', value: 'MNNIT Allahabad' },
    { label: 'AVAILABILITY', value: 'Open for Roles' },
  ],
  heroTags: [
    'PYTHON',
    'AI/ML',
    'FULL-STACK DEVELOPMENT',
    'FLUTTER',
    'GENERATIVE AI',
  ],
};

export const socialLinks: SocialLink[] = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/918881707331',
    icon: 'WhatsApp',
    label: 'Chat on WhatsApp',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ashutosh-yadav-632540342/',
    icon: 'Linkedin',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ashu7yadav',
    icon: 'Github',
    label: 'Explore GitHub Code',
  },
  {
    name: 'Email',
    url: 'mailto:ashutosh7yadav@gmail.com',
    icon: 'Mail',
    label: 'Send Direct Email',
  },
];

export const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#journey' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CERTIFICATIONS', href: '#achievements' },
  { label: 'CONTACT', href: '#contact' },
];

export const quickProfile = {
  focusAreas: [
    'PYTHON',
    'AI / MACHINE LEARNING',
    'FULL-STACK DEVELOPMENT',
    'FLUTTER & MOBILE',
    'GENERATIVE AI',
    'DATA SCIENCE',
  ],
  details: [
    { label: 'INSTITUTE', value: 'SR Group of Institutions' },
    { label: 'PROGRAM', value: 'B.Tech in Computer Science Engineering (AI & ML)' },
    { label: 'GRADUATION', value: 'Expected 2028' },
    { label: 'INTERNSHIP', value: 'MNNIT Allahabad (Innovation & Incubation Hub)' },
    { label: 'PRIMARY STACK', value: 'Python, XGBoost, Scikit-learn, Flutter, Flask' },
    { label: 'LOCATION', value: 'Lucknow, Uttar Pradesh, India' },
  ],
};

export const spokenLanguages: SpokenLanguage[] = [
  {
    name: 'English',
    proficiency: 'Professional Working Proficiency',
    badge: 'PROFESSIONAL',
  },
  {
    name: 'Hindi',
    proficiency: 'Native',
    badge: 'NATIVE',
  },
];

export const expertiseData: ExpertiseItem[] = [
  {
    id: 'exp-01',
    number: '01',
    title: 'AI & MACHINE LEARNING',
    description:
      'Designing end-to-end predictive modeling pipelines with Scikit-learn, XGBoost, Pandas, and NumPy—spanning data preprocessing, feature engineering, class-imbalance treatment, and model evaluation.',
    technologies: ['Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Data Preprocessing', 'Feature Engineering'],
    accent: 'coral',
  },
  {
    id: 'exp-02',
    number: '02',
    title: 'PYTHON & FULL-STACK DEVELOPMENT',
    description:
      'Building production-ready web platforms and lightweight REST APIs using Flask, SQLite, HTML5, CSS3, and JavaScript to bring predictive intelligence into live user experiences.',
    technologies: ['Python', 'Flask', 'SQLite', 'REST APIs', 'JavaScript', 'HTML5/CSS3'],
    accent: 'blue',
  },
  {
    id: 'exp-03',
    number: '03',
    title: 'MOBILE DEVELOPMENT (FLUTTER)',
    description:
      'Engineering sleek cross-platform mobile applications with Flutter, Dart, Firebase, and Cloud Firestore, incorporating on-device intelligence, OCR recognition, and real-time cloud synchronization.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'OCR APIs', 'State Management'],
    accent: 'lime',
  },
  {
    id: 'exp-04',
    number: '04',
    title: 'GENERATIVE AI & DATA SCIENCE',
    description:
      'Exploring large language models, prompt engineering, exploratory data analysis (EDA), statistical discovery, and automated reasoning pipelines for real-world decision automation.',
    technologies: ['Generative AI', 'Data Science', 'EDA', 'Google Colab', 'Jupyter', 'Statistical Modeling'],
    accent: 'coral',
  },
  {
    id: 'exp-05',
    number: '05',
    title: 'CLOUD DEPLOYMENT & DEVOPS',
    description:
      'Containerizing machine learning models and server applications with Docker, deploying resilient microservices to Google Cloud Run, and managing version control via Git and GitHub.',
    technologies: ['Google Cloud Run', 'Git', 'GitHub', 'VS Code', 'Google Colab', 'Jupyter Notebook'],
    accent: 'blue',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    year: 'May 2026 – June 2026',
    role: 'AI & Machine Learning Intern',
    organization: 'Innovation & Incubation Hub, MNNIT Allahabad',
    badge: 'FEATURED INTERNSHIP',
    points: [
      'Engineered an end-to-end Loan Approval Prediction System using Python and XGBoost to automate credit assessment workflows.',
      'Executed exploratory data analysis (EDA), missing value imputation, and feature engineering to enhance model accuracy.',
      'Developed a responsive web platform integrated with a SQLite database using the Flask framework.',
      'Containerized and deployed the machine learning model to Google Cloud Run to ensure scalable and reliable cloud hosting.',
    ],
  },
  {
    year: '2024 – 2028 (Ongoing)',
    role: 'B.Tech CSE (AI/ML) Undergraduate',
    organization: 'SR Group of Institutions',
    badge: 'ACADEMIC EXCELLENCE',
    points: [
      'Comprehensive study of Data Structures, Object-Oriented Programming (OOP), and Database Management Systems (DBMS).',
      'Specialized in Artificial Intelligence, Machine Learning pipelines, and mathematical foundations.',
      'Developed real-world projects in Python, Flutter, Flask, and cloud deployments.',
      'Active participant in coding challenges, technical workshops, and developer collaborations.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    color: 'coral',
    skills: [
      { name: 'Python', level: 'ADVANCED' },
      { name: 'Java', level: 'INTERMEDIATE' },
      { name: 'C', level: 'INTERMEDIATE' },
      { name: 'SQL', level: 'ADVANCED' },
      { name: 'HTML', level: 'ADVANCED' },
      { name: 'CSS', level: 'ADVANCED' },
      { name: 'JavaScript', level: 'INTERMEDIATE' },
    ],
  },
  {
    title: 'AI & MACHINE LEARNING',
    color: 'lime',
    skills: [
      { name: 'Scikit-learn', level: 'ADVANCED' },
      { name: 'XGBoost', level: 'ADVANCED' },
      { name: 'Pandas', level: 'ADVANCED' },
      { name: 'NumPy', level: 'ADVANCED' },
      { name: 'Data Preprocessing', level: 'ADVANCED' },
      { name: 'Feature Engineering', level: 'ADVANCED' },
      { name: 'Generative AI', level: 'INTERMEDIATE' },
      { name: 'Data Science', level: 'ADVANCED' },
    ],
  },
  {
    title: 'FRAMEWORKS & DATABASES',
    color: 'blue',
    skills: [
      { name: 'Flask', level: 'ADVANCED' },
      { name: 'Flutter', level: 'ADVANCED' },
      { name: 'Firebase', level: 'ADVANCED' },
      { name: 'Cloud Firestore', level: 'ADVANCED' },
      { name: 'SQLite', level: 'ADVANCED' },
    ],
  },
  {
    title: 'DEVELOPMENT & CLOUD',
    color: 'carbon',
    skills: [
      { name: 'Git', level: 'ADVANCED' },
      { name: 'GitHub', level: 'ADVANCED' },
      { name: 'VS Code', level: 'ADVANCED' },
      { name: 'Google Cloud Run', level: 'ADVANCED' },
      { name: 'Google Colab', level: 'ADVANCED' },
      { name: 'Jupyter Notebook', level: 'ADVANCED' },
    ],
  },
  {
    title: 'COURSEWORK',
    color: 'coral',
    skills: [
      { name: 'Data Structures', level: 'ADVANCED' },
      { name: 'OOP', level: 'ADVANCED' },
      { name: 'DBMS', level: 'ADVANCED' },
    ],
  },
];

export const educationData: EducationItem = {
  degree: 'B.Tech in Computer Science Engineering (AI & ML)',
  institution: 'SR Group of Institutions',
  location: 'Lucknow, Uttar Pradesh, India',
  period: 'Expected Graduation: 2028',
  coursework: [
    'Data Structures',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Artificial Intelligence & Machine Learning',
    'Probability & Statistical Foundations',
    'Full-Stack Web Development',
  ],
  highlights: [
    'Core specialization in Artificial Intelligence & Machine Learning principles and applications.',
    'Completed hands-on AI & ML internship at Innovation & Incubation Hub, MNNIT Allahabad.',
    'Built end-to-end projects across Python, XGBoost, Scikit-learn, Flutter, and Google Cloud Run.',
  ],
};

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-01',
    type: 'CERTIFICATION',
    title: 'AI & Machine Learning Internship Certification',
    issuer: 'Innovation & Incubation Hub, MNNIT Allahabad',
    year: '2026',
    description:
      'Engineered an end-to-end Loan Approval Prediction System using Python, XGBoost, Flask, SQLite, and Google Cloud Run.',
    tag: 'MNNIT ALLAHABAD',
  },
  {
    id: 'ach-02',
    type: 'CERTIFICATION',
    title: 'Remote Sensing Techniques Online Course',
    issuer: 'ISRO (IIRS) - Indian Institute of Remote Sensing',
    year: '2026',
    description:
      'Completed official ISRO / IIRS specialized training covering satellite image processing, spatial data analysis, and remote sensing applications.',
    tag: 'ISRO (IIRS)',
  },
  {
    id: 'ach-03',
    type: 'CERTIFICATION',
    title: 'Google AI-Powered Shopping Ads Certification',
    issuer: 'Google',
    year: '2026',
    description:
      'Certified by Google in leveraging AI-powered algorithms, automated optimization, and data-driven targeting strategies.',
    tag: 'GOOGLE',
  },
  {
    id: 'ach-04',
    type: 'EXTRACURRICULAR',
    title: 'SRGI Hostel League (Volleyball)',
    issuer: 'Extracurricular Activities',
    year: '2025–2026',
    description:
      'Active Participant in competitive sports, building teamwork, agility, and sportsmanship.',
    tag: 'VOLLEYBALL',
  },
];
