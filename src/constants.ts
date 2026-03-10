import { LucideIcon } from 'lucide-react';

export const LOCALIZATION_ENABLED = true;

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
  layout: 'bullets' | 'details' | 'summary';
  isVisible: boolean;
  items: {
    id: string;
    primary: string;
    secondary?: string;
    description?: string;
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
  email: string;
  linkedinUrl: string;
  showMediumLink: boolean;
  showBookACall: boolean;
  resumeSections: ResumeSection[];
}

export interface ExtraProject {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  path: string;
  isVisible: boolean;
  tags?: string[];
  isDefunct?: boolean;
}

export const EXTRA_PROJECTS: ExtraProject[] = [
  {
    id: 'starfield-loadout',
    title: 'Starfield - Weapon Loadout Analyzer',
    description: 'Utlity that scans screenshots of your weapons, compares to a small DB, and analyzes optimal loadouts.',
    thumbnailUrl: '/extras/starfield-loadout.png',
    path: '/extras/starfield-loadout.html',
    isVisible: true,
    tags: ['Claude', 'Client-Side', 'tesseract.js', 'starfield'],
    isDefunct: false
  },
  {
    id: 'battery-intelligence',
    title: 'Battery Intelligence Analyzer',
    description: 'A simple utility to understand your powercfg /batteryreport HTML file.',
    thumbnailUrl: '/extras/battery-intelligence.png',
    path: '/extras/battery-intelligence.html',
    isVisible: true,
    tags: ['Claude', 'Client-Side'],
    isDefunct: false
  },
  {
    id: 'resume-parser',
    title: 'Resume Parser - In Progress',
    description: 'A simple utility to parse your PDF resumes to HTML. Includes a built-in simple markdown editor.',
    thumbnailUrl: '/extras/resume-parser.png',
    path: '/extras/resume-parser.html',
    isVisible: true,
    tags: ['Claude', 'Client-Side', 'marked.js'],
    isDefunct: false
  },
  {
    id: 'pdf_to_markdown',
    title: 'PDF → Markdown - In Progress',
    description: 'A simple utility to convert text based PDF files to Markdown. Includes a built-in simple markdown editor.',
    thumbnailUrl: '/extras/pdf_to_markdown.png',
    path: '/extras/pdf_to_markdown.html',
    isVisible: true,
    tags: ['GPT', 'Client-Side'],
    isDefunct: true
  },
  {
    id: 'pdf-parser',
    title: 'PDF Parser - In Progress',
    description: 'A simple utility to parse your PDF files to HTML. Includes a built-in simple markdown editor.',
    thumbnailUrl: '/extras/pdf-parser.png',
    path: '/extras/pdf-parser.html',
    isVisible: true,
    tags: ['Claude', 'Client-Side', 'marked.js'],
    isDefunct: false
  }
];

