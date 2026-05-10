# UpNext Product & Design System

## 1. Context and goals

UpNext is an AI-powered IT recruitment platform for junior and mid-level hiring. It must feel like a modern recruitment product, not a generic CRUD website with AI added later.

### Product promise

> UpNext helps IT candidates improve their CVs and interview readiness while helping recruiters review applicants with transparent, skills-based, human-in-the-loop AI support.

### Non-negotiable rules

- AI must assist; it must not automatically reject or hire candidates.
- Recruiters must remain the final decision makers.
- Candidates must receive constructive feedback, not harsh judgment.
- AI outputs must show evidence, confidence, limitations, and next steps.
- Private candidate data must not be exposed to unauthorized recruiters.
- Public pages must be SEO/GEO-ready from the beginning.
- The MVP must be realistic for a 5-member student team.

## 2. Target users

### Candidate

Primary goals:

- Create a profile.
- Upload and improve a CV.
- Find suitable IT jobs.
- Apply and track status.
- Practice interviews.

Key UX need: after login, the candidate should immediately know the next best action.

### Recruiter / Employer

Primary goals:

- Manage company profile.
- Publish jobs.
- Review applicants.
- Understand candidate-job fit.
- Shortlist and invite interviews manually.

Key UX need: recruiters should quickly see applicant quality, status, and evidence without reading every CV from scratch.

### Admin

Primary goals:

- Manage users, companies, jobs, content, reports, skills, question banks, AI logs, and platform quality.

Key UX need: admin screens should prioritize control, filtering, moderation, and auditability.

## 3. MVP scope

### Must build first

1. Authentication and role-based access.
2. Candidate profile and CV upload.
3. Company and recruiter profile.
4. Job CRUD with draft/published/closed states.
5. Public job listing and job detail pages.
6. Application workflow with CV snapshot.
7. Recruiter applicant management.
8. AI CV parsing and candidate-friendly feedback.
9. AI JD parsing and improvement suggestions.
10. AI candidate-job matching with explanation.
11. Text-based AI interview coach.
12. Blog system with SEO/GEO basics.
13. Admin dashboard basics.
14. Basic PWA setup.
15. AI privacy notice and consent.

### Must not build in MVP

- Video AI interview.
- Voice scoring.
- Emotion detection.
- Face analysis.
- Automatic rejection.
- Payment system.
- Social network features.
- Complex vector search unless core workflow is already stable.

## 4. Product architecture

### Frontend

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Server rendering for public SEO pages.
- Client components only where interactivity is needed.
- Reusable components for cards, badges, forms, status chips, dialogs, tables, filters, and AI explanation panels.

### Backend

- Express.js with clean layered architecture for MVP:
  - routes,
  - controllers/handlers,
  - services,
  - repositories,
  - DTO validation,
  - middleware,
  - auth guards.
- NestJS can be a later migration if the team becomes comfortable with it.

### Database

- PostgreSQL.
- Prisma ORM.
- JSONB for flexible AI outputs, parsed CV data, rubrics, and logs.
- Relational tables for core business workflows.

### AI

- Use external AI APIs with structured JSON output.
- Validate AI output with schema before saving.
- Store provider, model, prompt version, timestamp, confidence, and warnings.
- Provide fallback state if AI fails.

## 5. Design tokens and foundations

### Brand personality

UpNext should feel:

- modern,
- professional,
- trustworthy,
- calm,
- career-focused,
- premium but not flashy.

It should not feel:

- childish,
- overly colorful,
- crypto-like,
- generic admin-template-like,
- AI-hype-heavy.

### Color tokens

Use semantic tokens instead of random one-off colors.

