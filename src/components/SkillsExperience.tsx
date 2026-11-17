"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { skillsSummary } from "@/data/skills";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-tag", {
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-20 px-4 md:px-20 z-10 relative">
      <div className="max-w-7xl mx-auto skills-container mt-12 md:mt-0">
        <div className="border-b border-theme pb-4 mb-12">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest text-foreground font-heading">
            SKILLS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillsSummary.map((skillGroup, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg text-foreground font-bold tracking-[0.2em] font-heading">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-tag px-4 py-2 rounded-full border border-secondary text-secondary text-sm font-medium hover:border-foreground hover:text-background hover:bg-foreground transition-colors cursor-default font-sans bg-transparent"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
