// Page gutter + max width. Wide margins, content sits on a consistent measure.
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-12">
      {children}
    </div>
  );
}
