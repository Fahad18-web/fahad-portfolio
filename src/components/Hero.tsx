import Image from "next/image";
import { ArrowRightIcon } from "./Icons";
import heroImage from "@/assets/hero-img.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="hero-glow -top-32 -right-32 opacity-80" />
      <div className="hero-glow bottom-0 -left-40 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 w-full py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#333] bg-[#141414] px-3 py-1.5 text-sm text-[#A3A3A3]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for freelance and full-time roles
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-[#F5F5F5]">
              Turning Ideas Into Modern,
              <br />
              High-Performing Web
              <br />
              Experiences.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-[#A3A3A3] leading-relaxed lg:mx-0">
              I build responsive websites, improve existing interfaces, fix
              frontend issues, and ship practical MERN applications — so your
              product looks sharp and works reliably.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
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
              <a
                href="/Muhammad-Fahad-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#333] bg-transparent px-6 py-3 text-sm font-medium text-[#F5F5F5] hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors"
              >
                Resume / CV ↗
              </a>
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[#737373] lg:justify-start">
              <span>React · Next.js · Tailwind</span>
              <span>MERN Applications</span>
              <span>Top 7% HEC NSCT Graduate</span>
              <span>Based in Lahore, Pakistan</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#2DD4BF]/20 rotate-3" />
            <div className="absolute -inset-3 rounded-[2rem] bg-[#2DD4BF]/10 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#2DD4BF]/40 bg-[#141414]">
              <Image
                src={heroImage}
                alt="Muhammad Fahad, frontend and MERN developer"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}