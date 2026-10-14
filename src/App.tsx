import { FormEvent, ReactNode, useState } from "react";
import codeSyncImage from "./assets/codesync.png";
import energyDashboardImage from "./assets/energy-dashboard.png";
import ticTacToeImage from "./assets/tic-tac-toe.png";

type IconName =
  | "arrow"
  | "braces"
  | "check"
  | "code"
  | "database"
  | "document"
  | "download"
  | "email"
  | "external"
  | "github"
  | "linkedin"
  | "menu"
  | "server"
  | "terminal"
  | "tools"
  | "x";

const links = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "mailto:singhshteya987@gmail.com",
  resume: "#resume",
};

const projects = [
  {
    number: "01",
    title: "Tic Tac Toe",
    description:
      "My first web development project—a classic two-player game built to practice DOM manipulation, game logic, and responsive styling.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: ticTacToeImage,
    imagePosition: "center",
    projectUrl: "https://tic-tac-toe-sable-ten-20.vercel.app/",
    githubUrl: "https://github.com/singhshteya987-arch/Tic-Tac-Toe",
  },
  {
    number: "02",
    title: "CodeSync",
    description:
      "A collaborative code editor concept designed to help multiple users work together on code in a shared environment.",
    tags: ["Java", "Spring Boot", "React", "WebSockets"],
    image: codeSyncImage,
    imagePosition: "left",
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    number: "03",
    title: "Energy Management Dashboard",
    description:
      "A dashboard prototype for monitoring energy generation, battery status, power consumption, and energy forecasts.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: energyDashboardImage,
    imagePosition: "center",
    projectUrl: "#",
    githubUrl: "https://github.com/chetanchaure07/SIH-2026",
  },
];

