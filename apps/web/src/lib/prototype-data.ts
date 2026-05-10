import type { ApplicationStatus } from "@upnext/domain";

export type PrototypeMetric = {
  label: string;
  value: string;
  detail: string;
};

export type PrototypePage = {
  href: string;
  title: string;
  description: string;
  owner: "Candidate" | "Recruiter" | "Admin" | "Public";
  status: "Prototype" | "Ready for demo" | "Needs data";
};

export const prototypePages: PrototypePage[] = [
  {
    href: "/defense",
    title: "Graduation defense kit",
    description: "Presentation checklist, demo order, scope honesty, and reviewer Q&A guidance.",
    owner: "Public",
    status: "Ready for demo"
  },
  {
    href: "/for-candidates",
    title: "Candidate landing page",
    description: "Public conversion page explaining CV feedback, matching, and interview coaching.",
    owner: "Public",
    status: "Ready for demo"
  },
  {
    href: "/for-employers",
    title: "Employer landing page",
    description:
      "Public conversion page for recruiter copilot, applicant review, and hiring workflow.",
    owner: "Public",
    status: "Ready for demo"
  },
  {
    href: "/faq",
    title: "SEO/GEO FAQ",
    description: "Question-answer product content optimized for search and AI answer engines.",
    owner: "Public",
    status: "Ready for demo"
  },
  {
    href: "/demo",
    title: "Guided demo script",
    description:
      "Defense-ready walkthrough that explains product value, routes, and talking points.",
    owner: "Public",
    status: "Ready for demo"
  },
  {
    href: "/trust",
    title: "Trust center",
    description: "Privacy, security, AI consent, and human decision-control principles.",
    owner: "Public",
    status: "Ready for demo"
  },
  {
    href: "/ai-transparency",
    title: "AI transparency",
    description: "How UpNext uses AI safely for coaching, summarization, and decision support.",
    owner: "Public",
    status: "Ready for demo"
  },
  {
    href: "/candidate/profile",
    title: "Candidate profile",
    description: "Structured profile, skills, project evidence, links, and job preferences.",
    owner: "Candidate",
    status: "Ready for demo"
  },
  {
    href: "/candidate/cv",
    title: "AI CV analysis",
    description: "Consent-first CV feedback with strengths, gaps, keywords, and limitations.",
    owner: "Candidate",
    status: "Ready for demo"
  },
  {
    href: "/candidate/applications",
    title: "Application tracker",
    description: "Pipeline timeline, status transparency, and next best action guidance.",
    owner: "Candidate",
    status: "Ready for demo"
  },
  {
    href: "/candidate/applications/frontend-intern-react",
    title: "Application detail",
    description: "Status history, CV snapshot, recruiter notes, and candidate next actions.",
    owner: "Candidate",
    status: "Ready for demo"
  },
  {
    href: "/candidate/interview-coach",
    title: "Interview coach",
    description: "Text interview practice, rubric scoring, improved answer, and learning plan.",
    owner: "Candidate",
    status: "Prototype"
  },
  {
    href: "/recruiter/jobs",
    title: "Recruiter jobs",
    description: "Job portfolio, publication state, applicants, and performance signals.",
    owner: "Recruiter",
    status: "Ready for demo"
  },
  {
    href: "/recruiter/applicants/nguyen-minh-anh",
    title: "Applicant detail",
    description:
      "Candidate evidence, AI match explanation, interview plan, and manual decision UI.",
    owner: "Recruiter",
    status: "Ready for demo"
  },
  {
    href: "/recruiter/jobs/new",
    title: "Job editor",
    description: "Enterprise job posting form with AI JD suggestions and review checklist.",
    owner: "Recruiter",
    status: "Prototype"
  },
  {
    href: "/recruiter/applicants",
    title: "Applicant review",
    description: "Human-in-the-loop candidate ranking with evidence and risk indicators.",
    owner: "Recruiter",
    status: "Ready for demo"
  },
  {
    href: "/admin/reports",
    title: "Trust and safety",
    description: "Moderation queues for reports, companies, jobs, content, and AI concerns.",
    owner: "Admin",
    status: "Prototype"
  },
  {
    href: "/companies",
    title: "Company discovery",
    description: "SEO-ready employer profile cards and hiring signals for candidates.",
    owner: "Public",
    status: "Ready for demo"
  },
  {
    href: "/auth/login",
    title: "Login prototype",
    description: "Enterprise auth form, role-aware demo credentials, and security hints.",
    owner: "Public",
    status: "Prototype"
  },
  {
    href: "/auth/onboarding",
    title: "Onboarding prototype",
    description: "Role-specific setup checklist for candidates, recruiters, and admins.",
    owner: "Public",
    status: "Prototype"
  },
  {
    href: "/blog",
    title: "Career content hub",
    description: "SEO/GEO-ready content clusters for CV tips, interviews, and roadmaps.",
    owner: "Public",
    status: "Ready for demo"
  }
];

