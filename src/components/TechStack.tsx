import { technologies } from "@/data/projects";

export default function TechStack() {
  return (
    <section className="border-y border-border-subtle bg-bg-soft">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-text-dim">
          Technologies I work with
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((t) => (
            <span
              key={t.name}
              className="rounded-full border border-border bg-bg-card px-4 py-1.5 text-sm text-text-muted"
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
