"use client";

import * as React from "react";
import { Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeRenderer } from "@/themes/ThemeRenderer";
import { getThemeManifest } from "@/themes/registry";
import { defaultRohanData } from "@/themes/defaultData";

type DeviceMode = "desktop" | "tablet" | "mobile";

function ThemePreviewInner() {
  const params = useParams();
  const themeId = (params.themeId as string) || "creative-designer";
  const theme = getThemeManifest(themeId);

  const [device, setDevice] = React.useState<DeviceMode>("desktop");

  const getContainerWidth = () => {
    switch (device) {
      case "mobile":
        return "max-w-[400px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "w-full";
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col font-sans">
      {/* Top Floating Preview Control Bar */}
      <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Left: Back & Theme Info */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard/portfolios">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span className="hidden sm:inline text-xs">Exit Preview</span>
            </Button>
          </Link>

          <div className="h-4 w-px bg-stone-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-white">
              {theme.name}
            </span>
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#C25E34]/20 text-[#E07A4B] border border-[#C25E34]/30">
              {theme.category}
            </span>
          </div>
        </div>

        {/* Center: Responsive Device Switcher */}
        <div className="flex items-center bg-stone-900 border border-stone-800 p-1 rounded-xl">
          <button
            onClick={() => setDevice("desktop")}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
              device === "desktop"
                ? "bg-stone-800 text-white shadow-sm"
                : "text-stone-400 hover:text-stone-200"
            }`}
            title="Desktop View"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden md:inline text-[11px] font-medium">Desktop</span>
          </button>
          <button
            onClick={() => setDevice("tablet")}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
              device === "tablet"
                ? "bg-stone-800 text-white shadow-sm"
                : "text-stone-400 hover:text-stone-200"
            }`}
            title="Tablet View"
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden md:inline text-[11px] font-medium">Tablet</span>
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
              device === "mobile"
                ? "bg-stone-800 text-white shadow-sm"
                : "text-stone-400 hover:text-stone-200"
            }`}
            title="Mobile View"
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden md:inline text-[11px] font-medium">Mobile</span>
          </button>
        </div>

        {/* Right: Apply / Use Theme CTA */}
        <div className="flex items-center gap-3">
          <Link href={`/dashboard/portfolios?newTheme=${theme.id}`}>
            <Button className="h-8 px-4 rounded-lg bg-[#C25E34] hover:bg-[#A84F2A] text-white font-semibold text-xs gap-1.5 shadow-sm cursor-pointer">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Use This Theme</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Preview Stage */}
      <main className="flex-1 overflow-x-hidden p-0 sm:p-4 md:p-6 flex justify-center items-start bg-stone-900/50">
        <div
          className={`${getContainerWidth()} transition-all duration-300 ${
            device !== "desktop"
              ? "rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-800 my-4"
              : "w-full"
          }`}
        >
          <ThemeRenderer themeId={themeId} data={defaultRohanData} />
        </div>
      </main>
    </div>
  );
}

export default function ThemePreviewPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-900 flex items-center justify-center text-stone-400 text-xs">
          Loading theme preview...
        </div>
      }
    >
      <ThemePreviewInner />
    </Suspense>
  );
}