export const candidateMetrics: PrototypeMetric[] = [
  { label: "CV readiness", value: "78%", detail: "Needs stronger testing evidence" },
  { label: "Active applications", value: "6", detail: "2 moved forward this week" },
  { label: "Saved jobs", value: "14", detail: "5 high-fit roles" },
  { label: "Interview practice", value: "8", detail: "React, Node.js, teamwork" }
];

export const cvFeedback = {
  score: 78,
  confidence: "Medium",
  strengths: [
    "React and TypeScript are visible in multiple projects.",
    "Portfolio demonstrates responsive UI thinking.",
    "Git and REST API exposure matches junior frontend expectations."
  ],
  improvements: [
    "Add measurable outcomes for each project.",
    "Show testing evidence with unit/component tests.",
    "Move GitHub, demo links, and role target near the top."
  ],
  missingSignals: ["Testing Library", "accessibility", "team code review", "deployment pipeline"],
  suggestedKeywords: ["React", "TypeScript", "Tailwind CSS", "REST API", "Testing Library", "Git"],
  limitations: [
    "AI feedback is a coaching suggestion, not a hiring decision.",
    "Recruiters must review the CV evidence manually.",
    "Sensitive data should be removed before AI processing."
  ]
};

export const applicationTimeline: Array<{
  job: string;
  company: string;
  status: ApplicationStatus;
  date: string;
  nextAction: string;
}> = [
  {
    job: "Frontend Intern — React",
    company: "NovaTech Labs",
    status: "shortlisted",
    date: "May 08",
    nextAction: "Prepare project walkthrough"
  },
  {
    job: "Junior Backend Developer — Node.js",
    company: "BlueBridge Software",
    status: "under_review",
    date: "May 06",
    nextAction: "Add SQL project evidence"
  },
  {
    job: "QA Automation Intern",
    company: "OrbitWorks",
    status: "submitted",
    date: "May 03",
    nextAction: "Wait for recruiter review"
  }
];

export const interviewCoachRubric = [
  { label: "Technical correctness", score: 72, note: "Answer covers hooks but misses trade-offs." },
  { label: "Structure", score: 84, note: "Clear situation-task-action-result flow." },
  { label: "Communication", score: 80, note: "Good clarity; add concrete project evidence." },
  { label: "Depth", score: 64, note: "Needs more debugging and performance examples." }
];

export const recruiterMetrics: PrototypeMetric[] = [
  { label: "Published jobs", value: "12", detail: "3 closing this week" },
  { label: "Applicants", value: "186", detail: "+24% from last month" },
  { label: "Shortlist rate", value: "18%", detail: "Healthy for junior roles" },
  { label: "Avg. AI confidence", value: "Med", detail: "Manual review required" }
];

export const applicantReviewRows = [
  {
    name: "Nguyen Minh Anh",
    role: "Frontend Intern — React",
    score: 84,
    risk: "Missing testing evidence",
    evidence: "React portfolio, REST API project, Tailwind UI"
  },
  {
    name: "Pham Gia Huy",
    role: "Junior Backend Developer — Node.js",
    score: 76,
    risk: "Limited production deployment",
    evidence: "Express API, PostgreSQL schema, Prisma basics"
  },
  {
    name: "Vo Thanh Truc",
    role: "QA Automation Intern",
    score: 69,
    risk: "Needs clearer JavaScript fundamentals",
    evidence: "Manual QA checklist, Cypress intro project"
  }
];

export const adminQueues = [
  { label: "Company verification", count: 9, severity: "Medium", owner: "Trust team" },
  { label: "Reported jobs", count: 4, severity: "High", owner: "Admin" },
  { label: "Skill aliases", count: 38, severity: "Low", owner: "Taxonomy" },
  { label: "AI fallback logs", count: 12, severity: "Medium", owner: "AI ops" }
];

