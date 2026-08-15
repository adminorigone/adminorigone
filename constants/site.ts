// ─────────────────────────────────────────────────────────────
// Brand source of truth — Origo One
// Positioning: Enterprise AI Product Agency.
// Core Pillars: Workflow Automation | Tech Audits | AI Product Engineering
// Market: United States · Europe · Australia · Middle East (Dubai, UAE)
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Origo One",
  shortName: "Origo",
  legalName: "Origo One",
  tagline: "We turn AI concepts into production reality for Tier-1 enterprises globally.",
  description:
    "Origo One is an elite AI product agency and consulting firm. We untangle technical debt, automate high-value workflows, and engineer production-grade AI applications for ambitious enterprises globally.",
  email: "hello@oorigone.com",
  domain: "oorigone.com",
  linkedin: "https://linkedin.com/company/origo-one",
  calLink: "https://cal.com/origo-one/strategy",
  abn: "ABN 00 000 000 000",
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
  headline: "Stop piloting AI. Start shipping products.",
  subline:
    "We are an Enterprise AI Product Agency. We untangle technical debt, collapse manual workflows, and turn raw ideas into secure, production-ready AI software for global enterprises.",
  primaryCta: { label: "Talk to an AI architect", href: "/discovery" },
  secondaryCta: { label: "See what's possible", scene: "poss" },
};

export const HOME_SECTIONS = [
  { id: "hero", no: "00", label: "Origin" },
  { id: "proof", no: "01", label: "Signal" },
  { id: "shift", no: "02", label: "Workflow Automation" },
  { id: "poss", no: "03", label: "Possibility" },
  { id: "infrastructure", no: "04", label: "Tech Audits" },
  { id: "entrance", no: "05", label: "Idea to Reality" },
  { id: "cap", no: "06", label: "Capabilities" },
  { id: "machine", no: "07", label: "How we build" },
  { id: "work", no: "08", label: "Shipped" },
  { id: "cta", no: "09", label: "Partnership" },
  { id: "clarity", no: "10", label: "Clarity" },
  { id: "ship", no: "11", label: "Studio" },
] as const;

export type HomeSectionId = (typeof HOME_SECTIONS)[number]["id"];

export function homeSection(id: HomeSectionId) {
  return HOME_SECTIONS.find((s) => s.id === id)!;
}

export const CHAPTERS = [
  {
    id: "shift",
    headline: "Manual workflows are a tax on your growth.",
    body: "Businesses are drowning in manual tasks and invisible bottlenecks. Growth outpaces process, and operations become fragile. We run a deep discovery audit, locate your exact pain points, and deploy AI-native automation to collapse those workflows.",
    psychology: "Recognition + urgency",
  },
  {
    id: "infrastructure",
    headline: "Your infrastructure shouldn't be a liability.",
    body: "Scaling companies hit architectural ceilings and security vulnerabilities. When the tech stack gets messy, velocity drops. We are AI-native and security-first. We audit your architecture, untangle the mess, and secure your systems for global scale.",
    psychology: "Security + clarity",
  },
  {
    id: "entrance",
    headline: "You have the idea. We ship the product.",
    body: "Founders and enterprises have breakthrough AI ideas but lack the elite execution required to build them. That is where we step in. You bring the vision. We architect the solution, engineer the application, and ship it to production.",
    psychology: "Trust + positioning",
  },
];

export const METRICS = [
  { value: 1000, suffix: "+", label: "users on platforms we've put in production" },
  { value: 3, prefix: "", suffix: " Pillars", label: "Workflow Automation, Tech Audits, AI Products" },
  { value: 6, from: 4, prefix: "4–", suffix: " wks", label: "typical path from idea to live system" },
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
    to: "Autonomous Workflows",
    summary:
      "Replace fragile handoffs and spreadsheets with systems that route, decide, and escalate with judgment.",
    problem:
      "Your team is drowning in repetitive tasks. Work lives in inboxes and tribal knowledge, creating massive operational bottlenecks.",
    approach:
      "We run a discovery call to map your critical workflows, identify the exact pain points, and ship an AI-native automation layer your team controls.",
    ideal: "Operators and COOs with clear volume pain and measurable cycle times.",
    timeline: "4–8 weeks",
    deliverables: [
      "Workflow audit & opportunity map",
      "Production automation architecture",
      "Human-in-the-loop controls",
      "Observability & escalation paths",
    ],
    package: "Outcome partnership",
  },
  {
    slug: "tech-audits",
    tag: "02",
    from: "Fragile Infrastructure",
    to: "Secure Architecture",
    summary:
      "Audit your tech stack, untangle the mess, and secure your systems for enterprise scale.",
    problem:
      "Scaling has resulted in technical debt. Systems are fragile, security is an afterthought, and new features take months to ship.",
    approach:
      "We are AI-native and security-first. We dive deep into your codebase, identify critical vulnerabilities, and architect a scalable, secure foundation.",
    ideal: "CTOs and technical founders hitting a growth ceiling due to tech debt.",
    timeline: "2–4 weeks",
    deliverables: [
      "Comprehensive codebase & security audit",
      "Architecture untangling roadmap",
      "AI-native security protocols",
      "Performance optimization report",
    ],
    package: "Audit sprint",
  },
  {
    slug: "idea-to-reality",
    tag: "03",
    from: "Raw Concept",
    to: "Production Application",
    summary:
      "Ship AI-native product surfaces that create new revenue. You bring the idea, we build the reality.",
    problem:
      "The market expects intelligence. You have a vision for a disruptive AI product, but lack the elite engineering team to build it fast and securely.",
    approach:
      "We productize AI where it earns retention and revenue. From concept mapping to frontend execution and backend infrastructure, we ship it.",
    ideal: "Founders and product leaders ready to ship a real AI surface in weeks, not quarters.",
    timeline: "4–8 weeks",
    deliverables: [
      "Scoped product MVP with fixed quote",
      "Custom AI model integration",
      "Payments, auth, and infra you own",
      "Full IP transfer on launch",
    ],
    package: "Production system",
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
    body: "We launch, transfer full IP, document the system, and stay for a stabilization window. The product is yours.",
  },
];

