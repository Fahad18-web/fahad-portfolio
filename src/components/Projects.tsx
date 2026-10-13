import { projects } from "@/data/projects";
import { ExternalLinkIcon, GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-medium text-[#2DD4BF] mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
            Selected work
          </h2>
          <div className="accent-line mt-4" />
          <p className="mt-4 max-w-2xl text-[#A3A3A3]">
            Real projects from my GitHub — focused on useful functionality, clean
            UI, and practical full-stack skills.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="grid md:grid-cols-12 gap-8 md:gap-10 items-start"
            >
              {/* Visual preview placeholder */}
              <div
                className={`md:col-span-5 order-1 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div
                  className="relative aspect-[4/3] rounded-2xl border border-[#222] overflow-hidden card-lift"
                  style={{
                    background: `linear-gradient(145deg, #141414 0%, #0d0d0d 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 30% 40%, ${p.accent}40, transparent 60%)`,
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <span
                      className="text-4xl font-semibold tracking-tight mb-2"
                      style={{ color: p.accent }}
                    >
                      {p.title.charAt(0)}
                    </span>
                    <span className="text-sm text-[#A3A3A3]">{p.title}</span>
                    <span className="mt-3 text-xs text-[#737373] max-w-[200px]">
                      {p.tagline}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div
                className={`md:col-span-7 order-2 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-2xl font-semibold text-[#F5F5F5]">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-[#2DD4BF]">{p.tagline}</p>
                <p className="mt-4 text-[#A3A3A3] leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#737373] mb-2">
                    Problem
                  </p>
                  <p className="text-sm text-[#A3A3A3]">{p.problem}</p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#737373] mb-2">
                    Key features
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-1.5">
                    {p.features.slice(0, 6).map((f) => (
                      <li
                        key={f}
                        className="text-sm text-[#A3A3A3] flex gap-2"
                      >
                        <span className="text-[#2DD4BF] shrink-0">·</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[#222] bg-[#141414] px-2.5 py-1 text-xs text-[#A3A3A3]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-[#737373]">
                  <span className="text-[#A3A3A3]">My role:</span>{" "}
                  {p.contribution}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#333] px-4 py-2 text-sm text-[#F5F5F5] hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors"
                  >
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 px-4 py-2 text-sm text-[#2DD4BF] hover:bg-[#2DD4BF]/20 transition-colors"
                    >
                      <ExternalLinkIcon size={14} />
                      Live Demo
                    </a>
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
