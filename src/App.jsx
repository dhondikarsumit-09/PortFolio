import { startTransition, useDeferredValue, useEffect, useEffectEvent, useRef, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Highlights" },
  { id: "contact", label: "Contact" }
];

const rotatingRoles = [
  "Full Stack Developer",
  "Spring Boot + React Builder",
  "Backend API Engineer"
];

const skills = [
  { title: "Programming", value: "Java, SQL, C, JavaScript", level: 86 },
  { title: "Frontend", value: "React.js, HTML, CSS, Bootstrap", level: 82 },
  { title: "Backend", value: "Spring Boot, Servlet, JSP", level: 88 },
  { title: "Databases", value: "PostgreSQL, MySQL, Redis", level: 84 },
  { title: "Tools", value: "Git, GitHub, Postman, Docker", level: 80 }
];

const projects = [
  {
    title: "Ride Share Platform",
    timeline: "2025 - 2026",
    tags: ["fullstack", "backend", "realtime"],
    stack: ["Spring Boot", "React.js", "PostgreSQL", "Redis", "WebSocket"],
    summary: "Scalable ride booking and tracking platform with real-time events and role-based auth.",
    bullets: [
      "Built a scalable ride-sharing platform with Spring Boot, React.js, and PostgreSQL.",
      "Developed 5+ REST APIs for booking and driver matching.",
      "Implemented JWT role-based authentication and authorization.",
      "Added WebSocket tracking with sub-500ms latency.",
      "Used Redis caching and Docker containerization for performance and deployment."
    ]
  },
  {
    title: "Customer Management System",
    timeline: "2025",
    tags: ["fullstack", "backend"],
    stack: ["Spring Boot", "React", "Redis", "WebSocket"],
    summary: "CRM experience with secure authentication and live updates for operational teams.",
    bullets: [
      "Developed a CRM platform using Spring Boot and React.",
      "Implemented secure JWT authentication flows.",
      "Integrated Redis caching for better response time.",
      "Delivered real-time update flows with WebSocket."
    ]
  },
  {
    title: "Library Management System",
    timeline: "2024",
    tags: ["java"],
    stack: ["Core Java", "OOP", "Collections"],
    summary: "Core Java system focused on clean object-oriented modeling and tracking flows.",
    bullets: [
      "Built in Core Java with OOP principles.",
      "Implemented book search and issue-return workflows.",
      "Used Java Collections for efficient in-memory data handling."
    ]
  }
];

const metricTargets = [
  { target: 400, suffix: "+", label: "LeetCode Problems Solved" },
  { target: 5, suffix: "+", label: "REST APIs Delivered" },
  { target: 500, suffix: "ms", label: "Realtime Tracking Latency" }
];

const education = [
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science Engineering",
    school: "Shri Balaji Institute of Technology and Management",
    details: "CGPA: 6.36 | Betul, India"
  },
  {
    year: "2020 - 2021",
    title: "Class XII",
    school: "Corolla Public School",
    details: "Score: 84.4% | Multai, Madhya Pradesh"
  }
];

const certifications = [
  "Solved 400+ DSA problems on LeetCode (2025).",
  "Certificate of Excellence in DSA (Java), PW Skills (2025).",
  "Certification in Learning Microsoft 365 Copilot (2024)."
];

const accentThemes = [
  {
    name: "Ember",
    primary: "#d65b21",
    primaryRgb: "214, 91, 33",
    secondary: "#1e8c6f",
    secondaryRgb: "30, 140, 111",
    orbA: "rgba(214, 91, 33, 0.3)",
    orbB: "rgba(30, 140, 111, 0.25)"
  },
  {
    name: "Ocean",
    primary: "#0f7bbd",
    primaryRgb: "15, 123, 189",
    secondary: "#1f9d7a",
    secondaryRgb: "31, 157, 122",
    orbA: "rgba(15, 123, 189, 0.28)",
    orbB: "rgba(31, 157, 122, 0.24)"
  },
  {
    name: "Copper",
    primary: "#b2592f",
    primaryRgb: "178, 89, 47",
    secondary: "#637527",
    secondaryRgb: "99, 117, 39",
    orbA: "rgba(178, 89, 47, 0.29)",
    orbB: "rgba(99, 117, 39, 0.24)"
  }
];

