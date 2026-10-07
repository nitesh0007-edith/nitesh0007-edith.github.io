"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SoundEffect } from "@/components/comic";

const modules = [
  "Machine Learning & AI",
  "Deep Learning",
  "Big Data Systems",
  "Information Retrieval",
  "Statistics & Probability",
];

const awards = [
  {
    icon: "🥉",
    title: "Kaggle Bronze Medal — Kaggriculture",
    detail: "Awarded a bronze medal in the Kaggriculture competition on Kaggle.",
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
    detail: "Morgan Stanley — built AURA MCP Gateway (agentic network management, 92% pipeline completion)",
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

export default function EducationPage() {
  return (
    <ChapterLayout
      chapterNumber={5}
      title="Education"
      subtitle="Degrees, scholarship & recognition"
      prevChapter={{ href: "/chapters/projects", label: "Projects" }}
      nextChapter={{ href: "/chapters/contact", label: "Contact" }}
    >
      {/* Header Effect */}
      <div className="flex justify-center mb-8">
        <SoundEffect text="LEVEL UP!" size="lg" color="blue" rotate={-3} />
      </div>

      {/* MSc Panel */}
      <ComicPanel className="mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b-4 border-dashed border-[#e8dcc8]">
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-3xl text-[#1a1a1a]">
              MSc Data Science
            </h2>
            <p className="font-[family-name:var(--font-bangers)] text-lg text-[#4a6fa5]">
              University of Glasgow
            </p>
            <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
              Glasgow, UK
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="px-4 py-2 bg-[#d4a84b] text-[#1a1a1a] border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)]">
              Sep 2025 – Sep 2026
            </span>
            <span className="quest-badge quest-badge-main">
              £10,000 Excellence Scholar
            </span>
          </div>
        </div>

        <section aria-labelledby="dissertation-heading" className="mb-6 p-4 bg-[#e8dcc8]/50 border-2 border-[#1a1a1a]">
          <h3 id="dissertation-heading" className="font-[family-name:var(--font-bangers)] text-xl text-[#1a1a1a] mb-2">
            MSc dissertation
          </h3>
          <p className="font-semibold text-[#1a1a1a] mb-3">
            Provider Fairness in Multi-Stakeholder Recommendation:
            Combining Fairness-Aware Training with Exposure-Aware Re-Ranking
          </p>
          <p className="text-sm text-[#5c4d3c] mb-3">
            Investigated where to introduce provider fairness in a recommender:
            during LightGCN training, through exposure-aware re-ranking, or both.
            The comparison covered five datasets and ten random seeds in a
            controlled 2 × 2 experiment.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#1a1a1a]">
            <li>Evaluated recommendation accuracy, provider-exposure Gini and catalogue-normalised exposure entropy, with paired statistical comparisons.</li>
            <li>Found that the useful fairness intervention depends on the dataset: training and re-ranking offer different trade-offs rather than one universal winner.</li>
            <li>Generated buyer, provider and platform explanations grounded in knowledge-graph context, with numeric-grounding checks.</li>
          </ul>
          <p className="text-sm mt-4 font-semibold text-[#4a6fa5]">
            Dissertation submitted September 2026 · Supervisor: Dr Graham McDonald
          </p>
          <p className="text-xs mt-2 text-[#5c4d3c]">
            Related ECIR 2027 short paper in preparation; abstract submitted October 2026.
          </p>
          <a href="/chapters/projects/#project-6" className="inline-block mt-3 text-sm underline text-[#4a6fa5]">Explore the research case study</a>
        </section>

        <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#8b7355] mb-3">
          MODULES:
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {modules.map((module) => (
            <span key={module} className="item-tag">
              {module}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/nitesh0007-edith/UofGMScDS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#4a6fa5] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-sm hover:bg-[#3a5f95] transition-colors"
        >
          Coursework repo <ExternalLink size={14} />
        </a>
      </ComicPanel>

      {/* B.Tech Panel */}
      <ComicPanel className="mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#1a1a1a]">
              B.Tech Computer Science Engineering
            </h2>
            <p className="font-[family-name:var(--font-bangers)] text-lg text-[#4a6fa5]">
              UPES, India
            </p>
          </div>
          <span className="px-4 py-2 bg-[#e8dcc8] text-[#1a1a1a] border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)]">
            Jun 2018 – May 2022
          </span>
        </div>
        <p className="mt-4 text-sm text-[#5c4d3c]">
          Built a foundation in computer science through practical software development,
          with a final-year project applying Python and computer vision to attendance management.
        </p>
        <section aria-labelledby="btech-project-heading" className="mt-4 p-4 bg-[#e8dcc8]/50 border-2 border-[#1a1a1a]">
          <h3 id="btech-project-heading" className="font-[family-name:var(--font-bangers)] text-xl mb-2">
            Final-year project: Digi-Attendance
          </h3>
          <p className="text-sm text-[#1a1a1a]">
            Developed a facial-recognition attendance application using Python,
            OpenCV, face_recognition and PyQt5. It processed live video and facial
            encodings to automate attendance capture through a desktop interface.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {["Python", "OpenCV", "face_recognition", "PyQt5", "Computer vision"].map((tool) => (
              <span key={tool} className="item-tag">{tool}</span>
            ))}
          </div>
        </section>
      </ComicPanel>

      {/* Awards Strip */}
      <ComicPanel className="mb-8">
        <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6 text-center">
          ACHIEVEMENTS UNLOCKED
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-[#f5f0e1] border-2 border-[#e8dcc8] hover:border-[#1a1a1a] transition-colors"
            >
              <span className="text-3xl">{award.icon}</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-[family-name:var(--font-bangers)] text-[#1a1a1a]">
                    {award.title}
                  </h3>
                  <span className="text-xs text-[#b5544a] font-[family-name:var(--font-bangers)]">
                    {award.year}
                  </span>
                </div>
                <p className="text-xs text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
                  {award.detail}
                    {award.link && <a href={award.link} target="_blank" rel="noopener noreferrer" className="block mt-2 underline text-[#4a6fa5]">View competition</a>}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </ComicPanel>

      {/* Mentoring Panel */}
      <ComicPanel className="bg-[#d4a84b]/20">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-4">
            SIDE QUEST: MENTORING
          </h2>
          <p className="font-[family-name:var(--font-courier-prime)] text-[#1a1a1a] max-w-2xl mx-auto">
            Mentored <strong>50+ students</strong> on UK Master&apos;s admissions and
            Data Engineering / GenAI career paths via{" "}
            <a
              href="https://topmate.io/nitesh2039"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a6fa5] underline hover:text-[#d4a84b] transition-colors"
            >
              Topmate
            </a>{" "}
            — <strong>5/5 rating</strong>.
            Also ran adoption workshops for 200+ enterprise stakeholders at IQVIA.
          </p>
          <a
            href="https://topmate.io/nitesh2039"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 bg-[#1a1a1a] text-[#f5f0e1] font-[family-name:var(--font-bangers)] text-lg tracking-wider border-2 border-[#1a1a1a] hover:bg-[#d4a84b] hover:text-[#1a1a1a] transition-colors"
          >
            BOOK A 1:1 →
          </a>
        </div>
      </ComicPanel>
    </ChapterLayout>
  );
}
