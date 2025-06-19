export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  title: string;
  summary: string;
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  graduationDate: string;
  coursework: string[];
  extracurriculars: string[];
}

export interface Skills {
  languages: string[];
  tools: string[];
  frameworks: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
  type: 'work' | 'research' | 'volunteer';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  award?: string;
  date: string;
  links?: {
    github?: string;
    demo?: string;
    presentation?: string;
    website?: string;
  };
  featured?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Theme {
  mode: 'light' | 'dark';
} 