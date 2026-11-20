"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X, Moon } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { SlideButton } from "@/components/common/SlideButton";
import { toast } from "@/components/ui/sonner";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="relative z-40 w-full bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
        {/* Left: Brand Logo (pure transparent, no background, no box) */}
        <BrandLogo />

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[15px] font-medium text-[#10291D]/90">
          {/* Themes Dropdown with visible, refined 1px border */}
          <div className="relative group cursor-pointer py-2">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#136968]/40 hover:border-[#136968] bg-white/70 hover:bg-white transition-all shadow-xs">
              <span className="font-semibold text-[#136968]">Themes</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-[#136968]" />
            </div>

            {/* Dropdown Menu - Clean typography without left icons */}
            <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl border border-[#136968]/20 bg-white p-2.5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="#themes"
                className="block px-4 py-3 rounded-xl hover:bg-[#E8F4F4] transition-colors group/item"
              >
                <div className="text-[15px] font-semibold text-[#10291D] group-hover/item:text-[#136968] transition-colors">
                  Developer Themes
                </div>
                <div className="text-xs text-[#10291D]/65 font-normal mt-0.5">
                  GitHub, Tech stack & Terminal
                </div>
              </Link>

              <Link
                href="#themes"
                className="block px-4 py-3 rounded-xl hover:bg-[#E8F4F4] transition-colors group/item"
              >
                <div className="text-[15px] font-semibold text-[#10291D] group-hover/item:text-[#136968] transition-colors">
                  Designer Portfolios
                </div>
                <div className="text-xs text-[#10291D]/65 font-normal mt-0.5">
                  Figma, Visual Case Studies
                </div>
              </Link>

              <Link
                href="#themes"
                className="block px-4 py-3 rounded-xl hover:bg-[#E8F4F4] transition-colors group/item"
              >
                <div className="text-[15px] font-semibold text-[#10291D] group-hover/item:text-[#136968] transition-colors">
                  Agency & Freelancer
                </div>
                <div className="text-xs text-[#10291D]/65 font-normal mt-0.5">
                  Client work & High conversion
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

        {/* Right: Actions with sliding door hover buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Subtle Settings/Moon Icon */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#10291D]/75 hover:bg-black/5 transition-colors cursor-pointer"
            onClick={() => toast.info("Theme customization will be available in workspace settings.")}
            title="Theme Settings"
          >
            <Moon className="w-4 h-4 stroke-[1.8]" />
          </div>

          {/* Sign In button with 1px solid visible border & sliding door hover effect */}
          <SlideButton
            variant="outline"
            size="default"
            href="/login"
            className="border-2 border-[#136968] text-[#136968] font-semibold h-11 px-6"
          >
            Sign In
          </SlideButton>

          {/* Get Started button with sliding door hover effect */}
          <SlideButton
            variant="primary"
            size="default"
            href="/register"
            icon={<ArrowRight className="w-4 h-4" />}
            className="h-11 px-6 shadow-md"
          >
            Get Started
          </SlideButton>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <SlideButton variant="outline" size="sm" href="/login" className="h-9 px-3 text-xs">
            Sign In
          </SlideButton>
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
        <div className="md:hidden border-b border-black/10 bg-white/95 backdrop-blur-md px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-medium text-[#10291D]">
            <Link
              href="#themes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#136968] font-semibold"
            >
              Themes
            </Link>
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#136968]"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#136968]"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#136968]"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 border-t border-black/10 flex flex-col gap-2.5">
            <SlideButton
              variant="outline"
              href="/login"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </SlideButton>
            <SlideButton
              variant="primary"
              href="/register"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </SlideButton>
          </div>
        </div>
      )}
    </header>
  );
}
