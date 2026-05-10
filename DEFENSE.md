# UpNext graduation defense guide

## 1. One-sentence pitch

UpNext is an AI-powered IT recruitment platform for junior and mid-level hiring, where AI acts as a candidate coach and recruiter copilot while humans remain final decision makers.

## 2. What to emphasize

- This is not a generic CRUD job board.
- The product is skills-based: CV evidence, projects, required skills, missing signals, and interview questions.
- AI is transparent and ethical: it explains, recommends, summarizes, and coaches; it does not auto-reject.
- The current build is a high-fidelity enterprise UI prototype with architecture foundation.
- The team intentionally prioritized polished UX, workflow coverage, SEO/GEO, PWA readiness, and demo quality before deep backend implementation.

## 3. Recommended slide outline

1. Problem: junior IT hiring is noisy; candidates do not know how to improve; recruiters spend time screening.
2. Target users: candidate, recruiter/employer, admin.
3. Solution: UpNext as AI recruitment copilot + candidate coach.
4. MVP modules: auth/RBAC, profiles, jobs, applications, AI CV analysis, matching, interview coach, blog, admin.
5. AI safety: human-in-the-loop, no auto-reject, consent, privacy, audit logs.
6. UI demo: show the best routes only.
7. Technical architecture: Next.js, TypeScript, Tailwind, Express, Prisma/PostgreSQL design, pnpm monorepo.
8. SEO/GEO/PWA: public pages, FAQ, sitemap, robots, manifest, offline fallback.
9. Current limitations: mock data, no production auth, no real AI provider yet.
10. Next phase: database-backed applications, real auth, CV upload, AI integration.

## 4. Best live demo order

Open `/defense` first, then:

1. `/` — product positioning and homepage polish.
2. `/for-candidates` — candidate value proposition.
3. `/candidate/cv` — AI CV feedback, consent, limitations.
4. `/for-employers` — recruiter value proposition.
5. `/recruiter/applicants/nguyen-minh-anh` — applicant evidence and match explanation.
6. `/trust` — privacy, security, fairness, AI governance.
7. `/prototype` — complete route inventory if reviewers ask.

Avoid opening every page live. Prepare screenshots for backup.

## 5. Honest scope statement

Use this wording:

> “At this stage, UpNext is a high-fidelity enterprise UI prototype plus architecture foundation. We have built the product flows, role-based screens, AI transparency surfaces, SEO/GEO/PWA readiness, and mock business logic. Production authentication, real database persistence, CV file parsing, and live AI provider integration are planned for the next implementation phase.”

## 6. Likely questions and suggested answers

### Does AI decide who gets hired?

No. AI only gives explanations, recommendations, summaries, and interview questions. Recruiters remain final decision makers.

### Is this production-ready?

Not yet. It is prototype-first with strong UI/UX and architecture foundation. The next phase is backend persistence and real AI integration.

### Why not build full backend first?

Because for a graduation project with limited time, a polished end-to-end product prototype proves product thinking, UX quality, workflow design, and feasibility better than an incomplete backend with weak UI.

### What makes this different from a normal job board?

UpNext focuses on CV analysis, skills-based matching, application snapshots, recruiter decision support, interview coaching, AI transparency, and content strategy.

### How do you handle privacy?

The product design includes AI consent, data minimization, private dashboard indexing rules, role-based access, audit logs, and warnings that private candidate data should not be cached or exposed.

## 7. Must-not-claim list

Do not claim:

- real production authentication is complete,
- CV PDF parsing is already real,
- AI provider integration is live,
- PostgreSQL workflows are fully connected,
- this can be used for real hiring decisions today.

Claim:

- enterprise UI prototype is broad and polished,
- architecture foundation exists,
- Prisma database design exists,
- demo API/mock business logic exists,
- AI ethics and human review are designed into the product.