export const companies = [
  {
    slug: "novatech-labs",
    name: "NovaTech Labs",
    type: "Product studio",
    location: "Ho Chi Minh City",
    openRoles: 6,
    culture: "Mentorship, product thinking, weekly code review",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"]
  },
  {
    slug: "bluebridge-software",
    name: "BlueBridge Software",
    type: "Outsourcing partner",
    location: "Da Nang",
    openRoles: 9,
    culture: "Remote-friendly, backend architecture, client communication",
    stack: ["Node.js", "NestJS", "Prisma", "AWS"]
  },
  {
    slug: "orbitworks",
    name: "OrbitWorks",
    type: "SaaS company",
    location: "Hanoi",
    openRoles: 4,
    culture: "Design systems, quality engineering, strong onboarding",
    stack: ["Next.js", "Playwright", "Docker", "PostgreSQL"]
  }
];

export const blogPosts = [
  {
    slug: "junior-developer-cv-checklist",
    title: "Junior Developer CV Checklist for Vietnamese IT Students",
    category: "CV Tips",
    readingTime: "7 min read",
    summary:
      "A practical checklist for writing a developer CV with project evidence, keywords, and recruiter-friendly structure."
  },
  {
    slug: "react-interview-preparation-roadmap",
    title: "React Interview Preparation Roadmap",
    category: "Interview",
    readingTime: "9 min read",
    summary:
      "What junior React candidates should review before interviews: components, state, effects, APIs, accessibility, and debugging."
  },
  {
    slug: "skills-based-hiring-for-junior-it",
    title: "Skills-Based Hiring for Junior IT Roles",
    category: "Recruiting",
    readingTime: "6 min read",
    summary:
      "How recruiters can evaluate junior talent fairly using skills, projects, evidence, and structured interview rubrics."
  }
];

export const accountSecurityChecklist = [
  "Use strong password and secure session storage in production.",
  "Enable role-based redirects after login.",
  "Show privacy notice before CV upload or AI processing.",
  "Audit high-risk admin and recruiter actions."
];

export const onboardingSteps = [
  {
    role: "candidate",
    title: "Candidate onboarding",
    steps: ["Complete profile", "Upload CV with AI consent", "Save 3 jobs", "Practice interview"]
  },
  {
    role: "recruiter",
    title: "Recruiter onboarding",
    steps: ["Verify company", "Draft first job", "Review rubric", "Invite first candidate"]
  },
  {
    role: "admin",
    title: "Admin onboarding",
    steps: ["Review reports", "Audit AI logs", "Normalize skills", "Approve companies"]
  }
];

export const notifications = [
  {
    title: "NovaTech moved your application to shortlist",
    detail: "Prepare a 5-minute React portfolio walkthrough before the interview invite.",
    time: "10 min ago",
    tone: "emerald"
  },
  {
    title: "AI CV feedback is ready",
    detail: "Testing evidence and accessibility keywords are still missing from your CV.",
    time: "1 hour ago",
    tone: "blue"
  },
  {
    title: "Recruiter review required",
    detail: "Three candidates have medium-confidence AI match results and need manual review.",
    time: "Today",
    tone: "amber"
  }
] as const;

export const applicationDetail = {
  title: "Frontend Intern — React",
  company: "NovaTech Labs",
  status: "shortlisted" as ApplicationStatus,
  submittedAt: "May 08, 2026",
  cvSnapshot: "CV version 3 · React frontend focus · AI consent confirmed",
  timeline: [
    "Application submitted with CV snapshot",
    "AI match explanation generated for recruiter",
    "Recruiter manually moved application to shortlist",
    "Candidate should prepare portfolio walkthrough"
  ],
  recruiterNotes: [
    "Strong React/Tailwind portfolio evidence.",
    "Ask about API error handling and testing plan.",
    "Do not treat AI score as final decision."
  ]
};

export const applicantDetail = {
  name: "Nguyen Minh Anh",
  role: "Frontend Intern — React",
  score: 84,
  confidence: "Medium",
  summary:
    "Good junior frontend signal with visible React projects, Tailwind usage, and GitHub evidence. Needs manual verification for testing depth.",
  evidence: ["React portfolio", "REST API integration", "Responsive Tailwind components"],
  risks: [
    "Limited testing proof",
    "No accessibility checklist shown",
    "Deployment process unclear"
  ],
  interviewPlan: [
    "Walk through one React component architecture decision.",
    "Explain API loading, empty, and error states.",
    "Describe how they would test a form-heavy page.",
    "Ask what accessibility improvements they would add."
  ]
};