export const PACKAGES = [
  {
    name: "Discovery & Audit",
    price: "Fixed fee",
    detail: "Deep operational scan across workflows or codebase. Prioritized roadmap with estimated impact and sequencing.",
    filter: "For leaders who need clarity before commitment.",
  },
  {
    name: "Workflow Prototype",
    price: "Fixed scope",
    detail: "A production-shaped proof of an automated workflow — real data paths, real UX — designed to decide go/no-go fast.",
    filter: "For teams validating a high-stakes automation bet.",
  },
  {
    name: "Production App Build",
    price: "Outcome package",
    detail: "Ship the AI application. Fixed quote, ship date, weekly demos, IP transfer. From idea to reality.",
    filter: "For founders ready to ship a new product.",
  },
];

export const FAQS = [
  {
    q: "Are you an outsourcing shop?",
    a: "No. We are a global AI Product Agency. We redesign operations and ship the systems that make that redesign real. Clients hire us for judgment and outcomes — not seat-filling.",
  },
  {
    q: "Where are you based?",
    a: "We are an international agency with our core presence in Sydney, Australia. We operate globally.",
  },
  {
    q: "How does pricing work?",
    a: "Outcomes, not hours. Discovery and production are fixed-scope packages with a clear ship date. If scope expands, we quote the addition — no surprise invoices.",
  },
  {
    q: "Who owns the IP?",
    a: "You do. On final payment: repo, infrastructure access, design files, and documentation. We keep nothing and license nothing back.",
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
      "From phone quotes and spreadsheets → a two-sided marketplace with instant booking and payments for Australian operators.",
    result: "~1,000 registered users · live",
    featured: true,
    hasStory: true,
  },
  {
    slug: "medsage",
    name: "MedSage AI",
    tag: "Company Intelligence · Education",
    summary:
      "From passive study materials → an LLM platform that grades recall and drives spaced repetition for medical students.",
    result: "50+ beta users",
  },
];

export const HIRECAR_CASE = {
  title: "HireCarMarketplace",
  url: "hirecarmarketplace.com.au",
  chapter: "From manual ops → intelligent marketplace",
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
    pending: true,
    quote: "",
    name: "",
    role: "Founder, HireCarMarketplace",
  },
};

export const ABOUT = {
  heading: "Enterprise thinking.\nStartup execution.",
  body: "Origo One is an elite, international AI product agency based in Sydney. We start at the origin of the constraint — not the feature request — and ship the operating layer that follows. We are not an outsourcing bench. We are the team you bring in when you have an idea, and the answer has to ship securely and flawlessly.",
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
      title: "Security first",
      body: "Scaling companies can't afford fragile tech debt. We audit, secure, and build with AI-native architecture.",
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
  heading: "We build for those who refuse to move slowly.",
  body: "We don't take every project. If you're evaluating AI as infrastructure—not a pilot—we should talk. Bring a workflow that hurts or a vision you need to ship.",
  cta: { label: "Apply for a partnership", href: "/discovery" },
};

export const DISCOVERY = {
  heading: "Strategy session",
  subline:
    "Forty focused minutes with an AI architect. Bring a workflow that hurts or an idea you want to build. Leave with clarity.",
  points: [
    "We diagnose the constraint or map out the product vision",
    "Honest fit check — we decline misaligned work",
    "If there's a path, you'll see the shape of a Discovery Sprint",
    "No pitch deck theater",
  ],
};
