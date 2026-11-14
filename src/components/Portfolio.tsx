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
  TrendingUp,
  Video,
  Youtube,
  FlaskConical,
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
  channelVideos,
  YOUTUBE,
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
      <a
        href={YOUTUBE}
        target="_blank"
        rel="noreferrer"
        aria-label="Nitesh Explains AI on YouTube"
      >
        <Youtube size={22} />
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
        <span>OPEN TO WORK · SEEKING A PHD</span>
        <span>PORTFOLIO / 2026</span>
      </div>
      <div className="hero-title-wrap">
        <div className="hero-disciplines">
          <span>DATA ENGINEERING</span>
          <span>LLM EVALUATION</span>
          <span>PHD APPLICANT</span>
        </div>
        <h1>
          NITESH
          <span className="sr-only">
            {" "}
            Ranjan Singh, Data Engineer and PhD Applicant
          </span>
        </h1>
      </div>
      <div className="hero-scribble" aria-hidden="true">
        From data pipelines
        <br />
        to research questions.
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
        Data engineer.
        <br />
        Looking for a PhD.
      </a>
      <div className="hero-bottom">
        <div className="hero-intro">
          <span className="eyebrow">NITESH RANJAN SINGH</span>
          <p>
            I build data systems.
            <br />I study how we <em>evaluate AI.</em>
          </p>
          <div className="hero-actions">
            <a className="sketch-button orange" href="#projects">
              My work <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#research">
              PhD research <ArrowUpRight size={17} />
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
            INDIA TO
            <br />
            GLASGOW.
          </span>
          <div className="portrait-frame">
            <PersonalPhoto
              photo="portrait"
              sizes="(max-width: 700px) 85vw, 38vw"
            />
            <span className="photo-caption">Nitesh, at the laptop. ↗</span>
          </div>
          <span className="portrait-sticker">
            <MapPin size={18} /> GLASGOW · DATA SCIENCE
          </span>
        </div>
        <div className="about-copy">
          <SectionLabel number="01">ABOUT ME</SectionLabel>
          <h2>
            An engineer,
            <br />
            <span>
              with research
              <br />
              questions.
            </span>
          </h2>
          <p className="lead">
            I’m Nitesh. I’m a data engineer in Glasgow, looking for my next role
            and a funded PhD in machine learning or information retrieval.
          </p>
          <p>
            At IQVIA and Axtria, I spent more than three years building data
            platforms for pharmaceutical teams. That work taught me to check the
            data behind a result, not just whether a pipeline finished.
          </p>
          <p>
            My MSc at the University of Glasgow took that question into
            research. I studied provider fairness in recommendation. Now I’m
            running pilots on LLM judges: what their scores mean, where they
            disagree with people, and how much human evaluation they can
            replace.
          </p>
          <div className="about-footnote">
            <MapPin size={17} />
            <span>
              Glasgow · Open to engineering roles and funded PhD positions
            </span>
          </div>
          <a
            className="text-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download my CV <ArrowUpRight size={18} />
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
          <SectionLabel number="02">COMPETITIONS & AWARDS</SectionLabel>
          <h2 id="recognition-title">
            Work I’m
            <br />
            <span>proud of.</span>
          </h2>
          <p>
            Some of my best learning has happened in a team, under a deadline.
          </p>
        </div>
        <div className="recognition-layout">
          <PhotoFrame
            photo="codeolympics"
            label="CODEOLYMPICS / 2026"
            caption="With my teammates at CodeOlympics 2026."
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
    title: "SOFTWARE",
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
            <SectionLabel number="03">WHAT I WORK WITH</SectionLabel>
            <h2>
              THE STACK<span>_</span>
            </h2>
          </div>
          <p>
            Tools I’ve used in industry,
            <br />
            independent projects and research.
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
            <SectionLabel number="04">INDUSTRY EXPERIENCE</SectionLabel>
            <h2>
              WHERE I’VE
              <br />
              <span>WORKED.</span>
            </h2>
          </div>
          <p>
            Three years in pharmaceutical data,
            <br />
            before my MSc in Glasgow.
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

