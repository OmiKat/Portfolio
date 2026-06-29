import { MonoLabel } from "./MonoLabel";

// Numbered section header: "01 / Selected Work" with the index in the accent color.
export function SectionHeader({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <MonoLabel className="!text-accent">{index}</MonoLabel>
      <h2 className="text-sm font-medium tracking-wide uppercase font-[family-name:var(--font-mono)] text-ink">
        {title}
      </h2>
    </div>
  );
}
