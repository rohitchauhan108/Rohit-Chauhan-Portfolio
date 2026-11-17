"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ExperienceProps } from '@/types/experience';
import { validateExperiences } from '@/utils/validation';
import { Briefcase, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Experience component displaying a timeline of work experience and education
 * Validates Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 6.1, 6.2, 6.3, 6.4, 6.5
 */
export default function Experience({ experiences }: ExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Validate and filter experiences (Requirement 7.4)
  const validExperiences = validateExperiences(experiences);

  // Sort chronologically - newest first (Requirement 2.2)
  const sortedExperiences = [...validExperiences].sort((a, b) => {
    const getEndDate = (exp: typeof a) => {
      if (exp.period.end === 'Present') return new Date();
      return new Date(exp.period.end);
    };
    return getEndDate(b).getTime() - getEndDate(a).getTime();
  });

  // Add GSAP scroll animations (Requirements 2.6, 6.1, 6.2, 6.3, 6.4, 6.5)
  useEffect(() => {
    if (sortedExperiences.length === 0) return;

    const ctx = gsap.context(() => {
      // Animate each experience item with staggered timing
      gsap.from(".experience-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Trigger at 80% viewport visibility (Requirement 6.1)
        },
        opacity: 0, // Animate opacity from 0 to 1 (Requirement 6.3)
        y: 50, // Animate y position from 50px to 0 (Requirement 6.4)
        duration: 1.5, // Max 1.5 seconds duration (Requirement 6.5)
        stagger: 0.1, // 0.1s delay between items (Requirement 6.2)
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [sortedExperiences]);

  // Display placeholder if no valid experiences (Requirement 7.5)
  if (sortedExperiences.length === 0) {
    return (
      <section id="experience" className="relative px-4 md:px-20 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-thin tracking-wide mb-16 text-accent-light uppercase">
            Experience
          </h2>
          <p className="text-secondary text-lg">No experience data available</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" ref={containerRef} className="relative px-4 md:px-20 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-thin tracking-wide mb-16 text-accent-light uppercase">
          Experience
        </h2>

        {/* Timeline container with vertical line connector */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-secondary/20" />

          {/* Experience items */}
          <div className="space-y-12 md:space-y-16">
            {sortedExperiences.map((item) => {
              // Distinguish between work and education (Requirement 2.5)
              const isWork = item.type === 'work';
              const Icon = isWork ? Briefcase : GraduationCap;
              const iconBgColor = isWork ? 'bg-accent-light' : 'bg-secondary';

              return (
                <div
                  key={item.id}
                  className="relative pl-8 md:pl-24 experience-item"
                >
                  {/* Timeline dot/icon */}
                  <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-8 h-8 rounded-full ${iconBgColor} flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-bg-medium" />
                  </div>

                  {/* Experience card (Requirement 2.3) */}
                  <div className="border border-secondary/20 bg-bg-light/50 p-6 md:p-8 rounded-sm">
                    {/* Header with title and organization */}
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold font-heading text-accent-light mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-secondary font-medium">
                        {item.organization}
                      </p>
                    </div>

                    {/* Location and period */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 text-secondary/80 text-sm">
                      <span>{item.location}</span>
                      <span className="hidden md:inline">•</span>
                      <span>
                        {item.period.start} - {item.period.end}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-secondary leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Conditional rendering for technologies (Requirement 2.4) */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs border border-secondary/30 text-secondary rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


