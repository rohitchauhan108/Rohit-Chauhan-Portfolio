"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ServicesProps } from '@/types/service';
import { validateServices } from '@/utils/validation';
import { 
  Code2, 
  Layers, 
  Database, 
  Package, 
  ShoppingBag, 
  Server, 
  Globe,
  ArrowRight,
  Sparkles,
  LucideIcon
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Database,
  Package,
  ShoppingBag,
  Server,
  Globe,
};

/**
 * Services component displaying all technical offerings
 * Validates Requirements 3.1-3.10, 6.1-6.5
 */
export default function Services({ services }: ServicesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Validate and filter services (Requirement 8.3)
  const validServices = validateServices(services);

  // Add GSAP scroll animations
  useEffect(() => {
    if (validServices.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [validServices]);

  // Display placeholder if no valid services
  if (validServices.length === 0) {
    return (
      <section id="services" className="relative px-4 md:px-20 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-thin tracking-wide mb-16 text-accent-light uppercase">
            Services
          </h2>
          <p className="text-secondary text-lg">No services available</p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" ref={containerRef} className="relative px-4 md:px-20 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tighter mb-16 text-accent-light">
          Services
        </h2>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop (Requirements 9.2, 9.3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {validServices.map((service) => {
            const Icon = iconMap[service.iconName] || Code2;

            return (
              <div
                key={service.id}
                className="service-card group relative border border-theme/70 bg-bg-medium/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent-light/50 hover:bg-bg-medium hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent-light/10 hover:rotate-[0.3deg]"
                data-cursor-hover
              >
                {/* Gradient background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-light/0 via-accent-light/0 to-accent-light/0 group-hover:from-accent-light/10 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-700 pointer-events-none" />
                
                {/* Animated border shimmer */}
                <div className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 50%, transparent) 0%, transparent 40%, transparent 60%, color-mix(in srgb, var(--primary) 30%, transparent) 100%)"}} />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-light/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-7">
                    <div className="relative w-14 h-14 rounded-2xl bg-accent-light/10 border border-accent-light/20 flex items-center justify-center group-hover:bg-accent-light group-hover:border-accent-light group-hover:shadow-xl group-hover:shadow-accent-light/30 group-hover:scale-110 transition-all duration-500 overflow-hidden">
                      {/* Shine sweep on icon */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <Icon className="w-6 h-6 text-accent-light group-hover:text-bg-dark transition-colors duration-500 relative z-10" />
                    </div>
                  </div>

                  {/* Title + sparkle */}
                  <div className="flex items-start gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-accent-light group-hover:tracking-wide transition-all duration-500">
                      {service.title}
                    </h3>
                    <Sparkles className="w-4 h-4 text-accent-light/0 group-hover:text-accent-light group-hover:rotate-12 transition-all duration-500 mt-1 flex-shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="text-secondary/90 leading-relaxed mb-6 text-sm md:text-base group-hover:text-secondary transition-colors duration-500">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  {service.technologies && service.technologies.length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-semibold mb-3 group-hover:text-accent-light/80 transition-colors duration-500">
                        — Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 text-[11px] rounded-lg bg-white/[0.03] border border-theme/70 text-secondary group-hover:border-accent-light/40 group-hover:bg-accent-light/10 group-hover:text-accent-light group-hover:scale-105 transition-all duration-400"
                            style={{transitionDelay: `${index * 30}ms`}}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {service.features && service.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-semibold mb-3 group-hover:text-accent-light/80 transition-colors duration-500">
                        — Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li
                            key={index}
                            className="text-xs text-secondary/90 flex items-start gap-2.5 group-hover:text-secondary transition-colors duration-500"
                            style={{transitionDelay: `${index * 50}ms`}}
                          >
                            <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-accent-light/40 group-hover:bg-accent-light group-hover:shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_80%,transparent)] group-hover:scale-125 transition-all duration-400 flex-shrink-0" />
                            <span className="group-hover:translate-x-0.5 transition-transform duration-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA arrow */}
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-secondary/30 group-hover:text-accent-light transition-all duration-500 pt-2 border-t border-theme/0 group-hover:border-theme/50">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
