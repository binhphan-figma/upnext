export type WorkMode = "onsite" | "hybrid" | "remote";
export type JobLevel = "Intern" | "Junior" | "Mid";
export type UserRole = "candidate" | "recruiter" | "admin";
export type Permission =
  | "profile:read"
  | "profile:update"
  | "jobs:read"
  | "jobs:write"
  | "applications:read-own"
  | "applications:read-company"
  | "applications:update-status"
  | "ai:cv-feedback"
  | "ai:match-preview"
  | "admin:manage-platform";
export type ApplicationStatus =
  | "submitted"
  | "under_review"
  | "shortlisted"
  | "interview_invited"
  | "rejected"
  | "hired"
  | "withdrawn";

export type UpNextJob = {
  id: string;
  slug: string;
  title: string;
  level: JobLevel;
  company: string;
  logo: string;
  location: string;
  salary: string;
  employmentType: string;
  workMode: WorkMode;
  deadline: string;
  skills: string[];
  requiredSkills: string[];
  niceToHaveSkills: string[];
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  description: string;
  seoDescription: string;
  applicants: number;
  matchScore: number;
};

export type CandidateSnapshot = {
  name: string;
  headline: string;
  location: string;
  skills: string[];
  projects: string[];
  cvScore: number;
};

export type ApplicationRecord = {
  id: string;
  jobSlug: string;
  candidateName: string;
  status: ApplicationStatus;
  submittedAt: string;
  matchScore: number;
  evidence: string[];
  missingSignals: string[];
};

export type DemoUser = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  passwordHint: string;
  avatarInitials: string;
  onboardingTasks: string[];
  dashboardPath: string;
};

export type AuthSession = {
  accessToken: string;
  user: DemoUser;
  permissions: Permission[];
};

export const rolePermissions: Record<UserRole, Permission[]> = {
  candidate: [
    "profile:read",
    "profile:update",
    "jobs:read",
    "applications:read-own",
    "ai:cv-feedback"
  ],
  recruiter: [
    "profile:read",
    "profile:update",
    "jobs:read",
    "jobs:write",
    "applications:read-company",
    "applications:update-status",
    "ai:match-preview"
  ],
  admin: [
    "profile:read",
    "jobs:read",
    "jobs:write",
    "applications:read-company",
    "applications:update-status",
    "ai:cv-feedback",
    "ai:match-preview",
    "admin:manage-platform"
  ]
};

export const demoUsers: DemoUser[] = [
  {
    id: "user-candidate-demo",
    email: "candidate@upnext.dev",
    name: "Nguyen Minh Anh",
    role: "candidate",
    passwordHint: "candidate123",
    avatarInitials: "MA",
    onboardingTasks: [
      "Complete profile basics",
      "Upload CV and confirm AI consent",
      "Apply to one skills-matched role"
    ],
    dashboardPath: "/candidate"
  },
  {
    id: "user-recruiter-demo",
    email: "recruiter@upnext.dev",
    name: "Tran Hoang Nam",
    role: "recruiter",
    passwordHint: "recruiter123",
    avatarInitials: "HN",
    onboardingTasks: [
      "Verify company profile",
      "Publish first job post",
      "Review applicant fit explanations manually"
    ],
    dashboardPath: "/recruiter"
  },
  {
    id: "user-admin-demo",
    email: "admin@upnext.dev",
    name: "Le Bao Khanh",
    role: "admin",
    passwordHint: "admin123",
    avatarInitials: "BK",
    onboardingTasks: [
      "Review pending company reports",
      "Normalize skill taxonomy aliases",
      "Audit AI usage logs and prompt versions"
    ],
    dashboardPath: "/admin"
  }
];

export const candidateSnapshot: CandidateSnapshot = {
  name: "Nguyen Minh Anh",
  headline: "Junior Frontend Developer focused on React and TypeScript",
  location: "Ho Chi Minh City",
  skills: ["React", "TypeScript", "Tailwind CSS", "REST API", "Git", "Figma"],
  projects: [
    "Portfolio with responsive React components",
    "Student task management app using REST APIs",
    "E-commerce UI clone with Tailwind CSS"
  ],
  cvScore: 78
};

