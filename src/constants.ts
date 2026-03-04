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
  layout: 'bullets' | 'details' | 'summary';
  isVisible: boolean;
  items: {
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
}

export const EXTRA_PROJECTS: ExtraProject[] = [
  {
    id: 'battery-intelligence',
    title: 'Battery Intelligence',
    description: 'A simple utility to understand your powercfg /batteryreport HTML file.',
    thumbnailUrl: '/extras/battery-intelligence.png',
    path: '/extras/battery-intelligence.html',
    isVisible: true
  },
  {
    id: 'pdf_to_markdown',
    title: 'PDF → Markdown - In Progress',
    description: 'A simple utility to convert text based PDF files to Markdown. Includes a built-in simple markdown editor.',
    thumbnailUrl: '/extras/pdf_to_markdown.png',
    path: '/extras/pdf_to_markdown.html',
    isVisible: true
  },
  {
    id: 'resume-parser',
    title: 'Resume Parser - In Progress',
    description: 'A simple utility to parse your PDF resumes to HTML. The PDF → Markdown utility may provide a cleaner output at present',
    thumbnailUrl: '/extras/resume-parser.png',
    path: '/extras/resume-parser.html',
    isVisible: true
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
        title: 'Professional Summary',
        layout: 'summary',
        isVisible: true,
        items: [
          { primary: 'Seasoned Service Delivery Leader with 12+ years of experience in designing and scaling operational frameworks for global enterprise environments. Expert in ITIL methodologies, SLA management, and driving cross-functional team excellence to achieve measurable business outcomes.' }
        ]
      },
      {
        id: 'experience',
        title: 'Professional Experience',
        layout: 'details',
        isVisible: true,
        items: [
          { 
            primary: 'Senior Service Delivery Manager', 
            secondary: 'Global Enterprise Solutions · 2020 — Present',
            description: 'Leading a team of 40+ service professionals across 3 continents. Responsible for the end-to-end delivery of managed services for Fortune 500 clients, consistently exceeding 99.9% SLA compliance.'
          },
          { 
            primary: 'Service Desk Lead', 
            secondary: 'Tech Infrastructure Corp · 2015 — 2020',
            description: 'Managed the transition of regional support desks into a unified global service center. Implemented ServiceNow automation that reduced ticket volume by 25% through self-service initiatives.'
          },
          { 
            primary: 'Operations Analyst', 
            secondary: 'Strategic Systems Ltd · 2010 — 2015',
            description: 'Optimized internal workflows and reporting structures, providing data-driven insights that led to a 15% increase in operational efficiency.'
          }
        ]
      },
      {
        id: 'competencies',
        title: 'Core Competencies',
        layout: 'bullets',
        isVisible: true,
        items: [
          { primary: 'Service Delivery Strategy' },
          { primary: 'SLA & KPI Management' },
          { primary: 'ITIL v4 Framework' },
          { primary: 'Stakeholder Management' },
          { primary: 'Process Optimization' },
          { primary: 'Global Team Leadership' },
          { primary: 'Change Management' }
        ]
      },
      {
        id: 'education',
        title: 'Education',
        layout: 'details',
        isVisible: true,
        items: [
          { primary: 'Bachelor of Technology - Electronics and Communication Engineering', secondary: 'KURUKSHETRA UNIVERSITY · 2010' }
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
        title: 'Professional Summary',
        layout: 'summary',
        isVisible: true,
        items: [
          { primary: 'Documentation leader with 12+ years of experience in technical writing, practice leadership, and developer productivity. I treat documentation as a product, prioritizing business value alongside content quality. I build teams that operate with a product-first mindset, embedded in the development lifecycle, integrated with UX, and accountable to outcomes. Currently seeking opportunities in documentation leadership, developer experience, and content strategy, following a sabbatical focused on generative AI and LLM tooling.' }
        ]
      },
      {
        id: 'experience',
        title: 'Professional Experience',
        layout: 'details',
        isVisible: true,
        items: [
          { 
            primary: 'Technology Director: Documentation', 
            secondary: 'Wizeline · July 2018 — March 2023',
            description: 'Led the end-to-end business lifecycle of Wizeline\'s documentation and developer productivity practice. Rebuilt Technical Writing from a support function into a product-first practice with defined business value metrics, pre-sales positioning, and enterprise-grade delivery standards. Served as the primary escalation point and Go-To-Market (GTM) architect across 10+ enterprise customer engagements.'
          },
          { 
            primary: 'Senior Technical Writer', 
            secondary: 'HCL Technologies Limited · December 2014 — March 2018',
            description: 'Documented technology-specific modules for an industry-leading, single-point infrastructure monitoring solution covering cloud platforms (AWS, Docker, OpenStack, G Suite), storage systems (Dell EMC, IBM, NetApp, Pure Storage), databases (MySQL, SQL Server, DB2), and enterprise applications (Cisco UCM, Active Directory, Hyper-V).'
          },
          { 
            primary: 'Technical Writer – Consultant', 
            secondary: 'InterGlobe Technologies · August 2013 — April 2014',
            description: 'Created end-user technical documentation for a Middle East-based, end-to-end aviation cargo management system.'
          },
          { 
            primary: 'SME – Technical Content', 
            secondary: 'Innodata Inc. · April 2012 — June 2013',
            description: 'Served as Engineering and QA lead, authoring and reviewing solutions for advanced Computer Science textbooks covering data structures, information security, system architecture, and computational theory.'
          },
          { 
            primary: 'Technical Writer – Consultant', 
            secondary: 'AGNITY, Inc · September 2010 — July 2011',
            description: 'Wrote and enhanced technical documents including User Guides, API References, and Provisioning Guides across telecom, healthcare, and Next Generation Intelligent Networks domains.'
          }
        ]
      },
      {
        id: 'competencies',
        title: 'Core Competencies',
        layout: 'bullets',
        isVisible: true,
        items: [
          { primary: 'Technical Communication' },
          { primary: 'Documentation Practice Leadership' },
          { primary: 'API Documentation' },
          { primary: 'Developer Experience (DX)' },
          { primary: 'Docs-as-Code' },
          { primary: 'Content Strategy' },
          { primary: 'Information Architecture' },
          { primary: 'UX Writing' },
          { primary: 'Style Guide Development' },
          { primary: 'Developer Portals' },
          { primary: 'Single-Sourcing' },
          { primary: 'DocOps' },
          { primary: 'Agile' },
          { primary: 'GTM Strategy' },
          { primary: 'Pre-Sales Positioning' },
          { primary: 'Team Structuring and Mentoring' },
          { primary: 'Stakeholder Management' },
          { primary: 'Cross-Functional Collaboration' },
          { primary: 'Generative AI Tooling' }
        ]
      },
      {
        id: 'education',
        title: 'Education',
        layout: 'details',
        isVisible: true,
        items: [
          { primary: 'Bachelor of Engineering – Computer Science and Engineering', secondary: 'Maharshi Dayanand University · 2010' }
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
