# Lit-Fin

FinEd — a personalized financial literacy education app, grounded in real federal data.

## What FinEd does

- **Layered onboarding (about 10 minutes).** A short financial knowledge quiz, then a spending behavior and vulnerability assessment, then optional context (age, household, immigration status, sub-community), then state or ZIP for local context.
- **A living profile.** Three separate signals (knowledge, behavior and vulnerability, self reported context) scored against people in the same income band and state, using NFCS and SCF patterns.
- **Focused micro-learning.** Never more than two or three course options at a time; finishing courses unlocks new topics, so the path never overwhelms.
- **Habit, streaks, and rewards.** Daily-learning reinforcement in the style of a streak app.
- **Optional financial snapshot.** Manually entered savings, earnings, investments, and loans, used only to sharpen which lessons are shown — education, not advice.
- **Daily briefing.** A finance and economy news strip at the top of the app, with links to read more off platform.

## Architecture in brief

Two data planes. The **per-user plane** is everything mutable about one person; the **benchmark plane** is the aggregated NFCS/SCF numbers, computed once, read only and versioned. The assessment is scored into the same shape as the benchmark (the five behavior vulnerability index), which makes a user directly comparable to their peers and keeps recommendations evidence backed. Course selection is deterministic over an unlock graph; the LLM (Claude) writes the profile narrative and the per-course explanations, grounded on verified facts, never free generation. See [PRD.md](PRD.md) section 4 for the full component map and connections.

## What's here

- **[PRD.md](PRD.md)** — the product requirements document for FinEd. Problem, users, solution, value props, goals, success metrics, requirements by user journey, and the architecture.
- **[CONTEXT.md](CONTEXT.md)** — the data behind the PRD: verified variable mappings, key findings, and what the data can and cannot support. Read this before brainstorming product ideas against the evidence.
- **[case-study/](case-study/)** — the interactive narrative case study that the PRD is built on. Open `case-study/index.html` in a browser. It includes a 3D state vulnerability map and the supporting charts, plus the data files they read from.

## Data sources

Every in product data claim traces back to:

- **FINRA National Financial Capability Study (NFCS)** — six waves, 2009 to 2024, weighted to the U.S. population.
- **Federal Reserve Survey of Consumer Finances (SCF) 2022** — wealth context by race, with implicate weighted estimates.

External market figures (the 415 billion dollar illiteracy cost, the 207 billion dollar app market) are tagged as industry estimates, not our analysis.

## Viewing the case study locally

```bash
cd case-study
python3 -m http.server 8000
# then open http://localhost:8000
```

A local server is needed because the page loads its data files with relative paths.
