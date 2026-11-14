"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Globe,
  SlidersHorizontal,
  Zap,
  ShieldCheck,
  Smartphone,
  Eye,
  CreditCard,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: "Decoupled Theme Engine",
      description: "Switch between completely different visual themes at any time without losing any bio, project, or skills content.",
    },
    {
      icon: Globe,
      title: "Custom Domain & Subdomains",
      description: "Deploy immediately to username.asportfolio.site or map your personal root domain with auto SSL provisioning.",
    },
    {
      icon: Eye,
      title: "Real-Time Visual Customizer",
      description: "Instantly tweak palettes, typography, spacing, and section ordering with live desktop, tablet, and mobile previews.",
    },
    {
      icon: Zap,
      title: "Blazing Edge Performance",
      description: "Portfolio sites are statically pre-rendered and served over high-speed global edge networks for sub-second loading.",
    },
    {
      icon: ShieldCheck,
      title: "Multi-Tenant Security",
      description: "Strict isolation across tenant databases ensures your assets and credentials remain private and secure.",
    },
    {
      icon: CreditCard,
      title: "Self-Serve Subscriptions",
      description: "Integrated billing lifecycle for Monthly & Yearly Pro tiers with automatic upgrades and invoice access.",
    },
  ];

  return (
    <section id="features" className="relative py-12 md:py-16 bg-white/40 border-y border-[#dbe8df]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Standard Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#10291D]"
          >
            Built for Modern Creators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#10291D]/75 mt-2"
          >
            Everything you need to launch, customize, and monetize your professional web presence.
          </motion.p>
        </div>

        {/* 6 Grid Cards with Smooth Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-[#dbe8df] shadow-xs hover:border-[#16803D]/40 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F8F8EF] border border-[#CDECCB] flex items-center justify-center text-[#16803D] group-hover:scale-105 group-hover:bg-[#064B2B] group-hover:text-white transition-all mb-4">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-[#10291D] tracking-tight mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#10291D]/75 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