export function Research() {
  return (
    <section
      id="research"
      className="research-section"
      aria-labelledby="research-title"
    >
      <div className="section-shell">
        <div className="research-heading">
          <div>
            <SectionLabel number="05">
              CURRENT RESEARCH · PHD APPLICANT
            </SectionLabel>
            <h2 id="research-title">
              WHEN CAN WE
              <br />
              <span>TRUST THE SCORE?</span>
            </h2>
          </div>
          <p>
            My MSc started with fairness in recommendation. My current work asks
            how we should evaluate language models when both judges and human
            labels are imperfect.
          </p>
        </div>
        <div className="research-directions">
          <article>
            <span className="eyebrow">01 / LEAD PROPOSAL</span>
            <h3>How many human labels can an LLM judge replace?</h3>
            <p>
              I’m testing how disagreement between human raters limits the
              labelling effort a judge can save. I compare calibration methods
              and stopping rules, including cases where a judge adds little
              benefit.
            </p>
            <div className="research-observation">
              <span>PILOT OBSERVATION</span>
              <p>
                On MultiPref, the estimated ceiling was about{" "}
                <strong>21%</strong> under a one-vote-per-item setup, with a 95%
                interval of 19–22%. A high agreement score alone does not tell
                us the saving.
              </p>
            </div>
            <p className="research-methods">
              Pilots: MT-Bench, MultiPref, ChaosNLI and a TREC DL 2023
              judged-pool experiment.
            </p>
          </article>
          <article>
            <span className="eyebrow">02 / SECOND PROPOSAL</span>
            <h3>Whose preferences does a judge inherit?</h3>
            <p>
              I started by expecting related models to favour each other.
              Weight-interpolation tests did not support that explanation. I’m
              now examining self-preference, preference for strong models and
              what survives judge training.
            </p>
            <div className="research-observation">
              <span>WHAT CHANGED MY THINKING</span>
              <p>
                Weight proximity did not explain favouritism in this pilot. Some
                base-model preferences survived LoRA, but the pattern depended
                on the model and training recipe.
              </p>
            </div>
            <p className="research-methods">
              Methods: weight interpolation, frozen heads, LoRA, full
              fine-tuning and bootstrap uncertainty.
            </p>
          </article>
        </div>
        <div className="research-next">
          <p>
            Independent pilot work, November 2026. The proposals are still
            developing; larger studies and further validation are next.
          </p>
          <div>
            <a className="text-link" href="/#project-24">
              Read the pilot summary <ArrowUpRight size={17} />
            </a>
            <a
              className="sketch-button"
              href={`mailto:${EMAIL}?subject=PhD%20research%20conversation`}
            >
              Discuss a PhD opportunity <ArrowUpRight size={17} />
            </a>
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
  17: { icon: TrendingUp, label: "traffic state / queues / flows" },
  24: {
    icon: FlaskConical,
    label: "human labels / judge scores / uncertainty",
  },
};
function projectStatusClass(status: Project["status"]) {
  if (status === "IN PROGRESS") return "project-status ongoing";
  if (status === "PILOT COMPLETE") return "project-status pilot";
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
            <SectionLabel number="06">ENGINEERING & RESEARCH</SectionLabel>
            <h2>
              SELECTED
              <br />
              <span>PROJECTS.</span>
            </h2>
          </div>
          <div className="projects-note">
            A selection of my work.
            <br />
            <span>Open a project for methods and results.</span>
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
            <h3>WHAT I WORKED ON</h3>
            <ol>
              {selected.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <h3>TOOLS & METHODS</h3>
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
        <SectionLabel number="07">EDUCATION</SectionLabel>
        <div className="education-grid">
          <div>
            <h2>
              MY TIME
              <br />
              <span>AT GLASGOW.</span>
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
              My dissertation compared fairness-aware training with
              exposure-aware re-ranking. It is where I began asking whether the
              metrics we optimise capture the outcomes we care about.
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
              MSc coursework and notes <ArrowUpRight size={17} />
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
              AWARDS & SCHOLARSHIPS <Trophy size={20} />
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
            caption="My dissertation, submitted in September 2026."
            sizes="(max-width: 650px) 90vw, 40vw"
            className="dissertation-photo"
          />
          <div>
            <span className="eyebrow">MY MSC DISSERTATION</span>
            <h3>
              Who gets seen
              <br />
              in a recommendation?
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
            <p>The scholarship reception, friends and the people I met here.</p>
          </div>
          <div className="university-photos">
            <PhotoFrame
              photo="scholarship-reception"
              label="UNIVERSITY / SCHOLARSHIP RECEPTION"
              caption="At the postgraduate scholarship reception."
              sizes="(max-width: 650px) 90vw, 32vw"
              className="scholarship-photo"
            />
            <PhotoFrame
              photo="glasgow-community"
              label="UNIVERSITY / COMMUNITY"
              caption="With the university community in Glasgow."
              sizes="(max-width: 650px) 90vw, 60vw"
              className="community-photo"
            />
          </div>
        </div>
        <aside className="mentoring-note">
          <div>
            <span className="eyebrow">MENTORING</span>
            <h3>Talking through the next step.</h3>
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

export function YouTubeChannel() {
  return (
    <section
      id="youtube"
      className="youtube-section"
      aria-labelledby="youtube-title"
    >
      <div className="section-shell">
        <div className="youtube-heading">
          <div>
            <SectionLabel number="08">
              NITESH EXPLAINS AI · YOUTUBE
            </SectionLabel>
            <h2 id="youtube-title">
              I TEACH WHAT
              <br />
              <span>I’M LEARNING.</span>
            </h2>
          </div>
          <div className="youtube-story">
            <p>
              Recording a lesson makes me check every step. On my channel, I use
              small numerical examples to connect the maths to code, from
              vectors and PCA to gradients and backpropagation.
            </p>
            <p>
              I want someone watching to be able to work through the
              calculation, rather than just remember the formula.
            </p>
            <a
              className="text-link"
              href={YOUTUBE}
              target="_blank"
              rel="noreferrer"
            >
              <Youtube size={20} /> Visit Nitesh Explains AI{" "}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="video-grid">
          {channelVideos.map((video) => (
            <a
              className="channel-video"
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Watch ${video.title} on YouTube`}
            >
              <div className="video-thumbnail">
                <Image
                  src={`/images/youtube/${video.image}.jpg`}
                  alt={`Lesson thumbnail: ${video.title}`}
                  width={1280}
                  height={720}
                  sizes="(max-width: 700px) 90vw, 30vw"
                />
                <span aria-hidden="true">
                  <Youtube size={27} />
                </span>
              </div>
              <div className="video-description">
                <h3>
                  {video.title}
                  <ArrowUpRight size={20} />
                </h3>
                <p>{video.detail}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PhotoJournal() {
  const moments = [
    {
      photo: "city-walks" as const,
      label: "01 / CITY WALKS",
      caption: "A walk through the city.",
    },
    {
      photo: "coastal-detour" as const,
      label: "02 / COASTAL DETOURS",
      caption: "A day by the coast.",
    },
    {
      photo: "winter-hike" as const,
      label: "03 / WINTER PATHS",
      caption: "Out on a winter hike.",
    },
    {
      photo: "london-after-dark" as const,
      label: "04 / LONDON AFTER DARK",
      caption: "An evening by the Thames.",
    },
    {
      photo: "campus-friends" as const,
      label: "05 / CAMPUS DAYS",
      caption: "With friends at Glasgow.",
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
            <SectionLabel number="09">OUTSIDE WORK</SectionLabel>
            <h2 id="journal-title">
              LIFE IN
              <br />
              <span>A FEW PHOTOS.</span>
            </h2>
          </div>
          <p>
            Walks, a few trips and time with friends.
            <br />A little of my life outside work.
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
        <SectionLabel number="10">WORK & PHD OPPORTUNITIES</SectionLabel>
        <div className="contact-grid">
          <div>
            <h2>
              LOOKING FOR
              <br />
              MY NEXT <span>STEP.</span>
            </h2>
            <p>
              I’m looking for a Data Engineer or AI Engineer role where I can
              build and evaluate systems. I’m also seeking a funded PhD in LLM
              evaluation, information retrieval or responsible machine learning.
            </p>
            <div className="contact-location">
              <i />
              <span>Based in Glasgow · Open to work and PhD opportunities</span>
            </div>
            <SocialLinks dark />
          </div>
          <div className="contact-note">
            <span className="note-kicker">HIRING OR SUPERVISING?</span>
            <Mail size={36} strokeWidth={1.4} />
            <h3>Let’s talk.</h3>
            <p>
              If my experience fits your team or research group, I’d like to
              hear from you. I can share my CV and current proposal.
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
