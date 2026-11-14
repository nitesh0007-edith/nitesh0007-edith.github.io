# Portfolio focus and selection

Updated 14 November 2026 after the user's curation request. This supersedes the broad directory-discovery selection in `root-project-audit.md`.

## Story

Nitesh is a Glasgow-based data engineer seeking engineering roles and a funded PhD. The site connects pharmaceutical data engineering at IQVIA and Axtria, an MSc dissertation on provider fairness, current independent LLM evaluation pilots, and teaching through Nitesh Explains AI. PhD interests are presented as applications and developing proposals, not current doctoral enrolment or accepted publications.

## Project selection

Nine entries remain. Existing IDs are preserved.

| Project               | Reason to retain                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| DataSentinel          | Deployed reliability demo, inspectable Git evidence and tested remediation workflow.                        |
| HyperX                | Second place and team prize in a legal retrieval competition, with a specific evaluated retrieval pipeline. |
| LLM Judge Reliability | Current proposal directions with experiment code, saved pilot results, uncertainty and negative findings.   |
| Provider Fairness     | MSc dissertation with a factorial comparison across datasets and seeds.                                     |
| LumaLearn             | Deployed recommendation service with retrieval constraints, cost controls and tests.                        |
| SasineSense           | Document extraction with field provenance, reviewer workflow and tests.                                     |
| TrafficFlowBench      | Substantial multi-task modelling and a saved public competition score.                                      |
| LectureLens           | Hybrid retrieval with ablations, manually checked relevance labels and tests.                               |
| AURA                  | A specific team contribution and hackathon runner-up result.                                                |

Removed the six explicitly named entries: InterviewCue, AI from First Principles as a software project, Quant Research Platform, Quantitative Finance Lab, Stock Autoresearch and Mendelian Randomisation. Also removed entries that were less relevant, overlapped stronger work, remained designs/prototypes, or relied on reproduced competition recipes: generic LLM fine-tuning, AutoPipelineAI, ECG Explainability, JobFlowUK, PipelineSentinel, Transit Analytics, Name That LLM, Squares in Squares and BudgetSWE-Gemma. This is editorial selection, not deletion of the underlying projects.

## Research evidence

Inspected the current `UofG_PHD/UK_EU_PhD/LLM_Eval_Research_2026-11-04` materials, including:

- `03_proposals/00_OVERVIEW.md` and both main proposal drafts at version 4, dated 11 November.
- P2, _How many human labels can an LLM judge replace?_, is the lead direction. P1, _Who do LLM judges favour?_, is the second direction.
- `04_experiments/results/exp2i_multirater_ceiling.json` records a MultiPref pooled ceiling of 0.2053 with a 95% interval of 0.1941–0.2170. The public summary rounds this to 21%, interval 19–22%, and states the one-vote-per-item setup.
- The pilot overview records MT-Bench, MultiPref, ChaosNLI and a TREC DL judged-pool experiment. It does not justify a universal savings claim.
- P1 reports that weight proximity did not support the original hypothesis. The site retains that negative finding and describes inheritance as model- and recipe-dependent.
- The 12 November idea-loop status and length-debiasing note label the latest follow-up partial, with one acceptance condition missed. It is not presented as a confirmed breakthrough.

No application trackers, private correspondence, transcripts, reference details, API caches or credentials were copied to the public site. No source projects or experiments were modified or rerun.

## YouTube evidence

Read the public channel metadata and video list at [Nitesh Explains AI](https://www.youtube.com/@NiteshExplainsAI). Its description connects intuition, maths, numerical examples and code. The portfolio links three verified published lessons: backpropagation (`mn7rB6-7dBo`), gradient descent (`5yt87uK46nU`) and SVD/PCA (`gyGn9Vc-19Q`). Their original YouTube thumbnails are stored locally. Subscriber counts, views and a publishing schedule are omitted.

## Voice

Replaced slogans with first-person descriptions of the work and the questions behind it. Team work retains team credit. Removed rhetorical em dashes and double-hyphen separators from displayed copy; ordinary technical hyphens, date ranges and CSS custom properties are retained. The hero, About section, contact area and page metadata state the job and PhD search directly.

## Verification

The teaching section subsequently expanded into a community story connecting YouTube with free Topmate career mentoring and supplied service feedback. See [testimonial provenance](community-testimonials.md). The selected engineering projects and PhD research sections remain the professional focus.

Production build, TypeScript checks and static export passed. Chrome checked the nine selected projects and their dialogs, all four category filters, search, removed-entry absence, displayed-copy punctuation, research summary and email link, three original YouTube thumbnails and video URLs, Research/YouTube mobile navigation, and old/new project chapter hashes. Layouts passed at 320, 390, 768, 1024 and 1440 pixels, including illustration clearance above the mobile introduction. Desktop and mobile hero, research and channel screenshots were inspected. No runtime errors were recorded.
