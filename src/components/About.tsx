export default function About() {
  return (
    <section id="about" className="section-pad bg-bg-soft">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="text-sm font-medium text-accent mb-2">About</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text">
              Muhammad Fahad
            </h2>
            <div className="accent-line mt-4" />
          </div>

          <div className="md:col-span-7 space-y-5 text-text-muted leading-relaxed">
            <p>
              I&apos;m a Software Engineering student and developer based in
              Lahore, Pakistan. I care about building useful web applications
              and solving real frontend problems — clean layouts, reliable
              components, and interfaces that feel intentional.
            </p>
            <p>
              My recent work includes{" "}
              <span className="text-text">LifeTracker</span>, a full MERN
              habit-tracking platform with auth, analytics, and theming, and{" "}
              <span className="text-text">EstatePulse</span>, a real-estate
              marketplace with dual-token JWT, RBAC, maps, and appointments.
              These projects reflect how I approach both UI polish and solid
              backend structure.
            </p>
            <p>
              I continuously improve my skills in React, Tailwind, and the MERN
              stack, and I&apos;m interested in practical AI-powered web
              interfaces when they solve a clear problem. If you need a landing
              page, a frontend fix, a redesign, or a functional web app —
              I&apos;d be glad to talk.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-sm">
              <a
                href="https://github.com/Fahad18-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub →
              </a>
              <a
                href="mailto:fa2367701@gmail.com"
                className="text-accent hover:underline"
              >
                Email →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