| Token                   | Purpose                        | Example       |
| ----------------------- | ------------------------------ | ------------- |
| `color.brand.primary`   | Main CTA, selected state       | Blue 600      |
| `color.brand.secondary` | AI accent and highlights       | Emerald 500   |
| `color.text.primary`    | Main headings/body             | Slate 900     |
| `color.text.secondary`  | Descriptions                   | Slate 500/600 |
| `color.surface.base`    | Page background                | Slate 50      |
| `color.surface.card`    | Cards                          | White         |
| `color.border.default`  | Card/input borders             | Slate 200     |
| `color.status.success`  | Success/strong match           | Emerald       |
| `color.status.warning`  | Missing data/medium confidence | Amber         |
| `color.status.danger`   | Errors/rejected status         | Red           |
| `color.status.info`     | AI information                 | Blue          |

### Typography

- Use Inter or a similar clean sans-serif.
- Headings must be concise and product-focused.
- Body copy should be readable at 14–16px.
- AI explanations should use cards, bullets, evidence blocks, and score breakdowns instead of long paragraphs.

### Spacing and layout

- Use an 8px spacing system.
- Cards should use consistent padding: 16px, 20px, 24px, or 32px depending on density.
- Dashboards should use clear section grouping.
- Avoid dense tables on mobile; switch to stacked cards.

### Radius and shadow

- Use soft rounded corners: 16px–24px.
- Use subtle shadows only for hierarchy, not decoration.
- Avoid heavy neon glows.

### Motion

Motion should be subtle:

- hover lift,
- score progress reveal,
- skeleton loading,
- step transitions,
- toast feedback.

Motion must not hide important information or slow users down.

## 6. Component-level rules

### Buttons

Required variants:

- primary,
- secondary,
- ghost,
- destructive,
- link.

Required states:

- default,
- hover,
- focus-visible,
- active,
- disabled,
- loading.

Rules:

- Primary buttons should be used for one main action per section.
- Destructive actions must require confirmation for high-risk actions.
- Loading buttons must prevent duplicate submissions.
- Button labels must be specific: use “Publish job”, not “Submit”.

### Forms

Required behavior:

- Validate on blur and submit.
- Show clear error messages near fields.
- Preserve user input when errors occur.
- Use labels for every input.
- Group long forms into logical sections.
- Use autosave/draft for long job descriptions where possible.

Important forms:

- candidate profile,
- CV upload,
- company profile,
- job post editor,
- application form,
- interview coach setup,
- blog editor.

### AI explanation panels

AI panels must include:

- summary,
- score breakdown,
- matched evidence,
- missing signals,
- confidence level,
- limitations,
- recommended next action,
- “AI assists; human review required” notice.

AI panels must not show only a single score.

### Status chips

Application statuses:

- submitted,
- under_review,
- shortlisted,
- interview_invited,
- rejected,
- hired,
- withdrawn.

Rules:

- Status colors must be consistent across candidate and recruiter screens.
- Rejected state should be respectful and not visually aggressive.
- Withdrawn should be neutral.

### Tables and lists

Recruiter applicant tables must support:

- search,
- filters,
- status,
- match range,
- job,
- date,
- pagination.

Mobile behavior:

- Convert dense rows into cards.
- Keep primary action visible.

### Empty states

Every major list must have a polished empty state:

- no applications,
- no saved jobs,
- no applicants,
- no jobs,
- no AI analysis yet,
- no interview sessions.

Empty states must include a useful CTA.

### Loading states

Use skeletons for:

- dashboard stats,
- applicant lists,
- job lists,
- AI analysis cards.

AI loading should show steps:

1. Extracting information.
2. Comparing skills.
3. Preparing feedback.
4. Checking limitations.

## 7. User flows

### Candidate flow

1. Register as candidate.
2. Complete profile.
3. Upload CV and consent to AI analysis.
4. Review AI feedback.
5. Search/filter jobs.
6. Apply using selected CV version.
7. Track application status.
8. Practice interview for target role.

### Recruiter flow

1. Register as recruiter.
2. Create or join company.
3. Complete company profile.
4. Create job draft.
5. Use AI JD improvement.
6. Publish job.
7. Review applicants.
8. Open candidate-job match explanation.
9. Manually shortlist or reject.
10. Send interview invitation/update.

