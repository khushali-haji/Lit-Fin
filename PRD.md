# FinEd

**Product Requirements Document: Net New Build**

**Build name:** FinEd, a personalized financial literacy education app
**Owner:** Khushali Haji + Richard Theard
**Date:** June 28, 2026

---

## 1. Problem

People who want to improve their financial well being are handed generic, one size fits all financial education that ignores their income, habits, goals, and where they live. Because the lessons are not built for any one person, many users feel overwhelmed, tune out, or never apply what they learn. The need is not small or shrinking. In the 2024 National Financial Capability Study, 55 percent of adults said they struggled to cover their bills, and 52 percent had no three month emergency fund, a figure that has risen since 2021. Yet only about 1 in 5 adults have ever taken a financial education course. The result is a large population under real financial strain that current education does not reach.

### Supporting Context

These points come from our own analysis of the FINRA National Financial Capability Study (six waves, 2009 to 2024, weighted to the U.S. population) and the Federal Reserve Survey of Consumer Finances 2022.

- 55 percent of adults struggled to pay their bills in 2024, and 52 percent had no three month emergency fund, a share that climbed after pandemic relief ended in 2021. (NFCS 2024)
- Financial vulnerability is U shaped over time. It was worst in 2009, improved through 2021 on pandemic relief, then rose again by 2024. The strain is not steadily getting better. (NFCS 2009 to 2024)
- The strain is concentrated at the bottom. Lower income households (under 35,000 dollars) carry a vulnerability score near 50 in 2024, against roughly 22 for higher income households (100,000 dollars and up), and they swung the most when relief ended. (NFCS)
- Appetite for help is already there and is highest in the communities most often overlooked. Non White households are offered financial education more often and take it more often than White households. (NFCS, variable M20)
- Public data has limits we name openly. Neither the NFCS nor the SCF records where a person was born, so the largest unmet segment, new immigrant families, cannot yet be isolated from these sources alone.

---

### 1a. Opportunity

If financial education adapts to each user's real situation rather than treating everyone the same, it can reach the majority of adults who are under strain but tune generic content out, and it can serve the communities that already ask for help most. FinEd aims to be the personalized layer that sits between fintech and edtech and turns measured financial behavior into a learning path people actually finish.

**Market Opportunity**

- Industry estimates, external to our analysis, put the annual cost of financial illiteracy near 415 billion dollars and the personal finance app market near 207 billion dollars by 2026.
- Our own datasets (NFCS and SCF) define the addressable need directly: a majority of U.S. adults report bill strain and no emergency fund, and only 1 in 5 have ever taken a course.

---

### 1b. Users & Needs

We target segments the evidence can actually identify, by income, by community, and by place. One frontier segment is named honestly as future work, not a present capability.

**Primary users:**

- **Lower income families** (under 35,000 dollars). The deepest financial strain and the widest swing from 2021 to 2024 in the data.
- **Recent graduates in high strain states.** Young and credentialed, living where state level vulnerability runs high.
- **Minority communities.** Non White households are offered financial education more and take it more, so the appetite is already there.

**Secondary users:**

- **New immigrant families.** The group public data cannot isolate yet, and the first segment we would add once a nativity data source is integrated.
- **Financial coaches and mentors** who would support users inside the platform in a later phase.

**Key User Needs**

- As a user new to managing money, I need to understand my current financial strengths and weaknesses because I do not know where to begin.
- As a lower income user, I need lessons tuned to my situation because generic advice assumes a cushion I do not have.
- As a user in a high cost area, I need guidance that reflects my local economic context because financial challenges vary by place.
- As a learner, I need a path that adapts as my situation changes because a one time test does not reflect my life.
- As someone who finds money stressful, I need trustworthy guidance without feeling judged because financial topics are intimidating.

---

## 2. Proposed Solution

FinEd is a personalized financial literacy app that turns a short assessment into a learning path built for one person. Onboarding takes about ten minutes and runs in layers: first a short financial knowledge quiz, then questions about the user's spending behavior and financial vulnerability, then optional context about their situation (age, household, immigration status, sub-community), and finally their state or ZIP for local economic context. The system scores those answers into three separate signals, grounded in patterns from the National Financial Capability Study and the Survey of Consumer Finances, and uses them to generate a living financial profile.

