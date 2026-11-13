# Modern Developer Portfolio & Static GitHub Pages CI/CD

A high-performance, responsive single-page developer portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed specifically for automated continuous deployment to **GitHub Pages** using **GitHub Actions**.

![Portfolio Preview](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='400' viewBox='0 0 1200 400'><rect width='100%' height='100%' fill='%23faf9f5'/><text x='50%' y='45%' fill='%230f172a' font-size='32' font-family='sans-serif' font-weight='bold' text-anchor='middle'>Md Nafis Al Safayet — Software Engineer</text><text x='50%' y='60%' fill='%230284c7' font-size='18' font-family='sans-serif' text-anchor='middle'>React 19 • TypeScript • Vite • ASP.NET Core • 100% Static</text></svg>)

---

## 🚀 Tech Stack

- **Core Framework**: React 19 + TypeScript
- **Build Tooling**: Vite 8 (Ultra-fast HMR & bundler)
- **Styling & Aesthetics**: Tailwind CSS v4 + Vanilla Glassmorphic CSS Design System
- **Iconography**: Lucide React + Native SVG Icons
- **CI/CD Pipeline**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Production Host**: GitHub Pages (100% Static HTML/CSS/JS delivery, zero server costs)

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js LTS (v20 or v22 recommended). Ensure Node version matches `.nvmrc`:
  ```bash
  nvm use
  ```

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the live application with instant Hot Module Replacement (HMR).

### 3. Production Build & Local Preview
To test the exact production build locally:
```bash
npm run build
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) to preview the static bundle.

### 4. Code Linting & Static Analysis
```bash
npm run lint
```

---

## 🌐 Deploying to GitHub Pages

This project is preconfigured for **automated deployment via GitHub Actions**. Once set up, every push to the `main` branch will automatically build and publish your website.

### Step 1: Initialize Git & Push to GitHub
If you haven't initialized your Git repository yet, run:

```bash
git init
git add .
git commit -m "Initial portfolio release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.name.git
git push -u origin main
```

### Step 2: Configure GitHub Pages Source
1. Go to your GitHub repository in your browser.
2. Click on **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - Set **Source** to **GitHub Actions**.
4. That's it! GitHub Actions will trigger automatically on your push.

### Step 3: View Your Live Portfolio
Once the GitHub Action completes (approx. 45–60 seconds), your site will be live at:
- **Style A (User Root Site)**: `https://YOUR_USERNAME.github.io/` (if repository name is `YOUR_USERNAME.github.io`)
- **Style B (Subdirectory Site)**: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

> **Note on Asset Base Paths**: `vite.config.ts` uses `process.env.VITE_BASE_PATH || './'`. Relative paths work out-of-the-box on both root domains and repository subdirectories without breaking CSS, fonts, or scripts.

---

## 📝 How to Update Portfolio Content

All content is centralized in a single typed configuration file: **[`src/config/portfolioData.ts`](file:///Users/nafisalsafayet/Desktop/Portfolio/src/config/portfolioData.ts)**.

### 1. Updating Personal Bio & Headline
Open `src/config/portfolioData.ts` and modify the `personal` object:
```typescript
personal: {
  name: "Your Name",
  role: "Senior Software Architect",
  headline: "Crafting High-Performance Web Applications...",
  bio: "Your custom bio summary...",
  location: "City, Country",
  status: "Available for Hire",
  availability: "Immediate Start",
  yearsExperience: 5,
  completedProjects: 25,
}
```

### 2. Adding a New Project
To add a new project, insert a new object into the `projects` array in `src/config/portfolioData.ts`:
```typescript
{
  id: "my-awesome-project",
  title: "Awesome Project Name",
  subtitle: "Brief subtitle describing the tech focus",
  description: "Detailed breakdown of what the application does.",
  category: "Full-Stack", // Options: 'Full-Stack' | 'AI & ML' | 'Cloud & Systems' | 'Open Source'
  tags: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
  image: "data:image/svg+xml;utf8,<svg>...</svg>", // or path to image in public/
  githubUrl: "https://github.com/your-username/your-project",
  liveUrl: "https://your-project-demo.com",
  metrics: "10k+ active users",
  featured: true,
  keyFeatures: [
    "Feature 1 highlight",
    "Feature 2 highlight",
    "Feature 3 highlight"
  ]
}
```

### 3. Updating Social & Contact Links
You can update contact information in `.env` or directly in `src/config/portfolioData.ts`:
```typescript
contact: {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  calendar: "https://cal.com/yourusername/30min",
}
```

Alternatively, set environment variables in `.env`:
```env
VITE_CONTACT_EMAIL=your.email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
VITE_CALENDAR_URL=https://cal.com/yourusername/30min
```

---

## 🏷️ Custom Domain Setup

To connect a custom domain (e.g., `https://nafisalsafayet.com`):

1. **In GitHub Repository**:
   - Go to **Settings** → **Pages** → **Custom domain**.
   - Type your domain name (e.g., `nafisalsafayet.com`) and click **Save**.
   - Enable **Enforce HTTPS**.
2. **In DNS Provider** (Cloudflare, Namecheap, GoDaddy, etc.):
   - Create an **A record** pointing to GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or create a **CNAME record** for `www` pointing to `YOUR_USERNAME.github.io`.
3. **In `.env`**:
   - Update `VITE_SITE_URL=https://nafisalsafayet.com`.

---

## 📦 Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions automated Pages workflow
├── .env.example              # Public environment variables template
├── .gitignore                # Git exclusion rules
├── .nvmrc                    # Node version declaration (v22)
├── index.html                # Main entry HTML with Google Fonts & SEO tags
├── package.json              # Dependencies and npm scripts
├── src/
│   ├── assets/               # Images and static media assets
│   ├── components/
│   │   ├── About.tsx         # Technical skills matrix & philosophy
│   │   ├── Contact.tsx       # Email copy, mailto, calendar booking
│   │   ├── Experience.tsx    # Interactive timeline
│   │   ├── Footer.tsx        # Footer & back-to-top button
│   │   ├── Header.tsx        # Glassmorphism navbar & mobile drawer
│   │   ├── Hero.tsx          # Hero banner & terminal card
│   │   ├── Projects.tsx      # Filterable project showcase & modal
│   │   └── SocialIcons.tsx   # Inline SVG social icons
│   ├── config/
│   │   └── portfolioData.ts  # Centralized portfolio content
│   ├── App.tsx               # Main application container
│   ├── index.css             # Tailwind CSS + Design System variables
│   └── main.tsx              # Application entrypoint
└── vite.config.ts            # Vite configuration with dynamic base path
```

---

## 📄 License

MIT License — feel free to use this codebase as a template for your own developer portfolio.
