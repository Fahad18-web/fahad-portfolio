type IconProps = {
  size?: number;
  className?: string;
};

export function TechIcon({
  name,
  size = 16,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const p = {
    width: size,
    height: size,
    className,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "react":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
          <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "next":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5h-1.6l-4.1-6.4v6.4H9.2V7.5h1.7l4 6.2V7.5h1.6v9z" />
        </svg>
      );
    case "js":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
          <path d="M3 3h18v18H3V3zm9.7 13.8c.5.9 1.2 1.4 2.3 1.4 1.2 0 2-.6 2-1.5 0-1-.6-1.4-2-2l-.7-.3c-1.3-.5-2.1-1.2-2.1-2.5 0-1.3.9-2.3 2.4-2.3 1.1 0 1.9.4 2.5 1.3l-1.4.9c-.3-.5-.6-.7-1.1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1.2 1.1l.7.3c1.5.6 2.3 1.4 2.3 2.9 0 1.6-1.3 2.5-3 2.5-1.4 0-2.4-.6-3-1.6l1.7-1zm-4.6.2c.4.7.7 1.2 1.5 1.2.7 0 1.2-.3 1.2-1.4V10h1.7v6.1c0 1.9-1.1 2.8-2.7 2.8-1.5 0-2.3-.7-2.7-1.6l1-.9z" />
        </svg>
      );
    case "ts":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
          <path d="M3 3h18v18H3V3zm9.1 8.1v1.3H8.6v5.5H7.1v-5.5H3.8v-1.3h8.3zM20 16.5c-.3.2-.8.3-1.3.3-.6 0-.9-.3-.9-.7 0-.4.3-.6 1-.8l.5-.2c1.2-.3 1.7-.9 1.7-1.9 0-1.1-.9-1.9-2.3-1.9-1 0-1.8.3-2.3.9l.8.9c.3-.4.7-.6 1.3-.6.5 0 .8.2.8.6 0 .4-.2.5-1 .8l-.5.2c-1.3.4-1.9 1-1.9 2.1 0 1.2.9 2 2.4 2 1 0 1.9-.3 2.5-.9l-.8-.8z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
          <path d="M12 6c-2.5 0-4.1 1.2-4.7 3.7 1-.9 2-.1.3 1.6.7.2 1.2.6 1.7 1.2C10.4 11 11.5 12 13 12c2.5 0 4.1-1.2 4.7-3.7-1 .9-2 1.3-3.1 1-.7-.2-1.2-.6-1.7-1.2C12.2 7 11.1 6 12 6zm-4.7 6c-2.5 0-4.1 1.2-4.7 3.7 1-.9 2-1.3 3.1-1 .7.2 1.2.6 1.7 1.2.9 1.1 2 2.1 3.5 2.1 2.5 0 4.1-1.2 4.7-3.7-1 .9-2 1.3-3.1 1-.7-.2-1.2-.6-1.7-1.2-.9-1.1-2-2.1-3.5-2.1z" />
        </svg>
      );
    case "vite":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
          <path d="M8.5 3.5L2 16.5c-.4.8.1 1.8 1 1.8h6.3L12 8.2l2.7 10.1H21c.9 0 1.4-1 1-1.8L14.5 3.5c-.4-.8-1.6-.8-2 0L8.5 3.5z" />
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
          <path d="M12 1.8L3.5 6.7v9.6L12 21.2l8.5-4.9V6.7L12 1.8zm0 2.5l6.2 3.6v7.2L12 18.7l-6.2-3.6V7.9L12 4.3z" />
        </svg>
      );
    case "express":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" {...p}>
          <path d="M4 12h11M15 12c1.5 0 3 1 3 2.5S16.5 17 15 17H9" />
          <path d="M8 8h12" />
        </svg>
      );
    case "mongo":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
          <path d="M12.5 2s1.8 2 1.8 6.2c0 3.1-1.1 6.2-1.7 7.3-.3.7-.6.9-.6.9s-.3-.2-.6-.9c-.6-1.1-1.7-4.2-1.7-7.3C9.7 4 11.5 2 11.5 2s.2-.2.5-.2.5.2.5.2zM12 17.5c0 1.2.2 2 .5 2.8.1.3.3.5.5.7v1.5h1v-1.5c.2-.2.4-.4.5-.7.3-.8.5-1.6.5-2.8 0 0-1.5 1-3 0z" />
        </svg>
      );
    case "jwt":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...p}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case "redux":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
          <path d="M16.6 16.8c.3.6.3 1.3 0 1.9-.5.9-1.7 1.3-2.6.8-.4-.2-.6-.4-.8-.8 1.2.4 2.2-.1 2.5-.9.2-.4.1-.8-.2-1.2-.7-.7-2.6-.4-3.8-1.5-.8-1-1-1.6 1-2 .1 1.4 1.1 2.2 2.3 2.5.4.1.9.1 1.3 0 .5-.1.9-.3 1.2-.8.5-.9.2-2-.7-2.5-.3-.2-.6-.3-.9-.3 1 .3 1.3 1.2.9 1.9-.2.4-.7.6-1.2.5-1.2-.2-2.4-1.3-2.3-2.9.1-.6.4-1.1.9-1.4 1.4-.9 3.3.1 3.8 1.3l1.3-.6c-.3-.8-.8-1.6-1.6-2.1-1.9-1.1-4.1-.8-5.5.8-.6.7-.9 1.5-1 2.4-.9-.4-1.9-.3-2.7.3-.8.6-1.1 1.6-.9 2.5.3.9 1 1.6 1.9 1.8l.2-1.3c-.5-.1-.9-.4-1-1-.1-.5.1-1 .5-1.3.4-.3.9-.2 1.3.1-.2 1.8.5 3.3 1.9 4.1.4.3.9.4 1.4.5.1.8.5 1.4 1.2 1.8 1.8 1 3.9.1 4.5-1.8.3-.9.2-1.9-.3-2.8z" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
          <path d="M21.5 10.9L13.1 2.5a1.2 1.2 0 0 0-1.7 0L9.3 4.6l2.1 2.1a1.4 1.4 0 0 1 1.7 1.8l2 2a1.4 1.4 0 1 1-.8.8l-2-2v5.1a1.4 1.4 0 1 1-1.1 0V9.4a1.4 1.4 0 0 1-.7-1.8L7.5 5.4 3.5 9.4a1.2 1.2 0 0 0 0 1.7l7.4 7.4a1.2 1.2 0 0 0 1.7 0l7.4-7.4a1.2 1.2 0 0 0 0-1.7z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...p}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
        </svg>
      );
  }
}