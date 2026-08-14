"use client";

import { useState, useEffect, useCallback } from "react";

// ─── GitHub SVG ──────────────────────────────────────────────────────────────
const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// ─── External link arrow ──────────────────────────────────────────────────────
const ArrowIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

// ─── Right arrow ──────────────────────────────────────────────────────────────
const RightArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ─── LeetCode SVG ─────────────────────────────────────────────────────────────
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FFA116" width="20" height="20" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.378 1.378 0 0 0-.207-1.953l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z" />
  </svg>
);

// ─── Email SVG ────────────────────────────────────────────────────────────────
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// ─── LinkedIn SVG ─────────────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Resume SVG ───────────────────────────────────────────────────────────────
const ResumeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

// ─── Download SVG ─────────────────────────────────────────────────────────────
const DownloadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// ─── Copy SVG ─────────────────────────────────────────────────────────────────
const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

// ─── Check SVG ────────────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState<"web-apps" | "android" | "web-games">("web-apps");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // ── Custom cursor ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
    const cursorOutline = document.querySelector(".cursor-outline") as HTMLElement;
    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;
    let reqId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animateCursor = () => {
      const easing = 0.12;
      outlineX += (mouseX - outlineX) * easing;
      outlineY += (mouseY - outlineY) * easing;
      cursorOutline.style.transform = `translate(calc(${outlineX}px - 50%), calc(${outlineY}px - 50%))`;
      reqId = requestAnimationFrame(animateCursor);
    };
    reqId = requestAnimationFrame(animateCursor);

    const addHover = () => document.body.classList.add("cursor-hover");
    const removeHover = () => document.body.classList.remove("cursor-hover");
    const clickables = document.querySelectorAll(
      "a, button, input, textarea, select, .trait-tag, .skill-tag"
    );
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(reqId);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      document.body.classList.remove("cursor-hover");
    };
  }, []);

  // ── Active section tracking ────────────────────────────────────────────────
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "career", "certificates", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Escape closes mobile menu ──────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  // ── Copy email ────────────────────────────────────────────────────────────
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
      {/* Custom Cursor */}
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-outline" aria-hidden="true" />

      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-content">
          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`} role="list">
            {navLinks.map(({ href, label, id }) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={activeSection === id ? "nav-link-active" : ""}
                  aria-current={activeSection === id ? "true" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="nav-resume-link"
                aria-label="View Resume (opens in new tab)"
              >
                Resume ↗
              </a>
            </li>
          </ul>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="nav-links-list"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      <main>
        {/* ── 01 · Hero ──────────────────────────────────────────────────────── */}
        <section id="hero" className="hero" aria-label="Introduction">
          <div className="hero-wrap">

            {/* Left: Identity */}
            <div className="hero-left">
              <div className="hero-status-pill" aria-label="Current status">
                <span className="hero-status-dot" aria-hidden="true" />
                <span>Open to internships · 2025–2026</span>
              </div>

              <h1 className="hero-heading">
                <span className="hero-name-solid">KUNAL</span>
                <span className="hero-name-outline" aria-hidden="true">GUPTA</span>
              </h1>

              <div className="hero-identity-row" aria-hidden="true">
                <span className="hero-rule-line" />
                <span className="hero-role-label">Computer Science Student</span>
                <span className="hero-rule-line" />
              </div>

              <p className="hero-tagline">
                Building backend systems, full-stack applications<br />
                &amp; security-focused software.
              </p>

              <p className="hero-bio">
                CS engineering student at B.Tech, currently focused on backend development,
                application security, and data structures. I enjoy building software that
                solves real problems and writing code that&apos;s clean enough to maintain.
              </p>

              <div className="hero-cta-group">
                <a href="#projects" className="hero-btn-primary" id="hero-view-projects">
                  View Projects <RightArrow />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-secondary"
                  aria-label="View Resume PDF (opens in new tab)"
                  id="hero-resume"
                >
                  <ResumeIcon /> Resume
                </a>
              </div>

              <div className="hero-social-row" aria-label="Social links">
                <a href="https://github.com/kunal82917" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub profile">
                  <GitHubIcon size={18} />
                </a>
                <a href="https://www.linkedin.com/in/kunal82917/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn profile">
                  <LinkedInIcon />
                </a>
                <a href="https://leetcode.com/u/AHDFSOgt2Z/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LeetCode profile">
                  <LeetCodeIcon />
                </a>
                <a href="mailto:kunalgupta9340@gmail.com" className="hero-social-link" aria-label="Send email">
                  <EmailIcon />
                </a>
              </div>
            </div>

            {/* Right: Terminal panel */}
            <div className="hero-right" aria-hidden="true">
              <div className="hero-terminal">
                <div className="terminal-titlebar">
                  <span className="terminal-dot terminal-dot-red" />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                  <span className="terminal-title">kunal@portfolio ~ </span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-cmd"> whoami</span>
                  </div>
                  <div className="terminal-output">kunal · cs student · developer</div>

                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-cmd"> cat focus.txt</span>
                  </div>
                  <div className="terminal-output terminal-output-block">
                    <span>backend  <span className="terminal-accent">→</span> REST APIs, auth, data modeling</span>
                    <span>security <span className="terminal-accent">→</span> JWT, input validation, secure design</span>
                    <span>dsa      <span className="terminal-accent">→</span> solving problems daily on LeetCode</span>
                  </div>

                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-cmd"> git log --oneline --recent</span>
                  </div>
                  <div className="terminal-output terminal-output-block">
                    <span><span className="terminal-hash">a3f21c</span> feat: HazardWatch v2 backend</span>
                    <span><span className="terminal-hash">b7e09d</span> feat: Tasky group competition</span>
                    <span><span className="terminal-hash">c4d88a</span> feat: portfolio redesign</span>
                  </div>

                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-cmd"> echo $GOAL</span>
                  </div>
                  <div className="terminal-output">backend internship · 2025–2026</div>

                  <div className="terminal-line terminal-line-cursor">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-cursor-blink" />
                  </div>
                </div>
              </div>

              {/* Focus strip below terminal */}
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

        {/* ── Currently Building ─────────────────────────────────────────────── */}
        <section id="building" className="building-section section" aria-labelledby="building-heading">
          <div className="container">

            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Currently Building</span>
            </div>

            <div className="building-grid">
              <div className="building-left">
                <div className="building-status-row">
                  <span className="building-badge">
                    <span className="building-badge-dot" aria-hidden="true" />
                    In Progress
                  </span>
                  <span className="building-category">Web App · Backend</span>
                </div>

                <h2 id="building-heading" className="building-title">HazardWatch</h2>

                <p className="building-problem">
                  <strong>The Problem:</strong> Disaster and hazard events are often underreported or
                  poorly communicated to communities. People need a platform to report local hazards,
                  stay aware of nearby risks, and access safety-relevant information.
                </p>
                <p className="building-solution">
                  <strong>The Solution:</strong> A web platform where users can register, authenticate,
                  and submit hazard reports tied to specific locations. Backed by a MongoDB database with
                  JWT-based session management — so only authenticated users can post reports, protecting
                  data integrity.
                </p>

                <div className="building-tech-row" aria-label="Technologies used">
                  {["MongoDB", "JWT", "JavaScript", "HTML", "CSS", "Node.js"].map(t => (
                    <span key={t} className="building-tech-tag">{t}</span>
                  ))}
                </div>

                <div className="building-links">
                  <a
                    href="https://github.com/kunal82917/HazardWatch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="building-link-ghost"
                    aria-label="View HazardWatch source on GitHub"
                  >
                    <GitHubIcon size={14} /> GitHub
                  </a>
                  <a
                    href="https://hazardwatch.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="building-link-solid"
                    aria-label="View HazardWatch live demo"
                  >
                    Live Demo <ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="building-right">
                <div className="building-arch-panel" aria-label="Architecture overview">
                  <div className="arch-title">Architecture</div>
                  <div className="arch-flow">
                    <div className="arch-node arch-node-top">Browser Client</div>
                    <div className="arch-arrow">↓</div>
                    <div className="arch-node">HTTP Request</div>
                    <div className="arch-arrow">↓</div>
                    <div className="arch-node arch-node-accent">JWT Middleware</div>
                    <div className="arch-arrow">↓</div>
                    <div className="arch-node">API Routes</div>
                    <div className="arch-arrow">↓</div>
                    <div className="arch-node arch-node-db">MongoDB</div>
                  </div>
                </div>

                <div className="building-features-list">
                  <div className="building-feat">
                    <span className="building-feat-dot" aria-hidden="true" />
                    JWT authentication &amp; session management
                  </div>
                  <div className="building-feat">
                    <span className="building-feat-dot" aria-hidden="true" />
                    MongoDB-backed hazard report storage
                  </div>
                  <div className="building-feat">
                    <span className="building-feat-dot" aria-hidden="true" />
                    User registration &amp; login flows
                  </div>
                  <div className="building-feat">
                    <span className="building-feat-dot" aria-hidden="true" />
                    Responsive multi-page interface
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 02 · About ─────────────────────────────────────────────────────── */}
        <section id="about" className="about-section section" aria-labelledby="about-heading">
          <div className="container">

            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">02 — About</span>
            </div>

            <div className="about-grid">

              {/* Left: About */}
              <div className="about-left">
                <h2 id="about-heading" className="about-heading">
                  Building things<br />
                  <span className="about-heading-gradient">beyond the UI.</span>
                </h2>

                <p className="about-intro">
                  I&apos;m Kunal — a CS engineering student who gets genuinely excited about
                  the parts of software that most people don&apos;t see. APIs that behave predictably,
                  databases that don&apos;t leak data, authentication that doesn&apos;t break under edge cases.
                </p>
                <p className="about-body">
                  Right now I&apos;m in my B.Tech Computer Science program, building real projects on
                  the side to bridge the gap between classroom theory and actual engineering.
                  I write backend code, full-stack web apps, and Android apps — and I&apos;m actively
                  working through DSA problems to sharpen algorithmic thinking.
                </p>
                <p className="about-body">
                  I care about writing code that&apos;s readable, maintainable, and honest about what
                  it does. I&apos;m looking for an internship where I can contribute to a real codebase,
                  learn from experienced engineers, and keep growing fast.
                </p>

                <div className="about-traits" aria-label="Key traits">
                  <span className="trait-tag">Backend-First</span>
                  <span className="trait-tag">Security-Minded</span>
                  <span className="trait-tag">DSA Practice</span>
                  <span className="trait-tag">Clean Code</span>
                  <span className="trait-tag">Full-Stack</span>
                  <span className="trait-tag">Always Learning</span>
                </div>
              </div>

              {/* Right: Timeline */}
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
                      <p className="tl-desc">
                        Core coursework: Data Structures &amp; Algorithms, Operating Systems,
                        Computer Networks, Database Management, Software Engineering.
                      </p>
                    </div>
                  </div>

                  <div className="tl-card" role="listitem">
                    <div className="tl-dot" aria-hidden="true" />
                    <div className="tl-body">
                      <div className="tl-top">
                        <h4 className="tl-title">Technical Focus</h4>
                        <span className="tl-date">2024 — Ongoing</span>
                      </div>
                      <p className="tl-desc">
                        Building full-stack web apps with secure backends, developing an Android
                        app (Tasky) with Jetpack Compose, and studying application security patterns.
                      </p>
                    </div>
                  </div>

                  <div className="tl-card" role="listitem">
                    <div className="tl-dot" aria-hidden="true" />
                    <div className="tl-body">
                      <div className="tl-top">
                        <h4 className="tl-title">Currently Learning</h4>
                        <span className="tl-date">Now</span>
                      </div>
                      <p className="tl-desc">
                        System design fundamentals, advanced DSA on LeetCode,
                        cloud deployment basics, and secure API design patterns.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 03 · Skills ────────────────────────────────────────────────────── */}
        <section id="skills" className="skills section" aria-labelledby="skills-heading">
          <div className="container">

            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">03 — Skills &amp; Tools</span>
            </div>

            <div className="skills-header">
              <h2 id="skills-heading" className="skills-heading">
                What I work<br />
                <span className="skills-heading-gradient">with.</span>
              </h2>
              <p className="skills-subtext">
                Languages, frameworks, and tools I&apos;ve applied in real projects —
                each linked to something I&apos;ve actually built with it.
              </p>
            </div>

            <div className="skills-bento">

              {/* Programming Languages */}
              <div className="skill-bento-card skill-bento-wide">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">01</span>
                  <span className="skill-bento-label">Programming Languages</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="devicon-java-plain colored" aria-hidden="true" />Java</span>
                  <span className="skill-tag"><i className="devicon-python-plain colored" aria-hidden="true" />Python</span>
                  <span className="skill-tag"><i className="devicon-javascript-plain colored" aria-hidden="true" />JavaScript</span>
                  <span className="skill-tag"><i className="devicon-kotlin-plain colored" aria-hidden="true" />Kotlin</span>
                  <span className="skill-tag"><i className="devicon-c-plain colored" aria-hidden="true" />C</span>
                </div>
                <p className="skill-bento-note">Java &amp; Kotlin → Tasky (Android) · JS → HazardWatch, Portfolio · Python → scripting &amp; coursework · C → systems coursework</p>
              </div>

              {/* Web Development */}
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

              {/* Backend & Data */}
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
                <p className="skill-bento-note">MongoDB &amp; JWT → HazardWatch · SQLite → Tasky local storage</p>
              </div>

              {/* Android */}
              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">04</span>
                  <span className="skill-bento-label">Android</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag skill-tag-plain">Jetpack Compose</span>
                  <span className="skill-tag skill-tag-plain">Android SDK</span>
                </div>
                <p className="skill-bento-note">Used in Tasky — declarative UI with Compose, SQLite persistence</p>
              </div>

              {/* Tools & Platforms */}
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

              {/* Currently Learning */}
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
                <p className="skill-bento-note">Active LeetCode practice · studying scalable backend architecture · learning secure API design</p>
              </div>

            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 04 · Projects ──────────────────────────────────────────────────── */}
        <section id="projects" className="projects section" aria-labelledby="projects-heading">
          <div className="container">

            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">04 — Projects</span>
            </div>

            <div className="projects-header">
              <h2 id="projects-heading" className="projects-heading">
                Things I&apos;ve<br />
                <span className="projects-heading-gradient">built.</span>
              </h2>
              <div className="projects-header-right">
                <p className="projects-subtext">
                  A selection of projects spanning web apps, Android, and browser games —
                  each built to solve a concrete problem or explore a new technology.
                </p>

                <div
                  className={`project-toggle active-${activeTab}`}
                  role="tablist"
                  aria-label="Project categories"
                >
                  <button
                    role="tab"
                    aria-selected={activeTab === "web-apps"}
                    aria-controls="panel-web-apps"
                    id="tab-web-apps"
                    className={`toggle-btn ${activeTab === "web-apps" ? "active" : ""}`}
                    onClick={() => setActiveTab("web-apps")}
                  >
                    Web Apps
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === "android"}
                    aria-controls="panel-android"
                    id="tab-android"
                    className={`toggle-btn ${activeTab === "android" ? "active" : ""}`}
                    onClick={() => setActiveTab("android")}
                  >
                    Android
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === "web-games"}
                    aria-controls="panel-web-games"
                    id="tab-web-games"
                    className={`toggle-btn ${activeTab === "web-games" ? "active" : ""}`}
                    onClick={() => setActiveTab("web-games")}
                  >
                    Games
                  </button>
                  <div className="toggle-slider" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* ── Web Apps ── */}
            {activeTab === "web-apps" && (
              <div
                className="project-grid"
                id="panel-web-apps"
                role="tabpanel"
                aria-labelledby="tab-web-apps"
              >

                {/* Featured: HazardWatch */}
                <article className="project-card project-card-featured">
                  <div className="project-card-top-bar" aria-hidden="true" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">01</span>
                      <span className="project-category">Web App</span>
                      <span className="project-featured-badge">Flagship</span>
                    </div>
                    <h3 className="project-title">HazardWatch</h3>
                    <p className="project-problem">
                      <strong>Problem:</strong> Communities lack a simple way to report and track local
                      hazards — fire risks, road damage, flooding — in real time.
                    </p>
                    <p className="project-desc">
                      A disaster-reporting web platform where authenticated users can submit hazard
                      reports stored in MongoDB. JWT-based auth ensures that only registered users can
                      post — preventing spam and protecting data integrity.
                    </p>
                    <ul className="project-highlights" aria-label="Technical highlights">
                      <li>JWT authentication with session management</li>
                      <li>MongoDB database for hazard report storage</li>
                      <li>User registration, login &amp; protected routes</li>
                      <li>Responsive multi-page interface</li>
                    </ul>
                    <div className="project-learned">
                      <span className="project-learned-label">What I learned:</span>
                      implementing token-based auth flows, designing a MongoDB schema for location-linked data,
                      and thinking about API security from the start.
                    </div>
                    <div className="tech-stack" aria-label="Technologies used">
                      <span>MongoDB</span>
                      <span>JWT</span>
                      <span>JavaScript</span>
                      <span>HTML</span>
                      <span>CSS</span>
                    </div>
                    <div className="project-links">
                      <a
                        href="https://github.com/kunal82917/HazardWatch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn project-link-ghost"
                        aria-label="View HazardWatch source code on GitHub"
                      >
                        <GitHubIcon size={14} /> GitHub
                      </a>
                      <a
                        href="https://hazardwatch.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn project-link-solid"
                        aria-label="View HazardWatch live demo"
                      >
                        Live Demo <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </article>

                {/* Portfolio */}
                <article className="project-card">
                  <div className="project-card-top-bar" aria-hidden="true" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">02</span>
                      <span className="project-category">Web App</span>
                    </div>
                    <h3 className="project-title">Personal Portfolio</h3>
                    <p className="project-desc">
                      This site — built from scratch with Next.js 15 App Router, a custom CSS design
                      system, CSS-only animations, and a requestAnimationFrame cursor. No animation
                      libraries; everything is hand-written.
                    </p>
                    <ul className="project-highlights" aria-label="Technical highlights">
                      <li>Next.js 15 App Router with TypeScript</li>
                      <li>CSS-only marquee (no JS animation library)</li>
                      <li>Custom cursor with rAF-based easing</li>
                      <li>IntersectionObserver for active nav state</li>
                      <li>Full reduced-motion &amp; accessibility support</li>
                    </ul>
                    <div className="project-learned">
                      <span className="project-learned-label">What I learned:</span>
                      CSS performance (will-change, rAF), semantic HTML at scale, building a design system
                      from scratch.
                    </div>
                    <div className="tech-stack" aria-label="Technologies used">
                      <span>Next.js</span>
                      <span>React</span>
                      <span>TypeScript</span>
                      <span>CSS</span>
                    </div>
                    <div className="project-links">
                      <a
                        href="https://github.com/kunal82917/website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn project-link-ghost"
                        aria-label="View Portfolio source code on GitHub"
                      >
                        <GitHubIcon size={14} /> GitHub
                      </a>
                      <a
                        href="https://kunal01.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn project-link-solid"
                        aria-label="View Portfolio live site"
                      >
                        Live Site <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </article>

              </div>
            )}

            {/* ── Android Apps ── */}
            {activeTab === "android" && (
              <div
                className="project-grid"
                id="panel-android"
                role="tabpanel"
                aria-labelledby="tab-android"
              >

                <article className="project-card project-card-featured">
                  <div className="project-card-top-bar" aria-hidden="true" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">01</span>
                      <span className="project-category">Android App</span>
                    </div>
                    <h3 className="project-title">Tasky</h3>
                    <p className="project-problem">
                      <strong>Problem:</strong> Task management apps are either too complex or too solo.
                      Tasky makes productivity social by adding group-based competition.
                    </p>
                    <p className="project-desc">
                      A collaborative Android task manager where users can create groups, assign tasks,
                      and compete on completion streaks. Built entirely in Kotlin with Jetpack Compose
                      and SQLite for offline-first data persistence.
                    </p>
                    <ul className="project-highlights" aria-label="Technical highlights">
                      <li>Declarative Jetpack Compose UI</li>
                      <li>SQLite for local offline data persistence</li>
                      <li>Group creation &amp; competitive task completion</li>
                      <li>Kotlin–Java interop patterns</li>
                    </ul>
                    <div className="project-learned">
                      <span className="project-learned-label">What I learned:</span>
                      composable UI design, SQLite schema design for relational data, and Android
                      application lifecycle management.
                    </div>
                    <div className="tech-stack" aria-label="Technologies used">
                      <span>Kotlin</span>
                      <span>Java</span>
                      <span>Jetpack Compose</span>
                      <span>SQLite</span>
                      <span>Android SDK</span>
                    </div>
                    <div className="project-links">
                      <a
                        href="https://github.com/kunal82917/Tasky"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn project-link-ghost"
                        aria-label="View Tasky source code on GitHub"
                      >
                        <GitHubIcon size={14} /> GitHub
                      </a>
                    </div>
                  </div>
                </article>

              </div>
            )}

            {/* ── Web Games ── */}
            {activeTab === "web-games" && (
              <div
                className="project-grid"
                id="panel-web-games"
                role="tabpanel"
                aria-labelledby="tab-web-games"
              >

                <article className="project-card">
                  <div className="project-card-top-bar" aria-hidden="true" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">01</span>
                      <span className="project-category">Web Game</span>
                    </div>
                    <h3 className="project-title">Tic Tac Toe</h3>
                    <p className="project-desc">
                      A fully playable browser-based Tic Tac Toe game with win detection,
                      draw state, and instant reset. Built to practice React state management
                      and component design before moving to more complex apps.
                    </p>
                    <ul className="project-highlights" aria-label="Technical highlights">
                      <li>React state machine for game logic</li>
                      <li>Win &amp; draw detection algorithm</li>
                      <li>Clean UI with zero dependencies</li>
                    </ul>
                    <div className="project-learned">
                      <span className="project-learned-label">What I learned:</span>
                      React state flow, component composition, and how to think about
                      game state as a finite state machine.
                    </div>
                    <div className="tech-stack" aria-label="Technologies used">
                      <span>React</span>
                      <span>Next.js</span>
                      <span>CSS</span>
                    </div>
                    <div className="project-links">
                      <a
                        href="https://tic-tac-toe-kunal82917.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn project-link-solid"
                        aria-label="Play Tic Tac Toe"
                      >
                        Play Now <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </article>

              </div>
            )}

          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── How I Build ────────────────────────────────────────────────────── */}
        <section id="approach" className="approach-section section" aria-labelledby="approach-heading">
          <div className="container">

            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Engineering Approach</span>
            </div>

            <div className="approach-header">
              <h2 id="approach-heading" className="approach-heading">
                How I<br />
                <span className="approach-heading-accent">build software.</span>
              </h2>
              <p className="approach-subtext">
                A mental model I try to follow on every project —
                from a simple script to a full-stack app.
              </p>
            </div>

            <div className="approach-steps">
              {[
                {
                  num: "01",
                  title: "Understand",
                  desc: "Break the problem into its actual requirements. What needs to work? What are the edge cases? What are the constraints?",
                },
                {
                  num: "02",
                  title: "Design",
                  desc: "Think about the data model first. Then the API surface. Then the UI. Architecture decisions made early save hours of refactoring.",
                },
                {
                  num: "03",
                  title: "Build",
                  desc: "Write the smallest version that works correctly. No premature optimization. No over-engineering. Make it work before making it clever.",
                },
                {
                  num: "04",
                  title: "Test",
                  desc: "Find bugs manually first — actually use what you built. Look for security holes, edge cases, and anything that breaks assumptions.",
                },
                {
                  num: "05",
                  title: "Improve",
                  desc: "Refactor for clarity, not just performance. Delete code that isn't needed. Write the kind of code you'd want to read six months later.",
                },
              ].map(({ num, title, desc }) => (
                <div key={num} className="approach-step">
                  <div className="approach-step-num" aria-hidden="true">{num}</div>
                  <div className="approach-step-body">
                    <h3 className="approach-step-title">{title}</h3>
                    <p className="approach-step-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 05 · Career ────────────────────────────────────────────────────── */}
        <section id="career" className="career section" aria-labelledby="career-heading">
          <div className="container">

            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">05 — Where I&apos;m Headed</span>
            </div>

            <div className="career-header">
              <h2 id="career-heading" className="career-heading">
                Current<br />
                <span className="career-heading-gradient">direction.</span>
              </h2>
              <p className="career-subtext">
                An honest picture of where I am and where I&apos;m going —
                grounded in what I&apos;m actually working on.
              </p>
            </div>

            <div className="career-content">

              <div className="career-card">
                <div className="career-card-icon-svg" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                    <path d="M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                  </svg>
                </div>
                <div className="career-card-num" aria-hidden="true">01</div>
                <h3 className="career-card-title">Right Now</h3>
                <ul className="career-card-list">
                  <li>B.Tech Computer Science, 2023 — Present</li>
                  <li>Building HazardWatch backend</li>
                  <li>Solving DSA on LeetCode daily</li>
                  <li>Developing Tasky for Android</li>
                  <li>Studying CS fundamentals in depth</li>
                </ul>
              </div>

              <div className="career-card">
                <div className="career-card-icon-svg" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div className="career-card-num" aria-hidden="true">02</div>
                <h3 className="career-card-title">Learning</h3>
                <ul className="career-card-list">
                  <li>System design &amp; scalable architecture</li>
                  <li>Advanced data structures &amp; algorithms</li>
                  <li>Application security &amp; secure API design</li>
                  <li>Cloud deployment fundamentals</li>
                </ul>
              </div>

              <div className="career-card">
                <div className="career-card-icon-svg" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="career-card-num" aria-hidden="true">03</div>
                <h3 className="career-card-title">Looking For</h3>
                <ul className="career-card-list">
                  <li>Software engineering internship</li>
                  <li>Backend or full-stack engineering role</li>
                  <li>Open-source collaboration</li>
                  <li>Interesting engineering projects</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 06 · Certifications ────────────────────────────────────────────── */}
        <section id="certificates" className="certificates section" aria-labelledby="certs-heading">
          <div className="container">

            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">06 — Certifications</span>
            </div>

            <div className="cert-header">
              <h2 id="certs-heading" className="cert-heading">
                Credentials<br />
                <span className="cert-heading-gradient">earned.</span>
              </h2>
              <p className="cert-subtext">
                Courses completed across AI, cloud, security, and software engineering.
                Click any card to download the certificate.
              </p>
            </div>

            <div className="cert-grid">

              {[
                {
                  src: "/kunal infosys i2aiml.jpg",
                  alt: "Introduction to AIML Certificate — Infosys",
                  title: "Intro to AIML",
                  issuer: "Infosys",
                  topic: "Machine Learning",
                  year: "2024",
                },
                {
                  src: "/kunal udemy java spring boot cert.jpg",
                  alt: "Java & Spring Boot Certificate — Udemy",
                  title: "Java & Spring Boot",
                  issuer: "Udemy",
                  topic: "Backend Development",
                  year: "2024",
                },
                {
                  src: "/kunal udemy python basics cert.jpg",
                  alt: "Python Basics Certificate — Udemy",
                  title: "Python Basics",
                  issuer: "Udemy",
                  topic: "Programming",
                  year: "2023",
                },
                {
                  src: "/kunal udemy google cloud cert.jpg",
                  alt: "Google Cloud Certificate — Udemy",
                  title: "Google Cloud",
                  issuer: "Udemy",
                  topic: "Cloud Computing",
                  year: "2024",
                },
                {
                  src: "/kunal udemy ai agents cert.jpg",
                  alt: "AI Agents Certificate — Udemy",
                  title: "AI Agents",
                  issuer: "Udemy",
                  topic: "Artificial Intelligence",
                  year: "2025",
                },
                {
                  src: "/kunal udemy win cmd mastery cert.jpg",
                  alt: "Windows Command Line Mastery Certificate — Udemy",
                  title: "Windows CLI Mastery",
                  issuer: "Udemy",
                  topic: "Developer Tools",
                  year: "2023",
                },
              ].map(({ src, alt, title, issuer, topic, year }) => (
                <a
                  key={title}
                  href={src}
                  download
                  className="cert-card-link"
                  aria-label={`Download ${title} certificate from ${issuer}`}
                >
                  <div className="cert-card">
                    <div className="cert-thumbnail">
                      <img src={src} alt={alt} loading="lazy" width="260" height="170" />
                      <div className="cert-overlay" aria-hidden="true">
                        <DownloadIcon />
                        <span>Download</span>
                      </div>
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

        {/* ── 07 · Contact ────────────────────────────────────────────────────── */}
        <section id="contact" className="contact section" aria-labelledby="contact-heading">
          <div className="container">

            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">07 — Get In Touch</span>
            </div>

            <div className="contact-editorial">
              <div className="contact-left">
                <h2 id="contact-heading" className="contact-heading">
                  Have a project<br />
                  <span className="contact-heading-gradient">or opportunity?</span>
                </h2>
                <p className="contact-subtext">
                  I&apos;m currently open to internships, backend/full-stack engineering roles,
                  and interesting open-source collaborations. If you have something in mind,
                  I&apos;d love to hear from you.
                </p>

                <div className="contact-cta-group">
                  <a
                    href="mailto:kunalgupta9340@gmail.com"
                    className="contact-email-btn"
                    aria-label="Send email to Kunal Gupta"
                    id="contact-email-link"
                  >
                    Email Me <ArrowIcon size={14} />
                  </a>
                  <button
                    className={`contact-copy-btn ${copiedEmail ? "copied" : ""}`}
                    onClick={copyEmail}
                    aria-label={copiedEmail ? "Email address copied" : "Copy email address to clipboard"}
                    id="contact-copy-email"
                    type="button"
                  >
                    {copiedEmail ? (
                      <><CheckIcon /> Copied!</>
                    ) : (
                      <><CopyIcon /> Copy Email</>
                    )}
                  </button>
                </div>
              </div>

              <div className="contact-right">
                <div className="contact-links-stack" role="list">

                  <a
                    href="mailto:kunalgupta9340@gmail.com"
                    className="contact-row-link"
                    role="listitem"
                    aria-label="Send email to kunalgupta9340@gmail.com"
                  >
                    <div className="contact-row-icon"><EmailIcon /></div>
                    <div className="contact-row-body">
                      <span className="contact-row-label">Email</span>
                      <span className="contact-row-value">kunalgupta9340@gmail.com</span>
                    </div>
                    <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kunal82917/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row-link"
                    role="listitem"
                    aria-label="Visit Kunal's LinkedIn profile (opens in new tab)"
                  >
                    <div className="contact-row-icon"><LinkedInIcon /></div>
                    <div className="contact-row-body">
                      <span className="contact-row-label">LinkedIn</span>
                      <span className="contact-row-value">linkedin.com/in/kunal82917</span>
                    </div>
                    <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>

                  <a
                    href="https://github.com/kunal82917"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row-link"
                    role="listitem"
                    aria-label="Visit Kunal's GitHub profile (opens in new tab)"
                  >
                    <div className="contact-row-icon"><GitHubIcon /></div>
                    <div className="contact-row-body">
                      <span className="contact-row-label">GitHub</span>
                      <span className="contact-row-value">github.com/kunal82917</span>
                    </div>
                    <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>

                  <a
                    href="https://leetcode.com/u/AHDFSOgt2Z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row-link"
                    role="listitem"
                    aria-label="Visit Kunal's LeetCode profile (opens in new tab)"
                  >
                    <div className="contact-row-icon"><LeetCodeIcon /></div>
                    <div className="contact-row-body">
                      <span className="contact-row-label">LeetCode</span>
                      <span className="contact-row-value">Problem Solving Profile</span>
                    </div>
                    <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row-link"
                    role="listitem"
                    aria-label="View Resume PDF (opens in new tab)"
                    id="contact-resume-link"
                  >
                    <div className="contact-row-icon"><ResumeIcon /></div>
                    <div className="contact-row-body">
                      <span className="contact-row-label">Resume</span>
                      <span className="contact-row-value">View / Download PDF</span>
                    </div>
                    <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────────── */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-left">
              <span className="footer-name">Kunal Gupta</span>
              <span className="footer-role">Computer Science Student · Developer</span>
            </div>
            <nav className="footer-links" aria-label="Footer social links">
              <a
                href="https://github.com/kunal82917"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-icon-link"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kunal82917/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-icon-link"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://leetcode.com/u/AHDFSOgt2Z/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="footer-icon-link"
              >
                <LeetCodeIcon />
              </a>
              <a
                href="mailto:kunalgupta9340@gmail.com"
                aria-label="Email"
                className="footer-icon-link"
              >
                <EmailIcon />
              </a>
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
