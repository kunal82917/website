"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";



export default function Home() {
  const [activeTab, setActiveTab] = useState<"web-apps" | "web-games">("web-apps");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let reqId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCursor = () => {
      const easing = 0.15;
      const dx = mouseX - outlineX;
      const dy = mouseY - outlineY;
      outlineX += dx * easing;
      outlineY += dy * easing;
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
      reqId = requestAnimationFrame(animateCursor);
    };

    reqId = requestAnimationFrame(animateCursor);

    // Hover effects for clickable elements
    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');

    const clickables = document.querySelectorAll('a, button, input, textarea, select, .trait-tag, .skill-tag, .hero-heading');
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(reqId);
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-content">
          {/* Desktop/Mobile Navigation Links */}
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#career" onClick={() => setMobileMenuOpen(false)}>Career</a></li>
            <li><a href="#certificates" onClick={() => setMobileMenuOpen(false)}>Certifications</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>

          {/* Hamburger menu button for mobile */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <main>
        {/* 1. Hero Section */}
        <section id="hero" className="hero">
          {/* Creative Background Elements */}

          <div className="hero-wrap">
            {/* Top Bar */}


            {/* Giant editorial heading: solid line + outline line */}
            <h1 className="hero-heading">
              <span className="hero-name-solid">KUNAL</span>
              <span className="hero-name-outline" aria-hidden="true">GUPTA</span>
            </h1>

            {/* Horizontal rule with centered role label */}
            <div className="hero-rule-row">
              <span className="hero-rule-line" />
              <span className="hero-rule-label">Computer Science &middot; Software Engineering</span>
              <span className="hero-rule-line" />
            </div>

            {/* Auto-scrolling skill marquee (CSS only, no JS) */}
            <div className="hero-marquee" aria-hidden="true">
              <div className="hero-marquee-inner">
                <span className="marquee-item">Web Developer</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">DSA</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Cybersecurity</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">React</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Next.js</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Python</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Java</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Problem Solver</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Backend Dev</span>
                <span className="marquee-dot">◆</span>
                {/* Duplicate set for seamless infinite loop */}
                <span className="marquee-item">Web Developer</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">DSA</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Cybersecurity</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">React</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Next.js</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Python</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Java</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Problem Solver</span>
                <span className="marquee-dot">◆</span>
                <span className="marquee-item">Backend Dev</span>
                <span className="marquee-dot">◆</span>
              </div>
            </div>

            {/* Stats row & CTA */}
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
              <div className="hero-stat hero-stat-bio">
                <span className="hero-stat-lbl">
                  Building secure, scalable, and beautifully designed systems.
                  Focused on mastering CS fundamentals and full-stack solutions.
                </span>

                {/* CTA Buttons */}
                <div className="hero-cta-group">
                  <a href="#projects" className="hero-btn-primary">
                    View Work
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                  <a href="#contact" className="hero-btn-secondary">
                    Let&apos;s Talk
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
        <hr className="section-divider" />

        {/* 2. About & Journey Section */}
        <section id="about" className="about-section section">
          <div className="container">

            {/* Section eyebrow */}
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">02 — About</span>
            </div>

            <div className="about-grid">

              {/* Left: About Me */}
              <div className="about-left">
                <h2 className="about-heading">
                  I build things<br />
                  <span className="about-heading-outline">for the web.</span>
                </h2>

                <p className="about-intro">
                  Hello! I&apos;m Kunal, a 20-year-old Computer Science engineering student with a deep
                  passion for technology. My journey started with a curiosity about how the web works,
                  which quickly evolved into a focused drive towards ethical hacking, software development,
                  and problem solving.
                </p>
                <p className="about-body">
                  I embrace a continuous learning mindset and believe in growing through challenges. Whether
                  building a modern web application or mastering backend architectures, my goal is always to
                  write clean, efficient, and maintainable code.
                </p>

                {/* Trait tags */}
                <div className="about-traits">
                  <span className="trait-tag">🧠 Fast Learner</span>
                  <span className="trait-tag">🔒 Security-Minded</span>
                  <span className="trait-tag">⚡ Clean Code</span>
                  <span className="trait-tag">🌐 Full-Stack Curious</span>
                  <span className="trait-tag">🎯 Goal-Oriented</span>
                </div>
              </div>

              {/* Right: Timeline */}
              <div className="about-right">
                <h3 className="timeline-heading">My Journey</h3>
                <div className="timeline-list">

                  <div className="tl-card">
                    <div className="tl-dot" aria-hidden="true" />
                    <div className="tl-body">
                      <div className="tl-top">
                        <h4 className="tl-title">B.Tech Computer Science</h4>
                        <span className="tl-date">2023 &mdash; Present</span>
                      </div>
                      <p className="tl-desc">Pursuing CS Engineering with focus on DSA, web development, and cybersecurity.</p>
                    </div>
                  </div>

                  <div className="tl-card">
                    <div className="tl-dot" aria-hidden="true" />
                    <div className="tl-body">
                      <div className="tl-top">
                        <h4 className="tl-title">High School</h4>
                        <span className="tl-date">Graduated 2023</span>
                      </div>
                      <p className="tl-desc">Completed with a science & mathematics focus, sparking my initial interest in technology.</p>
                    </div>
                  </div>

                  <div className="tl-card">
                    <div className="tl-dot" aria-hidden="true" />
                    <div className="tl-body">
                      <div className="tl-top">
                        <h4 className="tl-title">Early Schooling</h4>
                        <span className="tl-date">Before 2021</span>
                      </div>
                      <p className="tl-desc">Developed foundational curiosity about how systems and technology work.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
        <hr className="section-divider" />

        {/* 3. Skills Section */}
        <section id="skills" className="skills section">
          <div className="container">

            {/* Section eyebrow */}
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">03 — Skills &amp; Tools</span>
            </div>

            {/* Editorial heading */}
            <div className="skills-header">
              <h2 className="skills-heading">
                What I work<br />
                <span className="skills-heading-gradient">with.</span>
              </h2>
              <p className="skills-subtext">
                A curated set of languages, frameworks, and tools I&apos;ve used to design,
                build, and ship projects.
              </p>
            </div>

            {/* Bento-style skill cards grid */}
            <div className="skills-bento">

              {/* Programming Languages — wide card */}
              <div className="skill-bento-card skill-bento-wide">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">01</span>
                  <span className="skill-bento-label">Programming Languages</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="devicon-c-plain colored"></i>C</span>
                  <span className="skill-tag"><i className="devicon-python-plain colored"></i>Python</span>
                  <span className="skill-tag"><i className="devicon-java-plain colored"></i>Java</span>
                  <span className="skill-tag"><i className="devicon-javascript-plain colored"></i>JavaScript</span>
                </div>
              </div>

              {/* Web Development */}
              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">02</span>
                  <span className="skill-bento-label">Web Development</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="devicon-html5-plain colored"></i>HTML</span>
                  <span className="skill-tag"><i className="devicon-css3-plain colored"></i>CSS</span>
                  <span className="skill-tag"><i className="devicon-react-original colored"></i>React</span>
                  <span className="skill-tag"><i className="devicon-nextjs-original"></i>Next.js</span>
                </div>
              </div>

              {/* Databases */}
              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">03</span>
                  <span className="skill-bento-label">Databases</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="devicon-postgresql-plain colored"></i>PostgreSQL</span>
                  <span className="skill-tag"><i className="devicon-mongodb-plain colored"></i>MongoDB</span>
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">04</span>
                  <span className="skill-bento-label">Tools &amp; Platforms</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag"><i className="devicon-git-plain colored"></i>Git</span>
                  <span className="skill-tag"><i className="devicon-github-original"></i>GitHub</span>
                  <span className="skill-tag"><i className="devicon-vercel-original"></i>Vercel</span>
                  <span className="skill-tag"><i className="devicon-supabase-plain colored"></i>Supabase</span>
                </div>
              </div>

              {/* Creative Tools */}
              <div className="skill-bento-card">
                <div className="skill-bento-eyebrow">
                  <span className="skill-bento-num">05</span>
                  <span className="skill-bento-label">Creative Tools</span>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag skill-tag-plain">🎬 DaVinci Resolve</span>
                  <span className="skill-tag"><i className="devicon-blender-original colored"></i>Blender</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        <hr className="section-divider" />

        {/* 4. Projects Section */}
        <section id="projects" className="projects section">
          <div className="container">

            {/* Section eyebrow */}
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">04 — Featured Projects</span>
            </div>

            {/* Editorial header row */}
            <div className="projects-header">
              <h2 className="projects-heading">
                Things I&apos;ve<br />
                <span className="projects-heading-gradient">built.</span>
              </h2>
              <div className="projects-header-right">
                <p className="projects-subtext">
                  A selection of personal projects spanning web apps, games, and tools —
                  each one a hands-on learning adventure.
                </p>
                {/* Filter tabs */}
                <div className={`project-toggle active-${activeTab}`}>
                  <button
                    className={`toggle-btn ${activeTab === 'web-apps' ? 'active' : ''}`}
                    onClick={() => setActiveTab('web-apps')}
                  >
                    Web Apps
                  </button>
                  <button
                    className={`toggle-btn ${activeTab === 'web-games' ? 'active' : ''}`}
                    onClick={() => setActiveTab('web-games')}
                  >
                    Web Games
                  </button>
                  <div className="toggle-slider"></div>
                </div>
              </div>
            </div>

            {/* Web Apps Grid */}
            {activeTab === "web-apps" && (
              <div className="project-grid" id="web-apps">
                {/* Project 1 */}
                <div className="project-card">
                  <div className="project-card-top-bar" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">01</span>
                      <span className="project-category">Web App</span>
                    </div>
                    <h3 className="project-title">Personal Portfolio Website</h3>
                    <p className="project-desc">
                      A responsive, one-page portfolio built from scratch to showcase my skills, projects, and
                      career goals. Designed with a clean, modern aesthetic.
                    </p>
                    <div className="tech-stack">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                    </div>
                    <div className="project-links">
                      <a href="https://github.com/kunal82917/website" target="_blank" rel="noreferrer"
                        className="project-link-btn project-link-ghost">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                        GitHub
                      </a>
                      <a href="https://kunalgupta-official.vercel.app/" target="_blank" rel="noreferrer"
                        className="project-link-btn project-link-solid">
                        Live Demo
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project 2 */}
                <div className="project-card">
                  <div className="project-card-top-bar" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">02</span>
                      <span className="project-category">Web App</span>
                    </div>
                    <h3 className="project-title">disaster prevention website</h3>
                    <p className="project-desc">
                      A responsive, one-page portfolio built from scratch to showcase my skills, projects, and
                      career goals. Designed with a clean, modern aesthetic.
                    </p>
                    <div className="tech-stack">
                      <span>MongoDB</span>
                      <span>JWT</span>
                      <span>HTML</span>
                      <span>CSS</span>
                    </div>
                    <div className="project-links">
                      <a href="https://github.com/kunal82917/HazardWatch" target="_blank" rel="noreferrer"
                        className="project-link-btn project-link-ghost">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                        GitHub
                      </a>
                      <a href="https://hazardwatch.vercel.app/" target="_blank" rel="noreferrer"
                        className="project-link-btn project-link-solid">
                        Live Demo
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project 3 */}
                <div className="project-card">
                  <div className="project-card-top-bar" />
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-index">03</span>
                      <span className="project-category">Tasky</span>
                    </div>
                    <h3 className="project-title">Tasky</h3>
                    <p className="project-desc">
                      Tasky is a to-do list android application. it is highly secure and user can make groups to compete with friends.
                    </p>
                    <div className="tech-stack">
                      <span>Kotlin</span>
                      <span>Java</span>
                      <span>Jetpack Compose</span>
                      <span>SQLite</span>
                    </div>
                    <div className="project-links">
                      <a href="https://github.com/kunal82917/Tasky" target="_blank" rel="noreferrer"
                        className="project-link-btn project-link-ghost">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

          {/* Web Games Grid */}
          {activeTab === "web-games" && (
            <div className="project-grid" id="web-games">
              <div className="project-card">
                <div className="project-card-top-bar" />
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-index">01</span>
                    <span className="project-category">Web Game</span>
                  </div>
                  <h3 className="project-title">Tic Tac Toe</h3>
                  <p className="project-desc">
                    A classic Tic Tac Toe game deployed as a web app, featuring a clean UI and smooth interactive play.
                  </p>
                  <div className="tech-stack">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>CSS</span>
                  </div>
                  <div className="project-links">
                    <a href="https://tic-tac-toe-kunal82917.vercel.app/" target="_blank" rel="noreferrer"
                      className="project-link-btn project-link-solid">
                      Play Now
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
      <hr className="section-divider" />

      {/* 5. Career Path / Goals Section */}
      <section id="career" className="career section">
        <div className="container">

          {/* Section eyebrow */}
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">05 — Career Path</span>
          </div>

          {/* Editorial heading */}
          <div className="career-header">
            <h2 className="career-heading">
              Where I&apos;m<br />
              <span className="career-heading-gradient">headed.</span>
            </h2>
            <p className="career-subtext">
              Charting a path towards becoming a versatile engineer — one challenge at a time.
            </p>
          </div>

          {/* Cards */}
          <div className="career-content">
            <div className="career-card">
              <div className="career-card-icon">🎯</div>
              <div className="career-card-num">01</div>
              <h3 className="career-card-title">Current Focus</h3>
              <p className="career-card-desc">Deeply involved in mastering Data Structures &amp; Algorithms and core programming concepts to build a strong problem-solving foundation.</p>
            </div>
            <div className="career-card">
              <div className="career-card-icon">🚀</div>
              <div className="career-card-num">02</div>
              <h3 className="career-card-title">Aspirations</h3>
              <p className="career-card-desc">My primary goal is to become a strong, versatile software engineer capable of architecting robust, scalable systems.</p>
            </div>
            <div className="career-card">
              <div className="career-card-icon">🔒</div>
              <div className="career-card-num">03</div>
              <h3 className="career-card-title">Areas of Interest</h3>
              <p className="career-card-desc">Particularly drawn towards backend development and cybersecurity — blending both to build secure, high-performance applications.</p>
            </div>
          </div>

        </div>
      </section>
      <hr className="section-divider" />

      {/* 6. Certificates Section */}
      <section id="certificates" className="certificates section">
        <div className="container">

          {/* Section eyebrow */}
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">06 — Certifications</span>
          </div>

          {/* Editorial heading */}
          <div className="cert-header">
            <h2 className="cert-heading">
              Proof of<br />
              <span className="cert-heading-gradient">learning.</span>
            </h2>
            <p className="cert-subtext">
              Credentials earned across AI, cloud, security, and software engineering — click any to download.
            </p>
          </div>

          <div className="cert-grid">

            <a href="/kunal infosys i2aiml.jpg" download className="cert-card-link">
              <div className="cert-card">
                <div className="cert-thumbnail">
                  <img src="/kunal infosys i2aiml.jpg" alt="Introduction to AIML Certificate" loading="lazy" />

                </div>
                <div className="cert-info">
                  <h3>Introduction to AIML</h3>
                  <p>Infosys</p>
                </div>
              </div>
            </a>

            <a href="/kunal udemy ai agents cert.jpg" download className="cert-card-link">
              <div className="cert-card">
                <div className="cert-thumbnail">
                  <img src="/kunal udemy ai agents cert.jpg" alt="AI Agents Certificate" loading="lazy" />

                </div>
                <div className="cert-info">
                  <h3>AI Agents</h3>
                  <p>Udemy</p>
                </div>
              </div>
            </a>

            <a href="/kunal udemy google cloud cert.jpg" download className="cert-card-link">
              <div className="cert-card">
                <div className="cert-thumbnail">
                  <img src="/kunal udemy google cloud cert.jpg" alt="Google Cloud Certificate" loading="lazy" />

                </div>
                <div className="cert-info">
                  <h3>Google Cloud</h3>
                  <p>Udemy</p>
                </div>
              </div>
            </a>

            <a href="/kunal udemy python basics cert.jpg" download className="cert-card-link">
              <div className="cert-card">
                <div className="cert-thumbnail">
                  <img src="/kunal udemy python basics cert.jpg" alt="Python Basics Certificate" loading="lazy" />

                </div>
                <div className="cert-info">
                  <h3>Python Basics</h3>
                  <p>Udemy</p>
                </div>
              </div>
            </a>

            <a href="/kunal udemy java spring boot cert.jpg" download className="cert-card-link">
              <div className="cert-card">
                <div className="cert-thumbnail">
                  <img src="/kunal udemy java spring boot cert.jpg" alt="Java & Spring Boot Certificate" loading="lazy" />

                </div>
                <div className="cert-info">
                  <h3>Java & Spring Boot</h3>
                  <p>Udemy</p>
                </div>
              </div>
            </a>

            <a href="/kunal udemy win cmd mastery cert.jpg" download className="cert-card-link">
              <div className="cert-card">
                <div className="cert-thumbnail">
                  <img src="/kunal udemy win cmd mastery cert.jpg" alt="Windows Cmd Mastery Certificate" loading="lazy" />
                  <div className="cert-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>Download</span>
                  </div>
                </div>
                <div className="cert-info">
                  <h3>Windows Cmd Mastery</h3>
                  <p>Udemy</p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>
      <hr className="section-divider" />

      {/* 7. Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">

          {/* Section eyebrow */}
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">07 — Get In Touch</span>
          </div>

          {/* Editorial CTA block */}
          <div className="contact-editorial">
            <div className="contact-left">
              <h2 className="contact-heading">
                Let&apos;s work<br />
                <span className="contact-heading-gradient">together.</span>
              </h2>
              <p className="contact-subtext">
                I&apos;m currently open to new opportunities. Whether you have a project, a question,
                or just want to say hi — my inbox is always open.
              </p>
              <a href="mailto:kunalgupta9340@gmail.com" className="contact-email-btn">
                Say Hello
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </a>
            </div>

            <div className="contact-right">
              <div className="contact-links-stack">
                <a href="mailto:kunalgupta9340@gmail.com" target="_blank" className="contact-row-link" aria-label="Email">
                  <div className="contact-row-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="contact-row-body">
                    <span className="contact-row-label">Email</span>
                    <span className="contact-row-value">kunalgupta9340@gmail.com</span>
                  </div>
                  <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </a>

                <a href="https://www.linkedin.com/in/kunal82917/" target="_blank" rel="noreferrer" className="contact-row-link" aria-label="LinkedIn">
                  <div className="contact-row-icon">
                    <i className="devicon-linkedin-plain colored" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="contact-row-body">
                    <span className="contact-row-label">LinkedIn</span>
                    <span className="contact-row-value">kunal82917</span>
                  </div>
                  <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </a>

                <a href="https://github.com/kunal82917" target="_blank" rel="noreferrer" className="contact-row-link" aria-label="GitHub">
                  <div className="contact-row-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                  </div>
                  <div className="contact-row-body">
                    <span className="contact-row-label">GitHub</span>
                    <span className="contact-row-value">kunal82917</span>
                  </div>
                  <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </a>

                <a href="https://leetcode.com/u/AHDFSOgt2Z/" target="_blank" rel="noreferrer" className="contact-row-link" aria-label="LeetCode">
                  <div className="contact-row-icon">
                    <svg viewBox="0 0 24 24" fill="#FFA116" width="20" height="20"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.378 1.378 0 0 0-.207-1.953l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z" /></svg>
                  </div>
                  <div className="contact-row-body">
                    <span className="contact-row-label">LeetCode</span>
                    <span className="contact-row-value">AHDFSOgt2Z</span>
                  </div>
                  <svg className="contact-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main >


    </>
  );
}
