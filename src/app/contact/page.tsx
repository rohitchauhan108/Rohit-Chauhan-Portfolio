"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Clock,
  Zap,
} from "lucide-react";
import { LinkedInIcon, GithubIcon, InstagramIcon } from "@/components/icons/BrandIcons";
import { bioData } from "@/data/bio";
import SectionHeader from "@/components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    let ctx: gsap.Context | null = null;
    try {
      ctx = gsap.context(() => {
        if (typeof document === "undefined") return;
        const has = (s: string) => !!document.querySelector(s);

        if (has(".contact-header")) gsap.from(".contact-header", { y: 50, opacity: 0, duration: 1.2, ease: "power3.out" });
        if (has(".contact-card") && has(".contact-info-section")) {
          gsap.from(".contact-card", {
            scrollTrigger: { trigger: ".contact-info-section", start: "top 85%" },
            y: 40, opacity: 0, duration: 0.9, stagger: 0.15, ease: "back.out(1.6)",
          });
        }
        if (has(".form-container") && has(".form-wrapper")) {
          gsap.from(".form-container", {
            scrollTrigger: { trigger: ".form-wrapper", start: "top 85%" },
            y: 50, opacity: 0, duration: 1.1, delay: 0.2, ease: "power3.out",
          });
        }
        if (has(".form-input") && has(".form-wrapper")) {
          gsap.from(".form-input", {
            scrollTrigger: { trigger: ".form-wrapper", start: "top 85%" },
            y: 20, opacity: 0, duration: 0.8, stagger: 0.1, delay: 0.3, ease: "back.out(1.4)",
          });
        }
        if (has(".social-card") && has(".socials-section")) {
          gsap.from(".social-card", {
            scrollTrigger: { trigger: ".socials-section", start: "top 85%" },
            y: 30, opacity: 0, duration: 0.8, stagger: 0.1, delay: 0.2, ease: "back.out(1.6)",
          });
        }
        if (has(".map-wrapper")) {
          gsap.from(".map-wrapper", {
            scrollTrigger: { trigger: ".map-wrapper", start: "top 85%" },
            y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.3,
          });
        }
      }, containerRef);
    } catch (err) {
      console.error("Contact page animations failed:", err);
    }

    return () => {
      try {
        if (ctx) ctx.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      } catch {
        // noop
      }
    };
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const contactCards = [
    { num: "01", title: "Email", value: bioData?.contact?.email ?? "—", href: bioData?.contact?.email ? `mailto:${bioData.contact.email}` : null, icon: <Mail className="w-5 h-5" />, description: "For formal inquiries, project proposals, and collaborations" },
    { num: "02", title: "Phone", value: bioData?.contact?.phone ?? "—", href: bioData?.contact?.phone ? `tel:${bioData.contact.phone}` : null, icon: <Phone className="w-5 h-5" />, description: "Direct calls for urgent discussions & quick conversations" },
    { num: "03", title: "Location", value: bioData?.location ?? "—", href: null, icon: <MapPin className="w-5 h-5" />, description: "Remote-friendly · Working across global time zones" },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon className="w-5 h-5" />, label: "LinkedIn", href: bioData?.contact?.linkedin ?? "#", color: "from-accent-light/15 to-accent-light/5" },
    { icon: <GithubIcon className="w-5 h-5 text-foreground" />, label: "GitHub", href: bioData?.contact?.github ?? "#", color: "from-gray-500/20 to-gray-700/20" },
    { icon: <InstagramIcon className="w-5 h-5" />, label: "Instagram", href: bioData?.contact?.instagram ?? "#", color: "from-accent-light/15 to-accent-light/5" },
  ];

  return (
    <div
      ref={containerRef}
      className="flex-1 flex flex-col py-20 md:py-24 px-4 md:px-6 lg:px-10 xl:px-14 relative z-10 overflow-x-hidden"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-16 -left-20 w-[30rem] h-[30rem] rounded-full bg-accent-light/[0.07] blur-3xl animate-pulse" style={{ animationDuration: "9s" }} />
        <div className="absolute bottom-40 -right-10 w-[28rem] h-[28rem] rounded-full bg-accent-light/[0.05] blur-3xl animate-pulse" style={{ animationDuration: "11s", animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-accent-light/[0.03] blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          topLabel="Get In Touch"
          title="Contact"
          description="Have a project in mind, a role to fill, or just want to say hello? Every message gets a reply within 24 hours."
          className="contact-header"
          badge="24h Response"
          extraText="Contact · 2026"
        />

          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-light/50 to-transparent" />
          <div className="flex justify-between mt-3">
            <span className="text-[10px] tracking-[0.32em] font-black uppercase text-secondary">24h Response</span>
            <span className="hidden md:block text-[10px] tracking-[0.32em] font-black uppercase text-secondary">Form · Email · Call · Socials</span>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 xl:gap-14 items-start">
          {/* Contact Info & Socials */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-10 contact-info-section order-2 lg:order-1">
            <div className="flex flex-col gap-4 md:gap-5">
              {contactCards.map((card) => (
                <a
                  key={card.num}
                  href={card.href || undefined}
                  data-cursor-hover
                  className="contact-card group relative rounded-2xl bg-bg-medium/90 backdrop-blur-xl border border-accent-light/30 p-5 md:p-6 overflow-hidden hover:border-accent-light hover:-translate-y-0.5 transition-all duration-500"
                  style={{ boxShadow: "0 10px 30px -16px color-mix(in srgb, var(--primary) 25%, transparent)" }}
                >
                  <div className="pointer-events-none absolute -top-20 -right-10 w-48 h-48 rounded-full bg-accent-light/[0.10] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="text-4xl md:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-b from-accent-light/40 to-accent-light/10 select-none leading-none">{card.num}</span>
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-accent-light/10 border border-accent-light/30 flex items-center justify-center text-accent-light group-hover:bg-accent-light group-hover:text-bg-dark group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0">
                        {card.icon}
                      </div>
                    </div>
                    <h4 className="text-[11px] tracking-[0.3em] font-black uppercase text-secondary mb-1.5">{card.title}</h4>
                    <h3 className="text-lg md:text-xl font-black text-foreground group-hover:text-accent-light transition-colors duration-400 mb-2 leading-tight break-all">{card.value}</h3>
                    <p className="text-xs md:text-sm text-secondary leading-relaxed">{card.description}</p>
                    <div className="h-px w-10 bg-gradient-to-r from-accent-light to-transparent mt-4 group-hover:w-16 transition-all duration-500" />
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="socials-section flex flex-col gap-5 pt-6 border-t border-theme/60">
              <h4 className="text-[10px] tracking-[0.32em] font-black uppercase text-secondary flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                Social Profiles
              </h4>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    aria-label={`${s.label} Profile`}
                    className="social-card group relative flex flex-col items-center justify-center gap-2.5 p-4 md:p-5 rounded-xl bg-bg-medium/90 backdrop-blur-xl border border-accent-light/30 hover:border-accent-light hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  >
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-accent-light/10 border border-accent-light/30 flex items-center justify-center text-accent-light group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                      {s.icon}
                    </div>
                    <span className="relative z-10 text-[10px] md:text-[11px] tracking-[0.22em] font-black uppercase text-foreground group-hover:text-accent-light transition-colors duration-400">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="map-wrapper w-full aspect-video rounded-2xl overflow-hidden border border-accent-light/30 bg-bg-medium/90 backdrop-blur-xl grayscale hover:grayscale-0 transition-all duration-700" style={{ boxShadow: "0 12px 34px -18px color-mix(in srgb, var(--primary) 30%, transparent)" }}>
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110226.241571477!2d77.94709405232746!3d30.322624500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c03251d499!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1711545600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 xl:col-span-7 form-wrapper order-1 lg:order-2">
            <div className="form-container relative rounded-2xl bg-bg-medium/90 backdrop-blur-xl border border-accent-light/30 p-6 md:p-8 lg:p-10 overflow-hidden" style={{ boxShadow: "0 16px 48px -22px color-mix(in srgb, var(--primary) 30%, transparent)" }}>
              <div className="absolute -top-20 -right-10 w-48 h-48 rounded-full bg-accent-light/[0.08] blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-light/50 to-transparent" />

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 flex flex-col items-center justify-center text-center py-16 md:py-24 gap-4"
                >
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-foreground mb-3">Message Sent!</h3>
                  <p className="text-secondary max-w-md text-sm md:text-base leading-relaxed mb-2">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible — usually within 24 hours.
                  </p>
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] font-black uppercase text-accent-light mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Confirmation on the way
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-10 group relative flex items-center gap-3 px-6 py-4 rounded-xl bg-bg-medium/90 backdrop-blur-xl border border-accent-light/30 text-foreground hover:border-accent-light hover:-translate-y-0.5 transition-all duration-400 text-xs md:text-sm tracking-[0.2em] uppercase font-black overflow-hidden"
                  >
                    <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>Send another message</span>
                  </button>
                </motion.div>
              ) : (
                <div className="relative z-10">
                  <div className="mb-6 md:mb-8 pb-5 border-b border-theme/60">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-light/10 border border-accent-light/30 flex items-center justify-center text-accent-light flex-shrink-0">
                        <Send className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-extrabold font-heading tracking-tight text-foreground">Send a Message</h3>
                        <p className="text-[11px] tracking-[0.28em] font-black uppercase text-secondary">Fill out the form below</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      <div className="form-input flex flex-col gap-2.5">
                        <label htmlFor="name" className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-black text-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                          Your Name
                        </label>
                        <div className="relative group">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full bg-bg-medium/90 backdrop-blur-xl border rounded-xl px-4 py-4 text-foreground focus:border-accent-light outline-none transition-all duration-400 placeholder:text-secondary/40 font-sans text-sm ${errors.name ? "border-red-500/50 focus:border-red-500" : "border-accent-light/30 focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--primary)_10%,transparent)]"}`}
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.name && <span className="text-[10px] text-red-500 mt-0.5 uppercase tracking-tighter flex items-center gap-1.5 font-black"><AlertCircle className="w-3 h-3" />{errors.name}</span>}
                      </div>
                      <div className="form-input flex flex-col gap-2.5">
                        <label htmlFor="email" className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-black text-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                          Email Address
                        </label>
                        <div className="relative group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-bg-medium/90 backdrop-blur-xl border rounded-xl px-4 py-4 text-foreground focus:border-accent-light outline-none transition-all duration-400 placeholder:text-secondary/40 font-sans text-sm ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-accent-light/30 focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--primary)_10%,transparent)]"}`}
                            placeholder="john@example.com"
                          />
                        </div>
                        {errors.email && <span className="text-[10px] text-red-500 mt-0.5 uppercase tracking-tighter flex items-center gap-1.5 font-black"><AlertCircle className="w-3 h-3" />{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-input flex flex-col gap-2.5">
                      <label htmlFor="subject" className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-black text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                        Subject Line
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full bg-bg-medium/90 backdrop-blur-xl border rounded-xl px-4 py-4 text-foreground focus:border-accent-light outline-none transition-all duration-400 placeholder:text-secondary/40 font-sans text-sm ${errors.subject ? "border-red-500/50 focus:border-red-500" : "border-accent-light/30 focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--primary)_10%,transparent)]"}`}
                          placeholder="Project · Role · Collaboration"
                        />
                      </div>
                      {errors.subject && <span className="text-[10px] text-red-500 mt-0.5 uppercase tracking-tighter flex items-center gap-1.5 font-black"><AlertCircle className="w-3 h-3" />{errors.subject}</span>}
                    </div>

                    <div className="form-input flex flex-col gap-2.5">
                      <label htmlFor="message" className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-black text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                        Your Message
                      </label>
                      <div className="relative group">
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full bg-bg-medium/90 backdrop-blur-xl border rounded-xl px-4 py-4 text-foreground focus:border-accent-light outline-none transition-all duration-400 resize-none placeholder:text-secondary/40 font-sans text-sm ${errors.message ? "border-red-500/50 focus:border-red-500" : "border-accent-light/30 focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--primary)_10%,transparent)]"}`}
                          placeholder="Tell me about your project — requirements, timeline, budget range, the more details the better!"
                        />
                      </div>
                      {errors.message && <span className="text-[10px] text-red-500 mt-0.5 uppercase tracking-tighter flex items-center gap-1.5 font-black"><AlertCircle className="w-3 h-3" />{errors.message}</span>}
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2.5 text-red-500 bg-red-500/10 border border-red-500/30 p-4 rounded-xl font-black text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>Something went wrong. Please try again or email directly.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      data-cursor-hover
                      className="form-input group relative flex items-center justify-center gap-3 bg-accent-light text-white py-4 rounded-xl uppercase tracking-[0.22em] text-xs md:text-sm font-black hover:bg-foreground hover:text-bg-dark transition-all duration-400 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden mt-1 shadow-md shadow-accent-light/20 hover:shadow-accent-light/40 hover:-translate-y-0.5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms]" />
                      {status === "submitting" ? (
                        <div className="flex items-center gap-3 relative z-10">
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 relative z-10">
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
