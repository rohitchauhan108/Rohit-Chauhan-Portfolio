"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=2055&auto=format&fit=crop", title: "Winter Silence" },
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop", title: "Urban Rhythm" },
  { src: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?q=80&w=2070&auto=format&fit=crop", title: "Neon Nights" },
  { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", title: "Digital Dreams" },
  { src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop", title: "Code & Coffee" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop", title: "Mountain Peak" },
];

export default function Gallery() {
  return (
    <section className="py-24 px-4 md:px-20 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-theme pb-6 mb-16">
          <h2 className="text-sm font-sans tracking-[0.3em] text-secondary/60 uppercase">
            Visual Gallery
          </h2>
          <span className="text-sm text-secondary/60 font-sans tracking-[0.2em]">/ moments</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className={`relative group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-[4/5]"
              }`}
            >
              <div className="w-full h-full relative overflow-hidden rounded-sm bg-bg-light transition-colors duration-300">
                 <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                 <Image
                   src={item.src}
                   alt={item.title}
                   fill
                   className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                 />
              </div>
              
              <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-foreground text-xs tracking-[0.2em] uppercase font-sans border-l border-foreground pl-3">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
