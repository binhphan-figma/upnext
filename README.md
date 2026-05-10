# UpNext

UpNext is an AI-powered IT recruitment platform for junior and mid-level hiring. The platform helps candidates improve their CVs and interview skills while helping recruiters screen applicants with transparent, human-in-the-loop AI support.

For the latest project handoff, run instructions, completed scope, and remaining work, see [`HANDOFF.md`](./HANDOFF.md). For the presentation guide, see [`DEFENSE.md`](./DEFENSE.md).

## Product positioning

UpNext is not a generic job board. It is a skills-based recruitment workflow where AI acts as:

1. a recruiter copilot,
2. a candidate coach,
3. a productivity layer for CV analysis, job matching, interview preparation, and hiring workflow.

AI never automatically rejects candidates. Recruiters remain final decision makers.

## Tech stack

- Package manager: `pnpm`
- Frontend: Next.js App Router, TypeScript, Tailwind CSS
- Backend: Express.js, TypeScript, layered modules
- Database: PostgreSQL + Prisma ORM
- AI integration: external AI APIs with structured JSON outputs and safe fallback behavior
- Quality: ESLint, Prettier, strict TypeScript

## Repository structure

```txt
apps/
  web/      Next.js user-facing app
  api/      Express API
packages/
  database/ Prisma schema and database client
  domain/   Shared demo data, role permissions, and business rules
DESIGN.md  Product/design-system/UX/AI/SEO/GEO/PWA guidance
```

## Setup

```bash
pnpm install
cp .env.example .env
pnpm prepare:generated
pnpm dev
```

Frontend: `http://localhost:3000`  
API health check: `http://localhost:4000/health`

## Development commands

```bash
pnpm dev           # run web and API in parallel
pnpm lint          # lint all workspaces
pnpm typecheck     # TypeScript checks
pnpm build         # Prisma generate + app builds
pnpm prepare:generated
pnpm db:validate   # validate Prisma schema
```

## Demo routes and accounts

Prototype command center:

- `/prototype` — clickable enterprise UI prototype sitemap.
- `/defense` — graduation defense checklist, demo order, and scope framing.
- `/demo` — guided graduation defense walkthrough with route sequence and talking points.
- `/for-candidates` — public landing page for candidate value proposition.
- `/for-employers` — public landing page for recruiter/employer value proposition.
- `/faq` — SEO/GEO product FAQ for search and AI answer engines.
- `/trust` — trust center for privacy, security, fairness, and AI governance.
- `/ai-transparency` — explicit AI safety and human-in-the-loop explanation page.
- `/design-system` — reusable UI pattern inventory for enterprise polish.
- `/notifications` — notification center with actionable alerts and empty state preview.
- `/account/settings` — privacy, notification, and AI consent settings prototype.

Candidate prototype pages:

- `/candidate` — dashboard overview.
- `/candidate/profile` — structured candidate profile and project evidence.
- `/candidate/cv` — consent-first AI CV analysis UI.
- `/candidate/apply/frontend-intern-react` — application submit flow with snapshot and AI consent.
- `/candidate/job-fit` — candidate-facing job-fit analysis with evidence, gaps, and next actions.
- `/candidate/learning-plan` — weekly skill-building roadmap based on CV/job-fit gaps.
- `/candidate/applications` — application tracker and next actions.
- `/candidate/applications/frontend-intern-react` — application detail with CV snapshot and recruiter notes.
- `/candidate/saved-jobs` — saved jobs comparison.
- `/candidate/interview-coach` — text interview coach with rubric feedback.
- `/notifications` — candidate notification center for interviews, applications, AI feedback, and learning reminders.

Recruiter prototype pages:

- `/recruiter` — recruiter dashboard overview.
- `/recruiter/company` — employer profile and verification signals.
- `/recruiter/jobs` — job portfolio operations.
- `/recruiter/jobs/new` — enterprise job editor/JD builder.
- `/recruiter/pipeline` — enterprise hiring pipeline board with manual decision controls.
- `/recruiter/analytics` — funnel quality, fair review, bottleneck, and AI escalation analytics.
- `/recruiter/interviews/nguyen-minh-anh` — interview scheduling with slots, rubric, and candidate clarity.
- `/recruiter/messages/nguyen-minh-anh` — internal recruiter notes and safe collaboration thread.
- `/recruiter/applicants` — human-in-the-loop applicant review.
- `/recruiter/applicants/nguyen-minh-anh` — applicant detail with AI match evidence and interview plan.

Admin prototype pages:

- `/admin` — admin overview.
- `/admin/users` — role-aware account management.
- `/admin/reports` — trust and safety queues.
- `/admin/skills` — skill taxonomy management.
- `/admin/content` — SEO/GEO content operations.
- `/admin/ai-logs` — AI usage/audit logs.

Public/product pages:

- `/auth` — demo accounts, roles, permissions, onboarding tasks.
- `/auth/login`, `/auth/register`, `/auth/onboarding` — account access and role onboarding prototypes.
- `/for-candidates`, `/for-employers`, `/faq` — public conversion and explanation pages.
- `/sitemap.xml` and `/robots.txt` — technical SEO discovery and private-route indexing rules.
- `/offline` and `/sw.js` — safe PWA offline fallback for public pages only.
- `/jobs` and `/jobs/frontend-intern-react` — SEO-ready job discovery/detail flow.
- `/companies` and `/companies/novatech-labs` — company discovery/profile flow.
- `/blog` and `/blog/junior-developer-cv-checklist` — SEO/GEO career content.
- `/career-roadmap` — student-to-junior-developer roadmap.

Demo API endpoints:

- `GET /auth/demo-accounts`
- `POST /auth/login`
- `POST /auth/register`
- `GET /auth/me`
- `GET /jobs`
- `GET /applications`
- `GET /ai/match-preview/frontend-intern-react`

Demo credentials:

- Candidate: `candidate@upnext.dev` / `candidate123`
- Recruiter: `recruiter@upnext.dev` / `recruiter123`
- Admin: `admin@upnext.dev` / `admin123`

## MVP roadmap

### Phase 1 — Foundation

- Authentication and role-based access.
- Candidate/recruiter/admin onboarding.
- Company profile and candidate profile.
- Job posting, listing, filtering, and job detail pages.
- Application workflow with status history.

### Phase 2 — AI recruitment workflow

- CV parsing into structured JSON.
- Candidate-facing CV feedback.
- JD parsing and improvement.
- Hybrid candidate-job matching with explanations.
- Recruiter applicant review dashboard.

### Phase 3 — Interview coach and content

- Text-based AI interview coach.
- Rubric-based answer feedback.
- Blog/content management with SEO/GEO structure.
- Public job/company/blog pages with structured metadata.

### Phase 4 — Polish and defense readiness

- Admin dashboard basics.
- PWA install/offline support.
- Audit logs, AI usage logs, privacy notices, consent UX.
- Graduation defense demo script and testing checklist.

## Team recommendation

For a 5-member student team:

1. Frontend/public pages + UI system.
2. Candidate dashboard/profile/application flow.
3. Recruiter dashboard/job/applicant flow.
4. Backend/API/database/auth.
5. AI workflows/content/admin/testing.

Keep weekly integration demos. Do not let each member build isolated screens without shared data contracts.

## AI and ethics rules

- AI outputs must include explanations, confidence, limitations, and evidence.
- AI must not auto-reject candidates.
- Do not infer or evaluate protected attributes.
- Store prompt version, model/provider, timestamp, and structured output.
- Validate all AI JSON output before saving or rendering.
- Show privacy notice and obtain consent before CV upload and AI analysis.
