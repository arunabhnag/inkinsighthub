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
}

export const PROFILES: Record<string, Profile> = {
  neha: {
    id: 'neha',
    name: 'Neha Babu Nag',
    role: 'Service Delivery Leadership',
    tagline: 'Turning operational complexity into structured, measurable outcomes.',
    accentColor: 'var(--color-accent-neha)',
    bio: 'A seasoned leader with over a decade of experience designing and scaling service delivery frameworks across enterprise environments. Specialises in translating operational complexity into structured, measurable outcomes.',
    resumeUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
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
    resumeUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
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
