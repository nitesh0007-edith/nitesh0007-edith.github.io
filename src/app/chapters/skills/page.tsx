"use client";

import { motion } from "framer-motion";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SoundEffect } from "@/components/comic";

const skillCategories = [
  {
    title: "Data Engineering",
    icon: "🏗️",
    color: "bg-[#b5544a]",
    description: "Core strength — pipelines that don't break silently",
    tools: [
      { name: "ETL/ELT & CDC", usage: "Pipelines" },
      { name: "Lakehouse / Medallion", usage: "Architecture" },
      { name: "Dimensional Modelling", usage: "Star, SCD" },
      { name: "Data Quality", usage: "Governance" },
    ],
  },
  {
    title: "Cloud (Azure)",
    icon: "☁️",
    color: "bg-[#4a6fa5]",
    description: "Certified — DP-203 & DP-700",
    tools: [
      { name: "Databricks", usage: "Certified" },
      { name: "Data Factory", usage: "Orchestration" },
      { name: "Synapse + ADLS Gen2", usage: "Warehouse" },
      { name: "Fabric / Delta Lake", usage: "Lakehouse" },
    ],
  },
  {
    title: "Languages",
    icon: "💻",
    color: "bg-[#6b8e4e]",
    description: "Daily drivers",
    tools: [
      { name: "Python", usage: "Primary" },
      { name: "SQL", usage: "Everywhere" },
      { name: "PySpark", usage: "Big data" },
      { name: "R", usage: "Statistics" },
    ],
  },
  {
    title: "GenAI / LLM",
    icon: "🤖",
    color: "bg-[#7a5c91]",
    description: "Fine-tuning to serving, end to end",
    tools: [
      { name: "QLoRA / PEFT / DPO", usage: "Fine-tuning" },
      { name: "vLLM + Quantisation", usage: "Serving" },
      { name: "Hybrid RAG", usage: "BM25 + dense" },
      { name: "MCP Agents", usage: "Tool use" },
    ],
  },
  {
    title: "ML & Data Science",
    icon: "🧠",
    color: "bg-[#d4a84b]",
    description: "Models with explanations attached",
    tools: [
      { name: "PyTorch", usage: "Deep learning" },
      { name: "GNNs (LightGCN)", usage: "Recommenders" },
      { name: "SHAP / LIME / PFI", usage: "Explainability" },
      { name: "scikit-learn", usage: "Classic ML" },
    ],
  },
  {
    title: "Engineering & MLOps",
    icon: "⚙️",
    color: "bg-[#1a1a1a]",
    description: "Shipping and keeping it running",
    tools: [
      { name: "Docker + Kubernetes", usage: "AKS" },
      { name: "CI/CD", usage: "GitHub Actions" },
      { name: "FastAPI", usage: "REST APIs" },
      { name: "Dagster / dbt", usage: "Orchestration" },
    ],
  },
];

const certifications = [
  { name: "Azure Data Engineer Associate", badge: "DP-203" },
  { name: "Fabric Data Engineer Associate", badge: "DP-700" },
  { name: "Databricks Data Engineer Associate", badge: "Databricks" },
  { name: "IBM Data Science Professional", badge: "IBM" },
];

export default function SkillsPage() {
  return (
    <ChapterLayout
      chapterNumber={2}
      title="Skills"
      subtitle="Technical expertise & tools"
      prevChapter={{ href: "/chapters/origin", label: "About Me" }}
      nextChapter={{ href: "/chapters/experience", label: "Experience" }}
    >
      {/* Header Effect */}
      <div className="flex justify-center mb-8">
        <SoundEffect text="TECH STACK" size="lg" color="yellow" rotate={-3} />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ComicPanel className="h-full p-0 overflow-hidden">
              {/* Header */}
              <div
                className={`${category.color} text-white p-4 border-b-4 border-[#1a1a1a]`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-bangers)] text-xl">
                      {category.title}
                    </h3>
                    <p className="text-xs opacity-90 font-[family-name:var(--font-courier-prime)]">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="p-4 space-y-3">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between p-2 bg-[#f5f0e1] border-2 border-[#e8dcc8] hover:border-[#1a1a1a] transition-colors"
                  >
                    <span className="font-[family-name:var(--font-bangers)] text-[#1a1a1a]">
                      {tool.name}
                    </span>
                    <span className="text-xs text-[#8b7355] font-[family-name:var(--font-courier-prime)] bg-[#e8dcc8] px-2 py-0.5">
                      {tool.usage}
                    </span>
                  </div>
                ))}
              </div>
            </ComicPanel>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <ComicPanel>
          <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6 text-center">
            BADGES EARNED
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="quest-badge flex items-center gap-2"
              >
                <span className="text-[#b5544a]">◆</span>
                {cert.name}
                <span className="bg-[#1a1a1a] text-[#d4a84b] px-2 py-0.5 text-[0.65rem]">
                  {cert.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </ComicPanel>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8"
      >
        <ComicPanel className="bg-[#d4a84b]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#b5544a]">
                3+
              </span>
              <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                Years in production data
              </p>
            </div>
            <div className="p-4">
              <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#4a6fa5]">
                10M+
              </span>
              <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                Records per batch
              </p>
            </div>
            <div className="p-4">
              <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#6b8e4e]">
                99.8%
              </span>
              <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                Data accuracy
              </p>
            </div>
            <div className="p-4">
              <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#7a5c91]">
                4
              </span>
              <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                Certifications
              </p>
            </div>
          </div>
        </ComicPanel>
      </motion.div>
    </ChapterLayout>
  );
}
