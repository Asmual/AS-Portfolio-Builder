"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X, Moon } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleActionClick = (actionName: string) => {
    toast.info(`${actionName} clicked`, {
      description: "Authentication & routing will be connected in Phase 2.",
    });
  };

  return (
    <header className="relative z-40 w-full bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <BrandLogo />

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[15px] font-medium text-[#10291D]/90">
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#064B2B] transition-colors">
            <span>Themes</span>
            <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#10291D]/70" />
            <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-border bg-white p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="#themes"
                className="block px-3 py-2 text-xs rounded-lg hover:bg-[#eef7ee] text-[#10291D] font-normal"
              >
                Developer Themes
              </Link>
              <Link
                href="#themes"
                className="block px-3 py-2 text-xs rounded-lg hover:bg-[#eef7ee] text-[#10291D] font-normal"
              >
                Designer Portfolios
              </Link>
              <Link
                href="#themes"
                className="block px-3 py-2 text-xs rounded-lg hover:bg-[#eef7ee] text-[#10291D] font-normal"
              >
                Agency & Freelancer
              </Link>
            </div>
          </div>

          <Link href="#features" className="hover:text-[#064B2B] transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-[#064B2B] transition-colors">
            Pricing
          </Link>
          <Link href="#templates" className="hover:text-[#064B2B] transition-colors">
            Templates
          </Link>
          <Link href="#blog" className="hover:text-[#064B2B] transition-colors">
            Blog
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Subtle Moon Icon matching reference image */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#10291D]/75 hover:bg-black/5 transition-colors cursor-pointer"
            onClick={() => toast.info("Theme system will be available in settings.")}
            title="Theme Settings"
          >
            <Moon className="w-4 h-4 stroke-[1.8]" />
          </div>

          {/* Sign In: transparent/glass style with thin elegant light-green border */}
          <Button
            variant="outline"
            size="default"
            onClick={() => handleActionClick("Sign In")}
            className="rounded-full px-6 font-medium text-sm border border-[#CDECCB] sm:border-[#064B2B]/30 bg-transparent hover:bg-white/40 text-[#10291D] shadow-none h-11"
          >
            Sign In
          </Button>

          {/* Get Started Free: solid dark green (#064B2B), white text, rounded pill, subtle shadow, arrow icon */}
          <Button
            variant="default"
            size="default"
            onClick={() => handleActionClick("Get Started Free")}
            className="rounded-full px-6 gap-2 font-medium text-sm bg-[#064B2B] hover:bg-[#043820] text-white shadow-md hover:shadow-lg transition-all h-11"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="rounded-full border-[#064B2B]/30 bg-white/50"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#10291D]" /> : <Menu className="w-5 h-5 text-[#10291D]" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#064B2B]/10 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#10291D]">
            <Link
              href="#themes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#eef7ee]"
            >
              Themes
            </Link>
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#eef7ee]"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#eef7ee]"
            >
              Pricing
            </Link>
            <Link
              href="#templates"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#eef7ee]"
            >
              Templates
            </Link>
            <Link
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#eef7ee]"
            >
              Blog
            </Link>
          </nav>
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <Button
              variant="outline"
              className="w-full justify-center rounded-full border-[#064B2B]/30 text-[#10291D]"
              onClick={() => {
                setMobileMenuOpen(false);
                handleActionClick("Sign In");
              }}
            >
              Sign In
            </Button>
            <Button
              variant="default"
              className="w-full justify-center gap-2 rounded-full bg-[#064B2B] text-white"
              onClick={() => {
                setMobileMenuOpen(false);
                handleActionClick("Get Started Free");
              }}
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
