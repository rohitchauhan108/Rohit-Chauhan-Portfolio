"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./Providers";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={className || "fixed top-8 right-8 z-50 pointer-events-auto hidden md:block"}>
      <button 
        onClick={toggleTheme}
        className={`w-16 h-8 rounded-full border-2 flex items-center p-1 md:cursor-none cursor-pointer transition-all duration-300 ${
          isDark ? 'border-accent-light bg-transparent' : 'border-accent-light bg-transparent'
        }`}
        aria-label="Toggle Theme"
      >
        <motion.div 
          className="w-6 h-6 bg-accent-light rounded-full flex items-center justify-center overflow-hidden"
          animate={{ x: isDark ? 30 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-bg-dark" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-bg-light" />
          )}
        </motion.div>
      </button>
    </div>
  );
}
