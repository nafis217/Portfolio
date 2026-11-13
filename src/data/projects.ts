export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Screenshot/diagram paths relative to /public, e.g. "projects/igloo-oms/cover.png". First one is the cover. */
  images?: string[];
  /** 1-3 short result chips. Entries starting with "TODO" are hidden in production builds. */
  metrics?: string[];
  isPrototype?: boolean;
  caseStudyDetails?: {
    problem: string;
    contribution: string;
    system: string;
    technology: string;
    keyWork: string[];
  };
}

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "igloo-oms",
    images: [], // drop files in public/projects/igloo-oms/ and list e.g. "projects/igloo-oms/cover.png"
    metrics: ["TODO: ~N orders/day", "TODO: N depots", "TODO: N active users"],
    number: "01",
    title: "Igloo Order Management System",
    subtitle: "Enterprise Order Workflow & Dispatch Platform",
    category: "Enterprise System",
    description: "Enterprise order-management platform covering order creation, multi-level approvals, delivery dispatch, payment collection, SMS workflows, and KPI reporting.",
    technologies: ["React", "React Native", "ASP.NET Core Web API", "SQL Server"],
    caseStudyDetails: {
      problem: "Paper-based distributor orders caused delays in supervisor confirmation, delivery assignment, discount approval, and payment tracking across nationwide depots.",
      contribution: "Designed and built the full-stack web management dashboard, SQL Server database schemas, REST APIs, and multi-tier approval state machines.",
      system: "Unified web dashboard & React Native mobile app with real-time order status tracking, supervisor confirmation, SMS logs, and executive reports.",
      technology: "ASP.NET Core, C#, SQL Server, React 19, React Native, RESTful APIs.",
      keyWork: [
        "Multi-tier approval workflows & supervisor confirmations",
        "Role-based access control (RBAC) & permission security",
        "Delivery agent dispatch & payment reconciliation",
        "Automated SMS workflow triggers & audit logs"
      ]
    }
  },
  {
    id: "iglootrack",
    images: [], // drop files in public/projects/iglootrack/ and list e.g. "projects/iglootrack/cover.png"
    metrics: ["TODO: N freezers tracked", "TODO: N shops mapped"],
    number: "02",
    title: "IglooTrack",
    subtitle: "Mobile Asset & Freezer Tracking Solution",
    category: "Mobile Operations",
    description: "Mobile-first freezer and commercial asset tracking solution designed for field operations and retail point-of-sale mapping.",
    technologies: ["React Native", "ASP.NET Core Web API", "SQL Server"],
    caseStudyDetails: {
      problem: "Commercial refrigeration units deployed in retail shops lacked instant serial identification, verified shop assignments, and transfer history tracking.",
      contribution: "Developed the mobile scanning app, backend REST APIs, and asset relocation history schemas.",
      system: "Camera-assisted mobile application featuring real-time QR/barcode scanning, equipment profiling, and shop transfer logs.",
      technology: "React Native, ASP.NET Core, SQL Server, Camera Barcode API.",
      keyWork: [
        "QR & Barcode scanning for physical freezer units",
        "Equipment profile lookup & retail shop assignments",
        "Transfer movement history & relocation audit trails",
        "Mobile-first offline field operations capability"
      ]
    }
  },
  {
    id: "pink-fresh",
    // TODO: add URL
    liveUrl: undefined,
    images: [], // drop files in public/projects/pink-fresh/ and list e.g. "projects/pink-fresh/cover.png"
    metrics: ["TODO: result, e.g. page speed or launch date"],
    number: "03",
    title: "Pink Fresh",
    subtitle: "Custom Shopify Storefront & Liquid Architecture",
    category: "E-commerce",
    description: "Custom Shopify storefront developed during tenure at Clicko Digital, featuring bespoke Liquid theme sections, metafields, and high-converting product pages.",
    technologies: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    caseStudyDetails: {
      problem: "Default Shopify themes restricted merchant brand storytelling, structured product metadata display, and customized product section layouts.",
      contribution: "Engineered custom Liquid theme templates, responsive frontend UI components, and merchant-configurable section schemas.",
      system: "Tailored Shopify storefront with dynamic brand content sections, Metaobjects integration, and optimized mobile purchasing flows.",
      technology: "Shopify Liquid, JavaScript (ES6+), HTML5, CSS3, Metafields, Metaobjects.",
      keyWork: [
        "Custom Liquid theme section development",
        "Shopify Metafields & Metaobjects structured content",
        "Responsive cart drawer & interactive product pages",
        "Mobile storefront performance optimization"
      ]
    }
  },
  {
    id: "aml-core",
    images: [], // drop files in public/projects/aml-core/ and list e.g. "projects/aml-core/cover.png"
    metrics: ["TODO: N companies / departments modelled"],
    number: "04",
    title: "AML Core / Task Management",
    subtitle: "Enterprise Governance & RACI Work-Management Prototype",
    category: "Governance Prototype",
    description: "Enterprise work-management concept and prototype engineered for group-wide project tracking, RACI responsibility assignment, and department visibility.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    isPrototype: true,
    caseStudyDetails: {
      problem: "Group-wide projects across corporate business units needed standardized task governance and clear RACI responsibility assignment.",
      contribution: "Designed and built the frontend component architecture, TypeScript data models, RACI matrix views, and executive dashboard prototype.",
      system: "Interactive web prototype featuring company-wise and department-wise filtering, project progress tracking, and performance visibility.",
      technology: "React, TypeScript, Vite, Modern CSS Grid.",
      keyWork: [
        "Company-wise & Department-wise management views",
        "RACI responsibility matrix mapping (Responsible, Accountable, Consulted, Informed)",
        "Management visibility dashboard & task drill-downs",
        "Individual employee responsibility tracking"
      ]
    }
  }
];

export const EXPERIMENT_PROJECTS: ProjectItem[] = [
  {
    id: "hand-gesture",
    number: "05",
    title: "Hand Gesture Home Automation System",
    description: "Computer-vision based home automation project utilizing gesture recognition and MQTT protocol for touchless appliance interaction.",
    category: "Computer Vision",
    technologies: ["Python", "Computer Vision", "MQTT"],
    githubUrl: "https://github.com/nafis217/Hand-Gesture-Home-Automation-System"
  },
  {
    id: "weather-app",
    number: "06",
    title: "Weather Application",
    description: "Asynchronous weather forecasting dashboard demonstrating clean REST API integration, query caching, and responsive frontend UI.",
    category: "Web Application",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST API"],
    githubUrl: "https://github.com/nafis217/weather-app"
  },
  {
    id: "todo-app",
    number: "07",
    title: "Todo Application",
    description: "Client-side task management tool focusing on state management, category filtering, and browser local storage persistence.",
    category: "Web Utility",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/nafis217/Todo-List"
  }
];
