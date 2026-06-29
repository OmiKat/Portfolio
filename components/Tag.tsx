// Stack tag: plain mono text on a hairline border. No pills, no fills, no shadow.
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-hairline px-2 py-0.5 text-xs font-[family-name:var(--font-mono)] text-muted">
      {children}
    </span>
  );
}

export function TagRow({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
