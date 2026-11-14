export type ProjectStatus =
  | "SHIPPED"
  | "KAGGLE 2ND PLACE"
  | "HACKATHON RUNNER-UP"
  | "IN PROGRESS"
  | "PROTOTYPE"
  | "DESIGNED"
  | "RESEARCH COMPLETE";

export const projectCategories = [
  "Data Engineering",
  "Agentic AI",
  "Machine Learning",
  "Applications",
  "Optimisation",
  "Research",
] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  id: number;
  title: string;
  displayTitle: string;
  discipline: string;
  categories: ProjectCategory[];
  featured?: boolean;
  icon: string;
  status: ProjectStatus;
  brief: string;
  approach: string[];
  tools: string[];
  impact: string;
  link?: string;
  repo?: string;
}

export const caseFiles: Project[] = [
  {
    id: 10,
    displayTitle: "DataSentinel",
    discipline: "DATA RELIABILITY",
    categories: ["Data Engineering", "Agentic AI"],
    featured: true,
    title: "DataSentinel — Data Reliability Engineer",
    icon: "🛡️",
    status: "SHIPPED",
    brief:
      "Detects silent pipeline failures, traces them to Git changes and validates operator-approved fixes. A live data-reliability demo with deterministic checks and evidence-grounded AI explanations.",
    approach: [
      "Checks row loss, schema changes, nulls, duplicates and distribution drift; a demo job reported success while silently dropping 60.2% of rows",
      "Git diff evidence identifies the regressing file, line and commit, keeping the diagnosis tied to inspectable evidence",
      "Human approval precedes reverse patches; rerun and re-profile gates confirm recovery, with rollback when a fix fails",
      "Optional LLM explanations are grounded in the evidence package; 62 backend tests",
    ],
    tools: [
      "FastAPI",
      "pandas",
      "Pydantic",
      "Next.js",
      "Git",
      "LLM explanations",
    ],
    impact:
      "Live demo with 62 backend tests and an operator-approved remediation workflow",
    link: "https://datasentinel-seven.vercel.app",
    repo: "https://github.com/nitesh0007-edith/DataSentinel",
  },
  {
    id: 11,
    displayTitle: "LumaLearn",
    discipline: "AGENTIC RECOMMENDATIONS",
    categories: ["Agentic AI", "Machine Learning", "Applications"],
    featured: true,
    title: "LumaLearn — SmartReco",
    icon: "🧠",
    status: "SHIPPED",
    brief:
      "Live agentic recommendation service: learner behaviour drives a bounded LangGraph workflow, with grounded outputs, cost controls and observable runs.",
    approach: [
      "A bounded analyse → retrieve → grade → refine-once → generate graph uses GPT-4o-mini and persistent Chroma retrieval",
      "Weighted 30-day intent profiles and multi-signal re-ranking personalise recommendations; generated IDs must belong to the retrieved candidate allow-list",
      "Typed outputs, a SQL/vector transactional outbox and scheduled reconciliation preserve catalogue consistency",
      "Per-node latency and token traces, threshold/cooldown cost gates, Docker deployment, 10 automated tests and two passing GitHub Actions workflows",
    ],
    tools: [
      "FastAPI",
      "LangGraph",
      "Chroma",
      "GPT-4o-mini",
      "Docker",
      "GitHub Actions",
    ],
    impact:
      "Live on Render, with grounded recommendations, 10 automated tests and CI quality gates",
    link: "https://lumalearn-smartreco.onrender.com",
    repo: "https://github.com/nitesh0007-edith/smartreco-lumalearn",
  },
  {
    id: 12,
    displayTitle: "SasineSense AI",
    discipline: "DOCUMENT INTELLIGENCE",
    categories: ["Agentic AI"],
    title: "SasineSense AI — Scottish Document Intelligence",
    icon: "📜",
    status: "SHIPPED",
    brief:
      "Evidence-first document intelligence for historical Scottish property records. Every extracted field retains its source, method, confidence and validation state.",
    approach: [
      "Combines deterministic extraction, spaCy NER, Tesseract OCR and vision-language models into schema-constrained Pydantic outputs",
      "Retains competing candidates instead of overwriting conflicts; low-confidence or conflicting values go to a Streamlit reviewer",
      "An append-only audit trail, field-level evaluation and SQLAlchemy storage preserve provenance and review decisions",
      "FastAPI/PyMuPDF ingestion, OpenCV preprocessing and ranked gazetteer place resolution; 85 automated tests",
    ],
    tools: ["FastAPI", "PyMuPDF", "spaCy", "OCR", "Pydantic", "SQLAlchemy"],
    impact:
      "85 tests; field-level provenance and human review for uncertain document extractions",
    repo: "https://github.com/nitesh0007-edith/SasineSenseAI",
  },
  {
    id: 9,
    displayTitle: "HyperX",
    discipline: "AWARD-WINNING RETRIEVAL",
    categories: ["Agentic AI", "Research"],
    title: "HyperX — Agentic Legal Citation Retrieval",
    icon: "⚖️",
    status: "KAGGLE 2ND PLACE",
    brief:
      "Placed 2nd as Team HyperX in Kaggle's LLM Agentic Legal Information Retrieval competition, winning a $3,000 prize — retrieving Swiss legal citations for English queries, scored on citation-level Macro F1.",
    approach: [
      "Hybrid retrieval: rule-based EN→DE query expansion feeding BM25 plus dual dense indexes (multilingual-E5-large + FAISS) over statutes and court decisions, fused with Reciprocal Rank Fusion",
      "Cross-encoder re-ranking to top-50, then citation-graph expansion (BGE family walk + co-occurrence) and 2-hop re-retrieval",
      "Handled a hard train/test distribution shift — German training queries vs English test queries, median 2 vs 22 gold citations — by tuning every threshold on validation, not train",
      "Iterated citation-level Macro F1 from 0.10 (BM25 baseline) to 0.40 across four pipeline phases",
    ],
    tools: [
      "BM25",
      "multilingual-E5-large",
      "FAISS",
      "Cross-encoder rerank",
      "Citation graph",
      "Python",
    ],
    impact: "2nd place — $3,000 prize, Team HyperX, Kaggle",
    link: "https://www.kaggle.com/competitions/llm-agentic-legal-information-retrieval",
    repo: "https://github.com/Dharundp6/LLM_agentic",
  },
  {
    id: 1,
    displayTitle: "LectureLens",
    discipline: "HYBRID RAG COPILOT",
    categories: ["Agentic AI", "Applications"],
    title: "LectureLens — Hybrid RAG Learning Copilot",
    icon: "📚",
    status: "SHIPPED",
    brief:
      "Production RAG copilot for university course materials — cited answers grounded in lecture notes, auto-generated quizzes, concept graph, and exam mode. Runs at £0 infrastructure.",
    approach: [
      "Dual-index hybrid retrieval: sparse BM25 (top-30) ∪ dense BGE-small (top-30) → Reciprocal Rank Fusion → ONNX cross-encoder re-ranking to 6 candidates",
      "Ablation-evaluated across 5 configurations on MAP, NDCG@10, MRR, and Recall@30 with manually verified qrels",
      "Multi-tenant workspace isolation via Qdrant payload filters; prompt-injection defence with untrusted-data delimiting at ingest",
      "Cite-or-abstain generation, 43 pytest tests, Groq primary with Gemini 2.0 Flash fallback",
    ],
    tools: [
      "FastAPI",
      "Next.js",
      "BM25 + BGE",
      "Qdrant",
      "Groq Llama 3.3",
      "Docker",
    ],
    impact: "Live on Hugging Face Spaces at £0 infrastructure cost",
    link: "https://github.com/nitesh0007-edith/lecturelens",
  },
  {
    id: 2,
    displayTitle: "LLM Fine-Tuning",
    discipline: "FINE-TUNING & SERVING",
    categories: ["Agentic AI", "Machine Learning"],
    title: "Production LLM Fine-Tuning & Serving",
    icon: "🧪",
    status: "SHIPPED",
    brief:
      "End-to-end fine-tuning and serving pipeline for domain-adapted open LLMs — 3× throughput at <200ms P95 latency.",
    approach: [
      "Fine-tuned LLaMA 3 8B and Mistral 7B on Azure Databricks with QLoRA (4-bit NF4) and PEFT",
      "Diagnosed reward-hacking on response length and migrated from RLHF/PPO to DPO for training stability",
      "Built an evaluation suite (MT-Bench, ROUGE, BERTScore) across 3 model iterations",
      "Deployed GGUF/AWQ-quantised models as a vLLM-backed REST API on AKS with auto-scaling",
    ],
    tools: [
      "LLaMA 3 8B",
      "Mistral 7B",
      "QLoRA + PEFT",
      "DPO / TRL",
      "vLLM",
      "AKS",
    ],
    impact:
      "3× throughput at <200ms P95 latency, measured against the project baseline",
  },
  {
    id: 3,
    displayTitle: "AURA",
    discipline: "MCP GATEWAY",
    categories: ["Agentic AI"],
    title: "AURA — MCP Gateway",
    icon: "🛰️",
    status: "HACKATHON RUNNER-UP",
    brief:
      "Agentic gateway for autonomous telecom network management, built on Anthropic's Model Context Protocol — 92% end-to-end pipeline completion.",
    approach: [
      "Architected the tool schema and context injection for the agent loop",
      "Coordinated multi-step agent workflows across 6 network-management tools",
      "Ran the whole system on serverless AWS Lambda",
    ],
    tools: ["AWS Lambda", "Anthropic MCP", "Agent coordination"],
    impact:
      "Runner-up at GUTS 2025 Hackathon (Morgan Stanley) — 92% pipeline completion",
  },
  {
    id: 4,
    displayTitle: "AutoPipelineAI",
    discipline: "SELF-SERVE ANALYTICS",
    categories: ["Data Engineering", "Agentic AI"],
    title: "AutoPipelineAI — NL Analytics Platform",
    icon: "🗣️",
    status: "SHIPPED",
    brief:
      "Self-serve analytics platform translating natural-language prompts into executable data pipelines — cut analysis time 70%.",
    approach: [
      "Automated the full ingestion → transformation → visualisation flow from a natural-language prompt",
      "Ran adoption workshops with analysts to iterate on prompt UX",
      "Documented usage patterns for team rollout",
    ],
    tools: ["Streamlit", "Databricks", "DuckDB", "Llama 3"],
    impact: "Cut analysis time 70% for self-serve analytics",
    link: "https://github.com/nitesh0007-edith/AutoPipelineAI",
  },
  {
    id: 5,
    displayTitle: "ECG Explainability",
    discipline: "EXPLAINABLE ML",
    categories: ["Machine Learning"],
    title: "ECG Arrhythmia Detection",
    icon: "🫀",
    status: "SHIPPED",
    brief:
      "Explainable deep-learning classifier for cardiac arrhythmia — 99.79% accuracy with triple-validated explainability.",
    approach: [
      "ResNet transfer learning on the MIT-BIH arrhythmia dataset in PyTorch",
      "Triple-cross-validated explanations (SHAP + LIME + Permutation Feature Importance) for clinical transparency",
      "Caught a class-imbalance issue (~90% of training data in one class), re-stratified, and confirmed accuracy held",
    ],
    tools: ["PyTorch", "ResNet", "MIT-BIH", "SHAP", "LIME", "PFI"],
    impact:
      "99.79% accuracy — and a lesson in trusting class-balance audits over aggregate numbers",
    link: "https://github.com/nitesh0007-edith/ECG-Explainable-Machine-Learning",
  },
  {
    id: 6,
    displayTitle: "Provider Fairness",
    discipline: "MSC RESEARCH",
    categories: ["Machine Learning", "Research"],
    title: "Provider Fairness in Multi-Stakeholder Recommendation",
    icon: "🔬",
    status: "RESEARCH COMPLETE",
    brief:
      "Submitted MSc dissertation: Combining Fairness-Aware Training with Exposure-Aware Re-Ranking. Investigates where provider fairness belongs in a recommender pipeline, with separately evaluated grounded explanations.",
    approach: [
      "Crossed standard/provider-aware LightGCN training with/without exposure-debt re-ranking in a 2 × 2 factorial experiment across five datasets and ten random seeds",
      "Compared NDCG@10, Recall@10, provider-exposure Gini and catalogue-normalised exposure entropy using paired tests; a diversity-training objective was examined in a separate ablation",
      "Found dataset-dependent trade-offs: no universally best configuration, with training and re-ranking addressing different parts of the exposure problem",
      "Generated knowledge-graph-conditioned buyer, provider and platform explanations with numeric-grounding checks; the explanation module is separate from recommendation scoring",
    ],
    tools: [
      "Python",
      "PyTorch Geometric",
      "LightGCN",
      "Exposure-aware re-ranking",
      "Knowledge Graph",
      "LLM explanations",
    ],
    impact:
      "MSc dissertation submitted September 2026; related ECIR 2027 abstract submitted October 2026, full paper in preparation",
  },
  {
    id: 7,
    displayTitle: "JobFlowUK",
    discipline: "WORKFLOW AUTOMATION",
    categories: ["Data Engineering", "Applications"],
    title: "JobFlowUK — Job-Search Automation",
    icon: "🤖",
    status: "SHIPPED",
    brief:
      "Full-stack automation system that discovers, scores, and tailors applications for UK data roles — operated daily as personal tooling.",
    approach: [
      "End-to-end pipeline: Job-board scrapers and company ATS APIs → SHA-256 deduplication",
      "Claude-powered 6-dimension evaluation with hard-exclusion filters before any role surfaces",
      "12 CV archetypes with JD-aware tailoring, cover-letter and STAR-story mapping, ATS-clean PDF rendering",
      "Live dashboard polling every 3 seconds",
    ],
    tools: ["Node.js", "Python", "Playwright", "Claude API"],
    impact: "Operated daily for UK data-role applications",
  },
  {
    id: 8,
    displayTitle: "PipelineSentinel",
    discipline: "LAKEHOUSE ARCHITECTURE",
    categories: ["Data Engineering", "Agentic AI"],
    title: "PipelineSentinel — Self-Healing Lakehouse",
    icon: "🛡️",
    status: "DESIGNED",
    brief:
      "Autonomous data-reliability layer where a Claude tool-use agent diagnoses pipeline incidents and opens CI-validated fix PRs for human approval. Architecture design; implementation is not claimed.",
    approach: [
      "Statistical detectors (PSI/KS distribution shift, seasonal volume z-scores, SCD2/CDC invariants) raise incidents",
      "An MCP-driven agent diagnoses root cause via lineage-derived blast radius and remediates through GitHub PRs with human approval",
      "Production guardrails: read-only MCP tools, path-scoped write allow-list, prompt-injection-resistant context, budget circuit breakers",
    ],
    tools: [
      "Dagster",
      "dbt",
      "Delta Lake",
      "DuckDB",
      "Claude / MCP",
      "GitHub Actions",
    ],
    impact: "Architecture design with human-approved remediation",
  },
  {
    id: 13,
    displayTitle: "InterviewCue",
    discipline: "NATIVE MACOS ASSISTANT",
    categories: ["Applications", "Agentic AI"],
    featured: true,
    title: "InterviewCue — Native macOS Conversation Assistant",
    icon: "🎙️",
    status: "PROTOTYPE",
    brief:
      "A native Swift app that turns speech and session context into streamed answers, with editable transcripts, screenshot questions and local session history.",
    approach: [
      "ScreenCaptureKit and microphone capture feed speech-end chunking and transcription; PCM conversion handles multiple audio formats",
      "Streamed responses use session documents, instructions and the preceding exchange to keep answers grounded in the active conversation",
      "AppKit and SwiftUI provide a menu-bar workspace, session controls and history; API credentials are stored in Keychain",
      "Version 1.3.0 records 30 passing standalone checks and a signed release build; real-device audio capture still needs desktop permission validation",
    ],
    tools: [
      "Swift",
      "SwiftUI",
      "AppKit",
      "ScreenCaptureKit",
      "OpenAI API",
      "Keychain",
    ],
    impact:
      "Built native app with 30 recorded standalone checks; hardware capture remains permission-dependent.",
  },
  {
    id: 14,
    displayTitle: "AI from First Principles",
    discipline: "ANIMATED LEARNING PIPELINE",
    categories: ["Applications", "Agentic AI"],
    featured: true,
    title: "AI from First Principles — Animated Lesson Pipeline",
    icon: "🎬",
    status: "IN PROGRESS",
    brief:
      "A local production pipeline for narrated AI lessons: reproducible calculations become animated scenes, synchronised speech, captions and reviewable video deliverables.",
    approach: [
      "A staged Python CLI coordinates episode briefs, numeric examples, narration, alignment, rendering, assembly and metadata",
      "Manim scenes and Remotion compositions turn AI concepts into visual explanations; timing data connects narration and scene transitions",
      "Kokoro speech, ASR-assisted alignment and FFmpeg assembly produce narrated lessons with SRT/VTT captions",
      "Automated duration, numeric-literal, loudness and subtitle checks sit alongside explicit human review gates; the course is still in development",
    ],
    tools: ["Python", "Manim", "Remotion", "Kokoro TTS", "FFmpeg", "Whisper"],
    impact:
      "Implemented local lesson pipeline with rendered artifacts, captions and automated QA; series in development.",
  },
  {
    id: 15,
    displayTitle: "Transit Analytics",
    discipline: "STREAMING DATA ENGINEERING",
    categories: ["Data Engineering"],
    featured: true,
    title: "Real-Time Public Transit Delay Analytics",
    icon: "🚆",
    status: "PROTOTYPE",
    brief:
      "A streaming lakehouse prototype that turns GTFS-Realtime transit updates into route-delay metrics, incident windows and an interactive operations dashboard.",
    approach: [
      "A Python/protobuf producer publishes GTFS-Realtime trip updates to Kafka",
      "PyFlink computes five-minute tumbling, thirty-minute sliding and session-window aggregations with checkpointing",
      "A separate Kafka consumer writes aggregates into Apache Iceberg on MinIO; Streamlit and Plotly expose delay patterns",
      "Docker Compose, seed data and component tests support local development; an end-to-end production deployment is not claimed",
    ],
    tools: [
      "Python",
      "Apache Kafka",
      "PyFlink",
      "Apache Iceberg",
      "MinIO",
      "Streamlit",
      "Docker",
    ],
    impact:
      "Implemented ingestion, stream processing, lakehouse sink and dashboard components for local operation.",
  },
  {
    id: 16,
    displayTitle: "Name That LLM",
    discipline: "MODEL ATTRIBUTION",
    categories: ["Machine Learning", "Research"],
    featured: true,
    title: "Name That LLM — Generated-Text Attribution",
    icon: "🔎",
    status: "IN PROGRESS",
    brief:
      "Research into identifying which of 18 language models generated a passage, combining prompt-separated evaluation, text baselines and neural representations.",
    approach: [
      "Frozen prompt-level development and audit splits keep passages from the same prompt together",
      "TF-IDF, logistic regression and stylometry establish baselines before frozen-Qwen probes and neural ensemble experiments",
      "Offline notebooks, source hashes and strict ID/output contracts make inference and submission artifacts reproducible",
      "A separately attributed reproduction of a public ensemble recipe has a saved Kaggle public score of 0.682, checked 11 November 2026; independent experiments remain ongoing",
    ],
    tools: ["Python", "scikit-learn", "TF-IDF", "Qwen", "PyTorch", "Kaggle"],
    impact:
      "Recorded public score 0.682 for a public-recipe reproduction; original research evaluated separately.",
    link: "https://www.kaggle.com/competitions/name-that-llm",
  },
  {
    id: 17,
    displayTitle: "TrafficFlowBench",
    discipline: "TRAFFIC FORECASTING",
    categories: ["Machine Learning", "Research"],
    title: "TrafficFlowBench — Traffic State & Flow Modelling",
    icon: "🚦",
    status: "IN PROGRESS",
    brief:
      "A multi-task traffic modelling pipeline for state reconstruction, queue forecasting and origin–destination flow estimation, with temporal validation and physical consistency checks.",
    approach: [
      "Temporal interpolation and LightGBM residual models reconstruct traffic state from sparse observations",
      "Horizon-specific models forecast queues; prior-regularised non-negative least squares estimates origin–destination and path flows",
      "Chronological validation, leakage audits, physics diagnostics and provenance records support experiment comparison",
      "The saved candidate record reports a public Kaggle score of 0.81337 on 20 October 2026; it does not record a private score or final rank",
    ],
    tools: ["Python", "LightGBM", "NumPy", "pandas", "SciPy", "Kaggle"],
    impact:
      "Recorded public score 0.81337, with reproducible candidate artifacts and chronological evaluation.",
    link: "https://www.kaggle.com/competitions/2026-ieee-big-data-traffic-flow-bench",
  },
  {
    id: 18,
    displayTitle: "Squares in Squares",
    discipline: "GEOMETRIC OPTIMISATION",
    categories: ["Optimisation", "Research"],
    title: "Squares in Squares — Constructive Packing Optimisation",
    icon: "🧩",
    status: "IN PROGRESS",
    brief:
      "A reproducible geometry solver that packs rotated unit squares into small enclosing squares, with independent certification for every puzzle size from 1 to 1,000.",
    approach: [
      "Exact grids, diagonal channels and border/deletion transfers generate candidate packings",
      "Public witness packings retain their attribution when merged with local constructions and repair experiments",
      "Separating-axis penalties and local refinement propose improvements; the unchanged official interval-arithmetic validator decides admission",
      "Saved exports validate all 1,000 puzzle sizes; unsuccessful composition experiments are retained as measured null results",
    ],
    tools: ["Python", "NumPy", "SciPy", "mpmath", "Computational Geometry"],
    impact:
      "Certified full-size packing exports and a reproducible search history with public-seed attribution.",
    link: "https://www.kaggle.com/competitions/squares-in-squares",
  },
  {
    id: 19,
    displayTitle: "BudgetSWE-Gemma",
    discipline: "BUDGETED CODING AGENTS",
    categories: ["Agentic AI", "Research"],
    title: "BudgetSWE-Gemma — Budget-Aware Software Repair",
    icon: "🛠️",
    status: "IN PROGRESS",
    brief:
      "A research harness for Gemma-based coding agents that must inspect repositories, repair software and allocate limited tool calls and inference time.",
    approach: [
      "Structured task records, tool traces and bounded agent policies make software-repair runs inspectable",
      "A task sanitiser strips gold patches before inference; packaging and integration checks validate evaluation artifacts",
      "Frozen evaluation sets and temporal-contamination filters separate post-training examples from held-out tasks",
      "Readiness and adapter-effect checks are recorded, while several prompt-policy pilots failed their acceptance gates; no improved repair benchmark is claimed",
    ],
    tools: ["Python", "Gemma", "vLLM", "LoRA", "pytest", "Kaggle"],
    impact:
      "Implemented agent, evaluation and post-training preparation tooling; research remains in progress.",
    link: "https://www.kaggle.com/competitions/gemma-4-developer-agent",
  },
  {
    id: 20,
    displayTitle: "Quant Research Platform",
    discipline: "FACTOR RESEARCH & SIMULATION",
    categories: ["Applications", "Machine Learning", "Optimisation"],
    title: "Quant Research Platform — Factor Models & Paper Trading",
    icon: "📈",
    status: "PROTOTYPE",
    brief:
      "A local equity research platform connecting market-data storage, factor models, backtesting, portfolio risk controls and a Streamlit dashboard.",
    approach: [
      "Market-data ingestion and updates feed a SQLite store with reusable feature and factor calculations",
      "PCA, momentum and regime-aware models generate signals for comparison in a common backtest runner",
      "Portfolio, execution and ledger modules support simulated trading with risk controls",
      "Dashboard pages inspect positions, signals and analysis; this is research and paper-trading software with no verified live-capital performance claim",
    ],
    tools: ["Python", "NumPy", "scikit-learn", "SQLite", "Streamlit", "Plotly"],
    impact:
      "Implemented local research, backtesting and paper-trading components with an interactive dashboard.",
  },
  {
    id: 21,
    displayTitle: "Quantitative Finance Lab",
    discipline: "NUMERICAL FINANCE",
    categories: ["Machine Learning", "Optimisation"],
    title: "Quantitative Finance Lab — Five Implemented Modules",
    icon: "🧮",
    status: "PROTOTYPE",
    brief:
      "A public collection of implemented finance experiments covering sequence models, portfolio optimisation, options simulation, pairs trading and risk analysis.",
    approach: [
      "LSTM forecasting code combines engineered features with walk-forward evaluation",
      "Portfolio optimisation includes Black–Litterman allocation; Monte Carlo simulation estimates option prices and Greeks",
      "Cointegration-based pairs-trading code sits alongside value-at-risk and stress-testing modules",
      "Five topic folders contain source and runnable examples; the remaining planned topics are excluded from the implementation count",
    ],
    tools: [
      "Python",
      "NumPy",
      "TensorFlow",
      "SciPy",
      "Portfolio Optimisation",
      "Monte Carlo",
    ],
    impact:
      "Five source-backed modules in a public repository; educational prototypes without verified trading-return claims.",
    repo: "https://github.com/nitesh0007-edith/Quantitative-Finance-Projects",
  },
  {
    id: 22,
    displayTitle: "Stock Autoresearch",
    discipline: "AUTOMATED EXPERIMENTATION",
    categories: ["Agentic AI", "Machine Learning", "Research"],
    title: "Stock Autoresearch — Agent-Guided Prediction Experiments",
    icon: "🔁",
    status: "PROTOTYPE",
    brief:
      "A CPU-oriented experiment loop for stock-return prediction: an agent changes model code, measures validation error and records which experiments are kept or reverted.",
    approach: [
      "Adapts the public autoresearch pattern to a stock-return dataset with a fixed data-loading and evaluation module",
      "Separates mutable training code from evaluation; lagged momentum, reversal and company-level features support lightweight experiments",
      "A results ledger preserves measurements and keep/revert decisions across iterations",
      "Repeated validation guides exploration; those adaptive results are not presented as an independent holdout benchmark or trading performance",
    ],
    tools: [
      "Python",
      "NumPy",
      "pandas",
      "Agent Workflows",
      "Experiment Tracking",
    ],
    impact:
      "Implemented a logged, CPU-based research loop adapted from the public autoresearch pattern.",
  },
  {
    id: 23,
    displayTitle: "Mendelian Randomisation",
    discipline: "STATISTICAL GENETICS",
    categories: ["Research"],
    title: "Mendelian Randomisation — LDL & Alzheimer’s Study",
    icon: "🧬",
    status: "RESEARCH COMPLETE",
    brief:
      "An academic statistical-genetics study using summary GWAS data to examine the relationship between LDL cholesterol and Alzheimer’s disease through complementary estimators.",
    approach: [
      "R scripts fetch genetic association data and harmonise exposure and outcome alleles",
      "Inverse-variance weighting, MR-Egger, weighted-median and simple-mode estimators are compared with confidence intervals",
      "Heterogeneity, pleiotropy and leave-one-out sensitivity analyses accompany forest and funnel plots",
      "Saved analysis tables, figures and a written report document the coursework workflow and its assumptions",
    ],
    tools: ["R", "TwoSampleMR", "GWAS", "ggplot2", "Sensitivity Analysis"],
    impact:
      "Completed academic analysis with saved result tables, sensitivity plots and a written report.",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Data System & CRM Migration Intern",
    company: "Street Connect",
    location: "Glasgow, Scotland, UK · On-site",
    period: "Jun 2026 – Present",
    brief:
      "Current role alongside the MSc — migrating Street Connect's data systems and CRM to a new platform.",
    contributions: [
      "Supporting the migration of Street Connect's data systems and CRM",
      "Role in progress — full write-up to follow",
    ],
    results: [],
    tech: [],
  },
  {
    id: 2,
    title: "Data Engineer",
    company: "IQVIA · GSK Omnichannel Data Platform",
    location: "Gurugram, India",
    period: "Jul 2024 – Aug 2025",
    brief:
      "Owned data-pipeline reliability for GSK's European omnichannel analytics platform, serving marketing intelligence for a €2B+ pharmaceutical portfolio across the UK, Germany, and Italy.",
    contributions: [
      "Architected an Azure omnichannel decision-support platform (Databricks, PySpark, ADLS Gen2, Synapse) integrating multi-source healthcare data from conception through deployment",
      "Built a Change Data Capture pipeline with schema-validation gates (blocking-on-failure + Slack alerting) — zero silent dashboard failures over 8 months in production",
      "Designed metadata-driven ETL automation (YAML mappings, templated ADF pipelines, SQL quality logging) — cut new-market onboarding from 3 weeks to 1 week and manual QA effort by 65%",
      "Delivered executive Power BI reporting tracking 50+ KPIs, presented to 200+ cross-functional stakeholders — report turnaround cut from 3 days to same-day",
    ],
    results: [
      { metric: "99.8%", label: "Data accuracy, 10M+ records/batch" },
      { metric: "35%", label: "Faster processing" },
      { metric: "200+", label: "Stakeholders served" },
    ],
    tech: [
      "Azure Databricks",
      "PySpark",
      "ADF",
      "Synapse",
      "ADLS Gen2",
      "Power BI",
    ],
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "IQVIA · GSK Omnichannel Data Platform",
    location: "Gurugram, India",
    period: "Dec 2022 – Jul 2024",
    brief:
      "Built the data-quality backbone for GSK's omnichannel platform — reusable tooling that outlived the project and spread to other teams.",
    contributions: [
      "Built a reusable PySpark data-quality rule engine — null validation, duplicate elimination, volume reconciliation, distribution-drift checks — with a pluggable YAML rule registry",
      "Engine adopted by 2 additional client pods beyond the original platform",
      "Built dimensional data models powering monthly executive performance reviews across European marketing teams",
    ],
    results: [
      { metric: "40%", label: "Reliability improvement" },
      { metric: "60%", label: "QA time saved" },
      { metric: "2", label: "Extra pods adopted it" },
    ],
    tech: [
      "PySpark",
      "SQL",
      "Azure Databricks",
      "YAML rule registry",
      "Power BI",
    ],
  },
  {
    id: 4,
    title: "Analyst Trainee",
    company: "Axtria · Johnson & Johnson MDM + AstraZeneca O2",
    location: "Noida, India",
    period: "Jan 2022 – Dec 2022",
    brief:
      "First arc in regulated pharma data — engineered multi-layered Azure pipeline frameworks for healthcare omnichannel datasets under regulatory compliance.",
    contributions: [
      "Engineered a multi-layered data-pipeline framework in Azure (ADF, Databricks, ADLS Gen2) for healthcare omnichannel datasets",
      "Maintained referential integrity across 10M+ records under regulatory compliance",
      "Created source-to-target mappings and data models for scalable BI",
    ],
    results: [
      { metric: "54%", label: "Faster processing via distributed PySpark" },
      { metric: "10M+", label: "Records, referential integrity" },
      { metric: "2", label: "Global pharma clients" },
    ],
    tech: ["Azure Data Factory", "Databricks", "ADLS Gen2", "PySpark", "SQL"],
  },
];