### Admin flow

1. Review new companies.
2. Moderate jobs/content/reports.
3. Manage skill taxonomy.
4. Manage interview question bank.
5. Review AI usage logs.
6. Monitor platform quality.

## 8. Business logic rules

- A candidate can apply to a job only once.
- Applications must store CV/profile snapshot at submission time.
- Closed jobs must not accept new applications.
- Draft jobs must not be publicly visible.
- Recruiters can only view applicants for jobs belonging to their company.
- Admin can manage all data.
- Candidates can withdraw applications only before terminal statuses where the team defines withdrawal as unavailable.
- AI score must not automatically change application status.
- AI score may be recalculated when CV/JD changes, but historical application snapshots must stay stable.
- Blog posts must support draft, published, scheduled, and archived states.

### Recommended status transitions

```txt
submitted -> under_review -> shortlisted -> interview_invited -> hired
submitted -> under_review -> rejected
submitted -> withdrawn
under_review -> withdrawn
```

Do not allow random jumps without audit history.

## 9. AI workflow design

### CV parsing

Input:

- extracted CV text,
- file metadata,
- candidate consent.

Output:

- name,
- email,
- phone,
- skills,
- education,
- experience,
- projects,
- certifications,
- languages,
- achievements,
- confidence,
- warnings.

### CV feedback

Candidate-facing output:

- strengths,
- weaknesses,
- missing skills,
- wording improvements,
- recommended projects,
- next learning steps.

Tone:

- friendly,
- constructive,
- specific,
- not judgmental.

### JD parsing

Output:

- title,
- level,
- required skills,
- nice-to-have skills,
- responsibilities,
- experience,
- location,
- salary,
- job type,
- work mode.

Normalize skills using the platform skill taxonomy.

### Candidate-job matching

Use hybrid scoring:

1. Rule-based must-have skills, level, experience, location, and work mode.
2. LLM explanation for human-readable reasoning.
3. Optional semantic matching later.

Output:

- `overallMatchScore`,
- `skillMatchScore`,
- `experienceMatchScore`,
- `projectRelevanceScore`,
- `missingRequiredSkills`,
- `matchedSkills`,
- `relevantEvidenceFromCV`,
- `recruiterSummary`,
- `candidateImprovementSuggestions`,
- `suggestedInterviewQuestions`,
- `confidence`,
- `limitations`.

### Interview coach

Flow:

1. Candidate chooses role, level, tech stack, interview type.
2. System selects question from question bank.
3. AI may generate one contextual follow-up.
4. Candidate answers.
5. AI evaluates with rubric.
6. Candidate receives feedback, score breakdown, sample answer, learning suggestions.

Rubric:

- correctness,
- clarity,
- depth,
- structure,
- communication,
- relevance.

## 10. SEO plan

Public pages should be indexable:

- homepage,
- job listing,
- job detail,
- company profile,
- blog category,
- blog detail,
- career guide pages.

Private pages must not be indexed:

- dashboards,
- applications,
- CVs,
- recruiter applicant pages,
- admin pages.

Each job detail page should include:

- unique title,
- meta description,
- canonical URL,
- JobPosting schema,
- company,
- location,
- salary if available,
- job type,
- skills,
- similar jobs,
- related articles.

Blog posts should include:

- slug,
- meta title,
- meta description,
- excerpt,
- category,
- tags,
- reading time,
- author,
- updated date,
- table of contents,
- FAQ where useful,
- Article/Breadcrumb/FAQ schema.

## 11. GEO plan

Content must be easy for AI answer engines to understand and cite.

Rules:

- Start long articles with a concise answer summary.
- Use question-answer sections.
- Use comparison tables.
- Include checklists and frameworks.
- Mention target audience clearly.
- Add examples for Vietnamese junior developers where relevant.
- Include author/reviewer information.
- Use updated/reviewed dates.
- Avoid fluffy keyword stuffing.

