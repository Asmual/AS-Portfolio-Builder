"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X, Moon, LayoutGrid, Palette, Briefcase, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="relative z-40 w-full bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
        {/* Left: Brand Logo with styled AS & Builder */}
        <BrandLogo />

        {/* Center: Desktop Navigation Links (text-[15px] font-medium) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[15px] font-medium text-[#10291D]/90">
          {/* Themes Dropdown */}
          <div className="relative group cursor-pointer flex items-center gap-1.5 hover:text-[#136968] transition-colors py-2">
            <span>Themes</span>
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-[#10291D]/70" />
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-1 w-64 rounded-2xl border border-[#B8DFDF]/70 bg-white p-2.5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="#themes"
                className="flex items-center gap-3 px-3.5 py-2.5 text-[15px] rounded-xl hover:bg-[#E8F4F4] text-[#10291D] font-medium transition-colors group/item"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E8F4F4] text-[#136968] flex items-center justify-center shrink-0 group-hover/item:bg-[#136968] group-hover/item:text-white transition-colors">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-[#10291D]">Developer Themes</div>
                  <div className="text-xs text-[#10291D]/60 font-normal">GitHub, Tech stack & Terminal</div>
                </div>
              </Link>

              <Link
                href="#themes"
                className="flex items-center gap-3 px-3.5 py-2.5 text-[15px] rounded-xl hover:bg-[#E8F4F4] text-[#10291D] font-medium transition-colors group/item"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E8F4F4] text-[#136968] flex items-center justify-center shrink-0 group-hover/item:bg-[#136968] group-hover/item:text-white transition-colors">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-[#10291D]">Designer Portfolios</div>
                  <div className="text-xs text-[#10291D]/60 font-normal">Figma, Visual Case Studies</div>
                </div>
              </Link>

              <Link
                href="#themes"
                className="flex items-center gap-3 px-3.5 py-2.5 text-[15px] rounded-xl hover:bg-[#E8F4F4] text-[#10291D] font-medium transition-colors group/item"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E8F4F4] text-[#136968] flex items-center justify-center shrink-0 group-hover/item:bg-[#136968] group-hover/item:text-white transition-colors">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-[#10291D]">Agency & Freelancer</div>
                  <div className="text-xs text-[#10291D]/60 font-normal">Client work & High conversion</div>
                </div>
              </Link>
            </div>
          </div>

          <Link href="#features" className="hover:text-[#136968] transition-colors py-2">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-[#136968] transition-colors py-2">
            Pricing
          </Link>
          <Link href="#templates" className="hover:text-[#136968] transition-colors py-2">
            Templates
          </Link>
          <Link href="#contact" className="hover:text-[#136968] transition-colors py-2">
            Contact
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Subtle Settings/Moon Icon */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#10291D]/75 hover:bg-black/5 transition-colors cursor-pointer"
            onClick={() => toast.info("Theme customization will be available in workspace settings.")}
            title="Theme Settings"
          >
            <Moon className="w-4 h-4 stroke-[1.8]" />
          </div>

          {/* Sign In button linking directly to /login */}
          <Link href="/login">
            <Button
              variant="outline"
              size="default"
              className="rounded-full px-6 font-medium text-sm border border-[#136968]/30 bg-transparent hover:bg-white text-[#10291D] shadow-none h-11 transition-all cursor-pointer"
            >
              Sign In
            </Button>
          </Link>

          {/* Get Started button linking directly to /register */}
          <Link href="/register">
            <Button
              variant="default"
              size="default"
              className="rounded-full px-6 gap-2 font-medium text-sm bg-[#136968] hover:bg-[#0c4a49] text-white shadow-md hover:shadow-lg transition-all h-11 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm" className="rounded-full text-xs h-9 px-3">
              Sign In
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#10291D] hover:bg-black/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-border bg-[#F8F8EF]/95 backdrop-blur-md px-6 py-6 space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-[#136968] px-2 py-1">
              Themes
            </div>
            <Link
              href="#themes"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-[15px] font-medium text-[#10291D] rounded-lg hover:bg-white/80"
            >
              Developer Themes
            </Link>
            <Link
              href="#themes"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-[15px] font-medium text-[#10291D] rounded-lg hover:bg-white/80"
            >
              Designer Portfolios
            </Link>
            <Link
              href="#themes"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-[15px] font-medium text-[#10291D] rounded-lg hover:bg-white/80"
            >
              Agency & Freelancer
            </Link>
          </div>

          <div className="pt-2 border-t border-black/5 space-y-2">
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-[15px] font-medium text-[#10291D] rounded-lg hover:bg-white/80"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-[15px] font-medium text-[#10291D] rounded-lg hover:bg-white/80"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-[15px] font-medium text-[#10291D] rounded-lg hover:bg-white/80"
            >
              Contact
            </Link>
          </div>

          <div className="pt-2">
            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-[#136968] hover:bg-[#0c4a49] text-white rounded-full h-11 text-sm font-semibold transition-colors">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
