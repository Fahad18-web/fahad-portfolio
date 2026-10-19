const credentials = [
  {
    badge: "Academic Foundation",
    title: "BS in Computer Science / Software Engineering",
    subtitle: "Virtual University of Pakistan · Completed 2026",
    description:
      "Strong grounding in relational & NoSQL databases, software architecture, object-oriented design, and full-stack web engineering.",
  },
  {
    badge: "National Competency Ranking",
    title: "93.3 Percentile — HEC NSCT Assessment",
    subtitle: "Higher Education Commission (HEC) · Top 7% Nationally",
    description:
      "Scored in the 93.3 percentile among graduating IT and Software Engineering students across Pakistan in the standardized technical competency test.",
  },
  {
    badge: "Industry Fellowship",
    title: "Full-Stack Engineering Fellow (Track 01)",
    subtitle: "Dev Weekends Fellowship 2026 · Cosmic Clan",
    description:
      "Selected for intensive full-stack product training — shipping modular MERN architectures, clean REST contracts, and reviewed production code.",
  },
  {
    badge: "Production Engineering Standards",
    title: "End-to-End SaaS & Custom Domain Pipelines",
    subtitle: "Security, Auth & Transactional Infrastructure",
    description:
      "Experienced beyond static UI: dual-token JWT rotation, role-based access control (RBAC), custom DNS + Resend transactional email pipelines, and cloud deployments.",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-medium text-[#2DD4BF] mb-2">Credibility</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
            Verified background &amp; engineering proof
          </h2>
          <div className="accent-line mt-4" />
          <p className="mt-4 max-w-2xl text-[#A3A3A3]">
            Backed by a formal software engineering degree, national competency
            ranking, and real production deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {credentials.map((c) => (
            <div
              key={c.badge}
              className="card-lift rounded-2xl border border-[#222] bg-[#141414] p-6 md:p-8"
            >
              <span className="inline-flex rounded-md border border-[#222] bg-[#0A0A0A] px-2.5 py-1 text-xs text-[#A3A3A3]">
                {c.badge}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#F5F5F5]">
                {c.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#2DD4BF]">{c.subtitle}</p>
              <p className="mt-3 text-sm text-[#A3A3A3] leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}