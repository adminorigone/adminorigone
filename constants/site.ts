// ─────────────────────────────────────────────────────────────
// Brand source of truth — Origo One
// Origo (Latin): origin, source, first cause.
// One: singular focus. First principles. One operating layer.
// Positioning: AI consultancy that redesigns operations.
// Market: US · Europe · Australia · Middle East
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Origo One",
  shortName: "Origo",
  legalName: "Origo One",
  tagline: "We redesign operations with AI — before competitors do.",
  description:
    "Origo One is an AI-native consultancy for executives who need operational advantage. We redesign workflows, build intelligent systems, and ship production outcomes — with enterprise thinking and startup speed.",
  email: "hello@origo.one",
  domain: "origo.one",
  linkedin: "https://linkedin.com/company/origo-one",
  calLink: "https://cal.com/origo-one/strategy",
  abn: "ABN 00 000 000 000",
  location: "Global · HQ Bengaluru",
  markets: ["United States", "Europe", "Australia", "Middle East"],
};

export const NAV = [
  { label: "Approach", href: "/process" },
  { label: "Transformations", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export const HERO = {
  brand: "Origo One",
  headline: "Redesign the business before the market does.",
  subline:
    "We help companies rebuild operations with AI — not as a feature, as infrastructure. Enterprise thinking. Startup execution.",
  primaryCta: { label: "Talk to an AI architect", href: "/discovery" },
  secondaryCta: { label: "See what's possible", href: "/services" },
};

/** Cinematic narrative chapters on the homepage */
export const CHAPTERS = [
  {
    id: "shift",
    no: "01",
    label: "The shift",
    headline: "AI stopped being a project.\nIt became the operating layer.",
    body: "Most companies still treat AI as a pilot, a chatbot, or a slide. Meanwhile, the ones pulling ahead are rewriting how work moves — decisions, support, knowledge, fulfillment — into systems that compound.",
    psychology: "Recognition + future anxiety",
  },
  {
    id: "infrastructure",
    no: "02",
    label: "Infrastructure",
    headline: "Buying tools is not a strategy.",
    body: "Licenses don't redesign a business. Workflows do. The advantage belongs to teams who collapse manual loops into intelligent operations — and own the architecture.",
    psychology: "Clarity over hype",
  },
  {
    id: "entrance",
    no: "03",
    label: "Where we come in",
    headline: "We redesign how your company works.",
    body: "Origo One is an AI-native consultancy for founders and executives. We map the real constraints, design the operating system, and ship production systems — not decks that expire.",
    psychology: "Trust + positioning",
  },
];

export const METRICS = [
  { value: 1000, suffix: "+", label: "users on platforms we've put in production" },
  { value: 2, prefix: "#", suffix: " / 300+", label: "HackNation 2026 — global ranking" },
  { value: 6, prefix: "4–", suffix: " wks", label: "typical path from decision to live system" },
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
    slug: "intelligent-operations",
    tag: "01",
    from: "Manual Operations",
    to: "Intelligent Operations",
    summary:
      "Replace fragile handoffs and spreadsheets with systems that route, decide, and escalate with judgment.",
    problem:
      "Growth outpaces process. Work lives in inboxes, Slack, and tribal knowledge — until something breaks.",
    approach:
      "We map critical workflows, identify decision points machines can own, and ship an operating layer your team still controls.",
    ideal: "Operators and COOs with clear volume pain and measurable cycle times.",
    timeline: "4–8 weeks",
    deliverables: [
      "Workflow audit & opportunity map",
      "Production automation architecture",
      "Human-in-the-loop controls",
      "Observability & escalation paths",
      "Handover your team can maintain",
    ],
    package: "Outcome partnership",
  },
  {
    slug: "ai-customer-teams",
    tag: "02",
    from: "Customer Support",
    to: "AI Customer Teams",
    summary:
      "Turn support from a cost center into a always-on team that resolves, qualifies, and learns.",
    problem:
      "Tickets pile up. Response quality varies by shift. Knowledge is trapped in PDFs and veteran agents.",
    approach:
      "Grounded assistants, routing logic, and escalation that protects brand — measured against resolution, not vanity chat volume.",
    ideal: "Customer-led companies with high inquiry volume and documented product knowledge.",
    timeline: "3–6 weeks",
    deliverables: [
      "Knowledge architecture & RAG pipeline",
      "Resolution + escalation playbooks",
      "Channel integrations (web, email, chat)",
      "Eval suite before launch",
      "Admin console for continuous improvement",
    ],
    package: "Production system",
  },
  {
    slug: "decision-systems",
    tag: "03",
    from: "Dashboards",
    to: "Decision Systems",
    summary:
      "Stop staring at charts. Build systems that surface the decision, the why, and the next action.",
    problem:
      "Dashboards create awareness without action. Leaders still ask the same questions every Monday.",
    approach:
      "We encode decision logic into the product — alerts, recommendations, and workflows tied to business outcomes.",
    ideal: "Product and ops leaders drowning in metrics without a clear operating cadence.",
    timeline: "4–7 weeks",
    deliverables: [
      "Decision taxonomy & priority model",
      "Signal pipeline from your data",
      "Actionable interfaces (not more charts)",
      "Feedback loops for model quality",
      "Security & access aligned to roles",
    ],
    package: "Decision layer",
  },
  {
    slug: "company-intelligence",
    tag: "04",
    from: "Internal Knowledge",
    to: "Company Intelligence",
    summary:
      "Make institutional knowledge searchable, trustworthy, and usable at the moment of work.",
    problem:
      "New hires take months to ramp. Experts answer the same questions. Docs drift from reality.",
    approach:
      "We build a governed intelligence layer over your systems of record — with permissions, citations, and auditability.",
    ideal: "Knowledge-dense organizations where expertise is the bottleneck.",
    timeline: "3–6 weeks",
    deliverables: [
      "Source inventory & permission model",
      "Retrieval architecture with citations",
      "Role-aware interfaces",
      "Freshness & quality monitoring",
      "Security review documentation",
    ],
    package: "Intelligence layer",
  },
  {
    slug: "autonomous-workflows",
    tag: "05",
    from: "Documents",
    to: "Autonomous Workflows",
    summary:
      "Collapse document-heavy processes — intake, review, approval — into reliable agentic flows.",
    problem:
      "PDF pipelines, email chains, and copy-paste between tools burn weeks of calendar time.",
    approach:
      "Structured extraction, validation gates, and automation that respects compliance boundaries.",
    ideal: "Ops, legal-adjacent, and finance teams with repetitive document volume.",
    timeline: "4–8 weeks",
    deliverables: [
      "Process redesign & control points",
      "Extraction + validation pipeline",
      "Approval UX with audit trail",
      "Integration into existing tools",
      "SLA and exception handling",
    ],
    package: "Workflow system",
  },
  {
    slug: "ai-products",
    tag: "06",
    from: "SaaS",
    to: "AI Products",
    summary:
      "Ship AI-native product surfaces — marketplaces, booking systems, copilots — that create new revenue.",
    problem:
      "The market expects intelligence. Static SaaS feels unfinished. Competitors ship AI weekly.",
    approach:
      "We productize AI where it earns retention and revenue — with production quality, not demos.",
    ideal: "Founders and product leaders ready to ship a real AI surface in weeks, not quarters.",
    timeline: "4–6 weeks",
    deliverables: [
      "Scoped product MVP with fixed quote",
      "AI features measured by evals",
      "Payments, auth, and infra you own",
      "Weekly demos on staging",
      "Full IP transfer on launch",
    ],
    package: "from Discovery Sprint",
  },
];

/** Keep SERVICES alias for any lingering imports — maps to transformations */
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
    title: "Strategy session",
    body: "A focused conversation with an AI architect. We diagnose the real constraint — not the requested feature — and tell you honestly if we're the right partner.",
  },
  {
    step: "02",
    title: "Discovery Sprint",
    body: "A paid one-week engagement. Opportunity map, architecture options, ROI framing, and a fixed-scope proposal. The fee credits toward production.",
  },
  {
    step: "03",
    title: "Build in the open",
    body: "Weekly live demos on staging. Daily written updates. You see the system form — not a black box delivered at the end.",
  },
  {
    step: "04",
    title: "Production + ownership",
    body: "We launch, transfer full IP, document the system, and stay for a stabilization window. The operating layer is yours.",
  },
];