export const jobs: UpNextJob[] = [
  {
    id: "job-react-intern",
    slug: "frontend-intern-react",
    title: "Frontend Intern — React",
    level: "Intern",
    company: "NovaTech Labs",
    logo: "N",
    location: "Ho Chi Minh City",
    salary: "4,000,000–7,000,000 VND",
    employmentType: "Internship",
    workMode: "hybrid",
    deadline: "2026-06-15",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST API", "Git"],
    requiredSkills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    niceToHaveSkills: ["TypeScript", "Tailwind CSS", "Testing Library"],
    responsibilities: [
      "Build responsive UI components with React and Tailwind CSS.",
      "Integrate frontend screens with REST APIs.",
      "Collaborate with mentors through pull requests and code reviews."
    ],
    requirements: [
      "Basic HTML, CSS, JavaScript, and React knowledge.",
      "Can explain component props, state, and simple API loading states.",
      "Has at least one project or portfolio link."
    ],
    benefits: [
      "Mentorship from senior frontend engineers.",
      "Real product tasks with weekly feedback.",
      "Internship completion certificate and full-time conversion path."
    ],
    description:
      "A practical internship for students who want to grow from React basics into production-quality frontend development.",
    seoDescription:
      "Apply for a Frontend Intern React role in Ho Chi Minh City. Suitable for students with HTML, CSS, JavaScript, React, Git, and portfolio projects.",
    applicants: 42,
    matchScore: 84
  },
  {
    id: "job-node-junior",
    slug: "junior-backend-nodejs",
    title: "Junior Backend Developer — Node.js",
    level: "Junior",
    company: "BlueBridge Software",
    logo: "B",
    location: "Da Nang",
    salary: "10,000,000–16,000,000 VND",
    employmentType: "Full-time",
    workMode: "remote",
    deadline: "2026-06-30",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST API"],
    requiredSkills: ["Node.js", "Express", "SQL", "REST API", "Git"],
    niceToHaveSkills: ["Prisma", "Docker", "Unit Testing"],
    responsibilities: [
      "Develop REST APIs for internal business workflows.",
      "Design relational data models with PostgreSQL.",
      "Write clear validation and error handling for API endpoints."
    ],
    requirements: [
      "Understands HTTP, REST, SQL basics, and server-side JavaScript.",
      "Can separate route, service, and data access responsibilities.",
      "Has built at least one backend project."
    ],
    benefits: [
      "Remote-friendly working model.",
      "Backend architecture mentoring.",
      "Clear growth path to mid-level engineer."
    ],
    description:
      "A junior backend role for developers who understand web fundamentals and want stronger API/database experience.",
    seoDescription:
      "Junior Node.js Backend Developer role with Express, SQL, REST API, PostgreSQL, and Prisma. Remote-friendly position in Vietnam.",
    applicants: 27,
    matchScore: 71
  },
  {
    id: "job-fullstack-mid",
    slug: "mid-fullstack-nextjs-nodejs",
    title: "Mid Full-stack Developer — Next.js & Node.js",
    level: "Mid",
    company: "OrbitWorks",
    logo: "O",
    location: "Hanoi",
    salary: "22,000,000–35,000,000 VND",
    employmentType: "Full-time",
    workMode: "hybrid",
    deadline: "2026-07-10",
    skills: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
    requiredSkills: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    niceToHaveSkills: ["AWS", "CI/CD", "System Design"],
    responsibilities: [
      "Own full-stack features from UI to API and database.",
      "Improve performance, observability, and deployment quality.",
      "Mentor junior developers through reviews and pairing."
    ],
    requirements: [
      "2+ years building production web applications.",
      "Strong TypeScript and relational database experience.",
      "Can reason about trade-offs and maintainability."
    ],
    benefits: [
      "Product ownership opportunities.",
      "Technical mentoring budget.",
      "Hybrid working and flexible schedule."
    ],
    description:
      "A mid-level full-stack role for engineers ready to own features across frontend, backend, and database layers.",
    seoDescription:
      "Mid Full-stack Developer job using Next.js, Node.js, TypeScript, PostgreSQL, and AWS in Hanoi, Vietnam.",
    applicants: 18,
    matchScore: 63
  }
];

export const applications: ApplicationRecord[] = [
  {
    id: "app-1001",
    jobSlug: "frontend-intern-react",
    candidateName: candidateSnapshot.name,
    status: "under_review",
    submittedAt: "2026-05-08",
    matchScore: 84,
    evidence: ["React portfolio project", "Tailwind responsive UI", "GitHub link included"],
    missingSignals: ["No testing example", "Limited team collaboration evidence"]
  },
  {
    id: "app-1002",
    jobSlug: "junior-backend-nodejs",
    candidateName: candidateSnapshot.name,
    status: "submitted",
    submittedAt: "2026-05-09",
    matchScore: 58,
    evidence: ["REST API coursework", "Basic SQL knowledge"],
    missingSignals: ["No Prisma project", "Backend testing not shown"]
  }
];

