"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import Link from "next/link";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      id: "starter",
      name: "Starter Creator",
      tagline: "Ideal for students and individual professionals launching their brand.",
      price: billingCycle === "monthly" ? "$5" : "$4",
      subtext: billingCycle === "monthly" ? "Billed monthly" : "Billed $48 annually ($4/mo)",
      features: [
        "1 Live Portfolio Site",
        "Connect 1 Custom Domain (.com, .dev, etc.)",
        "Free SSL & High-Speed CDN Delivery",
        "All Standard Themes & Color Palettes",
        "Interactive Project & Case Study Blocks",
        "Built-in Contact Form with Email Alerts",
      ],
      isPopular: false,
      buttonVariant: "outline" as const,
      cta: "Choose Starter",
    },
    {
      id: "pro",
      name: "Pro Professional",
      tagline: "Essential for freelancers, senior developers & designers.",
      price: billingCycle === "monthly" ? "$15" : "$12",
      subtext: billingCycle === "monthly" ? "Billed monthly" : "Billed $144 annually ($12/mo)",
      features: [
        "Up to 3 Active Portfolios",
        "Unlimited Custom Domains & Subdomains",
        "All Premium & 3D Interactive Themes",
        "Remove AS Portfolio Builder Badge",
        "Custom Code Embeds & Custom CSS",
        "Visitor Analytics & Referrer Stats",
        "Priority Fast-Response Support",
      ],
      isPopular: true,
      buttonVariant: "default" as const,
      cta: "Upgrade to Pro",
    },
    {
      id: "agency",
      name: "Agency & Studio",
      tagline: "For creative agencies managing multiple client portfolios.",
      price: billingCycle === "monthly" ? "$35" : "$28",
      subtext: billingCycle === "monthly" ? "Billed monthly" : "Billed $336 annually ($28/mo)",
      features: [
        "Up to 15 Active Client Portfolios",
        "Multi-User Team & Client Access Handoff",
        "White-label Client Delivery Portal",
        "Custom Domain SSL Auto-Provisioning",
        "Dedicated Account Concierge",
        "Early Access to Exclusive Themes",
        "99.9% High Availability SLA",
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
    <section id="pricing" className="relative py-14 md:py-20 overflow-hidden bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Standard Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#10291D]"
          >
            Transparent, Predictable Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#10291D]/75 mt-3"
          >
            Premium plans starting from just <span className="font-bold text-[#16803D]">$5/month</span>. Launch on your domain with no hidden surprises.
          </motion.p>

          {/* Billing Switcher */}
          <div className="mt-6 inline-flex items-center gap-1.5 p-1 bg-[#F8F8EF] border border-[#CDECCB] rounded-full shadow-xs">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#064B2B] text-white shadow-sm"
                  : "text-[#10291D]/70 hover:text-[#10291D]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                billingCycle === "yearly"
                  ? "bg-[#064B2B] text-white shadow-sm"
                  : "text-[#10291D]/70 hover:text-[#10291D]"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-[#16803D] text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-white border-2 border-[#16803D] shadow-xl md:-translate-y-2"
                  : "bg-white/80 border border-[#CDECCB]/80 shadow-md hover:shadow-lg hover:border-[#16803D]/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#064B2B] to-[#16803D] text-white text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-[#10291D]">{plan.name}</h3>
                  <p className="text-xs text-[#10291D]/70 mt-1 min-h-[32px]">{plan.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#10291D] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#10291D]/60 font-medium">/ month</span>
                  </div>
                  <p className="text-xs text-[#16803D] font-medium mt-1">{plan.subtext}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#10291D]">
                      <div className="w-4 h-4 rounded-full bg-[#eef7ee] text-[#16803D] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight text-[#10291D]/85">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link href="/register" className="w-full">
                <Button
                  variant={plan.buttonVariant}
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full h-11 rounded-full font-semibold text-xs tracking-wide transition-all ${
                    plan.isPopular
                      ? "bg-[#064B2B] hover:bg-[#043820] text-white shadow-md hover:shadow-lg"
                      : "bg-[#F8F8EF] hover:bg-white text-[#10291D] border border-[#16803D]/30"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enterprise / Questions banner */}
        <div className="mt-12 text-center text-xs text-[#10291D]/70">
          Need custom enterprise requirements or student discounts?{" "}
          <Link href="#contact" className="font-semibold text-[#16803D] hover:underline">
            Talk to our founder team →
          </Link>
        </div>
      </div>
    </section>
  );
}
