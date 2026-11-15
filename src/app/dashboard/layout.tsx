"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FolderGit2,
  Globe,
  CreditCard,
  Settings,
  ShieldAlert,
  LogOut,
  ExternalLink,
  Plus,
  Bell,
  Search,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  User,
} from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/authClient";
import { toast } from "@/components/ui/sonner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
  const { data: session } = useSession();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out successfully");
      router.push("/login");
    } catch {
      toast.error("Error signing out");
    }
  };

  const navItems = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
      active: pathname === "/dashboard",
    },
    {
      name: "My Portfolios",
      href: "/dashboard/portfolios",
      icon: FolderGit2,
      active: pathname.startsWith("/dashboard/portfolios"),
    },
    {
      name: "Domains & SSL",
      href: "/dashboard/domains",
      icon: Globe,
      active: pathname.startsWith("/dashboard/domains"),
    },
    {
      name: "Billing & Plans",
      href: "/dashboard/billing",
      icon: CreditCard,
      active: pathname.startsWith("/dashboard/billing"),
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      active: pathname.startsWith("/dashboard/settings"),
    },
  ];

  const userEmail = session?.user?.email || "user@asportfolio.com";
  const userName = session?.user?.name || "Asmual Creator";
  const isAdmin = (session?.user as any)?.role === "admin" || userEmail.includes("admin");

  return (
    <div className="min-h-screen bg-[#F4F6F4] flex flex-col lg:flex-row text-[#10291D]">
      
      {/* 
        ========================================================================
        DESKTOP SIDEBAR
        ========================================================================
      */}
      <aside className="hidden lg:flex w-72 flex-col justify-between bg-white border-r border-[#d8e6db] p-5 shrink-0 min-h-screen sticky top-0 h-screen select-none">
        <div className="space-y-6">
          {/* Brand Logo */}
          <div className="px-2 pt-1 pb-2">
            <BrandLogo />
          </div>

          {/* Current Workspace Pill */}
          <div className="p-3 rounded-2xl bg-[#F8F8EF] border border-[#CDECCB] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#064B2B] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                AS
              </div>
              <div>
                <p className="text-xs font-bold text-[#10291D] truncate max-w-[130px]">
                  Asmual Studios
                </p>
                <div className="flex items-center gap-1 text-[10px] text-[#16803D] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16803D]" />
                  <span>Pro Plan Active</span>
                </div>
              </div>
            </div>
            <Link
              href="/dashboard/billing"
              className="p-1.5 rounded-lg text-gray-400 hover:text-[#064B2B] hover:bg-black/5 transition-colors"
              title="Manage Plan"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#16803D]" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 py-1">
              Workspace
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    item.active
                      ? "bg-[#064B2B] text-white shadow-sm"
                      : "text-[#10291D]/80 hover:bg-[#eef7ee] hover:text-[#064B2B]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${item.active ? "text-white" : "text-[#16803D]"}`} />
                    <span>{item.name}</span>
                  </div>
                  {item.active && <ChevronRight className="w-3.5 h-3.5 opacity-80" />}
                </Link>
              );
            })}

            {/* Admin Portal Link */}
            {isAdmin && (
              <div className="pt-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600 px-3 py-1">
                  Administration
                </div>
                <Link
                  href="/admin"
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <span>Super Admin Portal</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">
                    PRO
                  </span>
                </Link>
              </div>
            )}
          </nav>
        </div>

        {/* User Profile & Sign Out Footer */}
        <div className="pt-4 border-t border-[#d8e6db]">
          <div className="flex items-center justify-between p-2 rounded-2xl bg-[#F8F9FA] border border-gray-100">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-full bg-[#16803D]/15 text-[#064B2B] flex items-center justify-center font-bold text-xs shrink-0">
                <User className="w-4 h-4 text-[#064B2B]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#10291D] truncate">{userName}</p>
                <p className="text-[10px] text-gray-500 truncate">{userEmail}</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="p-2 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* 
        ========================================================================
        MOBILE HEADER & DRAWER
        ========================================================================
      */}
      <div className="lg:hidden bg-white border-b border-[#d8e6db] p-4 flex items-center justify-between sticky top-0 z-30">
        <BrandLogo />
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-2 rounded-xl text-[#10291D] hover:bg-black/5"
            aria-label="Toggle Navigation"
          >
            {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileSidebarOpen && (
        <div className="lg:hidden bg-white border-b border-[#d8e6db] p-5 space-y-4 shadow-xl z-30">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
                    item.active
                      ? "bg-[#064B2B] text-white"
                      : "text-[#10291D]/80 hover:bg-[#eef7ee]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            {isAdmin && (
              <Link
                href="/admin"
                onClick={() => setMobileSidebarOpen(false)}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold bg-amber-50 text-amber-900 border border-amber-200 mt-2"
              >
                <ShieldAlert className="w-4 h-4 text-amber-700" />
                <span>Super Admin Portal</span>
              </Link>
            )}
          </nav>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500">{userEmail}</span>
            <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-red-600 gap-1 text-xs">
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>
      )}

      {/* 
        ========================================================================
        MAIN CONTENT BODY
        ========================================================================
      */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-[#d8e6db] px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 font-medium">
              <span className="text-[#10291D] font-bold">AS Dashboard</span>
              <span>/</span>
              <span className="capitalize">{pathname.split("/")[2] || "Overview"}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Live Preview Link */}
            <a
              href="http://localhost:3000/#themes"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#eef7ee] text-[#16803D] hover:bg-[#16803D] hover:text-white transition-colors"
            >
              <span>View Theme Showcase</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Create Portfolio Quick Action */}
            <Link href="/dashboard/portfolios">
              <Button
                size="sm"
                className="rounded-full bg-[#064B2B] hover:bg-[#043820] text-white text-xs font-semibold gap-1.5 shadow-sm h-9 px-4"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Portfolio</span>
              </Button>
            </Link>
          </div>
        </header>

        {/* Dynamic Page Children */}
        <main className="p-6 lg:p-8 flex-1 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
