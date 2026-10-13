"use client";

import { useState, FormEvent } from "react";
import { SendIcon, CheckIcon } from "./Icons";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

    // Build mailto as a reliable no-backend fallback
    const subject = encodeURIComponent(
      `Portfolio inquiry: ${service || "General"} — ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service || "—"}\nBudget: ${budget || "—"}\n\nDetails:\n${details}`
    );

    // Open native mail client (works without a form backend)
    window.location.href = `mailto:fa2367701@gmail.com?subject=${subject}&body=${body}`;

    setStatus("success");
    form.reset();
  }

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-sm font-medium text-accent mb-2">Contact</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text">
              Let&apos;s build something useful
            </h2>
            <div className="accent-line mt-4" />
            <p className="mt-5 text-text-muted leading-relaxed">
              Tell me about your project — landing page, frontend fixes,
              redesign, or a MERN application. I&apos;ll reply with next steps
              and a clear quote.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href="mailto:fa2367701@gmail.com"
                className="block text-text-muted hover:text-accent transition-colors"
              >
                fa2367701@gmail.com
              </a>
              <a
                href="https://github.com/Fahad18-web"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-muted hover:text-accent transition-colors"
              >
                github.com/Fahad18-web
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-bg-card p-6 md:p-8 space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-text-dim mb-1.5"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-text-dim mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-medium text-text-dim mb-1.5"
                  >
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text focus:border-accent focus:outline-none transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Landing Page">Landing Page Development</option>
                    <option value="React / Bug Fixing">
                      React Development & Bug Fixing
                    </option>
                    <option value="Redesign">Website Redesign & UI</option>
                    <option value="MERN App">MERN Stack Application</option>
                    <option value="Other">Other / Not sure</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs font-medium text-text-dim mb-1.5"
                  >
                    Budget (optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text focus:border-accent focus:outline-none transition-colors"
                    defaultValue=""
                  >
                    <option value="">Prefer not to say</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 – $1,500">$500 – $1,500</option>
                    <option value="$1,500 – $3,000">$1,500 – $3,000</option>
                    <option value="$3,000+">$3,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-xs font-medium text-text-dim mb-1.5"
                >
                  Project details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none transition-colors resize-y"
                  placeholder="What are you building? Timeline, goals, or links help a lot."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400" role="alert">
                  {errorMsg}
                </p>
              )}
              {status === "success" && (
                <p
                  className="flex items-center gap-2 text-sm text-accent"
                  role="status"
                >
                  <CheckIcon size={16} />
                  Opening your email client… If it doesn&apos;t open, write to
                  fa2367701@gmail.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast hover:bg-accent-dim disabled:opacity-60 transition-colors"
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

              <p className="text-xs text-text-faint">
                Form opens your email client with a pre-filled message. No data
                is stored on this site. For a fully hosted form (Formspree /
                Resend), add an API route later.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
