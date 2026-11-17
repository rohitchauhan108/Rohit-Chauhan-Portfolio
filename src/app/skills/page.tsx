"use client";

import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { getTechIcon } from "@/components/icons/TechIcons";
import SectionHeader from "@/components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

import { skillsData } from "@/data/skills";

/* Mastery (hidden) still stored but only used for subtle fill accent. No outer circles. */
function SkillTile({
  name,
  level,
  delay = 0,
}: {
  name: string;
  level: number;
  delay?: number;
}) {
  const { Icon } = useMemo(() => getTechIcon(name), [name]);

  const scale = useMotionValue(0.75);

  useEffect(() => {
    const controls = animate(scale, 1, {
      duration: 0.9,
      delay: delay,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [scale, delay]);

  const masteryOpacity = useTransform(
    useMotionValue(level),
    (v) => 0.03 + (v / 100) * 0.12
  );

  return (
    <div
      data-cursor-hover
      className="group relative flex flex-col items-center p-5 sm:p-6 rounded-3xl bg-bg-medium/60 backdrop-blur-xl border border-theme/80 hover:border-accent-light/40 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
      style={{
        boxShadow: "0 10px 30px -16px color-mix(in srgb, var(--primary) 25%, transparent)",
      }}
    >
      {/* Hover glow sweep */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--primary) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-light/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Brand icon badge — NO outer circle */}
      <div className="relative mb-4">
        <motion.div
          style={{
            scale,
            boxShadow: "0 10px 30px -12px color-mix(in srgb, var(--primary) 35%, transparent)",
          }}
          className="w-[96px] h-[96px] rounded-[28px] bg-bg-medium/95 backdrop-blur-md border border-theme/80 group-hover:border-accent-light/50 flex items-center justify-center transition-all duration-500 group-hover:scale-[1.06]"
        >
          {/* subtle mastery highlight tint */}
          <div
            className="absolute inset-0 rounded-[28px] opacity-60 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 55%)",
            }}
          />
          <motion.div
            initial={false}
            className="relative z-10"
            style={{ opacity: masteryOpacity }}
          />
          <div className="relative z-10">
            <Icon className="w-12 h-12" />
          </div>
        </motion.div>
      </div>

      {/* Tech name */}
      <div className="w-full text-center">
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.9)] animate-pulse" />
          <h4 className="text-[12px] font-black tracking-[0.08em] uppercase text-foreground group-hover:text-accent-light transition-colors duration-300 font-heading leading-tight">
            {name}
          </h4>
        </div>
        <div className="h-px w-10 mx-auto bg-gradient-to-r from-transparent via-accent-light/40 to-transparent group-hover:w-16 transition-all duration-500" />
      </div>
    </div>
  );
}

function CategoryHeader({
  num,
  title,
  description,
}: {
  num: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative md:col-span-12 mb-4">
      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 pb-6 border-b border-theme/70 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-accent-light/5 blur-3xl pointer-events-none" />
        <div className="flex items-end gap-5 md:gap-7 shrink-0">
          <div className="flex flex-col items-start">
            <span className="text-[10px] tracking-[0.4em] font-bold text-accent-light/80 uppercase mb-2">
              Section
            </span>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl md:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-b from-accent-light to-accent-light/30 leading-none">
                {num}
              </span>
              <span className="w-12 h-px bg-accent-light/50 hidden sm:block" />
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl md:text-4xl font-extrabold font-heading tracking-tight text-foreground mb-2">
            {title}
          </h2>
          <p className="text-secondary text-sm md:text-[15px] leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] font-bold text-secondary/60 uppercase">
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-header", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      const cats = gsap.utils.toArray<HTMLElement>(".skills-category");
      cats.forEach((cat, idx) => {
        gsap.from(cat, {
          scrollTrigger: {
            trigger: cat,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: idx * 0.05,
        });

        const tiles = cat.querySelectorAll(".skill-tile");
        gsap.from(tiles, {
          scrollTrigger: { trigger: cat, start: "top 85%" },
          y: 30,
          opacity: 0,
          stagger: 0.08,
          delay: 0.2,
          duration: 0.8,
          ease: "back.out(1.6)",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const totalSkills = useMemo(
    () => skillsData.reduce((a, c) => a + c.skills.length, 0),
    []
  );
  const avgLevel = useMemo(() => {
    const all = skillsData.flatMap((s) => s.skills.map((x) => x.level));
    return Math.round(all.reduce((a, b) => a + b, 0) / all.length);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-24 px-4 md:px-10 lg:px-16 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-accent-light/[0.07] blur-3xl" />
        <div className="absolute bottom-20 -right-10 w-[24rem] h-[24rem] rounded-full bg-accent-light/[0.05] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          topLabel="Engineering Stack"
          title="Skills"
          description="A comprehensive overview of my technical capabilities and creative skills, honed through years of dedicated practice and real-world application."
          className="skills-header"
          badge={`${skillsData.length}+ Categories`}
          extraText="Engineering Stack · 2026"
        />

        <div className="grid grid-cols-3 gap-3 md:gap-4 shrink-0 w-full md:w-auto">
              {[
                {
                  k: skillsData.length.toString().padStart(2, "0"),
                  v: "Categories",
                },
                {
                  k: totalSkills.toString().padStart(2, "0"),
                  v: "Technologies",
                },
                { k: `${avgLevel}%`, v: "Avg Mastery" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl bg-bg-medium/70 backdrop-blur-xl border border-theme/70 px-4 py-3 md:px-5 md:py-4 text-center hover:border-accent-light/40 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-black font-heading tracking-tight text-accent-light">
                    {s.k}
                  </div>
                  <div className="text-[9px] md:text-[10px] tracking-[0.25em] font-bold uppercase text-secondary/60 mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-light/50 to-transparent" />
          <div className="flex justify-between mt-4">
            <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-secondary/50">
              Interactive Tech Stack Map
            </span>
            <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-secondary/50">
              Hover to Highlight
            </span>
          </div>

        {/* Categories */}
        <div className="space-y-20 md:space-y-28">
          {skillsData.map((section, index) => (
            <div
              key={section.category}
              className="skills-category relative rounded-3xl bg-bg-medium/40 backdrop-blur-xl border border-theme/70 p-5 md:p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent-light/[0.04] blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
                <CategoryHeader
                  num={String(index + 1).padStart(2, "0")}
                  title={section.category}
                  description={section.description}
                />
                <div className="md:col-span-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 skill-tile">
                  {section.skills.map((skill, i) => (
                    <SkillTile
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={0.1 + i * 0.05}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
