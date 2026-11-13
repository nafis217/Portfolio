export interface SkillGroup {
  category: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend Engineering",
    skills: ["React", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS"]
  },
  {
    category: "Backend & APIs",
    skills: ["C#", "ASP.NET Core", ".NET", "Node.js", "REST APIs", "Authentication & RBAC", "Python"]
  },
  {
    category: "Database & Storage",
    skills: ["SQL Server", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Infrastructure",
    skills: ["Git", "GitHub", "Postman", "Docker", "IIS", "VS Code"]
  },
  {
    category: "E-Commerce",
    skills: ["Shopify", "Liquid", "Theme Development"]
  }
];
