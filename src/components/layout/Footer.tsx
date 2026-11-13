"use client";

import * as React from "react";
import Link from "next/link";
import { Send, Lock } from "lucide-react";
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
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Elevated White Card Container matching reference image */}
      <div className="bg-[#fbfcfa] border border-[#dbe8df] rounded-[2.5rem] p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <BrandLogo />
            <p className="text-sm text-[#10291D]/75 font-medium pl-1">
              Build. Showcase. Grow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#10291D] tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#10291D]/75">
              <li>
                <Link href="#themes" className="hover:text-[#16803D] transition-colors">
                  Themes
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#16803D] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#docs" className="hover:text-[#16803D] transition-colors">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#16803D] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#10291D] tracking-tight">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-[#10291D]/75">
              <li>
                <Link href="#help" className="hover:text-[#16803D] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="hover:text-[#16803D] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-[#16803D] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#16803D] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated & Socials */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-sm font-bold text-[#10291D] tracking-tight">
                Stay Updated
              </h4>
              {/* Social Icons matching design */}
              <div className="flex items-center gap-3.5 text-[#10291D]/75">
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="hover:text-[#064B2B] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="hover:text-[#064B2B] transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link
                  href="https://x.com"
                  target="_blank"
                  className="hover:text-[#064B2B] transition-colors"
                  aria-label="X (formerly Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:text-[#064B2B] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </Link>
              </div>
            </div>

            <p className="text-xs text-[#10291D]/70 font-medium">
              Get the latest updates and features.
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-11 pl-4 pr-12 text-sm rounded-full border border-[#dbe8df] bg-white focus:outline-none focus:ring-2 focus:ring-[#16803D] focus:border-transparent transition-all placeholder:text-[#10291D]/45 text-[#10291D]"
              />
              <Button
                type="submit"
                size="icon"
                variant="default"
                className="absolute right-1 w-9 h-9 rounded-full bg-[#064B2B] hover:bg-[#043820] text-white flex items-center justify-center cursor-pointer shadow-xs"
                aria-label="Subscribe to newsletter"
              >
                <Send className="w-4 h-4 -ml-0.5" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-4 text-xs text-[#10291D]/70 font-medium">
        <p>© 2025 AS Portfolio Builder. All rights reserved.</p>
        <div className="flex items-center gap-1.5 text-[#16803D] font-semibold">
          <Lock className="w-3.5 h-3.5" />
          <span>Secure & Trusted Platform</span>
        </div>
      </div>
    </footer>
  );
}
