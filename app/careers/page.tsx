import { OPEN_ROLES } from "@/constants/site";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Careers — Origo One",
  description: "Join Origo One. We build workflow automation systems and ship full-stack AI products.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-page px-5 pt-[140px] md:px-8">
        <Reveal>
          <h1 className="font-display text-[clamp(40px,7vw,88px)] font-semibold leading-[1.02] tracking-display text-ink">
            Careers
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[600px] text-[18px] leading-relaxed text-mute md:text-[20px]">
            Most agencies build prototypes that die in slide decks. We build production systems that generate revenue. We are a tight, aggressive team of engineers and operators. If you want to spend your career making theoretical models, look elsewhere. If you want to ship real products that move the needle for real businesses—and get paid for outcomes—you belong here.
          </p>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              Open Roles
            </h2>
          </Reveal>
          
          <div className="mt-6 border-t border-line">
            {OPEN_ROLES.map((role, idx) => (
              <Reveal key={role.slug} delay={0.1 + idx * 0.05}>
                <Link 
                  href={`/careers/${role.slug}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between border-b border-line py-6 transition-colors hover:bg-mute/5 px-4 -mx-4 rounded-sm"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink group-hover:text-signal transition-colors">
                      {role.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4 font-mono text-[13px] text-mute">
                      <span>{role.location}</span>
                      <span>·</span>
                      <span>{role.type}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-4">
                    <span className="font-mono text-[13px] text-faint">
                      {role.compensation}
                    </span>
                    <div className="hidden md:flex h-8 w-8 items-center justify-center rounded-full border border-line bg-base transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-base">
                      <span className="text-lg leading-none">→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
            
            {OPEN_ROLES.length === 0 && (
              <Reveal delay={0.1}>
                <div className="py-8 text-mute">
                  <p>There are no open roles at this time.</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
