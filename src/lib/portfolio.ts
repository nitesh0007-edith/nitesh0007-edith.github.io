export type ProjectStatus =
  | "SHIPPED"
  | "KAGGLE 2ND PLACE"
  | "HACKATHON RUNNER-UP"
  | "IN PROGRESS"
  | "PILOT COMPLETE"
  | "RESEARCH COMPLETE";

export const projectCategories = [
  "Data Engineering",
  "AI Systems",
  "Machine Learning",
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

export const YOUTUBE = "https://www.youtube.com/@NiteshExplainsAI";
export const TOPMATE = "https://topmate.io/nitesh2039";
export const FREE_MENTORING = `${TOPMATE}/107348`;

export const testimonials = [
  {
    name: "Ayushi",
    date: "2026-03-18",
    rating: 5,
    featured: true,
    quote:
      "Nitesh was very patient in answering all the doubts and gave clarity for next steps",
  },
  {
    name: "navya sri",
    date: "2026-08-21",
    rating: 5,
    featured: true,
    quote:
      "Nitesh Ranjan has been very friendly, patient, and supportive throughout the process. He clearly explained how he cracked interviews in the UK and helped me understand what strategies could work for me. He provided valuable guidance on how to get more interview opportunities, improve my resume, use Claude AI effectively, and build a strong portfolio. His practical advice and willingness to patiently explain everything made the sessions really helpful.",
    excerpt:
      "He provided valuable guidance on how to get more interview opportunities, improve my resume, use Claude AI effectively, and build a strong portfolio.",
  },
  {
    name: "Megha Joshi",
    date: "2026-02-04",
    rating: 5,
    featured: true,
    quote:
      "Thank you for such a great mock interview session. It was very engaging and helped me understand my strengths and areas for improvement clearly. Your guidance has given me more confidence and direction for real interviews.",
  },
  {
    name: "Preetham",
    date: "2025-01-13",
    rating: 5,
    featured: true,
    quote:
      "Thank you, Nitesh I had an insightful 1-to-1 session , he was listening my every bit of the conversation and with his expertise and guidance I was able identify the stand points through which I was clear with the next set of process(Roadmap) , the best part of the conversation he was able to guide me on the importance of cloud focused approach in todays industry I highly recommend for anyone looking to deepen their understanding of data engineering.",
    excerpt:
      "the best part of the conversation he was able to guide me on the importance of cloud focused approach in todays industry I highly recommend for anyone looking to deepen their understanding of data engineering.",
  },
  {
    name: "Gaurav",
    date: "2026-10-30",
    rating: 5,
    featured: false,
    quote: "It was really helpful session, all my doubts are cleared",
  },
  {
    name: "Anonymous",
    date: "2026-02-21",
    rating: 5,
    featured: false,
    quote:
      "It was truly a great experience speaking with Nitesh. I had many questions and doubts, and he addressed everything patiently, offering clear guidance that gave me confidence about my career growth.",
  },
  {
    name: "Mukul Yadav",
    date: "2025-11-21",
    rating: 5,
    featured: false,
    quote:
      "It was indeed a insightful session outlining various aspects, a in-depth career Outline",
  },
  {
    name: "Anonymous",
    date: "2025-01-25",
    rating: 5,
    featured: false,
    quote:
      "Session was brilliant Nitesh was amazing I think one of the best sessions.Helped me with resume and buliding a more good profile.",
  },
  {
    name: "Maladi vinay",
    date: "2025-01-10",
    rating: 5,
    featured: false,
    quote:
      "I had an incredible 1:1 session with Nitesh Ranjan. He helped me identify the right path to choose. Nitesh heard me patiently and jotted down my issues. He guided me through the issues and covered it all with clarity and depth. What stood out was how approachable and insightful he was—breaking down complex topics into manageable steps. By the end of the call, I had a clear roadmap and renewed confidence in my journey.",
    excerpt:
      "I had an incredible 1:1 session with Nitesh Ranjan. He helped me identify the right path to choose. Nitesh heard me patiently and jotted down my issues. He guided me through the issues and covered it all with clarity and depth.",
  },
  {
    name: "Neeli Rekha",
    date: "2024-03-20",
    rating: 5,
    featured: false,
    quote: "Great session",
  },
  {
    name: "mahesh joshi",
    date: "2026-03-09",
    rating: 5,
    featured: false,
    quote:
      "Very honest and professional guidance perfect all confusion reset 10 out of 10 sir",
  },
  {
    name: "Prashant Iyer",
    date: "2025-09-28",
    rating: 5,
    featured: false,
    quote:
      "I had received amazing guidance from Nitesh, who had gone above and beyond assisting me in my professional journey. Will continue to seek and learn more.",
  },
  {
    name: "Amit",
    date: "2024-12-08",
    rating: 5,
    featured: false,
    quote: "Great Guidance 👍🏼",
  },
  {
    name: "Saurabh",
    date: "2024-03-18",
    rating: 5,
    featured: false,
    quote: null,
  },
];

export const channelVideos = [
  {
    id: "mn7rB6-7dBo",
    title: "Backpropagation by Hand",
    detail:
      "A forward pass, a backward pass and one update on a 2-2-1 network.",
    image: "backpropagation",
  },
  {
    id: "5yt87uK46nU",
    title: "Gradient Descent by Hand",
    detail: "Three steps downhill, with the learning rate changing the path.",
    image: "gradient-descent",
  },
  {
    id: "gyGn9Vc-19Q",
    title: "SVD and PCA Step by Step",
    detail: "Finding the main direction of a small dataset.",
    image: "svd-pca",
  },
] as const;

export const caseFiles: Project[] = [
  {
    id: 10,
    displayTitle: "DataSentinel",
    discipline: "DATA RELIABILITY",
    categories: ["Data Engineering", "AI Systems"],
    featured: true,
    title: "DataSentinel: Data Reliability",
    icon: "🛡️",
    status: "SHIPPED",
    brief:
      "I built DataSentinel to catch the pipeline failures a green job status misses. It checks the data, connects regressions to Git changes and tests a fix after operator approval.",
    approach: [
      "Profiled row counts, schemas, nulls, duplicates and distributions; the demo includes a successful job that silently loses 60.2% of its rows",
      "Connected each diagnosis to the relevant Git diff, file, line and commit",
      "Required approval before applying a reverse patch, then reran and re-profiled the data with rollback on failure",
      "Kept LLM explanations tied to the evidence package; the backend has 62 tests",
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
    id: 9,
    displayTitle: "HyperX",
    discipline: "AWARD-WINNING RETRIEVAL",
    categories: ["AI Systems", "Research"],
    title: "HyperX: Legal Citation Retrieval",
    icon: "⚖️",
    status: "KAGGLE 2ND PLACE",
    brief:
      "Our team, HyperX, placed second in Kaggle’s legal retrieval competition and won $3,000. We retrieved Swiss legal citations for English queries using a hybrid search and citation-graph pipeline.",
    approach: [
      "Hybrid retrieval: rule-based EN→DE query expansion feeding BM25 plus dual dense indexes (multilingual-E5-large + FAISS) over statutes and court decisions, fused with Reciprocal Rank Fusion",
      "Cross-encoder re-ranking to top-50, then citation-graph expansion (BGE family walk + co-occurrence) and 2-hop re-retrieval",
      "Handled a hard train/test distribution shift. German training queries vs English test queries, median 2 vs 22 gold citations. by tuning every threshold on validation, not train",
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
    impact:
      "Second place and a $3,000 team prize in Kaggle’s legal retrieval competition.",
    link: "https://www.kaggle.com/competitions/llm-agentic-legal-information-retrieval",
    repo: "https://github.com/Dharundp6/LLM_agentic",
    featured: true,
  },
  {
    id: 24,
    title: "LLM Judge Reliability: Proposals and Pilot Studies",
    displayTitle: "LLM Judge Reliability",
    discipline: "CURRENT RESEARCH",
    categories: ["Research", "Machine Learning"],
    icon: "🔬",
    status: "PILOT COMPLETE",
    brief:
      "I’m studying when an LLM judge is useful for evaluation, how human disagreement limits label savings, and how a judge’s preferences change with its base model and training recipe.",
    approach: [
      "Completed initial pilots on MT-Bench, MultiPref, ChaosNLI and a TREC Deep Learning 2023 judged-pool retrieval experiment",
      "Separated item-level variation from rater disagreement; the MultiPref pilot estimates a roughly 21% ceiling on label savings under the one-vote-per-item setup, with a 95% interval of 19–22%",
      "Compared per-system corrections and anytime-valid stopping rules; judges gave little or no sequential label saving in the tested settings",
      "Tested weight interpolation at 1.5B and 7B and trained small judges with frozen heads, LoRA and full fine-tuning; weight proximity did not support the original favouritism hypothesis",
      "Kept negative findings and protocol corrections in the research record. These are independent pilot results and draft proposals, with broader validation still needed",
    ],
    tools: [
      "Python",
      "PyTorch",
      "LoRA",
      "Bootstrap Inference",
      "Prediction-Powered Inference",
      "Information Retrieval",
    ],
    impact:
      "Two current PhD proposal directions, backed by pilot code and saved results. Seeking funded PhD opportunities in LLM evaluation, information retrieval and responsible machine learning.",
    featured: true,
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
      "My MSc dissertation asked whether provider fairness is better addressed during training or after ranking. I compared both choices across five datasets and ten seeds, and found that the answer depends on the dataset.",
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
      "MSc dissertation submitted in September 2026. This work led to my current interest in how we evaluate models and whose outcomes the metrics capture.",
    featured: true,
  },
  {
    id: 11,
    displayTitle: "LumaLearn",
    discipline: "AGENTIC RECOMMENDATIONS",
    categories: ["AI Systems", "Machine Learning"],
    featured: true,
    title: "LumaLearn: SmartReco",
    icon: "🧠",
    status: "SHIPPED",
    brief:
      "I built LumaLearn to turn a learner’s recent activity into useful recommendations. Its LangGraph workflow retrieves catalogue items, checks the evidence and limits both retries and cost.",
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
      "Deployed on Render, with recommendations restricted to retrieved catalogue items, 10 automated tests and CI checks",
    link: "https://lumalearn-smartreco.onrender.com",
    repo: "https://github.com/nitesh0007-edith/smartreco-lumalearn",
  },
  {
    id: 12,
    displayTitle: "SasineSense",
    discipline: "DOCUMENT INTELLIGENCE",
    categories: ["AI Systems"],
    title: "SasineSense: Scottish Document Intelligence",
    icon: "📜",
    status: "SHIPPED",
    brief:
      "Historical property records are difficult to read and easy to misinterpret. I built a document pipeline that keeps the source of each extracted field and sends uncertain or conflicting values for review.",
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
    featured: true,
  },
  {
    id: 17,
    displayTitle: "TrafficFlowBench",
    discipline: "TRAFFIC FORECASTING",
    categories: ["Machine Learning", "Research"],
    title: "TrafficFlowBench. Traffic State & Flow Modelling",
    icon: "🚦",
    status: "IN PROGRESS",
    brief:
      "For TrafficFlowBench, I worked on traffic-state reconstruction, queue forecasting and origin–destination estimation. I combined temporal features and LightGBM with chronological validation and physical consistency checks.",
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
    featured: false,
  },
  {
    id: 1,
    displayTitle: "LectureLens",
    discipline: "HYBRID RAG COPILOT",
    categories: ["AI Systems"],
    title: "LectureLens: Course-Material Retrieval",
    icon: "📚",
    status: "SHIPPED",
    brief:
      "I built LectureLens to answer questions from lecture materials with citations. I compared retrieval configurations against manually checked relevance labels and made the system abstain when it could not support an answer.",
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
    impact:
      "Hybrid retrieval evaluated across five configurations, with 43 tests and manually checked relevance labels.",
    link: "https://github.com/nitesh0007-edith/lecturelens",
    featured: false,
  },
  {
    id: 3,
    displayTitle: "AURA",
    discipline: "MCP GATEWAY",
    categories: ["AI Systems"],
    title: "AURA: Network-Management Gateway",
    icon: "🛰️",
    status: "HACKATHON RUNNER-UP",
    brief:
      "At GUTS 2025, our team built an MCP gateway for telecom network management and finished runner-up. I worked on tool schemas, context injection and coordination across six network tools.",
    approach: [
      "Architected the tool schema and context injection for the agent loop",
      "Coordinated multi-step agent workflows across 6 network-management tools",
      "Ran the whole system on serverless AWS Lambda",
    ],
    tools: ["AWS Lambda", "Anthropic MCP", "Agent coordination"],
    impact: "Runner-up at GUTS 2025, in the Morgan Stanley challenge.",
    featured: false,
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
      "I’m helping Street Connect migrate its data systems and CRM to a new platform.",
    contributions: [
      "Supporting the migration of Street Connect's data systems and CRM",
      "Maintaining reconciliation tooling to check the records being migrated",
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
      "At IQVIA, I worked on pipeline reliability for GSK’s European omnichannel analytics platform, supporting teams across the UK, Germany and Italy.",
    contributions: [
      "Built an Azure omnichannel decision-support platform (Databricks, PySpark, ADLS Gen2, Synapse) integrating multi-source healthcare data from conception through deployment",
      "Built a Change Data Capture pipeline with schema-validation gates that block on failure and alert the team; recorded zero silent dashboard failures over eight months",
      "Automated ETL with YAML mappings, reusable ADF pipelines and SQL quality logs, cutting new-market onboarding from three weeks to one and manual QA effort by 65%",
      "Built Power BI reports tracking 50+ KPIs for 200+ stakeholders, reducing report turnaround from three days to the same day",
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
      "I built reusable data-quality tools for GSK’s omnichannel platform. Two other client teams adopted the rule engine.",
    contributions: [
      "Built a PySpark rule engine for nulls, duplicates, volume reconciliation and distribution drift, with checks configured in YAML",
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
      "My first industry role was at Axtria, working on Azure data pipelines for pharmaceutical clients and learning how to maintain reliable healthcare datasets.",
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
    title: "Kaggle Bronze Medal: Kaggriculture",
    detail:
      "Awarded a bronze medal in the Kaggriculture competition on Kaggle.",
    year: "2026",
    link: "https://www.kaggle.com/competitions/kaggriculture",
  },
  {
    icon: "🥈",
    title: "2nd Place, Kaggle: $3,000 Prize",
    detail:
      "LLM Agentic Legal Information Retrieval competition. Team HyperX; agentic hybrid retrieval of Swiss legal citations",
    year: "2026",
  },
  {
    icon: "🥈",
    title: "Runner-Up, GUTS 2025 Hackathon",
    detail:
      "Morgan Stanley challenge, with our AURA network-management MCP gateway",
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
