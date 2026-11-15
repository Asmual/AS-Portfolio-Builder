"use client";

import * as React from "react";
import {
  CreditCard,
  Check,
  Sparkles,
  Download,
  Calendar,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export default function BillingPage() {
  const currentPlan = {
    name: "Pro Professional",
    price: "$15 / month",
    interval: "MONTHLY",
    nextBillingDate: "December 15, 2026",
    status: "ACTIVE",
    portfoliosUsed: 2,
    portfoliosMax: 3,
  };

  const plans = [
    {
      id: "starter",
      name: "Starter Creator",
      price: "$5",
      interval: "/ month",
      description: "For individual personal brand portfolios",
      features: ["1 Live Portfolio", "1 Custom Domain", "Standard Themes", "Free SSL"],
      isCurrent: false,
    },
    {
      id: "pro",
      name: "Pro Professional",
      price: "$15",
      interval: "/ month",
      description: "For freelancers and creative developers",
      features: [
        "Up to 3 Portfolios",
        "Unlimited Custom Domains",
        "All Premium Themes",
        "No AS Branding",
        "Analytics & Referrals",
      ],
      isCurrent: true,
    },
    {
      id: "agency",
      name: "Agency & Studio",
      price: "$35",
      interval: "/ month",
      description: "For agencies and studios managing client websites",
      features: [
        "Up to 15 Portfolios",
        "Client Workspace Handoff",
        "White-label Delivery",
        "Priority 24/7 Concierge",
      ],
      isCurrent: false,
    },
  ];

  const invoices = [
    {
      id: "INV-2026-001",
      date: "Nov 15, 2026",
      amount: "$15.00",
      status: "PAID",
      plan: "Pro Professional Plan (Monthly)",
    },
    {
      id: "INV-2026-000",
      date: "Oct 15, 2026",
      amount: "$15.00",
      status: "PAID",
      plan: "Pro Professional Plan (Monthly)",
    },
  ];

  const handlePlanAction = (planName: string, isCurrent: boolean) => {
    if (isCurrent) {
      toast.info("You are currently on this plan.");
    } else {
      toast.success(`Plan change initiated: ${planName}`, {
        description: "Redirecting to checkout payment gateway...",
      });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-black text-[#10291D] tracking-tight">
          Subscription & Billing
        </h1>
        <p className="text-xs text-gray-500">
          Manage your subscription tier, billing cycles, invoices, and entitlements.
        </p>
      </div>

      {/* Current Subscription Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#CDECCB] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#eef7ee] text-[#16803D]">
              CURRENT SUBSCRIPTION
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white">
              {currentPlan.status}
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#10291D]">{currentPlan.name}</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Billed at <span className="font-bold text-[#10291D]">{currentPlan.price}</span> • Next renewal on {currentPlan.nextBillingDate}
            </p>
          </div>

          {/* Usage Meter */}
          <div className="space-y-1.5 pt-2 max-w-sm">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">Portfolios Quota:</span>
              <span className="font-bold text-[#10291D]">
                {currentPlan.portfoliosUsed} of {currentPlan.portfoliosMax} Used
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#16803D] rounded-full w-2/3" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => toast.info("Payment Method: Visa ending in 4242")}
            className="rounded-full text-xs font-semibold h-10 px-5"
          >
            Payment Methods
          </Button>
          <Button
            onClick={() => handlePlanAction("Agency & Studio", false)}
            className="rounded-full bg-[#064B2B] hover:bg-[#043820] text-white text-xs font-semibold h-10 px-6"
          >
            Upgrade Plan
          </Button>
        </div>
      </div>

      {/* Available Plans Switcher */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-[#10291D]">Available Subscription Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`p-6 rounded-3xl bg-white border flex flex-col justify-between transition-all ${
                p.isCurrent
                  ? "border-2 border-[#16803D] shadow-lg"
                  : "border-gray-200 hover:border-gray-300 shadow-xs"
              }`}
            >
              <div>
                {p.isCurrent && (
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#16803D] text-white mb-3">
                    YOUR ACTIVE PLAN
                  </span>
                )}
                <h3 className="text-lg font-bold text-[#10291D]">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-1 min-h-[32px]">{p.description}</p>

                <div className="flex items-baseline gap-1 my-5 pb-5 border-b border-gray-100">
                  <span className="text-3xl font-extrabold text-[#10291D]">{p.price}</span>
                  <span className="text-xs text-gray-400 font-medium">{p.interval}</span>
                </div>

                <ul className="space-y-2.5 text-xs text-gray-700 mb-6">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#16803D] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={p.isCurrent ? "outline" : "default"}
                onClick={() => handlePlanAction(p.name, p.isCurrent)}
                className={`w-full rounded-full text-xs font-semibold h-10 ${
                  p.isCurrent
                    ? "border-[#16803D] text-[#16803D] hover:bg-[#eef7ee]"
                    : "bg-[#064B2B] hover:bg-[#043820] text-white"
                }`}
              >
                {p.isCurrent ? "Current Plan" : "Switch to " + p.name}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Invoice Receipts Table */}
      <div className="rounded-3xl bg-white border border-[#d8e6db] shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-[#10291D]">Billing Invoices & Receipts</h2>
        </div>

        <div className="divide-y divide-gray-100">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#10291D]">{inv.plan}</p>
                  <p className="text-gray-400 text-[11px] font-mono">{inv.id} • {inv.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-bold text-sm text-[#10291D]">{inv.amount}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  {inv.status}
                </span>
                <button
                  onClick={() => toast.success(`Receipt ${inv.id} downloaded`)}
                  className="p-2 text-gray-400 hover:text-[#064B2B] hover:bg-[#eef7ee] rounded-xl transition-colors"
                  title="Download Receipt"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