From that profile, FinEd recommends bite sized micro-learning courses. The user is never shown more than two or three course options at a time, and finishing courses unlocks new topics, so the path stays focused instead of overwhelming. Progress is reinforced with streaks and rewards in the style of a daily learning habit. Users can optionally enter a rough snapshot of their savings, earnings, investments, and loans to sharpen which lessons they see, and every day the app opens with a short finance and economy news briefing. As the user learns and re-assesses, the path adapts. Instead of giving everyone the same videos, FinEd meets each user where they actually are.

### 2a. Value Proposition

People who struggle to improve their financial knowledge because traditional financial education is generic and impersonal use FinEd, an AI assisted personalized learning app, to get education tuned to their real situation. Unlike apps that deliver the same content to everyone, FinEd combines a personal assessment with patterns measured in the NFCS and SCF to recommend lessons based on each user's income, behavior, goals, and local context, helping them build lasting financial confidence and make better decisions.

### 2b. Top 3 MVP Value Props

- **The Vitamin (must have baseline):** A clear, trustworthy ten minute assessment that scores a user across knowledge, behavior and vulnerability, and confidence, and shows them their starting point against people in the same income band and state.
- **The Painkiller (solves the core pain):** Focused micro-learning, never more than two or three course options at once, built for the user's income band and situation, so a lower income family is not handed advice written for someone with a cushion and never feels overwhelmed by a long list.
- **The Steroid (the magic moment):** A path that unlocks new topics as the user finishes courses, reinforced by streaks and rewards, that adapts to local economic context and shifts as the user grows, so it feels written for them and keeps pace with their life.

### 2c. Goals & Non-Goals

**Goals**

- Give every user a personalized starting point and roadmap within their first session, not a generic course list.
- Reach the users the data shows are under the most strain, lower income families and high strain communities, with content tuned to their situation.
- Keep users engaged past the drop off point where generic apps lose them, by adapting the path over time and reinforcing a daily habit with streaks and rewards.
- Keep the path focused by surfacing only two or three course options at a time and unlocking new topics as the user finishes them.
- Make local economic context a real input to recommendations, not a cosmetic label.

**Non-Goals**

- We are not building benchmarked immigration or country of origin personalization in the MVP. The user may self report immigration status and sub-community, and we use it to frame and filter content, but the NFCS and SCF cannot benchmark these segments, so we do not compare a user against peers on these dimensions until a supporting data source is integrated.
- We are not offering financial advice, account management, or product sales. This is education, not advice. The optional financial snapshot in the MVP is manual and is used only to select educational content, never to give prescriptive, personalized financial recommendations.
- We are not linking external financial accounts in the MVP. Account aggregation and tips driven by linked balances are deferred to a later phase with its own consent, security, and compliance review.
- We are not building the coach marketplace or peer community in the MVP. Both are deferred.

### 2d. Success Metrics

These are forward looking launch targets for the product, not findings from the NFCS or SCF. They are set as product goals to measure against, and will be revisited after launch.

| Goal | Signal | Metric | Target |
| --- | --- | --- | --- |
| Personalized start | Users finish onboarding and see a profile | Onboarding completion rate | Greater than 70 percent of new users |
| Reach high strain users | Lower income users complete a roadmap | Share of lower income users with an active roadmap | Greater than 50 percent of that segment |
| Sustained engagement | Users return to learn | Weekly active users at 30 days | Greater than 40 percent of signups |
| Applied learning | Users update their assessment over time | Share of users who re-assess within 90 days | Greater than 25 percent |
| Local relevance | Users act on local context | Share of users who set a location and view local content | Greater than 60 percent |

---

## 3. Requirements

### User Journey 1: A new user builds their financial profile

**Context:** First impressions decide whether a user under financial strain stays. The goal is to turn a short assessment into a personalized starting point inside the first session.

**Sub-journey: Layered onboarding and assessment (about ten minutes)**

