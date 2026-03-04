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
    description: 'A simple utility to understand your powercfg /batteryreport HTML file.',
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
          { primary: 'Bachelor of Technology - Electronics and Communication Engineering', secondary: 'KURUKSHETRA UNIVERSITY · 2010' }//,
          //{ primary: 'B.S. in Computer Science', secondary: 'State Engineering College · 2009' }
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
    ],
    whitepapers: [
      {
        id: 'n1',
        title: 'Scaling Service Excellence in Hybrid Environments',
        date: 'Feb 2025',
        excerpt: 'Strategies for maintaining consistent service quality across distributed global teams.',
        mediumUrl: 'https://medium.com'
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
          { primary: 'Bachelor of Engineering – Computer Science and Engineering', secondary: 'Maharshi Dayanand University · 2010' }//,
          //{ primary: 'B.A. in English Literature', secondary: 'National Arts College · 2011' }
        ]
      }
    ],
    projects: [
      {
        id: 'a1',
        title: '[SPIKE] LLM led Documentation',
        category: 'Technical Writing Next',
        year: '2025-2026',
        description: 'Currently testing both cloud-based and local models for viability of LLM based documentation - Gemini, Claude, QWen.',
        tags: ['AI', 'LLM', 'Gemini', 'Claude', 'QWen']
      },
      {
        id: 'a2',
        title: 'Developer Portals',
        category: 'Developer Experience',
        year: '2023',
        description: 'Re-imagined developer experience into the developer platform for an industry leading fintech giant. 60% reduction in customer calls from the increased traffic to the platform.',
        tags: ['Docs-as-Code', 'Automation', 'Managed-Platform', 'API-Documentation', 'OpenAPI', 'Swagger']
      },
      {
        id: 'a3',
        title: 'Docs-as-Code Implementation',
        category: 'Infrastructure',
        year: '2022',
        description: 'Architected a Markdown-based documentation pipeline integrated directly into CI/CD workflows, reducing doc-to-release latency by 40%.',
        tags: ['Markdown', 'GitHub Actions', 'SSGs']
      }
    ],
    whitepapers: [
      {
        id: 'w1',
        title: '[Whitepaper] How Developer Portals Help You Thrive in the API Economy',
        date: 'Mar 2023',
        excerpt: 'Expert point of view on how to design, develop, and maintain a world-class developer portal to give your API the best chance of success in the increasingly competitive API economy.',
        pdfUrl: 'https://go.wizeline.com/rs/571-SRN-279/images/Developer-Portals-and-Wizeline.pdf'
      },
      {
        id: 'w3',
        title: '[Blog] 3 Technical Writing Trends to Improve Documentation in 2023',
        date: 'Mar 2023',
        excerpt: 'Ranging from automated processes, instant scoping, and reusable content to looking into natural Language processing (NLP), machine learning (ML), and artificial intelligence (AI) themselves to help create core content faster...',
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
