// A 1px hairline. This is the only "divider" device on the site — no cards, no shadows.
export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-hairline ${className}`} />;
}
