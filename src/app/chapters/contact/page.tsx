"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, ExternalLink } from "lucide-react";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SpeechBubble, MangaAvatar } from "@/components/comic";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "niteshranjansingh85389@gmail.com",
    href: "mailto:niteshranjansingh85389@gmail.com",
    description: "Best for detailed enquiries",
    color: "bg-[#b5544a]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/nitesh0007",
    href: "https://www.linkedin.com/in/nitesh0007/",
    description: "Let's connect professionally",
    color: "bg-[#4a6fa5]",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "nitesh0007-edith",
    href: "https://github.com/nitesh0007-edith",
    description: "See the code in action",
    color: "bg-[#1a1a1a]",
  },
  {
    icon: FileText,
    label: "CV",
    value: "Download CV",
    href: "/resume.pdf",
    description: "Full professional details",
    color: "bg-[#6b8e4e]",
  },
];

export default function ContactPage() {
  return (
    <ChapterLayout
      chapterNumber={6}
      title="Contact"
      subtitle="Let's connect"
      prevChapter={{ href: "/chapters/education", label: "Education" }}
    >
      {/* Avatar Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8"
      >
        <MangaAvatar expression="celebrating" size="lg" showSparkles />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-md"
        >
          <SpeechBubble tailPosition="top">
            <p className="text-[#1a1a1a] text-center">
              Thanks for reading this far. I&apos;m open to Data Engineer,
              AI/GenAI Engineer, and ML Engineer roles for Summer 2026 —
              based in Glasgow, open to Scotland and hybrid/remote UK.
            </p>
          </SpeechBubble>
        </motion.div>
      </motion.div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.label}
            href={method.href}
            target={method.label !== "Email" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="group"
          >
            <ComicPanel className="p-0 overflow-hidden hover:translate-x-1 hover:-translate-y-1 transition-transform">
              <div className="flex items-stretch">
                {/* Icon Section */}
                <div
                  className={`${method.color} text-white p-6 flex items-center justify-center`}
                >
                  <method.icon size={32} />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4 flex flex-col justify-center">
                  <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a] flex items-center gap-2">
                    {method.label}
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8b7355]"
                    />
                  </h3>
                  <p className="text-sm text-[#4a6fa5] font-[family-name:var(--font-courier-prime)] break-all">
                    {method.value}
                  </p>
                  <p className="text-xs text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                    {method.description}
                  </p>
                </div>
              </div>
            </ComicPanel>
          </motion.a>
        ))}
      </div>

      {/* Work Authorisation Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <ComicPanel className="bg-[#6b8e4e]/10">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-bangers)] text-xl text-[#8b7355] mb-3">
              HIRING NOTE
            </h2>
            <p className="font-[family-name:var(--font-courier-prime)] text-sm text-[#1a1a1a] max-w-2xl mx-auto">
              UK Graduate Route visa eligible (from Sep 2026, 2-year duration) —
              <strong> no sponsorship required near term</strong>. Open to Skilled
              Worker sponsorship for the longer term.
            </p>
          </div>
        </ComicPanel>
      </motion.div>

      {/* The End */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-center"
      >
        <p className="font-[family-name:var(--font-bangers)] text-3xl text-[#8b7355] tracking-widest">
          TO BE CONTINUED...
        </p>
      </motion.div>
    </ChapterLayout>
  );
}
