import Reveal from "@/components/Reveal";

export default function SectionHead({
  no,
  label,
  aside,
}: {
  no: string;
  label: string;
  aside?: string;
}) {
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-accent/70" aria-hidden />
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          ( {no} ) — {label}
        </p>
      </div>
      {aside && (
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{aside}</p>
      )}
    </Reveal>
  );
}
