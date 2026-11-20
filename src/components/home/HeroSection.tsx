"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Play, Palette, Globe, CheckCircle2 } from "lucide-react";
import { SlideButton } from "@/components/common/SlideButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/sonner";

export function HeroSection() {
  const [demoOpen, setDemoOpen] = React.useState(false);

  const handleBrowseThemes = () => {
    const themesEl = document.getElementById("themes");
    if (themesEl) {
      themesEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden isolate pt-2 pb-6 lg:pb-10 bg-[#F8F8EF]">
      {/* 
        ========================================================================
        1. AMBIENT BACKGROUND TEXTURE
        Subtle texture overlay from user resources
        ========================================================================
      */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-10 mix-blend-multiply overflow-hidden">
        <Image
          src="/images/HeroBg.jpg"
          alt="Hero Background Accent"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 
        ========================================================================
        2. MAIN HERO CONTAINER: EXACT 50-50 SPLIT (Left Col & Right Col)
        Balanced heights so entire Hero fits gracefully on one desktop screen
        ========================================================================
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* 
            --------------------------------------------------------------------
            LEFT COLUMN (50% WIDTH): Heading, Subtitle, Dual CTAs & Badges
            No leaf icon, aligned cleanly
            --------------------------------------------------------------------
          */}
          <div className="space-y-5 text-center lg:text-left z-20">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#10291D] leading-[1.14]">
              Create Your <br />
              Portfolio in{" "}
              <span className="text-[#136968] relative inline-block">
                One Click
                {/* Decorative underline brush stroke */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#136968]/70"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 5.5C50 2 150 2 199 5.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-[17px] text-[#10291D]/80 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Choose from stunning themes, customize them with ease, and launch
              your professional portfolio on your domain or our subdomain.
            </p>

            {/* Dual CTAs with sliding door hover animation */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              {/* "Browse Themes": Primary teal with darker sliding door on hover */}
              <SlideButton
                variant="primary"
                size="lg"
                onClick={handleBrowseThemes}
                icon={<ArrowRight className="w-4 h-4 stroke-[2.2]" />}
                className="w-full sm:w-auto h-12 px-8 text-base shadow-md font-semibold"
              >
                Browse Themes
              </SlideButton>

              {/* "Watch Demo": Cream base with 2px border, teal slides up turning text white */}
              <SlideButton
                variant="outline"
                size="lg"
                onClick={() => setDemoOpen(true)}
                icon={
                  <div className="w-6 h-6 rounded-full bg-[#E8F4F4] group-hover:bg-white/20 flex items-center justify-center text-[#136968] group-hover:text-white transition-colors">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                }
                iconPosition="left"
                className="w-full sm:w-auto h-12 px-7 text-base font-semibold border-2 border-[#136968] text-[#10291D]"
              >
                Watch Demo
              </SlideButton>
            </div>

            {/* Feature badges row */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#10291D]/75">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#136968]" />
                <span>Custom Domains & SSL</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#136968]" />
                <span>Plans From $5/mo</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#136968]" />
                <span>Instant Live Customizer</span>
              </div>
            </div>
          </div>

          {/* 
            --------------------------------------------------------------------
            RIGHT COLUMN (50% WIDTH):
            Organic Curved Green Backdrop with Height Matched to Left Section
            Organized 3D Portfolio Cards with Functional Images
            --------------------------------------------------------------------
          */}
          <div className="relative w-full flex items-center justify-center h-[380px] sm:h-[420px] lg:h-[450px]">
            
            {/* 
              Solid Curved Shape in Primary #136968 & Secondary #249492
              Contained within height of the section
            */}
            <div className="absolute inset-0 rounded-[32px] sm:rounded-[40px] overflow-hidden pointer-events-none bg-[#136968]">
              {/* Organic Flowing Curves SVG inside the right container */}
              <svg
                viewBox="0 0 700 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full object-cover"
                preserveAspectRatio="none"
              >
                {/* Outermost smooth wave */}
                <path
                  d="M160 0 C 40 180, 20 420, 120 700 L 700 700 L 700 0 Z"
                  fill="#249492"
                  fillOpacity="0.35"
                />
                {/* Middle organic wave */}
                <path
                  d="M240 0 C 100 200, 90 460, 200 700 L 700 700 L 700 0 Z"
                  fill="#187a78"
                  fillOpacity="0.75"
                />
                {/* Primary deep core */}
                <path
                  d="M320 0 C 180 220, 160 480, 280 700 L 700 700 L 700 0 Z"
                  fill="#136968"
                />
                {/* Curved aesthetic subtle border contour */}
                <path
                  d="M240 0 C 100 200, 90 460, 200 700"
                  stroke="#E8F4F4"
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  fill="none"
                />
              </svg>
            </div>

            {/* 
              3D Overlapping Portfolio Showcase Cards
              Carefully organized in depth: Back Left, Back Right, Foreground Center
            */}
            <div className="relative z-10 w-full max-w-[460px] sm:max-w-[500px] h-full flex items-center justify-center p-3">
              
              {/* CARD 1: Background Left-Angled - Rohan Sharma Portfolio */}
              <div className="absolute -left-2 sm:left-2 top-6 w-[230px] sm:w-[260px] aspect-[16/10] rounded-xl bg-white p-2 shadow-2xl border-2 border-white/90 transform -rotate-6 hover:-rotate-3 transition-transform duration-500 overflow-hidden z-10">
                {/* Browser top chrome */}
                <div className="flex items-center gap-1.5 pb-1 px-1 border-b border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[9px] text-gray-400 font-mono ml-2 truncate">
                    rohan-sharma.asportfolio.site
                  </span>
                </div>
                <div className="relative w-full h-[calc(100%-16px)] rounded-md overflow-hidden bg-gray-100 mt-1">
                  <Image
                    src="/images/hero-card-1.jpg"
                    alt="Rohan Sharma Portfolio Preview"
                    fill
                    sizes="260px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* CARD 2: Background Right-Angled - Creative Designer Portfolio */}
              <div className="absolute -right-2 sm:right-2 bottom-6 w-[220px] sm:w-[250px] aspect-[16/10] rounded-xl bg-white p-2 shadow-2xl border-2 border-white/90 transform rotate-6 hover:rotate-3 transition-transform duration-500 overflow-hidden z-10">
                <div className="flex items-center gap-1.5 pb-1 px-1 border-b border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[9px] text-gray-400 font-mono ml-2 truncate">
                    designer-folio.com
                  </span>
                </div>
                <div className="relative w-full h-[calc(100%-16px)] rounded-md overflow-hidden bg-gray-100 mt-1">
                  <Image
                    src="/images/hero-card-2.jpg"
                    alt="Creative Designer Portfolio Preview"
                    fill
                    sizes="250px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* CARD 3: Centerpiece - Prominently Elevated Foreground */}
              <div className="relative z-20 w-[260px] sm:w-[300px] aspect-[16/10] rounded-2xl bg-white p-2.5 shadow-2xl border-4 border-white transform hover:scale-[1.03] transition-all duration-300 overflow-hidden">
                <div className="flex items-center justify-between pb-1.5 px-1 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono font-medium">
                    live • ecobuild-studio.dev
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#136968]" />
                </div>
                <div className="relative w-full h-[calc(100%-20px)] rounded-lg overflow-hidden bg-gray-100 mt-1">
                  <Image
                    src="/images/hero-card-3.jpg"
                    alt="EcoBuild Architectural Portfolio Preview"
                    fill
                    priority
                    sizes="300px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Steady, Elegant Floating Badges (NO rapid bounce / erratic motion) */}
              {/* Top-Right Badge: "Custom Domain" */}
              <div className="absolute top-2 right-2 sm:right-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-[#B8DFDF] text-[#10291D] text-xs font-semibold">
                <div className="w-5 h-5 rounded-full bg-[#E8F4F4] text-[#136968] flex items-center justify-center">
                  <Globe className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>Custom Domain</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
              </div>

              {/* Bottom-Left Badge: "Customize Easily" */}
              <div className="absolute bottom-2 left-2 sm:left-4 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-[#B8DFDF] text-[#10291D] text-xs font-semibold">
                <div className="w-5 h-5 rounded-full bg-[#E8F4F4] text-[#136968] flex items-center justify-center">
                  <Palette className="w-3 h-3 text-[#136968]" />
                </div>
                <span>Customize Easily</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        3. BOTTOM ORGANIC SEA-WAVE TRANSITION (Matching the Footer Wave)
        Smooth undulating curves separating the Hero section from the Themes
        ========================================================================
      */}
      <div className="w-full overflow-hidden leading-none -mb-1 mt-2">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          className="w-full h-12 sm:h-16 object-fill block"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Ambient secondary teal (#249492) soft wave contour */}
          <path
            d="M0 45 C 180 10, 360 80, 540 30 C 720 -15, 900 70, 1080 25 C 1260 -15, 1380 50, 1440 30 L 1440 90 L 0 90 Z"
            fill="#249492"
            fillOpacity="0.3"
          />
          {/* Layer 2: Main deep teal (#136968) wave contour */}
          <path
            d="M0 55 C 160 20, 320 85, 480 35 C 640 -10, 800 75, 960 28 C 1120 -10, 1280 65, 1440 40 L 1440 90 L 0 90 Z"
            fill="#136968"
          />
        </svg>
      </div>

      {/* Interactive Watch Demo Dialog Modal */}
      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="sm:max-w-xl bg-white border border-[#B8DFDF] rounded-3xl p-6 sm:p-8">
          <DialogHeader>
            <div className="w-12 h-12 rounded-2xl bg-[#E8F4F4] text-[#136968] flex items-center justify-center mb-2">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
            <DialogTitle className="text-2xl font-bold text-[#10291D]">
              Platform Walkthrough Demo
            </DialogTitle>
            <DialogDescription className="text-sm text-[#10291D]/70 pt-1">
              Watch how fast you can create, customize, and publish your professional portfolio website with custom domain support.
            </DialogDescription>
          </DialogHeader>

          {/* Video Placeholder Area */}
          <div className="relative aspect-video rounded-2xl bg-[#10291D] overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white my-2 border border-black/10">
            <div className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center cursor-pointer transition-all hover:scale-110 mb-3">
              <Play className="w-7 h-7 fill-white text-white ml-1" />
            </div>
            <p className="font-semibold text-base">Quick 2-Minute Interactive Tour</p>
            <p className="text-xs text-white/60 mt-1 max-w-sm">
              Instant template picker, color token engine, responsive editor & custom DNS mapping.
            </p>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-2">
            <SlideButton
              variant="outline"
              onClick={() => setDemoOpen(false)}
              className="w-full sm:w-auto"
            >
              Close
            </SlideButton>
            <SlideButton
              variant="primary"
              href="/register"
              onClick={() => setDemoOpen(false)}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Start Building Now
            </SlideButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
