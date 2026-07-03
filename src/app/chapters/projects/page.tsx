"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SoundEffect } from "@/components/comic";

type ProjectStatus =
  | "SHIPPED"
  | "KAGGLE WINNER"
  | "HACKATHON RUNNER-UP"
  | "IN PROGRESS"
  | "DESIGNED";

interface Project {
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

const statusColors: Record<ProjectStatus, string> = {
  SHIPPED: "bg-[#6b8e4e]",
  "KAGGLE WINNER": "bg-[#b5544a]",
  "HACKATHON RUNNER-UP": "bg-[#d4a84b]",
  "IN PROGRESS": "bg-[#4a6fa5]",
  DESIGNED: "bg-[#7a5c91]",
};

const caseFiles: Project[] = [
  {
    id: 9,
    title: "HyperX — Agentic Legal Citation Retrieval",
    icon: "⚖️",
    status: "KAGGLE WINNER",
    brief:
      "Won a $3,000 prize as Team HyperX in Kaggle's LLM Agentic Legal Information Retrieval competition — retrieving Swiss legal citations for English queries, scored on citation-level Macro F1.",
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
    impact: "$3,000 prize winner — Team HyperX, Kaggle",
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
    tools: ["FastAPI", "Next.js", "BM25 + BGE", "Qdrant", "Groq Llama 3.3", "Docker"],
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
    tools: ["LLaMA 3 8B", "Mistral 7B", "QLoRA + PEFT", "DPO / TRL", "vLLM", "AKS"],
    impact: "3× throughput at <200ms P95 latency, used by internal analytics stakeholders",
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
    impact: "Runner-up at GUTS 2025 Hackathon (Morgan Stanley) — 92% pipeline completion",
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
    impact: "99.79% accuracy — and a lesson in trusting class-balance audits over aggregate numbers",
    link: "https://github.com/nitesh0007-edith/ECG-Explainable-Machine-Learning",
  },
  {
    id: 6,
    title: "Explainable & Fair Multi-Stakeholder Recommender",
    icon: "🔬",
    status: "IN PROGRESS",
    brief:
      "MSc dissertation: neuro-symbolic recommender balancing competing stakeholder objectives with LLM-generated, grounded explanations. Targeting ACM RecSys 2026.",
    approach: [
      "Multi-objective loss: α·L_buyer (BPR accuracy) + β·L_seller (Gini fairness) + γ·L_platform (diversity/engagement)",
      "GNN (LightGCN) over a knowledge graph built on the Amazon product dataset",
      "Evaluation spans NDCG@10, Recall@10, seller-exposure Gini, and human-rated explanation faithfulness, comprehensibility, and persuasiveness",
    ],
    tools: ["PyTorch", "LightGCN", "Knowledge Graph", "LLM explainability"],
    impact: "In progress — MSc research targeting ACM RecSys 2026",
  },
  {
    id: 7,
    title: "JobFlowUK — Job-Search Automation",
    icon: "🤖",
    status: "SHIPPED",
    brief:
      "Full-stack automation system that discovers, scores, and tailors applications for UK data roles — operated daily as personal tooling.",
    approach: [
      "End-to-end pipeline: 9 job-board scrapers + 78 company ATS APIs → SHA-256 deduplication",
      "Claude-powered 6-dimension evaluation with hard-exclusion filters before any role surfaces",
      "8 CV archetypes with JD-aware tailoring, cover-letter and STAR-story mapping, ATS-clean PDF rendering",
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
      "Autonomous data-reliability layer where a Claude tool-use agent diagnoses pipeline incidents and opens CI-validated fix PRs for human approval. Designed — build starts Sep 2026.",
    approach: [
      "Statistical detectors (PSI/KS distribution shift, seasonal volume z-scores, SCD2/CDC invariants) raise incidents",
      "An MCP-driven agent diagnoses root cause via lineage-derived blast radius and remediates through GitHub PRs with human approval",
      "Production guardrails: read-only MCP tools, path-scoped write allow-list, prompt-injection-resistant context, budget circuit breakers",
    ],
    tools: ["Dagster", "dbt", "Delta Lake", "DuckDB", "Claude / MCP", "GitHub Actions"],
    impact: "Designed and specified — build starts September 2026",
  },
];

export default function ProjectsPage() {
  const [selectedCase, setSelectedCase] = useState<Project | null>(null);

  return (
    <ChapterLayout
      chapterNumber={4}
      title="Projects"
      subtitle="Selected work — status marked honestly"
      prevChapter={{ href: "/chapters/experience", label: "Experience" }}
      nextChapter={{ href: "/chapters/education", label: "Education" }}
    >
      {/* Header Effect */}
      <div className="flex justify-center mb-8">
        <SoundEffect text="QUEST LOG" size="lg" color="red" rotate={3} />
      </div>

      {/* Case Files Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {caseFiles.map((caseFile, index) => (
          <motion.button
            key={caseFile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedCase(caseFile)}
            className="text-left"
          >
            <ComicPanel className="h-full p-4 hover:translate-x-1 hover:-translate-y-1 transition-transform cursor-pointer">
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-3">
                <span className="text-3xl">{caseFile.icon}</span>
                <span
                  className={`px-2 py-0.5 text-[10px] font-[family-name:var(--font-bangers)] text-white border-2 border-[#1a1a1a] ${
                    statusColors[caseFile.status]
                  }`}
                >
                  {caseFile.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a] mb-2">
                {caseFile.title}
              </h3>

              {/* Brief Preview */}
              <p className="text-xs text-[#8b7355] font-[family-name:var(--font-courier-prime)] line-clamp-2 mb-3">
                {caseFile.brief}
              </p>

              {/* Tools Preview */}
              <div className="flex flex-wrap gap-1">
                {caseFile.tools.slice(0, 2).map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-[#e8dcc8] text-[10px] text-[#5c4d3c]"
                  >
                    {tool}
                  </span>
                ))}
                {caseFile.tools.length > 2 && (
                  <span className="px-2 py-0.5 bg-[#e8dcc8] text-[10px] text-[#5c4d3c]">
                    +{caseFile.tools.length - 2}
                  </span>
                )}
              </div>

              {/* Click Hint */}
              <p className="mt-3 text-xs text-[#b5544a] font-[family-name:var(--font-bangers)]">
                CLICK TO OPEN DOSSIER →
              </p>
            </ComicPanel>
          </motion.button>
        ))}
      </div>

      {/* More on GitHub */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex justify-center"
      >
        <a
          href="https://github.com/nitesh0007-edith"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-[#f5f0e1] border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <Github size={20} />
          77 public repos — more on GitHub
        </a>
      </motion.div>

      {/* Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1a1a1a]/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#f5f0e1] border-[4px] border-[#1a1a1a] max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#1a1a1a] text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedCase.icon}</span>
                  <h2 className="font-[family-name:var(--font-bangers)] text-xl">
                    {selectedCase.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-1 hover:bg-white/20 rounded"
                  aria-label="Close dossier"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Status */}
                <div className="flex justify-center">
                  <span
                    className={`px-4 py-1 text-sm font-[family-name:var(--font-bangers)] text-white border-2 border-[#1a1a1a] ${
                      statusColors[selectedCase.status]
                    }`}
                  >
                    {selectedCase.status}
                  </span>
                </div>

                {/* Brief */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-[#8b7355] mb-2">
                    BRIEF:
                  </h3>
                  <p className="text-[#1a1a1a] font-[family-name:var(--font-courier-prime)]">
                    {selectedCase.brief}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-[#8b7355] mb-2">
                    APPROACH:
                  </h3>
                  <ul className="space-y-2">
                    {selectedCase.approach.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#b5544a] font-bold">
                          {index + 1}.
                        </span>
                        <span className="text-[#1a1a1a] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-[#8b7355] mb-2">
                    TOOLS:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-[#1a1a1a] text-[#f5f0e1] text-sm font-[family-name:var(--font-courier-prime)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-[#8b7355] mb-2">
                    IMPACT:
                  </h3>
                  <div className="p-4 bg-[#6b8e4e]/20 border-2 border-[#6b8e4e]">
                    <p className="text-[#1a1a1a] font-semibold">
                      {selectedCase.impact}
                    </p>
                  </div>
                </div>

                {/* Links */}
                {(selectedCase.link || selectedCase.repo) && (
                  <div className="flex justify-center gap-3 flex-wrap">
                    {selectedCase.link && (
                      <a
                        href={selectedCase.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#4a6fa5] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] hover:bg-[#3a5f95] transition-colors"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    )}
                    {selectedCase.repo && (
                      <a
                        href={selectedCase.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-[#f5f0e1] border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] hover:bg-[#3a3a3a] transition-colors"
                      >
                        <Github size={16} /> View Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ChapterLayout>
  );
}