export const PROFILES: Record<string, Profile> = {
  neha: {
    id: 'neha',
    name: 'NEHA BABU NAG',
    role: 'Service Delivery Leadership',
    tagline: 'Turning operational complexity into structured, measurable outcomes.',
    accentColor: 'var(--color-accent-neha)',
    bio: 'A seasoned leader with over a decade of experience designing and scaling service delivery frameworks across enterprise environments. Specialises in translating operational complexity into structured, measurable outcomes.',
    resumeUrl: '/2026_ServiceDelivery_Resume_NehaBabuNag.pdf',
    imageUrl: '/hero-neha.png',
    email: 'b.neha88@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/bneha/',
    showMediumLink: false,
    showBookACall: false,
    resumeSections: [
      {
        id: 'summary',
        title: '',
        layout: 'summary',
        isVisible: true,
        items: [
          { id: 's1', primary: '' }
        ]
      },
      {
        id: 'experience',
        title: '',
        layout: 'details',
        isVisible: true,
        items: [
          { 
            id: 'sdm',
            primary: '', 
            secondary: '',
            description: ''
          },
          { 
            id: 'lead',
            primary: '', 
            secondary: '',
            description: ''
          },
          { 
            id: 'analyst',
            primary: '', 
            secondary: '',
            description: ''
          }
        ]
      },
      {
        id: 'competencies',
        title: '',
        layout: 'bullets',
        isVisible: true,
        items: [
          { id: 'c1', primary: '' },
          { id: 'c2', primary: '' },
          { id: 'c3', primary: '' },
          { id: 'c4', primary: '' },
          { id: 'c5', primary: '' },
          { id: 'c6', primary: '' },
          { id: 'c7', primary: '' }
        ]
      },
      {
        id: 'education',
        title: '',
        layout: 'details',
        isVisible: true,
        items: [
          { id: 'btech', primary: '', secondary: '' }
        ]
      }
    ],
    projects: [
      {
        id: 'p1',
        title: '',
        category: '',
        year: '2024',
        description: '',
        tags: ['ITIL', 'SLA Management', 'Global Teams']
      },
      {
        id: 'p2',
        title: '',
        category: '',
        year: '2023',
        description: '',
        tags: ['ServiceNow', 'Change Management', 'User Experience']
      }
    ],
    whitepapers: [
      {
        id: 'n1',
        title: '',
        date: 'Feb 2025',
        excerpt: '',
        mediumUrl: 'https://medium.com'
      }
    ]
  },
  arunabh: {
    id: 'arunabh',
    name: 'ARUNABH NAG',
    role: 'Technical Writing Leadership',
    tagline: 'Bridging the gap between engineering excellence and user understanding.',
    accentColor: 'var(--color-accent-arunabh)',
    bio: 'Strategic documentation leader focused on building Docs-as-Code pipelines and high-performing content teams. Expert in distilling complex technical architectures into accessible, high-impact knowledge assets.',
    resumeUrl: '/2026_TD_Resume_ArunabhNag.pdf',
    imageUrl: '/hero-arunabh.png',
    email: 'arunabhnag@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/arunabhnag/',
    showMediumLink: false,
    showBookACall: false,
    resumeSections: [
      {
        id: 'summary',
        title: '',
        layout: 'summary',
        isVisible: true,
        items: [
          { id: 's1', primary: '' }
        ]
      },
      {
        id: 'experience',
        title: '',
        layout: 'details',
        isVisible: true,
        items: [
          { 
            id: 'director',
            primary: '', 
            secondary: '',
            description: ''
          },
          { 
            id: 'senior',
            primary: '', 
            secondary: '',
            description: ''
          },
          { 
            id: 'consultant1',
            primary: '', 
            secondary: '',
            description: ''
          },
          { 
            id: 'sme',
            primary: '', 
            secondary: '',
            description: ''
          },
          { 
            id: 'consultant2',
            primary: '', 
            secondary: '',
            description: ''
          }
        ]
      },
      {
        id: 'competencies',
        title: '',
        layout: 'bullets',
        isVisible: true,
        items: [
          { id: 'c1', primary: '' },
          { id: 'c2', primary: '' },
          { id: 'c3', primary: '' },
          { id: 'c4', primary: '' },
          { id: 'c5', primary: '' },
          { id: 'c6', primary: '' },
          { id: 'c7', primary: '' },
          { id: 'c8', primary: '' },
          { id: 'c9', primary: '' },
          { id: 'c10', primary: '' },
          { id: 'c11', primary: '' },
          { id: 'c12', primary: '' },
          { id: 'c13', primary: '' },
          { id: 'c14', primary: '' },
          { id: 'c15', primary: '' },
          { id: 'c16', primary: '' },
          { id: 'c17', primary: '' },
          { id: 'c18', primary: '' },
          { id: 'c19', primary: '' }
        ]
      },
      {
        id: 'education',
        title: '',
        layout: 'details',
        isVisible: true,
        items: [
          { id: 'be', primary: '', secondary: '' }
        ]
      }
    ],
    projects: [
      {
        id: 'a1',
        title: '',
        category: '',
        year: '2025-2026',
        description: '',
        tags: ['AI', 'LLM', 'Gemini', 'Claude', 'QWen']
      },
      {
        id: 'a2',
        title: '',
        category: '',
        year: '2023',
        description: '',
        tags: ['Docs-as-Code', 'Automation', 'Managed-Platform', 'API-Documentation', 'OpenAPI', 'Swagger']
      },
      {
        id: 'a3',
        title: '',
        category: '',
        year: '2022',
        description: '',
        tags: ['Markdown', 'GitHub Actions', 'SSGs']
      }
    ],
    whitepapers: [
      {
        id: 'w1',
        title: '',
        date: 'Mar 2023',
        excerpt: '',
        pdfUrl: 'https://go.wizeline.com/rs/571-SRN-279/images/Developer-Portals-and-Wizeline.pdf'
      },
      {
        id: 'w3',
        title: '',
        date: 'Mar 2023',
        excerpt: '',
        mediumUrl: 'https://web.archive.org/web/20241203145208/https://www.wizeline.com/technical-writing-trends-in-2023/'
      }

      /*
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
      */
    ]
  }
};
