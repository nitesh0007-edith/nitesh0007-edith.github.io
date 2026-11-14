"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PersonalPhoto, PhotoFrame } from "@/components/PersonalPhoto";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Bot,
  Calculator,
  Dna,
  Grid,
  Mic,
  RefreshCw,
  Scan,
  Train,
  TrendingUp,
  Video,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Search,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import {
  awards,
  caseFiles,
  experiences,
  modules,
  projectCategories,
  type ProjectCategory,
  type Project,
} from "@/lib/portfolio";

const EMAIL = "niteshranjansingh85389@gmail.com";
const GITHUB = "https://github.com/nitesh0007-edith";
const LINKEDIN = "https://www.linkedin.com/in/nitesh0007/";

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number} /</span> {children}
    </div>
  );
}

function SocialLinks({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`social-links ${dark ? "on-dark" : ""}`}>
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
        aria-label="Nitesh on LinkedIn"
      >
        <Linkedin size={22} />
      </a>
      <a
        href={GITHUB}
        target="_blank"
        rel="noreferrer"
        aria-label="Nitesh on GitHub"
      >
        <Github size={22} />
      </a>
      <a href={`mailto:${EMAIL}`} aria-label="Email Nitesh">
        <Mail size={22} />
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-topline">
        <span>
          <i /> GLASGOW, SCOTLAND
        </span>
        <span>DATA. CODE. A LITTLE CURIOSITY.</span>
        <span>PORTFOLIO / 2026</span>
      </div>
      <div className="hero-title-wrap">
        <div className="hero-disciplines">
          <span>DATA ENGINEER</span>
          <span>AI BUILDER</span>
          <span>PROBLEM SOLVER</span>
        </div>
        <h1>
          NITESH
          <span className="sr-only"> Ranjan Singh — Data & AI Engineer</span>
        </h1>
      </div>
      <div className="hero-scribble" aria-hidden="true">
        Always building
        <br />
        something new.
        <ArrowDownRight size={46} strokeWidth={1.4} />
      </div>
      <div className="hero-character">
        <Image
          src="/images/hero-manga.webp"
          alt="Manga illustration of Nitesh with curly hair, a beard and a laptop"
          width={1086}
          height={1448}
          priority
          sizes="(max-width: 650px) 90vw, 52vw"
        />
      </div>
      <a href="#about" className="hero-bubble">
        Hey, I’m Nitesh.
        <br />
        Welcome to my corner
        <br />
        of the internet. <span>✦</span>
      </a>
      <div className="hero-bottom">
        <div className="hero-intro">
          <span className="eyebrow">NITESH RANJAN SINGH</span>
          <p>
            I turn messy data into
            <br />
            systems that <em>make sense.</em>
          </p>
          <div className="hero-actions">
            <a className="sketch-button orange" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <SocialLinks />
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={19} />
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-shell about-grid">
        <div className="about-visual">
          <span className="about-word" aria-hidden="true">
            CURIOUS
            <br />
            BY DESIGN.
          </span>
          <div className="portrait-frame">
            <PersonalPhoto
              photo="portrait"
              sizes="(max-width: 700px) 85vw, 38vw"
            />
            <span className="photo-caption">Me, between ideas. ↗</span>
          </div>
          <span className="portrait-sticker">
            <Sparkles size={18} /> BUILT ON CURIOSITY
          </span>
        </div>
        <div className="about-copy">
          <SectionLabel number="01">
            THE PERSON BEHIND THE PIPELINES
          </SectionLabel>
          <h2>
            Serious about data.
            <br />
            <span>
              Playful about <br />
              possibilities.
            </span>
          </h2>
          <p className="lead">
            Hi, I’m Nitesh — a Data & AI Engineer who likes making complicated
            things useful.
          </p>
          <p>
            I spent 3+ years at IQVIA and Axtria building data platforms for
            global pharma. Think 10M-record pipelines, reliable analytics, and
            tools that teams actually use.
          </p>
          <p>
            That curiosity brought me to the University of Glasgow for an MSc in
            Data Science. Now I’m exploring grounded AI: hybrid retrieval,
            fine-tuned LLMs, and agents with evidence behind their answers.
          </p>
          <div className="about-footnote">
            <MapPin size={17} />
            <span>Based in Glasgow · Open to opportunities across the UK</span>
          </div>
          <a
            className="text-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            The full story, on paper <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Recognition() {
  const featured = [awards[1], awards[2], awards[3]];
  return (
    <section
      className="recognition-section"
      aria-labelledby="recognition-title"
    >
      <div className="section-shell">
        <div className="recognition-heading">
          <SectionLabel number="02">A FEW HIGHLIGHTS</SectionLabel>
          <h2 id="recognition-title">
            Good work.
            <br />
            <span>Great company.</span>
          </h2>
          <p>
            Building, competing, and learning with people who push me further.
          </p>
        </div>
        <div className="recognition-layout">
          <PhotoFrame
            photo="codeolympics"
            label="CODEOLYMPICS / 2026"
            caption="A good day, shared with good company."
            sizes="(max-width: 800px) 90vw, 55vw"
            className="medal-photo"
          />
          <div className="award-grid award-grid-with-photo">
            {featured.map((award, index) => (
              <article key={award.title} className="award-card">
                <div className="award-top">
                  <Trophy size={27} strokeWidth={1.5} />
                  <span>
                    {award.year} / 0{index + 1}
                  </span>
                </div>
                <h3>{award.title}</h3>
                <p>{award.detail}</p>
                <span className="award-mark" aria-hidden="true">
                  {index === 0 ? "2ND" : index === 1 ? "RUNNER-UP" : "GOLD"}
                </span>
              </article>
            ))}
          </div>
        </div>
        <a className="text-link" href="#education">
          Scholarships, medals & more <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

const toolGroups = [
  {
    title: "DATA ENGINEERING",
    icon: Database,
    tools: [
      "Python",
      "SQL",
      "PySpark",
      "Azure",
      "Databricks",
      "ADF",
      "Delta Lake",
    ],
  },
  {
    title: "AI & RETRIEVAL",
    icon: Sparkles,
    tools: [
      "PyTorch",
      "LangGraph",
      "Hybrid RAG",
      "LLM fine-tuning",
      "FAISS",
      "MCP",
    ],
  },
  {
    title: "BUILD & SHIP",
    icon: Code2,
    tools: [
      "FastAPI",
      "Next.js",
      "Docker",
      "Git",
      "GitHub Actions",
      "Streamlit",
    ],
  },
];
export function Toolkit() {
  return (
    <section id="skills" className="toolkit-section">
      <div className="section-shell">
        <div className="toolkit-heading">
          <div>
            <SectionLabel number="03">TOOLS OF THE TRADE</SectionLabel>
            <h2>
              THE STACK<span>_</span>
            </h2>
          </div>
          <p>
            From the first SQL query
            <br />
            to the last deployment.
          </p>
        </div>
        <div className="tool-groups">
          {toolGroups.map(({ title, icon: Icon, tools }) => (
            <div className="tool-group" key={title}>
              <h3>
                <Icon size={18} />
                {title}
              </h3>
              <div>
                {tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const [selected, setSelected] = useState(0);
  const role = experiences[selected];
  return (
    <section id="experience" className="experience-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <SectionLabel number="04">LEARNING BY DOING</SectionLabel>
            <h2>
              REAL WORK.
              <br />
              <span>REAL IMPACT.</span>
            </h2>
          </div>
          <p>
            From regulated pharma data
            <br />
            to a new chapter in Scotland.
          </p>
        </div>
        <div className="experience-layout">
          <div
            className="role-list"
            role="tablist"
            aria-label="Career experience"
            aria-orientation="vertical"
          >
            {experiences.map((item, index) => (
              <button
                key={item.id}
                role="tab"
                id={`role-tab-${index}`}
                aria-selected={index === selected}
                aria-controls="role-detail"
                tabIndex={index === selected ? 0 : -1}
                className={selected === index ? "selected" : ""}
                onClick={() => setSelected(index)}
                onKeyDown={(e) => {
                  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key))
                    return;
                  e.preventDefault();
                  const next =
                    e.key === "Home"
                      ? 0
                      : e.key === "End"
                        ? experiences.length - 1
                        : (selected +
                            (e.key === "ArrowDown" ? 1 : -1) +
                            experiences.length) %
                          experiences.length;
                  setSelected(next);
                  document.getElementById(`role-tab-${next}`)?.focus();
                }}
              >
                <span className="role-index">0{index + 1}</span>
                <span>
                  <strong>{item.company.split(" · ")[0]}</strong>
                  <small>{item.title}</small>
                </span>
                <ArrowUpRight size={20} />
              </button>
            ))}
          </div>
          <article
            id="role-detail"
            role="tabpanel"
            aria-labelledby={`role-tab-${selected}`}
            className="role-detail"
            tabIndex={0}
          >
            <div className="role-meta">
              <span>{role.period}</span>
              <MapPin size={13} />
              <span>{role.location.split(" · ")[0]}</span>
            </div>
            <h3>{role.title}</h3>
            <p className="role-company">{role.company}</p>
            <p>{role.brief}</p>
            <ul>
              {role.contributions.map((item) => (
                <li key={item}>
                  <ArrowRight size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {role.results.length > 0 && (
              <div className="role-results">
                {role.results.map((result) => (
                  <div key={result.metric}>
                    <strong>{result.metric}</strong>
                    <span>{result.label}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="role-tools">
              {role.tech.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        </div>
        <div className="impact-strip">
          <div>
            <strong>3+</strong>
            <span>YEARS IN INDUSTRY</span>
          </div>
          <div>
            <strong>10M+</strong>
            <span>RECORDS PER BATCH</span>
          </div>
          <div>
            <strong>200+</strong>
            <span>STAKEHOLDERS SERVED</span>
          </div>
          <div>
            <strong>2nd</strong>
            <span>KAGGLE · TEAM HYPERX</span>
          </div>
        </div>
      </div>
    </section>
  );
}

type ProjectFilter = "All work" | ProjectCategory;
const categories: ProjectFilter[] = ["All work", ...projectCategories];
const newProjectArt: Partial<
  Record<number, { icon: typeof Code2; label: string }>
> = {
  13: { icon: Mic, label: "speech → context → answer" },
  14: { icon: Video, label: "explain it. animate it." },
  15: { icon: Train, label: "feed → stream → lakehouse" },
  16: { icon: Scan, label: "one passage. eighteen models." },
  17: { icon: TrendingUp, label: "reconstruct / forecast / estimate" },
  18: { icon: Grid, label: "1,000 puzzles. every square counts." },
  19: { icon: Bot, label: "inspect → repair → verify" },
  20: { icon: TrendingUp, label: "data → factors → simulation" },
  21: { icon: Calculator, label: "five modules. one research lab." },
  22: { icon: RefreshCw, label: "experiment → measure → repeat" },
  23: { icon: Dna, label: "harmonise → estimate → scrutinise" },
};
function projectStatusClass(status: Project["status"]) {
  if (status === "DESIGNED") return "project-status planned";
  if (status === "PROTOTYPE") return "project-status prototype";
  if (status === "IN PROGRESS") return "project-status ongoing";
  return "project-status";
}
function ProjectVisual({ project }: { project: Project }) {
  const { id } = project;
  const art = newProjectArt[id];
  const ArtIcon = art?.icon;
  if (id === 6) {
    return (
      <div
        className="project-art art-6 research-project-photo"
        aria-hidden="true"
      >
        <PersonalPhoto
          photo="dissertation"
          sizes="(max-width: 650px) 90vw, 33vw"
        />
        <span className="art-caption">
          MSC RESEARCH / THE FINISHED DISSERTATION
        </span>
        <span className="art-corner">↗</span>
      </div>
    );
  }
  return (
    <div className={`project-art art-${id}`} aria-hidden="true">
      <span className="art-grid" />
      <span className="art-caption">{project.discipline}</span>
      {ArtIcon && art ? (
        <div className="new-project-art">
          <ArtIcon size={64} strokeWidth={1.3} />
          <span>{art.label}</span>
        </div>
      ) : id === 10 ? (
        <div className="sentinel-art">
          <Database size={38} />
          <span className="signal-line" />
          <div>
            <Check size={25} />
          </div>
        </div>
      ) : id === 11 ? (
        <div className="luma-art">
          <span>learn</span>
          <Sparkles size={64} />
          <span>discover</span>
        </div>
      ) : id === 12 ? (
        <div className="document-art">
          <FileText size={82} strokeWidth={1} />
          <span>
            source ✓<br />
            evidence ✓<br />
            review ✓
          </span>
        </div>
      ) : (
        <div className="generic-art">
          {id === 9 ? (
            <Trophy size={78} strokeWidth={1.2} />
          ) : id === 6 ? (
            <GraduationCap size={78} strokeWidth={1.2} />
          ) : (
            <Code2 size={78} strokeWidth={1.2} />
          )}
          <span>{String(id).padStart(2, "0")}</span>
        </div>
      )}
      <span className="art-corner">↗</span>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All work");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const updateHashOnClose = useRef(false);
  useEffect(() => {
    const readHash = () => {
      const match = window.location.hash.match(/^#project-(\d+)$/);
      const project = match && caseFiles.find((p) => p.id === Number(match[1]));
      if (project) {
        previousFocus.current = document.activeElement as HTMLElement;
        updateHashOnClose.current = true;
        setSelected(project);
      } else setSelected(null);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);
  useEffect(() => {
    if (!selected || !dialog.current) return;
    dialog.current.showModal();
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.current?.close();
      document.body.style.overflow = before;
      previousFocus.current?.focus();
    };
  }, [selected]);
  const open = (project: Project) => {
    previousFocus.current = document.activeElement as HTMLElement;
    updateHashOnClose.current = true;
    window.history.replaceState(null, "", `#project-${project.id}`);
    setSelected(project);
  };
  const close = () => {
    setSelected(null);
    if (updateHashOnClose.current)
      window.history.replaceState(null, "", "#projects");
  };
  const matching = caseFiles.filter(
    (p) =>
      (filter === "All work" || p.categories.includes(filter)) &&
      `${p.title} ${p.brief} ${p.tools.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const visible =
    expanded || filter !== "All work" || query
      ? matching
      : matching.filter((p) => p.featured);
  return (
    <section id="projects" className="projects-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <SectionLabel number="05">LESS TALK. MORE BUILDING.</SectionLabel>
            <h2>
              SELECTED
              <br />
              <span>PROJECTS.</span>
            </h2>
          </div>
          <div className="projects-note">
            Ideas made real.
            <br />
            <span>Click a project to go deeper.</span>
            <ArrowDownRight size={32} />
          </div>
        </div>
        <div className="project-controls">
          <div className="project-filters" aria-label="Project category">
            {categories.map((category) => (
              <button
                key={category}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="project-search">
            <Search size={16} />
            <span className="sr-only">Search projects or tools</span>
            <input
              type="search"
              placeholder="Find a project or tool"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        <p className="result-count" aria-live="polite">
          {visible.length} / {matching.length} projects
          {query && ` matching “${query}”`}
        </p>
        <div className="project-grid">
          {visible.map((project) => (
            <button
              className="project-card"
              key={project.id}
              onClick={() => open(project)}
              aria-label={`Explore ${project.title}`}
            >
              <ProjectVisual project={project} />
              <div className="project-card-body">
                <div className="project-card-meta">
                  <span>{project.discipline}</span>
                  <span className={projectStatusClass(project.status)}>
                    {project.status}
                  </span>
                </div>
                <h3>
                  {project.displayTitle}
                  <ArrowUpRight size={24} />
                </h3>
                <p>{project.brief}</p>
                <div className="project-tags">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
        {matching.length === 0 && (
          <div className="no-results">
            No projects match that search. Try “Python”, “RAG”, or another
            category.
          </div>
        )}
        <div className="projects-bottom">
          {filter === "All work" && !query && (
            <button
              className="sketch-button"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded
                ? "Show selected projects"
                : `Explore all ${caseFiles.length} projects`}
              <ArrowDown size={16} />
            </button>
          )}
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            <Github size={18} /> More on GitHub <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      {selected && (
        <dialog
          ref={dialog}
          className="project-dialog"
          aria-labelledby="project-dialog-title"
          onCancel={(e) => {
            e.preventDefault();
            close();
          }}
          onClick={(e) => {
            if (e.target === dialog.current) close();
          }}
        >
          <div className="dialog-inner">
            <div className="dialog-top">
              <span>PROJECT / {String(selected.id).padStart(2, "0")}</span>
              <button
                onClick={close}
                aria-label="Close project details"
                autoFocus
              >
                <X size={24} />
              </button>
            </div>
            <span className={projectStatusClass(selected.status)}>
              {selected.status}
            </span>
            <h2 id="project-dialog-title">{selected.title}</h2>
            <p className="dialog-brief">{selected.brief}</p>
            <h3>THE APPROACH</h3>
            <ol>
              {selected.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <h3>BUILT WITH</h3>
            <div className="project-tags">
              {selected.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
            <div className="project-impact">
              <Check size={20} />
              <p>{selected.impact}</p>
            </div>
            <div className="dialog-links">
              {selected.link && (
                <a
                  className="sketch-button orange"
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {selected.link.includes("kaggle")
                    ? "View competition"
                    : selected.link.includes("github")
                      ? "View code"
                      : "Try live demo"}
                  <ExternalLink size={16} />
                </a>
              )}
              {selected.repo && (
                <a
                  className="sketch-button"
                  href={selected.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  View code
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-shell">
        <SectionLabel number="06">NEVER DONE LEARNING</SectionLabel>
        <div className="education-grid">
          <div>
            <h2>
              STAY
              <br />
              <span>CURIOUS.</span>
            </h2>
            <div className="degree">
              <GraduationCap size={28} />
              <div>
                <h3>MSc Data Science</h3>
                <p>University of Glasgow · 2025–2026</p>
                <span className="scholarship">£10,000 Excellence Scholar</span>
              </div>
            </div>
            <p className="education-description">
              Researching provider fairness in multi-stakeholder recommendation:
              fairness-aware training, exposure-aware re-ranking, and grounded
              explanations.
            </p>
            <div className="project-tags">
              {modules.map((module) => (
                <span key={module}>{module}</span>
              ))}
            </div>
            <a
              className="text-link"
              href="https://github.com/nitesh0007-edith/UofGMScDS"
              target="_blank"
              rel="noreferrer"
            >
              Notes from the journey <ArrowUpRight size={17} />
            </a>
            <div className="previous-degree">
              <h3>B.Tech Computer Science Engineering</h3>
              <p>UPES, India · Jun 2018 – May 2022</p>
              <p>
                Built Digi-Attendance, a facial-recognition attendance app using
                Python, OpenCV, face_recognition and PyQt5.
              </p>
            </div>
          </div>
          <div className="award-list">
            <h3>
              THE TROPHY SHELF <Trophy size={20} />
            </h3>
            {awards.map((award) => (
              <div key={award.title}>
                <span>{award.year}</span>
                <p>
                  {award.link ? (
                    <a href={award.link} target="_blank" rel="noreferrer">
                      {award.title} ↗
                    </a>
                  ) : (
                    award.title
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="research-memory">
          <PhotoFrame
            photo="dissertation"
            label="RESEARCH / SEPTEMBER 2026"
            caption="From experiments to a finished dissertation."
            sizes="(max-width: 650px) 90vw, 40vw"
            className="dissertation-photo"
          />
          <div>
            <span className="eyebrow">THE WORK, OFF-SCREEN</span>
            <h3>
              A question worth
              <br />
              staying curious about.
            </h3>
            <p>
              Where should provider fairness sit in a recommendation pipeline?
              My MSc dissertation examined fairness-aware training and
              exposure-aware re-ranking, with grounded explanations evaluated
              separately.
            </p>
            <a className="text-link" href="/#project-6">
              Explore the research <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="university-memories">
          <div className="memory-heading">
            <span className="eyebrow">THE GLASGOW CHAPTER</span>
            <h3>More than the coursework.</h3>
            <p>Shared milestones. New people. A place to keep learning.</p>
          </div>
          <div className="university-photos">
            <PhotoFrame
              photo="scholarship-reception"
              label="UNIVERSITY / SCHOLARSHIP RECEPTION"
              caption="A milestone worth celebrating."
              sizes="(max-width: 650px) 90vw, 32vw"
              className="scholarship-photo"
            />
            <PhotoFrame
              photo="glasgow-community"
              label="UNIVERSITY / COMMUNITY"
              caption="A bigger picture of life at Glasgow."
              sizes="(max-width: 650px) 90vw, 60vw"
              className="community-photo"
            />
          </div>
        </div>
        <aside className="mentoring-note">
          <div>
            <span className="eyebrow">PASSING IT FORWARD</span>
            <h3>Good advice can change a chapter.</h3>
            <p>
              Mentored 50+ students on UK Master’s admissions and Data
              Engineering / GenAI careers via Topmate, with a 5/5 rating.
            </p>
          </div>
          <a
            className="sketch-button"
            href="https://topmate.io/nitesh2039"
            target="_blank"
            rel="noreferrer"
          >
            Book a 1:1 <ArrowUpRight size={16} />
          </a>
        </aside>
      </div>
    </section>
  );
}

export function PhotoJournal() {
  const moments = [
    {
      photo: "city-walks" as const,
      label: "01 / CITY WALKS",
      caption: "Taking the scenic route.",
    },
    {
      photo: "coastal-detour" as const,
      label: "02 / COASTAL DETOURS",
      caption: "A little room to breathe.",
    },
    {
      photo: "winter-hike" as const,
      label: "03 / WINTER PATHS",
      caption: "A different kind of challenge.",
    },
    {
      photo: "london-after-dark" as const,
      label: "04 / LONDON AFTER DARK",
      caption: "A change of scenery.",
    },
    {
      photo: "campus-friends" as const,
      label: "05 / CAMPUS DAYS",
      caption: "Better with good company.",
    },
  ];
  return (
    <section
      id="life"
      className="journal-section"
      aria-labelledby="journal-title"
    >
      <div className="section-shell">
        <div className="journal-heading">
          <div>
            <SectionLabel number="07">AWAY FROM THE KEYBOARD</SectionLabel>
            <h2 id="journal-title">
              A FEW OTHER
              <br />
              <span>CHAPTERS.</span>
            </h2>
          </div>
          <p>
            City walks, coastal detours, snowy paths.
            <br />
            And good company along the way.
          </p>
        </div>
        <div className="journal-grid">
          {moments.map((moment) => (
            <PhotoFrame
              key={moment.photo}
              {...moment}
              sizes="(max-width: 650px) 50vw, 20vw"
              className={`journal-${moment.photo}`}
            />
          ))}
        </div>
        <p className="journal-footnote">
          A few frames from life outside the code. Click any photo for the full
          scene. <ArrowUpRight size={16} />
        </p>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setCopyError(false);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  };
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <SectionLabel number="08">LET’S MAKE SOMETHING USEFUL</SectionLabel>
        <div className="contact-grid">
          <div>
            <h2>
              HAVE A<br />
              GOOD <span>PROBLEM?</span>
            </h2>
            <p>
              I’d love to help solve it. I’m open to Data & AI Engineering
              roles, interesting collaborations, and a good conversation.
            </p>
            <div className="contact-location">
              <i />
              <span>Glasgow, Scotland · Open to UK opportunities</span>
            </div>
            <SocialLinks dark />
          </div>
          <div className="contact-note">
            <span className="note-kicker">YOUR NEXT DATA PERSON?</span>
            <Mail size={36} strokeWidth={1.4} />
            <h3>Let’s talk.</h3>
            <p>
              A role, an idea, a question.
              <br />
              My inbox is open.
            </p>
            <a className="sketch-button yellow" href={`mailto:${EMAIL}`}>
              Say hello <ArrowUpRight size={19} />
            </a>
            <button className="copy-email" onClick={copyEmail}>
              {copied ? (
                <>
                  <Check size={14} /> Email copied
                </>
              ) : (
                <>
                  {EMAIL} <span>↗</span>
                </>
              )}
            </button>
            <span className="copy-status" role="status">
              {copyError
                ? "Please use Say hello to open your email app."
                : copied
                  ? "Ready to paste into your email app."
                  : ""}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
