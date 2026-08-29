export type AccentColor = 'coral' | 'blue' | 'lime' | 'carbon';

export interface ProjectDetail {
  problem: string;
  solution: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  flowDiagram?: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryTags: string[];
  badgeTheme: AccentColor;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  image: string;
  details: ProjectDetail;
}

export interface SkillItem {
  name: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'LEARNING';
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  color: AccentColor;
  skills: SkillItem[];
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  accent: AccentColor;
}

export interface ExperienceItem {
  year: string;
  role: string;
  organization?: string;
  points: string[];
  badge: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  type: 'HACKATHON' | 'CERTIFICATION' | 'PROJECT' | 'COMPETITION' | 'LEARNING' | 'EXTRACURRICULAR';
  title: string;
  issuer: string;
  year: string;
  description: string;
  tag: string;
}


export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface SpokenLanguage {
  name: string;
  proficiency: string;
  badge: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}

