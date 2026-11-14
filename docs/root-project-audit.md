# Local project audit — 14 November 2026

Historical discovery audit. The user subsequently requested a smaller selection and a research-led story. See [the current curation](portfolio-story.md) for the nine projects now displayed.

Compared project directories in the user's home folder with the 12 existing portfolio entries. Added 11 substantive projects, preserving existing project IDs and links. The six featured cards are DataSentinel, LumaLearn, InterviewCue, AI from First Principles, Transit Analytics and Name That LLM. All 23 entries are available through expansion, search, categories and direct links.

## Additions and evidence

Paths below are relative to the inspected home directory. Only portfolio files were changed. Source inspection and existing saved evidence support the descriptions; the source projects' test suites, deployments and experiments were not rerun for this update.

| ID  | Project / directory                                            | Status            | Evidence inspected                                                                                                                                                                                                                             |
| --- | -------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | InterviewCue / `GirGitCompanion`                               | Prototype         | Swift sources, `Package.swift`, README and `VERIFICATION.md` v1.3.0. The document records 30 passing standalone checks and a signed build, while explicitly leaving hardware capture and fresh desktop checks unverified.                      |
| 14  | `AI from First Principles`                                     | In progress       | Python pipeline CLI and README, Manim scene code, Remotion sources/package, episode status and media artifacts. No published course or completed episode count is claimed.                                                                     |
| 15  | `DE_Project/Real-Time Public Transit Delay Analytics Pipeline` | Prototype         | GTFS producer, PyFlink aggregation, Iceberg writer, Streamlit dashboard, Docker Compose and component tests. The separate sink auto-commits Kafka offsets; end-to-end exactly-once delivery is not claimed.                                    |
| 16  | `Name That LLM`                                                | In progress       | Modelling/evaluation code, prompt splits and `artifacts/kaggle/reference_682_submission.json`. Public score 0.682 was checked 11 November; it belongs to an attributed public-recipe reproduction, separate from independent experiments.      |
| 17  | `IEEE Big Data Traffic Flow Bench 2026`                        | In progress       | Traffic model package, validation documentation and `experiments/current_best.json`. Saved public score 0.81337 is dated 20 October; no private score or final rank is inferred.                                                               |
| 18  | `Squares in Squares`                                           | In progress       | Construction, refinement and validator scripts; README's certified export records and null-result campaign reports. Public witness attribution is preserved. No global packing record or pending leaderboard score is claimed.                 |
| 19  | `Projects/budget-swe-gemma`                                    | In progress       | Agent/evaluation source, tests and progress journal through post-training readiness. Source is more extensive than the stale README. Failed prompt-policy acceptance gates are disclosed; no benchmark improvement is inferred from readiness. |
| 20  | `quant-platform`                                               | Prototype         | Data, features, models, backtesting, simulated broker/ledger and dashboard modules. Uncorroborated ranking/return statements in the README are excluded.                                                                                       |
| 21  | Quantitative Finance Lab / `Quant`                             | Prototype         | Source and examples in modules 01–05; modules 06–13 contain plans only. Public GitHub repository visibility and URL verified through GitHub API.                                                                                               |
| 22  | `stock-autoresearch`                                           | Prototype         | Fixed evaluation module, mutable training code, experiment instructions and results ledger. The public autoresearch pattern is attributed. Reused validation results are not treated as an independent holdout estimate.                       |
| 23  | `Mr_Analysis`                                                  | Research complete | R scripts for fetching, harmonisation, four MR estimators, sensitivity analyses and plots; saved tables and written report. Described as academic coursework, without clinical conclusions.                                                    |

## Already represented or excluded

- `JobFlowUK`, `legal-retrieval`, `claude-bedrock-project`, the fairness repositories and `PipelineSentinel ` correspond to existing entries. They were not duplicated.
- `ai-portfolio-projects` and the other two `DE_Project` folders contain project plans rather than substantive implementations.
- `expense-tracker` contains a Flask scaffold with placeholder expense/authentication routes; it was not promoted to a completed app.
- `Projects/nitesh0007-edith` is profile material. `UofG_PHD` contains application/proposal work rather than an implemented portfolio project.
- Internship reconciliation work is already represented in employment experience. Client-specific files and data were not copied into the public site.

## Portfolio implementation

Display titles, disciplines, categories and featured flags now live with the project records in `src/lib/portfolio.ts`. Category membership no longer depends on a separate hard-coded ID list. New prototypes and ongoing work have distinct status colours in both cards and dialogs. No demo or source links were invented for local-only projects.

## Validation

- Production build, TypeScript checking and static export passed.
- Chrome checked all 23 project dialogs, six categories, search and the empty state.
- All 11 new direct project hashes and the existing projects chapter route opened correctly.
- Escape dismissal and focus restoration passed for every card; local-only records exposed no external links.
- No horizontal overflow at 320, 390, 768, 1024 or 1440 pixels; desktop and mobile project screenshots were visually inspected.
- No browser runtime errors were recorded.
