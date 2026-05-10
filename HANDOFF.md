# UpNext handoff

## 1. Tóm tắt dự án

UpNext là prototype nền tảng tuyển dụng IT dùng AI cho junior/mid-level:

- Candidate: tạo hồ sơ, xem việc, theo dõi ứng tuyển, nhận AI CV feedback, luyện phỏng vấn.
- Recruiter: quản lý công ty/job, xem applicant, dùng AI để giải thích độ phù hợp nhưng vẫn tự ra quyết định.
- Admin: quản trị user, report, skill taxonomy, content, AI logs, trust/safety.

Định hướng hiện tại: **UI prototype-first**. Dự án ưu tiên giao diện enterprise, flow demo, product storytelling, AI ethics, SEO/GEO/PWA readiness trước; chưa cố làm full backend/database thật.

## 2. Tech stack hiện tại

- Monorepo: pnpm workspace.
- Frontend: Next.js App Router, React, TypeScript, Tailwind CSS.
- Backend: Express.js TypeScript demo API.
- Database design: Prisma schema PostgreSQL trong `packages/database`.
- Shared domain/mock data: `packages/domain` và `apps/web/src/lib/prototype-data.ts`.
- Quality: ESLint, Prettier, TypeScript strict checks, GitHub Actions CI.

## 3. Những gì đã làm được

### Foundation

- Khởi tạo monorepo chuẩn: `apps/web`, `apps/api`, `packages/domain`, `packages/database`.
- Có `DESIGN.md`, `DEFENSE.md`, README, Prisma schema, `.env.example`, CI quality gates.
- Có mock Auth/RBAC demo users:
  - Candidate: `candidate@upnext.dev` / `candidate123`
  - Recruiter: `recruiter@upnext.dev` / `recruiter123`
  - Admin: `admin@upnext.dev` / `admin123`

### Public / SEO / GEO prototype

- Homepage SaaS-style.
- Job listing/detail: `/jobs`, `/jobs/frontend-intern-react`.
- Company listing/detail: `/companies`, `/companies/novatech-labs`.
- Blog/career content: `/blog`, `/blog/junior-developer-cv-checklist`, `/career-roadmap`.
- Technical SEO/PWA: `/sitemap.xml`, `/robots.txt`, canonical metadata, FAQ structured data,
  `/offline`, and safe service worker caching for public pages only.
- Trust/storytelling pages:
  - `/defense` — checklist bảo vệ, demo order, Q&A, scope honesty.
  - `/demo` — route demo bảo vệ tốt nghiệp.
  - `/for-candidates` — landing page public cho candidate.
  - `/for-employers` — landing page public cho recruiter/employer.
  - `/faq` — FAQ SEO/GEO dạng hỏi đáp.
  - `/trust` — privacy/security/fairness/AI governance.
  - `/ai-transparency` — AI human-in-the-loop explanation.
  - `/design-system` — visual pattern inventory.

### Candidate prototype

- `/candidate` — dashboard.
- `/candidate/profile` — profile, skills, project evidence.
- `/candidate/cv` — AI CV feedback, consent, limitations.
- `/candidate/applications` — application tracker.
- `/candidate/applications/frontend-intern-react` — application detail, CV snapshot, recruiter notes.
- `/candidate/saved-jobs` — saved jobs.
- `/candidate/interview-coach` — interview coach UI.

### Recruiter prototype

- `/recruiter` — dashboard.
- `/recruiter/company` — company profile and verification.
- `/recruiter/jobs` — job portfolio.
- `/recruiter/jobs/new` — JD builder UI.
- `/recruiter/applicants` — applicant review.
- `/recruiter/applicants/nguyen-minh-anh` — applicant detail, AI match evidence, risks, interview plan.

### Admin prototype

- `/admin` — operations overview.
- `/admin/users` — user/RBAC management.
- `/admin/reports` — trust and safety queues.
- `/admin/skills` — skill taxonomy.
- `/admin/content` — SEO/GEO content ops.
- `/admin/ai-logs` — AI audit logs.

### Account / workflow prototype

