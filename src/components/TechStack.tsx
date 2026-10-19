const groups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Vite",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Dual-Token JWT",
      "RBAC",
      "Resend SMTP",
    ],
  },
  {
    title: "Data & Tooling",
    items: [
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Chart.js",
      "Leaflet",
      "Git & GitHub",
      "Vercel",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="border-y border-[#222]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-[#737373]">
          Technologies I work with
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-[#2a2a2a] bg-[#111] p-5"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#2DD4BF]">
                {g.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-[#333] bg-[#0A0A0A] px-3 py-1.5 text-sm text-[#A3A3A3]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}