"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X,
  Home, User, Briefcase, Award, Code2, FolderKanban, 
  MapPin, FileText
} from "lucide-react";
import { LinkedInIcon, GithubIcon, InstagramIcon } from "./icons/BrandIcons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { bioData } from "@/data/bio";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const whatsappNumber = bioData.contact.phone.replace(/^\+?0?/, "91");
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isDesktopOpen) {
        document.body.classList.remove('sidebar-collapsed');
      } else {
        document.body.classList.add('sidebar-collapsed');
      }
    }
  }, [isDesktopOpen]);

  const links = [
    { name: "HOME", path: "/", icon: Home },
    { name: "ABOUT US", path: "/about", icon: User },
    { name: "SERVICES", path: "/services", icon: Briefcase },
    { name: "EXPERIENCE", path: "/experience", icon: Award },
    { name: "SKILLS", path: "/skills", icon: Code2 },
    { name: "MY PORTFOLIO", path: "/portfolio", icon: FolderKanban },
    { name: "RESUME", path: "/resume", icon: FileText },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[60] md:hidden pointer-events-none">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-xl bg-bg-medium/80 backdrop-blur-xl border border-theme text-accent-light pointer-events-auto"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div className="flex items-center gap-3 pointer-events-auto">
          <Link
            href="/resume"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-light text-bg-dark shadow-lg shadow-accent-light/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase font-sans">Resume</span>
          </Link>
          <ThemeToggle className="relative z-0 md:hidden" />
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg-medium z-[55] md:hidden flex flex-col p-8 pt-32"
          >
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-accent-light/30">
                    <img 
                      src={bioData.profileImage} 
                      alt={bioData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-emerald-500 border-4 border-bg-medium flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-foreground">{bioData.name}</h3>
                  <p className="text-xs text-secondary tracking-wider">{bioData.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-medium text-emerald-400 tracking-widest uppercase">Available for work</span>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {links.map((link) => {
                const isActive = pathname === link.path;
                const Icon = link.icon;
                return (
                  <Link 
                    key={link.name}
                    href={link.path} 
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 tracking-[0.15em] uppercase font-heading font-bold text-sm ${
                      isActive 
                        ? 'bg-accent-light/10 text-accent-light border border-accent-light/20 shadow-lg shadow-accent-light/5' 
                        : 'text-secondary hover:bg-white/5 hover:text-foreground border border-transparent'
                    }`}
                  >
                    <Icon className={`w-4.5 h-4.5 ${isActive ? '' : 'opacity-60'}`} />
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-8 border-t border-theme">
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1 text-[9px] uppercase tracking-[0.25em] text-secondary/40 font-semibold">
                  <span className="w-4 h-px bg-secondary/20" />
                  Connect
                  <span className="w-4 h-px bg-secondary/20" />
                </div>
                <div className="flex items-center gap-4 pl-1">
                  <a 
                    href={bioData.contact.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:scale-110 transition-transform duration-300"
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="w-4.5 h-4.5" />
                  </a>
                  <a 
                    href={bioData.contact.instagram} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:scale-110 transition-transform duration-300"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-4.5 h-4.5" />
                  </a>
                  <a 
                    href={bioData.contact.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-foreground hover:scale-110 transition-transform duration-300"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                    title="WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 text-emerald-400">
                      <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 2.12.66 4.09 1.78 5.73L2 22l4.51-1.47c1.55.95 3.3 1.47 5.04 1.47h.01c5.56 0 10.04-4.48 10.04-10.04C22.08 6.48 17.6 2 12.04 2zm5.28 13.78c-.24.68-1.45 1.31-2.01 1.39-.53.08-1.18.13-2.93-.58-2.66-1.01-4.4-3.38-4.54-3.55-.14-.17-1.11-1.35-1.11-2.58 0-1.22.84-1.78 1.14-2.03.29-.24.64-.29.86-.29.22 0 .44 0 .63.01.2.01.47-.08.73.56.26.64.89 2.22.97 2.38.09.16.13.35.03.56-.1.21-.15.34-.29.53-.15.2-.32.43-.46.58-.15.15-.3.33-.05.65.24.31 1.07 1.75 2.3 2.82 1.59 1.38 2.31 1.22 2.72 1.14.42-.08 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.07-.09-.28-.15-.59-.26-.31-.11-1.83-.85-2.12-.94-.29-.09-.5-.13-.71.13-.21.27-.82.94-1.01 1.13-.19.19-.38.22-.7.08-.32-.14-1.35-.5-2.57-1.59-.95-.8-1.59-1.79-1.77-2.1-.18-.3-.02-.46.14-.62.14-.14.32-.36.48-.54.16-.18.21-.3.31-.5.1-.19.05-.35-.02-.49-.08-.14-.71-1.7-.97-2.34-.26-.62-.52-.54-.72-.55-.19-.01-.42-.01-.64-.01-.22 0-.58.08-.88.37-.29.29-1.09 1.06-1.09 2.59 0 1.52 1.12 2.99 1.28 3.2.16.22 2.22 3.5 5.39 4.78 3.18 1.27 3.18.85 3.76.8.58-.05 1.88-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.28-.21-.59-.36z"/>
                    </svg>
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-secondary/70 pl-1">
                  <span className="font-semibold uppercase tracking-[0.15em] text-emerald-400">WhatsApp</span>
                  <span>+91 93899 58986</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-6 text-[10px] text-secondary/60 tracking-wider">
                <MapPin className="w-3 h-3" />
                {bioData.location}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop */}
      <>
        {/* Reopen Button - always visible on left edge when sidebar is closed */}
        <AnimatePresence>
          {!isDesktopOpen && (
            <motion.button
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={() => setIsDesktopOpen(true)}
              className="hidden md:flex fixed top-1/2 left-0 -translate-y-1/2 z-[60] items-center justify-center w-12 h-32 rounded-r-2xl bg-bg-medium/90 backdrop-blur-2xl border border-l-0 border-theme text-accent-light hover:bg-bg-medium hover:text-foreground hover:w-14 transition-all duration-300 pointer-events-auto shadow-2xl shadow-black/40 group"
              aria-label="Open sidebar"
            >
              <span 
                className="font-heading font-black text-[10px] tracking-[0.3em] uppercase group-hover:tracking-[0.4em] transition-all duration-300"
                style={{ writingMode: "vertical-lr" }}
              >
                MENU
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar with glass effect and right border */}
        <motion.aside
          initial={false}
          animate={{ x: isDesktopOpen ? 0 : -380 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed left-0 top-0 w-full h-auto md:h-screen md:w-[280px] hidden md:flex flex-col z-50 
                     bg-bg-medium/85 backdrop-blur-2xl 
                     border-r border-theme/80
                     shadow-[8px_0_32px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col gap-6 w-full pointer-events-auto h-full overflow-y-auto no-scrollbar p-8 relative">

            {/* Navigation - with title + close button */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2 px-1 text-[9px] uppercase tracking-[0.25em] text-secondary/40 font-semibold">
                  <span className="w-4 h-px bg-secondary/20" />
                  Navigation
                </div>
                {/* Close Button next to Navigation title */}
                <button
                  onClick={() => setIsDesktopOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-secondary hover:text-accent-light hover:bg-white/5 hover:rotate-90 transition-all duration-300 border border-transparent hover:border-theme"
                  aria-label="Close sidebar"
                  title="Close sidebar"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1.5">
                {links.map((link) => {
                  const isActive = pathname === link.path;
                  const Icon = link.icon;
                  return (
                    <Link 
                      key={link.name}
                      href={link.path} 
                      className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 tracking-[0.15em] uppercase font-heading font-bold text-xs ${
                        isActive 
                          ? 'bg-accent-light/10 text-accent-light border border-accent-light/20 shadow-lg shadow-accent-light/5' 
                          : 'text-secondary hover:bg-white/[0.03] hover:text-foreground border border-transparent hover:border-theme'
                      }`}
                      data-cursor-hover
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-bar"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-accent-light"
                        />
                      )}
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                        isActive ? 'bg-accent-light/15' : 'bg-white/[0.03] group-hover:bg-white/[0.06]'
                      }`}>
                        <Icon className={`w-4 h-4 transition-all duration-300 ${isActive ? 'scale-110' : 'opacity-60 group-hover:opacity-100 group-hover:scale-110'}`} />
                      </div>
                      <span className="relative">
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Section */}
            <div className="mt-0 pt-5 border-t border-theme space-y-5">
              {/* Social Links - only LinkedIn, Instagram, GitHub */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1 text-[9px] uppercase tracking-[0.25em] text-secondary/40 font-semibold">
                  <span className="w-4 h-px bg-secondary/20" />
                  Connect
                  <span className="w-4 h-px bg-secondary/20" />
                </div>
                <div className="flex items-center gap-4 pl-1">
                  <a 
                    href={bioData.contact.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:scale-110 transition-transform duration-300"
                    data-cursor-hover
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="w-8 h-8" />
                  </a>
                  <a 
                    href={bioData.contact.instagram} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:scale-110 transition-transform duration-300"
                    data-cursor-hover
                    title="Instagram"
                  >
                    <InstagramIcon className="w-8 h-8" />
                  </a>
                  <a 
                    href={bioData.contact.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-foreground hover:scale-110 transition-transform duration-300"
                    data-cursor-hover
                    title="GitHub"
                  >
                    <GithubIcon className="w-8 h-8" />
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                    data-cursor-hover
                    title="WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-emerald-400">
                      <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 2.12.66 4.09 1.78 5.73L2 22l4.51-1.47c1.55.95 3.3 1.47 5.04 1.47h.01c5.56 0 10.04-4.48 10.04-10.04C22.08 6.48 17.6 2 12.04 2zm5.28 13.78c-.24.68-1.45 1.31-2.01 1.39-.53.08-1.18.13-2.93-.58-2.66-1.01-4.4-3.38-4.54-3.55-.14-.17-1.11-1.35-1.11-2.58 0-1.22.84-1.78 1.14-2.03.29-.24.64-.29.86-.29.22 0 .44 0 .63.01.2.01.47-.08.73.56.26.64.89 2.22.97 2.38.09.16.13.35.03.56-.1.21-.15.34-.29.53-.15.2-.32.43-.46.58-.15.15-.3.33-.05.65.24.31 1.07 1.75 2.3 2.82 1.59 1.38 2.31 1.22 2.72 1.14.42-.08 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.07-.09-.28-.15-.59-.26-.31-.11-1.83-.85-2.12-.94-.29-.09-.5-.13-.71.13-.21.27-.82.94-1.01 1.13-.19.19-.38.22-.7.08-.32-.14-1.35-.5-2.57-1.59-.95-.8-1.59-1.79-1.77-2.1-.18-.3-.02-.46.14-.62.14-.14.32-.36.48-.54.16-.18.21-.3.31-.5.1-.19.05-.35-.02-.49-.08-.14-.71-1.7-.97-2.34-.26-.62-.52-.54-.72-.55-.19-.01-.42-.01-.64-.01-.22 0-.58.08-.88.37-.29.29-1.09 1.06-1.09 2.59 0 1.52 1.12 2.99 1.28 3.2.16.22 2.22 3.5 5.39 4.78 3.18 1.27 3.18.85 3.76.8.58-.05 1.88-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.28-.21-.59-.36z"/>
                    </svg>
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-secondary/70 pl-1">
                  <span className="font-semibold uppercase tracking-[0.15em] text-emerald-400">WhatsApp</span>
                  <span>+91 93899 58986</span>
                </div>
              </div>

            
            </div>

           
          </div>
        </motion.aside>
      </>
    </>
  );
}
