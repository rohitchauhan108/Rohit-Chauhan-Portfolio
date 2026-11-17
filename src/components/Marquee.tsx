import { skillsData } from "@/data/skills";

/** Large outlined ticker of the stack, sits right under the hero. */
export default function Marquee() {
  const words = Array.from(
    new Set(
      skillsData
        .flatMap((c) => c.skills.map((s) => s.name.split("/")[0].replace(/\(.*\)/, "").trim()))
        .filter(Boolean)
    )
  ).slice(0, 14);

  const row = (suffix: string) =>
    words.map((w, i) => (
      <span key={`${suffix}-${i}`} className="flex items-center shrink-0">
        <span
          className={`font-heading font-extrabold tracking-tight text-5xl md:text-7xl px-6 md:px-10 ${
            i % 2 === 0 ? "text-foreground" : "text-transparent"
          }`}
          style={i % 2 === 0 ? undefined : { WebkitTextStroke: "1.5px var(--rail)" }}
        >
          {w}
        </span>
        <span className="text-accent-light text-2xl md:text-3xl select-none">✦</span>
      </span>
    ));

  return (
    <section
      aria-label="Tech stack"
      className="marquee relative w-full overflow-hidden border-y border-theme py-6 md:py-8 bg-bg-medium/40"
    >
      <div className="marquee-track">
        <div className="flex">{row("a")}</div>
        <div className="flex" aria-hidden="true">{row("b")}</div>
      </div>
    </section>
  );
}
