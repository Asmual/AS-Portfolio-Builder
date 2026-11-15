"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function BrandLogo({ className, iconOnly = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 group select-none", className)}
      aria-label="AS Portfolio Builder Home"
    >
      {/* Modern High-End Monogram / Hex Emblem (Solid flat primary #136968) */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-[#136968] text-white shadow-md border border-[#249492]/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0c4a49]">
        {/* Modern Stylized Monogram SVG */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white relative z-10"
        >
          {/* Outer geometric shield / portfolio frame */}
          <rect
            x="4"
            y="4"
            width="24"
            height="24"
            rx="6"
            stroke="#E8F4F4"
            strokeWidth="1.8"
            strokeOpacity="0.85"
          />
          {/* Stylized 'A' chevron */}
          <path
            d="M10 22L16 9L22 22"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 'S' fluid wave through crossbar */}
          <path
            d="M12 17C14 15.5 18 15.5 20 17"
            stroke="#249492"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>

        {/* Small floating secondary teal spark */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#249492] border-2 border-white" />
      </div>

      {!iconOnly && (
        <div className="flex items-baseline tracking-tight">
          {/* AS with Brand Base Teal */}
          <span className="text-2xl font-black tracking-tight text-[#136968] font-sans">
            AS
          </span>
          {/* Portfolio in Dark Charcoal */}
          <span className="text-[19px] font-semibold text-[#10291D] ml-1.5 font-sans tracking-tight">
            Portfolio
          </span>
          {/* Builder highlighted with Secondary Accent Teal */}
          <span className="text-[19px] font-extrabold text-[#249492] ml-1 font-sans tracking-tight">
            Builder
          </span>
          {/* Minimal Accent Dot */}
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#249492] ml-0.5 mb-1" />
        </div>
      )}
    </Link>
  );
}
