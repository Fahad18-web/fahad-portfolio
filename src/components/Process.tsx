import { processSteps } from "@/data/projects";

export default function Process() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-sm font-medium text-accent mb-2">Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text">
            How we work together
          </h2>
          <div className="accent-line mt-4 mx-auto" />
          <p className="mt-4 max-w-xl mx-auto text-text-muted">
            A straightforward workflow — transparent, professional, and easy to
            follow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step) => (
            <div key={step.num} className="relative">
              <span className="text-3xl font-semibold text-accent/20">
                {step.num}
              </span>
              <h3 className="mt-2 text-base font-semibold text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
