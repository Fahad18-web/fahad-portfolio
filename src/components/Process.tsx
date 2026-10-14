import { processSteps } from "@/data/projects";

export default function Process() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <p className="mb-2 text-sm font-medium t-accent">Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight t-text">
            How we work together
          </h2>
          <div className="accent-line mx-auto mt-4" />
          <p className="mx-auto mt-4 max-w-xl t-muted">
            Transparent, professional, and easy to follow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.num} className="relative">
              <span
                className="text-3xl font-semibold"
                style={{ color: "var(--num-soft)" }}
              >
                {step.num}
              </span>
              <h3 className="mt-2 text-base font-semibold t-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed t-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}