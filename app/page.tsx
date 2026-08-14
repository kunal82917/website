"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const ArrowIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
);
const RightArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FFA116" width="20" height="20" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.378 1.378 0 0 0-.207-1.953l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z" />
  </svg>
);
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const ResumeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
);
const DownloadIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── Project Data ─────────────────────────────────────────────────────────────
interface Project {
  id: string;
  index: string;
  category: string;
  tab: "web-apps" | "android" | "web-games";
  featured?: boolean;
  title: string;
  problem: string;
  description: string;
  highlights: string[];
  learned: string;
  tech: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  screenshot?: string;
  screenshotAlt?: string;
}

const PROJECTS: Project[] = [
  {
    id: "hazardwatch",
    index: "01",
    category: "Web App",
    tab: "web-apps",
    featured: true,
    title: "HazardWatch",
    problem: "Communities lack a reliable way to report and track local hazards — flooding, fire risks, road damage — in real time. Existing solutions are either too slow or not publicly accessible.",
    description: "A full-featured disaster reporting platform with a Command Center dashboard, live incident map, JWT-authenticated reporting, AI assistant, community features, and emergency resources. Users can report hazards with location, severity, and description — all stored in MongoDB.",
    highlights: [
      "JWT authentication — login, session management, guest emergency access",
      "Live Incident Map showing all reported hazards with severity filters",
      "Report New Case modal with disaster type, severity, location, description",
      "AI Assistant for safety guidance and emergency support",
      "Community section for peer-to-peer hazard alerts",
      "Emergency Resources directory for responders",
      "Command Center dashboard: active cases, resolved, critical, active responders",
    ],
    learned: "Designing authentication that doesn't break edge cases — guest users needed dashboard access without credentials. Learned JWT middleware, MongoDB data modeling for location-linked hazard records, and building a multi-section dashboard that remains usable under stress.",
    tech: ["MongoDB", "JWT", "JavaScript", "HTML", "CSS", "Node.js"],
    github: "https://github.com/kunal82917/HazardWatch",
    demo: "https://hazardwatch.vercel.app/",
    screenshot: "/hw-dashboard.png",
    screenshotAlt: "HazardWatch Command Center showing live incident map with active cases, resolved cases, critical alerts, and real-time updates panel",
  },
  {
    id: "portfolio",
    index: "02",
    category: "Web App",
    tab: "web-apps",
    title: "Personal Portfolio",
    problem: "Most student portfolios fail to communicate engineering thinking — they're collections of skill logos rather than demonstrations of how the developer actually builds software.",
    description: "This site — built from scratch with Next.js 15 App Router, a custom CSS design system, and no animation libraries. Every animation is CSS-only or uses requestAnimationFrame directly. IntersectionObserver drives the active nav state.",
    highlights: [
      "Next.js 15 App Router with TypeScript throughout",
      "Custom rAF cursor (easing-based, disabled on touch devices)",
      "CSS-only section transitions — no Framer Motion or GSAP",
      "IntersectionObserver for active section tracking in nav",
      "Full prefers-reduced-motion and accessibility support",
      "DM Mono monospace font for technical labels and code",
    ],
    learned: "Building a design system without a framework means every spacing decision is intentional. Learned CSS performance (will-change, compositor layers), semantic HTML at scale, and how to make a site feel polished without libraries.",
    tech: ["Next.js", "React", "TypeScript", "CSS"],
    github: "https://github.com/kunal82917/website",
    demo: "https://kunal01.vercel.app/",
    demoLabel: "Live Site",
  },
  {
    id: "tasky",
    index: "01",
    category: "Android App",
    tab: "android",
    featured: true,
    title: "Tasky",
    problem: "Task management apps are either too complex or completely solo. There's no easy way to create group task challenges and compete on completion streaks with friends.",
    description: "An Android task manager built entirely in Kotlin with Jetpack Compose UI. Users create groups, assign tasks, and compete on completion streaks. SQLite provides offline-first persistence — the app works without a network connection.",
    highlights: [
      "Jetpack Compose declarative UI — no XML layouts",
      "SQLite for local offline task and group storage",
      "Group creation with competitive task streaks",
      "Kotlin–Java interop where needed for SDK access",
      "MVVM architecture pattern for separation of concerns",
    ],
    learned: "Composable UI design principles, SQLite schema design for relational group/task data, and Android application lifecycle — especially what happens when the OS kills background processes and how to survive config changes.",
    tech: ["Kotlin", "Java", "Jetpack Compose", "SQLite", "Android SDK"],
    github: "https://github.com/kunal82917/Tasky",
  },
  {
    id: "tictactoe",
    index: "01",
    category: "Web Game",
    tab: "web-games",
    title: "Tic Tac Toe",
    problem: "A focused exercise in React state management and component architecture before building more complex applications.",
    description: "A fully playable browser Tic Tac Toe with vs Player and vs AI modes, score tracking, win detection, and draw state. Minimal UI with no external dependencies.",
    highlights: [
      "vs Player and vs AI modes",
      "Win, draw, and game state detection algorithm",
      "Score persistence across rounds",
      "React state machine for all game logic",
      "Zero dependencies beyond React",
    ],
    learned: "Thinking about game state as a finite state machine. How React re-renders propagate through a component tree and where to place shared state.",
    tech: ["React", "Next.js", "CSS"],
    demo: "https://tic-tac-toe-kunal82917.vercel.app/",
    demoLabel: "Play Now",
    screenshot: "/ttt-ui.png",
    screenshotAlt: "Tic Tac Toe game showing the board, score tracker, and vs Player / vs AI mode toggle",
  },
];

