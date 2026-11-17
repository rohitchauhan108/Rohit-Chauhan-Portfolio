"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

import { bioData } from "@/data/bio";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Parallax image
      gsap.to(".parallax-bg", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 100,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative flex flex-col py-24 md:py-32 px-4 md:px-20 z-10 gap-32"
    >
      {/* Introduction */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full max-w-7xl mx-auto">
        <div className="md:col-span-5 relative">
           <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
             <Image 
               src={bioData.profileImage}
               alt={bioData.name}
               fill
               className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
           </div>
        </div>
        
        <div className="md:col-span-7 flex flex-col justify-center space-y-12">
          <div className="border-b border-theme pb-6 reveal-text">
            <h2 className="text-sm font-heading font-bold tracking-[0.3em] text-secondary/60">
              🧠 About Me
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6 text-secondary text-base md:text-lg font-normal leading-relaxed font-sans">
              {bioData.mainBio.map((paragraph, index) => (
                <p key={index} className="reveal-text">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 reveal-text pt-8">
             <div>
               <h4 className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Education</h4>
               <p className="text-accent-light text-sm font-sans font-medium">{bioData.education}</p>
             </div>
             <div>
               <h4 className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Based In</h4>
               <p className="text-accent-light text-sm font-sans font-medium">{bioData.location}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
