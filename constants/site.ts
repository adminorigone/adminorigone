// ─────────────────────────────────────────────────────────────
// Brand source of truth — Origo One
// Positioning: AI Product Agency. We build. You own.
// Core Pillars: Workflow Automation | Tech Audits | AI Product Engineering
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Origo One",
  shortName: "Origo",
  legalName: "Origo One",
  tagline: "AI products built fast, shipped properly, owned by you.",
  description:
    "Origo One is an AI product agency. We build workflow automation systems, run technical audits, and ship full-stack AI products for founders and operators who are ready to move.",
  email: "hello@oorigone.com",
  domain: "oorigone.com",
  linkedin: "https://linkedin.com/company/origo-one",
  calLink: "https://cal.com/origo-one/strategy",
  abn: "ABN 00 000 000 000",
  location: "Sydney · Global",
  markets: ["Global"],
};

export const CITIES = [
  { slug: "sydney", name: "Sydney", region: "HQ" },
  { slug: "global", name: "Remote", region: "Worldwide" },
];

export const NAV = [
  { label: "Approach", href: "/process" },
  { label: "Capabilities", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export const HERO = {
  brand: "Origo One",
  headline: "Stop building prototypes. Ship production systems.",
  subline:
    "Most agencies sell 'digital transformation' and deliver slide decks. We engineer high-velocity software and AI systems for founders who are ready to move. Fixed scope. Total IP handover. No retainers.",
  primaryCta: { label: "Book a strategy session", href: "https://cal.com/origo-one/strategy" },
  secondaryCta: { label: "See what we build", scene: "poss" },
};

export const HOME_SECTIONS = [
  { id: "hero", no: "00", label: "Start" },
  { id: "proof", no: "01", label: "Results" },
  { id: "shift", no: "02", label: "The problem" },
  { id: "poss", no: "03", label: "What we build" },
  { id: "infrastructure", no: "04", label: "The fix" },
  { id: "entrance", no: "05", label: "The build" },
  { id: "cap", no: "06", label: "Services" },
  { id: "testimonials", no: "07", label: "Social Proof" },
  { id: "machine", no: "08", label: "How" },
  { id: "work", no: "09", label: "Shipped" },
  { id: "cta", no: "10", label: "Work with us" },
  { id: "clarity", no: "11", label: "FAQ" },
  { id: "ship", no: "12", label: "Close" },
] as const;

export type HomeSectionId = (typeof HOME_SECTIONS)[number]["id"];

export function homeSection(id: HomeSectionId) {
  return HOME_SECTIONS.find((s) => s.id === id)!;
}

export const CHAPTERS = [
  {
    id: "shift",
    headline: "You're losing velocity to processes built for a different era.",
    body: "Every fast-growing company hits the same wall: the manual workflows that got you here are now slowing you down. Approvals in Slack threads. Data stuck in spreadsheets. Reporting that takes a week. We map those exact bottlenecks and replace them with systems that run without babysitting.",
    psychology: "Recognition + urgency",
  },
  {
    id: "infrastructure",
    headline: "Technical debt is a silent tax on every decision you make.",
    body: "Slow deploys, brittle integrations, security gaps you haven't had time to close — these compound. We run a deep technical audit, tell you exactly what's costing you, and give you a clear path forward.",
    psychology: "Security + clarity",
  },
  {
    id: "entrance",
    headline: "The idea is clear. The execution is the hard part.",
    body: "You know what you want to build. The gap is between the vision and a working product in production. We close that gap — architecture, model selection, engineering, and launch. You own everything on day one.",
    psychology: "Trust + positioning",
  },
];

export const METRICS = [
  { value: 1000, suffix: "+", label: "users on products we've shipped to production" },
  { value: 3, prefix: "", suffix: " pillars", label: "Automation · Architecture · AI Products" },
  { value: 6, from: 4, prefix: "4–", suffix: " wks", label: "from first call to live system" },
];

export type Transformation = {
  slug: string;
  tag: string;
  from: string;
  to: string;
  summary: string;
  problem: string;
  approach: string;
  ideal: string;
  timeline: string;
  deliverables: string[];
  package: string;
};

export const TRANSFORMATIONS: Transformation[] = [
  {
    slug: "workflow-automation",
    tag: "01",
    from: "Manual Operations",
    to: "Automated Systems",
    summary:
      "We find the workflows bleeding your team's time and replace them with systems that run on their own.",
    problem:
      "Your team is executing the same tasks manually every week. That time adds up to tens of thousands in salary spent on things a system should handle.",
    approach:
      "We map your operations, identify the highest-ROI automation targets, and ship a production system with full observability and clear escalation paths.",
    ideal: "COOs and ops leaders with measurable, repeating volume pain.",
    timeline: "4–8 weeks",
    deliverables: [
      "Operations audit & automation map",
      "Production automation system",
      "Human-in-the-loop controls",
      "Monitoring & escalation paths",
    ],
    package: "Fixed scope",
  },
  {
    slug: "tech-audits",
    tag: "02",
    from: "Technical Debt",
    to: "Scalable Architecture",
    summary:
      "We go deep into your codebase, find what's slowing you down, and give you a clear path forward.",
    problem:
      "Features that should take days take weeks. Your team is scared to touch certain parts of the codebase. Security hasn't been properly reviewed since launch.",
    approach:
      "We audit your architecture end to end — code quality, security posture, performance, scalability. You get a prioritised roadmap with clear impact estimates.",
    ideal: "CTOs and technical founders who've hit a ceiling and need an outside view.",
    timeline: "2–4 weeks",
    deliverables: [
      "Full codebase & security audit",
      "Prioritised refactor roadmap",
      "Performance & security report",
      "Architecture recommendations",
    ],
    package: "Fixed scope",
  },
  {
    slug: "idea-to-reality",
    tag: "03",
    from: "Concept",
    to: "Live Product",
    summary:
      "You bring the idea. We architect, engineer, and ship the production system — you own it outright.",
    problem:
      "You have a clear vision for an AI product but need a team that can move fast and build it properly — not one that drags it out over six months.",
    approach:
      "Fixed scope, fixed timeline. We pick the right model, build the product, integrate payments and auth, and ship to production. Full IP transfer at launch.",
    ideal: "Founders and product leaders who are ready to move now.",
    timeline: "4–8 weeks",
    deliverables: [
      "Fixed-scope product build",
      "AI model selection & integration",
      "Payments, auth, infrastructure",
      "Full IP transfer at launch",
    ],
    package: "Fixed scope",
  },
];

export const SERVICES = TRANSFORMATIONS.map((t) => ({
  slug: t.slug,
  name: `${t.from} → ${t.to}`,
  tag: t.tag,
  summary: t.summary,
  whoFor: t.ideal,
  includes: t.deliverables,
  timeline: t.timeline,
  price: t.package,
}));

export const PROCESS = [
  {
    step: "01",
    title: "First call",
    body: "A direct conversation — no deck, no agenda. We listen to the problem, ask the hard questions, and tell you honestly whether we can help and what it would take.",
  },
  {
    step: "02",
    title: "Discovery Sprint",
    body: "A paid one-week engagement. We map the opportunity, propose the architecture, frame the ROI, and give you a fixed-scope proposal. The fee applies to production.",
  },
  {
    step: "03",
    title: "Build",
    body: "We ship in the open. Weekly demos on staging. Written updates every workday. You see the system being built — not a black box handed over at the end.",
  },
  {
    step: "04",
    title: "Launch & handover",
    body: "We go live, transfer the full repo and infrastructure, document everything, and stay available through stabilisation. The product is yours.",
  },
];

export const PACKAGES = [
  {
    name: "Discovery & Audit",
    price: "Fixed fee",
    detail: "A deep scan of your operations or codebase. You get a prioritised roadmap with impact estimates — clarity before commitment.",
    filter: "For leaders who need to know what they're dealing with before signing anything.",
  },
  {
    name: "Workflow Build",
    price: "Fixed scope",
    detail: "A production automation system built around your highest-impact workflow. Real infrastructure, not a prototype.",
    filter: "For teams who've identified the bottleneck and want it solved.",
  },
  {
    name: "Product Build",
    price: "Fixed scope",
    detail: "Full AI product from concept to launch. Fixed quote, fixed timeline, weekly demos, IP transfer. No retainers.",
    filter: "For founders who are ready to ship.",
  },
];

export const FAQS = [
  {
    q: "Are you a dev shop?",
    a: "No. We're a small, focused AI product agency. We don't take on generic development work. We take on problems where AI or automation creates a meaningful, measurable outcome — and we build the system that delivers it.",
  },
  {
    q: "Where are you based?",
    a: "Sydney, Australia. We work remotely with founders and teams globally.",
  },
  {
    q: "How does pricing work?",
    a: "Fixed scope, fixed price. We quote the project upfront and hold the number. If scope changes, we quote the change before doing it — no surprise invoices.",
  },
  {
    q: "Who owns everything after launch?",
    a: "You do. The repo, the infrastructure, the design files, the documentation — all transferred on final payment. We retain nothing.",
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  url?: string;
  tag: string;
  summary: string;
  result: string;
  featured?: boolean;
  hasStory?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "hirecar-marketplace",
    name: "HireCarMarketplace",
    url: "https://hirecarmarketplace.com.au",
    tag: "Marketplace · Operations",
    summary:
      "Australian car-hire operators were running on phone calls and spreadsheets. We built a two-sided marketplace with instant booking, payments, and trust signals — and shipped it.",
    result: "~1,000 registered users · live",
    featured: true,
    hasStory: true,
  },
  {
    slug: "cars-365",
    name: "Cars365",
    url: "https://cars-365.com.au",
    tag: "Marketplace · Conversion",
    summary:
      "A slow automotive site doesn't just frustrate users—it bleeds revenue. We engineered a sub-second marketplace for Cars365 that turns vehicle inventory into high-converting assets.",
    result: "Live marketplace",
    featured: true,
    hasStory: true,
  },
  {
    slug: "xpdx",
    name: "XPDX Rentals",
    url: "https://xpdx.com.au",
    tag: "Operations · Automation",
    summary:
      "XPDX was hitting a ceiling caused by manual fleet management and spreadsheet chaos. We architected a system to automate state tracking, eliminating double-bookings and revenue leaks.",
    result: "Production operations",
    featured: true,
    hasStory: true,
  },
  {
    slug: "medsage",
    name: "MedSage AI",
    tag: "AI Product · Education",
    summary:
      "Medical students needed more than passive study materials. We built an LLM platform that grades recall, adapts difficulty, and drives spaced repetition.",
    result: "50+ beta users",
  },
];

export const HIRECAR_CASE = {
  title: "HireCarMarketplace",
  url: "hirecarmarketplace.com.au",
  chapter: "From manual ops to live marketplace",
  intro:
    "Independent Australian car-hire operators were running on phone calls and spreadsheets. We redesigned the entire operating model into a two-sided marketplace — listing, booking, payment, and trust — now live with ~1,000 registered users.",
  context:
    "Small operators couldn't compete with aggregator commissions. Renters compared prices across a dozen tabs. Every slow quote was a lost booking.",
  constraints: [
    "Operators needed to list a vehicle in under 10 minutes",
    "Payments had to clear upfront with deposits and refunds",
    "Trust signals had to feel credible without enterprise budgets",
    "Had to ship to production fast enough to validate the model",
  ],
  thinking:
    "This wasn't a website problem — it was an operations problem. Quote latency, inventory visibility, and payment friction were the real constraints. The product had to collapse that entire loop.",
  architecture:
    "Next.js + Supabase for real-time availability, Stripe for payments, OAuth for identity, AI-assisted listing creation to remove operator friction.",
  execution:
    "Fixed scope, weekly demos, production deployment on infrastructure the client owns. No black-box handoff.",
  results: [
    { value: "~1,000", label: "registered users" },
    { value: "3 taps", label: "search to confirmed booking" },
    { value: "Live", label: "production marketplace" },
  ],
  stack: ["Next.js", "Supabase", "Stripe", "OAuth", "Tailwind", "Vercel"],
  lessons:
    "When the constraint is operational latency, AI belongs in listing and enquiry — not as decoration. The marketplace is the workflow redesign.",
  testimonial: {
    pending: true,
    quote: "",
    name: "",
    role: "Founder, HireCarMarketplace",
  },
};

export const CARS365_CASE = {
  title: "Cars365",
  url: "cars-365.com.au",
  chapter: "Stop bleeding intent. Start converting.",
  intro:
    "In the automotive market, a slow search bar is a lost sale. Cars365 was treating inventory like static content; we rebuilt their entire digital presence into a high-velocity conversion engine.",
  context:
    "Car buyers are high-intent but low-patience. They open ten tabs, and the fastest, most credible site wins the booking. Every millisecond of latency in filtering or loading images was directly impacting their bottom line.",
  constraints: [
    "Sub-second load times required for complex, media-heavy inventory queries",
    "Frictionless, mobile-first booking flow to capture impulsive buyers",
    "Deep integration with backend operational workflows",
    "Architecture built to scale traffic without performance degradation",
  ],
  thinking:
    "We stopped looking at this as a 'website' and treated it as a sales funnel. We decoupled the inventory database using Edge computing. By caching dynamic vehicle data globally, the platform feels instantaneous. Fast systems don't just feel better—they convert at a fundamentally higher rate.",
  architecture:
    "Next.js App Router deployed to the Edge for absolute SEO dominance and instant initial loads. Supabase handles the heavy relational logic securely, while Tailwind CSS provides a sharp, premium, trust-building aesthetic.",
  execution:
    "We bypassed the bloated agency process. We prototyped the core booking loop in days, tested it against real latency constraints, and shipped the production build in a tight, aggressive sprint.",
  results: [
    { value: "Sub-1s", label: "search latency" },
    { value: "Zero", label: "tech debt" },
    { value: "Live", label: "in production" },
  ],
  stack: ["Next.js", "Supabase", "Tailwind", "Typescript", "Vercel"],
  lessons:
    "Performance is not an engineering metric; it is a business fundamental. If your site is slow, your competitors are closing your leads.",
  testimonial: {
    pending: true,
    quote: "",
    name: "",
    role: "Founder, Cars365",
  },
};

export const XPDX_CASE = {
  title: "XPDX Rentals",
  url: "xpdx.com.au",
  chapter: "Killing the spreadsheet chaos",
  intro:
    "XPDX was hitting the operational ceiling that kills most rental businesses: manual state tracking. We engineered an automated fleet management system that removes human error and stops revenue leakage.",
  context:
    "When a fleet scales, spreadsheets break. Operators were manually updating availability, leading to double-bookings, missed maintenance windows, and a chaotic customer experience. Growth was constrained by the sheer administrative overhead.",
  constraints: [
    "Real-time, bulletproof state synchronization across the entire fleet",
    "Frictionless customer onboarding that doesn't compromise security",
    "An intuitive control center for operators to manage exceptions",
    "Absolute zero tolerance for overlapping bookings",
  ],
  thinking:
    "We recognized this as a state-machine problem. Human operators shouldn't be updating availability; the system should. We engineered a strictly event-driven architecture. Every booking, cancellation, or maintenance flag is an immutable event that instantly propagates across the platform.",
  architecture:
    "Next.js handles the client and admin interfaces, directly interfacing with a highly relational Supabase schema. We pushed the complex availability logic down into PostgreSQL functions, ensuring that the database itself prevents double-bookings—keeping the frontend fast and dumb.",
  execution:
    "We didn't just build a booking form; we delivered a comprehensive operational backbone. We mapped their exact operational pain points and systematically eliminated them with code.",
  results: [
    { value: "100%", label: "automated tracking" },
    { value: "Zero", label: "booking collisions" },
    { value: "Live", label: "fleet operations" },
  ],
  stack: ["Next.js", "Supabase", "Tailwind", "PostgreSQL", "Vercel"],
  lessons:
    "Complex business logic belongs in the database, not the UI. When consistency dictates revenue, you cannot rely on the frontend for the truth.",
  testimonial: {
    pending: true,
    quote: "",
    name: "",
    role: "Founder, XPDX",
  },
};

export const CASE_STUDY_CONTENT: Record<string, typeof HIRECAR_CASE> = {
  "hirecar-marketplace": HIRECAR_CASE,
  "cars-365": CARS365_CASE,
  "xpdx": XPDX_CASE,
};

export const ABOUT = {
  heading: "We build.\nYou own.",
  body: "Origo One is a small, focused AI product agency based in Sydney. We take on problems where automation and AI create a real, measurable outcome — and we build the system that delivers it. We don't do retainers, we don't do generic software development, and we don't hand you a slide deck. We ship production systems and transfer them to you on day one.",
  philosophy: [
    {
      title: "Outcomes, not hours",
      body: "Every engagement is scoped to a result — not a monthly retainer. We quote the project, hold the number, and deliver.",
    },
    {
      title: "Judgment first",
      body: "Most AI projects fail because the wrong problem gets automated. We start at the root — the actual constraint — before writing a line of code.",
    },
    {
      title: "You see everything",
      body: "Weekly demos on staging. Written updates every workday. Architecture you can read. No black boxes.",
    },
    {
      title: "You own everything",
      body: "Repo, infrastructure, design, documentation — transferred on final payment. We retain no licenses, no access.",
    },
  ],
};

export const TEAM = [
  { name: "Anand", role: "Founder · AI Architect", named: true, photo: null },
  { name: "", role: "Product Engineering", named: false, photo: null },
  { name: "", role: "Applied AI", named: false, photo: null },
  { name: "Sydney Hub", role: "Global Operations", named: true, photo: null },
];

export const FINAL_CTA = {
  heading: "Have a problem worth solving?",
  body: "We take on a small number of projects at a time. If you have a workflow that's costing you, a product that needs to ship, or a codebase that needs fixing — let's talk.",
  cta: { label: "Start the conversation", href: "https://cal.com/origo-one/strategy" },
};

export const DISCOVERY = {
  heading: "First call",
  subline:
    "A direct conversation — no deck, no sales process. Bring the problem or the idea. We'll tell you what we think and whether we're the right team for it.",
  points: [
    "We diagnose the actual constraint, not the surface request",
    "Honest fit assessment — we turn down work that isn't right",
    "If there's a path, you'll leave with a clear shape of what comes next",
    "No pitch, no pressure",
  ],
};

export type Role = {
  slug: string;
  title: string;
  location: string;
  type: string;
  compensation: string;
  status: "Open" | "Closed";
};

export const OPEN_ROLES: Role[] = [
  {
    slug: "ai-growth-intern",
    title: "AI Growth Intern",
    location: "Remote",
    type: "3 months (extendable)",
    compensation: "Commission-based",
    status: "Open",
  },
];

