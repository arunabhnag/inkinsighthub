import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
}

export interface Whitepaper {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  mediumUrl?: string;
  pdfUrl?: string;
}

export interface ResumeSection {
  id: string;
  title: string;
  layout: 'bullets' | 'details';
  items: {
    primary: string;
    secondary?: string;
  }[];
}

export interface Profile {
  id: 'neha' | 'arunabh';
  name: string;
  role: string;
  tagline: string;
  accentColor: string;
  bio: string;
  projects: Project[];
  whitepapers?: Whitepaper[];
  resumeUrl: string;
  imageUrl: string;
  resumeSections: ResumeSection[];
}

export interface ExtraProject {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  path: string;
  isVisible: boolean;
}

export const EXTRA_PROJECTS: ExtraProject[] = [
  {
    id: 'battery-intelligence',
    title: 'Battery Intelligence',
    description: 'A simple utility to understand your powercfg /batteryhealth report.',
    thumbnailUrl: '/extras/battery-intelligence.png',
    path: '/extras/battery-intelligence.html',
    isVisible: true
  }
];

export const PROFILES: Record<string, Profile> = {
  neha: {
    id: 'neha',
    name: 'Neha Babu Nag',
    role: 'Service Delivery Leadership',
    tagline: 'Turning operational complexity into structured, measurable outcomes.',
    accentColor: 'var(--color-accent-neha)',
    bio: 'A seasoned leader with over a decade of experience designing and scaling service delivery frameworks across enterprise environments. Specialises in translating operational complexity into structured, measurable outcomes.',
    resumeUrl: '/2026_ServiceDelivery_Resume_NehaBabuNag.pdf',
    imageUrl: '/hero-neha.png',
    resumeSections: [
      {
        id: 'competencies',
        title: 'Core Competencies',
        layout: 'bullets',
        items: [
          { primary: 'Service Delivery' },
          { primary: 'SLA Management' },
          { primary: 'ITIL Framework' },
          { primary: 'Stakeholder Management' },
          { primary: 'Process Optimization' }
        ]
      },
      {
        id: 'education',
        title: 'Education',
        layout: 'details',
        items: [
          { primary: 'Master of Business Administration', secondary: 'University of Technology · 2012' },
          { primary: 'B.S. in Computer Science', secondary: 'State Engineering College · 2009' }
        ]
      }
    ],
    projects: [
      {
        id: 'p1',
        title: 'Enterprise SLA Transformation',
        category: 'Operational Strategy',
        year: '2024',
        description: 'Redesigned the incident management lifecycle across 6 regional teams, reducing mean resolution time by 38% while maintaining 99.9% compliance.',
        tags: ['ITIL', 'SLA Management', 'Global Teams']
      },
      {
        id: 'p2',
        title: 'Global Service Desk Migration',
        category: 'Project Management',
        year: '2023',
        description: 'Led the multi-phase migration of 50,000 users to a consolidated ServiceNow instance, achieving a 92% CSAT score during the transition period.',
        tags: ['ServiceNow', 'Change Management', 'User Experience']
      }
    ]
  },
  arunabh: {
    id: 'arunabh',
    name: 'Arunabh Nag',
    role: 'Technical Writing Leadership',
    tagline: 'Bridging the gap between engineering excellence and user understanding.',
    accentColor: 'var(--color-accent-arunabh)',
    bio: 'Strategic documentation leader focused on building Docs-as-Code pipelines and high-performing content teams. Expert in distilling complex technical architectures into accessible, high-impact knowledge assets.',
    resumeUrl: '/2026_TD_Resume_ArunabhNag.pdf',
    imageUrl: '/hero-arunabh.png',
    resumeSections: [
      {
        id: 'competencies',
        title: 'Core Competencies',
        layout: 'bullets',
        items: [
          { primary: 'Technical Writing' },
          { primary: 'Docs-as-Code' },
          { primary: 'API Documentation' },
          { primary: 'Content Strategy' },
          { primary: 'Team Leadership' }
        ]
      },
      {
        id: 'education',
        title: 'Education',
        layout: 'details',
        items: [
          { primary: 'Strategic Content Management', secondary: 'Global Writing Institute · 2015' },
          { primary: 'B.A. in English Literature', secondary: 'National Arts College · 2011' }
        ]
      }
    ],
    projects: [
      {
        id: 'a1',
        title: 'Docs-as-Code Implementation',
        category: 'Infrastructure',
        year: '2024',
        description: 'Architected a Markdown-based documentation pipeline integrated directly into CI/CD workflows, reducing doc-to-release latency by 60%.',
        tags: ['Markdown', 'GitHub Actions', 'Docusaurus']
      },
      {
        id: 'a2',
        title: 'API Reference Overhaul',
        category: 'Developer Experience',
        year: '2023',
        description: 'Redesigned the public API reference for a fintech unicorn, resulting in a 40% reduction in developer support tickets related to integration.',
        tags: ['OpenAPI', 'Swagger', 'DX']
      }
    ],
    whitepapers: [
      {
        id: 'w1',
        title: 'The Future of AI-Assisted Documentation',
        date: 'Jan 2025',
        excerpt: 'Exploring how LLMs are reshaping the role of the technical writer from content creator to knowledge architect.',
        mediumUrl: 'https://medium.com'
      },
      {
        id: 'w2',
        title: 'Measuring Documentation ROI',
        date: 'Nov 2024',
        excerpt: 'A framework for quantifying the impact of technical content on customer success and engineering velocity.',
        pdfUrl: '#'
      }
    ]
  }
};
