"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export interface ThemeCardData {
  id: string;
  name: string;
  category: string;
  description: string;
  previewUrl: string;
  badge?: string;
  isPremium: boolean;
  features: string[];
}

const fallbackThemes: ThemeCardData[] = [
  {
    id: "modern-dev",
    name: "Modern Developer",
    category: "Developer",
    description: "Sleek developer portfolio showcasing repos, live demo links, and tech proficiencies.",
    previewUrl: "/images/Hero-right side image (2).jpg",
    badge: "Popular",
    isPremium: false,
    features: ["Tech Stack Tags", "GitHub Metrics", "Project Filters", "Blog Layout"],
  },
  {
    id: "creative-designer",
    name: "Creative UI/UX Designer",
    category: "Design",
    description: "Visual portfolio with case-study modal previews, Figma embeds, and interactive showcases.",
    previewUrl: "/images/Hero-right side image (1).jpg",
    badge: "Trending",
    isPremium: true,
    features: ["Case Study Grid", "Figma Prototypes", "Testimonials", "Dribbble Stream"],
  },
  {
    id: "ecobuild-agency",
    name: "Architecture & Agency",
    category: "Agency",
    description: "Premium editorial aesthetic featuring full-bleed banners and client consultation booking.",
    previewUrl: "/images/Hero-right side image (3).jpg",
    badge: "New",
    isPremium: true,
    features: ["Project Milestones", "Team Carousel", "Inquiry Forms", "Multi-Page Mode"],
  },
];

export function ThemesSection() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = ["All", "Developer", "Design", "Agency"];

  const filtered = activeCategory === "All"
    ? fallbackThemes
    : fallbackThemes.filter((t) => t.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleSelectTheme = (themeName: string) => {
    toast.success(`Theme Selected: ${themeName}`, {
      description: "Customizer workspace will load with real-time editing controls.",
    });
  };

  return (
    <section id="themes" className="relative py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Compact standard typography */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#10291D]"
          >
            Explore Crafted Themes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#10291D]/75 mt-2"
          >
            Pre-designed, fully responsive themes built for instant customization without writing code.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#064B2B] text-white shadow-xs"
                    : "bg-white/80 hover:bg-white text-[#10291D]/75 border border-[#dbe8df]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((theme, idx) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group bg-white rounded-2xl border border-[#dbe8df] overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Preview Image with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={theme.previewUrl}
                    alt={theme.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {theme.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#064B2B] text-white shadow-xs">
                      {theme.badge}
                    </span>
                  )}
                  {theme.isPremium ? (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#CDECCB] text-[#064B2B]">
                      Pro Tier
                    </span>
                  ) : (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 text-[#10291D] backdrop-blur-xs">
                      Free Tier
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#16803D]">
                      {theme.category}
                    </span>
                    <h3 className="text-base font-bold text-[#10291D] tracking-tight mt-0.5">
                      {theme.name}
                    </h3>
                    <p className="text-xs text-[#10291D]/70 line-clamp-2 mt-1">
                      {theme.description}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-gray-100">
                    {theme.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5 text-[11px] text-[#10291D]/80">
                        <Check className="w-3 h-3 text-[#16803D] shrink-0 stroke-[2.5]" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-5 pt-0">
                <Button
                  variant="default"
                  onClick={() => handleSelectTheme(theme.name)}
                  className="w-full h-10 rounded-full text-xs font-semibold bg-[#16803D] hover:bg-[#064B2B] text-white gap-2 shadow-xs"
                >
                  <span>Use This Theme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
