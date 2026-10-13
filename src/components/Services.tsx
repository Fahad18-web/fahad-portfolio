import { services } from "@/data/projects";
import { LayoutIcon, WrenchIcon, LayersIcon, CodeIcon, ArrowRightIcon } from "./Icons";

const icons = [LayoutIcon, WrenchIcon, LayersIcon, CodeIcon];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-bg-soft">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-medium text-accent mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text">
            How I can help
          </h2>
          <div className="accent-line mt-4" />
          <p className="mt-4 max-w-2xl text-text-muted">
            Practical frontend and full-stack work for founders and businesses
            who need clean interfaces and reliable applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = icons[i] || CodeIcon;
            return (
              <div
                key={s.id}
                className="card-lift rounded-2xl border border-border bg-bg-card p-6 md:p-8"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-text">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  <span className="text-text-dim">Problem: </span>
                  {s.problem}
                </p>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  <span className="text-text-dim">Solution: </span>
                  {s.solution}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-md bg-bg border border-border px-2.5 py-1 text-xs text-text-muted"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
                >
                  Get this service
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
