
# CFOP Trainer

An interactive training tool for learning the CFOP speedcubing method — built to teach
algorithm **recognition** and **execution**, not just list algorithms.

Existing reference sites (JPerm, CubeSkills, algdb) are static lookup tables. This project
treats learning a case as a measurable, improvable process: every drill logs recognition
time, execution outcome, and confusion patterns, so the app can tell you what to practise
next instead of leaving that to guesswork.

**Live demo:** _coming soon_

## Why this project

Built as a personal learning tool and as a way to practise the full loop of a data-driven
product: instrumenting user actions, storing structured event data, and turning that data
into insight (which cases are slow to recognise, which get confused with which, how
performance changes over time). The interesting part of this project isn't the 3D cube —
it's the analysis layer built on top of real practice data.

## Core features

- **Case library** — every 2-look OLL and 2-look PLL case (expanding to full OLL/PLL and F2L)
- **Case-specific scrambles** — generates a scramble that lands on the exact case you want
  to drill, rather than manually setting one up
- **Intuitive F2L mode** — solve the pair yourself, get graded on move efficiency, then see
  a stronger solution — teaches the underlying logic instead of rote algorithms
- **Recognition drills** — measures the time between seeing a case and identifying it,
  the actual bottleneck in getting faster, separate from execution speed
- **Confusion tracking** — logs which case you mistake for which, and surfaces targeted
  drills for the pairs you actually mix up
- **Progress analytics** — accuracy and recognition time per case, trends over time,
  weakest-case identification

## Tech stack

- **React + TypeScript + Vite** — app shell
- **[cubing.js](https://js.cubing.net/)** — 3D cube rendering, algorithm parsing, and
  scramble solving (three.js under the hood)
- **IndexedDB** (via Dexie) — local event log of every practice attempt; source of truth
  for all analytics, nothing pre-aggregated
- **Zustand** — app state
- Deployed on [Vercel / GitHub Pages / Cloudflare Pages] — free tier, static hosting

## Data model

Every practice attempt is logged as an event row, not an aggregate — this keeps the raw
data available for later analysis rather than locking in early assumptions about what
"progress" means:

```ts
type Attempt = {
  caseId: string;
  timestamp: number;
  recognitionMs: number;
  executionMs: number;
  correct: boolean;
  misidentifiedAs?: string;
  algorithmUsed: string;
};
```

Case definitions (scrambles, algorithms, trigger breakdowns, recognition families) are
static, version-controlled data — no database needed for content that doesn't change.

## Project status

Early build. See [Issues](../../issues) / [Projects](../../projects) for current progress.

- [ ] 3D cube rendering proof of concept
- [ ] Single working case end-to-end (scramble → drill → log)
- [ ] Full 2-look OLL + 2-look PLL case set
- [ ] Practice session mode (auto-selects next case)
- [ ] Stats dashboard (accuracy, recognition time, confusion matrix)
- [ ] F2L intuitive-solve mode
- [ ] Full OLL / full PLL
- [ ] Spaced-repetition scheduling

## Running locally

```bash
npm install
npm run dev
```

