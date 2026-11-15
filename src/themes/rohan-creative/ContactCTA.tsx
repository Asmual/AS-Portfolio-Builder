"use client";

import * as React from "react";
import { Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioData } from "../types";

export function ThemeContactCTA({ data }: { data: PortfolioData }) {
  const { contact } = data;

  return (
    <section id="contact" className="relative bg-[#C25E34] text-white py-16 sm:py-20 overflow-hidden">
      
      {/* Decorative background circle gradients */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#D46938]/40 blur-2xl pointer-events-none" />
      <div className="absolute left-1/3 top-0 w-64 h-64 rounded-full bg-black/10 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          {/* Left: Icon + Text */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
              <Send className="w-7 h-7 text-white" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-black tracking-tight leading-tight text-white">
                {contact.ctaHeadline || "Let's Create Something Amazing Together"}
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-sans mt-1.5 font-light">
                {contact.ctaSubtext || "Have a project in mind? I'd love to hear about it."}
              </p>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="flex-shrink-0">
            <a href={`mailto:${contact.email}`}>
              <Button
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 hover:bg-white hover:text-[#C25E34] text-white font-bold text-xs h-12 px-8 gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer backdrop-blur-sm"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
