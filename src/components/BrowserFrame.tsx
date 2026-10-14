import Image, { type StaticImageData } from "next/image";

type BrowserFrameProps = {
  url: string;
  accent: string;
  title: string;
  tagline: string;
  image?: string | StaticImageData;
};

export default function BrowserFrame({
  url,
  accent,
  title,
  tagline,
  image,
}: BrowserFrameProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-theme bg-card shadow-[var(--shadow-card)]">
      <div
        className="flex items-center gap-3 border-b border-theme px-3 py-2.5"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div
          className="min-w-0 flex-1 truncate rounded-md px-3 py-1 text-center text-[11px] t-dim"
          style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
        >
          {url}
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-page">
        {image ? (
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 p-4 md:p-5 transition-transform duration-500 ease-out group-hover:scale-105">
            <div
              className="flex h-full flex-col gap-2 overflow-hidden rounded-lg border border-theme"
              style={{ background: "var(--bg-card)" }}
            >
              <div
                className="flex items-center justify-between border-b border-theme px-3 py-2"
                style={{ background: "var(--bg-elevated)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-md" style={{ background: accent }} />
                  <span className="text-[10px] font-semibold t-text">{title}</span>
                </div>
                <div className="flex gap-1">
                  <span className="h-1.5 w-8 rounded-full" style={{ background: "var(--border)" }} />
                  <span className="h-1.5 w-8 rounded-full" style={{ background: "var(--border)" }} />
                </div>
              </div>
              <div className="grid flex-1 grid-cols-3 gap-2 p-2">
                <div className="col-span-2 flex flex-col gap-2">
                  <div
                    className="h-8 rounded-md"
                    style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
                  />
                  <div className="grid flex-1 grid-cols-2 gap-2">
                    <div className="rounded-md border border-theme" style={{ background: "var(--bg-elevated)" }} />
                    <div className="rounded-md border border-theme" style={{ background: "var(--bg-elevated)" }} />
                  </div>
                  <div className="h-10 rounded-md border border-theme" style={{ background: "var(--bg-elevated)" }} />
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    className="flex-1 rounded-md"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}33` }}
                  />
                  <div className="h-8 rounded-md border border-theme" style={{ background: "var(--bg-elevated)" }} />
                </div>
              </div>
              <p className="truncate px-3 pb-2 text-[9px] t-dim">{tagline}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}