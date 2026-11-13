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
    period: "2018 — 2021",
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
