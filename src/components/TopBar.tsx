"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { bioData } from "@/data/bio";
import { Phone, Mail, FileText } from "lucide-react";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 hidden md:block pointer-events-none">
      <div className="top-bar-content md:ml-72 flex items-center justify-between px-6 lg:px-10 py-3 pointer-events-auto">
        <div className="flex items-center gap-6">
          {/* Phone */}
          <a
            href={`tel:${bioData.contact.phone}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-bg-medium/80 backdrop-blur-xl border border-theme/60 hover:border-accent-light/40 hover:bg-bg-medium transition-all duration-300 group"
          >
            <div className="w-7 h-7 rounded-lg bg-accent-light/10 border border-accent-light/20 flex items-center justify-center text-accent-light group-hover:bg-accent-light group-hover:text-bg-dark transition-all duration-300">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold text-foreground font-sans">{bioData.contact.phone}</span>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${bioData.contact.email}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-bg-medium/80 backdrop-blur-xl border border-theme/60 hover:border-accent-light/40 hover:bg-bg-medium transition-all duration-300 group"
          >
            <div className="w-7 h-7 rounded-lg bg-accent-light/10 border border-accent-light/20 flex items-center justify-center text-accent-light group-hover:bg-accent-light group-hover:text-bg-dark transition-all duration-300">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold text-foreground font-sans truncate max-w-[200px]">{bioData.contact.email}</span>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle className="relative" />

          {/* Resume Button */}
          <Link
            href="/resume"
            className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-accent-light text-bg-dark hover:bg-foreground transition-all duration-300 shadow-lg shadow-accent-light/20 hover:shadow-accent-light/30 hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center justify-center w-6 h-6 rounded-md bg-bg-dark/10 group-hover:bg-bg-dark/20 transition-colors">
              <FileText className="w-3.5 h-3.5" />
            </span>
            <span className="relative text-[11px] font-bold tracking-[0.15em] uppercase font-sans">Resume</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
