"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      id: "free",
      name: "Free Starter",
      tagline: "Ideal for testing and crafting your portfolio draft.",
      price: billingCycle === "monthly" ? "$0" : "$0",
      subtext: "Free forever",
      features: [
        "1 Live Portfolio Site",
        "Free .asportfolio.site subdomain",
        "Standard Themes Library",
        "Basic Color & Font Controls",
        "Standard Global CDN Delivery",
      ],
      isPopular: false,
      buttonVariant: "outline" as const,
      cta: "Get Started Free",
    },
    {
      id: "pro",
      name: "Pro Creator",
      tagline: "Essential for working professionals and freelancers.",
      price: billingCycle === "monthly" ? "$12" : "$10",
      subtext: billingCycle === "monthly" ? "Billed monthly" : "Billed $120 annually",
      features: [
        "Connect Custom Root/Subdomain",
        "All Premium Themes Unlocked",
        "Remove Platform Branding",
        "Full Custom CSS & Code Embeds",
        "Visitor Analytics & Referrer Stats",
        "Unlimited High-Res Image Uploads",
        "Priority Customer Support",
      ],
      isPopular: true,
      buttonVariant: "default" as const,
      cta: "Upgrade to Pro",
    },
    {
      id: "agency",
      name: "Agency & Business",
      tagline: "For studios managing multiple client projects.",
      price: billingCycle === "monthly" ? "$29" : "$24",
      subtext: billingCycle === "monthly" ? "Billed monthly" : "Billed $288 annually",
      features: [
        "Up to 10 Custom Domain Sites",
        "All Pro Features Included",
        "Client Workspace Handoff",
        "Priority 24/7 Dedicated Concierge",
        "Custom SSL Certificates",
        "Early Beta Themes Access",
      ],
      isPopular: false,
      buttonVariant: "outline" as const,
      cta: "Contact Agency",
    },
  ];

  const handleSelectPlan = (planName: string) => {
    toast.success(`Selected Plan: ${planName}`, {
      description: "Redirecting to checkout & workspace provisioning...",
    });
  };

  return (
    <section id="pricing" className="relative py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Standard Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#10291D]"
          >
            Transparent, Predictable Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#10291D]/75 mt-2"
          >
            Start free, upgrade anytime as your professional audience and client roster grow.
          </motion.p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-white border border-[#dbe8df] rounded-full mt-6 shadow-2xs">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#064B2B] text-white shadow-xs"
                  : "text-[#10291D]/70 hover:text-[#10291D]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === "yearly"
                  ? "bg-[#064B2B] text-white shadow-xs"
                  : "text-[#10291D]/70 hover:text-[#10291D]"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#CDECCB] text-[#064B2B]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative bg-white rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 ${
                p.isPopular
                  ? "border-[#16803D] ring-2 ring-[#16803D]/20 shadow-lg -translate-y-1"
                  : "border-[#dbe8df] shadow-xs hover:border-[#16803D]/40"
              }`}
            >
              {p.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#16803D] text-white text-[10px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-[#10291D] tracking-tight">{p.name}</h3>
                <p className="text-xs text-[#10291D]/70 mt-1">{p.tagline}</p>

                <div className="my-5 pb-5 border-b border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#10291D] tracking-tight">
                      {p.price}
                    </span>
                    <span className="text-xs text-[#10291D]/70 font-medium">/ month</span>
                  </div>
                  <p className="text-[11px] text-[#16803D] font-medium mt-1">{p.subtext}</p>
                </div>

                {/* Feature List */}
                <ul className="space-y-2.5 mb-6 text-xs text-[#10291D]/85">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#16803D] shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={p.buttonVariant}
                onClick={() => handleSelectPlan(p.name)}
                className={`w-full h-11 rounded-full text-xs font-semibold ${
                  p.isPopular
                    ? "bg-[#064B2B] hover:bg-[#043820] text-white shadow-xs"
                    : "border-[#064B2B]/30 hover:bg-[#F8F8EF] text-[#10291D]"
                }`}
              >
                {p.cta}
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
