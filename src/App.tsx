import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Menu,
  X,
  Copy,
  Check,
  Code2,
  Globe2,
  Zap,
  ExternalLink,
  MapPin,
  Braces,
  MoveRight,
} from "lucide-react";
import { Github, Linkedin } from "./components/SocialIcons";
import {
  CareerVisual,
  EnergyVisual,
  DictionaryVisual,
} from "./components/ProjectVisuals";
import { projects, type Project } from "./data/projects";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All work");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!activeProject) return;
    dialog.current?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, [activeProject]);
  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );
  function openProject(project: Project) {
    returnFocus.current = document.activeElement as HTMLElement;
    setActiveProject(project);
  }
  function closeProject() {
    dialog.current?.close();
    setActiveProject(null);
    returnFocus.current?.focus();
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("milanchanda80@gmail.com");
      setCopied(true);
      setCopyError(false);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopyError(true);
    }
  }
  const visibleProjects = projects.filter(
    (p) => filter === "All work" || p.category === filter,
  );

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="wordmark" href="#home" aria-label="Milan Chanda home">
            m<span>c</span>
            <b>.</b>
          </a>
          <nav
            className={menuOpen ? "main-nav is-open" : "main-nav"}
            aria-label="Main navigation"
          >
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a
              className="mobile-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
          <div className="nav-actions">
            <a className="nav-talk" href="#contact">
              Let’s talk <ArrowUpRight size={15} />
            </a>
            <a
              className="github-icon"
              href="https://github.com/Milan8115"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Milan on GitHub"
            >
              <Github size={19} />
            </a>
            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero wrap" id="home">
          <div className="hero-topline">
            <span className="eyebrow availability">
              <i /> OPEN TO INTERNSHIPS & COLLABORATIONS
            </span>
            <span className="location">
              <MapPin size={13} /> WEST BENGAL, INDIA
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hello">
                Hey, I’m Milan Chanda <span className="wave">✳</span>
              </p>
              <h1>
                Curiosity,
                <br />
                turned into
                <br />
                <span>working code.</span>
              </h1>
              <p className="hero-description">
                Full-stack development. Real-world curiosity.
                <br />I build thoughtful web experiences and explore
                <br className="desktop-break" /> what’s possible with AI and the
                open web.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my work <ArrowDown size={17} />
                </a>
                <a
                  className="simple-link"
                  href="https://github.com/Milan8115"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="hero-proof">
                <span>React</span>
                <i />
                <span>Node.js</span>
                <i />
                <span>Python</span>
                <i />
                <span>Always learning</span>
              </div>
            </div>
            <div className="portrait-stage">
              <div className="portrait-grid" />
              <span className="portrait-index">
                PERSON BEHIND THE PIXELS / 01
              </span>
              <div className="portrait-outline" />
              <div className="portrait-frame">
                <img
                  src="./images/milan-profile.jpg"
                  alt="Milan Chanda outdoors under a blue sky"
                  width="1280"
                  height="960"
                  fetchPriority="high"
                />
                <div className="portrait-shade" />
                <div className="portrait-name">
                  <span>MILAN CHANDA</span>
                  <span>DEVELOPER & BUILDER</span>
                </div>
              </div>
              <div className="portrait-sticker">
                <Code2 size={19} />
                <span>
                  Learn. Build.
                  <br />
                  <b>Make it better.</b>
                </span>
              </div>
              <div className="hello-jp">
                <span lang="ja">こんにちは</span>
                <span>HELLO, WORLD.</span>
              </div>
              <span className="portrait-bottom">
                ROOTED IN BENGAL. OPEN TO THE WORLD. <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#work">
              <span className="scroll-indicator">
                <ArrowDown size={14} />
              </span>{" "}
              A FEW THINGS I’VE BUILT
            </a>
            <span>IDEAS → INTERFACES → IMPACT</span>
            <span className="hero-edition">PORTFOLIO / 2026</span>
          </div>
        </section>

        <section id="work" className="work section wrap">
          <div className="section-top">
            <span className="eyebrow section-label">
              <span>01</span> SELECTED WORK
            </span>
            <span className="section-aside">
              A LITTLE RANGE. A LOT OF CURIOSITY.
            </span>
          </div>
          <div className="work-heading">
            <h2>
              From “what if”
              <br />
              to <span>here it is.</span>
            </h2>
            <div
              className="project-filters"
              role="group"
              aria-label="Filter projects"
            >
              {["All work", "Web", "Blockchain"].map((f) => (
                <button
                  key={f}
                  className={filter === f ? "filter active" : "filter"}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                  {f === "All work" && <small>03</small>}
                </button>
              ))}
            </div>
          </div>
          <div className="project-list" aria-live="polite">
            {visibleProjects.map((p) => (
              <article key={p.id} className={`project project-${p.id}`}>
                <button
                  className="project-image-button"
                  onClick={() => openProject(p)}
                  aria-label={`Read about ${p.title}`}
                >
                  {p.id === "career" ? (
                    <CareerVisual />
                  ) : p.id === "energy" ? (
                    <EnergyVisual />
                  ) : (
                    <DictionaryVisual />
                  )}
                  <span className="preview-arrow">
                    <ArrowUpRight size={21} />
                  </span>
                </button>
                <div className="project-copy">
                  <div className="project-overline">
                    <span>
                      {p.n} / {p.kind}
                    </span>
                    <span>{p.category}</span>
                  </div>
                  <h3>
                    <button onClick={() => openProject(p)}>
                      {p.title}
                      <ArrowUpRight size={23} />
                    </button>
                  </h3>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <button onClick={() => openProject(p)}>
                      Behind the build <MoveRight size={16} />
                    </button>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} source on GitHub`}
                    >
                      <Github size={16} /> Source <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="work-footer">
            <span>More experiments, commits, and works in progress.</span>
            <a
              className="simple-link"
              href="https://github.com/Milan8115?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="wrap">
            <div className="section-top">
              <span className="eyebrow section-label">
                <span>02</span> A BIT ABOUT ME
              </span>
              <span className="section-aside">
                THE HUMAN SIDE OF THE STACK.
              </span>
            </div>
            <div className="about-grid">
              <div className="about-heading">
                <h2>
                  Builder first.
                  <br />
                  <span>Student, always.</span>
                </h2>
                <div className="about-symbol" aria-hidden="true">
                  ✳
                </div>
                <p className="about-caption">
                  A NEW PROBLEM IS A<br />
                  GOOD REASON TO LEARN.
                </p>
              </div>
              <div className="about-copy">
                <p className="about-lead">
                  I’m a BCA student at Brainware University, turning classroom
                  foundations into things people can actually use.
                </p>
                <p>
                  I like connecting the pieces: a thoughtful interface, the
                  logic behind it, and the data that makes it useful. My work
                  spans responsive websites, backend development, and hands-on
                  experiments with blockchain and AI.
                </p>
                <p>
                  Outside the editor, I’m learning Japanese and showing up at
                  developer communities in Kolkata. Different languages,
                  different tools — the same curiosity.
                </p>
                <div className="about-facts">
                  <div>
                    <span>EDUCATION</span>
                    <strong>BCA · Brainware University</strong>
                  </div>
                  <div>
                    <span>BASED IN</span>
                    <strong>West Bengal, India</strong>
                  </div>
                  <div>
                    <span>EXPLORING</span>
                    <strong>AI agents · Japanese · Web3</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="toolkit">
              <div className="toolkit-title">
                <span className="eyebrow">MY EVERYDAY TOOLKIT</span>
                <span>Tools chosen for the thing I’m building.</span>
              </div>
              <div className="toolkit-row">
                <span className="toolkit-icon">
                  <Braces size={21} />
                </span>
                <h3>Shape the experience</h3>
                <p>
                  HTML & CSS <i /> JavaScript <i /> React <i /> Tailwind CSS
                </p>
                <span className="toolkit-number">01</span>
              </div>
              <div className="toolkit-row">
                <span className="toolkit-icon">
                  <Code2 size={21} />
                </span>
                <h3>Connect the pieces</h3>
                <p>
                  Node.js <i /> Python <i /> SQL <i /> REST APIs
                </p>
                <span className="toolkit-number">02</span>
              </div>
              <div className="toolkit-row">
                <span className="toolkit-icon">
                  <Globe2 size={21} />
                </span>
                <h3>Keep exploring</h3>
                <p>
                  Git & GitHub <i /> Java <i /> Stellar / Soroban
                </p>
                <span className="toolkit-number">03</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience section wrap">
          <div className="section-top">
            <span className="eyebrow section-label">
              <span>03</span> EXPERIENCE & EXPLORATION
            </span>
            <span className="section-aside">PROGRESS HAPPENS BY DOING.</span>
          </div>
          <div className="experience-heading">
            <h2>
              Beyond
              <br />
              <span>the classroom.</span>
            </h2>
            <p>
              Learning from real projects,
              <br />
              new people, and unfamiliar territory.
            </p>
          </div>
          <div className="experience-grid">
            <div className="timeline">
              <article>
                <span className="timeline-dot" />
                <div className="timeline-meta">
                  <span>FEB — JUL 2026</span>
                  <span>HYBRID · KOLKATA</span>
                </div>
                <h3>Frontend Developer Intern</h3>
                <h4>Gameonix Esports & Gaming</h4>
                <p>
                  Built responsive career portal pages, search and filtering
                  interactions, and frontend-to-backend connections.
                </p>
                <a
                  href="https://github.com/Milan8115/career-connect-portal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the project <ArrowUpRight size={14} />
                </a>
              </article>
              <article>
                <span className="timeline-dot" />
                <div className="timeline-meta">
                  <span>JUL — AUG 2026</span>
                  <span>HEALTHCARE PROJECT</span>
                </div>
                <h3>Backend Development</h3>
                <h4>Vernacular Healthcare Diagnostics</h4>
                <p>
                  Contributed backend work to a multilingual healthcare project,
                  exploring how technology can make information more accessible.
                </p>
              </article>
            </div>
            <aside className="field-notes">
              <div className="field-header">
                <span>ALWAYS IN THE LEARNING LOOP</span>
                <span>↗</span>
              </div>
              <div className="field-entry">
                <span className="field-number">01</span>
                <div>
                  <h3>Build on Stellar</h3>
                  <p>
                    From a bootcamp at JU Salt Lake to a Soroban energy trading
                    contract.
                  </p>
                </div>
                <Zap size={18} />
              </div>
              <div className="field-entry">
                <span className="field-number">02</span>
                <div>
                  <h3>Developer communities</h3>
                  <p>
                    New perspectives through GDG events and Build with AI in
                    Kolkata.
                  </p>
                </div>
                <Code2 size={18} />
              </div>
              <div className="field-entry">
                <span className="field-number">03</span>
                <div>
                  <h3>Japanese, one step at a time</h3>
                  <p>
                    Building another way to connect with the world. Currently
                    studying at N5 level.
                  </p>
                </div>
                <span className="jp-icon" lang="ja">
                  あ
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/milan-chanda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow the journey <ArrowUpRight size={16} />
              </a>
            </aside>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <div className="section-top">
              <span className="eyebrow section-label">
                <span>04</span> START A CONVERSATION
              </span>
              <span className="contact-status">
                <i /> OPEN TO WHAT’S NEXT
              </span>
            </div>
            <div className="contact-heading">
              <h2>
                Good things start
                <br />
                with a <span>hello.</span>
              </h2>
              <a
                href="mailto:milanchanda80@gmail.com"
                className="contact-big-arrow"
                aria-label="Email Milan"
              >
                <ArrowUpRight />
              </a>
            </div>
            <div className="contact-bottom">
              <div>
                <p>An opportunity, a project, or an interesting idea?</p>
                <div className="email-line">
                  <a href="mailto:milanchanda80@gmail.com">
                    milanchanda80@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    aria-label={copied ? "Email copied" : "Copy email address"}
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
                <span className="copy-status" role="status">
                  {copied
                    ? "Email copied. Say hello!"
                    : copyError
                      ? "Select the email address to copy it, or click it to send a message."
                      : ""}
                </span>
              </div>
              <div className="contact-socials">
                <a
                  href="https://github.com/Milan8115"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} /> GitHub <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/milan-chanda/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <a className="wordmark" href="#home" aria-label="Back to home">
          m<span>c</span>
          <b>.</b>
        </a>
        <span>© 2026 Milan Chanda. Built with curiosity.</span>
        <a href="#home">
          Back to top <ArrowUp size={14} />
        </a>
      </footer>

      <dialog
        ref={dialog}
        className="project-dialog"
        onCancel={(e) => {
          e.preventDefault();
          closeProject();
        }}
        onClick={(e) => {
          if (e.target === dialog.current) closeProject();
        }}
        aria-labelledby="dialog-title"
      >
        {activeProject && (
          <div className="dialog-inner">
            <div className="dialog-top">
              <span className="eyebrow">
                {activeProject.n} / BEHIND THE BUILD
              </span>
              <button
                onClick={closeProject}
                className="dialog-close"
                aria-label="Close project details"
              >
                <X size={23} />
              </button>
            </div>
            <h2 id="dialog-title">{activeProject.title}</h2>
            <p className="dialog-subtitle">{activeProject.subtitle}</p>
            <div className="tags">
              {activeProject.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="dialog-overview">{activeProject.overview}</p>
            <h3>What’s inside</h3>
            <ul>
              {activeProject.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="project-note">
              <span>PROJECT CONTEXT</span>
              <p>{activeProject.note}</p>
            </div>
            <a
              className="button button-primary"
              href={activeProject.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} /> Explore source <ExternalLink size={15} />
            </a>
          </div>
        )}
      </dialog>
    </>
  );
}