- `/auth` — demo accounts and RBAC overview.
- `/auth/login`, `/auth/register`, `/auth/onboarding`.
- `/account/settings` — privacy, notification, AI consent controls.
- `/notifications` — actionable notification center and empty state preview.

## 4. Những gì chưa làm được / chưa nên claim là production

- Chưa có authentication production thật: chưa hash password, refresh token, secure cookie, email verification.
- Chưa connect PostgreSQL thật cho UI flows; phần lớn UI dùng mock data.
- Chưa upload/parse file CV thật.
- Chưa gọi AI provider thật; AI output đang là mock/prototype.
- Chưa có recruiter notes/status update persistence thật.
- Chưa có admin CRUD thật.
- Chưa có search/filter backend thật.
- Chưa có automated E2E tests bằng Playwright/Cypress.
- Chưa deploy production frontend/backend.

Nói khi bảo vệ: **Đây là high-fidelity enterprise UI prototype + architecture foundation**, chưa phải sản phẩm production hoàn chỉnh.

## 5. Cách chạy dự án để xem giao diện FE

Yêu cầu:

- Node.js 22.x
- pnpm 9.15.x

Chạy lần đầu:

```bash
pnpm install
cp .env.example .env
pnpm prepare:generated
pnpm --filter @upnext/web dev
```

Mở trình duyệt:

```txt
http://localhost:3000
```

Nếu muốn chạy cả FE + API demo cùng lúc:

```bash
pnpm dev
```

Sau đó:

```txt
Frontend: http://localhost:3000
API health: http://localhost:4000/health
```

Nếu gặp lỗi import từ package generated/domain, chạy lại:

```bash
pnpm prepare:generated
```

Kiểm tra PWA/SEO nhanh sau khi build production:

```bash
pnpm build
pnpm --filter @upnext/web start
```

Mở:

```txt
http://localhost:3000/manifest.webmanifest
http://localhost:3000/sitemap.xml
http://localhost:3000/robots.txt
http://localhost:3000/offline
```

## 6. Route nên mở để review giao diện nhanh

Nên review theo thứ tự này:

1. `/demo` — kịch bản demo bảo vệ.
2. `/defense` — checklist nói chuyện với hội đồng.
3. `/prototype` — sitemap toàn bộ UI.
4. `/` — homepage.
5. `/for-candidates` và `/for-employers` — public conversion pages.
6. `/candidate/cv` — điểm mạnh nhất phía candidate.
7. `/recruiter/applicants/nguyen-minh-anh` — điểm mạnh nhất phía recruiter.
8. `/trust` và `/ai-transparency` — AI ethics/privacy.
9. `/faq` — SEO/GEO FAQ.
10. `/design-system` — visual consistency.
11. `/jobs/frontend-intern-react` — public SEO job detail.
12. `/admin/ai-logs` — admin AI governance.

## 7. Lệnh kiểm tra chất lượng

```bash
pnpm format
pnpm lint
pnpm typecheck
pnpm build
pnpm format:check
```

CI hiện dùng quality gates tương tự trên GitHub Actions.

## 8. Hướng làm tiếp nếu còn thời gian

Ưu tiên theo thứ tự:

1. Chạy app bằng browser, chụp/record các route chính để chuẩn bị slide.
2. Làm responsive polish cuối cho mobile/tablet nếu thấy route nào xấu.
3. Thêm screenshots vào slide defense, không cần thêm nhiều feature mới.
4. Nếu bắt buộc làm backend: chỉ chọn một vertical slice nhỏ:
   - database-backed jobs + applications, hoặc
   - auth/session thật, hoặc
   - CV upload + AI consent mock pipeline.

Không nên cố làm toàn bộ backend/AI production trong thời gian ngắn vì dễ hỏng UI demo và tăng bug.

## 9. Câu nói ngắn khi bảo vệ

“UpNext hiện được xây theo hướng prototype-first: nhóm ưu tiên hoàn thiện trải nghiệm người dùng enterprise, workflow tuyển dụng, AI transparency, privacy, SEO/GEO và kiến trúc mở rộng. AI trong UpNext chỉ đóng vai trò copilot/coach, không tự động loại ứng viên; nhà tuyển dụng vẫn là người quyết định cuối cùng.”
