"use client";

import { useState, FormEvent } from "react";
import { SendIcon, CheckIcon } from "./Icons";

const EMAIL = "linkedinmfa@gmail.com";

type Status = "idle" | "loading" | "success" | "error";

const expectations = [
  "Clean, maintainable React / Next.js & Express codebases",
  "Clear scope, milestone updates, and live preview links",
  "Mobile-first responsiveness tested across devices",
  "Full source handover & deployment support",
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const details = String(data.get("details") || "").trim();

    if (!name || !email || !details) {
      setStatus("error");
      setErrorMsg("Please fill in name, email, and project details.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry: ${service || "General"} — ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service || "—"}\nBudget: ${budget || "—"}\n\nDetails:\n${details}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  const fieldClass =
    "w-full rounded-xl border border-[#333] bg-[#0A0A0A] px-4 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#525252] outline-none transition-colors focus:border-[#2DD4BF]";

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="mb-2 text-sm font-medium text-[#2DD4BF]">Contact</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F5F5F5]">
              Let&apos;s build something useful
            </h2>
            <div className="accent-line mt-4" />
            <p className="mt-5 leading-relaxed text-[#A3A3A3]">
              Landing page, frontend fixes, redesign, or a MERN app — I&apos;ll
              reply with next steps and a clear quote.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[#A3A3A3] transition-colors hover:text-[#2DD4BF]"
                >
                  {EMAIL}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-full border border-[#333] px-2.5 py-1 text-xs text-[#737373] transition-colors hover:border-[#2DD4BF] hover:text-[#2DD4BF]"
                >
                  {copied ? "✓ Email Copied" : "Copy email"}
                </button>
              </div>
              <a
                href="https://github.com/Fahad18-web"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#A3A3A3] transition-colors hover:text-[#2DD4BF]"
              >
                github.com/Fahad18-web
              </a>
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <div className="rounded-2xl border border-[#222] bg-[#141414] p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-[#F5F5F5]">
                  What you can expect
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#222] bg-[#0A0A0A] px-2.5 py-1 text-xs text-[#2DD4BF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Replies &lt; 12 hrs
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {expectations.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-[#A3A3A3] leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2DD4BF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-[#333] bg-[#141414] p-6 md:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[#A3A3A3]">
                    Name <span className="text-[#2DD4BF]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[#A3A3A3]">
                    Email <span className="text-[#2DD4BF]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-[#A3A3A3]">
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className={`${fieldClass} dark-select`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Landing Page">Landing Page Development</option>
                    <option value="React / Bug Fixing">React Website &amp; Bug Fixing</option>
                    <option value="Redesign">Website Redesign &amp; UI</option>
                    <option value="MERN App">MERN Stack Application</option>
                    <option value="Other">Other / Not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-xs font-medium text-[#A3A3A3]">
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className={`${fieldClass} dark-select`}
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 – $1,500">$500 – $1,500</option>
                    <option value="$1,500 – $3,000">$1,500 – $3,000</option>
                    <option value="$3,000+">$3,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="details" className="mb-1.5 block text-xs font-medium text-[#A3A3A3]">
                  Project details <span className="text-[#2DD4BF]">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={5}
                  placeholder="What are you building? Timeline, links, or anything useful…"
                  className={`${fieldClass} resize-y min-h-[120px]`}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400" role="alert">
                  {errorMsg}
                </p>
              )}
              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-[#2DD4BF]" role="status">
                  <CheckIcon size={16} />
                  Opening your email client… You can also use Copy email.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#14B8A6] disabled:opacity-60"
              >
                {status === "loading" ? (
                  "Sending…"
                ) : (
                  <>
                    Send message
                    <SendIcon size={16} />
                  </>
                )}
              </button>

              <p className="text-xs text-[#525252]">
                Form opens your email client with a pre-filled message. No data
                is stored on this site.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}