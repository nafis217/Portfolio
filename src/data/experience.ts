export interface Experience {
  id: string;
  /** Colours the section blends to while this role is in view. */
  theme: { soft: string; deep: string };
  period: string;
  company: string;
  role: string;
  subRole?: string;
  location: string;
  description: string;
  highlights: string[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "igloo",
    theme: { soft: "#bcd4e6", deep: "#2f5d86" },
    period: "JUN 2026 — PRESENT",
    company: "Igloo Ice Cream / Abdul Monem Limited",
    role: "Software Engineer",
    subRole: "Senior Executive — MIS (Software Engineering)",
    location: "Dhaka, Bangladesh",
    description: "Develop and maintain enterprise web and mobile systems using React, React Native, ASP.NET Core and SQL Server.",
    highlights: [
      "Role-based access control & multi-tier approval workflows",
      "Order management, delivery dispatch & payment tracking",
      "SMS workflow integrations, audit logs & KPI dashboards",
      "Production deployment, IIS hosting & operational troubleshooting"
    ]
  },
  {
    id: "clicko",
    theme: { soft: "#f3d9c7", deep: "#9a5b34" },
    period: "JUN 2025 — JUN 2026",
    company: "Clicko Digital",
    role: "Junior Software Engineer",
    location: "Dhaka, Bangladesh",
    description: "Developed responsive Shopify storefronts and reusable theme components using Liquid, JavaScript, HTML and CSS.",
    highlights: [
      "Client-facing e-commerce storefront development (Pink Fresh)",
      "Tailored Shopify Liquid themes, metafields & metaobjects",
      "Custom product section blocks & responsive cart drawers",
      "Cross-browser performance optimization"
    ]
  },
  {
    id: "technocolabs",
    theme: { soft: "#c2e2d3", deep: "#2f7a62" },
    period: "MAY 2024 — JUL 2024",
    company: "TechnoColabs Softwares Inc.",
    role: "Software Engineer Intern",
    location: "Indore, India",
    description: "Contributed to software development, data analysis, technical problem-solving, REST API testing and UI component building.",
    highlights: [
      "React component building & client-side state handling",
      "REST API testing & Postman API workflows",
      "Collaborative Git version control and code reviews"
    ]
  }
];
