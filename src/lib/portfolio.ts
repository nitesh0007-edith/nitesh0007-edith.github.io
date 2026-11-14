export type ProjectStatus =
  | "SHIPPED"
  | "KAGGLE 2ND PLACE"
  | "HACKATHON RUNNER-UP"
  | "IN PROGRESS"
  | "DESIGNED"
  | "RESEARCH COMPLETE";

export interface Project {
  id: number;
  title: string;
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
