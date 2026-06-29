import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Rule } from "@/components/Rule";
import { MonoLabel } from "@/components/MonoLabel";
import { TagRow } from "@/components/Tag";
import { projects, getProject } from "@/lib/projects";

// Pre-render one static page per project.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="flex-1">
      <Container>
        {/* Back link */}
        <div className="pt-12">
          <Link href="/" className="link font-[family-name:var(--font-mono)] text-sm">
            ← Index
          </Link>
        </div>

        {/* Header */}
        <header className="pt-10 pb-10">
          <MonoLabel>
            {project.role} · {project.year}
          </MonoLabel>
          <h1 className="mt-4 text-title font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink/80">
            {project.summary}
          </p>

          <div className="mt-6">
            <TagRow items={project.stack} />
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-[family-name:var(--font-mono)] text-sm">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                GitHub
              </a>
            )}
            {project.links.site && (
              <a
                href={project.links.site}
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                Live site
              </a>
            )}
          </div>
        </header>

        <Rule />

        {/* Problem */}
        <section className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <MonoLabel>Problem</MonoLabel>
          </div>
          <p className="md:col-span-9 max-w-2xl text-lg leading-relaxed">
            {project.problem}
          </p>
        </section>

        <Rule />

        {/* Architecture — ASCII data-flow in a monospace block */}
        <section className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <MonoLabel>Architecture</MonoLabel>
          </div>
          <div className="md:col-span-9">
            <pre className="overflow-x-auto border border-hairline bg-paper p-5 text-xs leading-relaxed text-ink/90 sm:text-sm">
              <code className="font-[family-name:var(--font-mono)]">
                {project.architecture}
              </code>
            </pre>
          </div>
        </section>

        <Rule />

        {/* Key decisions */}
        <section className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <MonoLabel>Key decisions</MonoLabel>
          </div>
          <ol className="md:col-span-9 max-w-2xl space-y-6">
            {project.decisions.map((d, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 font-[family-name:var(--font-mono)] text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <Rule />

        <div className="py-12">
          <Link href="/" className="link font-[family-name:var(--font-mono)] text-sm">
            ← Back to index
          </Link>
        </div>
      </Container>
    </main>
  );
}
