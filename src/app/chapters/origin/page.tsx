"use client";

import { motion } from "framer-motion";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SpeechBubble, MangaAvatar, NarratorBox } from "@/components/comic";

const timelineEvents = [
  {
    year: "2018–22",
    title: "Academic Foundation",
    description:
      "B.Tech Computer Science (AI & ML) at UPES, India. Built the foundations in Python, SQL, and machine learning.",
    icon: "🎓",
  },
  {
    year: "2022",
    title: "First Arc: Axtria",
    description:
      "Analyst Trainee on Johnson & Johnson MDM and AstraZeneca O2 — engineered Azure data-pipeline frameworks across 10M+ records under regulatory compliance.",
    icon: "🧭",
  },
  {
    year: "2022–24",
    title: "Levelling Up: IQVIA",
    description:
      "Data Analyst on GSK's omnichannel platform — built a reusable PySpark data-quality rule engine that improved reliability 40% and was adopted by 2 more client pods.",
    icon: "🛠️",
  },
  {
    year: "2024–25",
    title: "Platform Owner: IQVIA",
    description:
      "Data Engineer owning pipeline reliability for GSK's €2B+ European portfolio — CDC pipelines at 99.8% accuracy across 10M+ records/batch, zero silent failures over 8 months.",
    icon: "⚙️",
  },
  {
    year: "2025–26",
    title: "Current Quest: Glasgow",
    description:
      "MSc Data Science at the University of Glasgow as a £10,000 Excellence Scholar — going deep on GenAI: fine-tuning LLMs, hybrid RAG, and agentic systems on MCP. Currently a Data System & CRM Migration Intern at Street Connect (Jun 2026 – present).",
    icon: "🚀",
  },
];

export default function OriginStoryPage() {
  return (
    <ChapterLayout
      chapterNumber={1}
      title="About Me"
      subtitle="Background & journey"
      nextChapter={{ href: "/chapters/skills", label: "Skills" }}
    >
      {/* Opening Panel */}
      <ComicPanel className="mb-8">
        <NarratorBox position="top-left" className="mb-6">
          From quality checks to platform architecture — 3+ years in regulated
          global pharma, now going deep on GenAI.
        </NarratorBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <MangaAvatar expression="thinking" size="lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <SpeechBubble tailPosition="left">
              <p className="text-[#1a1a1a] leading-relaxed">
                I&apos;m <strong>Nitesh Ranjan Singh</strong>, a Glasgow-based Data
                Engineer with 3+ years designing production-scale data platforms
                for GSK, Johnson &amp; Johnson, and AstraZeneca — now completing an
                MSc in Data Science at the University of Glasgow.
              </p>
            </SpeechBubble>

            <SpeechBubble tailPosition="left">
              <p className="text-[#1a1a1a] leading-relaxed">
                I like the hard, unglamorous middle of the stack: reliable
                pipelines, clean data models, and systems that don&apos;t break
                silently at 2am — plus fine-tuned LLMs, hybrid RAG, and agentic
                systems built on the Model Context Protocol.
              </p>
            </SpeechBubble>
          </motion.div>
        </div>
      </ComicPanel>

      {/* Timeline Panel */}
      <ComicPanel className="mb-8">
        <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6 text-center">
          THE JOURNEY SO FAR
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#d4a84b] transform md:-translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className={`relative flex items-start gap-4 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#b5544a] border-4 border-[#f5f0e1] rounded-full transform -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] comic-panel p-4 ${
                    index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 justify-start md:justify-end">
                    <span className="text-2xl">{event.icon}</span>
                    <span className="font-[family-name:var(--font-bangers)] text-xl text-[#b5544a]">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a] mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ComicPanel>

      {/* Core Motivation Panel */}
      <ComicPanel>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6">
            PROFESSIONAL FOCUS
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="comic-panel p-6 bg-[#d4a84b]/20 max-w-2xl mx-auto"
          >
            <p className="font-[family-name:var(--font-courier-prime)] text-lg text-[#1a1a1a] leading-relaxed">
              &ldquo;I care about explainability, data reliability, and building
              things people actually use — CDC pipelines trusted by 200+
              stakeholders, dashboards with zero silent failures, and LLMs
              served at &lt;200ms P95 latency.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex justify-center gap-4 flex-wrap"
          >
            <span className="px-3 py-1 bg-[#4a6fa5] text-white text-sm font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a]">
              📍 Glasgow, Scotland
            </span>
            <span className="px-3 py-1 bg-[#6b8e4e] text-white text-sm font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a]">
              ✓ Open to Summer 2026 roles
            </span>
            <span className="px-3 py-1 bg-[#7a5c91] text-white text-sm font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a]">
              🎓 £10K Excellence Scholar @ UofG
            </span>
            <span className="px-3 py-1 bg-[#b5544a] text-white text-sm font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a]">
              🇬🇧 Graduate Route eligible — no sponsorship needed
            </span>
          </motion.div>
        </div>
      </ComicPanel>
    </ChapterLayout>
  );
}
