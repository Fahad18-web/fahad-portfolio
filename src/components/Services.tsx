import { services } from "@/data/projects";
import { LayoutIcon, WrenchIcon, LayersIcon, CodeIcon, ArrowRightIcon } from "./Icons";

const icons = [LayoutIcon, WrenchIcon, LayersIcon, CodeIcon];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[#0d0d0d]">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-medium text-[#2DD4BF] mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
            How I can help
          </h2>
          <div className="accent-line mt-4" />
          <p className="mt-4 max-w-2xl text-[#A3A3A3]">
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
                className="card-lift rounded-2xl border border-[#222] bg-[#141414] p-6 md:p-8"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2DD4BF]/10 text-[#2DD4BF]">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-[#F5F5F5]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-[#A3A3A3] leading-relaxed">
                  <span className="text-[#737373]">Problem: </span>
                  {s.problem}
                </p>
                <p className="mt-3 text-sm text-[#A3A3A3] leading-relaxed">
                  <span className="text-[#737373]">Solution: </span>
                  {s.solution}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-md bg-[#0A0A0A] border border-[#222] px-2.5 py-1 text-xs text-[#A3A3A3]"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#2DD4BF] hover:gap-2.5 transition-all"
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
