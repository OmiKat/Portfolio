import { Container } from "@/components/Container";
import { Rule } from "@/components/Rule";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectRow } from "@/components/ProjectRow";
import { MonoLabel } from "@/components/MonoLabel";
import { projects } from "@/lib/projects";
import { profile, skills, education, achievements } from "@/lib/profile";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Masthead */}
      <Container>
        <header className="pt-16 pb-10 sm:pt-24">
          <MonoLabel>
            {profile.role} · {profile.location}
          </MonoLabel>
          <h1 className="mt-4 text-display font-semibold">{profile.name}</h1>

          <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-[family-name:var(--font-mono)] text-sm">
            <a href={`mailto:${profile.email}`} className="link">
              {profile.email}
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="link"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="link"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noreferrer noopener"
              className="link"
            >
              LeetCode
            </a>
          </nav>
        </header>
      </Container>

      <Rule />

      {/* Intro */}
      <Container>
        <section className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12">
          <div className="md:col-span-2">
            <MonoLabel>About</MonoLabel>
          </div>
          <div className="md:col-span-10 max-w-2xl space-y-4 text-xl leading-relaxed">
            {profile.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>
      </Container>

      <Rule />

      {/* 01 — Selected Work */}
      <Container>
        <section className="pt-12">
          <SectionHeader index="01" title="Selected Work" />
          <div className="mt-6 divide-y divide-hairline">
            {projects.map((project, i) => (
              <ProjectRow
                key={project.slug}
                project={project}
                index={String(i + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </section>
      </Container>

      <Rule />

      {/* 02 — Stack */}
      <Container>
        <section className="py-12">
          <SectionHeader index="02" title="Stack" />
          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <div key={group.group}>
                <dt className="label mb-3">{group.group}</dt>
                <dd>
                  <ul className="space-y-1.5 text-lg">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </Container>

      <Rule />

      {/* 03 — Background */}
      <Container>
        <section className="py-12">
          <SectionHeader index="03" title="Background" />

          <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="label mb-5">Education</h3>
              <ul className="space-y-6">
                {education.map((e) => (
                  <li key={e.school}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-semibold">{e.school}</p>
                      <span className="shrink-0 font-[family-name:var(--font-mono)] text-sm text-muted">
                        {e.period}
                      </span>
                    </div>
                    <p className="mt-1 text-ink/80">{e.detail}</p>
                    <p className="text-sm text-muted">{e.place}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label mb-5">Achievements</h3>
              <ul className="space-y-6">
                {achievements.map((a) => (
                  <li key={a.title}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-semibold">{a.title}</p>
                      <span className="shrink-0 font-[family-name:var(--font-mono)] text-sm text-muted">
                        {a.period}
                      </span>
                    </div>
                    <p className="mt-1 text-ink/80">{a.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Container>

      <Rule />

      {/* Footer */}
      <Container>
        <footer className="flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-title font-semibold tracking-tight">Get in touch</p>
            <a
              href={`mailto:${profile.email}`}
              className="link mt-2 inline-block font-[family-name:var(--font-mono)]"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex flex-col gap-2 font-[family-name:var(--font-mono)] text-sm sm:items-end">
            <a href={profile.resumeHref} className="link">
              Download résumé (PDF)
            </a>
            <span className="text-muted">
              {profile.name} · 2026
            </span>
          </div>
        </footer>
      </Container>
    </main>
  );
}
