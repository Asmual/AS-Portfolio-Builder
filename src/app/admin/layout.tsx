"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldAlert,
  ArrowLeft,
  Users,
  Layers,
  Database,
  BarChart3,
  ExternalLink,
  LogOut,
} from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/authClient";
import { toast } from "@/components/ui/sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out from Admin");
      router.push("/login");
    } catch {
      toast.error("Error signing out");
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#10291D] flex flex-col">
      {/* Admin Top Header */}
      <header className="h-16 bg-[#136968] text-white px-6 lg:px-10 flex items-center justify-between sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-4">
          <BrandLogo />
          <div className="h-6 w-px bg-white/20 hidden sm:block" />
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-950">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>SaaS Super Admin</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-xs font-bold bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#136968] gap-1.5 h-9"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>User Dashboard</span>
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full h-9 px-3"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="p-6 lg:p-10 flex-1 max-w-7xl w-full mx-auto space-y-8">
        {children}
      </main>
    </div>
  );
}
