# Lit-Fin

A personalized financial literacy education app, grounded in real federal data.

## What's here

- **[PRD.md](PRD.md)** — the product requirements document for FinEd. Problem, users, solution, value props, goals, success metrics, and requirements by user journey.
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