export const modules = [
  "Machine Learning & AI",
  "Deep Learning",
  "Big Data Systems",
  "Information Retrieval",
  "Statistics & Probability",
];

export const awards = [
  {
    icon: "🥉",
    title: "Kaggle Bronze Medal — Kaggriculture",
    detail:
      "Awarded a bronze medal in the Kaggriculture competition on Kaggle.",
    year: "2026",
    link: "https://www.kaggle.com/competitions/kaggriculture",
  },
  {
    icon: "🥈",
    title: "2nd Place, Kaggle — $3,000 Prize",
    detail:
      "LLM Agentic Legal Information Retrieval competition — Team HyperX; agentic hybrid retrieval of Swiss legal citations",
    year: "2026",
  },
  {
    icon: "🥈",
    title: "Runner-Up, GUTS 2025 Hackathon",
    detail:
      "Morgan Stanley — built AURA MCP Gateway (agentic network management, 92% pipeline completion)",
    year: "2025",
  },
  {
    icon: "🥇",
    title: "Gold Medal, CodeOlympic26",
    detail: "Glasgow University Tech Society competitive programming",
    year: "2026",
  },
  {
    icon: "🎓",
    title: "£10,000 Excellence Scholarship",
    detail: "University of Glasgow, MSc Data Science",
    year: "2025",
  },
  {
    icon: "🏅",
    title: "IQVIA Impact Award",
    detail: "FY23–24 recognition for platform contribution",
    year: "2024",
  },
  {
    icon: "🏅",
    title: "IQVIA Spotlight Award",
    detail: "FY24–25 recognition",
    year: "2025",
  },
  {
    icon: "🏅",
    title: "Axtria Bravo Award",
    detail: "2022 recognition",
    year: "2022",
  },
];
