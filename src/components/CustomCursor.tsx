"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const trailX = useSpring(mouseX, { stiffness: 500, damping: 40, mass: 0.25 });
  const trailY = useSpring(mouseY, { stiffness: 500, damping: 40, mass: 0.25 });
  const cursorX = useTransform(mouseX, (value) => value - 2);
  const cursorY = useTransform(mouseY, (value) => value - 2);
  const gearX = useTransform(trailX, (value) => value - 20);
  const gearY = useTransform(trailY, (value) => value - 20);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.hasAttribute("data-cursor-hover") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  const SIZE = 40; // gear svg size

  const gearLoop = {
    rotate: [0, 360],
  };

  return (
    <div className="hidden md:block pointer-events-none">
      {/* EXACT center dot at mouse point — always crisp, no lag */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div
          className="w-1 h-1 rounded-full"
          style={{
            backgroundColor: "var(--primary)",
            boxShadow:
              "0 0 6px color-mix(in srgb, var(--primary) 100%, transparent), 0 0 12px color-mix(in srgb, var(--primary) 70%, transparent), 0 0 18px color-mix(in srgb, var(--primary) 35%, transparent)",
          }}
        />
      </motion.div>

      {/* GEAR / SETTINGS ICON — trails the mouse, centered perfectly */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: gearX,
          y: gearY,
          width: SIZE,
          height: SIZE,
        }}
        animate={{
          scale: isHovering ? 1.35 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 22,
          mass: 0.35,
        }}
      >
        <motion.div
          animate={gearLoop}
          transition={{
            duration: isHovering ? 2.5 : 7,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            width: SIZE,
            height: SIZE,
            transformOrigin: "50% 50%",
          }}
        >
          <svg
            viewBox="0 0 40 40"
            width={SIZE}
            height={SIZE}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: isHovering
                ? "drop-shadow(0 0 8px color-mix(in srgb, var(--primary) 85%, transparent)) drop-shadow(0 0 18px color-mix(in srgb, var(--primary) 45%, transparent))"
                : "drop-shadow(0 0 5px color-mix(in srgb, var(--primary) 55%, transparent)) drop-shadow(0 0 12px color-mix(in srgb, var(--primary) 25%, transparent))",
              display: "block",
            }}
          >
            {/* Clean 8-tooth cog / settings gear */}
            <g>
              {/* Cog teeth outer ring */}
              <path
                d="
                  M20 3.5
                  L22.65 3.95
                  L23.45 6.45
                  L25.85 7.25
                  L27.7 5.5
                  L29.8 7.15
                  L30.3 9.75
                  L32.75 10.9
                  L33.05 13.5
                  L35.25 14.9
                  L34.95 17.55
                  L36.4 19.95
                  L34.95 22.4
                  L35.25 25.05
                  L33.05 26.45
                  L32.75 29.05
                  L30.3 30.2
                  L29.8 32.8
                  L27.7 34.45
                  L25.85 32.7
                  L23.45 33.5
                  L22.65 36
                  L20 36.45
                  L17.35 36
                  L16.55 33.5
                  L14.15 32.7
                  L12.3 34.45
                  L10.2 32.8
                  L9.7 30.2
                  L7.25 29.05
                  L6.95 26.45
                  L4.75 25.05
                  L5.05 22.4
                  L3.6 19.95
                  L5.05 17.55
                  L4.75 14.9
                  L6.95 13.5
                  L7.25 10.9
                  L9.7 9.75
                  L10.2 7.15
                  L12.3 5.5
                  L14.15 7.25
                  L16.55 6.45
                  L17.35 3.95
                  Z
                "
                fill={isHovering ? "color-mix(in srgb, var(--primary) 14%, transparent)" : "color-mix(in srgb, var(--primary) 4%, transparent)"}
                stroke="var(--primary)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              {/* Inner ring (hub) */}
              <circle
                cx="20"
                cy="20"
                r="7.4"
                fill={isHovering ? "color-mix(in srgb, var(--primary) 55%, transparent)" : "color-mix(in srgb, var(--primary) 10%, transparent)"}
                stroke="var(--primary)"
                strokeWidth="1.4"
              />
              {/* Center hole dot */}
              <circle
                cx="20"
                cy="20"
                r="1.6"
                fill={isHovering ? "#ffffff" : "var(--primary)"}
              />
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
