import Reveal from "@/components/Reveal";

export default function SectionHead({
  no,
  label,
  aside,
  as = "p",
}: {
  no: string;
  label: string;
  aside?: string;
  /**
   * Render the label as a real heading when this eyebrow *is* the section's
   * heading. Sections that follow it with their own <h2> should keep the
   * default "p" so the outline doesn't gain a duplicate sibling heading.
   */
  as?: "p" | "h2";
}) {
  const Label = as;
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-accent/70" aria-hidden />
        <Label className="font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-faint">
          ( {no} ) — {label}
        </Label>
      </div>
      {aside && (
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{aside}</p>
      )}
    </Reveal>
  );
}