// ─── Interactive Architecture Diagram ─────────────────────────────────────────
const archNodes = [
  {
    id: "client",
    label: "Browser Client",
    sublabel: "HTML / CSS / JS",
    x: 50,
    y: 8,
    desc: "The user-facing frontend — multi-page HTML/CSS/JS interface rendered in the browser. Handles all UI rendering, form inputs, and HTTP requests to the backend.",
  },
  {
    id: "http",
    label: "HTTP Request",
    sublabel: "REST API calls",
    x: 50,
    y: 30,
    desc: "All communication between client and server uses standard HTTP REST calls. Requests carry a JWT token in the Authorization header for authenticated routes.",
  },
  {
    id: "jwt",
    label: "JWT Middleware",
    sublabel: "Auth verification",
    x: 50,
    y: 52,
    desc: "Every protected route passes through JWT middleware first. The middleware decodes and verifies the token — if invalid or expired, the request is rejected before any business logic runs.",
    accent: true,
  },
  {
    id: "api",
    label: "API Route Handler",
    sublabel: "Business logic",
    x: 50,
    y: 74,
    desc: "After auth passes, the route handler runs the actual logic — reading/writing hazard reports, managing user sessions, fetching community posts, or querying emergency resources.",
  },
  {
    id: "mongo",
    label: "MongoDB",
    sublabel: "Persistent storage",
    x: 50,
    y: 92,
    desc: "All hazard reports, user data, and community content is stored in MongoDB. Collections are designed around location-linked documents — each hazard report includes type, severity, location, and submitter reference.",
    db: true,
  },
];

function ArchDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const active = archNodes.find((n) => n.id === activeNode);

  return (
    <div className="arch-diagram-wrap" aria-label="HazardWatch architecture diagram — hover or focus each node for details">
      <div className="arch-diagram-grid">
        <div className="arch-diagram-flow" role="list">
          {archNodes.map((node, i) => (
            <div key={node.id} role="listitem">
              {i > 0 && (
                <div className={`arch-connector ${activeNode === archNodes[i - 1].id || activeNode === node.id ? "arch-connector-active" : ""}`} aria-hidden="true">
                  <div className="arch-connector-line" />
                  <div className="arch-connector-arrow">↓</div>
                </div>
              )}
              <button
                className={`arch-node-btn ${node.accent ? "arch-node-accent" : ""} ${node.db ? "arch-node-db" : ""} ${activeNode === node.id ? "arch-node-active" : ""}`}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                aria-expanded={activeNode === node.id}
                aria-describedby={`arch-desc-${node.id}`}
                id={`arch-node-${node.id}`}
              >
                <span className="arch-node-label">{node.label}</span>
                <span className="arch-node-sublabel">{node.sublabel}</span>
              </button>
            </div>
          ))}
        </div>

        <div
          className="arch-diagram-desc"
          aria-live="polite"
          aria-atomic="true"
          id={active ? `arch-desc-${active.id}` : undefined}
        >
          {active ? (
            <>
              <div className="arch-desc-label">{active.label}</div>
              <p className="arch-desc-text">{active.desc}</p>
            </>
          ) : (
            <p className="arch-desc-placeholder">
              Hover or click any node to see how that layer works in HazardWatch.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={`project-card ${project.featured ? "project-card-featured" : ""}`}
      aria-labelledby={`proj-title-${project.id}`}
    >
      <div className="project-card-top-bar" aria-hidden="true" />

      {/* Screenshot */}
      {project.screenshot && (
        <div className="project-screenshot-wrap">
          <Image
            src={project.screenshot}
            alt={project.screenshotAlt || `${project.title} screenshot`}
            width={700}
            height={394}
            className="project-screenshot-img"
            loading="lazy"
          />
          <div className="project-screenshot-overlay" aria-hidden="true" />
        </div>
      )}

      <div className="project-content">
        <div className="project-meta">
          <span className="project-index">{project.index}</span>
          <span className="project-category">{project.category}</span>
          {project.featured && <span className="project-featured-badge">Flagship</span>}
        </div>

        <h3 className="project-title" id={`proj-title-${project.id}`}>{project.title}</h3>

        <p className="project-problem">
          <strong>Problem:</strong> {project.problem}
        </p>
        <p className="project-desc">{project.description}</p>

        {/* Expandable details */}
        {expanded && (
          <div className="project-expanded">
            <ul className="project-highlights" aria-label="Technical highlights">
              {project.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <div className="project-learned">
              <span className="project-learned-label">What I Learned</span>
              {project.learned}
            </div>
            {/* Architecture diagram for HazardWatch */}
            {project.id === "hazardwatch" && (
              <div className="project-arch-section">
                <div className="project-arch-label">Authentication Flow &amp; Architecture</div>
                <ArchDiagram />
              </div>
            )}
          </div>
        )}

        <button
          className="project-expand-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`proj-expanded-${project.id}`}
          id={`proj-expand-${project.id}`}
        >
          {expanded ? "Hide Details" : "Engineering Details"}
          <span className={`expand-chevron ${expanded ? "expand-chevron-up" : ""}`} aria-hidden="true">
            <ChevronDownIcon />
          </span>
        </button>

        <div className="tech-stack" aria-label="Technologies used">
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="project-link-btn project-link-ghost"
              aria-label={`View ${project.title} source code on GitHub`}>
              <GitHubIcon size={14} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="project-link-btn project-link-solid"
              aria-label={`${project.demoLabel || "Live Demo"} for ${project.title}`}>
              {project.demoLabel || "Live Demo"} <ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function Home() {
  const [activeTab, setActiveTab] = useState<"web-apps" | "android" | "web-games">("web-apps");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const filteredProjects = PROJECTS.filter((p) => p.tab === activeTab);

  // ── Custom cursor ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
    const cursorOutline = document.querySelector(".cursor-outline") as HTMLElement;
    if (!cursorDot || !cursorOutline) return;
    let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0, reqId: number;
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursorDot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    const animate = () => {
      const e = 0.12;
      outlineX += (mouseX - outlineX) * e;
      outlineY += (mouseY - outlineY) * e;
      cursorOutline.style.transform = `translate(calc(${outlineX}px - 50%), calc(${outlineY}px - 50%))`;
      reqId = requestAnimationFrame(animate);
    };
    reqId = requestAnimationFrame(animate);
    const addH = () => document.body.classList.add("cursor-hover");
    const remH = () => document.body.classList.remove("cursor-hover");
    const els = document.querySelectorAll("a, button, input, textarea, select, .trait-tag, .skill-tag, .arch-node-btn");
    els.forEach((el) => { el.addEventListener("mouseenter", addH); el.addEventListener("mouseleave", remH); });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(reqId);
      els.forEach((el) => { el.removeEventListener("mouseenter", addH); el.removeEventListener("mouseleave", remH); });
      document.body.classList.remove("cursor-hover");
    };
  }, []);

  // ── Active section ────────────────────────────────────────────────────────
  useEffect(() => {
    const ids = ["hero", "about", "skills", "projects", "career", "certificates", "contact"];
    const obs = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, []);

  // ── Escape key ────────────────────────────────────────────────────────────
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [mobileMenuOpen]);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("kunalgupta9340@gmail.com").then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  }, []);

  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#career", label: "Journey", id: "career" },
    { href: "#certificates", label: "Certs", id: "certificates" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-outline" aria-hidden="true" />

      {/* ── Navigation ─────────────────────────────────────────────────────── */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-content">
          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`} role="list" id="nav-links-list">
            {navLinks.map(({ href, label, id }) => (
              <li key={id}>
                <a href={href} onClick={() => setMobileMenuOpen(false)}
                  className={activeSection === id ? "nav-link-active" : ""}
                  aria-current={activeSection === id ? "true" : undefined}>{label}</a>
              </li>
            ))}
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="nav-resume-link" aria-label="View Resume (opens in new tab)">
                Resume ↗
              </a>
            </li>
          </ul>
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen} aria-controls="nav-links-list"
          >
            <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
          </button>
        </div>
      </nav>

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="hero" className="hero" aria-label="Introduction">
          <div className="hero-wrap">
            <div className="hero-left">
              <div className="hero-status-pill" aria-label="Current status">
                <span className="hero-status-dot" aria-hidden="true" />
                <span>Open to internships · 2025–2026</span>
              </div>

              <h1 className="hero-heading">
                <span className="hero-name-solid">KUNAL</span>
                <span className="hero-name-outline">GUPTA</span>
              </h1>

              <div className="hero-identity-row" aria-hidden="true">
                <span className="hero-rule-line" />
                <span className="hero-role-label">Computer Science Student</span>
                <span className="hero-rule-line" />
              </div>

              <p className="hero-tagline">
                Building full-stack applications, backend systems,<br />
                and security-focused software while strengthening<br />
                my foundations in computer science.
              </p>

              <div className="hero-cta-group">
                <a href="#projects" className="hero-btn-primary" id="hero-view-projects">
                  View Projects <RightArrow />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                  className="hero-btn-secondary" id="hero-resume"
                  aria-label="View Resume PDF (opens in new tab)">
                  <ResumeIcon /> Resume
                </a>
              </div>

              <div className="hero-social-row" aria-label="Social links">
                <a href="https://github.com/kunal82917" target="_blank" rel="noopener noreferrer"
                  className="hero-social-link" aria-label="GitHub profile"><GitHubIcon size={18} /></a>
                <a href="https://www.linkedin.com/in/kunal82917/" target="_blank" rel="noopener noreferrer"
                  className="hero-social-link" aria-label="LinkedIn profile"><LinkedInIcon /></a>
                <a href="https://leetcode.com/u/AHDFSOgt2Z/" target="_blank" rel="noopener noreferrer"
                  className="hero-social-link" aria-label="LeetCode profile"><LeetCodeIcon /></a>
                <a href="mailto:kunalgupta9340@gmail.com"
                  className="hero-social-link" aria-label="Send email"><EmailIcon /></a>
              </div>
            </div>

            {/* Terminal panel */}
            <div className="hero-right" aria-hidden="true">
              <div className="hero-terminal">
                <div className="terminal-titlebar">
                  <span className="terminal-dot terminal-dot-red" />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                  <span className="terminal-title">kunal@portfolio ~</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line"><span className="terminal-prompt">$</span><span className="terminal-cmd"> whoami</span></div>
                  <div className="terminal-output">kunal · cs student · developer</div>
                  <div className="terminal-line"><span className="terminal-prompt">$</span><span className="terminal-cmd"> cat focus.txt</span></div>
                  <div className="terminal-output terminal-output-block">
                    <span>backend  <span className="terminal-accent">→</span> REST APIs, auth, MongoDB</span>
                    <span>security <span className="terminal-accent">→</span> JWT, validation, secure design</span>
                    <span>dsa      <span className="terminal-accent">→</span> solving problems on LeetCode</span>
                  </div>
                  <div className="terminal-line"><span className="terminal-prompt">$</span><span className="terminal-cmd"> git log --oneline -3</span></div>
                  <div className="terminal-output terminal-output-block">
                    <span><span className="terminal-hash">a3f21c</span> feat: HazardWatch command center</span>
                    <span><span className="terminal-hash">b7e09d</span> feat: Tasky group competition</span>
                    <span><span className="terminal-hash">c4d88a</span> feat: portfolio redesign</span>
                  </div>
                  <div className="terminal-line"><span className="terminal-prompt">$</span><span className="terminal-cmd"> echo $GOAL</span></div>
                  <div className="terminal-output">backend internship · 2025–2026</div>
                  <div className="terminal-line terminal-line-cursor">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-cursor-blink" />
                  </div>
                </div>
              </div>

              <div className="hero-focus-strip">
                <div className="focus-item">
                  <span className="focus-label">BUILDING</span>
                  <span className="focus-value">HazardWatch</span>
                </div>
                <div className="focus-divider" />
                <div className="focus-item">
                  <span className="focus-label">LEARNING</span>
                  <span className="focus-value">DSA + System Design</span>
                </div>
                <div className="focus-divider" />
                <div className="focus-item">
                  <span className="focus-label">EXPLORING</span>
                  <span className="focus-value">App Security</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── Currently Building ───────────────────────────────────────────── */}
        <section id="building" className="building-section section" aria-labelledby="building-heading">
          <div className="container">
            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" /><span className="eyebrow-text">Currently Building</span>
            </div>
            <div className="building-grid">
              <div className="building-left">
                <div className="building-status-row">
                  <span className="building-badge">
                    <span className="building-badge-dot" aria-hidden="true" />In Progress
                  </span>
                  <span className="building-category">Web App · Backend · Security</span>
                </div>
                <h2 id="building-heading" className="building-title">HazardWatch</h2>
                <p className="building-problem">
                  <strong>The Problem:</strong> Communities lack a reliable, real-time system to report local hazards — flooding, fire risks, road damage. Existing tools are either too slow or not publicly accessible.
                </p>
                <p className="building-solution">
                  <strong>What it does:</strong> A Command Center for disaster monitoring — users can report hazards with location and severity, view a live incident map, access an AI assistant for safety guidance, and coordinate with responders. JWT authentication ensures only authorized users can submit reports while maintaining a guest emergency access path.
                </p>
                <div className="building-tech-row" aria-label="Technologies used">
                  {["MongoDB", "JWT", "JavaScript", "HTML", "CSS", "Node.js"].map(t => (
                    <span key={t} className="building-tech-tag">{t}</span>
                  ))}
                </div>
                <div className="building-links">
                  <a href="https://github.com/kunal82917/HazardWatch" target="_blank" rel="noopener noreferrer"
                    className="building-link-ghost" aria-label="View HazardWatch source on GitHub">
                    <GitHubIcon size={14} /> GitHub
                  </a>
                  <a href="https://hazardwatch.vercel.app/" target="_blank" rel="noopener noreferrer"
                    className="building-link-solid" aria-label="Open HazardWatch live demo">
                    Live Demo <ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="building-right">
                <div className="building-screenshot-wrap">
                  <Image
                    src="/hw-dashboard.png"
                    alt="HazardWatch Command Center dashboard showing 4 active cases, 2 resolved, 2 critical, live incident map, and latest updates feed"
                    width={640} height={400}
                    className="building-screenshot-img"
                    priority
                  />
                  <div className="building-screenshot-badge" aria-hidden="true">
                    <span className="building-badge-dot" /> Live Preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 02 About ─────────────────────────────────────────────────────── */}
        <section id="about" className="about-section section" aria-labelledby="about-heading">
          <div className="container">
            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" /><span className="eyebrow-text">02 — About</span>
            </div>
            <div className="about-grid">
              <div className="about-left">
                <h2 id="about-heading" className="about-heading">
                  Building things<br />
                  <span className="about-heading-gradient">beyond the UI.</span>
                </h2>
                <p className="about-intro">
                  I&apos;m Kunal — a CS engineering student who gets genuinely interested in the parts of software most people don&apos;t think about. APIs that behave predictably, databases that don&apos;t leak data, authentication that holds up against edge cases.
                </p>
                <p className="about-body">
                  I&apos;m currently in my B.Tech Computer Science program, building real projects to bridge the gap between classroom theory and actual engineering. I write backend code, full-stack web apps, and Android apps — and I&apos;m actively working through DSA to sharpen algorithmic thinking.
                </p>
                <p className="about-body">
                  I&apos;m focused on writing maintainable software while strengthening my understanding of software engineering fundamentals. I want an internship where I can contribute to a real codebase, learn from experienced engineers, and grow quickly.
                </p>
                <div className="about-traits" aria-label="Key traits">
                  {["Backend-First", "Security-Minded", "DSA Practice", "Clean Code", "Full-Stack", "Always Learning"].map(t => (
                    <span key={t} className="trait-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="about-right">
                <h3 className="timeline-heading">Education &amp; Focus</h3>
                <div className="timeline-list" role="list">
                  <div className="tl-card" role="listitem">
                    <div className="tl-dot" aria-hidden="true" />
                    <div className="tl-body">
                      <div className="tl-top">
                        <h4 className="tl-title">B.Tech — Computer Science Engineering</h4>
                        <span className="tl-date">2023 — Present</span>
                      </div>
                      <p className="tl-desc">Core coursework: Data Structures &amp; Algorithms, Operating Systems, Computer Networks, Database Management, Software Engineering.</p>
                    </div>
                  </div>
                  <div className="tl-card" role="listitem">
                    <div className="tl-dot" aria-hidden="true" />
                    <div className="tl-body">
                      <div className="tl-top">
                        <h4 className="tl-title">Technical Focus</h4>
                        <span className="tl-date">2024 — Ongoing</span>
                      </div>
                      <p className="tl-desc">Building full-stack apps with secure backends, developing Tasky for Android with Jetpack Compose, studying application security patterns.</p>
                    </div>
                  </div>
                  <div className="tl-card" role="listitem">
                    <div className="tl-dot" aria-hidden="true" />
                    <div className="tl-body">
                      <div className="tl-top">
                        <h4 className="tl-title">Currently Learning</h4>
                        <span className="tl-date">Now</span>
                      </div>
                      <p className="tl-desc">System design fundamentals, advanced DSA on LeetCode, cloud deployment basics, and secure API design patterns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 03 Skills ────────────────────────────────────────────────────── */}
        <section id="skills" className="skills section" aria-labelledby="skills-heading">
          <div className="container">
            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" /><span className="eyebrow-text">03 — Skills &amp; Tools</span>
            </div>
            <div className="skills-header">
              <h2 id="skills-heading" className="skills-heading">
                What I work<br /><span className="skills-heading-gradient">with.</span>
              </h2>
              <p className="skills-subtext">
                Languages, frameworks, and tools I&apos;ve used in real projects — each linked to something I&apos;ve actually built. The &ldquo;Currently Learning&rdquo; card shows what I&apos;m actively adding.
              </p>
            </div>

            <div className="skills-bento">
              <div className="skill-bento-card skill-bento-wide">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">01</span>
                  <span className="skill-bento-label">Languages</span>
                </div>
                <div className="skill-tags">
                  {[
                    { name: "Java", icon: "devicon-java-plain colored" },
                    { name: "Python", icon: "devicon-python-plain colored" },
                    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
                    { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
                    { name: "C", icon: "devicon-c-plain colored" },
                  ].map(({ name, icon }) => (
                    <span key={name} className="skill-tag">
                      <i className={icon} aria-hidden="true" />{name}
                    </span>
                  ))}
                </div>
                <p className="skill-bento-note">Java &amp; Kotlin → Tasky (Android) · JS → HazardWatch, portfolio · Python → scripting &amp; coursework · C → systems coursework</p>
              </div>

              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">02</span>
                  <span className="skill-bento-label">Web Development</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="devicon-react-original colored" aria-hidden="true" />React</span>
                  <span className="skill-tag"><i className="devicon-nextjs-original" aria-hidden="true" />Next.js</span>
                  <span className="skill-tag"><i className="devicon-html5-plain colored" aria-hidden="true" />HTML</span>
                  <span className="skill-tag"><i className="devicon-css3-plain colored" aria-hidden="true" />CSS</span>
                </div>
                <p className="skill-bento-note">React/Next.js → this portfolio, Tic-Tac-Toe · HTML/CSS → HazardWatch frontend</p>
              </div>

              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">03</span>
                  <span className="skill-bento-label">Backend &amp; Data</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="devicon-mongodb-plain colored" aria-hidden="true" />MongoDB</span>
                  <span className="skill-tag"><i className="devicon-postgresql-plain colored" aria-hidden="true" />PostgreSQL</span>
                  <span className="skill-tag skill-tag-plain">SQLite</span>
                  <span className="skill-tag skill-tag-plain">JWT</span>
                  <span className="skill-tag skill-tag-plain">REST APIs</span>
                </div>
                <p className="skill-bento-note">MongoDB &amp; JWT → HazardWatch auth + data · SQLite → Tasky local storage</p>
              </div>

              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">04</span>
                  <span className="skill-bento-label">Android</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag skill-tag-plain">Jetpack Compose</span>
                  <span className="skill-tag skill-tag-plain">Android SDK</span>
                </div>
                <p className="skill-bento-note">Tasky — declarative UI with Compose, SQLite persistence, MVVM pattern</p>
              </div>

              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">05</span>
                  <span className="skill-bento-label">Tools &amp; Platforms</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="devicon-git-plain colored" aria-hidden="true" />Git</span>
                  <span className="skill-tag"><i className="devicon-github-original" aria-hidden="true" />GitHub</span>
                  <span className="skill-tag"><i className="devicon-vercel-original" aria-hidden="true" />Vercel</span>
                  <span className="skill-tag"><i className="devicon-supabase-plain colored" aria-hidden="true" />Supabase</span>
                </div>
              </div>

              <div className="skill-bento-card skill-bento-learning">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num skill-bento-num-learning">→</span>
                  <span className="skill-bento-label">Currently Learning</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag skill-tag-learning">DSA</span>
                  <span className="skill-tag skill-tag-learning">System Design</span>
                  <span className="skill-tag skill-tag-learning">App Security</span>
                  <span className="skill-tag skill-tag-learning">Cloud Basics</span>
                </div>
                <p className="skill-bento-note">Active LeetCode practice · studying scalable backend architecture · learning secure API design patterns</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 04 Projects ──────────────────────────────────────────────────── */}
        <section id="projects" className="projects section" aria-labelledby="projects-heading">
          <div className="container">
            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" /><span className="eyebrow-text">04 — Projects</span>
            </div>

            <div className="projects-header">
              <h2 id="projects-heading" className="projects-heading">
                Things I&apos;ve<br /><span className="projects-heading-gradient">built.</span>
              </h2>
              <div className="projects-header-right">
                <p className="projects-subtext">
                  Each project is described around a real problem, what I built to solve it,
                  and what I actually learned. Click <strong>Engineering Details</strong> on any card to go deeper.
                </p>
                <div className={`project-toggle active-${activeTab}`} role="tablist" aria-label="Project categories">
                  {(["web-apps", "android", "web-games"] as const).map((tab) => (
                    <button key={tab} role="tab"
                      aria-selected={activeTab === tab}
                      aria-controls={`panel-${tab}`}
                      id={`tab-${tab}`}
                      className={`toggle-btn ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab === "web-apps" ? "Web Apps" : tab === "android" ? "Android" : "Games"}
                    </button>
                  ))}
                  <div className="toggle-slider" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="project-grid" id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── How I Build ──────────────────────────────────────────────────── */}
        <section id="approach" className="approach-section section" aria-labelledby="approach-heading">
          <div className="container">
            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" /><span className="eyebrow-text">Engineering Approach</span>
            </div>
            <div className="approach-header">
              <h2 id="approach-heading" className="approach-heading">
                How I<br /><span className="approach-heading-accent">build software.</span>
              </h2>
              <p className="approach-subtext">A mental model I try to follow on every project — from a simple script to a full-stack app.</p>
            </div>
            <div className="approach-steps">
              {[
                { num: "01", title: "Understand", desc: "Break the problem into actual requirements. What needs to work? What are the edge cases? What are the constraints?" },
                { num: "02", title: "Design", desc: "Think about the data model first. Then the API surface. Then the UI. Architecture decisions made early save hours of refactoring." },
                { num: "03", title: "Build", desc: "Write the smallest version that works correctly. No premature optimization. No over-engineering. Make it work before making it clever." },
                { num: "04", title: "Test", desc: "Find bugs manually — actually use what you built. Look for security holes, edge cases, and anything that breaks assumptions." },
                { num: "05", title: "Improve", desc: "Refactor for clarity, not just performance. Delete code that isn't needed. Write the kind of code you'd want to read six months later." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="approach-step">
                  <div className="approach-step-num" aria-hidden="true">{num}</div>
                  <h3 className="approach-step-title">{title}</h3>
                  <p className="approach-step-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 05 Career ────────────────────────────────────────────────────── */}
        <section id="career" className="career section" aria-labelledby="career-heading">
          <div className="container">
            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" /><span className="eyebrow-text">05 — Where I&apos;m Headed</span>
            </div>
            <div className="career-header">
              <h2 id="career-heading" className="career-heading">
                Current<br /><span className="career-heading-gradient">direction.</span>
              </h2>
              <p className="career-subtext">An honest picture of where I am and where I&apos;m going.</p>
            </div>
            <div className="career-content">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /><path d="M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" /></svg>,
                  num: "01", title: "Right Now",
                  items: ["B.Tech Computer Science, 2023 — Present", "Building HazardWatch command center", "Solving DSA on LeetCode daily", "Developing Tasky for Android", "Studying CS fundamentals in depth"],
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
                  num: "02", title: "Learning",
                  items: ["System design & scalable architecture", "Advanced data structures & algorithms", "Application security & secure API design", "Cloud deployment fundamentals"],
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                  num: "03", title: "Looking For",
                  items: ["Software engineering internship", "Backend or full-stack role", "Open-source collaboration", "Interesting engineering projects"],
                },
              ].map(({ icon, num, title, items }) => (
                <div key={num} className="career-card">
                  <div className="career-card-icon-svg" aria-hidden="true">{icon}</div>
                  <div className="career-card-num" aria-hidden="true">{num}</div>
                  <h3 className="career-card-title">{title}</h3>
                  <ul className="career-card-list">
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 06 Certifications ────────────────────────────────────────────── */}
        <section id="certificates" className="certificates section" aria-labelledby="certs-heading">
          <div className="container">
            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" /><span className="eyebrow-text">06 — Certifications</span>
            </div>
            <div className="cert-header">
              <h2 id="certs-heading" className="cert-heading">
                Credentials<br /><span className="cert-heading-gradient">earned.</span>
              </h2>
              <p className="cert-subtext">6 courses completed across AI, cloud, security, and software engineering. Click to download.</p>
            </div>
            <div className="cert-grid">
              {[
                { src: "/kunal infosys i2aiml.jpg", alt: "Intro to AIML — Infosys", title: "Intro to AIML", issuer: "Infosys", topic: "Machine Learning", year: "2024" },
                { src: "/kunal udemy java spring boot cert.jpg", alt: "Java & Spring Boot — Udemy", title: "Java & Spring Boot", issuer: "Udemy", topic: "Backend Dev", year: "2024" },
                { src: "/kunal udemy python basics cert.jpg", alt: "Python Basics — Udemy", title: "Python Basics", issuer: "Udemy", topic: "Programming", year: "2023" },
                { src: "/kunal udemy google cloud cert.jpg", alt: "Google Cloud — Udemy", title: "Google Cloud", issuer: "Udemy", topic: "Cloud", year: "2024" },
                { src: "/kunal udemy ai agents cert.jpg", alt: "AI Agents — Udemy", title: "AI Agents", issuer: "Udemy", topic: "AI", year: "2025" },
                { src: "/kunal udemy win cmd mastery cert.jpg", alt: "Windows CLI Mastery — Udemy", title: "Windows CLI Mastery", issuer: "Udemy", topic: "Dev Tools", year: "2023" },
              ].map(({ src, alt, title, issuer, topic, year }) => (
                <a key={title} href={src} download className="cert-card-link" aria-label={`Download ${title} certificate from ${issuer}`}>
                  <div className="cert-card">
                    <div className="cert-thumbnail">
                      <img src={src} alt={alt} loading="lazy" width="260" height="170" />
                      <div className="cert-overlay" aria-hidden="true"><DownloadIcon /><span>Download</span></div>
                    </div>
                    <div className="cert-info">
                      <h3>{title}</h3>
                      <div className="cert-meta-row">
                        <p className="cert-issuer">{issuer}</p>
                        <span className="cert-topic">{topic}</span>
                      </div>
                      <span className="cert-year">{year}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 07 Contact ───────────────────────────────────────────────────── */}
        <section id="contact" className="contact section" aria-labelledby="contact-heading">
          <div className="container">
            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" /><span className="eyebrow-text">07 — Get In Touch</span>
            </div>
            <div className="contact-editorial">
              <div className="contact-left">
                <h2 id="contact-heading" className="contact-heading">
                  Have something<br /><span className="contact-heading-gradient">worth building?</span>
                </h2>
                <p className="contact-subtext">
                  I&apos;m currently open to software engineering internships, backend/full-stack roles, and interesting open-source collaborations. If you have something in mind, I&apos;d love to hear from you.
                </p>
                <div className="contact-cta-group">
                  <a href="mailto:kunalgupta9340@gmail.com" className="contact-email-btn"
                    aria-label="Send email to Kunal Gupta" id="contact-email-link">
                    Email Me <ArrowIcon size={14} />
                  </a>
                  <button className={`contact-copy-btn ${copiedEmail ? "copied" : ""}`}
                    onClick={copyEmail} type="button"
                    aria-label={copiedEmail ? "Email address copied" : "Copy email address to clipboard"}
                    id="contact-copy-email">
                    {copiedEmail ? <><CheckIcon /> Copied!</> : <><CopyIcon /> Copy Email</>}
                  </button>
                </div>
              </div>

              <div className="contact-right">
                <div className="contact-links-stack" role="list">
                  {[
                    { href: "mailto:kunalgupta9340@gmail.com", icon: <EmailIcon />, label: "Email", value: "kunalgupta9340@gmail.com", external: false },
                    { href: "https://www.linkedin.com/in/kunal82917/", icon: <LinkedInIcon />, label: "LinkedIn", value: "linkedin.com/in/kunal82917", external: true },
                    { href: "https://github.com/kunal82917", icon: <GitHubIcon />, label: "GitHub", value: "github.com/kunal82917", external: true },
                    { href: "https://leetcode.com/u/AHDFSOgt2Z/", icon: <LeetCodeIcon />, label: "LeetCode", value: "Problem Solving Profile", external: true },
                    { href: "/resume.pdf", icon: <ResumeIcon />, label: "Resume", value: "View / Download PDF", external: true },
                  ].map(({ href, icon, label, value, external }) => (
                    <a key={label} href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="contact-row-link" role="listitem"
                      aria-label={`${label}${external ? " (opens in new tab)" : ""}`}>
                      <div className="contact-row-icon">{icon}</div>
                      <div className="contact-row-body">
                        <span className="contact-row-label">{label}</span>
                        <span className="contact-row-value">{value}</span>
                      </div>
                      <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-left">
              <span className="footer-name">Kunal Gupta</span>
              <span className="footer-role">Computer Science Student · Developer</span>
            </div>
            <nav className="footer-links" aria-label="Footer social links">
              {[
                { href: "https://github.com/kunal82917", icon: <GitHubIcon size={18} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/kunal82917/", icon: <LinkedInIcon />, label: "LinkedIn" },
                { href: "https://leetcode.com/u/AHDFSOgt2Z/", icon: <LeetCodeIcon />, label: "LeetCode" },
                { href: "mailto:kunalgupta9340@gmail.com", icon: <EmailIcon />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label} className="footer-icon-link">{icon}</a>
              ))}
            </nav>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Kunal Gupta · Built with Next.js, deployed on Vercel.
          </p>
        </div>
      </footer>
    </>
  );
}
