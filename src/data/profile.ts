export interface Profile {
  name: string;
  shortName: string;
  role: string;
  location: string;
  headline: string;
  tagline: string;
  currentRoleContext: string;
  availability: string;
  siteUrl: string;
  cvPath: string;
  contact: {
    email: string;
    github: string;
    githubHandle: string;
    linkedin: string;
  };
  about: {
    philosophy: string;
    interests: string[];
  };
}

export const PROFILE_DATA: Profile = {
  name: "Md Nafis Al Safayet",
  shortName: "Nafis",
  role: "Software Engineer",
  location: "Dhaka, Bangladesh",
  headline: "Software Engineer building practical digital products for real business operations.",
  tagline: "I work across web, mobile, APIs and data — turning operational workflows into reliable software.",
  currentRoleContext: "Currently building enterprise software at Igloo Ice Cream / Abdul Monem Limited.",
  availability: "Open to full-time roles and freelance projects.",
  // Assumes GitHub Pages project site; change if you use a custom domain.
  siteUrl: "https://nafis217.github.io/Portfolio/",
  // File lives in /public — see public/README-CV.txt
  cvPath: "Md-Nafis-Al-Safayet-CV.pdf",
  contact: {
    email: "nafisalsafayet7@gmail.com",
    github: "https://github.com/nafis217",
    githubHandle: "nafis217",
    linkedin: "https://www.linkedin.com/in/md-nafis-al-safayet-040569322/",
  },
  about: {
    philosophy: "Outside writing code, I'm interested in understanding how products and businesses actually work. That curiosity often influences the systems I build — especially internal tools where usability matters as much as engineering.",
    interests: ["Swimming", "Photography", "Travel", "Fitness", "Artificial Intelligence", "Software Architecture"]
  }
};
