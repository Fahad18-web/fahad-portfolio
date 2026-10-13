import { technologies } from "@/data/projects";

export default function TechStack() {
  return (
    <section className="border-y border-[#1a1a1a] bg-[#0d0d0d]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-[#737373]">
          Technologies I work with
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((t) => (
            <span
              key={t.name}
              className="rounded-full border border-[#222] bg-[#141414] px-4 py-1.5 text-sm text-[#A3A3A3]"
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
