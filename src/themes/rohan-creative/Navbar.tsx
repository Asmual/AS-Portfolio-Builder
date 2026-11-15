"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  name: string;
  role: string;
}

export function ThemeNavbar({ name, role }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-40 bg-transparent text-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-24 flex items-center justify-between">
        
        {/* Left: Monogram Brand Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl border border-[#C25E34]/40 bg-[#25221F] flex items-center justify-center font-serif font-black text-sm text-[#E07A4B] shadow-inner group-hover:scale-105 transition-transform">
            RS
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base tracking-tight text-white group-hover:text-[#E07A4B] transition-colors">
              {name}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-gray-400 font-sans">
              {role}
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-300">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className={`hover:text-[#E07A4B] transition-colors relative py-1 ${
                idx === 0 ? "text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C25E34]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact">
            <Button
              className="rounded-full bg-[#C25E34] hover:bg-[#A84F2A] text-white font-semibold text-xs h-10 px-5 gap-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#181716]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-[#C25E34] text-white rounded-full text-xs">
                Let&apos;s Talk
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
