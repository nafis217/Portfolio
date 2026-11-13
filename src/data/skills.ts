export interface SkillGroup {
  category: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend Engineering",
    skills: ["React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS"]
  },
  {
    category: "Backend & APIs",
    skills: ["ASP.NET Core", "Node.js", "REST APIs", "Python"]
  },
  {
    category: "Database & Storage",
    skills: ["SQL Server", "MongoDB"]
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
