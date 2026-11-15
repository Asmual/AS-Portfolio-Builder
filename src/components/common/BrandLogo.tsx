"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  iconOnly?: boolean;
  inverted?: boolean;
  variant?: "horizontal" | "stacked";
  size?: "sm" | "md" | "lg";
}

/**
 * Exact geometric triangular "AS" monogram
 * Traced from authentic isometric reference
 * ViewBox: 160 150 305 260
 */
export function ASTriangleIcon({
  className,
  colorA,
  colorS,
}: {
  className?: string;
  colorA?: string;
  colorS?: string;
}) {
  return (
    <svg
      viewBox="160 150 305 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-auto h-auto transition-transform duration-300", className)}
      aria-hidden="true"
    >
      {/* Letter A: Lower Part (Base & Crossbar) */}
      <polygon
        points="164,404 198,345 268,345 284,372 214,372 195,404"
        fill={colorA || "currentColor"}
      />

      {/* Letter A: Upper Part (Apex Chevron & Right Slanted Leg) */}
      <polygon
        points="257,245 352,404 320,404 259,301 237,333 205,333"
        fill={colorA || "currentColor"}
      />

      {/* Letter S: Complete Intertwined Loop */}
      <polygon
        points="313,156 382,270 351,270 314,210 299,233 332,287 392,287 461,404 369,404 326,330 358,330 385,376 413,376 376,313 316,313 268,233"
        fill={colorS || "#249492"}
      />
    </svg>
  );
}

export function BrandLogo({
  className,
  iconOnly = false,
  inverted = false,
  variant = "horizontal",
  size = "md",
}: BrandLogoProps) {
  // Theme color bindings
  const fillA = inverted ? "#FFFFFF" : "#136968";
  const fillS = "#249492";

  if (variant === "stacked") {
    return (
      <Link
        href="/"
        className={cn(
          "inline-flex flex-col items-center justify-center text-center group select-none transition-transform hover:scale-[1.02]",
          className
        )}
        aria-label="AS Portfolio Builder Home"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-3">
          <ASTriangleIcon
            className="w-full h-full drop-shadow-xs"
            colorA={fillA}
            colorS={fillS}
          />
        </div>
        <span
          className={cn(
            "text-base sm:text-lg font-extrabold tracking-[0.22em] uppercase font-sans",
            inverted ? "text-white" : "text-[#10291D]"
          )}
        >
          Portfolio Builder
        </span>
        <span
          className={cn(
            "text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mt-1",
            inverted ? "text-[#B8DFDF]" : "text-[#136968]"
          )}
        >
          One-Click Platform
        </span>
      </Link>
    );
  }

  // Horizontal Header / Navbar Lockup
  const iconDimensions = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 group select-none", className)}
      aria-label="AS Portfolio Builder Home"
    >
      {/* Triangular Geometric Emblem Container */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-2xl p-1.5 transition-all duration-300 group-hover:scale-105 shadow-xs border",
          inverted
            ? "bg-white/10 border-white/20 hover:bg-white/15"
            : "bg-[#E8F4F4]/80 border-[#B8DFDF]/80 hover:bg-[#E8F4F4] hover:border-[#136968]/30",
          iconDimensions
        )}
      >
        <ASTriangleIcon
          className="w-full h-full object-contain"
          colorA={fillA}
          colorS={fillS}
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline tracking-tight">
            <span
              className={cn(
                "text-xl sm:text-[22px] font-black font-sans tracking-tight",
                inverted ? "text-white" : "text-[#136968]"
              )}
            >
              AS
            </span>
            <span
              className={cn(
                "text-[17px] sm:text-[18px] font-bold ml-1.5 font-sans tracking-tight",
                inverted ? "text-white/95" : "text-[#10291D]"
              )}
            >
              Portfolio
            </span>
            <span className="text-[17px] sm:text-[18px] font-extrabold text-[#249492] ml-1 font-sans tracking-tight">
              Builder
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#249492] ml-1 mb-0.5" />
          </div>
          <span
            className={cn(
              "text-[9px] font-semibold tracking-wider uppercase mt-0.5",
              inverted ? "text-[#B8DFDF]" : "text-[#136968]/80"
            )}
          >
            Multi-Tenant SaaS
          </span>
        </div>
      )}
    </Link>
  );
}
