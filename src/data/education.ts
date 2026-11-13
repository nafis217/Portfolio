export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  scholarship?: string;
  isPrimary: boolean;
}

export const EDUCATION_DATA: Education[] = [
  {
    institution: "National Institute of Technology Rourkela",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    period: "2021 — 2025",
    location: "Rourkela, India",
    scholarship: "Indian Council for Cultural Relations Scholar, Government of India (2021)",
    isPrimary: true
  },
  {
    institution: "Birshreshtha Noor Mohammad Public College",
    degree: "Higher Secondary Certificate",
    field: "Science",
    period: "2018 — 2020",
    location: "Dhaka, Bangladesh",
    isPrimary: false
  },
  {
    institution: "Rangpur Zilla School",
    degree: "Secondary School Certificate",
    field: "Science",
    period: "2013 — 2018",
    location: "Rangpur, Bangladesh",
    isPrimary: false
  }
];

export interface Honor {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export const HONORS_DATA: Honor[] = [
  {
    title: "Employee of the Month",
    issuer: "Clicko Digital",
    year: "2026",
    description: "Recognized for outstanding performance and contribution to software development initiatives."
  }
];
