"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signUp } from "@/lib/authClient";
import { toast } from "@/components/ui/sonner";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [agreeTerms, setAgreeTerms] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!agreeTerms) {
      toast.error("Please agree to the terms & privacy policy to continue");
      return;
    }

    setIsLoading(true);
    try {
      const res = await signUp.email({
        name,
        email,
        password,
      });

      if (res.error) {
        toast.error(res.error.message || "Failed to create account. Try another email.");
      } else {
        toast.success("Account created successfully!", {
          description: "Welcome to AS Portfolio Builder! Redirecting...",
        });
        router.push("/dashboard");
      }
    } catch {
      toast.error("Could not reach authentication server. Please ensure backend is active.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    toast.info("Google Sign-Up", {
      description: "Redirecting to Google OAuth authentication...",
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-[#064B2B] via-[#0d5c36] to-[#10291D] relative overflow-hidden">
      
      {/* Ambient background glow & texture */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#16803D]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#86EFAC]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top back navigation */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-4 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* 
        ========================================================================
        MAIN CARD CONTAINER (Inspired directly by user reference mockup)
        Rounded 3xl container, shadow-2xl, split into Left Hero & Right Form
        ========================================================================
      */}
      <div className="w-full max-w-5xl rounded-[32px] sm:rounded-[36px] bg-white shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[620px] z-10 border border-white/20">
        
        {/* 
          ----------------------------------------------------------------------
          LEFT SIDE: Welcome Hero with Organic 3D Spheres & Headline
          ----------------------------------------------------------------------
        */}
        <div className="lg:col-span-6 relative bg-gradient-to-br from-[#064B2B] via-[#08522f] to-[#16803D] p-8 sm:p-12 lg:p-14 flex flex-col justify-between overflow-hidden text-white select-none">
          
          {/* Layered 3D Spheres (Matching the mockup's spherical art) */}
          {/* Sphere 1: Top-left sphere */}
          <div
            className="absolute -top-16 -left-16 w-80 h-80 rounded-full opacity-90 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #22c55e 0%, #16803D 50%, #064B2B 90%)",
              boxShadow: "inset -10px -10px 30px rgba(0,0,0,0.5), 10px 20px 40px rgba(0,0,0,0.4)",
            }}
          />

          {/* Sphere 2: Center-bottom 3D sphere */}
          <div
            className="absolute bottom-8 right-6 w-52 h-52 rounded-full opacity-95 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #4ade80 0%, #16803D 45%, #053b21 90%)",
              boxShadow: "inset -8px -8px 25px rgba(0,0,0,0.6), 12px 18px 35px rgba(0,0,0,0.45)",
            }}
          />

          {/* Sphere 3: Bottom-left sphere */}
          <div
            className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-85 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, #86efac 0%, #15803d 50%, #032b17 95%)",
              boxShadow: "inset -6px -6px 20px rgba(0,0,0,0.6), 8px 12px 25px rgba(0,0,0,0.4)",
            }}
          />

          {/* Top Brand Pill */}
          <div className="relative z-10 flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/25">
              <span className="font-black text-sm text-[#CDECCB]">AS</span>
            </div>
            <span className="text-xs font-semibold tracking-wide text-white/90">
              AS Portfolio Builder
            </span>
          </div>

          {/* Center Welcome Typography */}
          <div className="relative z-10 my-auto py-10 max-w-sm">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight text-white uppercase drop-shadow-sm">
              JOIN US
            </h2>
            <p className="text-sm sm:text-base font-bold text-[#CDECCB] uppercase tracking-wider mt-1 drop-shadow-sm">
              START YOUR JOURNEY
            </p>
            <p className="text-xs sm:text-sm text-white/80 mt-4 leading-relaxed font-normal">
              Build your customized portfolio in minutes. Connect custom domains, showcase projects, and land high-paying clients.
            </p>
          </div>

          {/* Bottom Indicators */}
          <div className="relative z-10 flex items-center gap-4 text-[11px] text-white/70">
            <span>• Plans from $5/mo</span>
            <span>• No Code Needed</span>
            <span>• Free SSL</span>
          </div>
        </div>

        {/* 
          ----------------------------------------------------------------------
          RIGHT SIDE: Auth Registration Form
          ----------------------------------------------------------------------
        */}
        <div className="lg:col-span-6 relative p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white">
          
          {/* Subtle bottom-right decorative sphere arc from mockup */}
          <div
            className="absolute -bottom-14 -right-14 w-36 h-36 rounded-full opacity-35 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #22c55e 0%, #16803D 60%, #064B2B 95%)",
            }}
          />

          <div className="max-w-md w-full mx-auto my-auto relative z-10">
            {/* Title & Subtitle */}
            <div className="space-y-1 mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#10291D]">
                Create account
              </h1>
              <p className="text-xs sm:text-sm text-[#10291D]/65">
                Sign up to launch your custom portfolio today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Field 1: Full Name */}
              <div className="space-y-1">
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-[#F8F9FA] text-sm text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#16803D] focus:ring-2 focus:ring-[#16803D]/20 transition-all"
                  />
                </div>
              </div>

              {/* Field 2: Email */}
              <div className="space-y-1">
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-gray-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-[#F8F9FA] text-sm text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#16803D] focus:ring-2 focus:ring-[#16803D]/20 transition-all"
                  />
                </div>
              </div>

              {/* Field 3: Password with SHOW/HIDE toggle */}
              <div className="space-y-1">
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-gray-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full h-12 pl-11 pr-20 rounded-xl border border-gray-200 bg-[#F8F9FA] text-sm text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#16803D] focus:ring-2 focus:ring-[#16803D]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-xs font-bold text-gray-400 hover:text-[#064B2B] tracking-wider uppercase transition-colors"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              {/* Agree to Terms */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none text-xs text-[#10291D]/75 leading-tight">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-[#064B2B] focus:ring-[#16803D] accent-[#064B2B] mt-0.5"
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#16803D] font-medium hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#16803D] font-medium hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              {/* Primary Action Button: "Sign up" */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-xl text-sm font-bold bg-[#064B2B] hover:bg-[#043820] text-white shadow-md hover:shadow-lg transition-all mt-3 cursor-pointer"
              >
                {isLoading ? "Creating account..." : "Sign up"}
              </Button>

              {/* "Or" Divider */}
              <div className="relative flex items-center justify-center my-3">
                <div className="border-t border-gray-200 w-full" />
                <span className="bg-white px-3 text-xs text-gray-400 font-medium">Or</span>
                <div className="border-t border-gray-200 w-full" />
              </div>

              {/* Secondary Button: "Sign up with Google" */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="w-full h-12 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-sm font-semibold text-[#10291D] flex items-center justify-center gap-3 transition-colors shadow-xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Sign up with Google</span>
              </button>
            </form>

            {/* Bottom Link: "Already have an account? Sign in" */}
            <div className="mt-6 text-center text-xs text-[#10291D]/70">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-[#16803D] hover:underline">
                Sign in
              </Link>
            </div>
          </div>

          <div className="text-[11px] text-gray-400 text-center mt-4">
            © 2025 AS Portfolio Builder. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
