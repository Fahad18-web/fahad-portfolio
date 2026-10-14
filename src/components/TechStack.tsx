import { technologies } from "@/data/projects";
import { TechIcon } from "./TechIcons";

export default function TechStack() {
  return (
    <section className="border-y border-[#222]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10">
        <div className="rounded-2xl border border-[#2a2a2a] bg-[#111] px-5 py-8 md:px-8 md:py-10">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-[#737373]">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((t) => (
              <span
                key={t.name}
                className="group inline-flex items-center gap-2 rounded-full border border-[#333] bg-[#0A0A0A] px-3.5 py-1.5 text-sm text-[#A3A3A3] transition-colors hover:border-[#2DD4BF] hover:text-[#2DD4BF]"
              >
                <TechIcon
                  name={t.icon}
                  size={15}
                  className="opacity-80 transition-opacity group-hover:opacity-100"
                />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}