const skillGroups: { title: string; icon: IconName; skills: string[] }[] = [
  { title: "Programming Languages", icon: "code", skills: ["Java", "C", "C++"] },
  {
    title: "Web Technologies",
    icon: "braces",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Core Computer Science",
    icon: "server",
    skills: ["Data Structures", "Algorithms", "OOP"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MySQL"],
  },
  {
    title: "Developer Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    braces: (
      <>
        <path d="m8 3-4 9 4 9" />
        <path d="m16 3 4 9-4 9" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    code: (
      <>
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    document: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5" />
        <path d="M9 13h6M9 17h6" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5" />
        <path d="m10 14 10-10" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
    github: (
      <path d="M15 22v-4c.1-1-.4-2-1-2.6 3.3-.4 6.8-1.6 6.8-7.4 0-1.6-.6-3-1.6-4.1.2-.5.7-1.9-.2-4-1.3-.4-4.4 1.6-4.4 1.6a15 15 0 0 0-8 0S3.5-.5 2.2 0c-.9 2-.4 3.5-.2 4C1 5 0 6.4 0 8c0 5.8 3.5 7 6.8 7.4-.5.5-.9 1.2-1 2-.9.4-3.2 1.1-4.6-1.3 0 0-.8-1.5-2.4-1.6 0 0-1.5 0-.1 1 0 0 1 .5 1.7 2.2 0 0 .9 2.8 5.3 1.9V22" />
    ),
    linkedin: (
      <>
        <path d="M7 9v11M3.5 9v11M5.25 4.5a1.75 1.75 0 1 0 0 .01" />
        <path d="M11 20v-6.4c0-2.2 1.4-4.1 3.7-4.1 2.2 0 3.3 1.5 3.3 4V20" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    server: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
    terminal: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3M13 15h4" />
      </>
    ),
    tools: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5L20 16.4a2.5 2.5 0 0 1-3.6 3.6l-7.7-7.7" />
        <path d="m5 13-3 3 4 4 3-3" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  );
}

function Button({
  href,
  children,
  variant = "primary",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  icon?: IconName;
}) {
  return (
    <a className={`button button--${variant}`} href={href}>
      <span>{children}</span>
      {icon && <Icon name={icon} size={18} />}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links ${compact ? "social-links--compact" : ""}`}>
      <a aria-label="GitHub profile" href="https://github.com/singhshteya987-arch" target="_blank" rel="noreferrer">
        <Icon name="github" />
      </a>
      <a aria-label="LinkedIn profile" href="https://linkedin.com/in/singhshteya987" target="_blank" rel="noreferrer">
        <Icon name="linkedin" />
      </a>
      {!compact && (
        <a aria-label="Send email" href="mailto:singhshteya987@gmail.com" target="_blank" rel="noreferrer">
          <Icon name="email" />
        </a>
      )}
    </div>
  );
}

function DeveloperVisual() {
  return (
    <div className="developer-visual" aria-label="Abstract code editor illustration">
      <div className="visual-orb" />
      <div className="code-window">
        <div className="window-bar">
          <div className="window-dots"><span /><span /><span /></div>
          <span>Shreya.java</span>
          <Icon name="code" size={16} />
        </div>
        <div className="code-content">
          <div><span className="line-num">01</span><span className="syntax-blue">public class</span> <span className="syntax-light">Developer</span> {"{"}</div>
          <div><span className="line-num">02</span>&nbsp;&nbsp;<span className="syntax-blue">String</span> focus = <span className="syntax-green">"DSA"</span>;</div>
          <div><span className="line-num">03</span>&nbsp;&nbsp;<span className="syntax-blue">String</span> language = <span className="syntax-green">"Java"</span>;</div>
          <div><span className="line-num">04</span>&nbsp;&nbsp;<span className="syntax-purple">void</span> build() {"{"}</div>
          <div><span className="line-num">05</span>&nbsp;&nbsp;&nbsp;&nbsp;learn(); solve(); create();</div>
          <div><span className="line-num">06</span>&nbsp;&nbsp;{"}"}</div>
          <div><span className="line-num">07</span>{"}"}</div>
        </div>
        <div className="code-status">
          <span><i /> Ready to build</span>
          <span>Java 21</span>
        </div>
      </div>
      <div className="floating-card floating-card--top">
        <div className="float-icon"><Icon name="server" size={18} /></div>
        <div><span>Current focus</span><strong>Data Structures & Algorithms</strong></div>
      </div>
      <div className="floating-card floating-card--bottom">
        <Icon name="terminal" size={19} />
        <span>git commit -m "keep learning"</span>
      </div>
      <div className="visual-grid" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const navItems = ["Home", "About", "Skills", "Projects", "Education", "Resume", "Contact"];

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="logo" href="#home" aria-label="Shreya Singh home">
            <span>SS</span>
            <strong>SHREYA SINGH</strong>
          </a>
          <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <Button href="#contact">Let's Connect</Button>
          </div>
          <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-glow hero-glow--one" />
          <div className="hero-glow hero-glow--two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-label"><span>&gt;_</span> HELLO, WORLD! <em>👋</em></div>
              <h1>Hi, I'm <span>Shreya Singh.</span></h1>
              <h3>Aspiring Software Developer <i /> Java & DSA Learner</h3>
              <p>
                I'm a Computer Science Engineering student passionate about programming,
                problem-solving, and building practical software solutions. I enjoy learning
                new technologies and turning ideas into working applications.
              </p>
              <div className="hero-actions">
                <Button href="#projects" icon="arrow">Explore My Projects</Button>
                <Button href="https://drive.google.com/file/d/1FhjwhFwi3gB8z50YnUjnw3V4RW024Q20/view?usp=drivesdk" variant="secondary" icon="download" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </Button>
              </div>
              <div className="hero-socials">
                <SocialLinks />
                <span />
                <p>Find me online</p>
              </div>
            </div>
            <DeveloperVisual />
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span /></a>
        </section>

        <section className="section about" id="about">
          <div className="container">
            <div className="about-grid">
              <div>
                <SectionHeading eyebrow="ABOUT ME" title="A Little About Me" />
                <div className="about-copy">
                  <p>
                    I'm a third-year <strong>Computer Science Engineering</strong> student
                    driven by curiosity and a genuine enthusiasm for building software that
                    solves real problems.
                  </p>
                  <p>
                    My journey began with <strong>Java programming</strong>, where I developed
                    a strong foundation in object-oriented concepts and logical thinking. I'm
                    currently sharpening my problem-solving skills through data structures
                    and algorithms through consistent practice and problem-solving.
                  </p>
                  <p>
                    My goal is to become a skilled software developer who writes thoughtful,
                    reliable code and contributes meaningfully to impactful products.
                  </p>
                </div>
                <div className="about-note"><Icon name="terminal" /><span>Currently focusing on</span><strong>Data Structures & Algorithms</strong></div>
              </div>
              <div className="about-cards">
                {[
                  ["01", "code", "Strong foundation in Java", "Object-oriented programming, core concepts, and clean code practices."],
                  ["02", "braces", "Learning DSA", "Building structured problem-solving skills with data structures and algorithms."],
                  ["03", "tools", "Creating practical projects", "Turning ideas into functional applications through hands-on development."],
                ].map(([number, icon, title, copy]) => (
                  <article className="about-card" key={number}>
                    <span className="card-number">{number}</span>
                    <div className="about-card-icon"><Icon name={icon as IconName} /></div>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                    <Icon name="arrow" size={18} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title="Technologies I Work With"
              copy="A focused toolkit I'm actively learning and using to build reliable, modern software."
              align="center"
            />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <div className="skill-icon"><Icon name={group.icon} /></div>
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="container">
            <div className="projects-heading">
              <SectionHeading
                eyebrow="SELECTED WORK"
                title="Projects I've Worked On"
                copy="Practical projects that reflect my learning journey, problem-solving, and growing development skills."
              />
              <a className="text-link" href="https://github.com/singhshteya987-arch" target="_blank" rel="noopener noreferrer">
                View GitHub profile <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className={`project-card ${index % 2 ? "project-card--reverse" : ""}`} key={project.title}>
                  <div className="project-visual">
                    <span className="project-number">{project.number}</span>
                    <img
                      className={`project-preview project-screenshot ${
                        project.imagePosition === "left" ? "project-screenshot--left" : ""
                      }`}
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                    />
                  </div>
                  <div className="project-info">
                    <span className="project-kicker">FEATURED PROJECT</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="project-actions">
                      <Button href={project.projectUrl} icon="external" target="_blank" rel="noopener noreferrer">
                        View Project
                      </Button>
                      <Button href={project.githubUrl} variant="text" icon="github" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education" id="education">
          <div className="container">
            <SectionHeading eyebrow="ACADEMIC JOURNEY" title="Education" align="center" />
            <div className="education-card">
              <div className="education-mark"><Icon name="document" size={28} /><span /></div>
              <div className="education-main">
                <div className="education-top"><span>BACHELOR'S DEGREE</span><i>Currently pursuing</i></div>
                <h3>B.Tech in Computer Science Engineering</h3>
                <p>[Bansal Institute of Science and Technology]</p>
                <div className="education-meta">
                  <div><span>EXPECTED GRADUATION</span><strong>[2028]</strong></div>
                  <div><span>CURRENT CGPA</span><strong>[7.74]</strong></div>
                  <div><span>YEAR OF STUDY</span><strong>3rd Year</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section resume" id="resume">
          <div className="container">
            <div className="resume-card">
              <div className="resume-grid" />
              <div className="resume-icon"><Icon name="document" size={38} /><span>PDF</span></div>
              <div className="resume-copy">
                <span>MY RESUME</span>
                <h2>Want to Know More About Me?</h2>
                <p>Explore my resume to learn more about my technical skills, projects, and learning journey.</p>
              </div>
              <Button href="https://drive.google.com/file/d/1FhjwhFwi3gB8z50YnUjnw3V4RW024Q20/view?usp=drivesdk" variant="secondary" icon="download">Download My Resume</Button>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <SectionHeading eyebrow="GET IN TOUCH" title="Let's Connect" />
              <p className="contact-lead">I'm open to software development internship opportunities, collaborative projects, and opportunities to learn and grow.</p>
              <div className="contact-methods">
                <a href="mailto:singhshteya987@gmail.com">
                  <span><Icon name="email" /></span>
                  <div><small>EMAIL ME</small><strong>singhshteya987@gmail.com</strong></div>
                </a>
                <a href="https://www.linkedin.com/in/shreya-singh-b82171330/" target="_blank" rel="noopener noreferrer">
                  <span><Icon name="linkedin" /></span>
                  <div><small>CONNECT ON</small><strong>LinkedIn</strong></div>
                  <Icon name="arrow" size={18} />
                </a>
                <a href="https://github.com/singhshteya987-arch" target="_blank" rel="noopener noreferrer">
                  <span><Icon name="github" /></span>
                  <div><small>FOLLOW ON</small><strong>GitHub</strong></div>
                  <Icon name="arrow" size={18} />
                </a>
              </div>
              <div className="availability"><i /><span>Available for internship opportunities</span></div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Full Name<input required name="name" placeholder="Your name" /></label>
                <label>Email Address<input required name="email" type="email" placeholder="you@example.com" /></label>
              </div>
              <label>Subject<input required name="subject" placeholder="What would you like to discuss?" /></label>
              <label>Message<textarea required name="message" rows={6} placeholder="Tell me about the opportunity or project..." /></label>
              <button className="button button--primary submit-button" type="submit"><span>Send Message</span><Icon name="arrow" size={18} /></button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand"><a className="logo" href="#home"><span>SS</span><strong>SHREYA SINGH</strong></a><p>Building my skills, one project at a time.</p></div>
          <div className="footer-links">{navItems.slice(0, 6).map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</div>
          <SocialLinks compact />
        </div>
        <div className="container footer-bottom"><span>© 2025 Shreya Singh. All rights reserved.</span><span>Designed & built with care and clean code.</span></div>
      </footer>
    </div>
  );
}

export default App;
