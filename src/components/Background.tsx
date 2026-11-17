"use client";

/**
 * Site-wide line background:
 *  - 32px blueprint grid + 160px major grid (masked so they fade at the edges)
 *  - three vertical "rails" with a slow ember light-streak travelling down each
 *  - dashed horizontal guides, corner registration marks
 *  - soft ember glows, film grain and a vignette for depth
 * Everything is driven by CSS variables so it re-colours with the theme.
 */
export default function Background() {
  return (
    <div className="bg-lines" aria-hidden="true">
      <div className="bg-lines__glow" style={{ top: "-12rem", left: "-8rem", width: "34rem", height: "34rem" }} />
      <div className="bg-lines__glow" style={{ bottom: "-14rem", right: "-10rem", width: "38rem", height: "38rem", opacity: 0.8 }} />

      <div className="bg-lines__fine" />
      <div className="bg-lines__major" />

      <span className="bg-lines__rail" style={{ left: "25%", ["--dur" as string]: "16s", ["--delay" as string]: "-2s" }} />
      <span className="bg-lines__rail" style={{ left: "50%", ["--dur" as string]: "21s", ["--delay" as string]: "-11s" }} />
      <span className="bg-lines__rail" style={{ left: "75%", ["--dur" as string]: "18s", ["--delay" as string]: "-6s" }} />

      <span className="bg-lines__dash" style={{ top: "22%" }} />
      <span className="bg-lines__dash" style={{ top: "78%" }} />

      <span className="bg-lines__mark" style={{ top: 18, left: 18 }} />
      <span className="bg-lines__mark" style={{ top: 18, right: 18 }} />
      <span className="bg-lines__mark" style={{ bottom: 18, left: 18 }} />
      <span className="bg-lines__mark" style={{ bottom: 18, right: 18 }} />

      <div className="bg-lines__vignette" />
      <div className="bg-lines__grain" />
    </div>
  );
}
