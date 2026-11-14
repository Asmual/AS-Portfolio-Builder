"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Palette, ShieldCheck, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section className="relative overflow-hidden isolate pt-4 pb-0 bg-[#F8F8EF]">
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

      {/* Decorative Floating Green Leaves */}
      <div className="absolute top-16 left-6 lg:left-12 opacity-60 pointer-events-none z-10 hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <path
            d="M15 85C12 55 42 22 88 8C78 42 52 82 15 85Z"
            fill="#2e6c34"
            fillOpacity="0.4"
          />
          <path
            d="M25 75C32 50 52 32 82 18"
            stroke="#064B2B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.45"
          />
        </svg>
      </div>

      {/* 
        ========================================================================
        2. MAIN HERO CONTAINER: EXACT 50-50 SPLIT (Left Col & Right Col)
        Left text sits cleanly on cream, right images on organic curved green
        ========================================================================
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          
          {/* 
            --------------------------------------------------------------------
            LEFT COLUMN (50% WIDTH): Heading, Subtitle, Dual CTAs & Badges
            100% on light cream background, zero overlap with dark green!
            --------------------------------------------------------------------
          */}
          <div className="space-y-6 text-center lg:text-left z-20">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#10291D] leading-[1.12]">
              Create Your <br />
              Portfolio in{" "}
              <span className="text-[#16803D] relative inline-block">
                One Click
                {/* Decorative underline brush stroke */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#16803D]/60"
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
            <p className="text-base sm:text-lg text-[#10291D]/80 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Choose from stunning themes, customize them with ease, and launch
              your professional portfolio on your domain or our subdomain.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* "Browse Themes": solid green (#16803D) background, white text, right arrow */}
              <Button
                variant="default"
                size="lg"
                onClick={handleBrowseThemes}
                className="w-full sm:w-auto px-8 py-3 gap-2 font-semibold text-base bg-[#16803D] hover:bg-[#064B2B] text-white rounded-full shadow-md hover:shadow-lg transition-all h-12 cursor-pointer"
              >
                <span>Browse Themes</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </Button>

              {/* "Watch Demo": cream/white background, dark green text, clearly visible 2px green border */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => setDemoOpen(true)}
                className="w-full sm:w-auto px-7 py-3 gap-2.5 font-semibold text-base bg-[#F8F8EF] hover:bg-white text-[#10291D] border-2 border-[#16803D] rounded-full shadow-xs transition-all h-12 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[#16803D]/15 flex items-center justify-center text-[#16803D]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </Button>
            </div>

            {/* Feature badges row */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#10291D]/75">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#16803D]" />
                <span>Custom Domains & SSL</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#16803D]" />
                <span>Plans From $5/mo</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#16803D]" />
                <span>Instant Live Customizer</span>
              </div>
            </div>
          </div>

          {/* 
            --------------------------------------------------------------------
            RIGHT COLUMN (50% WIDTH):
            Organic Curved Green Backdrop with Smooth Fade + 3D Portfolio Cards
            --------------------------------------------------------------------
          */}
          <div className="relative w-full flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]">
            
            {/* 
              Organic Curved Shape & Soft Radial Fade (Strictly confined to Right Side)
              Combines smooth organic SVG wave curves and soft emerald glow
            */}
            <div className="absolute inset-0 -inset-x-4 sm:-inset-x-8 rounded-[40px] sm:rounded-[48px] overflow-hidden pointer-events-none">
              {/* Soft Ambient Radial Glow for fade vibe */}
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  background:
                    "radial-gradient(circle at 65% 45%, #064B2B 0%, #0a5832 45%, #16803D 70%, rgba(22, 128, 61, 0.4) 85%, transparent 100%)",
                }}
              />

              {/* Organic Flowing Curves SVG inside the right container */}
              <svg
                viewBox="0 0 700 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full object-cover"
                preserveAspectRatio="none"
              >
                {/* Outermost smooth wave with soft opacity */}
                <path
                  d="M160 0 C 40 180, 20 420, 120 700 L 700 700 L 700 0 Z"
                  fill="#16803D"
                  fillOpacity="0.4"
                />
                {/* Middle organic wave */}
                <path
                  d="M240 0 C 100 200, 90 460, 200 700 L 700 700 L 700 0 Z"
                  fill="#064B2B"
                  fillOpacity="0.8"
                />
                {/* Deep forest core */}
                <path
                  d="M320 0 C 180 220, 160 480, 280 700 L 700 700 L 700 0 Z"
                  fill="#064B2B"
                  fillOpacity="0.95"
                />
                {/* Curved aesthetic glowing border contour */}
                <path
                  d="M240 0 C 100 200, 90 460, 200 700"
                  stroke="#CDECCB"
                  strokeWidth="2.5"
                  strokeOpacity="0.5"
                  fill="none"
                />
              </svg>
            </div>

            {/* 
              3D Overlapping Portfolio Showcase Cards
              Floating inside the organic green zone with real screenshots
            */}
            <div className="relative z-10 w-full max-w-[480px] sm:max-w-[520px] aspect-[4/3] flex items-center justify-center">
              
              {/* CARD 1: Background Left-Angled - Rohan Sharma Portfolio */}
              <div className="absolute -left-2 sm:left-1 top-8 w-[250px] sm:w-[290px] aspect-[16/10] rounded-xl bg-white p-2 shadow-2xl border-2 border-white/90 transform -rotate-6 hover:-rotate-3 transition-transform duration-500 overflow-hidden">
                {/* Browser top chrome with 3 dots */}
                <div className="flex items-center gap-1.5 pb-1.5 px-1 border-b border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[9px] text-gray-400 font-mono ml-2 truncate">
                    rohan-sharma.asportfolio.site
                  </span>
                </div>
                <div className="relative w-full h-[calc(100%-18px)] rounded-md overflow-hidden bg-gray-50 mt-1">
                  <Image
                    src="/images/Hero-right side image (1).jpg"
                    alt="Rohan Sharma Portfolio Preview"
                    fill
                    sizes="(max-width: 640px) 250px, 290px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* CARD 2: Background Right-Angled - Web Designer Portfolio */}
              <div className="absolute -right-2 sm:right-1 bottom-4 w-[240px] sm:w-[280px] aspect-[16/10] rounded-xl bg-white p-2 shadow-2xl border-2 border-white/90 transform rotate-6 hover:rotate-3 transition-transform duration-500 overflow-hidden">
                <div className="flex items-center gap-1.5 pb-1.5 px-1 border-b border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[9px] text-gray-400 font-mono ml-2 truncate">
                    designer-folio.com
                  </span>
                </div>
                <div className="relative w-full h-[calc(100%-18px)] rounded-md overflow-hidden bg-gray-50 mt-1">
                  <Image
                    src="/images/Hero-right side image (2).jpg"
                    alt="Creative Designer Portfolio Preview"
                    fill
                    sizes="(max-width: 640px) 240px, 280px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* CARD 3: Centerpiece - EcoBuild Architecture / Senior Dev Portfolio */}
              <div className="relative z-20 w-[270px] sm:w-[320px] aspect-[16/10] rounded-2xl bg-white p-2.5 shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-500 overflow-hidden">
                <div className="flex items-center justify-between pb-1.5 px-1 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono font-medium">
                    live • ecobuild-studio.dev
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#16803D] animate-ping" />
                </div>
                <div className="relative w-full h-[calc(100%-20px)] rounded-lg overflow-hidden bg-gray-50 mt-1">
                  <Image
                    src="/images/Hero-right side image (3).jpg"
                    alt="EcoBuild Architectural Portfolio Preview"
                    fill
                    priority
                    sizes="(max-width: 640px) 270px, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Pill Badges around the 3D cards */}
              {/* Top-Right Badge: "Your Domain or Subdomain" */}
              <div className="absolute -top-3 right-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-[#CDECCB] text-[#10291D] text-xs font-semibold animate-bounce duration-1000">
                <div className="w-5 h-5 rounded-full bg-[#eef7ee] text-[#16803D] flex items-center justify-center">
                  <Globe className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>Custom Domain</span>
              </div>

              {/* Bottom-Left Badge: "Customize Easily" */}
              <div className="absolute -bottom-2 left-2 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-[#CDECCB] text-[#10291D] text-xs font-semibold">
                <div className="w-5 h-5 rounded-full bg-[#eef7ee] text-[#16803D] flex items-center justify-center">
                  <Palette className="w-3 h-3 text-[#16803D]" />
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
      <div className="relative z-10 w-full overflow-hidden leading-none -mt-4 sm:-mt-6">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 lg:h-20 object-fill block"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Soft ambient green wave contour */}
          <path
            d="M0 45 C 180 10, 360 80, 540 30 C 720 -15, 900 70, 1080 25 C 1260 -15, 1380 50, 1440 30 L 1440 90 L 0 90 Z"
            fill="#16803D"
            fillOpacity="0.18"
          />
          {/* Layer 2: Main organic wave transition */}
          <path
            d="M0 55 C 160 20, 320 85, 480 35 C 640 -10, 800 75, 960 28 C 1120 -10, 1280 65, 1440 40 L 1440 90 L 0 90 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Watch Demo Modal / Dialog */}
      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="sm:max-w-md bg-white border border-[#CDECCB]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#10291D]">
              <span className="p-1.5 rounded-lg bg-[#eef7ee] text-[#16803D]">
                <Play className="w-4 h-4 fill-current" />
              </span>
              <span>AS Portfolio Builder Preview</span>
            </DialogTitle>
            <DialogDescription className="text-[#10291D]/70">
              Watch how quickly you can choose a theme, customize content, and publish your live website.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-2 text-sm text-[#10291D]">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F8EF] border border-[#CDECCB]/60">
              <CheckCircle2 className="w-5 h-5 text-[#16803D] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#10291D]">Step 1: Pick a Designer Theme</p>
                <p className="text-xs text-[#10291D]/70">Select from multiple modern developer & designer themes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F8EF] border border-[#CDECCB]/60">
              <CheckCircle2 className="w-5 h-5 text-[#16803D] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#10291D]">Step 2: Real-Time Live Customizer</p>
                <p className="text-xs text-[#10291D]/70">Edit projects, bio, skills, and theme colors with instant preview.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F8EF] border border-[#CDECCB]/60">
              <CheckCircle2 className="w-5 h-5 text-[#16803D] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#10291D]">Step 3: Connect Domain & Publish</p>
                <p className="text-xs text-[#10291D]/70">Deploy to username.asportfoliobuilder.com or your custom domain with SSL.</p>
              </div>
            </div>
          </div>

          <DialogFooter className="sm:justify-between items-center gap-2 pt-2">
            <Button variant="ghost" onClick={() => setDemoOpen(false)} className="rounded-full">
              Close
            </Button>
            <Button
              variant="default"
              className="bg-[#064B2B] hover:bg-[#043820] text-white rounded-full"
              onClick={() => {
                setDemoOpen(false);
                handleBrowseThemes();
              }}
            >
              Get Started Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