- [P0] User can create a secure account and profile.
- [P0] User can complete a financial knowledge quiz (about 5 to 10 questions) that is scored for correctness.
- [P0] User can complete a financial behavior and vulnerability assessment that maps to the NFCS five behavior index (bills, emergency fund, overspending, overdrafts, predatory borrowing) so it is comparable to public benchmarks.
- [P0] User can enter their financial goals and learning preferences.
- [P0] User can provide their state or ZIP code for local economic context.
- [P1] User can provide optional context about their situation (age, household, immigration status, sub-community) that is used to frame and filter content.
- [P1] User can save progress and return to finish onboarding later.
- [P1] Onboarding completes in about ten minutes for a typical user.
- [P2] User can skip optional and sensitive questions and fill them in over time.

**Sub-journey: Receiving a personalized profile and roadmap**

- [P0] User can view a personalized financial profile built from three separate signals: knowledge, behavior and vulnerability, and self reported context.
- [P0] User can see where they stand against people in the same income band and state, using NFCS and SCF patterns.
- [P0] User is shown no more than two or three recommended micro-learning courses at a time, matched to their profile.
- [P0] User can see recommendations informed by their income band and local economic context.
- [P1] User can understand why each course was recommended for them.
- [P2] User can optionally enter a rough financial snapshot (savings, earnings, investments, loans), entered manually, used only to sharpen which educational content is shown, never to give prescriptive advice.
- [P2] User can adjust their goals and see the recommendations update.

### User Journey 2: A returning user learns and tracks progress

**Context:** Generic apps lose users after the first lesson. This journey keeps people engaged by showing progress and adapting the path over time.

**Sub-journey: Completing micro-courses and unlocking topics**

- [P0] User can complete bite sized educational modules and quizzes.
- [P0] User can resume a course where they left off.
- [P0] User unlocks new topics by finishing courses, while never seeing more than two or three options at a time.
- [P1] User can choose courses in a format that matches their learning preference.
- [P2] User can bookmark courses to revisit later.

**Sub-journey: Habit, streaks, and a daily briefing**

- [P0] User can build a streak and earn rewards for consistent daily learning.
- [P1] User can see a short daily finance and economy news briefing at the top of the app, with a link to read the full story off platform.
- [P2] User can set reminders to keep a learning habit.

**Sub-journey: Tracking progress and re-assessing**

- [P0] User can track learning progress and literacy improvement over time.
- [P0] User can revisit assessments to update recommendations as their situation changes.
- [P1] User can see how their profile has changed since onboarding.

### User Journey 3 (Future phase): Deeper personalization and support

**Context:** Out of MVP scope, listed to show where the product goes once data and trust allow.

**Sub-journey: Connected and human support**

- [P2] User can connect external financial accounts so the snapshot updates automatically and the app can offer tips driven by real balances, behind its own consent, security, and compliance review.
- [P2] User can communicate with certified financial coaches or mentors.
- [P2] User can join community discussions and peer learning groups.
- [P2] User can receive benchmarked personalization informed by immigration or community of origin, once a supporting public data source (such as the Census ACS, SIPP, or the Fed SHED) is integrated, so self reported segments can be compared against real peer data.

---

## 4. Architecture

The product separates two data planes. The **per-user plane** is everything mutable about one person (account, assessment answers, profile, progress, streaks, optional snapshot). The **benchmark plane** is the aggregated NFCS and SCF numbers, computed once, read only and versioned. A live user never touches the raw survey files. Instead the assessment is scored into the same shape as the benchmark (the five behavior vulnerability index), which is what makes a user directly comparable to their income band and state and keeps recommendations evidence backed and auditable.

**Main components**

