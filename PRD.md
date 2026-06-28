# FinEd

**Product Requirements Document: Net New Build**

**Build name:** FinEd, a personalized financial literacy education app
**Owner:** Khushali Haji
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

FinEd is a personalized financial literacy app that turns a short assessment into a learning path built for one person. Users complete an onboarding quiz that captures their financial knowledge, habits, goals, and location. The system uses those answers, grounded in patterns from the National Financial Capability Study and the Survey of Consumer Finances, to generate a living financial profile, recommend lessons matched to that profile, and adjust the path as the user makes progress or their situation changes. Instead of giving everyone the same videos, FinEd meets each user where they actually are.

### 2a. Value Proposition

People who struggle to improve their financial knowledge because traditional financial education is generic and impersonal use FinEd, an AI assisted personalized learning app, to get education tuned to their real situation. Unlike apps that deliver the same content to everyone, FinEd combines a personal assessment with patterns measured in the NFCS and SCF to recommend lessons based on each user's income, behavior, goals, and local context, helping them build lasting financial confidence and make better decisions.

### 2b. Top 3 MVP Value Props

- **The Vitamin (must have baseline):** A clear, trustworthy financial literacy assessment that shows users their starting point across knowledge, habits, and confidence.
- **The Painkiller (solves the core pain):** A learning roadmap built for the user's income band and situation, so a lower income family is not handed advice written for someone with a cushion.
- **The Steroid (the magic moment):** Recommendations that adapt to local economic context and shift as the user grows, so the path feels written for them and keeps pace with their life.

### 2c. Goals & Non-Goals

**Goals**

- Give every user a personalized starting point and roadmap within their first session, not a generic course list.
- Reach the users the data shows are under the most strain, lower income families and high strain communities, with content tuned to their situation.
- Keep users engaged past the drop off point where generic apps lose them, by adapting the path over time.
- Make local economic context a real input to recommendations, not a cosmetic label.

**Non-Goals**

- We are not building immigration or country of origin personalization in the MVP. Public data cannot support it yet, so it is named as future work, not shipped.
- We are not offering financial advice, account management, or product sales. This is education, not advice.
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

**Sub-journey: Onboarding and assessment**

- [P0] User can create a secure account and profile.
- [P0] User can complete a financial literacy assessment.
- [P0] User can complete a financial behavior and confidence assessment.
- [P0] User can enter their financial goals and learning preferences.
- [P0] User can provide their ZIP code or location for local context.
- [P1] User can save progress and return to finish onboarding later.
- [P2] User can skip optional questions and fill them in over time.

**Sub-journey: Receiving a personalized profile and roadmap**

- [P0] User can view a personalized financial profile based on their assessment and supporting public data patterns.
- [P0] User can view a customized learning roadmap with recommended lessons.
- [P0] User can see recommendations informed by their income band and local economic context.
- [P1] User can understand why each lesson was recommended for them.
- [P2] User can adjust their goals and see the roadmap update.

### User Journey 2: A returning user learns and tracks progress

**Context:** Generic apps lose users after the first lesson. This journey keeps people engaged by showing progress and adapting the path over time.

**Sub-journey: Completing lessons**

- [P0] User can complete educational modules and quizzes.
- [P0] User can resume a lesson where they left off.
- [P1] User can choose lessons in a format that matches their learning preference.
- [P2] User can bookmark lessons to revisit later.

**Sub-journey: Tracking progress and re-assessing**

- [P0] User can track learning progress and literacy improvement over time.
- [P0] User can revisit assessments to update recommendations as their situation changes.
- [P1] User can see how their profile has changed since onboarding.
- [P2] User can set reminders to keep a learning habit.

### User Journey 3 (Future phase): Deeper personalization and support

**Context:** Out of MVP scope, listed to show where the product goes once data and trust allow.

**Sub-journey: Connected and human support**

- [P2] User can connect external financial accounts for optional personalized insights.
- [P2] User can communicate with certified financial coaches or mentors.
- [P2] User can join community discussions and peer learning groups.
- [P2] User can receive personalization informed by immigration or community of origin, once a supporting public data source (such as the Census ACS, SIPP, or the Fed SHED) is integrated.

---

## 4. Appendix

**Data sources behind this PRD**

- FINRA National Financial Capability Study (NFCS), State by State and State Tracking files, six waves from 2009 to 2024, weighted to the U.S. population. Used for bill strain, emergency fund, vulnerability over time and by income, and financial education uptake by community.
- Federal Reserve Survey of Consumer Finances (SCF) 2022, used for wealth context by race, with proper implicate weighted estimates.

**Honesty notes**

- All in product data claims are grounded in the datasets above. External market figures (the 415 billion dollar illiteracy cost and the 207 billion dollar app market) are clearly tagged as industry estimates, not our analysis.
- Some attention grabbing figures were dropped because they had no basis in our data, including a 2,500 dollar plus loss for the top 15 percent and a 1,015 dollar average annual loss.
- The success metric targets in section 2d are product launch goals, not findings from the NFCS or SCF.

**Related work**

- Narrative case study and interactive state vulnerability map: `case-studies/fin-lit-ed-map.html`.
