import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nafis217.github.io/Portfolio/"),
  title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
  description: `${PORTFOLIO_DATA.personal.role} building modern web, mobile and enterprise applications in ${PORTFOLIO_DATA.personal.location}.`,
  keywords: [
    "Md Nafis Al Safayet",
    "Nafis Al Safayet",
    "Software Engineer",
    "Software Engineer Dhaka",
    "Full-Stack Engineer Bangladesh",
    "ASP.NET Core",
    "React Engineer",
    "Next.js Developer",
    "Mobile Developer Expo",
  ],
  authors: [{ name: PORTFOLIO_DATA.personal.name }],
  creator: PORTFOLIO_DATA.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nafis217.github.io/Portfolio/",
    title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
    description: PORTFOLIO_DATA.personal.bio,
    siteName: `${PORTFOLIO_DATA.personal.name} Portfolio`,
    images: [
      {
        url: "/images/nafis-portrait.png",
        width: 800,
        height: 1000,
        alt: PORTFOLIO_DATA.personal.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
    description: PORTFOLIO_DATA.personal.bio,
    images: ["/images/nafis-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD Person Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PORTFOLIO_DATA.personal.name,
    jobTitle: PORTFOLIO_DATA.personal.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: PORTFOLIO_DATA.education.institution,
    },
    sameAs: [
      PORTFOLIO_DATA.personal.social.linkedin,
      PORTFOLIO_DATA.personal.social.github,
    ],
    knowsAbout: [
      "Software Engineering",
      "ASP.NET Core",
      "React",
      "Next.js",
      "TypeScript",
      "Mobile App Development",
      "PostgreSQL",
      "SQL Server",
    ],
  };

  return (
    <html lang="en" className={`${jakartaSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-sky text-ink selection:bg-blue selection:text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
