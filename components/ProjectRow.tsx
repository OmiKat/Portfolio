import Link from "next/link";
import type { Project } from "@/lib/projects";
import { TagRow } from "./Tag";
import { MonoLabel } from "./MonoLabel";

// One row in the Selected Work index. The whole title links to the detail page;
// external links (GitHub / live) sit beside it as explicit mono links.
export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: string;
}) {
  return (
    <article className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-6">
      <div className="md:col-span-2">
        <MonoLabel>{index}</MonoLabel>
      </div>

      <div className="md:col-span-10">
        <h3 className="text-title font-semibold tracking-tight">
          <Link href={`/work/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink/80">
          {project.summary}
        </p>

        <div className="mt-5">
          <TagRow items={project.stack} />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-[family-name:var(--font-mono)] text-sm">
          <Link href={`/work/${project.slug}`} className="link">
            Case study →
          </Link>
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
      </div>
    </article>
  );
}
