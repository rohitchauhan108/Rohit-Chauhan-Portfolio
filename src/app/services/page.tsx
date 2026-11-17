"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Code2,
  Globe,
  ShoppingBag,
  Package,
  Layers,
  Database,
  LucideIcon,
  ArrowRight,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

import { servicesData } from "@/data/services";
import SectionHeader from "@/components/SectionHeader";
import { Service } from "@/types/service";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  ShoppingBag,
  Package,
  Layers,
  Database,
};

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".services-header", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Cards Animation
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-24 px-4 md:px-12 lg:px-16 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          topLabel="What I offer"
          title="Services"
          description="Tailored digital solutions ranging from high-end web applications to full-scale e-commerce ecosystems and technical infrastructure management. Everything from design to deployment — handled end-to-end."
          badge={`${servicesData.length}+ Services`}
          extraText="Solutions 2026"
          className="services-header"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {(servicesData as Service[]).map((service, index) => {
            const Icon = iconMap[service.iconName] || Code2;
            return (
              <div
                key={index}
                className="service-card relative p-7 md:p-10 border border-gray-200 bg-white rounded-2xl overflow-hidden"
              >
                {/* Huge background number */}
                <span className="absolute -top-2 -right-2 text-[120px] md:text-[160px] font-black font-heading text-gray-100 select-none leading-none">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  {/* Icon + badge row */}
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-accent-light relative z-10" />
                    </div>
                    <div className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
                        Service 0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-3 mb-5">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 font-heading leading-tight">
                      {service.title}
                    </h2>
                    <Sparkles className="w-5 h-5 text-accent-light mt-1 flex-shrink-0" />
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8 max-w-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-9">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent-light/60" />
                        <span className="text-xs md:text-[13px] uppercase tracking-[0.15em] text-gray-600 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {service.technologies?.map((t: string, i: number) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] rounded-lg bg-white border border-gray-200 text-gray-600 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-200">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                      Start a project
                    </span>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400">
                      <span>Let&apos;s talk</span>
                      <span className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
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
