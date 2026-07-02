"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SpeechBubble, SoundEffect } from "@/components/comic";

const experiences = [
  {
    id: 1,
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
    tech: ["Azure Databricks", "PySpark", "ADF", "Synapse", "ADLS Gen2", "Power BI"],
  },
  {
    id: 2,
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
    tech: ["PySpark", "SQL", "Azure Databricks", "YAML rule registry", "Power BI"],
  },
  {
    id: 3,
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

export default function ExperiencePage() {
  const [currentExp, setCurrentExp] = useState(0);

  const goToPrev = () => {
    setCurrentExp((prev) => (prev > 0 ? prev - 1 : experiences.length - 1));
  };

  const goToNext = () => {
    setCurrentExp((prev) => (prev < experiences.length - 1 ? prev + 1 : 0));
  };

  const experience = experiences[currentExp];

  return (
    <ChapterLayout
      chapterNumber={3}
      title="Experience"
      subtitle="Analyst Trainee → Data Analyst → Data Engineer, in regulated global pharma"
      prevChapter={{ href: "/chapters/skills", label: "Skills" }}
      nextChapter={{ href: "/chapters/projects", label: "Projects" }}
    >
      {/* Experience Counter */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          onClick={goToPrev}
          className="p-2 bg-[#f5f0e1] border-[3px] border-[#1a1a1a] hover:bg-[#d4a84b] transition-colors"
          aria-label="Previous experience"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="font-[family-name:var(--font-bangers)] text-xl text-[#8b7355]">
          ROLE {currentExp + 1} OF {experiences.length}
        </span>

        <button
          onClick={goToNext}
          className="p-2 bg-[#f5f0e1] border-[3px] border-[#1a1a1a] hover:bg-[#d4a84b] transition-colors"
          aria-label="Next experience"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Experience Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ComicPanel className="mb-6">
            {/* Experience Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-4 border-b-4 border-dashed border-[#e8dcc8]">
              <div>
                <SoundEffect
                  text={`ROLE ${experience.id}`}
                  size="sm"
                  color="red"
                  className="mb-2"
                />
                <h2 className="font-[family-name:var(--font-bangers)] text-3xl text-[#1a1a1a]">
                  {experience.title}
                </h2>
                <p className="font-[family-name:var(--font-bangers)] text-lg text-[#4a6fa5]">
                  {experience.company}
                </p>
                <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                  {experience.location}
                </p>
              </div>
              <span className="px-4 py-2 bg-[#d4a84b] text-[#1a1a1a] border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)]">
                {experience.period}
              </span>
            </div>

            {/* Overview */}
            <div className="mb-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355] mb-2">
                OVERVIEW:
              </h3>
              <SpeechBubble>
                <p className="text-[#1a1a1a]">{experience.brief}</p>
              </SpeechBubble>
            </div>

            {/* Key Contributions */}
            <div className="mb-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355] mb-3">
                KEY CONTRIBUTIONS:
              </h3>
              <ul className="space-y-2">
                {experience.contributions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#b5544a] font-bold">→</span>
                    <span className="text-[#1a1a1a] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="mb-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355] mb-3">
                IMPACT:
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {experience.results.map((result, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-[#6b8e4e]/20 border-2 border-[#6b8e4e]"
                  >
                    <span className="font-[family-name:var(--font-bangers)] text-2xl text-[#6b8e4e]">
                      {result.metric}
                    </span>
                    <p className="text-xs text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-[family-name:var(--font-bangers)] text-sm text-[#8b7355] mb-2">
                TECHNOLOGIES:
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#1a1a1a] text-[#f5f0e1] text-xs font-[family-name:var(--font-courier-prime)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ComicPanel>
        </motion.div>
      </AnimatePresence>

      {/* Experience Dots */}
      <div className="flex justify-center gap-2" role="tablist" aria-label="Experience navigation">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setCurrentExp(index)}
            className={`w-3 h-3 rounded-full border-2 border-[#1a1a1a] transition-colors ${
              index === currentExp ? "bg-[#b5544a]" : "bg-[#f5f0e1]"
            }`}
            aria-label={`Go to ${exp.company} experience`}
            aria-selected={index === currentExp}
            role="tab"
          />
        ))}
      </div>
    </ChapterLayout>
  );
}
