import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-content">
          {/* Desktop/Mobile Navigation Links */}
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Hamburger menu button for mobile */}
          <button className="mobile-menu-btn" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <main>
        {/* 1. Hero Section */}
        <section id="hero" className="hero section">
          <div className="container">
            <div className="hero-content">
              <p className="greeting">Hi, my name is</p>
              <h1 className="name">Kunal Gupta.</h1>
              <h2 className="tagline">
                Computer Science Student <span className="divider">|</span>
                Aspiring Software Engineer
              </h2>
              <p className="hero-description" style={{ maxWidth: "600px", marginTop: "1rem", fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                I am a 20-year-old student passionate about building secure, scalable, and beautifully designed digital experiences. I am currently focused on mastering Data Structures, Algorithms, and modern web development to architect robust systems.
              </p>
            </div>
          </div>
        </section>
        <hr className="section-divider" />

        {/* 2. About & Journey Section */}
        <section id="about" className="about-journey section">
          <div className="container">
            <div className="about-journey-grid">
              {/* Left Column: About Me */}
              <div className="about-col">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                  <p className="intro-text">
                    I build responsive, secure, and user-friendly digital experiences. Always eager to learn new
                    technologies and tackle complex problems.
                  </p>
                  <p>
                    Hello! I'm Kunal, a 20-year-old Computer Science engineering student with a deep passion for
                    technology. My journey started with a curiosity about how the web works, which quickly evolved
                    into a focused drive towards ethical hacking, software development, and problem solving.
                  </p>
                  <p>
                    I embrace a continuous learning mindset and believe in growing through challenges. Whether I'm
                    building a modern web application or learning the intricacies of backend architectures, my goal
                    is always to write clean, efficient, and maintainable code.
                  </p>
                </div>
              </div>

              {/* Right Column: My Journey */}
              <div className="journey-col">
                <h2 className="section-title">My Journey</h2>
                <div className="journey-timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h3>B.Tech in Computer Science</h3>
                    <p className="timeline-date">2023 - Present</p>
                    <p>Pursuing Computer Science Engineering. Focusing on DSA, web development, and cybersecurity.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h3>High School</h3>
                    <p className="timeline-date">Graduated 2023</p>
                    <p>Completed high school with a focus on science and mathematics, sparking my initial interest in technology.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h3>Early Schooling</h3>
                    <p className="timeline-date">Before 2021</p>
                    <p>Developed foundational skills and a curiosity for learning how things work.</p>
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
            <h2 className="section-title">Skills & Tools</h2>
            <div className="skills-grid">

              {/* Programming Languages Category */}
              <div className="skill-category">
                <h3>Programming Languages</h3>
                <div className="tags">
                  <span className="tag"><i className="devicon-c-plain colored"></i> C</span>
                  <span className="tag"><i className="devicon-python-plain colored"></i> Python</span>
                  <span className="tag"><i className="devicon-java-plain colored"></i> Java</span>
                  <span className="tag"><i className="devicon-javascript-plain colored"></i> JavaScript</span>
                </div>
              </div>

              {/* Web Development Category */}
              <div className="skill-category">
                <h3>Web Development</h3>
                <div className="tags">
                  <span className="tag"><i className="devicon-html5-plain colored"></i> HTML</span>
                  <span className="tag"><i className="devicon-css3-plain colored"></i> CSS</span>
                  <span className="tag"><i className="devicon-react-original colored"></i> React</span>
                </div>
              </div>

              {/* Databases Category */}
              <div className="skill-category">
                <h3>Databases</h3>
                <div className="tags">
                  <span className="tag"><i className="devicon-postgresql-plain colored"></i> PostgreSQL</span>
                  <span className="tag"><i className="devicon-mongodb-plain colored"></i> MongoDB</span>
                </div>
              </div>

              {/* Tools & Platforms Category */}
              <div className="skill-category">
                <h3>Tools & Platforms</h3>
                <div className="tags">
                  <span className="tag"><i className="devicon-git-plain colored"></i> Git</span>
                  <span className="tag"><i className="devicon-github-original colored"></i> GitHub</span>
                  <span className="tag"><i className="devicon-vercel-original colored"></i> Vercel</span>
                  <span className="tag"><i className="devicon-supabase-plain colored"></i> Supabase</span>
                </div>
              </div>

              {/* other Category */}
              <div className="skill-category">
                <h3>Other Tools</h3>
                <div className="tags">
                  <span className="tag">DaVinci Resolve</span>
                  <span className="tag"><i className="devicon-blender-original colored"></i> Blender</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        <hr className="section-divider" />

        {/* 4. Projects Section */}
        <section id="projects" className="projects section">
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2 className="section-title text-center">Featured Projects</h2>

              {/* Project Toggle */}
              <div className="project-toggle-wrapper">
                <div className="project-toggle">
                  <button className="toggle-btn active" data-target="web-apps">Web Apps</button>
                  <button className="toggle-btn" data-target="web-games">Web Games</button>
                  <div className="toggle-slider"></div>
                </div>
              </div>
            </div>

            {/* Web Apps Grid */}
            <div className="project-grid" id="web-apps">
              {/* Project 1 */}
              <div className="project-card">
                <div className="project-content">
                  <h3>Personal Portfolio Website</h3>
                  <p>A responsive, one-page portfolio built from scratch to showcase my skills, projects, and
                    career goals. Designed with a clean, modern aesthetic.</p>
                  <div className="tech-stack">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/kunal82917/website" target="_blank"
                      className="btn btn-small btn-outline">GitHub</a>
                    <a href="https://kunalgupta-official.vercel.app/" target="_blank"
                      className="btn btn-small btn-primary">Live Demo</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Games Grid */}
            <div className="project-grid" id="web-games" style={{ display: "none" }}>
              {/* Blank for future web games */}
              <div className="empty-state">
                <p>No web games added yet. Working on something exciting!</p>
              </div>
            </div>

          </div>
        </section>
        <hr className="section-divider" />

        {/* 5. Career Path / Goals Section */}
        <section id="career" className="career section">
          <div className="container">
            <h2 className="section-title">Career Path & Goals</h2>
            <div className="career-content">
              <div className="career-card">
                <h3>Current Focus</h3>
                <p>Currently deeply involved in learning core programming concepts, Data Structures, and
                  Algorithms (DSA) to build a strong foundation in problem-solving.</p>
              </div>
              <div className="career-card">
                <h3>Aspirations</h3>
                <p>My primary goal is to become a strong, versatile software engineer capable of architecting
                  robust systems.</p>
              </div>
              <div className="career-card">
                <h3>Areas of Interest</h3>
                <p>Particularly drawn towards backend development and cybersecurity, aiming to blend these
                  fields to create secure, high-performance applications.</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="section-divider" />

        {/* 6. Certificates Section */}
        <section id="certificates" className="certificates section">
          <div className="container">
            <h2 className="section-title">Certifications</h2>
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
        <section id="contact" className="contact section text-center">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-subtitle mx-auto">I'm currently looking for new opportunities. Whether you have a question or
              just want to say hi, I'll try my best to get back to you!</p>

            <div className="contact-wrapper">
              <div className="contact-info">
                <a href="mailto:kunalgupta9340@gmail.com" target="_blank" className="contact-link" aria-label="Email">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
                <a href="https://www.linkedin.com/in/kunal82917/" target="_blank" className="contact-link" aria-label="LinkedIn">
                  <i className="devicon-linkedin-plain colored"></i>
                </a>
                <a href="https://github.com/kunal82917" target="_blank" className="contact-link" aria-label="GitHub">
                  <i className="devicon-github-original colored"></i>
                </a>
                <a href="https://leetcode.com/u/AHDFSOgt2Z/" target="_blank" className="contact-link" aria-label="LeetCode">
                  <svg role="img" viewBox="0 0 24 24" fill="#FFA116" xmlns="http://www.w3.org/2000/svg" width="28" height="28"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.378 1.378 0 0 0-.207-1.953l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>


    </>
  );
}
