import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { OPEN_ROLES } from "@/constants/site";

export const metadata = {
  title: "AI Growth Intern — Origo One",
  description: "Join Origo One as an AI Growth Intern. Remote / Bhubaneswar.",
};

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
  const role = OPEN_ROLES.find((r) => r.slug === params.slug);
  
  if (!role) {
    notFound();
  }

  // Currently we only have the one JD content mapped. 
  // In a full CMS this would be pulled from MDX or Sanity.
  if (role.slug !== "ai-growth-intern") {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-narrative px-5 pt-[140px] md:px-8">
        <Reveal as="span" className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          Careers — {role.location}
        </Reveal>
        <Reveal>
          <h1 className="mt-4 font-display text-[clamp(38px,6.5vw,76px)] font-semibold leading-[1.02] tracking-display text-ink">
            {role.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-[13px] text-mute border-b border-line pb-8">
            <span className="border border-line px-3 py-1.5">{role.type}</span>
            <span className="border border-line px-3 py-1.5">{role.compensation}</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 max-w-none pb-20 text-[18px] leading-relaxed text-mute md:text-[19px]">
            
            <h2 className="mb-4 mt-12 font-display text-2xl font-semibold text-ink">About Origo One</h2>
            <p className="mb-4">
              Origo One is a product engineering studio. We don't sell 'digital transformation'—we sell outcomes. We architect and ship production software for founders and operators who are ready to move.
            </p>
            <p className="mb-4">
              Recent work includes an automated vehicle rental marketplace dominating its niche in Australia, and an AI clinical support tool fundamentally shifting how students study. Small senior team, real clients, no bench.
            </p>

            <h2 className="mb-4 mt-12 font-display text-2xl font-semibold text-ink">Why this role exists</h2>
            <p className="mb-4">
              Our engineering capacity outpaces our pipeline. We need a commercial killer to find the businesses bleeding revenue to broken operations, start those conversations, and drive the deal through discovery and delivery.
            </p>
            <p className="mb-4">
              This is a pure commercial role. You aren't here to push paper; you are here to hunt. Most of your time goes into researching companies and writing to decision-makers who didn't ask to hear from you. If cold outreach reads as a chore rather than a game, close this page.
            </p>

            <h2 className="mb-4 mt-12 font-display text-2xl font-semibold text-ink">Compensation</h2>
            <p className="mb-4"><strong className="text-ink font-semibold">This role is commission-based. There is no fixed stipend. Read this section carefully before applying.</strong></p>
            <ul className="mb-6 list-outside list-disc pl-5 space-y-2">
              <li><strong className="text-ink font-semibold">20% of net project profit</strong> on every client you source and help convert.</li>
              <li><strong className="text-ink font-semibold">Up to 5% additional</strong>, tied to how far you carry the deal — running discovery, shaping the proposal, and supporting delivery through handoff.</li>
            </ul>
            <p className="mb-4">
              <strong className="text-ink font-semibold">Net project profit</strong> = total client invoice, minus direct delivery costs (engineering hours at internal rate, third-party services, payment and platform fees). We share the full calculation with you per deal. No hidden line items.
            </p>
            <p className="mb-4"><strong className="text-ink font-semibold">What that actually means:</strong></p>
            <p className="mb-4">
              A typical build runs $12,000–15,000. One closed deal is highly lucrative. Our engagements are high-conviction and high-value. A strong intern closing two deals in a quarter out-earns most paid tech internships several times over. A weak quarter pays zero.
            </p>
            <p className="mb-4">
              That is the honest trade. High ceiling, real floor risk, and you carry the downside with us. Attribution rules, payout schedule, and the full incentive sheet go to you in writing <strong className="text-ink font-semibold">before</strong> you accept — not after onboarding. We pay on collected revenue, within 15 days of client payment clearing.
            </p>

            <h2 className="mb-4 mt-12 font-display text-2xl font-semibold text-ink">Term and hours</h2>
            <p className="mb-4">
              <strong className="text-ink font-semibold">3 months</strong>, with extension offered on performance. Flexible hours — we care about pipeline quality and conversations booked, not when you're online. Structure your week around your semester.
            </p>
            <p className="mb-4">
              Extension is not automatic and not vague: we'll define your targets in week one, review at month two, and tell you clearly where you stand.
            </p>

            <h2 className="mb-4 mt-12 font-display text-2xl font-semibold text-ink">What you'll own</h2>
            <ul className="mb-6 list-outside list-disc pl-5 space-y-2">
              <li><strong className="text-ink font-semibold">Pipeline.</strong> Build and maintain a list of qualified prospects — founders, agencies, and operators with a problem we can actually solve. You decide who's worth pursuing.</li>
              <li><strong className="text-ink font-semibold">Outreach.</strong> Write and send personalised messages across email and LinkedIn. Relevance beats volume; we'd rather you send 15 sharp emails a week than 200 templates.</li>
              <li><strong className="text-ink font-semibold">Conversations.</strong> Run first calls. Understand what's genuinely broken in their business before anyone proposes anything.</li>
              <li><strong className="text-ink font-semibold">Qualification.</strong> Kill bad-fit leads quickly and tell us why they were bad fits.</li>
              <li><strong className="text-ink font-semibold">Handoff.</strong> Brief the engineering team when a deal converts, and stay looped in through delivery.</li>
              <li><strong className="text-ink font-semibold">Feedback.</strong> Tell us what isn't landing in our positioning, pricing, and messaging. You'll hear objections before we do.</li>
            </ul>

            <h2 className="mb-4 mt-12 font-display text-2xl font-semibold text-ink">What you actually walk away with</h2>
            <p className="mb-4">
              We're not going to tell you this internship will change your life. Here is what it concretely gives you, whether or not you close a deal:
            </p>
            <ul className="mb-6 list-outside list-disc pl-5 space-y-2">
              <li><strong className="text-ink font-semibold">A working knowledge of how B2B software actually gets sold</strong> — the part almost no engineering graduate has, and the part that separates people who build products from people who build businesses.</li>
              <li><strong className="text-ink font-semibold">Real conversations with real decision-makers.</strong> Founders, operations heads, business owners. You will be on calls where money is discussed.</li>
              <li><strong className="text-ink font-semibold">A documented pipeline you built yourself</strong>, which is a portfolio artifact you can show any startup or growth team.</li>
              <li><strong className="text-ink font-semibold">Direct founder access.</strong> Weekly 1:1s. You'll see pricing decisions, proposals, and deal post-mortems, including the ones we lose.</li>
              <li><strong className="text-ink font-semibold">A written reference from a founder</strong> that describes what you specifically did — not a template certificate.</li>
              <li><strong className="text-ink font-semibold">First claim on internal moves.</strong> If you want to shift toward engineering, product, or solutions on a project you sourced, that conversation is open and we've done it before.</li>
            </ul>
            <p className="mb-4">
              You'll also get an outreach playbook, a defined ICP, and case studies to send. You will not be handed a spreadsheet and told to grind.
            </p>

            <h2 className="mb-4 mt-12 font-display text-2xl font-semibold text-ink">The technical track (optional)</h2>
            <p className="mb-4">
              We're hiring engineering students specifically, so this is on the table: sit in on discovery calls, translate business requirements into technical scope, and — if the project fits and you want it — write code on the work you sourced. Real offer, not a dangled maybe. Also genuinely optional; there's plenty of value in staying purely on the growth side.
            </p>

            <h2 className="mb-4 mt-12 font-display text-2xl font-semibold text-ink">Who we're looking for</h2>
            <ul className="mb-6 list-outside list-disc pl-5 space-y-2">
              <li>B.Tech / B.E. students — CS or adjacent, any year</li>
              <li>Can write a clear, specific paragraph in English without an LLM writing it for you</li>
              <li>Comfortable being ignored 80% of the time and following up anyway</li>
              <li>Genuinely curious about how businesses decide to buy software</li>
              <li>Able to take a commission-only structure seriously, with clear eyes</li>
            </ul>
            <p className="mb-4"><em className="italic text-faint">No sales experience required. No AI expertise required.</em></p>

            <h2 className="mb-4 mt-12 font-display text-2xl font-semibold text-ink">Who this isn't for</h2>
            <ul className="mb-6 list-outside list-disc pl-5 space-y-2">
              <li>Anyone who mainly wants a certificate and a LinkedIn line</li>
              <li>Anyone who needs guaranteed monthly income right now — this structure would be unfair to you</li>
              <li>Anyone who needs a script and a lead list handed over before they can start</li>
              <li>Anyone uncomfortable being the youngest person on a call with a 45-year-old business owner</li>
            </ul>

            <div className="my-16 border-t border-line" />

            <h2 className="mb-4 font-display text-3xl font-semibold text-ink">How to apply</h2>
            <p className="mb-6">
              Email <strong className="text-ink font-semibold">hello@oorigone.com</strong> with the subject line <code className="rounded bg-mute/10 px-1.5 py-0.5 font-mono text-[14px] text-ink">AI Growth Intern — [Your Name]</code> and include:
            </p>
            <ol className="mb-6 list-outside list-decimal pl-5 space-y-3">
              <li>Your resume or LinkedIn.</li>
              <li>One company you think should hire Origo One, and why. Two sentences.</li>
              <li>The actual first message you'd send them. Under 120 words.</li>
            </ol>
            <p className="mb-4"><em className="italic text-faint">No cover letter. We read #2 and #3 first.</em></p>

            <div className="mt-12 flex items-center justify-between">
              <MagneticButton href="mailto:hello@oorigone.com?subject=AI%20Growth%20Intern%20%E2%80%94%20[Your%20Name]">
                Apply via Email
              </MagneticButton>
            </div>
            
          </div>
        </Reveal>
      </section>
    </main>
  );
}
