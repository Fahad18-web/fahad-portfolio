export default function About() {
  const facts = [
    { label: "Location", value: "Lahore, Pakistan" },
    { label: "Degree", value: "BS Graduate (2026)" },
    { label: "HEC NSCT Rank", value: "93.3 Percentile" },
    { label: "Focus", value: "React · Next.js · MERN" },
  ];

  return (
    <section id="about" className="section-pad bg-[#0d0d0d]">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="text-sm font-medium text-[#2DD4BF] mb-2">About</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              Muhammad Fahad
            </h2>
            <div className="accent-line mt-4" />

            <div className="mt-8 rounded-2xl border border-[#222] bg-[#141414] p-5 space-y-3">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline justify-between gap-4 text-sm"
                >
                  <span className="text-[#737373] shrink-0">{f.label}</span>
                  <span className="text-right text-[#F5F5F5]">{f.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 space-y-5 text-[#A3A3A3] leading-relaxed">
            <p>
              I&apos;m a Software Engineering Graduate and developer based in
              Lahore, Pakistan. I care about building useful web applications
              and solving real frontend problems — clean layouts, reliable
              components, and interfaces that feel intentional.
            </p>
            <p>
              My recent work includes{" "}
              <span className="text-[#F5F5F5]">LifeTracker</span>, a full MERN
              habit-tracking platform with auth, analytics, and theming, and{" "}
              <span className="text-[#F5F5F5]">EstatePulse</span>, a real-estate
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
                className="text-[#2DD4BF] hover:underline"
              >
                GitHub →
              </a>
              <a
                href="mailto:linkedinmfa@gmail.com"
                className="text-[#2DD4BF] hover:underline"
              >
                Email →
              </a>
              <a
                href="/Muhammad-Fahad-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DD4BF] hover:underline"
              >
                Download Resume →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}