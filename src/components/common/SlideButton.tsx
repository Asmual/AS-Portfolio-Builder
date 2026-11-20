"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface SlideButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary" | "dark" | "ghost";
  size?: "sm" | "default" | "lg" | "icon";
  href?: string;
  target?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

/**
 * Reusable SlideButton with Sliding Curtain / Door Animation
 * When hovered, a dynamic color layer slides smoothly from bottom to top,
 * elegantly flipping background and text colors.
 */
export const SlideButton = React.forwardRef<HTMLButtonElement, SlideButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      href,
      target,
      icon,
      iconPosition = "right",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Sizing tokens
    const sizeClasses = {
      sm: "h-9 px-4 text-xs gap-1.5",
      default: "h-11 px-6 text-sm gap-2",
      lg: "h-12 px-8 text-base gap-2.5",
      icon: "h-10 w-10 p-0",
    }[size];

    // Variant style configurations
    const variantStyles = {
      // Primary: Deep teal base, darker rich teal slides up on hover
      primary: {
        container:
          "bg-[#136968] text-white border border-[#136968] shadow-sm hover:shadow-md",
        slider: "bg-[#0A4241]",
        text: "text-white",
      },
      // Outline: Cream/white base, solid visible border, deep teal slides up turning text white
      outline: {
        container:
          "bg-[#F8F8EF] hover:bg-[#F8F8EF] text-[#10291D] border-2 border-[#136968] shadow-xs",
        slider: "bg-[#136968]",
        text: "text-[#10291D] group-hover:text-white",
      },
      // Secondary: Soft light teal base, deep teal slides up turning text white
      secondary: {
        container:
          "bg-[#E8F4F4] text-[#136968] border border-[#B8DFDF] hover:border-[#136968]",
        slider: "bg-[#136968]",
        text: "text-[#136968] group-hover:text-white",
      },
      // Dark: Used on dark green/footer containers
      dark: {
        container:
          "bg-white/10 text-white border border-white/20 hover:border-white/40",
        slider: "bg-[#249492]",
        text: "text-white",
      },
      // Ghost: Minimalist transparent
      ghost: {
        container:
          "bg-transparent text-[#10291D] hover:text-[#136968] border border-transparent",
        slider: "bg-[#E8F4F4]",
        text: "text-[#10291D] group-hover:text-[#136968]",
      },
    }[variant];

    const innerContent = (
      <>
        {/* Sliding Curtain Layer (Slides smoothly from bottom to top) */}
        <span
          className={cn(
            "absolute inset-0 z-0 h-full w-full rounded-full transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0",
            variantStyles.slider
          )}
          aria-hidden="true"
        />

        {/* Content Layer (elevated above sliding background with smooth color transition) */}
        <span
          className={cn(
            "relative z-10 inline-flex items-center justify-center font-medium transition-colors duration-300 select-none",
            variantStyles.text
          )}
        >
          {icon && iconPosition === "left" && (
            <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
              {icon}
            </span>
          )}
          <span>{children}</span>
          {icon && iconPosition === "right" && (
            <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
              {icon}
            </span>
          )}
        </span>
      </>
    );

    const baseClasses = cn(
      "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#136968] focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
      sizeClasses,
      variantStyles.container,
      className
    );

    // If an href is provided, render as Next.js Link
    if (href) {
      return (
        <Link href={href} target={target} className={baseClasses}>
          {innerContent}
        </Link>
      );
    }

    // Default HTML button
    return (
      <button
        ref={ref}
        type={props.type || "button"}
        disabled={disabled}
        className={baseClasses}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

SlideButton.displayName = "SlideButton";
