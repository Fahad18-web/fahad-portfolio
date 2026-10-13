import { ArrowRightIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="hero-glow -top-32 -right-32 opacity-80" />
      <div className="hero-glow bottom-0 -left-40 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 w-full py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-[#2DD4BF]">
            Software Engineering Student · Frontend Developer
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-[#F5F5F5]">
            Turning Ideas Into Modern,{" "}
            <span className="text-[#2DD4BF]">High-Performing</span> Web
            Experiences.
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg text-[#A3A3A3] leading-relaxed">
            I build responsive websites, improve existing interfaces, fix
            frontend issues, and develop practical web applications with React
            and the MERN stack — so your product looks sharp and works reliably.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#0A0A0A] hover:bg-[#14B8A6] transition-colors"
            >
              View My Work
              <ArrowRightIcon size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#333] bg-transparent px-6 py-3 text-sm font-medium text-[#F5F5F5] hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors"
            >
              Discuss Your Project
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#737373]">
            <span>React · Tailwind · Node.js</span>
            <span>MERN Applications</span>
            <span>Based in Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
