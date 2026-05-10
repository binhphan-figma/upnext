# UpNext

UpNext is an AI-powered IT recruitment platform for junior and mid-level hiring. The platform helps candidates improve their CVs and interview skills while helping recruiters screen applicants with transparent, human-in-the-loop AI support.

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

Public/product demo pages:

- `/auth` — demo accounts, roles, permissions, onboarding tasks.
- `/jobs` and `/jobs/frontend-intern-react` — SEO-ready job discovery/detail flow.
- `/candidate`, `/recruiter`, `/admin` — role-aware dashboard starter flows.

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
