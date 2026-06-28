# Context and Findings

Background for brainstorming the FinEd product. This captures what the data says, how it was measured, and what it can and cannot support, so product ideas can be checked against the evidence without re-deriving everything.

---

## 1. Data sources

| Source | What it is | What we use it for |
| --- | --- | --- |
| **FINRA NFCS** (National Financial Capability Study) | Survey of U.S. adults. Six waves: 2009, 2012, 2015, 2018, 2021, 2024. State Tracking file (about 161,000 rows across waves) and 2024 State by State file (about 25,500 rows). | Bill strain, emergency fund, financial vulnerability over time and by income and state, financial education offer and participation. |
| **Federal Reserve SCF** (Survey of Consumer Finances) 2022 | Wealth survey. 4,595 households, each repeated as 5 imputation replicates (22,975 rows). | Wealth and net worth context by race. |

The raw files are NOT in this repo. They live on the original machine at `~/Desktop/Website/` (NFCS tracking and state files, and `SCF Data/SCFP2022.csv`). This repo holds only the aggregated numbers used by the case study.

---

## 2. Verified NFCS variable mappings

These were checked against the NFCS codebook. The vulnerability index is built from five yes or no hardship behaviors, all from 2024 unless a trend is shown.

| Concept | Variable | Rule |
| --- | --- | --- |
| Struggles to pay bills | `J4` | values 1 or 2 (very or somewhat difficult to cover expenses) |
| No 3 month emergency fund | `J5` | value 2 (no) |
| Spends more than income | `J3` | value 2 (spending exceeds income) |
| Overdrafts | `B4` | value 1 (occasionally overdraws checking) |
| Predatory borrowing | `G25_1` to `G25_5` | any at frequency 2 or more (payday, auto title, pawn, rent to own, tax refund advance) |
| Financial education status | `M20` | 1 = offered, did not take. 2 = offered and took it. 3 = never offered. |
| Satisfaction (separate scale) | `J1` | self reported 1 to 10, this is a feeling, not a behavior |
| Income band | `A8_2018` | 8 bands, consistent across all waves |
| State | `STATEQ` | |
| Year or wave | `TRACK` | |
| Ethnicity (public file only) | `A4A_new_w` | White vs Non-White only. No finer race detail in the public NFCS. |
| Weights | `wgt_n2` (national tracking), `wgt_s3` (state by state) | always weight before reporting |

**Vulnerability index** = the average of the five hardship rates above (bills, emergency fund, overspending, overdrafts, predatory borrowing). It is behavior based. It is NOT the 1 to 10 satisfaction scale. Satisfaction (`J1`) is tracked separately and moves the opposite direction.

**Income bands used in the product:** Lower (under 35,000 dollars), Middle (35,000 to 100,000), Higher (100,000 and up).

---

## 3. The mislabeling lesson (why we rebuilt)

The first version of this analysis was wrong, and it is worth remembering why. The original script mislabeled columns:

- `A6` (marital status) was relabeled as **race**.
- `A11` (number of children) was relabeled as **income**.
- `G20` (medical debt) was relabeled as **predatory lending**.
- `M20 == 1` (offered but did NOT participate) was relabeled as **took financial education**.

The numbers looked plausible but described the wrong things. We confirmed the error by reproducing the original output and showing the "race" groups were actually marital status. Everything in this repo was rebuilt from the verified mappings above. **Lesson: check the codebook before trusting a label, and weight before reporting.**

---

## 4. Key findings

### Headline (2024, weighted to U.S. population)
- **55 percent** struggled to pay their bills.
- **52 percent** had no 3 month emergency fund, and this share has risen since 2021.
- About **1 in 5** adults have ever taken a financial education course (`M20 == 2`).

### Vulnerability over time is U shaped, not steadily improving
Financial vulnerability was worst in 2009, improved through 2021 on pandemic relief, then rose again by 2024 when relief ended. Do not describe the trend as steady progress.

Vulnerability index by income band (higher is worse):

| Income | 2009 | 2015 | 2021 | 2024 |
| --- | --- | --- | --- | --- |
| Lower | 53.1 | 44.3 | 45.6 | 50.5 |
| Middle | 40.3 | 30.7 | 28.7 | 37.5 |
| Higher | 24.3 | 17.8 | 18.3 | 22.0 |

The **lower income band carries the deepest strain and swings the most** between 2021 and 2024. Satisfaction (the 1 to 10 scale) moves the opposite way: it peaked in 2021 and fell by 2024, again most sharply for lower income households.

### Appetite for financial education is highest where it is least offered
Decomposing `M20` by ethnicity for 2024:

| Group | Never offered | Offered, skipped | Took it | Conversion (took / offered) |
| --- | --- | --- | --- | --- |
| White | 73.5% | 6.8% | 19.7% | about 74% |
| Non-White | 66.4% | 11.4% | 22.2% | about 66% |

Reading it correctly: **Non-White households are offered financial education more often AND take it more often.** The only place White households lead is conversion among those already offered (74 vs 66 percent). But far fewer White households are offered it at all, so overall appetite runs higher in minority communities. This pattern holds across 2012 to 2024. (This is the nuance that is easy to get backwards.)

### SCF wealth (2022)
SCF gives four usable race groups: White, Black, Hispanic, Asian (the "Other" group, about 55 households, is too small to report). It shows large wealth and net worth gaps by race, computed with proper implicate weighted medians. It has no sub-ethnicities and no birthplace.

---

## 5. What the data CAN and CANNOT support

**Can support (use freely):**
- Financial strain and vulnerability by state, year, and income band.
- Which behaviors drive vulnerability (bills, emergency fund, overspending, overdrafts, predatory loans).
- Financial education offer vs participation, White vs Non-White, over time.
- Wealth gaps across four race groups (SCF).

**Cannot support (do not claim, or flag as future work):**
- **Immigration, nativity, generation, or country of origin.** Neither NFCS nor SCF records where a person was born. This needs a different source: Census **ACS**, **SIPP**, or the Fed's **SHED**. This is the single biggest gap and the first segment to add later.
- **Sub-ethnicities** within Asian, Hispanic, or Black populations. The public NFCS only splits White vs Non-White.
- **Causal claims.** These are surveys, not experiments.
- **Specific dollar loss figures.** Claims like a 2,500 dollar loss for the top 15 percent or a 1,015 dollar average annual loss had no basis in our data and were dropped. Do not reintroduce them.
- **External market sizing** (415 billion dollar illiteracy cost, 207 billion dollar app market) are industry estimates, useful for framing but not from our analysis. Always tag them as external.

---

## 6. How this maps to the product

The findings point the product at specific, evidence backed segments:

- **Lower income families** carry the deepest strain. The clearest target.
- **Communities that already want help** (the appetite finding) are underserved, not uninterested.
- **Place matters**, so local economic context should be a real input, not a label.
- **New immigrant families** are the most important segment we cannot yet reach with this data, which is why the product names it as future work rather than pretending to serve it now.

See [PRD.md](PRD.md) for how these become users, requirements, and goals, and `case-study/index.html` for the visual narrative.
