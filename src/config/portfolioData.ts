export interface CaseStudySection {
  title: string;
  content: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Enterprise Product' | 'Mobile & Asset Tracking' | 'Governance Prototype' | 'E-commerce' | 'Computer Vision & APIs';
  roleSummary: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrototype?: boolean;
  featured: boolean;
  metricsBadge?: string;
  caseStudy: {
    context: string;
    problem: string;
    system: string;
    role: string;
    engineering: string;
    outcome: string;
  };
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  departmentRole?: string;
  company: string;
  location: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  scholarship?: string;
  location: string;
  details: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  keyPrinciple: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    headline: string;
    bio: string;
    location: string;
    status: string;
    educationBrief: string;
    personalNotes: {
      interests: string[];
      mindset: string;
    };
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    calendar: string;
  };
  workflow: WorkflowStep[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
}

const env = import.meta.env;

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Md Nafis Al Safayet",
    title: "Software Engineer",
    headline: "Building digital systems that connect business operations with thoughtful software.",
    bio: "I am a software engineer focused on designing and engineering practical digital products, enterprise order management platforms, asset tracking solutions, APIs, internal business tools, and e-commerce storefronts. I work across the full lifecycle—from understanding operational workflows and business requirements to frontend interfaces, backend services, database schema design, and production support.",
    location: "Dhaka, Bangladesh",
    status: "Engineering Systems at Igloo / Abdul Monem Limited",
    educationBrief: "B.Tech in Computer Science & Engineering • NIT Rourkela (ICCR Scholar)",
    personalNotes: {
      interests: ["Travel & Exploring Places", "Apparel & Fashion Design", "System Architecture", "Product Thinking"],
      mindset: "Software is most effective when it simplifies complex operational realities into intuitive, reliable daily tools for real people."
    }
  },

  contact: {
    email: env.VITE_CONTACT_EMAIL || "nafisalsafayet7@gmail.com",
    github: env.VITE_GITHUB_URL || "https://github.com/nafis217",
    linkedin: env.VITE_LINKEDIN_URL || "[LINKEDIN_URL]",
    calendar: env.VITE_CALENDAR_URL || "[CALENDAR_BOOKING_URL]",
  },

  workflow: [
    {
      step: "01",
      title: "Operational Problem",
      subtitle: "Identify real friction in business processes",
      description: "Analyze daily operational bottlenecks, manual approvals, lost asset records, or paper-based order trails directly with stakeholders.",
      deliverables: ["Process mapping", "Pain-point matrix", "User role definitions"],
      keyPrinciple: "Never build software before understanding how people actually work on the ground."
    },
    {
      step: "02",
      title: "Understand Workflow",
      subtitle: "Map state transitions & responsibility boundaries",
      description: "Define multi-level approval steps, RACI matrices, supervisor handoffs, status state machines, and reporting triggers.",
      deliverables: ["Workflow diagrams", "Permission matrices", "Data flow specifications"],
      keyPrinciple: "Clear state boundaries prevent operational edge cases from breaking production systems."
    },
    {
      step: "03",
      title: "Design System",
      subtitle: "Architect scalable database schemas & API contracts",
      description: "Design relational SQL schemas, multi-role security models, normalized tables, REST API specs, and mobile/web UI component systems.",
      deliverables: ["ER diagrams", "REST API specs", "Responsive wireframes & component guidelines"],
      keyPrinciple: "Strong schema boundaries and clean API contracts make frontend and backend development predictable."
    },
    {
      step: "04",
      title: "Build Software",
      subtitle: "Engineer full-stack web, mobile & backend platforms",
      description: "Construct web dashboards (React/TypeScript), mobile apps (React Native), robust backend services (ASP.NET Core/Node.js), and SMS integrations.",
      deliverables: ["React web dashboards", "React Native cross-platform apps", "ASP.NET Core backend services"],
      keyPrinciple: "Write maintainable, type-safe code that delivers fast initial loads and dependable uptime."
    },
    {
      step: "05",
      title: "Measure & Operationalize",
      subtitle: "Deploy, train teams & monitor operational metrics",
      description: "Roll out products to end users, collect field feedback from delivery agents and supervisors, monitor query performance, and refine features.",
      deliverables: ["Production deployment", "Field agent training", "Audit logs & KPI tracking"],
      keyPrinciple: "Software success is measured by operational efficiency gains, reduced human error, and user adoption."
    }
  ],

  projects: [
    {
      id: "igloo-oms",
      number: "01",
      title: "Igloo Order Management System",
      subtitle: "Enterprise Order Creation, Multi-Level Approvals & Delivery Operations",
      category: "Enterprise Product",
      roleSummary: "Full-Stack Software Engineering & Workflow System Architecture",
      description: "Digitized end-to-end order processing, customer account management, multi-tier supervisor approvals, delivery agent dispatch, and payment collection tracking for Igloo Ice Cream.",
      tags: ["ASP.NET Core", "SQL Server", "React", "React Native", "REST APIs", "Role-Based Security"],
      metricsBadge: "Enterprise Production Deployment",
      featured: true,
      caseStudy: {
        context: "Igloo Ice Cream operates nationwide distributor networks requiring rapid, error-free order processing between field representatives, regional supervisors, depot dispatchers, and finance teams.",
        problem: "Paper-based and legacy manual order flows caused delays in supervisor confirmation, stock verification, delivery assignment, discount application, and payment reconciliation.",
        system: "Engineered a unified digital order ecosystem comprising a high-throughput Web Management Dashboard and a companion React Native Mobile Application. Integrated multi-stage approval workflows, SMS confirmation triggers, order audit trails, and executive KPI reporting.",
        role: "Designed workflow logic, database schemas in SQL Server, RESTful API endpoints in ASP.NET Core, role-based permission rules, and responsive web dashboard interfaces.",
        engineering: "Implemented secure role-based access control (RBAC), multi-status state management (Created → Supervisor Approved → Dispatched → Delivered → Paid), transaction safety for inventory discounts, and automated SMS logging.",
        outcome: "Eliminated manual paper approvals, streamlined delivery agent assignments, provided real-time order visibility to management, and reduced order processing turnaround times."
      }
    },
    {
      id: "iglootrack",
      number: "02",
      title: "IglooTrack Asset Solution",
      subtitle: "Mobile QR / Barcode Scan-Based Freezer & Retail Shop Tracking System",
      category: "Mobile & Asset Tracking",
      roleSummary: "Mobile App Development, QR Integration & API Architecture",
      description: "Operational asset tracking platform for managing commercial freezer inventory, retail shop assignments, hardware profiling, and transfer histories.",
      tags: ["React Native", "ASP.NET Core", "SQL Server", "REST APIs", "Barcode / QR Scanning"],
      metricsBadge: "Operational Field Asset System",
      featured: true,
      caseStudy: {
        context: "Commercial ice cream operations deploy thousands of refrigerated units to retail points of sale. Tracking physical freezer locations, serial numbers, and shop transfers is essential for asset security.",
        problem: "Manual spreadsheet tracking resulted in unverified freezer locations, missing unit profiles, and lack of accountability during retailer shop transfers.",
        system: "Developed a camera-assisted mobile application featuring real-time barcode/QR scanner integration, shop profile lookup, freezer assignment logs, and transfer movement records.",
        role: "Engineered mobile scanning interfaces in React Native, backend asset APIs in ASP.NET Core, and relational asset history tracking schemas in SQL Server.",
        engineering: "Optimized camera-based barcode scanning performance in low-light shop environments, built instant asset profile lookup endpoints, and created audit logs for hardware relocations.",
        outcome: "Equipped field teams with instant physical freezer identification, accurate shop mapping, and full lifecycle transparency for corporate refrigeration assets."
      }
    },
    {
      id: "aml-core",
      number: "03",
      title: "AML Core & Task Management",
      subtitle: "Enterprise Governance, Multi-Company Task Matrix & RACI Visibility",
      category: "Governance Prototype",
      roleSummary: "Frontend Prototype Engineering & UI Architecture",
      description: "Enterprise work-management and organizational governance prototype designed for group-wide task tracking, RACI responsibility mapping, and department performance dashboards.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Enterprise Architecture"],
      isPrototype: true,
      metricsBadge: "Evolving Enterprise Prototype",
      featured: true,
      caseStudy: {
        context: "Abdul Monem Limited (AML Group) encompasses multiple business units and enterprise departments requiring cross-functional project oversight and governance.",
        problem: "Cross-departmental projects often lacked centralized responsibility assignment (Responsible, Accountable, Consulted, Informed) and real-time executive visibility into project milestones.",
        system: "Built an interactive web prototype featuring multi-company filtering, department breakdown views, individual employee task assignments, RACI responsibility matrices, and performance metrics.",
        role: "Architected frontend component hierarchy, TypeScript data structures, state management patterns, and responsive dashboard layouts in React + Vite.",
        engineering: "Implemented dynamic grid view filtering across company tiers, custom RACI status badges, task drill-down drawers, and executive visual progress charts.",
        outcome: "Provided enterprise leadership with a clear visual blueprint for standardized group-wide task governance and operational accountability."
      }
    },
    {
      id: "shopify-ecommerce",
      number: "04",
      title: "Shopify Storefronts & Custom E-Commerce",
      subtitle: "Tailored Liquid Themes, Metafields, Metaobjects & Product Layouts",
      category: "E-commerce",
      roleSummary: "Storefront Development & Custom Theme Customization",
      description: "Custom Shopify storefront engineering developed during tenure at Clicko Digital, focusing on bespoke Liquid theme sections, metafield integrations, and high-converting product pages.",
      tags: ["Shopify", "Liquid", "JavaScript", "HTML5/CSS3", "Metafields", "Metaobjects", "Pink Fresh"],
      metricsBadge: "Commercial E-Commerce Client Work",
      featured: true,
      caseStudy: {
        context: "Modern direct-to-consumer (DTC) brands require custom interactive product layouts beyond default off-the-shelf Shopify templates.",
        problem: "Standard theme limitations made it difficult to display structured product specs, custom promotional blocks, dynamic bundle options, and brand story sections.",
        system: "Engineered modular Liquid theme sections, custom product templates, and structured JSON schemas using Shopify Metafields and Metaobjects (including storefront work for Pink Fresh).",
        role: "Developed custom Liquid code, responsive CSS layout components, client-side interactive JavaScript blocks, and admin-configurable section schema controls.",
        engineering: "Utilized native Shopify Metaobjects for dynamic brand content, optimized image loading routines for mobile shoppers, and customized cart drawer interactions.",
        outcome: "Delivered distinct, high-performance storefront experiences with flexible merchant content controls and seamless mobile purchasing flows."
      }
    },
    {
      id: "hand-gesture-automation",
      number: "05",
      title: "Hand Gesture Home Automation",
      subtitle: "Computer-Vision Based Hardware & Appliance Control via MQTT",
      category: "Computer Vision & APIs",
      roleSummary: "Computer Vision Logic & MQTT Hardware Communication",
      description: "Computer-vision system utilizing real-time hand gesture recognition to interact with physical home automation devices over light MQTT protocol messages.",
      tags: ["Python", "Computer Vision", "MQTT", "Hardware Interaction"],
      githubUrl: "https://github.com/nafis217/Hand-Gesture-Home-Automation-System",
      featured: false,
      caseStudy: {
        context: "Touchless, hands-free hardware control research exploring computer vision as an accessible interface for smart environments.",
        problem: "Physical touch switches and smartphone app controls can be inconvenient or inaccessible in sterile or hands-busy situations.",
        system: "Integrated video feed gesture classification with light MQTT message brokers to wirelessly command connected hardware relays and smart home devices.",
        role: "Designed vision gesture mapping algorithms, frame processing pipelines, and MQTT publisher event handlers.",
        engineering: "Optimized frame capture rate for minimal processing latency and implemented noise filtering to prevent accidental gesture triggers.",
        outcome: "Demonstrated reliable real-time hands-free control of appliance states using camera vision feeds."
      }
    },
    {
      id: "weather-app",
      number: "06",
      title: "Weather Forecasting Application",
      subtitle: "Clean Responsive Frontend & Asynchronous Weather API Integration",
      category: "Computer Vision & APIs",
      roleSummary: "API Integration & Interface Development",
      description: "Responsive weather dashboard delivering real-time meteorological metrics, daily forecasts, location lookups, and visual condition indicators.",
      tags: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Async Fetch"],
      githubUrl: "https://github.com/nafis217/weather-app",
      featured: false,
      caseStudy: {
        context: "Utility application focused on asynchronous data handling, weather API integration, and clean responsive UI design.",
        problem: "Parsing multi-field API payloads efficiently while providing immediate visual feedback during network requests.",
        system: "Constructed an async fetch client with query caching, dynamic background states based on weather conditions, and search auto-suggest.",
        role: "Developed client UI, API query logic, error state handling, and CSS layout styling.",
        engineering: "Handled edge-case network timeouts, invalid location inputs, and responsive layout scaling across mobile and desktop viewports.",
        outcome: "Clean, fast-loading weather dashboard with robust asynchronous API state management."
      }
    },
    {
      id: "todo-app",
      number: "07",
      title: "Task Workflow Application",
      subtitle: "Client-Side Task State Management & Persistence",
      category: "Computer Vision & APIs",
      roleSummary: "Frontend Developer",
      description: "Minimalist task management tool featuring category filtering, completion tracking, priority tagging, and local browser persistence.",
      tags: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
      githubUrl: "https://github.com/nafis217/Todo-List",
      featured: false,
      caseStudy: {
        context: "Clean client-side state management exploration focused on DOM manipulation and persistent browser storage.",
        problem: "Building intuitive task state transitions without heavy third-party framework overhead.",
        system: "Created a modular vanilla JavaScript application using local storage serialization and accessible list markup.",
        role: "Engineered state handler logic, event listeners, filtering routines, and UI styling.",
        engineering: "Ensured keyboard navigation accessibility, smooth item removals, and zero layout shifting during list mutations.",
        outcome: "Lightweight, persistent personal task management utility."
      }
    }
  ],

  experience: [
    {
      id: "exp-igloo",
      period: "June 2026 — Present",
      role: "Software Engineer",
      departmentRole: "Senior Executive – MIS (Software Engineering)",
      company: "Igloo Ice Cream / Abdul Monem Limited",
      location: "Dhaka, Bangladesh",
      summary: "Designing, engineering, and maintaining core enterprise software systems, mobile operational tools, order processing workflows, and internal business platforms for Igloo Ice Cream under Abdul Monem Limited.",
      responsibilities: [
        "Architecting and developing full-stack web dashboards (React/ASP.NET Core) and mobile operational apps (React Native) for order management and distributor workflows.",
        "Designing relational database models in SQL Server for order tracking, multi-tier approvals, supervisor confirmations, and SMS audit logs.",
        "Collaborating directly with business stakeholders, depot managers, and operations leads to translate complex business requirements into intuitive software features.",
        "Developing asset management platforms (IglooTrack) featuring barcode/QR scan workflows for retail freezer inventory control."
      ],
      techStack: ["ASP.NET Core", "SQL Server", "React", "React Native", "REST APIs", "IIS", "C#", "TypeScript"]
    },
    {
      id: "exp-clicko",
      period: "June 2025 — June 2026",
      role: "Junior Software Engineer",
      company: "Clicko Digital",
      location: "Dhaka, Bangladesh",
      summary: "Engineered web applications, custom e-commerce storefronts, Shopify Liquid themes, custom sections, and responsive merchant features.",
      responsibilities: [
        "Developed tailored Shopify storefront themes using Liquid, custom HTML/CSS, JavaScript, and dynamic merchant section blocks.",
        "Utilized Shopify Metafields and Metaobjects to build structured product specs, promotional callouts, and bespoke storefront layouts (e.g., Pink Fresh).",
        "Optimized frontend performance, mobile responsiveness, and cross-browser consistency across diverse client e-commerce sites.",
        "Integrated third-party APIs, custom cart drawers, and client-side web components."
      ],
      techStack: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Git", "REST APIs"]
    },
    {
      id: "exp-technocolabs",
      period: "May 2024 — July 2024",
      role: "Software Engineer Intern",
      company: "TechnoColabs Softwares Inc.",
      location: "India (Remote)",
      summary: "Assisted in software development tasks, REST API integration, frontend component building, and code optimization.",
      responsibilities: [
        "Built modular UI components in React and JavaScript for web applications.",
        "Participated in API testing, Postman workflow creation, and bug fixing.",
        "Collaborated with cross-functional intern teams using Git version control and GitHub workflows."
      ],
      techStack: ["React", "JavaScript", "REST APIs", "Git", "GitHub", "Postman"]
    }
  ],

  education: [
    {
      institution: "National Institute of Technology Rourkela",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2021 — 2025",
      scholarship: "ICCR Scholar (Indian Council for Cultural Relations)",
      location: "Rourkela, Odisha, India",
      details: "Rigorous computer science curriculum covering algorithms, database management systems, data structures, operating systems, computer networks, and software engineering principles."
    }
  ],

  skills: [
    {
      category: "Frontend Engineering",
      description: "Crafting responsive, accessible, and performant web interfaces",
      skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend & APIs",
      description: "Building scalable backend services, business logic, and API endpoints",
      skills: ["ASP.NET Core", "Node.js", "Express.js", "REST APIs", "Role-Based Access Control"]
    },
    {
      category: "Database & Storage",
      description: "Designing relational schemas, queries, and data storage structures",
      skills: ["SQL Server", "MongoDB", "MySQL"]
    },
    {
      category: "Mobile Development",
      description: "Developing cross-platform field operational applications",
      skills: ["React Native", "QR / Barcode Scanner Workflows", "Mobile API Integration"]
    },
    {
      category: "E-Commerce Architecture",
      description: "Tailored storefront engineering and merchant customization",
      skills: ["Shopify", "Liquid", "Shopify Theme Development", "Custom Sections", "Metafields", "Metaobjects"]
    },
    {
      category: "Infrastructure, Tools & Languages",
      description: "Development environments, deployment tools, and programming languages",
      skills: ["Git", "GitHub", "Docker", "IIS", "Postman", "VS Code", "Python", "C++", "Java"]
    }
  ]
};
