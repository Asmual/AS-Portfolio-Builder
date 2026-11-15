"use client";

import * as React from "react";
import Link from "next/link";
import { Send, Lock, ChevronRight } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export function Footer() {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Thank you for subscribing!", {
      description: "We'll keep you updated with the latest themes and features.",
    });
    setEmail("");
  };

  return (
    <footer className="relative w-full mt-12 pt-8 overflow-hidden select-none">
      {/* 
        ========================================================================
        ORGANIC SCALLOPED / WAVY TOP CURVE
        Smooth undulating curves separating the page content from the dark footer
        ========================================================================
      */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          className="w-full h-14 sm:h-20 object-fill block"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Ambient soft secondary teal wave contour */}
          <path
            d="M0 45 C 180 10, 360 80, 540 30 C 720 -15, 900 70, 1080 25 C 1260 -15, 1380 50, 1440 30 L 1440 90 L 0 90 Z"
            fill="#249492"
            fillOpacity="0.3"
          />
          {/* Layer 2: Main deep teal (#136968) organic wave */}
          <path
            d="M0 55 C 160 20, 320 85, 480 35 C 640 -10, 800 75, 960 28 C 1120 -10, 1280 65, 1440 40 L 1440 90 L 0 90 Z"
            fill="#136968"
          />
        </svg>
      </div>

      {/* Main Footer Body with Deep Teal Theme (#136968) */}
      <div className="bg-[#136968] text-[#F8F8EF] px-4 sm:px-6 lg:px-8 pb-12 pt-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/10">
            
            {/* Column 1: Brand Info & Tagline */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 border border-[#B8DFDF]/30 text-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-[#E8F4F4]"
                  >
                    <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6H4a1 1 0 0 1-1-1v-9.5z" />
                    <path d="M12 9c0 3 2 4 4 4" strokeWidth="2.2" className="text-teal-200" />
                    <path d="M12 9c-2 1-3 3-3 5" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-extrabold tracking-tight text-white block">
                    AS Portfolio Builder
                  </span>
                  <p className="text-xs text-[#E8F4F4]/80 font-medium">
                    Creative Solutions for a Better Tomorrow
                  </p>
                </div>
              </div>

              <p className="text-sm text-white/70 font-normal leading-relaxed pt-2 max-w-sm">
                Create, customize, and publish your professional portfolio website in minutes with custom domain & subdomain support.
              </p>
            </div>

            {/* Column 2: Quick Links with Dedicated Secondary Right-Arrow */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#E8F4F4]">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="#themes"
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#249492] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 stroke-[2.5]" />
                    <span>Themes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#249492] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 stroke-[2.5]" />
                    <span>Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#docs"
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#249492] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 stroke-[2.5]" />
                    <span>Docs</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#249492] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 stroke-[2.5]" />
                    <span>Blog</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources with Dedicated Secondary Right-Arrow */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#E8F4F4]">
                Resources
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="#help"
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#249492] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 stroke-[2.5]" />
                    <span>Help Center</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#privacy"
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#249492] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 stroke-[2.5]" />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#terms"
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#249492] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 stroke-[2.5]" />
                    <span>Terms of Service</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#249492] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 stroke-[2.5]" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Stay Updated & Circular Socials matching reference */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#E8F4F4]">
                  Stay Updated
                </h4>

                {/* Circular Social Icons */}
                <div className="flex items-center gap-2">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/85 hover:text-white transition-all"
                    aria-label="GitHub"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Link>

                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/85 hover:text-white transition-all"
                    aria-label="YouTube"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </Link>

                  <Link
                    href="https://x.com"
                    target="_blank"
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/85 hover:text-white transition-all"
                    aria-label="X (formerly Twitter)"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Link>

                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/85 hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </Link>
                </div>
              </div>

              <p className="text-xs text-white/70">
                Get the latest themes, updates and features delivered to your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-11 pl-4 pr-12 text-sm rounded-full border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#249492] focus:border-transparent transition-all placeholder:text-white/50"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="default"
                  className="absolute right-1 w-9 h-9 rounded-full bg-[#249492] hover:bg-[#1b7371] text-white flex items-center justify-center cursor-pointer shadow-sm transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4 -ml-0.5" />
                </Button>
              </form>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-white/60 font-medium">
            <p>© 2026 AS Portfolio Builder. All rights reserved.</p>
            <div className="flex items-center gap-1.5 text-[#E8F4F4] font-semibold">
              <Lock className="w-3.5 h-3.5" />
              <span>Secure & Trusted Platform</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