- **Client app (web first).** Layered onboarding, profile dashboard, micro-course player, streaks and rewards, the daily briefing strip, and the optional financial snapshot.
- **API / backend gateway.** Authentication, secure accounts, save and resume state, and thin orchestration over the services below.
- **Assessment and scoring service.** Turns raw onboarding answers into three separate signals: a knowledge score (graded), a behavior and vulnerability score (mapped to the NFCS five behavior index so it is benchmark comparable), and self reported context tags (age, household, immigration status, sub-community) used as filters, not scores.
- **Benchmark / reference data store (read only, versioned).** The aggregated NFCS and SCF numbers: vulnerability index by income band, state, and year, education offer and uptake by ethnicity, and SCF wealth context. This is what the case study data files become, promoted to a queryable store and re-derived when a new survey wave lands.
- **Local context service.** Resolves ZIP or state to the matching benchmark slice. Later layers external cost of living data.
- **Personalization / recommendation engine.** Positions the user against peers, identifies their weakest behaviors, and walks an unlock graph of topics to surface the two or three highest value courses on the user's current frontier. Re-runs on re-assessment to adapt the path. Recommendation logic is deterministic so it stays auditable.
- **Content store.** Micro-courses, modules, and quizzes, tagged by behavior dimension and income band, organized as a prerequisite graph that drives the progressive unlock.
- **Progress and engagement services.** Completion, resume points, literacy over time, plus streaks, rewards, and daily goals driven by completion events.
- **Daily briefing service.** Pulls finance and economy headlines from a news API, caches them server side once per day, and serves the top of app strip with outbound read more links.
- **Financial snapshot service (MVP-lite, isolated).** Stores the user's manually entered rough numbers under tighter access, used only to select educational content. Linked accounts and balance driven tips are a later phase.
- **AI layer (grounded).** Uses Claude to turn the profile and benchmark into a plain language, non-judgmental narrative and to explain why each course was recommended. It is grounded by retrieval over the verified benchmark facts and content, never free generation, which keeps it from drifting into unsupported claims.

**How they connect**

During onboarding, the client sends layered answers through the gateway to the scoring service, which produces the three signals. ZIP or state goes through the local context service to pull the matching benchmark slice. The personalization engine combines the profile, the benchmark slice, the goals, and the content unlock graph to produce the user's two or three frontier courses, and the AI layer grounds the profile narrative and the per-course explanations. Results render in the client and persist through the progress service. For a returning user, completing courses and re-assessing flows back into the progress and scoring services, the personalization engine re-runs, and the path adapts. The briefing service runs independently on a daily refresh.

**Hosting and storage (MVP)**

The MVP runs on **Supabase**, which covers the per-user plane in one platform: managed Postgres for accounts, profiles, assessments, progress, streaks, and content; built-in auth for the secure account requirement; and row level security to isolate sensitive data (the financial snapshot and self reported context) at the database layer. The benchmark plane ships as read-only seeded tables, re-derived when a new survey wave lands. The daily briefing is cached in a single daily-refreshed row rather than stored durably. The API / gateway runs as a stateless service (for example on Railway or Render) against the Supabase database. Wherever it runs, encryption at rest, a defined data region, and snapshot access isolation are required because the app handles financial and sensitive demographic data.

**Key design decisions**

- **Benchmark is frozen, not live.** It is a small, static, audited artifact keyed by income, state, and year. This protects the honesty of the data claims and supports a simple lookup rather than a warehouse.
- **The LLM writes language, not recommendations.** Course selection is deterministic and rule based on the behavior gaps and unlock graph; the LLM only handles narrative and explanation. This keeps recommendations auditable, in the spirit of the data verification lessons in CONTEXT.md.
- **Self reported segments filter, they do not benchmark.** Immigration status and sub-community frame and filter content, but are not used to compare a user against peers until a supporting nativity data source exists.
- **Snapshot is isolated and education only.** The optional financial snapshot lives in its own service with tighter access and feeds content selection, never prescriptive advice, keeping the MVP on the right side of the no-advice non-goal.

---

## 5. Appendix

**Data sources behind this PRD**

- FINRA National Financial Capability Study (NFCS), State by State and State Tracking files, six waves from 2009 to 2024, weighted to the U.S. population. Used for bill strain, emergency fund, vulnerability over time and by income, and financial education uptake by community.
- Federal Reserve Survey of Consumer Finances (SCF) 2022, used for wealth context by race, with proper implicate weighted estimates.

**Honesty notes**

- All in product data claims are grounded in the datasets above. External market figures (the 415 billion dollar illiteracy cost and the 207 billion dollar app market) are clearly tagged as industry estimates, not our analysis.
- Some attention grabbing figures were dropped because they had no basis in our data, including a 2,500 dollar plus loss for the top 15 percent and a 1,015 dollar average annual loss.
- The success metric targets in section 2d are product launch goals, not findings from the NFCS or SCF.

**Related work**

- Narrative case study and interactive state vulnerability map: `case-studies/fin-lit-ed-map.html`.
