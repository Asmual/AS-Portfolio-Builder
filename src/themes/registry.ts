import React from "react";
import { ThemeManifest } from "./types";
import RohanCreativeTheme from "./rohan-creative";

export const THEMES_REGISTRY: Record<string, ThemeManifest> = {
  "creative-designer": {
    id: "creative-designer",
    name: "Creative Designer",
    category: "Design",
    description:
      "Warm charcoal and terracotta tones with serif typography, curved image arches, and organic design elements. Perfect for UI/UX designers and art directors.",
    previewUrl: "/images/theme-creative-designer.jpg",
    badge: "Popular",
    isPremium: false,
    requiredPlan: "STARTER",
    version: "1.0.0",
    defaultConfig: {
      primaryColor: "#181716",
      accentColor: "#C25E34",
      fontFamily: "serif",
      darkMode: true,
    },
    component: RohanCreativeTheme,
  },
  "modern-dev": {
    id: "modern-dev",
    name: "Modern Developer",
    category: "Developer",
    description:
      "Sleek dark-mode aesthetic with terminal-inspired hero, code blocks, GitHub contribution calendar integration, and tech stack badges.",
    previewUrl: "/images/theme-modern-dev.jpg",
    badge: "Pro",
    isPremium: true,
    requiredPlan: "PRO",
    version: "1.0.0",
    defaultConfig: {
      primaryColor: "#0F172A",
      accentColor: "#6366F1",
      fontFamily: "mono",
      darkMode: true,
    },
    component: RohanCreativeTheme, // Will be swapped with ModernDevTheme in Theme 2
  },
  "minimal-craft": {
    id: "minimal-craft",
    name: "Minimal Craft",
    category: "Minimal",
    description:
      "Swiss grid typography, generous whitespace, understated monochrome accents, and editorial masonry gallery for photographers and copywriters.",
    previewUrl: "/images/theme-minimal-craft.jpg",
    badge: "Agency",
    isPremium: true,
    requiredPlan: "AGENCY",
    version: "1.0.0",
    defaultConfig: {
      primaryColor: "#000000",
      accentColor: "#111111",
      fontFamily: "sans",
      darkMode: false,
    },
    component: RohanCreativeTheme, // Will be swapped with MinimalCraftTheme in Theme 3
  },
};

export function getThemeManifest(id: string): ThemeManifest {
  return THEMES_REGISTRY[id] || THEMES_REGISTRY["creative-designer"];
}

export function getAllThemes(): ThemeManifest[] {
  return Object.values(THEMES_REGISTRY);
}
