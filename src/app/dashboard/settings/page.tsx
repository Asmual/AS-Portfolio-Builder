"use client";

import * as React from "react";
import { User, Shield, Key, Bell, Check, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { useSession } from "@/lib/authClient";

export default function SettingsPage() {
  const { data: session } = useSession();
  const [name, setName] = React.useState(session?.user?.name || "Asmual Creator");
  const [email] = React.useState(session?.user?.email || "user@asportfolio.com");
  const [workspaceName, setWorkspaceName] = React.useState("Asmual Studios");
  const [saving, setSaving] = React.useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success("Profile and workspace settings updated!");
    }, 600);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-black text-[#10291D] tracking-tight">
          Settings & Preferences
        </h1>
        <p className="text-xs text-gray-500">
          Manage your personal profile, workspace properties, and account security.
        </p>
      </div>

      {/* Profile Form */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8e6db] shadow-xs space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
          <div className="w-10 h-10 rounded-2xl bg-[#eef7ee] text-[#16803D] flex items-center justify-center font-bold">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-[#10291D]">User Profile</h2>
            <p className="text-xs text-gray-500">Update your account information.</p>
          </div>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#10291D]">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#16803D]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#10291D]">Email Address</label>
              <input
                type="email"
                disabled
                value={email}
                className="w-full h-11 px-3.5 rounded-xl border border-gray-200 text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={saving}
              className="rounded-full bg-[#064B2B] hover:bg-[#043820] text-white text-xs font-semibold h-10 px-6 gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{saving ? "Saving..." : "Save Profile"}</span>
            </Button>
          </div>
        </form>
      </div>

      {/* Workspace Settings */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8e6db] shadow-xs space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#16803D] flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-[#10291D]">Workspace Organization</h2>
            <p className="text-xs text-gray-500">Configure tenant parameters.</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#10291D]">Workspace Name</label>
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#16803D]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#10291D]">Workspace Slug (Tenant Key)</label>
            <input
              type="text"
              disabled
              value="asmual-workspace"
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 text-sm bg-gray-50 text-gray-500 font-mono cursor-not-allowed"
            />
            <p className="text-[11px] text-gray-400">
              Tenant slug isolates your portfolios and custom domains in the database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
