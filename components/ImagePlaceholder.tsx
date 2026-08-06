/** Striped placeholder for images not yet supplied (screenshots, team photos). */
export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`placeholder-stripes flex items-center justify-center border-b border-line ${className}`}
    >
      <span className="px-4 text-center font-mono text-[11px] text-faint">[ {label} ]</span>
    </div>
  );
}
