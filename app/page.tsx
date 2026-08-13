"use client";

import { useState, useEffect } from "react";

// ─── GitHub SVG (reused) ────────────────────────────────────────────────────
const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// ─── External link arrow SVG ─────────────────────────────────────────────────
const ArrowIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

// ─── Right arrow SVG ─────────────────────────────────────────────────────────
const RightArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ─── LeetCode SVG ────────────────────────────────────────────────────────────
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FFA116" width="20" height="20">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.378 1.378 0 0 0-.207-1.953l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z" />
  </svg>
);

// ─── Email SVG ───────────────────────────────────────────────────────────────
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// ─── LinkedIn SVG ─────────────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Resume SVG ──────────────────────────────────────────────────────────────
const ResumeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

// ─── Download SVG ─────────────────────────────────────────────────────────────
const DownloadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);


export default function Home() {
  const [activeTab, setActiveTab] = useState<"web-apps" | "android" | "web-games">("web-apps");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ── Custom cursor ──────────────────────────────────────────────────────────
  useEffect(() => {
    // Only run on fine-pointer devices (desktop)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
    const cursorOutline = document.querySelector(".cursor-outline") as HTMLElement;
    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;
    let reqId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Use transform for dot — avoids layout thrashing
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

  // ── Escape key closes mobile menu ─────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Custom Cursor — desktop only, hidden via CSS on touch */}
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-outline" aria-hidden="true" />

      {/* ── Navigation Bar ─────────────────────────────────────────────────── */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-content">
          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`} role="list">
            <li><a href="#about"       onClick={closeMenu}>About</a></li>
            <li><a href="#skills"      onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects"    onClick={closeMenu}>Projects</a></li>
            <li><a href="#career"      onClick={closeMenu}>Journey</a></li>
            <li><a href="#certificates" onClick={closeMenu}>Certs</a></li>
            <li><a href="#contact"     onClick={closeMenu}>Contact</a></li>
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
        {/* ── 01 · Hero ─────────────────────────────────────────────────────── */}
        <section id="hero" className="hero" aria-label="Introduction">
          <div className="hero-wrap">

            {/* Name */}
            <h1 className="hero-heading">
              <span className="hero-name-solid">KUNAL</span>
              <span className="hero-name-outline" aria-hidden="true">GUPTA</span>
            </h1>

            {/* Role divider */}
            <div className="hero-rule-row" aria-hidden="true">
              <span className="hero-rule-line" />
              <span className="hero-rule-label">Software Engineer · Computer Science</span>
              <span className="hero-rule-line" />
            </div>

            {/* Focused marquee — fewer, cleaner items */}
            <div className="hero-marquee" aria-hidden="true">
              <div className="hero-marquee-inner">
                <span className="marquee-item">Backend Development</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Full-Stack</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Application Security</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Data Structures &amp; Algorithms</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Android Development</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Problem Solving</span>
                <span className="marquee-dot">◆</span>
                {/* Duplicate for seamless loop */}
                <span className="marquee-item">Backend Development</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Full-Stack</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Application Security</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Data Structures &amp; Algorithms</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Android Development</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Problem Solving</span>
                <span className="marquee-dot">◆</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="hero-stats-row">
              <div className="hero-stat">
                <span className="hero-stat-num">3+</span>
                <span className="hero-stat-lbl">Years Coding</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">10+</span>
                <span className="hero-stat-lbl">Projects Built</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">6+</span>
                <span className="hero-stat-lbl">Certifications</span>
              </div>

              {/* Bio + CTA */}
              <div className="hero-stat hero-stat-bio">
                <span className="hero-stat-lbl">
                  CS engineering student building secure, scalable applications.
                  Focused on backend systems, full-stack development, and clean engineering.
                </span>
                <div className="hero-cta-group">
                  <a href="#projects" className="hero-btn-primary">
                    View Projects <RightArrow />
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-secondary"
                    aria-label="Download Resume (opens PDF)"
                  >
                    <ResumeIcon /> Resume
                  </a>
                  <a href="#contact" className="hero-btn-ghost">
                    Contact
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 02 · About & Journey ───────────────────────────────────────────── */}
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
                  <span className="about-heading-outline">beyond the UI.</span>
                </h2>

                <p className="about-intro">
                  I&apos;m Kunal, a Computer Science engineering student focused on backend
                  development, application security, and problem solving. I enjoy working
                  on the parts of software that aren&apos;t immediately visible — APIs,
                  databases, authentication flows, data modeling, and system design.
                </p>
                <p className="about-body">
                  I build full-stack web applications and Android apps, write clean and
                  maintainable code, and approach every project with an engineering mindset.
                  Currently deepening my understanding of data structures, algorithms, and
                  secure backend architecture.
                </p>

                <div className="about-traits" aria-label="Key traits">
                  <span className="trait-tag">Backend-First</span>
                  <span className="trait-tag">Security-Minded</span>
                  <span className="trait-tag">DSA &amp; Problem Solving</span>
                  <span className="trait-tag">Clean Code</span>
                  <span className="trait-tag">Full-Stack</span>
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
                        <h4 className="tl-title">Technical Focus Areas</h4>
                        <span className="tl-date">Ongoing</span>
                      </div>
                      <p className="tl-desc">
                        Backend development (REST APIs, auth), full-stack web apps,
                        Android development, application security, and competitive DSA.
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
                        System design, cloud fundamentals, advanced DSA, and
                        secure API design patterns.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 03 · Skills ───────────────────────────────────────────────────── */}
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
                Languages, frameworks, and tools I&apos;ve applied across real projects —
                linked to what I&apos;ve actually built with them.
              </p>
            </div>

            <div className="skills-bento">

              {/* Programming Languages — wide */}
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
                <p className="skill-bento-note">Java &amp; Kotlin → Tasky (Android) · JS → HazardWatch, Portfolio · Python → Scripting</p>
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
                <p className="skill-bento-note">React/Next.js → Portfolio, Tic-Tac-Toe</p>
              </div>

              {/* Databases */}
              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">03</span>
                  <span className="skill-bento-label">Databases</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="devicon-mongodb-plain colored" aria-hidden="true" />MongoDB</span>
                  <span className="skill-tag"><i className="devicon-postgresql-plain colored" aria-hidden="true" />PostgreSQL</span>
                  <span className="skill-tag skill-tag-plain">SQLite</span>
                </div>
                <p className="skill-bento-note">MongoDB → HazardWatch · SQLite → Tasky</p>
              </div>

              {/* Tools & Platforms */}
              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">04</span>
                  <span className="skill-bento-label">Tools &amp; Platforms</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="devicon-git-plain colored" aria-hidden="true" />Git</span>
                  <span className="skill-tag"><i className="devicon-github-original" aria-hidden="true" />GitHub</span>
                  <span className="skill-tag"><i className="devicon-vercel-original" aria-hidden="true" />Vercel</span>
                  <span className="skill-tag"><i className="devicon-supabase-plain colored" aria-hidden="true" />Supabase</span>
                  <span className="skill-tag skill-tag-plain">JWT</span>
                </div>
              </div>

              {/* Android */}
              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">05</span>
                  <span className="skill-bento-label">Android</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag skill-tag-plain">Jetpack Compose</span>
                  <span className="skill-tag skill-tag-plain">Android SDK</span>
                </div>
                <p className="skill-bento-note">Used in Tasky</p>
              </div>

              {/* Other Tools */}
              <div className="skill-bento-card skill-bento-other">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">06</span>
                  <span className="skill-bento-label">Other Tools</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag skill-tag-plain">🎬 DaVinci Resolve</span>
                  <span className="skill-tag"><i className="devicon-blender-original colored" aria-hidden="true" />Blender</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 04 · Projects ─────────────────────────────────────────────────── */}
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
                  each demonstrating a different engineering challenge.
                </p>

                {/* Category toggle */}
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

                {/* Project 01 — HazardWatch */}
                <article className="project-card">
                  <div className="project-card-top-bar" aria-hidden="true" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">01</span>
                      <span className="project-category">Web App</span>
                    </div>
                    <h3 className="project-title">HazardWatch</h3>
                    <p className="project-desc">
                      A disaster prevention and hazard awareness web platform.
                      Implements JWT-based user authentication and a MongoDB backend
                      to store and serve hazard-related data.
                    </p>
                    <ul className="project-highlights" aria-label="Technical highlights">
                      <li>JWT authentication &amp; session management</li>
                      <li>MongoDB database integration</li>
                      <li>Responsive multi-page layout</li>
                    </ul>
                    <div className="tech-stack" aria-label="Technologies used">
                      <span>MongoDB</span>
                      <span>JWT</span>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
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

                {/* Project 02 — Portfolio */}
                <article className="project-card">
                  <div className="project-card-top-bar" aria-hidden="true" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">02</span>
                      <span className="project-category">Web App</span>
                    </div>
                    <h3 className="project-title">Personal Portfolio</h3>
                    <p className="project-desc">
                      This portfolio site — a single-page Next.js application built
                      from scratch with a custom design system, CSS-only animations,
                      a custom cursor, and full mobile responsiveness.
                    </p>
                    <ul className="project-highlights" aria-label="Technical highlights">
                      <li>Next.js 15 App Router architecture</li>
                      <li>CSS-only marquee animation (no JS)</li>
                      <li>Custom cursor with requestAnimationFrame</li>
                      <li>Accessible mobile navigation</li>
                    </ul>
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

                {/* Project 01 — Tasky */}
                <article className="project-card">
                  <div className="project-card-top-bar" aria-hidden="true" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">01</span>
                      <span className="project-category">Android App</span>
                    </div>
                    <h3 className="project-title">Tasky</h3>
                    <p className="project-desc">
                      A collaborative task management Android application with
                      group-based competitive features. Users can create tasks,
                      form groups, and compete with friends on completion streaks.
                    </p>
                    <ul className="project-highlights" aria-label="Technical highlights">
                      <li>Jetpack Compose declarative UI</li>
                      <li>SQLite local data persistence</li>
                      <li>Group creation and task competition</li>
                      <li>Built in Kotlin with Java interop</li>
                    </ul>
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

                {/* Tic Tac Toe */}
                <article className="project-card">
                  <div className="project-card-top-bar" aria-hidden="true" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">01</span>
                      <span className="project-category">Web Game</span>
                    </div>
                    <h3 className="project-title">Tic Tac Toe</h3>
                    <p className="project-desc">
                      A fully playable browser-based Tic Tac Toe game with a clean UI,
                      win detection, draw state, and instant reset. Built and deployed
                      with React and Next.js.
                    </p>
                    <ul className="project-highlights" aria-label="Technical highlights">
                      <li>React state management for game logic</li>
                      <li>Win/draw detection algorithm</li>
                      <li>Deployed on Vercel</li>
                    </ul>
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

        {/* ── 05 · Career Path ──────────────────────────────────────────────── */}
        <section id="career" className="career section" aria-labelledby="career-heading">
          <div className="container">

            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">05 — Where I&apos;m Headed</span>
            </div>

            <div className="career-header">
              <h2 id="career-heading" className="career-heading">
                Career<br />
                <span className="career-heading-gradient">direction.</span>
              </h2>
              <p className="career-subtext">
                A focused path toward backend engineering and application security —
                grounded in real project work and ongoing learning.
              </p>
            </div>

            <div className="career-content">

              <div className="career-card">
                <div className="career-card-icon" aria-hidden="true">📍</div>
                <div className="career-card-num" aria-hidden="true">01</div>
                <h3 className="career-card-title">Currently</h3>
                <ul className="career-card-list">
                  <li>B.Tech Computer Science (2023–Present)</li>
                  <li>Solving DSA problems on LeetCode</li>
                  <li>Building full-stack web applications</li>
                  <li>Developing Android apps with Jetpack Compose</li>
                </ul>
              </div>

              <div className="career-card">
                <div className="career-card-icon" aria-hidden="true">🔨</div>
                <div className="career-card-num" aria-hidden="true">02</div>
                <h3 className="career-card-title">Building</h3>
                <ul className="career-card-list">
                  <li>Secure REST APIs with JWT auth</li>
                  <li>Backend systems with MongoDB</li>
                  <li>Responsive full-stack web apps</li>
                  <li>Mobile-first Android applications</li>
                </ul>
              </div>

              <div className="career-card">
                <div className="career-card-icon" aria-hidden="true">🎯</div>
                <div className="career-card-num" aria-hidden="true">03</div>
                <h3 className="career-card-title">Next</h3>
                <ul className="career-card-list">
                  <li>Software engineering internship</li>
                  <li>Backend or full-stack engineering role</li>
                  <li>System design &amp; cloud fundamentals</li>
                  <li>Application security depth</li>
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
                { src: "/kunal infosys i2aiml.jpg",          alt: "Introduction to AIML Certificate — Infosys",          title: "Intro to AIML",          issuer: "Infosys" },
                { src: "/kunal udemy java spring boot cert.jpg", alt: "Java & Spring Boot Certificate — Udemy",          title: "Java & Spring Boot",     issuer: "Udemy" },
                { src: "/kunal udemy python basics cert.jpg", alt: "Python Basics Certificate — Udemy",                  title: "Python Basics",          issuer: "Udemy" },
                { src: "/kunal udemy google cloud cert.jpg",  alt: "Google Cloud Certificate — Udemy",                   title: "Google Cloud",           issuer: "Udemy" },
                { src: "/kunal udemy ai agents cert.jpg",     alt: "AI Agents Certificate — Udemy",                      title: "AI Agents",              issuer: "Udemy" },
                { src: "/kunal udemy win cmd mastery cert.jpg", alt: "Windows Command Line Mastery Certificate — Udemy", title: "Windows CLI Mastery",    issuer: "Udemy" },
              ].map(({ src, alt, title, issuer }) => (
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
                      <p>{issuer}</p>
                    </div>
                  </div>
                </a>
              ))}

            </div>
          </div>
        </section>
        <hr className="section-divider" aria-hidden="true" />

        {/* ── 07 · Contact ───────────────────────────────────────────────────── */}
        <section id="contact" className="contact section" aria-labelledby="contact-heading">
          <div className="container">

            <div className="section-eyebrow" aria-hidden="true">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">07 — Get In Touch</span>
            </div>

            <div className="contact-editorial">
              <div className="contact-left">
                <h2 id="contact-heading" className="contact-heading">
                  Let&apos;s build<br />
                  <span className="contact-heading-gradient">something.</span>
                </h2>
                <p className="contact-subtext">
                  Looking for an internship, collaboration, or an interesting software project?
                  I&apos;m open to opportunities in backend engineering, full-stack development,
                  and application security.
                </p>
                <a
                  href="mailto:kunalgupta9340@gmail.com"
                  className="contact-email-btn"
                  aria-label="Send email to Kunal Gupta"
                >
                  Email Me <ArrowIcon size={14} />
                </a>
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
                      <span className="contact-row-value">kunal82917</span>
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
                      <span className="contact-row-value">kunal82917</span>
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
                  >
                    <div className="contact-row-icon"><ResumeIcon /></div>
                    <div className="contact-row-body">
                      <span className="contact-row-label">Resume</span>
                      <span className="contact-row-value">Download / View PDF</span>
                    </div>
                    <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────────── */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-left">
              <span className="footer-name">Kunal Gupta</span>
              <span className="footer-role">Software Engineer · CS Engineering Student</span>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
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
            © {new Date().getFullYear()} Kunal Gupta. Built with Next.js &amp; deployed on Vercel.
          </p>
        </div>
      </footer>
    </>
  );
}
