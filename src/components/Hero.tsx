"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { MousePointer2, ChevronDown, Zap, Code2, Briefcase, Award } from "lucide-react";

import { bioData } from "@/data/bio";
import { skillsData } from "@/data/skills";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const scrollRequestRef = useRef<number | null>(null);

  const SCROLL_SPEED = 2.5;

  const totalTech = useMemo(
    () => skillsData.reduce((a, c) => a + c.skills.length, 0),
    []
  );
  const totalProjects = useMemo(() => bioData.projects.length, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5,
      });
      gsap.from(".hero-subtext", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 1,
      });
      gsap.from(".hero-desc", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 1.2,
      });
      // fromTo (explicit end state): .hero-stat has a CSS opacity transition via the
      // global `.group` rule, which made gsap.from() read a mid-transition value in
      // React StrictMode and leave the tiles invisible.
      gsap.fromTo(
        ".hero-stat",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "back.out(1.6)",
          delay: 1.4,
          clearProps: "transform,opacity",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const autoScroll = () => {
      if (isHovering) {
        const currentScroll = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        if (currentScroll < maxScroll) {
          window.scrollBy({
            top: SCROLL_SPEED,
            behavior: "auto"
          });
          scrollRequestRef.current = requestAnimationFrame(autoScroll);
        } else {
          setIsHovering(false);
        }
      }
    };

    if (isHovering) {
      scrollRequestRef.current = requestAnimationFrame(autoScroll);
    } else if (scrollRequestRef.current) {
      cancelAnimationFrame(scrollRequestRef.current);
    }

    return () => {
      if (scrollRequestRef.current) {
        cancelAnimationFrame(scrollRequestRef.current);
      }
    };
  }, [isHovering]);

  const nameParts = bioData.name.split(" ");

  const stats = [
    { k: "03+", v: "Years Exp", icon: <Briefcase className="w-3.5 h-3.5" /> },
    { k: totalProjects.toString().padStart(2, "0"), v: "Projects", icon: <Code2 className="w-3.5 h-3.5" /> },
    { k: totalTech.toString().padStart(2, "0"), v: "Tech Stack", icon: <Zap className="w-3.5 h-3.5" /> },
    { k: "100%", v: "Dedication", icon: <Award className="w-3.5 h-3.5" /> },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex flex-col justify-center min-h-screen py-24 px-4 md:px-10 lg:px-16 overflow-hidden cursor-default"
    >
      {/* Hero line-art: concentric orbit rings + crosshair (no photo, so nothing fights the theme) */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <motion.svg
          className="absolute -right-[18%] top-1/2 -translate-y-1/2 w-[62rem] max-w-none h-[62rem] text-accent-light"
          viewBox="0 0 800 800"
          fill="none"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <g stroke="currentColor" strokeWidth="1" opacity="0.28">
            <circle cx="400" cy="400" r="380" />
            <circle cx="400" cy="400" r="300" strokeDasharray="2 10" />
            <circle cx="400" cy="400" r="220" />
            <circle cx="400" cy="400" r="140" strokeDasharray="6 8" />
            <line x1="0" y1="400" x2="800" y2="400" opacity="0.5" />
            <line x1="400" y1="0" x2="400" y2="800" opacity="0.5" />
          </g>
          <motion.g
            style={{ originX: "400px", originY: "400px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          >
            <circle cx="400" cy="20" r="6" fill="currentColor" />
            <circle cx="400" cy="20" r="14" stroke="currentColor" opacity="0.4" />
          </motion.g>
          <motion.g
            style={{ originX: "400px", originY: "400px" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 90, ease: "linear", repeat: Infinity }}
          >
            <circle cx="180" cy="400" r="4" fill="currentColor" />
          </motion.g>
        </motion.svg>

        {/* readability veil on the text side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--background) 0%, color-mix(in srgb, var(--background) 60%, transparent) 38%, transparent 70%)",
          }}
        />

        <div className="absolute top-10 -left-20 w-[32rem] h-[32rem] rounded-full bg-accent-light/[0.07] blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-20 -right-10 w-[28rem] h-[28rem] rounded-full bg-accent-light/[0.06] blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "1s" }} />
      </div>

      {/* Auto-Scroll indicator */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-12 right-12 z-[100] hidden md:flex items-center gap-3 px-6 py-3 bg-bg-medium/70 backdrop-blur-xl border border-theme/70 rounded-full text-accent-light transition-colors duration-300 shadow-2xl"
            style={{ boxShadow: "0 10px 40px -12px color-mix(in srgb, var(--primary) 25%, transparent)" }}
          >
            <div className="relative">
              <MousePointer2 className="w-4 h-4 animate-pulse" />
              <div className="absolute inset-0 bg-accent-light/20 blur-md rounded-full animate-ping" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold">Auto-Scrolling</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="z-10 flex flex-col items-start mt-8 md:mt-4 max-w-7xl mx-auto w-full relative">
        {/* Hero Header Tag */}
        <div className="hero-subtext font-label flex items-center gap-3 text-[11px] text-accent-light font-medium mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent-light/10 border border-accent-light/25 flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-accent-light"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.9)] animate-pulse" />
            Portfolio 2026 · Available for Work
          </span>
        </div>

        {/* Main Title */}
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-10">
          <div className="flex-1">
            <h1 className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] font-extrabold tracking-[-0.045em] text-foreground font-heading leading-[0.88] mb-8">
              {nameParts.map((part, idx) => {
                const isLast = idx === nameParts.length - 1 && nameParts.length > 1;
                return (
                  <div key={idx} className="overflow-hidden pb-[0.12em] -mb-[0.12em]">
                    <span className={`hero-text inline-block ${isLast ? "font-accent text-accent-light tracking-[-0.03em] pr-[0.08em]" : ""}`}>
                      {part}
                      {idx === nameParts.length - 1 && <span className="text-accent-light not-italic font-heading">.</span>}
                    </span>
                  </div>
                );
              })}
            </h1>

            <div className="ruler w-full mb-6" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-3xl mt-4">
              <div className="flex-none flex items-center gap-3">
                <div className="h-px w-10 bg-gradient-to-r from-accent-light/80 to-transparent" />
                <p className="hero-subtext font-label text-[12px] md:text-[13px] text-foreground font-medium">
                  {bioData.title}
                </p>
              </div>
            </div>

            <div className="mt-10 max-w-2xl space-y-4">
              <p className="hero-desc text-[17px] md:text-xl text-foreground/90 font-normal font-sans leading-relaxed">
                {bioData.tagline}
              </p>
              <p className="hero-desc text-sm md:text-base text-secondary font-normal font-sans leading-relaxed">
                {bioData.heroDescription}
              </p>
            </div>
          </div>

          {/* Stats Tiles */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 shrink-0 w-full lg:w-auto">
            {stats.map((s, i) => (
              <div
                key={s.v}
                data-cursor-hover
                className="hero-stat group relative rounded-2xl bg-bg-medium/60 backdrop-blur-xl border border-theme/70 px-4 py-4 md:px-5 md:py-5 text-center hover:border-accent-light/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                style={{
                  boxShadow: "0 8px 28px -14px color-mix(in srgb, var(--primary) 25%, transparent)",
                }}
              >
                <div
                  className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(closest-side, color-mix(in srgb, var(--primary) 20%, transparent), transparent 70%)",
                  }}
                />
                <div className="relative z-10 flex items-center justify-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-accent-light/10 border border-accent-light/20 flex items-center justify-center text-accent-light group-hover:scale-110 group-hover:bg-accent-light group-hover:text-bg-dark transition-all duration-400">
                    {s.icon}
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(16,185,129,0.8)] animate-pulse" />
                </div>
                <div className="text-2xl md:text-3xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-accent-light to-accent-light/50">
                  {s.k}
                </div>
                <div className="text-[9px] md:text-[10px] tracking-[0.25em] font-bold uppercase text-secondary/60 mt-1.5">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-light/40 to-transparent" />
        <div className="flex justify-between mt-4 w-full">
          <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-secondary/50 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-light/40 animate-pulse" />
            Scroll to Explore
          </span>
          <span className="hidden md:flex text-[10px] tracking-[0.35em] font-bold uppercase text-secondary/50 items-center gap-2">
            Hover Hero to Auto-Scroll
            <ChevronDown className="w-3 h-3 animate-bounce" />
          </span>
        </div>
      </div>
    </section>
  );
}
