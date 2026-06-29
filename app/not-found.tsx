import Link from "next/link";
import { Container } from "@/components/Container";
import { MonoLabel } from "@/components/MonoLabel";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center">
      <Container>
        <div className="py-32">
          <MonoLabel>404</MonoLabel>
          <h1 className="mt-4 text-title font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="mt-4 max-w-md text-lg text-ink/80">
            That page doesn&rsquo;t exist — it may have moved or never been here.
          </p>
          <Link
            href="/"
            className="link mt-6 inline-block font-[family-name:var(--font-mono)] text-sm"
          >
            ← Back to index
          </Link>
        </div>
      </Container>
    </main>
  );
}