export const PACKAGES = [
  {
    name: "Discovery Sprint",
    price: "Fixed fee",
    detail: "One week. Opportunity map, architecture, ROI narrative, fixed production quote. Credited to build.",
    filter: "For leaders who need clarity before commitment.",
  },
  {
    name: "AI Opportunity Audit",
    price: "Fixed fee",
    detail: "Deep operational scan across workflows. Prioritized roadmap with estimated impact and sequencing.",
    filter: "For executives aligning board-level AI bets.",
  },
  {
    name: "Prototype",
    price: "Fixed scope",
    detail: "A production-shaped proof — real data paths, real UX — designed to decide go/no-go fast.",
    filter: "For teams validating a high-stakes bet.",
  },
  {
    name: "Production",
    price: "Outcome package",
    detail: "Ship the operating system. Fixed quote, ship date, weekly demos, IP transfer.",
    filter: "For companies ready to redesign a workflow end-to-end.",
  },
  {
    name: "Enterprise Partnership",
    price: "Retainer",
    detail: "Ongoing architecture, delivery, and AI product counsel — senior team, continuous roadmap.",
    filter: "For organizations treating AI as infrastructure.",
  },
];

export const FAQS = [
  {
    q: "Are you an outsourcing shop?",
    a: "No. We are an AI consultancy. We redesign operations and ship the systems that make that redesign real. Clients hire us for judgment and outcomes — not seat-filling.",
  },
  {
    q: "How do you work across time zones?",
    a: "We align to your working hours. Overlap windows for US, EU, AU, and Middle East clients; written updates every working day so progress never waits on a meeting.",
  },
  {
    q: "How does pricing work?",
    a: "Outcomes, not hours. Discovery and production are fixed-scope packages with a clear ship date. If scope expands, we quote the addition — no surprise invoices.",
  },
  {
    q: "Who owns the IP?",
    a: "You do. On final payment: repo, infrastructure access, design files, and documentation. We keep nothing and license nothing back.",
  },
  {
    q: "What makes you different from a Big Four digital arm?",
    a: "Same seriousness about business outcomes. None of the theater. Senior people on the work, AI-native from day one, and systems that ship in weeks — not decks that age in a SharePoint folder.",
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
  external?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "hirecar-marketplace",
    name: "HireCarMarketplace",
    url: "https://hirecarmarketplace.com.au",
    tag: "Marketplace · Operations",
    summary:
      "From phone quotes and spreadsheets → a two-sided marketplace with instant booking and payments for Australian operators.",
    result: "~1,000 registered users · live",
    featured: true,
  },
  {
    slug: "webpersona",
    name: "WebPersona",
    tag: "Decision Systems · Personalization",
    summary:
      "From static sites → real-time AI personalization that rewrites the page per visitor — built under extreme time pressure.",
    result: "Global #2 of 300+ teams",
    external: true,
  },
  {
    slug: "medsage",
    name: "MedSage AI",
    tag: "Company Intelligence · Education",
    summary:
      "From passive study materials → an LLM platform that grades recall and drives spaced repetition for medical students.",
    result: "50+ beta users",
    external: true,
  },
];

