export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  features: string[];
  tech: string[];
  contribution: string;
  github: string;
  live?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "life-tracker",
    title: "LifeTracker",
    tagline: "Islamic lifestyle & habit tracking SaaS",
    description:
      "A multi-user habit tracking platform that helps people log good and bad habits, track mood, maintain streaks, and view performance reports — designed for consistency, not clutter.",
    problem:
      "Most habit apps are either too complex or lack meaningful feedback. Users need a calm, focused way to track daily habits with clear scores and trends.",
    features: [
      "Daily logging of good/bad habits, custom habits, mood & notes",
      "Automatic net score with A–F grades",
      "Per-habit and overall logging streaks",
      "Habit replacement pairing with success rate",
      "Weekly / monthly performance charts",
      "Dark/light themes + color vibes",
      "JWT auth, rate limiting, validation",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Chart.js"],
    contribution:
      "Full-stack ownership: React frontend with design system, Express API, MongoDB models, auth flow, analytics, and deployment.",
    github: "https://github.com/Fahad18-web/life-tracker-mern",
    live: "https://life-tracker-mern.vercel.app/",
    accent: "#2DD4BF",
  },
  {
    id: "estate-pulse",
    title: "EstatePulse",
    tagline: "Modern real-estate marketplace",
    description:
      "A production-oriented MERN real-estate marketplace with dual-token JWT auth, role-based access, property search filters, interactive maps, viewing appointments, and reviews.",
    problem:
      "Real-estate platforms need secure multi-role access (buyers, agents, admins), rich filtering, and appointment workflows — not just static listings.",
    features: [
      "Dual-token JWT (access + refresh) with automatic retry",
      "RBAC for users, agents, and admins",
      "Multi-filter property search (city, type, price, beds, etc.)",
      "React Leaflet interactive maps",
      "Viewing appointment engine",
      "Ratings, reviews, and wishlist",
      "Cloudinary image uploads",
    ],
    tech: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Leaflet",
    ],
    contribution:
      "Full MERN implementation including dual-token auth, RBAC middleware, property CRUD, bookings, reviews, and dark SaaS UI.",
    github: "https://github.com/Fahad18-web/real-estate-project",
    accent: "#6C63FF",
  },
  {
    id: "mern-crud",
    title: "MERN CRUD Manager",
    tagline: "Full-stack item management",
    description:
      "A clean full-stack CRUD application built as part of Dev Weekends Fellowship — React frontend talking to an Express + MongoDB API with proper error handling and deployment.",
    problem:
      "Teams need a reliable pattern for creating, reading, updating, and deleting resources with a clear API contract and responsive UI.",
    features: [
      "Create, read, update, delete items",
      "Custom React hooks for data fetching",
      "Centralized Express error handling",
      "Axios service layer",
      "Deployed frontend (Vercel) + backend (Render)",
    ],
    tech: ["React", "Express", "MongoDB", "Mongoose", "Axios"],
    contribution: "End-to-end MERN CRUD with custom hooks, service layer, and dual deployment.",
    github: "https://github.com/Fahad18-web/mern-crud",
    live: "https://mern-crud-lime.vercel.app",
    accent: "#22C55E",
  },
];

export const technologies = [
  { name: "HTML", category: "core" },
  { name: "CSS", category: "core" },
  { name: "JavaScript", category: "core" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Vite", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "JWT", category: "backend" },
  { name: "Redux Toolkit", category: "frontend" },
  { name: "Chart.js", category: "frontend" },
];

export const services = [
  {
    id: "landing",
    title: "Landing Page Development",
    problem: "You need a modern, conversion-focused landing page that loads fast and looks professional on every device.",
    solution:
      "I build responsive, clean landing pages for startups, SaaS products, and businesses using React and Tailwind — focused on clarity and performance.",
    deliverables: ["Responsive layout", "Clear hierarchy & CTAs", "Mobile-first design", "Fast load times"],
  },
  {
    id: "react-fix",
    title: "React Website Development & Bug Fixing",
    problem: "Broken components, layout issues, or responsiveness problems are blocking your product.",
    solution:
      "I diagnose and fix frontend bugs, improve component structure, and make your React UI reliable across browsers and screen sizes.",
    deliverables: ["UI bug fixes", "Responsive corrections", "Component cleanup", "Cross-browser checks"],
  },
  {
    id: "redesign",
    title: "Website Redesign & UI Improvements",
    problem: "Your existing site feels outdated or confusing to users.",
    solution:
      "I modernize layouts, refine visual hierarchy, and improve usability with a clean design system that feels intentional — not generic.",
    deliverables: ["Layout redesign", "Design system polish", "Better UX flows", "Consistent spacing & typography"],
  },
  {
    id: "mern",
    title: "MERN Stack Web Applications",
    problem: "You need a functional web app with authentication, data, and a solid frontend — not just a static site.",
    solution:
      "I develop practical full-stack applications using MongoDB, Express, React, and Node.js, based on the same patterns used in my LifeTracker and EstatePulse projects.",
    deliverables: ["Auth & API", "React frontend", "Database models", "Deployable codebase"],
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We clarify goals, users, and constraints so the solution matches the real problem.",
  },
  {
    num: "02",
    title: "Scope & Proposal",
    desc: "Clear deliverables, timeline, and approach — no surprises later.",
  },
  {
    num: "03",
    title: "Design & Development",
    desc: "Clean UI, solid structure, and iterative progress you can review.",
  },
  {
    num: "04",
    title: "Testing & Revisions",
    desc: "Cross-device checks and refinements until it feels right.",
  },
  {
    num: "05",
    title: "Deployment & Handover",
    desc: "Live deployment, basic docs, and a smooth handover.",
  },
];
