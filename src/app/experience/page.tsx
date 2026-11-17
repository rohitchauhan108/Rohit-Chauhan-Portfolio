"use client";

import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Calendar, MapPin, Award, Code2, TrendingUp, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

import { experienceData } from "@/data/experience";
import SectionHeader from "@/components/SectionHeader";

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const workExp = useMemo(() => experienceData.filter(e => e.type === "work"), []);
  const educationExp = useMemo(() => experienceData.filter(e => e.type === "education"), []);
  const totalAchievements = useMemo(() => experienceData.reduce((a, c) => a + c.achievements.length, 0), []);
  const totalTech = useMemo(() => {
    const all = new Set<string>();
    experienceData.forEach(e => e.technologies?.forEach(t => all.add(t)));
    return all.size;
  }, [experienceData]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-header", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".section-card", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      const items = gsap.utils.toArray<HTMLElement>(".experience-item");
      items.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1.1,
          delay: index * 0.08,
          ease: "power3.out",
        });
      });

      const achievements = gsap.utils.toArray<HTMLElement>(".achievement-item");
      achievements.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
          },
          x: -15,
          opacity: 0,
          duration: 0.7,
          delay: index * 0.03,
          ease: "back.out(1.4)",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen py-24 px-4 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-accent-light/[0.07] blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute bottom-32 -right-10 w-[32rem] h-[32rem] rounded-full bg-accent-light/[0.05] blur-3xl animate-pulse" style={{ animationDuration: "12s", animationDelay: "2s" }} />
        <div className="absolute top-[35%] left-[40%] w-[22rem] h-[22rem] rounded-full bg-accent-light/[0.03] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          topLabel="Career Journey"
          title="Experience"
          description="A timeline of my professional growth, technical mastery, and the impact I&apos;ve made across various roles, organizations, and educational milestones."
          className="experience-header"
          badge={`${experienceData.length}+ Milestones`}
          extraText="Experience Timeline · 2026"
        />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-light/50 to-transparent" />
          <div className="flex justify-between mt-4">
            <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-secondary/50">
              {experienceData.length}+ Milestones
            </span>
            <span className="hidden md:block text-[10px] tracking-[0.35em] font-bold uppercase text-secondary/50">
              Scroll to Explore Journey
            </span>
          </div>

        {/* Experience Sections */}
        <div className="timeline-container space-y-16 md:space-y-20">
          {/* Work Experience Section */}
          <div className="section-card relative rounded-3xl bg-bg-medium/40 backdrop-blur-xl border border-theme/70 p-5 md:p-8 lg:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent-light/[0.04] blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 pb-6 border-b border-theme/70 relative overflow-hidden mb-10 md:mb-14">
                <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-accent-light/5 blur-3xl pointer-events-none" />
                <div className="flex items-end gap-5 md:gap-7 shrink-0">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] tracking-[0.4em] font-bold text-accent-light/80 uppercase mb-2">
                      Section
                    </span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl md:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-b from-accent-light to-accent-light/30 leading-none">
                        01
                      </span>
                      <span className="w-12 h-px bg-accent-light/50 hidden sm:block" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-accent-light/10 border border-accent-light/20 flex items-center justify-center text-accent-light">
                      <Briefcase className="w-4.5 h-4.5" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold font-heading tracking-tight text-foreground">
                      Work Experience
                    </h2>
                  </div>
                  <p className="text-secondary text-sm md:text-[15px] leading-relaxed max-w-2xl">
                    Professional roles that shaped my engineering expertise and leadership capabilities.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] tracking-[0.3em] font-bold text-secondary/60 uppercase">
                    {workExp.length} Roles
                  </span>
                </div>
              </div>

              <div className="space-y-8 md:space-y-12">
                {workExp.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="experience-item relative pl-6 md:pl-10 before:content-[''] before:absolute before:left-[11px] md:before:left-[19px] before:top-3 before:bottom-[-60px] before:w-px before:bg-gradient-to-b before:from-accent-light/40 before:via-theme/50 before:to-transparent last:before:hidden"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 md:w-10 md:h-10 rounded-full bg-bg-medium border-2 border-accent-light/60 flex items-center justify-center shadow-[0_0_0_4px_color-mix(in_srgb,var(--primary)_8%,transparent)] z-10 group hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent-light shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_70%,transparent)]" />
                    </div>

                    <div className="relative rounded-2xl bg-bg-medium/60 backdrop-blur-xl border border-theme/70 p-5 md:p-8 overflow-hidden hover:border-accent-light/40 transition-all duration-500 hover:-translate-y-0.5" style={{ boxShadow: "0 12px 36px -18px color-mix(in srgb, var(--primary) 25%, transparent)" }}>
                      <div className="absolute -top-20 -right-10 w-52 h-52 rounded-full bg-accent-light/[0.05] blur-3xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-3">
                              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent-light/10 border border-accent-light/20">
                                <Calendar className="w-3 h-3 text-accent-light" />
                                <span className="text-[10px] tracking-[0.25em] font-bold text-accent-light uppercase">
                                  {exp.period.start} — {exp.period.end}
                                </span>
                              </div>
                              {exp.location && (
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-theme/60">
                                  <MapPin className="w-3 h-3 text-secondary/70" />
                                  <span className="text-[10px] tracking-[0.25em] font-bold text-secondary/80 uppercase">
                                    {exp.location}
                                  </span>
                                </div>
                              )}
                            </div>
                            <h2 className="text-xl md:text-3xl font-bold tracking-wide text-foreground font-heading leading-tight">
                              {exp.organization}
                            </h2>
                            <p className="text-[12px] md:text-sm text-accent-light font-bold uppercase tracking-[0.2em]">
                              {exp.title}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="block text-5xl md:text-7xl font-black font-heading text-white/[0.04] select-none leading-none">
                              0{index + 1}
                            </span>
                          </div>
                        </div>

                        <p className="text-secondary/90 font-normal leading-relaxed text-sm md:text-base mb-7 max-w-3xl">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <p className="text-[10px] tracking-[0.35em] font-bold uppercase text-secondary/60 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                            Key Achievements
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                            {exp.achievements.map((achievement, i) => (
                              <div key={i} className="achievement-item flex items-start gap-3 group/item">
                                <div className="w-5 h-5 mt-0.5 rounded-lg bg-accent-light/10 border border-accent-light/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent-light group-hover/item:scale-110 transition-all duration-300">
                                  <CheckCircle2 className="w-3 h-3 text-accent-light group-hover/item:text-bg-dark transition-colors" />
                                </div>
                                <p className="text-xs md:text-sm text-secondary/90 font-normal leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Tags */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-5 border-t border-theme/50">
                            {exp.technologies.map((t, i) => (
                              <span
                                key={t}
                                className="px-3 py-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] rounded-xl bg-bg-medium/80 border border-theme/70 text-secondary/90 hover:border-accent-light/40 hover:bg-accent-light/10 hover:text-accent-light hover:scale-105 transition-all duration-400 font-bold"
                                style={{ transitionDelay: `${i * 20}ms` }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          {educationExp.length > 0 && (
            <div className="section-card relative rounded-3xl bg-bg-medium/40 backdrop-blur-xl border border-theme/70 p-5 md:p-8 lg:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent-light/[0.04] blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 pb-6 border-b border-theme/70 relative overflow-hidden mb-10 md:mb-14">
                  <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-accent-light/5 blur-3xl pointer-events-none" />
                  <div className="flex items-end gap-5 md:gap-7 shrink-0">
                    <div className="flex flex-col items-start">
                      <span className="text-[10px] tracking-[0.4em] font-bold text-accent-light/80 uppercase mb-2">
                        Section
                      </span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-5xl md:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-b from-accent-light to-accent-light/30 leading-none">
                          02
                        </span>
                        <span className="w-12 h-px bg-accent-light/50 hidden sm:block" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-accent-light/10 border border-accent-light/20 flex items-center justify-center text-accent-light">
                        <GraduationCap className="w-4.5 h-4.5" />
                      </div>
                      <h2 className="text-2xl md:text-4xl font-extrabold font-heading tracking-tight text-foreground">
                        Education
                      </h2>
                    </div>
                    <p className="text-secondary text-sm md:text-[15px] leading-relaxed max-w-2xl">
                      Academic foundation & certifications that built my theoretical expertise.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] tracking-[0.3em] font-bold text-secondary/60 uppercase">
                      {educationExp.length} Credentials
                    </span>
                  </div>
                </div>

                <div className="space-y-8 md:space-y-12">
                  {educationExp.map((exp, index) => (
                    <div
                      key={exp.id}
                      className="experience-item relative pl-6 md:pl-10 before:content-[''] before:absolute before:left-[11px] md:before:left-[19px] before:top-3 before:bottom-[-60px] before:w-px before:bg-gradient-to-b before:from-accent-light/40 before:via-theme/50 before:to-transparent last:before:hidden"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-1.5 w-6 h-6 md:w-10 md:h-10 rounded-full bg-bg-medium border-2 border-accent-light/60 flex items-center justify-center shadow-[0_0_0_4px_color-mix(in_srgb,var(--primary)_8%,transparent)] z-10 group hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent-light shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_70%,transparent)]" />
                      </div>

                      <div className="relative rounded-2xl bg-bg-medium/60 backdrop-blur-xl border border-theme/70 p-5 md:p-8 overflow-hidden hover:border-accent-light/40 transition-all duration-500 hover:-translate-y-0.5" style={{ boxShadow: "0 12px 36px -18px color-mix(in srgb, var(--primary) 25%, transparent)" }}>
                        <div className="absolute -top-20 -right-10 w-52 h-52 rounded-full bg-accent-light/[0.05] blur-3xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative z-10">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div className="space-y-2">
                              <div className="flex flex-wrap items-center gap-3">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent-light/10 border border-accent-light/20">
                                  <Calendar className="w-3 h-3 text-accent-light" />
                                  <span className="text-[10px] tracking-[0.25em] font-bold text-accent-light uppercase">
                                    {exp.period.start} — {exp.period.end}
                                  </span>
                                </div>
                                {exp.location && (
                                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-theme/60">
                                    <MapPin className="w-3 h-3 text-secondary/70" />
                                    <span className="text-[10px] tracking-[0.25em] font-bold text-secondary/80 uppercase">
                                      {exp.location}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <h2 className="text-xl md:text-3xl font-bold tracking-wide text-foreground font-heading leading-tight">
                                {exp.organization}
                              </h2>
                              <p className="text-[12px] md:text-sm text-accent-light font-bold uppercase tracking-[0.2em]">
                                {exp.title}
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="block text-5xl md:text-7xl font-black font-heading text-white/[0.04] select-none leading-none">
                                0{index + 1}
                              </span>
                            </div>
                          </div>

                          <p className="text-secondary/90 font-normal leading-relaxed text-sm md:text-base mb-7 max-w-3xl">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          {exp.achievements.length > 0 && (
                            <div className="mb-6">
                              <p className="text-[10px] tracking-[0.35em] font-bold uppercase text-secondary/60 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                                Highlights
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                                {exp.achievements.map((achievement, i) => (
                                  <div key={i} className="achievement-item flex items-start gap-3 group/item">
                                    <div className="w-5 h-5 mt-0.5 rounded-lg bg-accent-light/10 border border-accent-light/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent-light group-hover/item:scale-110 transition-all duration-300">
                                      <CheckCircle2 className="w-3 h-3 text-accent-light group-hover/item:text-bg-dark transition-colors" />
                                    </div>
                                    <p className="text-xs md:text-sm text-secondary/90 font-normal leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                                      {achievement}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Tech Tags */}
                          {exp.technologies && exp.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-5 border-t border-theme/50">
                              {exp.technologies.map((t, i) => (
                                <span
                                  key={t}
                                  className="px-3 py-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] rounded-xl bg-bg-medium/80 border border-theme/70 text-secondary/90 hover:border-accent-light/40 hover:bg-accent-light/10 hover:text-accent-light hover:scale-105 transition-all duration-400 font-bold"
                                  style={{ transitionDelay: `${i * 20}ms` }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
