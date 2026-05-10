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
