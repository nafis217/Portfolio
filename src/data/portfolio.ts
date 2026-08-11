export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  role: string;
  category: string;
  year: string;
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  subtitle?: string;
  date: string;
  location: string;
  category: string;
  technologies: string[];
  responsibilities: string[];
  logo: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    description: string;
    iconName?: string;
  }[];
}

export interface Achievement {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
}

export interface SecondaryEducation {
  institution: string;
  degree: string;
  field: string;
  location: string;
  logo: string;
  details: string[];
}

const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/Portfolio" : "")}${path}`;

export const PORTFOLIO_DATA = {
  personal: {
    name: "Md Nafis Al Safayet",
    shortName: "NAFIS",
    role: "Software Engineer",
    tagline: "building reliable digital systems.",
    location: "Dhaka, Bangladesh",
    coordinates: "23.8103° N, 90.4125° E — DHAKA",
    bio: "I design and build reliable web, mobile and enterprise applications, combining thoughtful interfaces with practical backend systems, APIs and data-driven workflows.",
    aboutHeadline: "I enjoy turning complicated workflows into software people can actually use.",
    aboutParagraphs: [
      "As a Software Engineer based in Dhaka, I specialize in engineering robust enterprise web applications, mobile platforms, and high-performance backend APIs.",
      "My approach balances modern user-centric interface design with solid database architecture, business logic security, and maintainable software engineering practices.",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/md-nafis-al-safayet-040569322/",
      github: "https://github.com/nafis217",
      email: "nafisalsafayet7@gmail.com",
    },
    // Set to null if no real PDF exists — Hero will hide the Resume button
    resumeUrl: null as string | null,
    portraitImage: assetPath("/images/nafis-portrait.jpg"),
  },

  experiences: [
    {
      id: "igloo",
      company: "IGLOO ICE CREAM",
      role: "Software Engineer",
      subtitle: "Management Information Systems (MIS)",
      date: "JUNE 2026 — PRESENT",
      location: "Dhaka, Bangladesh",
      category: "Enterprise Software & Systems",
      logo: assetPath("/experience/igloo-icecream.png"),
      technologies: [
        "ASP.NET Core",
        "SQL Server",
        "React",
        "React Native",
        "REST APIs",
        "Enterprise Dashboards",
      ],
      responsibilities: [
        "Architecting enterprise internal applications, order management workflows, and dispatch telemetry systems.",
        "Developing cross-platform mobile and web applications backed by ASP.NET Core REST APIs and SQL Server databases.",
        "Implementing role-based permission systems, interactive operational dashboards, and automated business process workflows.",
      ],
    },
    {
      id: "clicko",
      company: "CLICKO DIGITAL",
      role: "Junior Software Engineer",
      date: "JULY 2025 — JUNE 2026",
      location: "Dhaka, Bangladesh",
      category: "Web & Mobile Engineering",
      logo: assetPath("/experience/clicko-digital.png"),
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Shopify",
        "Liquid",
        "Tailwind CSS",
        "RESTful APIs",
      ],
      responsibilities: [
        "Built responsive, accessible web applications and dynamic user interfaces for client-facing software systems.",
        "Integrated backend API endpoints with frontend state management to deliver smooth real-time user experiences.",
        "Collaborated on software refactoring, performance optimization, and cross-browser testing.",
      ],
    },
    {
      id: "technocolabs",
      company: "TECHNOCOLABS SOFTWARES",
      role: "Full-Stack Development Intern",
      date: "MAY 2024 – JULY 2024",
      location: "Remote",
      category: "Full-Stack Development",
      logo: assetPath("/experience/technocolabs.svg"),
      technologies: ["Python", "JavaScript", "HTML/CSS", "Git", "REST APIs"],
      responsibilities: [
        "Participated in full-stack software development workflows, implementing features and resolving bugs.",
        "Engineered modular REST API connectors and verified data integrity across frontend and backend testing pipelines.",
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: "igloo-oms",
      number: "01",
      title: "Igloo OMS",
      subtitle: "Enterprise Order Management & Distribution System",
      description:
        "Enterprise order management, inventory tracking, and distribution workflow system engineered for Igloo Ice Cream operations.",
      highlights: [
        "Automated order processing and distribution workflows for field sales agents",
        "Role-based permission architecture for management, warehouse, and sales teams",
        "ASP.NET Core Web API backend with Microsoft SQL Server relational database",
      ],
      tech: [
        "ASP.NET Core",
        "SQL Server",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "REST API",
        "Docker",
      ],
      role: "Lead Software Engineer",
      category: "Enterprise OMS & Logistics",
      year: "2026",
      githubUrl: "https://github.com/nafis217/Igloo_OMS",
      image: assetPath("/projects/igloo-oms.svg"),
    },
    {
      id: "nafis-agro",
      number: "02",
      title: "Nafis Agro",
      subtitle: "Agri-Tech & Supply Chain Platform",
      description:
        "Digital supply chain management platform for agricultural produce tracking, inventory management, and B2B trading.",
      highlights: [
        "Supply chain tracking from harvest yield to regional agricultural distributors",
        "Real-time pricing catalog, produce listings, and B2B order management",
        "Next.js and TypeScript responsive web interface with PostgreSQL database",
      ],
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "REST API",
      ],
      role: "Full-Stack Software Engineer",
      category: "Agri-Tech & Supply Chain",
      year: "2025",
      githubUrl: "https://github.com/nafis217/Nafis_Agro",
      image: assetPath("/projects/nafis-agro.svg"),
    },
    {
      id: "my-salon",
      number: "03",
      title: "MY-SALON",
      subtitle: "Multi-tenant Salon Marketplace & SaaS",
      description:
        "Multi-tenant salon marketplace and salon-management SaaS platform designed for the Bangladesh market.",
      highlights: [
        "Architecture supporting multiple isolated salon tenants on a single platform",
        "Digital walk-in queue system, stylist scheduling, and POS module",
        "SSLCOMMERZ payment gateway integration with PWA offline support",
      ],
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "ASP.NET Core",
        "PostgreSQL",
        "Redis",
        "SignalR",
        "Docker",
        "SSLCOMMERZ",
      ],
      role: "Lead Software Architect",
      category: "SaaS & Marketplace Platform",
      year: "2025",
      githubUrl: "https://github.com/nafis217/My-salon",
      image: assetPath("/projects/my-salon-github-optimized.jpg"),
    },
    {
      id: "iglootrack",
      number: "04",
      title: "IglooTrack",
      subtitle: "Enterprise Freezer Tracking Telemetry",
      description:
        "Web and mobile freezer asset tracking system combining an Expo/React Native frontend with an ASP.NET Core Web API and SQL Server backend.",
      highlights: [
        "Real-time freezer temperature and asset status monitoring",
        "Expo / React Native cross-platform mobile client for field operators",
        "ASP.NET Core Web API with SQL Server telemetry and audit logging",
      ],
      tech: [
        "React",
        "React Native / Expo",
        "ASP.NET Core",
        "SQL Server",
        "REST API",
      ],
      role: "Full-Stack Engineer",
      category: "IoT & Enterprise Asset Management",
      year: "2026",
      githubUrl: "https://github.com/nafis217/igloo_fridge_tracking",
      image: assetPath("/projects/iglootrack.svg"),
    },
    {
      id: "fake-news",
      number: "05",
      title: "FAKE NEWS DETECTION",
      subtitle: "NLP & BERT Contextual Classifier",
      description:
        "Machine-learning project for classifying fake and authentic news articles using text preprocessing and BERT-based contextual language models.",
      highlights: [
        "BERT (Bidirectional Encoder Representations from Transformers) architecture for classification",
        "Comprehensive text preprocessing pipeline for news claim analysis",
        "TensorFlow and Keras model training pipeline with evaluation metrics",
      ],
      tech: [
        "Python",
        "BERT",
        "TensorFlow",
        "Keras",
        "NLP",
        "Machine Learning",
      ],
      role: "ML Researcher & Developer",
      category: "Artificial Intelligence & NLP",
      year: "2024",
      githubUrl:
        "https://github.com/nafis217/Fake-News-Detection-using-NLP-and-BERT",
      image: assetPath("/projects/fake-news-github.png"),
    },
    {
      id: "gesture-automation",
      number: "06",
      title: "HAND GESTURE AUTOMATION",
      subtitle: "Computer Vision & MQTT Smart Control",
      description:
        "IoT-based home automation system using computer vision hand-gesture recognition and MQTT messaging to control connected devices in real time.",
      highlights: [
        "Computer vision hand landmark tracking and gesture classification",
        "Low-latency MQTT messaging broker connecting smart home appliances",
        "Real-time sensor telemetry and device state control",
      ],
      tech: [
        "Computer Vision",
        "IoT",
        "MQTT",
        "Python",
        "Gesture Recognition",
      ],
      role: "Hardware & Software Engineer",
      category: "Computer Vision & IoT",
      year: "2024",
      githubUrl:
        "https://github.com/nafis217/Hand-Gesture-Home-Automation-System",
      image: assetPath("/projects/gesture-automation-github.png"),
    },
  ] as Project[],

  skills: [
    {
      category: "FRONTEND",
      skills: [
        {
          name: "React",
          description:
            "Modern component architecture, hooks, and client state management.",
        },
        {
          name: "Next.js",
          description:
            "App Router, SSR, static generation, and optimized web performance.",
        },
        {
          name: "JavaScript",
          description:
            "ES6+ asynchronous execution, event loops, and DOM APIs.",
        },
        {
          name: "TypeScript",
          description:
            "Strict type systems, interface definitions, and generics.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Utility-first design systems, custom tokens, and responsive layouts.",
        },
        {
          name: "HTML/CSS",
          description:
            "Semantic markup, CSS Grid, Flexbox, and web accessibility standards.",
        },
      ],
    },
    {
      category: "BACKEND",
      skills: [
        {
          name: "ASP.NET Core",
          description:
            "Enterprise REST APIs, Dependency Injection, Middleware, and security.",
        },
        {
          name: "Node.js",
          description:
            "Event-driven runtime, Express services, and asynchronous server logic.",
        },
        {
          name: "REST APIs",
          description:
            "API design, OpenAPI specs, JWT authentication, and rate limiting.",
        },
      ],
    },
    {
      category: "DATABASE",
      skills: [
        {
          name: "SQL Server",
          description:
            "Enterprise relational schemas, stored procedures, indexing, and T-SQL.",
        },
        {
          name: "PostgreSQL",
          description:
            "Relational data modeling, JSONB fields, and performance query tuning.",
        },
        {
          name: "MySQL",
          description:
            "Transactional tables, relational queries, and schema optimization.",
        },
        {
          name: "MongoDB",
          description:
            "Document-based NoSQL collections and aggregation frameworks.",
        },
      ],
    },
    {
      category: "MOBILE",
      skills: [
        {
          name: "React Native",
          description:
            "Cross-platform mobile applications for iOS and Android.",
        },
        {
          name: "Expo",
          description:
            "Rapid mobile deployment, native module bridging, and OTA builds.",
        },
      ],
    },
    {
      category: "TOOLS / PLATFORM",
      skills: [
        {
          name: "Git",
          description:
            "Version control, branching strategies, and interactive rebasing.",
        },
        {
          name: "GitHub",
          description:
            "Actions CI/CD pipelines, code reviews, and repository management.",
        },
        {
          name: "Docker",
          description:
            "Containerization of microservices and multi-stage container builds.",
        },
        {
          name: "VS Code",
          description:
            "Advanced IDE debugging, extensions, and workspace tooling.",
        },
      ],
    },
    {
      category: "OTHER",
      skills: [
        {
          name: "Shopify",
          description:
            "Custom storefront development and Liquid theme modifications.",
        },
        {
          name: "Machine Learning",
          description:
            "Model training pipelines, data preprocessing, and evaluation.",
        },
        {
          name: "BERT / NLP",
          description:
            "Contextual language models and transformer text classification.",
        },
      ],
    },
  ] as SkillCategory[],

  education: {
    institution: "NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    location: "Rourkela, Odisha, India",
    logo: assetPath("/images/nit-rourkela-logo.jpg"),
    bannerImage: assetPath("/images/nit-rourkela-campus.jpg"),
    details: [
      "Completed a rigorous B.Tech program in Computer Science and Engineering at one of India's premier technical institutes.",
      "Studied core computing disciplines including Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering.",
      "Awarded the prestigious ICCR (Indian Council for Cultural Relations) Government Scholarship for international merit students.",
    ],
    secondaryEducation: [
      {
        institution: "BIRSHRESHTHA NOOR MOHAMMAD PUBLIC COLLEGE",
        degree: "Higher Secondary Certificate (HSC)",
        field: "Science",
        location: "Dhaka, Bangladesh",
        logo: assetPath("/images/bnmpc-logo.jpg"),
        details: [
          "Completed the Higher Secondary Science curriculum with distinction in Physics, Chemistry, and Higher Mathematics.",
        ],
      },
      {
        institution: "RANGPUR ZILLA SCHOOL",
        degree: "Secondary School Certificate (SSC)",
        field: "Science",
        location: "Rangpur, Bangladesh",
        logo: assetPath("/images/rangpur-zilla-school-logo.png"),
        details: [
          "Completed the Secondary School Science curriculum from one of Bangladesh's historic premier institutions.",
        ],
      },
    ] as SecondaryEducation[],
  },

  achievements: [
    {
      id: "iccr",
      number: "01",
      title: "ICCR Government Scholarship",
      category: "ACADEMIC HONORS",
      description:
        "Selected for the competitive Indian Council for Cultural Relations (ICCR) scholarship to pursue B.Tech CSE at NIT Rourkela.",
    },
    {
      id: "class-rep",
      number: "02",
      title: "Class Representative & Student Leader",
      category: "LEADERSHIP",
      description:
        "Served as Class Representative, coordinating academic events, department communications, and peer mentorship initiatives.",
    },
    {
      id: "community",
      number: "03",
      title: "University Community Involvement",
      category: "COMMUNITY",
      description:
        "Active contributor to technical clubs, coding hackathons, and cross-cultural international student organisations.",
    },
    {
      id: "engineering",
      number: "04",
      title: "Applied AI & Systems Engineering",
      category: "RESEARCH & PROJECTS",
      description:
        "Engineered machine learning models for fake news detection and a computer-vision IoT home automation system.",
    },
  ] as Achievement[],
};
