// Small mono metadata label (uppercase, tracked). The recurring "engineer editorial" cue.
export function MonoLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`label ${className}`}>{children}</span>;
}
