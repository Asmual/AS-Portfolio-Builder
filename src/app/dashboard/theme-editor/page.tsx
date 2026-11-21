"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  Laptop,
  Tablet,
  Smartphone,
  Save,
  Globe,
  ExternalLink,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Check,
  Plus,
  Trash2,
  Eye,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Type,
  Edit2,
  CheckCircle2,
  RotateCcw,
  Sliders,
  Share2,
} from "lucide-react";
import { SlideButton } from "@/components/common/SlideButton";
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
import { ThemeRenderer } from "@/themes/ThemeRenderer";
import { THEMES_REGISTRY } from "@/themes/registry";
import { TenantThemeConfig, defaultThemeConfig } from "@/types/themeEditor";
import { configToPortfolioData } from "@/lib/themeConfigAdapter";

export default function ThemeEditorPage() {
  // Navigation & View Mode: "gallery" | "customizer"
  const [viewMode, setViewMode] = React.useState<"gallery" | "customizer">("customizer");

  // Device Responsive Switcher: "desktop" | "tablet" | "mobile"
  const [deviceView, setDeviceView] = React.useState<"desktop" | "tablet" | "mobile">("desktop");

  // Inline editing state on preview canvas
  const [inlineEditActive, setInlineEditActive] = React.useState(true);
  const [editingField, setEditingField] = React.useState<string | null>(null);

  // Active accordion in Left Panel
  const [activeAccordion, setActiveAccordion] = React.useState<string | null>("global");

  // Theme Config State (100% Config-Driven JSON Architecture)
  const [config, setConfig] = React.useState<TenantThemeConfig>(defaultThemeConfig);

  // Theme Selector Modal State
  const [themeModalOpen, setThemeModalOpen] = React.useState(false);
  const [selectedThemeForApply, setSelectedThemeForApply] = React.useState<string>("creative-designer");

  // Image Replace Modal State
  const [imageModalOpen, setImageModalOpen] = React.useState(false);
  const [imageTargetField, setImageTargetField] = React.useState<"avatar" | "aboutPhoto" | "project">("avatar");
  const [newImageUrl, setNewImageUrl] = React.useState("");

  // Publish Status
  const [isPublished, setIsPublished] = React.useState(true);
  const [isSaving, setIsSaving] = React.useState(false);

  // Derived portfolio data for ThemeRenderer
  const portfolioData = React.useMemo(() => {
    return configToPortfolioData(config);
  }, [config]);

  // Handle Accordion Toggle
  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  // Color Swatch Presets
  const primaryColors = ["#136968", "#181716", "#0F172A", "#1E3A8A", "#4C1D95", "#831843"];
  const accentColors = ["#249492", "#C25E34", "#10B981", "#F59E0B", "#EC4899", "#8B5CF6"];

  // Handle Save Draft
  const handleSaveDraft = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Draft Saved Successfully!", {
        description: "All section configs and design tokens are synchronized.",
      });
    }, 500);
  };

  // Handle Publish
  const handlePublish = () => {
    setIsPublished(true);
    toast.success("Portfolio Published Live!", {
      description: `Accessible on ${config.subdomain}.asportfolio.site and custom domain ${config.customDomain || ""}`,
    });
  };

  // Handle Apply Theme from Modal
  const handleConfirmApplyTheme = () => {
    setConfig((prev) => ({
      ...prev,
      themeId: selectedThemeForApply,
    }));
    setThemeModalOpen(false);
    setViewMode("customizer");
    toast.success("Theme Applied Successfully!", {
      description: `Switched layout to ${THEMES_REGISTRY[selectedThemeForApply]?.name || selectedThemeForApply}. Content adapted automatically.`,
    });
  };

  // Quick Unsplash Avatars for testing
  const sampleImages = [
    "/images/hero-card-1.jpg",
    "/images/hero-card-2.jpg",
    "/images/hero-card-3.jpg",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F4] flex flex-col -m-4 sm:-m-8">
      {/* 
        ========================================================================
        1. TOP NAVIGATION & ACTION BAR
        Back button, device switcher, live status, draft save & publish controls
        ========================================================================
      */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#d8e6db] px-4 sm:px-6 py-3 flex items-center justify-between gap-4 shadow-xs select-none">
        
        {/* Left: Back / View Toggle & Title */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full w-9 h-9 p-0 border-[#d8e6db] hover:border-[#136968] text-gray-700 hover:text-[#136968]"
              title="Return to Dashboard"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </Link>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-[#10291D] tracking-tight">
                Visual Theme Editor
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F4F4] text-[#136968] border border-[#B8DFDF]">
                Live Customizer
              </span>
            </div>
            <p className="text-[11px] text-gray-500 font-mono hidden sm:block">
              {config.subdomain}.asportfolio.site
            </p>
          </div>
        </div>

        {/* Center: Device Responsive Canvas Switcher */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-[#F4F6F4] border border-[#d8e6db] rounded-full">
          <button
            onClick={() => setDeviceView("desktop")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              deviceView === "desktop"
                ? "bg-white text-[#136968] shadow-xs"
                : "text-gray-500 hover:text-[#10291D]"
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>

          <button
            onClick={() => setDeviceView("tablet")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              deviceView === "tablet"
                ? "bg-white text-[#136968] shadow-xs"
                : "text-gray-500 hover:text-[#10291D]"
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet</span>
          </button>

          <button
            onClick={() => setDeviceView("mobile")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              deviceView === "mobile"
                ? "bg-white text-[#136968] shadow-xs"
                : "text-gray-500 hover:text-[#10291D]"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
        </div>

        {/* Right: Theme Selector, Save, Publish & View Live */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Gallery Picker Modal Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setThemeModalOpen(true)}
            className="rounded-full text-xs font-semibold h-9 px-3 gap-1.5 border-[#d8e6db] hover:border-[#136968] text-[#10291D]"
          >
            <Palette className="w-3.5 h-3.5 text-[#249492]" />
            <span className="hidden sm:inline">Change Theme</span>
          </Button>

          {/* Inline Edit Mode Toggle */}
          <button
            onClick={() => setInlineEditActive(!inlineEditActive)}
            className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
              inlineEditActive
                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                : "bg-white text-gray-500 border-gray-200"
            }`}
            title="Click text directly on canvas to edit"
          >
            <Edit2 className="w-3 h-3" />
            <span>Inline Edit: {inlineEditActive ? "ON" : "OFF"}</span>
          </button>

          {/* Save Draft */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleSaveDraft}
            disabled={isSaving}
            className="rounded-full text-xs font-semibold h-9 px-3.5 gap-1.5 border-gray-300"
          >
            <Save className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isSaving ? "Saving..." : "Save Draft"}</span>
          </Button>

          {/* Publish Button */}
          <SlideButton
            variant="primary"
            size="sm"
            onClick={handlePublish}
            className="h-9 px-4 text-xs font-bold"
          >
            Publish Live
          </SlideButton>

          {/* View Live Link */}
          <Link href={`/p/${config.subdomain}`} target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full w-9 h-9 p-0 border-[#136968]/30 hover:border-[#136968] text-[#136968]"
              title="Open Live Portfolio in New Tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* 
        ========================================================================
        2. MAIN WORKSPACE: SPLIT-SCREEN VISUAL CUSTOMIZER (35% Left / 65% Right)
        ========================================================================
      */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* 
          ----------------------------------------------------------------------
          LEFT PANEL (35% WIDTH): Config Forms, Accordions & Design Tokens
          ----------------------------------------------------------------------
        */}
        <aside className="w-full lg:w-[380px] xl:w-[420px] bg-white border-r border-[#d8e6db] overflow-y-auto max-h-[calc(100vh-65px)] p-4 sm:p-5 space-y-4 shrink-0 select-none">
          
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#136968]" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Customizer Controls
              </span>
            </div>
            <button
              onClick={() => setConfig(defaultThemeConfig)}
              className="text-[11px] font-semibold text-gray-400 hover:text-[#136968] flex items-center gap-1 transition-colors"
              title="Reset to default config"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* 
            ACCORDION 1: GLOBAL STYLES & DESIGN TOKENS
          */}
          <div className="border border-[#d8e6db] rounded-2xl overflow-hidden bg-[#FAFBF9]">
            <button
              onClick={() => toggleAccordion("global")}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#E8F4F4] text-[#136968] flex items-center justify-center">
                  <Palette className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#10291D]">Global Styling</h3>
                  <p className="text-[11px] text-gray-500">Colors, typography & tokens</p>
                </div>
              </div>
              {activeAccordion === "global" ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {activeAccordion === "global" && (
              <div className="p-4 space-y-4 border-t border-gray-100 bg-white">
                {/* Primary Color */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                    Primary Brand Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={config.globalStyles.primaryColor}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          globalStyles: { ...config.globalStyles, primaryColor: e.target.value },
                        })
                      }
                      className="w-8 h-8 rounded-lg border border-gray-200 cursor-pointer p-0.5"
                    />
                    <input
                      type="text"
                      value={config.globalStyles.primaryColor}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          globalStyles: { ...config.globalStyles, primaryColor: e.target.value },
                        })
                      }
                      className="flex-1 h-8 px-2.5 rounded-lg border border-gray-200 text-xs font-mono"
                    />
                  </div>
                  {/* Quick Swatches */}
                  <div className="flex items-center gap-1.5 mt-2">
                    {primaryColors.map((col) => (
                      <button
                        key={col}
                        onClick={() =>
                          setConfig({
                            ...config,
                            globalStyles: { ...config.globalStyles, primaryColor: col },
                          })
                        }
                        style={{ backgroundColor: col }}
                        className={`w-5 h-5 rounded-full border transition-transform hover:scale-110 ${
                          config.globalStyles.primaryColor === col
                            ? "ring-2 ring-offset-1 ring-[#136968]"
                            : "border-black/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Accent Color */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                    Secondary Accent Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={config.globalStyles.accentColor}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          globalStyles: { ...config.globalStyles, accentColor: e.target.value },
                        })
                      }
                      className="w-8 h-8 rounded-lg border border-gray-200 cursor-pointer p-0.5"
                    />
                    <input
                      type="text"
                      value={config.globalStyles.accentColor}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          globalStyles: { ...config.globalStyles, accentColor: e.target.value },
                        })
                      }
                      className="flex-1 h-8 px-2.5 rounded-lg border border-gray-200 text-xs font-mono"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    {accentColors.map((col) => (
                      <button
                        key={col}
                        onClick={() =>
                          setConfig({
                            ...config,
                            globalStyles: { ...config.globalStyles, accentColor: col },
                          })
                        }
                        style={{ backgroundColor: col }}
                        className={`w-5 h-5 rounded-full border transition-transform hover:scale-110 ${
                          config.globalStyles.accentColor === col
                            ? "ring-2 ring-offset-1 ring-[#249492]"
                            : "border-black/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Dark Mode vs Light Mode */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                    Canvas Theme Mode
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() =>
                        setConfig({
                          ...config,
                          globalStyles: { ...config.globalStyles, darkMode: true },
                        })
                      }
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        config.globalStyles.darkMode
                          ? "bg-[#181716] text-white border-black"
                          : "bg-gray-50 text-gray-600 border-gray-200"
                      }`}
                    >
                      Dark Mode (#181716)
                    </button>
                    <button
                      onClick={() =>
                        setConfig({
                          ...config,
                          globalStyles: { ...config.globalStyles, darkMode: false },
                        })
                      }
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        !config.globalStyles.darkMode
                          ? "bg-white text-[#10291D] border-[#136968] shadow-xs"
                          : "bg-gray-50 text-gray-600 border-gray-200"
                      }`}
                    >
                      Light Mode (#FFFFFF)
                    </button>
                  </div>
                </div>

                {/* Font Family */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                    Font Family
                  </label>
                  <select
                    value={config.globalStyles.fontFamily}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        globalStyles: { ...config.globalStyles, fontFamily: e.target.value },
                      })
                    }
                    className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs bg-white text-gray-800"
                  >
                    <option value="Inter, sans-serif">Inter (Modern Clean)</option>
                    <option value="serif">Editorial Serif (Creative)</option>
                    <option value="monospace">JetBrains Mono (Technical)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* 
            ACCORDION 2: HERO SECTION
          */}
          <div className="border border-[#d8e6db] rounded-2xl overflow-hidden bg-[#FAFBF9]">
            <button
              onClick={() => toggleAccordion("hero")}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#E8F4F4] text-[#136968] flex items-center justify-center">
                  <Type className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#10291D]">Hero Section</h3>
                  <p className="text-[11px] text-gray-500">Headline, role & avatar</p>
                </div>
              </div>
              {activeAccordion === "hero" ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {activeAccordion === "hero" && (
              <div className="p-4 space-y-3.5 border-t border-gray-100 bg-white">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={config.sections.hero.name}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        sections: {
                          ...config.sections,
                          hero: { ...config.sections.hero, name: e.target.value },
                        },
                      })
                    }
                    className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs"
                  />
                </div>

                {/* Headline Greeting */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Greeting Headline
                  </label>
                  <input
                    type="text"
                    value={config.sections.hero.headline}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        sections: {
                          ...config.sections,
                          hero: { ...config.sections.hero, headline: e.target.value },
                        },
                      })
                    }
                    className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs"
                  />
                </div>

                {/* Professional Role */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Professional Role / Title
                  </label>
                  <input
                    type="text"
                    value={config.sections.hero.role}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        sections: {
                          ...config.sections,
                          hero: { ...config.sections.hero, role: e.target.value },
                        },
                      })
                    }
                    className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs"
                  />
                </div>

                {/* Short Bio */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Short Hero Bio
                  </label>
                  <textarea
                    rows={2}
                    value={config.sections.hero.shortBio}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        sections: {
                          ...config.sections,
                          hero: { ...config.sections.hero, shortBio: e.target.value },
                        },
                      })
                    }
                    className="w-full p-2.5 rounded-lg border border-gray-200 text-xs resize-none"
                  />
                </div>

                {/* Avatar Photo URL */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-gray-700">Avatar Image</label>
                    <button
                      onClick={() => {
                        setImageTargetField("avatar");
                        setImageModalOpen(true);
                      }}
                      className="text-[11px] font-semibold text-[#136968] hover:underline flex items-center gap-1"
                    >
                      <ImageIcon className="w-3 h-3" />
                      <span>Choose Image</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    value={config.sections.hero.avatarUrl}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        sections: {
                          ...config.sections,
                          hero: { ...config.sections.hero, avatarUrl: e.target.value },
                        },
                      })
                    }
                    className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs"
                  />
                </div>

                {/* CTA Button Text */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      CTA Text
                    </label>
                    <input
                      type="text"
                      value={config.sections.hero.ctaText}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          sections: {
                            ...config.sections,
                            hero: { ...config.sections.hero, ctaText: e.target.value },
                          },
                        })
                      }
                      className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      Years Exp.
                    </label>
                    <input
                      type="number"
                      value={config.sections.hero.experienceYears}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          sections: {
                            ...config.sections,
                            hero: {
                              ...config.sections.hero,
                              experienceYears: parseInt(e.target.value) || 0,
                            },
                          },
                        })
                      }
                      className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 
            ACCORDION 3: ABOUT SECTION
          */}
          <div className="border border-[#d8e6db] rounded-2xl overflow-hidden bg-[#FAFBF9]">
            <button
              onClick={() => toggleAccordion("about")}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#E8F4F4] text-[#136968] flex items-center justify-center">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#10291D]">About Section</h3>
                  <p className="text-[11px] text-gray-500">Full bio & career stats</p>
                </div>
              </div>
              {activeAccordion === "about" ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {activeAccordion === "about" && (
              <div className="p-4 space-y-3.5 border-t border-gray-100 bg-white">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Philosophy Title
                  </label>
                  <input
                    type="text"
                    value={config.sections.about.title}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        sections: {
                          ...config.sections,
                          about: { ...config.sections.about, title: e.target.value },
                        },
                      })
                    }
                    className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Comprehensive Bio
                  </label>
                  <textarea
                    rows={3}
                    value={config.sections.about.bio}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        sections: {
                          ...config.sections,
                          about: { ...config.sections.about, bio: e.target.value },
                        },
                      })
                    }
                    className="w-full p-2.5 rounded-lg border border-gray-200 text-xs resize-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Signature Text
                  </label>
                  <input
                    type="text"
                    value={config.sections.about.signatureText}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        sections: {
                          ...config.sections,
                          about: { ...config.sections.about, signatureText: e.target.value },
                        },
                      })
                    }
                    className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs"
                  />
                </div>
              </div>
            )}
          </div>

          {/* 
            ACCORDION 4: PROJECTS SHOWCASE
          */}
          <div className="border border-[#d8e6db] rounded-2xl overflow-hidden bg-[#FAFBF9]">
            <button
              onClick={() => toggleAccordion("projects")}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#E8F4F4] text-[#136968] flex items-center justify-center">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#10291D]">Projects Showcase</h3>
                  <p className="text-[11px] text-gray-500">
                    {config.sections.projects.items.length} works configured
                  </p>
                </div>
              </div>
              {activeAccordion === "projects" ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {activeAccordion === "projects" && (
              <div className="p-4 space-y-4 border-t border-gray-100 bg-white">
                {config.sections.projects.items.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="p-3 rounded-xl border border-gray-200 bg-gray-50/60 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between font-bold text-gray-800">
                      <span>Project #{idx + 1}</span>
                      <button
                        onClick={() => {
                          const updated = config.sections.projects.items.filter(
                            (p) => p.id !== proj.id
                          );
                          setConfig({
                            ...config,
                            sections: {
                              ...config.sections,
                              projects: { ...config.sections.projects, items: updated },
                            },
                          });
                        }}
                        className="text-red-500 hover:text-red-700"
                        title="Delete project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <input
                      type="text"
                      placeholder="Project Title"
                      value={proj.title}
                      onChange={(e) => {
                        const updated = [...config.sections.projects.items];
                        updated[idx].title = e.target.value;
                        setConfig({
                          ...config,
                          sections: {
                            ...config.sections,
                            projects: { ...config.sections.projects, items: updated },
                          },
                        });
                      }}
                      className="w-full h-7 px-2 rounded-lg border border-gray-200 bg-white"
                    />

                    <input
                      type="text"
                      placeholder="Category"
                      value={proj.category}
                      onChange={(e) => {
                        const updated = [...config.sections.projects.items];
                        updated[idx].category = e.target.value;
                        setConfig({
                          ...config,
                          sections: {
                            ...config.sections,
                            projects: { ...config.sections.projects, items: updated },
                          },
                        });
                      }}
                      className="w-full h-7 px-2 rounded-lg border border-gray-200 bg-white text-[11px]"
                    />
                  </div>
                ))}

                <button
                  onClick={() => {
                    const newProj = {
                      id: `proj-${Date.now()}`,
                      title: "New Featured Project",
                      category: "Application Design",
                      description: "Interactive modern client portfolio application.",
                      imageUrl: "/images/hero-card-1.jpg",
                      liveUrl: "#",
                      tags: ["Design", "React"],
                    };
                    setConfig({
                      ...config,
                      sections: {
                        ...config.sections,
                        projects: {
                          ...config.sections.projects,
                          items: [...config.sections.projects.items, newProj],
                        },
                      },
                    });
                  }}
                  className="w-full py-2 rounded-xl border border-dashed border-[#136968] text-[#136968] font-bold text-xs hover:bg-[#E8F4F4] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Project</span>
                </button>
              </div>
            )}
          </div>

          {/* 
            ACCORDION 5: CONTACT & SOCIAL
          */}
          <div className="border border-[#d8e6db] rounded-2xl overflow-hidden bg-[#FAFBF9]">
            <button
              onClick={() => toggleAccordion("contact")}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#E8F4F4] text-[#136968] flex items-center justify-center">
                  <Share2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#10291D]">Contact & Social</h3>
                  <p className="text-[11px] text-gray-500">Email, links & footer</p>
                </div>
              </div>
              {activeAccordion === "contact" ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {activeAccordion === "contact" && (
              <div className="p-4 space-y-3.5 border-t border-gray-100 bg-white">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={config.sections.contact.email}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        sections: {
                          ...config.sections,
                          contact: { ...config.sections.contact, email: e.target.value },
                        },
                      })
                    }
                    className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    CTA Headline
                  </label>
                  <input
                    type="text"
                    value={config.sections.contact.headline}
                    onChange={(e) =>
                      setConfig({
                        ...config,
                        sections: {
                          ...config.sections,
                          contact: { ...config.sections.contact, headline: e.target.value },
                        },
                      })
                    }
                    className="w-full h-8 px-2.5 rounded-lg border border-gray-200 text-xs"
                  />
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* 
          ----------------------------------------------------------------------
          RIGHT PANEL (65% WIDTH): Responsive Live Preview with Inline Editing
          ----------------------------------------------------------------------
        */}
        <main className="flex-1 bg-[#0E1514] p-3 sm:p-6 lg:p-8 flex items-center justify-center overflow-auto min-h-[500px]">
          
          {/* Responsive Device Frame Container */}
          <div
            className={`transition-all duration-300 rounded-3xl overflow-hidden shadow-2xl border-4 border-black/40 bg-[#181716] relative flex flex-col ${
              deviceView === "desktop"
                ? "w-full max-w-full h-full"
                : deviceView === "tablet"
                ? "w-[768px] h-[920px] max-h-[88vh]"
                : "w-[375px] h-[780px] max-h-[85vh]"
            }`}
          >
            {/* Device Frame Header Bar */}
            <div className="bg-[#202020] px-4 py-2 flex items-center justify-between shrink-0 select-none border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>

              <div className="flex items-center gap-2 bg-[#121212] px-3 py-1 rounded-full text-[11px] font-mono text-gray-300 border border-white/5">
                <Globe className="w-3 h-3 text-[#249492]" />
                <span>{config.subdomain}.asportfolio.site</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-gray-400 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Preview</span>
              </div>
            </div>

            {/* Canvas Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto relative">
              
              {/* Inline Editing Prompt Bar */}
              {inlineEditActive && (
                <div className="sticky top-2 z-30 mx-auto w-max px-3.5 py-1 rounded-full bg-[#136968]/90 text-white text-[11px] font-semibold backdrop-blur-md shadow-lg border border-white/20 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#249492]" />
                  <span>Interactive Preview: Click text or images directly to edit</span>
                </div>
              )}

              {/* Theme Renderer Output */}
              <div
                style={
                  {
                    "--tenant-primary": config.globalStyles.primaryColor,
                    "--tenant-accent": config.globalStyles.accentColor,
                    "--tenant-bg": config.globalStyles.darkMode ? "#181716" : "#FFFFFF",
                    "--tenant-font": config.globalStyles.fontFamily,
                  } as React.CSSProperties
                }
                className="w-full"
              >
                <ThemeRenderer
                  themeId={config.themeId}
                  data={portfolioData}
                  config={{
                    primaryColor: config.globalStyles.primaryColor,
                    accentColor: config.globalStyles.accentColor,
                    fontFamily: config.globalStyles.fontFamily,
                    darkMode: config.globalStyles.darkMode,
                  }}
                  isEditorPreview={true}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* 
        ========================================================================
        3. THEME SELECTOR MODAL (Popup Catalog)
        Spec: DASHBOARD_THEME_EDITOR_SPEC.md Section 2
        ========================================================================
      */}
      <Dialog open={themeModalOpen} onOpenChange={setThemeModalOpen}>
        <DialogContent className="sm:max-w-3xl bg-white border border-[#B8DFDF] rounded-3xl p-6 sm:p-8">
          <DialogHeader>
            <div className="w-12 h-12 rounded-2xl bg-[#E8F4F4] text-[#136968] flex items-center justify-center mb-2">
              <Palette className="w-6 h-6" />
            </div>
            <DialogTitle className="text-2xl font-bold text-[#10291D]">
              Select Portfolio Theme
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              Apply this theme to your portfolio? Your content, projects, and personal data will automatically adapt to the new layout without loss.
            </DialogDescription>
          </DialogHeader>

          {/* Theme Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 max-h-[50vh] overflow-y-auto p-1">
            {Object.values(THEMES_REGISTRY).map((th) => (
              <div
                key={th.id}
                onClick={() => setSelectedThemeForApply(th.id)}
                className={`relative rounded-2xl border-2 p-3.5 cursor-pointer transition-all flex flex-col justify-between ${
                  selectedThemeForApply === th.id
                    ? "border-[#136968] bg-[#E8F4F4]/50 shadow-md ring-2 ring-[#136968]/20"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 mb-3">
                    <Image
                      src={th.previewUrl}
                      alt={th.name}
                      fill
                      className="object-cover object-top"
                    />
                    {selectedThemeForApply === th.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#136968] text-white flex items-center justify-center shadow-md">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#10291D] text-sm">{th.name}</h4>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      {th.category}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                    {th.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-gray-100">
            <Button
              variant="outline"
              onClick={() => setThemeModalOpen(false)}
              className="rounded-full"
            >
              Cancel
            </Button>
            <SlideButton
              variant="primary"
              onClick={handleConfirmApplyTheme}
              className="px-6"
            >
              Confirm & Apply Theme
            </SlideButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 
        ========================================================================
        4. IMAGE PICKER & REPLACEMENT MODAL
        ========================================================================
      */}
      <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
        <DialogContent className="sm:max-w-md bg-white border border-[#B8DFDF] rounded-3xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#10291D]">
              Choose Photo or Avatar
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-600">
              Select one of our curated high-resolution designer presets or paste a custom URL.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-3 gap-2.5 my-3">
            {sampleImages.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  if (imageTargetField === "avatar") {
                    setConfig({
                      ...config,
                      sections: {
                        ...config.sections,
                        hero: { ...config.sections.hero, avatarUrl: img },
                      },
                    });
                  } else if (imageTargetField === "aboutPhoto") {
                    setConfig({
                      ...config,
                      sections: {
                        ...config.sections,
                        about: { ...config.sections.about, aboutPhotoUrl: img },
                      },
                    });
                  }
                  setImageModalOpen(false);
                  toast.success("Image Updated Successfully!");
                }}
                className="relative aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-[#136968] cursor-pointer group"
              >
                <Image src={img} alt="Preset" fill className="object-cover group-hover:scale-105 transition-all" />
              </div>
            ))}
          </div>

          <div className="space-y-1.5 pt-2">
            <label className="text-xs font-semibold text-gray-700">Or Paste Image URL</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="https://images.unsplash.com/..."
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                className="flex-1 h-9 px-3 rounded-xl border border-gray-200 text-xs"
              />
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  if (!newImageUrl.trim()) return;
                  if (imageTargetField === "avatar") {
                    setConfig({
                      ...config,
                      sections: {
                        ...config.sections,
                        hero: { ...config.sections.hero, avatarUrl: newImageUrl },
                      },
                    });
                  }
                  setNewImageUrl("");
                  setImageModalOpen(false);
                  toast.success("Image URL updated!");
                }}
                className="rounded-xl bg-[#136968] text-white text-xs px-3"
              >
                Apply
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
