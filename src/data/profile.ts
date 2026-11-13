export interface Profile {
  name: string;
  shortName: string;
  role: string;
  location: string;
  headline: string;
  tagline: string;
  currentRoleContext: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    calendar: string;
  };
  about: {
    philosophy: string;
    interests: string[];
  };
}

const env = import.meta.env;

export const PROFILE_DATA: Profile = {
  name: "Md Nafis Al Safayet",
  shortName: "Nafis",
  role: "Software Engineer",
  location: "Dhaka, Bangladesh",
  headline: "Software Engineer building practical digital products for real business operations.",
  tagline: "I work across web, mobile, APIs and data — turning operational workflows into reliable software.",
  currentRoleContext: "Currently building enterprise software at Igloo Ice Cream / Abdul Monem Limited.",
  contact: {
    email: env.VITE_CONTACT_EMAIL || "nafisalsafayet7@gmail.com",
    github: env.VITE_GITHUB_URL || "https://github.com/nafis217",
    linkedin: env.VITE_LINKEDIN_URL || "[LINKEDIN_URL]",
    calendar: env.VITE_CALENDAR_URL || "[CALENDAR_BOOKING_URL]",
  },
  about: {
    philosophy: "Outside writing code, I'm interested in understanding how products and businesses actually work. That curiosity often influences the systems I build — especially internal tools where usability matters as much as engineering.",
    interests: ["Travel", "Photography", "Fitness", "Emerging Technology", "Product Design"]
  }
};
