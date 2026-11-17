"use client";

import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { MapPin, GraduationCap, User, Heart, Sparkles, Code2, Briefcase, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

import { bioData } from "@/data/bio";
import { skillsData } from "@/data/skills";
import { experienceData } from "@/data/experience";
import SectionHeader from "@/components/SectionHeader";

export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const totalTech = useMemo(
    () => (skillsData ?? []).reduce((a, c) => a + (c?.skills?.length ?? 0), 0),
    []
  );
  const totalExperience = useMemo(() => (experienceData ?? []).filter(e => e.type === "work").length, []);

  useEffect(() => {
    let ctx: gsap.Context | null = null;
    try {
      ctx = gsap.context(() => {
        if (typeof document === "undefined") return;

        const has = (s: string) => !!document.querySelector(s);

        if (has(".about-header")) {
          gsap.from(".about-header", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          });
        }

        if (has(".bio-section") && has(".bio-container")) {
          gsap.from(".bio-section", {
            scrollTrigger: {
              trigger: ".bio-container",
              start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
          });
        }

        if (has(".bio-text") && has(".bio-container")) {
          gsap.from(".bio-text", {
            scrollTrigger: {
              trigger: ".bio-container",
              start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            delay: 0.2,
            ease: "power3.out",
          });
        }

        if (has(".image-container") && has(".bio-container")) {
          gsap.from(".image-container", {
            scrollTrigger: {
              trigger: ".bio-container",
              start: "top 80%",
            },
            x: 50,
            opacity: 0,
            duration: 1.2,
            delay: 0.3,
            ease: "power3.out",
          });
        }

        if (has(".about-image") && has(".image-container")) {
          gsap.to(".about-image", {
            scrollTrigger: {
              trigger: ".image-container",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            y: 40,
            ease: "none",
          });
        }
      }, containerRef);
    } catch (err) {
      console.error("About page animations failed:", err);
    }

    return () => {
      try {
        if (ctx) ctx.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      } catch {
        // noop
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen py-20 md:py-24 px-4 md:px-6 lg:px-10 xl:px-14 relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-accent-light/[0.07] blur-3xl animate-pulse" style={{ animationDuration: "9s" }} />
        <div className="absolute bottom-40 -right-10 w-[32rem] h-[32rem] rounded-full bg-accent-light/[0.05] blur-3xl animate-pulse" style={{ animationDuration: "11s", animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/3 w-[20rem] h-[20rem] rounded-full bg-accent-light/[0.04] blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          topLabel="About Me"
          title="About"
          description={bioData?.heroDescription ?? bioData?.tagline ?? ""}
          className="about-header"
          badge={`${totalExperience}+ Roles`}
          extraText="Personal Profile · 2026"
        />

        {/* Content Section */}
        <div className="bio-container grid grid-cols-1 gap-8 md:gap-10 xl:gap-14">
          {/* Bio Text */}
          <div className="space-y-8 md:space-y-10 order-2">
            <div className="bio-section h-full relative rounded-2xl bg-bg-medium/90 backdrop-blur-xl border border-accent-light/30 p-6 md:p-8 lg:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent-light/[0.06] blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6 mb-8 pb-6 border-b border-theme/70 relative overflow-hidden">
                  <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-accent-light/[0.06] blur-3xl pointer-events-none" />
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl md:text-4xl font-extrabold font-heading tracking-tight text-foreground mb-2">
                      My Story
                    </h2>
                    <p className="text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
                      The journey so far — passion, persistence, and code.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] tracking-[0.3em] font-black text-secondary uppercase">
                      ACTIVE
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="bio-text text-xl md:text-3xl font-extrabold text-foreground leading-tight font-heading">
                    {bioData?.mainBio?.[0] ?? ""}
                  </h2>
                  <div className="bio-text space-y-5 text-secondary text-sm md:text-base leading-relaxed font-sans">
                    {(bioData?.mainBio ?? []).slice(1).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards Grid */}
          </div>

          {/* Image/Visual Side */}
          <div className="image-container h-full order-1">
            <div className="relative h-full w-full overflow-hidden group">
              <div className="relative flex h-full flex-col rounded-2xl overflow-hidden border border-accent-light/30 p-3 bg-bg-medium/90 backdrop-blur-xl" style={{ boxShadow: "0 20px 60px -20px color-mix(in srgb, var(--primary) 30%, transparent)" }}>
                <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between px-4 py-2.5 rounded-xl bg-bg-medium/90 backdrop-blur-xl border border-accent-light/30">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[9px] tracking-[0.25em] font-black text-secondary uppercase">
                    profile.png
                  </span>
                  <span className="w-6" />
                </div>

                <div className="about-image relative mt-10 min-h-[40rem] md:min-h-[48rem] flex-1 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/profile.png"
                    alt="Rohit Chauhan Portrait"
                    fill
                    className="object-contain transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