export const demoWalkthrough = [
  {
    step: "01",
    title: "Start with product positioning",
    route: "/",
    talkingPoint:
      "UpNext is not a generic job board. It is a skills-based IT recruitment platform where AI assists candidates and recruiters."
  },
  {
    step: "02",
    title: "Show complete prototype map",
    route: "/prototype",
    talkingPoint:
      "The project is prototype-first now: every major role has polished pages, clear goals, and reusable enterprise patterns."
  },
  {
    step: "03",
    title: "Candidate coaching story",
    route: "/candidate/cv",
    talkingPoint:
      "AI gives constructive CV feedback, limitations, and next actions. It never becomes an automatic hiring decision."
  },
  {
    step: "04",
    title: "Recruiter decision support",
    route: "/recruiter/applicants/nguyen-minh-anh",
    talkingPoint:
      "Recruiters see evidence, risks, and interview questions, but final status changes remain manual and auditable."
  },
  {
    step: "05",
    title: "Trust, privacy, and AI ethics",
    route: "/trust",
    talkingPoint:
      "The defense should emphasize consent, data minimization, RBAC, AI logs, and human-in-the-loop workflow."
  }
];

export const aiTransparencyPrinciples = [
  {
    title: "AI is a copilot, not a judge",
    detail:
      "UpNext uses AI to summarize, explain, coach, and suggest interview questions. It never auto-rejects candidates."
  },
  {
    title: "Every score needs evidence",
    detail:
      "Match scores are paired with matched skills, missing signals, confidence, limitations, and CV/JD evidence."
  },
  {
    title: "Prompt and model usage should be logged",
    detail:
      "Production AI outputs should store prompt version, provider, timestamp, confidence, warnings, and fallback status."
  },
  {
    title: "Sensitive data should be minimized",
    detail:
      "AI requests should avoid unnecessary personal information and require consent before CV or interview analysis."
  }
];

export const trustCenterSections = [
  {
    title: "Privacy",
    items: [
      "AI consent before CV analysis",
      "Data deletion request concept",
      "Private dashboard pages are noindex"
    ]
  },
  {
    title: "Security",
    items: ["RBAC permissions", "Protected API routes", "Audit logs for recruiter/admin actions"]
  },
  {
    title: "Fairness",
    items: [
      "No emotion or face analysis",
      "No sensitive-attribute inference",
      "Human review required"
    ]
  },
  {
    title: "Operational quality",
    items: ["Admin reports queue", "AI usage logs", "Skill taxonomy governance"]
  }
];

export const candidateLandingFeatures = [
  {
    title: "CV feedback that explains what to improve",
    detail:
      "Candidates see strengths, missing skills, better keywords, and next actions before applying."
  },
  {
    title: "Job matching based on skills and evidence",
    detail: "UpNext compares candidate profiles with job requirements and shows why a role may fit."
  },
  {
    title: "Interview practice for junior IT roles",
    detail:
      "The interview coach uses rubrics, sample answers, and learning suggestions for real preparation."
  }
];

export const employerLandingFeatures = [
  {
    title: "Recruiter copilot for applicant review",
    detail:
      "AI summarizes candidate-job fit, evidence, missing signals, and suggested interview questions."
  },
  {
    title: "Structured hiring workflow",
    detail:
      "Recruiters manage jobs, applicants, status history, notes, and interview steps from one workspace."
  },
  {
    title: "Human decision control",
    detail:
      "AI does not reject candidates. Recruiters remain responsible for status changes and final decisions."
  }
];

export const publicFaq = [
  {
    question: "What is UpNext?",
    answer:
      "UpNext is an AI-powered IT recruitment platform for junior and mid-level candidates, focused on CV feedback, skills-based matching, recruiter decision support, and interview coaching."
  },
  {
    question: "Does UpNext automatically reject candidates?",
    answer:
      "No. AI only explains, recommends, summarizes, and coaches. Recruiters remain the final decision makers."
  },
  {
    question: "Who is UpNext for?",
    answer:
      "UpNext is designed for IT students, junior developers, mid-level candidates, recruiters, employers, and admins who manage platform quality."
  },
  {
    question: "What makes UpNext different from a normal job board?",
    answer:
      "UpNext focuses on skills, evidence, CV snapshots, application workflow, AI transparency, and practical coaching instead of only listing jobs."
  },
  {
    question: "Is the current project production-ready?",
    answer:
      "Not yet. The current version is a high-fidelity enterprise UI prototype with architecture foundation and mock workflows."
  }
];
