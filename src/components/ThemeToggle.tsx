"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const THEME_KEY = "theme";
type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const currentTheme = document.documentElement.dataset.theme;

    if (currentTheme === "light" || currentTheme === "dark") {
      setTheme(currentTheme);
      return;
    }

    const fallbackTheme: Theme =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    applyTheme(fallbackTheme);
    setTheme(fallbackTheme);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = (event: MediaQueryListEvent) => {
      if (localStorage.getItem(THEME_KEY)) {
        return;
      }

      const nextTheme: Theme = event.matches ? "dark" : "light";
      applyTheme(nextTheme);
      setTheme(nextTheme);
    };

    media.addEventListener("change", updateTheme);
    return () => media.removeEventListener("change", updateTheme);
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} theme`;

  return (
    <button
      type="button"
      onClick={() => {
        const updatedTheme: Theme = theme === "dark" ? "light" : "dark";
        applyTheme(updatedTheme);
        localStorage.setItem(THEME_KEY, updatedTheme);
        setTheme(updatedTheme);
      }}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card text-text-muted transition-colors hover:border-border-hover hover:text-text"
    >
      {theme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
      <span className="sr-only">{label}</span>
    </button>
  );
}
