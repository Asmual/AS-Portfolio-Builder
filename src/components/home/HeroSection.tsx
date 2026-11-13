"use client";

import * as React from "react";
import Image from "next/image";
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
    toast.success("Exploring Themes Marketplace", {
      description: "Themes catalog will open with full multi-tenant templates.",
    });
  };

  return (
    <section className="relative overflow-hidden isolate pt-2 pb-16 lg:pt-4 lg:pb-28">
      {/* 
        ========================================================================
        1. ORGANIC CURVED BACKGROUND (Navbar + Hero Continuous Integration)
        Rich forest green on the right smoothly curving into cream on the left
        ========================================================================
      */}
      <div className="absolute inset-0 -top-28 z-0 pointer-events-none select-none overflow-hidden">
        {/* Base cream tone */}
        <div className="absolute inset-0 bg-[#F8F8EF]" />

        {/* Hero Background Texture Image (HeroBg.jpg) from user resources */}
        <div className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none">
          <Image
            src="/images/HeroBg.jpg"
            alt="Hero Background Accent"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* 
          Rich Forest Green Radial & Linear Gradient Mesh on the Right 
          Using direct CSS so it renders with 100% consistency in all browser engines
        */}
        <div
          className="absolute top-0 right-0 w-[62%] h-[120%] hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse at 92% 35%, #064B2B 0%, #0d5c36 28%, #16803D 52%, rgba(22, 128, 61, 0.45) 72%, transparent 88%)",
          }}
        />

        {/* Sweeping organic wave overlay using reliable solid-fill SVG paths with opacity */}
        <div className="absolute top-0 right-0 w-[62%] lg:w-[58%] h-[120%] hidden md:block">
          <svg
            viewBox="0 0 1000 1000"
            fill="none"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            {/* Outer softer wave */}
            <path
              d="M300 0 C 160 260, 240 560, 100 1000 L 1000 1000 L 1000 0 Z"
              fill="#16803D"
              fillOpacity="0.45"
            />

            {/* Middle wave */}
            <path
              d="M380 0 C 210 270, 310 600, 170 1000 L 1000 1000 L 1000 0 Z"
              fill="#064B2B"
              fillOpacity="0.75"
            />

            {/* Inner rich forest wave */}
            <path
              d="M480 0 C 290 280, 400 620, 260 1000 L 1000 1000 L 1000 0 Z"
              fill="#064B2B"
              fillOpacity="0.95"
            />

            {/* Elegant light-green border contour accentuating the organic S-curve */}
            <path
              d="M380 0 C 210 270, 310 600, 170 1000"
              stroke="#CDECCB"
              strokeWidth="3"
              strokeOpacity="0.6"
              fill="none"
            />
          </svg>
        </div>

        {/* Mobile ambient gradient */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-bl from-[#064B2B] via-[#16803D]/60 to-transparent rounded-full blur-3xl md:hidden" />

        {/* Floating Green Leaves matching reference design */}
        {/* Top-Left Leaf */}
        <div className="absolute top-20 left-4 lg:left-10 opacity-75">
          <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
            <path
              d="M15 85C12 55 42 22 88 8C78 42 52 82 15 85Z"
              fill="#2e6c34"
              fillOpacity="0.45"
            />
            <path
              d="M25 75C32 50 52 32 82 18"
              stroke="#064B2B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
          </svg>
        </div>

        {/* Bottom-Left Leaf */}
        <div className="absolute bottom-12 left-6 lg:left-24 opacity-60">
          <svg width="56" height="56" viewBox="0 0 100 100" fill="none" className="-rotate-45">
            <path
              d="M15 85C12 55 42 22 88 8C78 42 52 82 15 85Z"
              fill="#16803D"
              fillOpacity="0.35"
            />
            <path
              d="M25 75C32 50 52 32 82 18"
              stroke="#064B2B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeOpacity="0.4"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* 
            ====================================================================
            LEFT COLUMN: Heading, Subtitle, Dual CTAs & Social Proof
            (NO top badge, exact copy & styling from reference)
            ====================================================================
          */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left z-10">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-[#10291D] leading-[1.12]">
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

            {/* Subtitle copy */}
            <p className="text-base sm:text-lg text-[#10291D]/80 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Choose from stunning themes, customize them with ease, and launch
              your professional portfolio on your domain or our subdomain.
            </p>

            {/* Dual CTAs matching exact prompt button rules */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              {/* "Browse Themes": solid green (#16803D) background, white text, right arrow */}
              <Button
                variant="default"
                size="lg"
                onClick={handleBrowseThemes}
                className="w-full sm:w-auto px-8 py-3 gap-2 font-semibold text-base bg-[#16803D] hover:bg-[#064B2B] text-white rounded-full shadow-md hover:shadow-lg transition-all h-12"
              >
                <span>Browse Themes</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </Button>

              {/* "Watch Demo": cream/white background, dark green text, clearly visible 1.5-2px green border, circular play icon */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => setDemoOpen(true)}
                className="w-full sm:w-auto px-7 py-3 gap-2.5 font-semibold text-base bg-[#F8F8EF] hover:bg-white text-[#10291D] border-2 border-[#16803D] rounded-full shadow-xs transition-all h-12"
              >
                <div className="w-6 h-6 rounded-full bg-[#16803D] flex items-center justify-center text-white">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </Button>
            </div>

            {/* Social Proof Row */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F8F8EF] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Creator Avatar"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F8F8EF] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Creator Avatar"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F8F8EF] object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Creator Avatar"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F8F8EF] object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                  alt="Creator Avatar"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F8F8EF] object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Creator Avatar"
                />
              </div>
              <span className="text-sm font-semibold text-[#10291D]/85">
                Trusted by <span className="text-[#16803D] font-bold">50K+</span> Creators
              </span>
            </div>

          </div>

          {/* 
            ====================================================================
            RIGHT COLUMN: Three 3D Portfolio Preview Cards in Overlapping Composition
            ====================================================================
          */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            
            {/* 3D Container */}
            <div className="relative w-full max-w-[640px] h-[480px] sm:h-[540px] lg:h-[580px] flex items-center justify-center">

              {/* 
                ----------------------------------------------------------------
                Floating Badge 1: Top-Left "Customize Easily"
                ----------------------------------------------------------------
              */}
              <div className="absolute top-2 sm:top-6 left-4 sm:left-10 z-40 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#CDECCB] shadow-lg backdrop-blur-md text-xs font-bold text-[#10291D] hover:scale-105 transition-transform">
                <div className="w-5 h-5 rounded-full bg-[#eef7ee] flex items-center justify-center text-[#16803D]">
                  <Palette className="w-3.5 h-3.5" />
                </div>
                <span>Customize Easily</span>
              </div>

              {/* 
                ----------------------------------------------------------------
                Floating Badge 2: Top-Right "Your Domain or Subdomain"
                ----------------------------------------------------------------
              */}
              <div className="absolute top-6 sm:top-10 right-2 sm:right-6 z-40 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-[#CDECCB] shadow-lg backdrop-blur-md text-xs font-bold text-[#10291D] hover:scale-105 transition-transform">
                <div className="w-5 h-5 rounded-full bg-[#eef7ee] flex items-center justify-center text-[#16803D]">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block font-bold">Your Domain</span>
                  <span className="text-[10px] text-[#10291D]/70 font-normal">or Subdomain</span>
                </div>
              </div>

              {/* 
                ----------------------------------------------------------------
                Floating Badge 3: Bottom-Left "Fast & Secure"
                ----------------------------------------------------------------
              */}
              <div className="absolute bottom-8 sm:bottom-12 left-10 sm:left-24 z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-[#CDECCB] shadow-xl backdrop-blur-md text-xs font-bold text-[#10291D] hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4 text-[#16803D]" />
                <span>Fast & Secure</span>
              </div>

              {/* 
                ----------------------------------------------------------------
                CARD 1 (Main/Back): EcoBuild Architecture Portfolio
                Upper-right, slightly elevated
                File: Hero-right side image (3).jpg
                ----------------------------------------------------------------
              */}
              <div className="absolute top-4 sm:top-6 right-2 sm:right-6 w-[290px] sm:w-[360px] lg:w-[380px] aspect-[736/582] rounded-2xl bg-white p-2 sm:p-2.5 shadow-[0_20px_45px_-10px_rgba(6,75,43,0.35)] border-[3px] border-white transform rotate-[4deg] hover:rotate-[1deg] hover:scale-105 transition-all duration-300 z-10">
                {/* Browser Top Bar with 3 Dots */}
                <div className="flex items-center gap-1.5 pb-1.5 px-1 border-b border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="mx-auto w-24 h-1.5 rounded-full bg-gray-100" />
                </div>
                {/* Actual EcoBuild Screenshot */}
                <div className="relative w-full h-[calc(100%-14px)] rounded-xl overflow-hidden mt-1">
                  <Image
                    src="/images/Hero-right side image (3).jpg"
                    alt="EcoBuild Architecture Portfolio Theme"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* 
                ----------------------------------------------------------------
                CARD 2 (Middle/Front): Rohan Sharma UI/UX Designer
                Tilted counterclockwise, overlapping other cards
                File: Hero-right side image (1).jpg (Rohan Sharma)
                ----------------------------------------------------------------
              */}
              <div className="absolute top-20 sm:top-24 left-2 sm:left-8 w-[275px] sm:w-[340px] lg:w-[360px] aspect-[736/603] rounded-2xl bg-white p-2 sm:p-2.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border-[3px] border-white transform -rotate-[5deg] hover:-rotate-[2deg] hover:scale-105 transition-all duration-300 z-20">
                {/* Browser Top Bar with 3 Dots */}
                <div className="flex items-center gap-1.5 pb-1.5 px-1 border-b border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="mx-auto w-24 h-1.5 rounded-full bg-gray-100" />
                </div>
                {/* Actual Rohan Sharma Screenshot */}
                <div className="relative w-full h-[calc(100%-14px)] rounded-xl overflow-hidden mt-1">
                  <Image
                    src="/images/Hero-right side image (1).jpg"
                    alt="Rohan Sharma UI/UX Designer Portfolio Theme"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* 
                ----------------------------------------------------------------
                CARD 3 (Right/Front): Web Designer Portfolio
                Tilted clockwise, overlapping middle card
                File: Hero-right side image (2).jpg (Web Designer - Himel)
                ----------------------------------------------------------------
              */}
              <div className="absolute bottom-2 sm:bottom-6 right-1 sm:right-6 w-[270px] sm:w-[335px] lg:w-[355px] aspect-[736/603] rounded-2xl bg-white p-2 sm:p-2.5 shadow-[0_25px_50px_-10px_rgba(0,0,0,0.35)] border-[3px] border-white transform rotate-[5deg] hover:rotate-[2deg] hover:scale-105 transition-all duration-300 z-30">
                {/* Browser Top Bar with 3 Dots */}
                <div className="flex items-center gap-1.5 pb-1.5 px-1 border-b border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="mx-auto w-24 h-1.5 rounded-full bg-gray-100" />
                </div>
                {/* Actual Web Designer Screenshot */}
                <div className="relative w-full h-[calc(100%-14px)] rounded-xl overflow-hidden mt-1">
                  <Image
                    src="/images/Hero-right side image (2).jpg"
                    alt="Web Designer Portfolio Theme"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
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
