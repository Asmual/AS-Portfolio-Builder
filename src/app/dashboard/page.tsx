"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FolderGit2,
  Globe,
  Users,
  CreditCard,
  Plus,
  ExternalLink,
  Edit3,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface Portfolio {
  id: string;
  title: string;
  subdomain: string;
  isPublished: boolean;
  theme?: {
    name: string;
    category: string;
    previewUrl: string;
  };
  customDomain?: {
    domainName: string;
    status: string;
    sslActive: boolean;
  } | null;
  updatedAt: string;
}

export default function DashboardOverviewPage() {
  const [portfolios, setPortfolios] = React.useState<Portfolio[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("http://localhost:5000/api/v1/portfolios");
        const json = await res.json();
        if (json.success && json.data) {
          setPortfolios(json.data);
        }
      } catch (err) {
        console.error("Failed to fetch portfolios:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const stats = [
    {
      title: "Active Portfolios",
      value: portfolios.length > 0 ? `${portfolios.length} / 3` : "2 / 3",
      subtext: "Pro Plan limit: 3 sites",
      icon: FolderGit2,
      color: "text-[#16803D]",
      bg: "bg-[#eef7ee]",
    },
    {
      title: "Custom Domains",
      value: "1 Active",
      subtext: "asmual.dev • SSL Active",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Monthly Visitors",
      value: "1,420",
      subtext: "+18% from last month",
      icon: Users,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "Active Subscription",
      value: "$15 / mo",
      subtext: "Pro Professional Tier",
      icon: CreditCard,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 
        ========================================================================
        1. WELCOME HERO BANNER
        ========================================================================
      */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#064B2B] via-[#0d5c36] to-[#16803D] text-white shadow-xl overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute left-1/2 -top-10 w-48 h-48 bg-[#86EFAC]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/15 text-[#CDECCB] border border-white/20">
              <Sparkles className="w-3 h-3 text-[#CDECCB]" />
              <span>Multi-Tenant Workspace</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Welcome back, Asmual Creator!
            </h1>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
              Your professional portfolio websites are live and resolving globally. You have 1 slot remaining on your Pro plan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link href="/dashboard/portfolios">
              <Button
                variant="default"
                className="w-full sm:w-auto rounded-full bg-white text-[#064B2B] hover:bg-gray-100 font-bold text-xs shadow-md h-11 px-6 gap-2"
              >
                <Plus className="w-4 h-4 text-[#064B2B]" />
                <span>Create New Portfolio</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        2. STATS KPI GRID
        ========================================================================
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#d8e6db] shadow-xs flex items-center justify-between transition-all hover:shadow-md hover:border-[#16803D]/40"
            >
              <div>
                <p className="text-xs text-gray-500 font-medium">{stat.title}</p>
                <h3 className="text-2xl font-black text-[#10291D] mt-1 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-[11px] text-gray-400 font-medium mt-1">{stat.subtext}</p>
              </div>
              <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                <Icon className="w-6 h-6 stroke-[2.2]" />
              </div>
            </div>
          );
        })}
      </div>

      {/* 
        ========================================================================
        3. PORTFOLIOS SECTION
        ========================================================================
      */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#10291D] tracking-tight">
              My Portfolio Websites
            </h2>
            <p className="text-xs text-gray-500">
              Manage live published websites, subdomains and custom domains
            </p>
          </div>
          <Link
            href="/dashboard/portfolios"
            className="text-xs font-bold text-[#16803D] hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loading ? (
          <div className="p-12 text-center text-xs text-gray-400 bg-white rounded-2xl border border-gray-100">
            Loading your portfolios...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-[#d8e6db] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Preview Image Container */}
                  <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden border-b border-gray-100">
                    <Image
                      src={
                        item.subdomain === "asmual"
                          ? "/images/Hero-right side image (3).jpg"
                          : "/images/Hero-right side image (2).jpg"
                      }
                      alt={item.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Status Pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      {item.isPublished ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>PUBLISHED</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500 text-white shadow-md">
                          <Clock className="w-3 h-3" />
                          <span>DRAFT</span>
                        </span>
                      )}
                    </div>

                    {/* Theme Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-white">
                      {item.theme?.name || "Modern Theme"}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-[#10291D] truncate group-hover:text-[#16803D] transition-colors">
                      {item.title}
                    </h3>

                    {/* URLs Info */}
                    <div className="space-y-1.5 text-xs">
                      {/* Subdomain */}
                      <div className="flex items-center gap-2 text-gray-600 font-mono text-[11px]">
                        <span className="text-gray-400">Subdomain:</span>
                        <span className="font-semibold text-[#10291D]">
                          {item.subdomain}.asportfolio.site
                        </span>
                      </div>

                      {/* Custom Domain (if present) */}
                      {item.customDomain && (
                        <div className="flex items-center gap-2 text-[#16803D] font-mono text-[11px]">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#16803D]" />
                          <span className="font-bold">{item.customDomain.domainName}</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-sans font-bold">
                            SSL Active
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="px-5 pb-5 pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toast.info(`Opening Visual Editor for: ${item.title}`, {
                        description: "Visual customizer loads instant live theme preview.",
                      });
                    }}
                    className="flex-1 rounded-xl text-xs font-semibold border-[#d8e6db] hover:border-[#16803D] hover:text-[#16803D] h-9 gap-1.5"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Portfolio</span>
                  </Button>

                  {item.isPublished && (
                    <a
                      href={`http://localhost:3000/#themes`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl border border-[#d8e6db] hover:border-[#16803D] text-gray-500 hover:text-[#064B2B] hover:bg-[#eef7ee] transition-colors"
                      title="View Live Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Create New Card */}
            <Link
              href="/dashboard/portfolios"
              className="rounded-3xl border-2 border-dashed border-[#CDECCB] hover:border-[#16803D] bg-white/60 hover:bg-white p-8 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 min-h-[300px] group shadow-xs hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-full bg-[#eef7ee] text-[#16803D] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#10291D]">Create New Portfolio</h3>
                <p className="text-xs text-gray-500 max-w-[200px]">
                  Pick a modern theme and publish in one click.
                </p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
