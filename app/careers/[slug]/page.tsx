import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { OPEN_ROLES } from "@/constants/site";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";
import Prose from "@/components/Prose";

export async function generateStaticParams() {
  return OPEN_ROLES.map((role) => ({
    slug: role.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const role = OPEN_ROLES.find((r) => r.slug === params.slug);
  if (!role) return { title: "Not Found" };
  
  return {
    title: `${role.title} — Origo One`,
    description: `Join Origo One as a ${role.title}. ${role.location}.`,
  };
}

export default async function CareerDetailPage({ params }: { params: { slug: string } }) {
  const role = OPEN_ROLES.find((r) => r.slug === params.slug);
  
  if (!role) {
    notFound();
  }

  let mdxSource = "";
  try {
    const filePath = path.join(process.cwd(), "content", "careers", `${params.slug}.mdx`);
    mdxSource = await fs.readFile(filePath, "utf-8");
  } catch (err) {
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
          <Prose className="mt-12 max-w-none pb-20">
            <MDXRemote source={mdxSource} />
          </Prose>
        </Reveal>
      </section>
    </main>
  );
}