Recommended content clusters:

- CV tips for junior developers.
- Frontend interview questions.
- Backend interview questions.
- React interview preparation.
- Node.js interview preparation.
- How recruiters screen IT candidates.
- Skills-based hiring in IT.
- AI in recruitment.
- Internship/job search roadmap for students.

## 12. PWA plan

MVP PWA features:

- web app manifest,
- app icon,
- theme color,
- standalone display,
- offline fallback page.

Later:

- safe caching for public job/blog pages,
- saved jobs offline preview,
- application status notification concept.

Security rule:

- Do not cache private dashboard data carelessly.
- Do not cache CV files or AI analysis containing sensitive personal data.

## 13. Security, privacy, and ethics

Required:

- secure password hashing,
- DTO validation,
- auth guards,
- role-based authorization,
- file type and size validation,
- private object storage URLs,
- audit logs for important actions,
- AI consent before CV analysis,
- privacy notice for AI processing,
- environment variables for secrets,
- sanitized user-generated content.

Forbidden:

- AI auto-rejection,
- emotion recognition,
- face analysis,
- personality scoring from voice/appearance,
- protected-attribute inference,
- exposing private CV files publicly.

## 14. Accessibility requirements

Target WCAG 2.2 AA.

Must include:

- semantic HTML,
- proper form labels,
- visible focus states,
- keyboard navigation,
- sufficient contrast,
- alt text for images,
- accessible dialogs/dropdowns,
- clear error messages,
- reduced-motion-safe animations.

Acceptance checks:

- User can navigate main flows with keyboard.
- Form errors are announced or placed near fields.
- Buttons and links have descriptive names.
- Modals trap focus and restore focus on close.
- Color is not the only way to communicate status.

## 15. Performance requirements

- Use pagination for large lists.
- Add indexes for search/filter fields.
- Avoid loading huge dashboard datasets.
- Use skeleton loading for dashboards.
- Optimize images.
- Use SSR/SSG for public SEO pages.
- Use background jobs or async status polling for slow AI tasks.
- Handle AI timeout gracefully.

## 16. Team execution plan

### Member 1 — Frontend foundation

- design system,
- landing/public pages,
- shared components,
- responsive layout.

### Member 2 — Candidate experience

- profile,
- CV upload,
- CV feedback screen,
- applications,
- interview coach UI.

### Member 3 — Recruiter experience

- company profile,
- job editor,
- applicant pipeline,
- AI match explanation UI.

### Member 4 — Backend/database/auth

- Prisma schema,
- auth,
- API modules,
- RBAC,
- application workflow.

### Member 5 — AI/content/admin/QA

- AI prompts,
- structured output validation,
- blog/admin basics,
- seed data,
- test plan,
- graduation demo script.

## 17. QA checklist

### Product

- Does each page have a clear user goal?
- Does the MVP prove a complete recruitment loop?
- Are AI features useful without being unsafe?
- Is the scope realistic for the team?

### UX

- Is the next action obvious after login?
- Are empty/loading/error states polished?
- Are AI explanations scannable?
- Is mobile layout usable?

### Business logic

- Can candidates apply only once?
- Are application snapshots stable?
- Are closed jobs blocked from applications?
- Are recruiter permissions company-scoped?
- Are status changes audited?

### AI

- Is output schema-validated?
- Are prompt versions stored?
- Are confidence and limitations shown?
- Is consent required?
- Is there a fallback when AI fails?

### SEO/GEO

- Do public pages have metadata?
- Are private pages noindexed?
- Do jobs use JobPosting schema?
- Do articles include summaries, FAQs, and structured data where suitable?

### Security

- Are inputs validated?
- Are files type/size checked?
- Are secrets kept out of git?
- Are private files protected?
- Are audit logs available for important actions?
