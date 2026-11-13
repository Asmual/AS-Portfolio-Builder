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
    >
      {/* Brand Hexagon/Leaf Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-emerald-600/10 to-transparent border border-emerald-600/30 text-emerald-700 dark:text-emerald-400 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
        >
          {/* House outline */}
          <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6H4a1 1 0 0 1-1-1v-9.5z" />
          {/* Sprouting leaf through the center */}
          <path d="M12 9c0 3 2 4 4 4" strokeWidth="2.2" className="text-emerald-500" />
          <path d="M12 9c-2 1-3 3-3 5" strokeWidth="2" />
        </svg>
      </div>

      {!iconOnly && (
        <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          AS Portfolio Builder
        </span>
      )}
    </Link>
  );
}