export const allowedStatusTransitions: Record<ApplicationStatus, ApplicationStatus[]> = {
  submitted: ["under_review", "withdrawn"],
  under_review: ["shortlisted", "rejected", "withdrawn"],
  shortlisted: ["interview_invited", "rejected"],
  interview_invited: ["hired", "rejected"],
  rejected: [],
  hired: [],
  withdrawn: []
};

export function getJobBySlug(slug: string): UpNextJob | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getApplicationJob(application: ApplicationRecord): UpNextJob | undefined {
  return getJobBySlug(application.jobSlug);
}

export function getDemoUserByEmail(email: string): DemoUser | undefined {
  const normalizedEmail = email.trim().toLowerCase();

  return demoUsers.find((user) => user.email === normalizedEmail);
}

export function getDemoUserById(userId: string): DemoUser | undefined {
  return demoUsers.find((user) => user.id === userId);
}

export function getPermissionsForRole(role: UserRole): Permission[] {
  return rolePermissions[role];
}

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return rolePermissions[role].includes(permission);
}

export function createDemoAccessToken(user: DemoUser): string {
  return `demo:${user.id}:${user.role}`;
}

export function getDemoUserFromAccessToken(accessToken: string): DemoUser | undefined {
  const [prefix, userId] = accessToken.split(":");

  if (prefix !== "demo" || !userId) {
    return undefined;
  }

  return getDemoUserById(userId);
}

export function canTransitionApplicationStatus(
  fromStatus: ApplicationStatus,
  toStatus: ApplicationStatus
): boolean {
  return allowedStatusTransitions[fromStatus].includes(toStatus);
}

export function calculateSkillMatch(candidateSkills: string[], requiredSkills: string[]) {
  const normalizedCandidateSkills = new Set(candidateSkills.map((skill) => skill.toLowerCase()));
  const matchedSkills = requiredSkills.filter((skill) =>
    normalizedCandidateSkills.has(skill.toLowerCase())
  );
  const missingSkills = requiredSkills.filter(
    (skill) => !normalizedCandidateSkills.has(skill.toLowerCase())
  );
  const score =
    requiredSkills.length === 0
      ? 100
      : Math.round((matchedSkills.length / requiredSkills.length) * 100);

  return {
    score,
    matchedSkills,
    missingSkills
  };
}

export function createMatchExplanation(job: UpNextJob, candidate = candidateSnapshot) {
  const skillMatch = calculateSkillMatch(candidate.skills, job.requiredSkills);
  const projectScore = job.level === "Intern" ? 82 : job.level === "Junior" ? 64 : 48;
  const overallScore = Math.round(
    skillMatch.score * 0.6 + projectScore * 0.25 + job.matchScore * 0.15
  );

  return {
    jobSlug: job.slug,
    overallScore,
    skillMatchScore: skillMatch.score,
    projectRelevanceScore: projectScore,
    matchedSkills: skillMatch.matchedSkills,
    missingRequiredSkills: skillMatch.missingSkills,
    evidence: candidate.projects.slice(0, 2),
    recruiterSummary:
      overallScore >= 75
        ? "Strong early-career fit. Review project depth and communication before shortlisting."
        : "Potential fit, but recruiter should verify missing required skills before moving forward.",
    candidateAdvice:
      skillMatch.missingSkills.length > 0
        ? `Add evidence for ${skillMatch.missingSkills.join(", ")} before applying to similar roles.`
        : "CV aligns well with the role. Strengthen impact metrics and testing examples.",
    suggestedInterviewQuestions: [
      "Walk me through one project and explain your technical decisions.",
      "How do you handle loading, error, and empty states in a user interface?",
      "What would you improve if you had one more week on your strongest project?"
    ],
    confidence: "medium",
    limitations: [
      "This is a demo rule-based score with mock data.",
      "Recruiters must verify evidence manually and make the final decision."
    ]
  };
}

export const recruiterPipeline = [
  { label: "Submitted", value: 23, status: "submitted" },
  { label: "Under review", value: 14, status: "under_review" },
  { label: "Shortlisted", value: 8, status: "shortlisted" },
  { label: "Interview", value: 4, status: "interview_invited" }
] as const;

export const adminQualitySignals = [
  { label: "Active users", value: "1,248", detail: "+18% this month" },
  { label: "Published jobs", value: "186", detail: "14 closing this week" },
  { label: "AI analyses", value: "3,902", detail: "0 auto-rejections" },
  { label: "Reports pending", value: "7", detail: "Needs admin review" }
] as const;
