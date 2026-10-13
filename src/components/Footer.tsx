import { GithubIcon, MailIcon } from "./Icons";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <a
              href="#home"
              className="text-lg font-semibold text-[#F5F5F5]"
            >
              Fahad<span className="text-[#2DD4BF]">.</span>
            </a>
            <p className="mt-2 text-sm text-[#737373] max-w-xs">
              Building modern web experiences for founders and businesses.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-[#A3A3A3]">
            <a href="#services" className="hover:text-[#F5F5F5] transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-[#F5F5F5] transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-[#F5F5F5] transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-[#F5F5F5] transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Fahad18-web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-[#2DD4BF] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="mailto:fa2367701@gmail.com"
              className="text-[#A3A3A3] hover:text-[#2DD4BF] transition-colors"
              aria-label="Email"
            >
              <MailIcon size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#555]">
          <p>© {currentYear} Muhammad Fahad. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
