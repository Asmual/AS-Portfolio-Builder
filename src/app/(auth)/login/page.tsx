"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Lock, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/common/BrandLogo";
import { signIn } from "@/lib/authClient";
import { toast } from "@/components/ui/sonner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      const res = await signIn.email({
        email,
        password,
      });

      if (res.error) {
        toast.error(res.error.message || "Failed to sign in. Check your credentials.");
      } else {
        toast.success("Welcome back!", {
          description: "Signed in successfully. Redirecting...",
        });
        router.push("/dashboard");
      }
    } catch {
      toast.error("An unexpected error occurred during sign in.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#F8F8EF]">
      {/* 
        ========================================================================
        LEFT SIDE: Form Area
        ========================================================================
      */}
      <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-12 lg:p-16 z-10">
        <div>
          <BrandLogo />
        </div>

        <div className="max-w-md w-full mx-auto py-8">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-[#10291D]">
              Welcome Back
            </h1>
            <p className="text-sm text-[#10291D]/75">
              Enter your credentials to access your workspaces & portfolio editor.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#10291D] uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-[#dbe8df] bg-white text-sm text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16803D]"
                />
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#10291D] uppercase tracking-wider">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-[#16803D] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-11 pl-10 pr-10 rounded-xl border border-[#dbe8df] bg-white text-sm text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16803D]"
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-gray-400 hover:text-[#10291D]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 rounded-full text-sm font-semibold bg-[#064B2B] hover:bg-[#043820] text-white shadow-md gap-2 cursor-pointer transition-all mt-2"
            >
              <span>{isLoading ? "Signing In..." : "Sign In"}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#dbe8df] text-center text-xs text-[#10291D]/75">
            Don&apos;t have an account yet?{" "}
            <Link href="/register" className="font-bold text-[#16803D] hover:underline">
              Create an account
            </Link>
          </div>
        </div>

        <div className="text-xs text-[#10291D]/50 text-center lg:text-left">
          © 2025 AS Portfolio Builder. All rights reserved.
        </div>
      </div>

      {/* 
        ========================================================================
        RIGHT SIDE: Visual Showcase (Forest Green with Hero Image)
        ========================================================================
      */}
      <div className="hidden lg:flex lg:col-span-6 relative bg-gradient-to-br from-[#064B2B] via-[#0d5c36] to-[#16803D] p-12 flex-col justify-between overflow-hidden text-white">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
          <Image
            src="/images/HeroBg.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-[#CDECCB]">
            <Sparkles className="w-3.5 h-3.5 text-[#CDECCB]" />
            <span>SaaS Portfolio Builder</span>
          </span>
          <span className="text-xs text-white/70">Multi-Tenant Platform</span>
        </div>

        {/* Center Floating Card Preview */}
        <div className="relative z-10 my-auto py-8">
          <div className="relative mx-auto w-full max-w-md aspect-[16/11] rounded-2xl bg-white p-2.5 shadow-2xl border-4 border-white/90 transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/images/Hero-right side image (2).jpg"
                alt="Theme Showcase"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="mt-8 space-y-3 text-center max-w-md mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Launch in Minutes. Manage Seamlessly.
            </h2>
            <div className="flex items-center justify-center gap-4 text-xs text-[#CDECCB]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDECCB]" /> Custom Domains
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDECCB]" /> Instant SSL
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDECCB]" /> Decoupled Themes
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-white/60 text-center">
          Trusted by 50,000+ creators and agencies worldwide
        </div>
      </div>
    </div>
  );
}