function extractLatestYear(timeline) {
  const matches = timeline.match(/\d{4}/g);
  if (!matches) {
    return 0;
  }
  return Math.max(...matches.map((value) => Number(value)));
}

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [projectFilter, setProjectFilter] = useState("all");
  const [projectSort, setProjectSort] = useState("latest");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [metricValues, setMetricValues] = useState(metricTargets.map(() => 0));
  const [skillValues, setSkillValues] = useState(skills.map(() => 0));
  const [countReady, setCountReady] = useState(false);
  const [skillsReady, setSkillsReady] = useState(false);
  const [expandedProject, setExpandedProject] = useState(projects[0].title);
  const [accentIndex, setAccentIndex] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);
  const [copyState, setCopyState] = useState("idle");
  const [now, setNow] = useState(new Date());

  const appShellRef = useRef(null);
  const achievementsRef = useRef(null);
  const skillsRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((value) => (value + 1) % rotatingRoles.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const nextRole = rotatingRoles[roleIndex];
    let index = 0;
    setTypedRole("");

    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedRole(nextRole.slice(0, index));
      if (index >= nextRole.length) {
        window.clearInterval(typingTimer);
      }
    }, 38);

    return () => window.clearInterval(typingTimer);
  }, [roleIndex]);

  const onSectionObserve = useEffectEvent((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      setActiveSection(entry.target.id);
    });
  });

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(onSectionObserve, {
      threshold: 0.45,
      rootMargin: "-8% 0px -42% 0px"
    });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onSectionObserve]);

  const onRevealObserve = useEffectEvent((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  });

  useEffect(() => {
    const revealNodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries, activeObserver) => onRevealObserve(entries, activeObserver),
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    revealNodes.forEach((node, index) => {
      node.style.transitionDelay = `${index * 65}ms`;
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [onRevealObserve]);

  useEffect(() => {
    const metricSection = achievementsRef.current;
    if (!metricSection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          setCountReady(true);
          observer.disconnect();
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(metricSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const skillsSection = skillsRef.current;
    if (!skillsSection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          setSkillsReady(true);
          observer.disconnect();
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(skillsSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!countReady) {
      return undefined;
    }

    let frameId = 0;
    const duration = 1200;
    const startedAt = performance.now();

    const animate = (nowValue) => {
      const progress = Math.min((nowValue - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setMetricValues(metricTargets.map((item) => Math.round(item.target * eased)));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [countReady]);

  useEffect(() => {
    if (!skillsReady) {
      return undefined;
    }

    let frameId = 0;
    const duration = 1250;
    const startedAt = performance.now();

    const animate = (nowValue) => {
      const progress = Math.min((nowValue - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setSkillValues(skills.map((item) => Math.round(item.level * eased)));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [skillsReady]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const onScroll = useEffectEvent(() => {
    setShowTopButton(window.scrollY > 560);
  });

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const onPointerMove = useEffectEvent((event) => {
    const shell = appShellRef.current;
    if (!shell) {
      return;
    }
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    shell.style.setProperty("--spot-x", `${x}%`);
    shell.style.setProperty("--spot-y", `${y}%`);
  });

  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [onPointerMove]);

  const onGlobalKeyDown = useEffectEvent((event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }

    const target = event.target;
    if (
      target instanceof HTMLElement &&
      (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)
    ) {
      return;
    }

    event.preventDefault();
    searchInputRef.current?.focus();
  });

  useEffect(() => {
    window.addEventListener("keydown", onGlobalKeyDown);
    return () => window.removeEventListener("keydown", onGlobalKeyDown);
  }, [onGlobalKeyDown]);

  useEffect(() => {
    if (copyState === "idle") {
      return undefined;
    }
    const timer = window.setTimeout(() => setCopyState("idle"), 1600);
    return () => window.clearTimeout(timer);
  }, [copyState]);

  const normalizedQuery = deferredQuery.trim().toLowerCase();
  let filteredProjects = projects.filter((project) => {
    if (projectFilter !== "all" && !project.tags.includes(projectFilter)) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = `${project.title} ${project.summary} ${project.bullets.join(" ")}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  filteredProjects = filteredProjects.sort((left, right) => {
    if (projectSort === "alpha") {
      return left.title.localeCompare(right.title);
    }
    return extractLatestYear(right.timeline) - extractLatestYear(left.timeline);
  });

  const indiaHourRaw = Number(
    new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata"
    }).format(now)
  );
  const indiaHour = indiaHourRaw % 24;
  const isAvailable = indiaHour >= 9 && indiaHour < 22;
  const indiaClock = new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata"
  }).format(now);

  const activeAccent = accentThemes[accentIndex];

  const appStyle = {
    "--primary": activeAccent.primary,
    "--primary-rgb": activeAccent.primaryRgb,
    "--primary-2": activeAccent.secondary,
    "--secondary-rgb": activeAccent.secondaryRgb,
    "--orb-a": activeAccent.orbA,
    "--orb-b": activeAccent.orbB
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dhondikarsumit@gmail.com");
      setCopyState("success");
    } catch {
      setCopyState("error");
    }
  };

  return (
    <div ref={appShellRef} className="app-shell" style={appStyle}>
      <div className="bg-orb bg-orb-a" aria-hidden="true" />
      <div className="bg-orb bg-orb-b" aria-hidden="true" />
      <div className="spotlight" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <nav className="container nav-row">
          <a className="brand" href="#home">
            SD
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setAccentIndex((value) => (value + 1) % accentThemes.length)}
          >
            Theme: {activeAccent.name}
          </button>
        </nav>
      </header>

      <main className="container">
        <section id="home" data-section className="hero" data-reveal>
          <p className="eyebrow">
            {typedRole}
            <span className="typing-caret" aria-hidden="true">
              |
            </span>
          </p>
          <h1>Sumit Dhondikar</h1>
          <p className="hero-copy">
            I build practical, scalable web products using Java, Spring Boot, React, and real-time APIs.
          </p>
          <div className="live-row">
            <span className={isAvailable ? "availability is-live" : "availability is-away"}>
              {isAvailable ? "Available Now" : "Usually available 9 AM - 10 PM IST"}
            </span>
            <span className="time-pill">IST {indiaClock}</span>
            <span className="hint">Press / to search projects</span>
          </div>
          <div className="contact-pills">
            <a href="mailto:dhondikarsumit@gmail.com">dhondikarsumit@gmail.com</a>
            <a href="tel:+917489998165">+91 74899 98165</a>
            <span>Betul, Madhya Pradesh, India</span>
          </div>
        </section>

        <section id="skills" ref={skillsRef} data-section className="panel" data-reveal>
          <div className="panel-head">
            <h2>Technical Skills</h2>
            <p>Skill bars animate when this section enters view.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article key={skill.title}>
                <div className="skill-title-row">
                  <h3>{skill.title}</h3>
                  <p className="skill-percent">{skillValues[index]}%</p>
                </div>
                <p className="skill-stack">{skill.value}</p>
                <div className="skill-meter" aria-hidden="true">
                  <span style={{ width: `${skillValues[index]}%` }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" data-section className="panel" data-reveal>
          <div className="panel-head">
            <h2>Projects</h2>
            <p>
              {filteredProjects.length} of {projects.length} projects shown.
            </p>
          </div>
          <div className="project-controls">
            <div className="chip-group" role="tablist" aria-label="Project filter">
              <button
                type="button"
                className={projectFilter === "all" ? "chip is-selected" : "chip"}
                onClick={() => {
                  startTransition(() => setProjectFilter("all"));
                }}
              >
                All
              </button>
              <button
                type="button"
                className={projectFilter === "fullstack" ? "chip is-selected" : "chip"}
                onClick={() => {
                  startTransition(() => setProjectFilter("fullstack"));
                }}
              >
                Full Stack
              </button>
              <button
                type="button"
                className={projectFilter === "backend" ? "chip is-selected" : "chip"}
                onClick={() => {
                  startTransition(() => setProjectFilter("backend"));
                }}
              >
                Backend
              </button>
              <button
                type="button"
                className={projectFilter === "java" ? "chip is-selected" : "chip"}
                onClick={() => {
                  startTransition(() => setProjectFilter("java"));
                }}
              >
                Java
              </button>
            </div>
            <div className="project-utility-row">
              <label className="search-wrap" htmlFor="project-search">
                <span>Search</span>
                <input
                  ref={searchInputRef}
                  id="project-search"
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="JWT, WebSocket, Redis..."
                />
              </label>
              <label className="sort-wrap" htmlFor="project-sort">
                <span>Sort</span>
                <select
                  id="project-sort"
                  value={projectSort}
                  onChange={(event) => setProjectSort(event.target.value)}
                >
                  <option value="latest">Latest</option>
                  <option value="alpha">A to Z</option>
                </select>
              </label>
            </div>
          </div>
          <div className="project-list">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProject === project.title;
              const visibleBullets = isExpanded ? project.bullets : project.bullets.slice(0, 2);
              const hiddenCount = project.bullets.length - visibleBullets.length;

              return (
                <article key={project.title} className="project-card">
                  <div className="project-top">
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.summary}</p>
                    </div>
                    <span>{project.timeline}</span>
                  </div>
                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={`${project.title}-${item}`}>{item}</span>
                    ))}
                  </div>
                  <ul>
                    {visibleBullets.map((line) => (
                      <li key={`${project.title}-${line}`}>{line}</li>
                    ))}
                    {hiddenCount > 0 ? <li className="more-line">+ {hiddenCount} more highlights</li> : null}
                  </ul>
                  <button
                    type="button"
                    className="expand-btn"
                    onClick={() =>
                      setExpandedProject((current) => (current === project.title ? "" : project.title))
                    }
                  >
                    {isExpanded ? "Show less" : "Show details"}
                  </button>
                </article>
              );
            })}
            {filteredProjects.length === 0 ? (
              <p className="empty-state">No project matches this filter and keyword.</p>
            ) : null}
          </div>
        </section>

        <section id="education" data-section className="panel" data-reveal>
          <div className="panel-head">
            <h2>Education</h2>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <article key={item.title} className="timeline-item">
                <p className="timeline-year">{item.year}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" ref={achievementsRef} data-section className="panel metrics" data-reveal>
          <div className="panel-head">
            <h2>Achievements</h2>
            <p>Counters animate when the section enters viewport.</p>
          </div>
          <div className="metric-grid">
            {metricTargets.map((item, index) => (
              <article key={item.label} className="metric-card">
                <p className="metric-value">
                  {metricValues[index]}
                  {item.suffix}
                </p>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
          <ul className="cert-list">
            {certifications.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </section>

        <section className="meta-grid" data-reveal>
          <article className="panel mini">
            <div className="panel-head">
              <h2>Languages</h2>
            </div>
            <ul>
              <li>English: Professional proficiency</li>
              <li>Hindi: Native speaker</li>
            </ul>
          </article>
          <article className="panel mini">
            <div className="panel-head">
              <h2>Interests</h2>
            </div>
            <p>Cricket, Music, Gardening</p>
          </article>
          <article className="panel mini">
            <div className="panel-head">
              <h2>Current Focus</h2>
            </div>
            <p>Building API-heavy full stack systems and improving DSA consistency.</p>
          </article>
        </section>

        <section id="contact" data-section className="panel contact" data-reveal>
          <div className="panel-head">
            <h2>Let's Connect</h2>
          </div>
          <p>
            Open to internship and entry-level opportunities focused on backend systems, API development, and
            full-stack product building.
          </p>
          <div className="contact-links">
            <a href="mailto:dhondikarsumit@gmail.com">Email</a>
            <a href="tel:+917489998165">Call</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <button type="button" onClick={copyEmail}>
              Copy Email
            </button>
          </div>
          <p className={`copy-status ${copyState === "success" ? "ok" : copyState === "error" ? "err" : ""}`}>
            {copyState === "success"
              ? "Email copied to clipboard."
              : copyState === "error"
                ? "Clipboard is blocked in this browser."
                : "Tip: use Copy Email for quick sharing."}
          </p>
        </section>
      </main>

      <button
        type="button"
        className={showTopButton ? "to-top is-visible" : "to-top"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Top
      </button>

      <footer className="footer">
        <p>(c) {new Date().getFullYear()} Sumit Dhondikar</p>
      </footer>
    </div>
  );
}

export default App;
