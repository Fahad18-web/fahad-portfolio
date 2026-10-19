import lifeTrackerImage from "@/assets/lifetracker-image.png";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  problem: string;
  features: string[];
  tech: string[];
  role: string;
  github: string;
  live?: string;
  accent: string;
  /** Put real screenshots in /public/projects/ then set e.g. "/projects/life-tracker.png" */
  image?: string | typeof lifeTrackerImage;
  mockUrl: string;
}

export const projects: Project[] = [
  {
    id: "life-tracker",
    title: "LifeTracker",
    tagline: "Islamic lifestyle & habit tracking SaaS",
    summary:
      "Multi-user habit platform with daily scores, streaks, mood analytics, and theming — full MERN.",
    problem:
      "Habit apps are often noisy or lack clear feedback. Users need calm logging with scores, streaks, and trends.",
    features: [
      "JWT auth + Resend password resets & reminders",
      "Live net score (A–F) + Chart.js trends",
      "Habit replacement pairs with success rate",
      "Dark/light themes and color vibes",
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Resend",
      "Chart.js",],
    role: "Full-stack ownership",
    github: "https://github.com/Fahad18-web/life-tracker-mern",
    live: "https://life-tracker-mern.vercel.app/",
    accent: "#2DD4BF",
    mockUrl: "life-tracker-mern.vercel.app",
    image: lifeTrackerImage,
  },
  {
    id: "estate-pulse",
    title: "EstatePulse",
    tagline: "Modern real-estate marketplace",
    summary:
      "MERN marketplace with dual-token JWT, RBAC, maps, bookings, and Cloudinary uploads.",
    problem:
      "Real-estate products need secure multi-role access, filters, and appointments — not static listings only.",
    features: [
      "Dual-token JWT with refresh retry",
      "RBAC for buyers, agents, admins",
      "Leaflet maps + multi-filter search",
      "Bookings, reviews, Cloudinary pipeline",
    ],
    tech: ["React 19", "Vite", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Leaflet"],
    role: "Full-stack ownership",
    github: "https://github.com/Fahad18-web/real-estate-project",
    // No verified live URL — deploy when ready, then add live: "https://..."
    accent: "#6C63FF",
    mockUrl: "estatepulse.app",
    // image: "/projects/estate-pulse.png",
  },
  {
    id: "mern-crud",
    title: "Modular MERN API Pattern",
    tagline: "Fellowship resource engine — clean CRUD architecture",
    summary:
      "Reusable MERN pattern: hooks, Axios services, centralized errors, Vercel + Render deploy.",
    problem:
      "Teams need a reliable CRUD pattern with a clear API contract and maintainable React data layer.",
    features: [
      "Custom React hooks for fetch state",
      "Axios service layer + consistent responses",
      "Centralized Express error handling",
      "Frontend Vercel, API Render",
    ],
    tech: ["React", "Express", "MongoDB", "Mongoose", "Axios"],
    role: "Full-stack ownership",
    github: "https://github.com/Fahad18-web/mern-crud",
    live: "https://mern-crud-lime.vercel.app",
    accent: "#22C55E",
    mockUrl: "mern-crud-lime.vercel.app",
  },
];

export interface TechItem {
  name: string;
  icon: "react" | "next" | "js" | "ts" | "tailwind" | "node" | "express" | "mongo" | "jwt" | "redux" | "git" | "vite";
}

export const technologies = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Vite", icon: "vite" },
  { name: "Node.js", icon: "node" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongo" },
  { name: "JWT", icon: "jwt" },
  { name: "Redux Toolkit", icon: "redux" },
  { name: "Git", icon: "git" },
];

export const services = [
  {
    id: "landing",
    title: "Landing Page Development",
    problem: "You need a modern, conversion-focused landing page that loads fast on every device.",
    solution:
      "Responsive landing pages for startups and SaaS using React and Tailwind — clarity and performance first.",
    deliverables: ["Responsive layout", "Clear hierarchy & CTAs", "Mobile-first", "Fast load times"],
  },
  {
    id: "react-fix",
    title: "React Website Development & Bug Fixing",
    problem: "Broken components, layout issues, or responsiveness problems are blocking your product.",
    solution:
      "I fix frontend bugs, improve component structure, and harden React UI across browsers and sizes.",
    deliverables: ["UI bug fixes", "Responsive corrections", "Component cleanup", "Cross-browser checks"],
  },
  {
    id: "redesign",
    title: "Website Redesign & UI Improvements",
    problem: "Your existing site feels outdated or confusing to users.",
    solution:
      "Modern layouts, clearer hierarchy, and a design system that feels intentional — not generic.",
    deliverables: ["Layout redesign", "Design system polish", "Better UX flows", "Consistent spacing"],
  },
  {
    id: "mern",
    title: "MERN Stack Web Applications",
    problem: "You need auth, data, and a solid frontend — not just a static site.",
    solution:
      "Practical full-stack apps with MongoDB, Express, React, and Node — same patterns as LifeTracker and EstatePulse.",
    deliverables: ["Auth & API", "React frontend", "Database models", "Deployable codebase"],
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Scope",
    desc: "Clarify goals, users, and constraints, then lock deliverables and timeline.",
  },
  {
    num: "02",
    title: "Design & Development",
    desc: "Clean UI, solid structure, and iterative progress you can review.",
  },
  {
    num: "03",
    title: "Testing & Revisions",
    desc: "Cross-device checks and focused refinements until it feels right.",
  },
  {
    num: "04",
    title: "Deployment & Handover",
    desc: "Live deploy, basic docs, and a smooth handover.",
  },
];