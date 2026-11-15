"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Play, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioData } from "../types";

export function ThemeHero({ data }: { data: PortfolioData }) {
  const { personal, socialLinks } = data;

  return (
    <section id="home" className="relative bg-[#181716] text-white pt-28 sm:pt-36 pb-0 overflow-hidden isolate select-none">
      
      {/* Subtle background ambient warmth */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#C25E34]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-20 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (55% width) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline */}
            <p className="text-xs tracking-widest uppercase font-semibold text-[#D46938]">
              {personal.headline}
            </p>

            {/* Main Title & Role */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-serif font-black tracking-tight leading-[1.08] text-white">
                {personal.name}
              </h1>
              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-bold text-[#C25E34] tracking-tight">
                {personal.role}
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans font-light">
              {personal.shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#work">
                <Button className="w-full sm:w-auto rounded-full bg-[#C25E34] hover:bg-[#A84F2A] text-white font-semibold text-xs h-12 px-7 gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <button
                type="button"
                className="flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold text-gray-200 hover:text-white transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full border border-gray-600 group-hover:border-white flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-gray-300 group-hover:text-white" />
                </div>
                <span>Watch Introduction</span>
              </button>
            </div>

            {/* Available for freelance & Social Links */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold">
                {personal.availabilityStatus}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-[#C25E34] hover:border-[#C25E34] text-gray-300 hover:text-white flex items-center justify-center text-xs transition-colors"
                  >
                    <span className="capitalize text-[11px] font-bold">
                      {s.platform.substring(0, 2)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Circular Cutout Photo with Terracotta Backdrop & Floating Experience Badge */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Organic Terracotta Brush / Circle Backdrop */}
            <div
              className="absolute w-72 sm:w-96 lg:w-[420px] aspect-square rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 40% 40%, #D46938 0%, #C25E34 60%, #8C3E1B 95%)",
                boxShadow: "0 25px 60px rgba(194, 94, 52, 0.35)",
              }}
            />

            {/* Circular Portrait Image Container */}
            <div className="relative z-10 w-64 sm:w-80 lg:w-[350px] aspect-square rounded-full overflow-hidden border-4 border-[#181716] shadow-2xl bg-gray-800">
              <Image
                src={personal.avatarUrl || "/images/Hero-right side image (1).jpg"}
                alt={personal.name}
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Floating Experience Badge (from image: 5+ Years Experience / Designing Digital Products) */}
            <div className="absolute -bottom-4 -right-2 sm:right-4 z-20 p-4 rounded-2xl bg-[#FAF6F3] text-[#181716] shadow-2xl border border-white max-w-[190px] select-none animate-bounce duration-1000">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-[#C25E34] text-white flex items-center justify-center">
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-serif font-black text-xl text-[#181716]">
                  {personal.experienceYears}+ Years
                </span>
              </div>
              <p className="text-[11px] font-bold text-[#181716] leading-tight">
                Experience
              </p>
              <p className="text-[10px] text-gray-500 leading-tight mt-0.5">
                {personal.experienceSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        BOTTOM ORGANIC WAVE DIVIDER
        Transitions smoothly from Dark #181716 to Warm Ivory #F5EFEB
        ========================================================================
      */}
      <div className="relative w-full overflow-hidden leading-none z-10 -mt-1">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 lg:h-20 object-fill block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 45 C 180 10, 360 80, 540 30 C 720 -15, 900 70, 1080 25 C 1260 -15, 1380 50, 1440 30 L 1440 90 L 0 90 Z"
            fill="#C25E34"
            fillOpacity="0.2"
          />
          <path
            d="M0 55 C 160 20, 320 85, 480 35 C 640 -10, 800 75, 960 28 C 1120 -10, 1280 65, 1440 40 L 1440 90 L 0 90 Z"
            fill="#F5EFEB"
          />
        </svg>
      </div>
    </section>
  );
}
