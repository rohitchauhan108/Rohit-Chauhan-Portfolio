type SectionHeaderProps = {
  topLabel: string;
  title: string;
  description: string;
  badge?: string;
  extraText?: string;
  className?: string;
};

export default function SectionHeader({
  className,
  topLabel,
  title,
  description,
  badge,
  extraText,
}: SectionHeaderProps) {
  // Multi-word titles: last word becomes an italic serif accent.
  // Single-word titles: solid word + ember full stop.
  const words = title.trim().split(/\s+/);
  const last = words.length > 1 ? words.pop() : null;
  const lead = words.join(" ");

  return (
    <div className={`section-header mb-20 md:mb-28 relative ${className ?? ""}`}>
      <div className="font-label flex items-center gap-3 text-[11px] text-accent-light font-medium mb-6">
        <span className="w-2 h-2 bg-accent-light" />
        {topLabel}
        <span className="w-12 h-px bg-accent-light/40" />
      </div>

      <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-extrabold tracking-[-0.045em] text-foreground font-heading leading-[0.9] mb-8 pb-2">
        {lead}
        {last ? (
          <>
            {" "}
            <span className="font-accent text-accent-light tracking-[-0.02em]">{last}</span>
          </>
        ) : null}
        <span className="text-accent-light">.</span>
      </h1>

      <div className="ruler w-full" />

      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mt-8">
        <p className="text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
        {(badge || extraText) && (
          <div className="flex items-center gap-4">
            {badge && (
              <div className="font-label px-4 py-2 border border-accent-light/40 text-[10px] font-medium text-accent-light">
                {badge}
              </div>
            )}
            {extraText && (
              <span className="font-label hidden md:block text-secondary/70 text-[10px]">
                {extraText}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
