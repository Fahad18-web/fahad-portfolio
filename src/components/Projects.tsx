import { projects } from "@/data/projects";
import { ExternalLinkIcon, GithubIcon, CheckIcon } from "./Icons";
import BrowserFrame from "./BrowserFrame";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 md:mb-16">
          <p className="mb-2 text-sm font-medium t-accent">Projects</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight t-text">
            Selected work
          </h2>
          <div className="accent-line mt-4" />
          <p className="mt-4 max-w-2xl t-muted">
            Real GitHub projects — useful functionality, clean UI, practical full-stack skills.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="grid items-start gap-8 md:grid-cols-12 md:gap-10"
            >
              <div
                className={`order-1 md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <BrowserFrame
                  url={p.mockUrl}
                  accent={p.accent}
                  title={p.title}
                  tagline={p.tagline}
                  image={p.image}
                />
              </div>

              <div
                className={`order-2 md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="mb-2 inline-flex rounded-full border border-theme bg-card px-2.5 py-0.5 text-xs t-dim">
                  Role: {p.role}
                </div>
                <h3 className="text-2xl font-semibold t-text">{p.title}</h3>
                <p className="mt-1 text-sm t-accent">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed t-muted">{p.summary}</p>

                <div className="mt-4 rounded-xl border border-theme bg-card p-3.5">
                  <p className="text-xs font-medium uppercase tracking-wider t-dim">
                    Problem
                  </p>
                  <p className="mt-1 text-sm t-muted">{p.problem}</p>
                </div>

                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm t-muted">
                      <CheckIcon
                        size={16}
                        className="mt-0.5 shrink-0 t-accent"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-theme bg-card px-2.5 py-1 text-xs t-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-theme px-4 py-2 text-sm t-text transition-colors hover:border-[var(--accent)] hover:t-accent"
                  >
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm t-accent transition-opacity hover:opacity-80"
                      style={{
                        borderColor: "var(--accent)",
                        background: "var(--accent-soft)",
                      }}
                    >
                      <ExternalLinkIcon size={14} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-theme px-4 py-2 text-xs t-dim">
                      Live demo coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}