export const HIRECAR_CASE = {
  title: "HireCarMarketplace",
  url: "hirecarmarketplace.com.au",
  chapter: "From manual hire ops → intelligent marketplace",
  intro:
    "Independent Australian car-hire operators lived on phone calls and spreadsheets. We redesigned the operating model into a two-sided marketplace — listing, booking, payment, and trust — now live with ~1,000 registered users.",
  context:
    "Small operators couldn't absorb aggregator commissions. Renters compared prices across a dozen tabs. Every slow quote was a lost booking.",
  constraints: [
    "Operators needed to list a vehicle in under 10 minutes",
    "Payments had to clear upfront with deposits and refunds",
    "Trust signals had to feel premium without enterprise budgets",
    "Ship to production fast enough to prove the model",
  ],
  thinking:
    "This wasn't a website problem. It was an operations problem: quote latency, inventory visibility, and payment friction. The product had to collapse that loop.",
  architecture:
    "Next.js + Supabase for realtime availability, Stripe for payments, OAuth for identity, AI-assisted listing creation to remove operator friction.",
  execution:
    "Fixed scope, weekly demos, production deployment on infrastructure the client owns. No black-box handoff.",
  results: [
    { value: "~1,000", label: "registered users" },
    { value: "3 taps", label: "search → confirmed booking" },
    { value: "Live", label: "production marketplace" },
  ],
  stack: ["Next.js", "Supabase", "Stripe", "OAuth", "Tailwind", "Vercel"],
  lessons:
    "When the constraint is operational latency, AI belongs in listing and enquiry — not as decoration. The marketplace is the workflow redesign.",
  testimonial: {
    quote:
      "[Client testimonial — 2–3 sentences on booking volume and working with the team.]",
    name: "[Client name]",
    role: "Founder, HireCarMarketplace",
  },
};

export const ABOUT = {
  heading: "Enterprise thinking.\nStartup execution.",
  body: "Origo One is an AI-native consultancy headquartered in India, built for decision-makers in the US, Europe, Australia, and the Middle East. We start at the origin of the constraint — not the feature request — and ship the operating layer that follows. We are not an outsourcing bench. We are the team you bring in when AI is infrastructure, and the answer has to ship.",
  philosophy: [
    {
      title: "Outcomes over headcount",
      body: "We sell redesigned operations and production systems — never developer-months as a product.",
    },
    {
      title: "Judgment before models",
      body: "The hard part is knowing which workflows deserve intelligence. Models are the easy part.",
    },
    {
      title: "Transparent by default",
      body: "Weekly demos, daily writing, architecture you can read. Prestige without opacity.",
    },
    {
      title: "AI-native from day one",
      body: "We never learned software without models in the loop. That changes how we design systems.",
    },
  ],
};

export const TEAM = [
  { name: "Anand", role: "Founder · AI Architect", photo: null },
  { name: "[Name]", role: "Product Engineering", photo: null },
  { name: "[Name]", role: "Applied AI", photo: null },
  { name: "[Name]", role: "Systems Design", photo: null },
];

export const FINAL_CTA = {
  heading: "Let's redesign your business.",
  body: "If you're evaluating AI as infrastructure — not a pilot — start with a strategy session. If we're not the right partner, we'll say so.",
  cta: { label: "Talk to an AI architect", href: "/discovery" },
};

export const DISCOVERY = {
  heading: "Strategy session",
  subline:
    "Forty focused minutes with an AI architect. Bring a workflow that hurts. Leave with clarity on what's worth building — and what isn't.",
  points: [
    "We diagnose the constraint, not the requested feature",
    "Honest fit check — we decline misaligned work",
    "If there's a path, you'll see the shape of a Discovery Sprint",
    "No pitch deck theater",
  ],
};
