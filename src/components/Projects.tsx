"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ExternalLink, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

import { bioData } from "@/data/bio";

const projects = (bioData?.projects ?? []).map((project, index) => ({
  id: index + 1,
  title: project.title,
  year: "2024-2025",
  description: project.description,
  liveUrl: project.url,
  techStack: project.tech,
  category: project.category,
}));

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-header", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      const sections = gsap.utils.toArray<HTMLElement>(".project-row");
      sections.forEach((section, idx) => {
        const mockup = section.querySelector(".browser-mockup");

        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          delay: idx * 0.05,
        });

        if (mockup) {
          gsap.to(mockup, {
            scale: 1.04,
            y: -10,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.8,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="py-24 px-4 md:px-10 lg:px-16 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-16 -left-20 w-[32rem] h-[32rem] rounded-full bg-accent-light/[0.07] blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute bottom-40 -right-10 w-[30rem] h-[30rem] rounded-full bg-accent-light/[0.05] blur-3xl animate-pulse" style={{ animationDuration: "12s", animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[30%] w-[24rem] h-[24rem] rounded-full bg-accent-light/[0.03] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          topLabel="Portfolio"
          title="My Portfolio"
          description="A curated showcase of projects I&apos;ve designed, engineered, and shipped — from full-stack applications to creative digital experiences."
          className="projects-header"
          badge={`${projects.length}+ Projects`}
          extraText="Selected Works · 2026"
        />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-light/50 to-transparent" />
          <div className="flex justify-between mt-4">
            <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-secondary/50">
              {projects.length}+ Selected Projects
            </span>
            <span className="hidden md:block text-[10px] tracking-[0.35em] font-bold uppercase text-secondary/50">
              Interactive Case Studies
            </span>
          </div>

        <div className="flex flex-col gap-20 md:gap-28 lg:gap-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-row group flex flex-col gap-12 relative"
            >
              {/* Project Section Header */}
              <div className="relative rounded-3xl bg-bg-medium/40 backdrop-blur-xl border border-theme/70 p-5 md:p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent-light/[0.04] blur-3xl pointer-events-none" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
                  <div className="md:col-span-12 mb-0">
                    <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 pb-6 border-b border-theme/70 relative overflow-hidden">
                      <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-accent-light/5 blur-3xl pointer-events-none" />
                      <div className="flex items-end gap-5 md:gap-7 shrink-0">
                        <div className="flex flex-col items-start">
                          <span className="text-[10px] tracking-[0.4em] font-bold text-accent-light/80 uppercase mb-2">
                            Project
                          </span>
                          <div className="flex items-baseline gap-3">
                            <span className="text-5xl md:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-b from-accent-light to-accent-light/30 leading-none">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="w-12 h-px bg-accent-light/50 hidden sm:block" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl md:text-4xl font-extrabold font-heading tracking-tight text-foreground mb-2">
                          {project.title}
                        </h2>
                        <p className="text-secondary text-sm md:text-[15px] leading-relaxed max-w-2xl">
                          {project.category} · Built with modern web technologies
                        </p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="px-4 py-2 rounded-xl bg-white/[0.03] border border-theme/60 text-[10px] uppercase tracking-[0.25em] font-bold text-secondary/80">
                          {project.year}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] tracking-[0.3em] font-bold text-secondary/60 uppercase hidden md:block">
                            LIVE
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                      <div className="lg:col-span-7">
                        <p className="uppercase text-[10px] tracking-[0.35em] font-bold text-secondary/60 mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                          TECHNOLOGY STACK
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2.5 rounded-xl bg-bg-medium/60 backdrop-blur-xl border border-theme/70 text-secondary/90 text-xs font-bold tracking-wide uppercase"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-5 rounded-2xl bg-bg-medium/40 backdrop-blur-xl border border-theme/70 p-5">
                        <p className="uppercase text-[10px] tracking-[0.35em] font-bold text-secondary/60 mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          ABOUT PROJECT
                        </p>
                        <p className="text-secondary/90 text-sm md:text-base font-normal leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="lg:col-span-4 justify-self-start group relative flex items-center gap-3 px-5 py-3 rounded-xl bg-accent-light text-bg-dark hover:bg-foreground transition-all duration-300 shadow-lg shadow-accent-light/20 hover:shadow-accent-light/40 hover:-translate-y-0.5 overflow-hidden text-xs tracking-[0.2em] uppercase font-black"
                      >
                        <span className="relative z-10">Visit Live Site</span>
                        <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOP: FULL DESKTOP FRAME */}
              <div className="w-full project-content">
                <div
                  className="browser-mockup w-full bg-bg-medium/60 backdrop-blur-xl border-2 border-theme/70 rounded-3xl overflow-hidden transition-all duration-300 group-hover:border-black dark:group-hover:border-white group-hover:shadow-2xl"
                >
                  {/* Browser Top Bar */}
                  <div className="h-11 bg-bg-medium/90 backdrop-blur-xl flex items-center px-4 border-b border-theme/70">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500 transition-all duration-300 hover:scale-125 cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500 transition-all duration-300 hover:scale-125 cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-green-500 transition-all duration-300 hover:scale-125 cursor-pointer" />
                    </div>
                    <div className="flex-1 mx-6 px-4 py-1.5 rounded-xl bg-white/[0.03] border border-theme/60 text-[10px] text-secondary font-sans text-center truncate font-mono tracking-wide">
                      {project.liveUrl.replace("https://", "").replace("www.", "")}
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-theme/60 flex items-center justify-center">
                      <ExternalLink className="w-3.5 h-3.5 text-secondary/60" />
                    </div>
                  </div>

                  {/* Live Website Area */}
                  <div className="h-[350px] md:h-[480px] lg:h-[560px] bg-white overflow-hidden relative">
                    <iframe
                      src={project.liveUrl}
                      className="w-full h-full border-none"
                      title={project.title}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-medium/30 via-transparent to-transparent pointer-events-none opacity-40" />
                  </div>
                </div>

                <p className="text-center text-xs text-secondary/70 mt-6 tracking-widest uppercase flex items-center justify-center gap-2">
                  <Users className="w-3 h-3" />
                  Desktop View · Interaction Enabled · Hover frame for details
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
