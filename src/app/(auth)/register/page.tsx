"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail, User, ArrowLeft, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/common/BrandLogo";
import { signUp, signIn } from "@/lib/authClient";
import { registerSchema } from "@/lib/validations/auth";
import { toast } from "@/components/ui/sonner";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [agreeTerms, setAgreeTerms] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // Dynamic Password Strength Calculator (Red -> Yellow -> Green)
  const passwordStrength = React.useMemo(() => {
    if (!password) return { score: 0, label: "", color: "bg-gray-200" };
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 2) {
      return { score: 1, label: "Weak password", color: "bg-red-500", text: "text-red-500", width: "w-1/3" };
    }
    if (score <= 4) {
      return { score: 2, label: "Moderate password", color: "bg-amber-400", text: "text-amber-500", width: "w-2/3" };
    }
    return { score: 3, label: "Strong password", color: "bg-emerald-600", text: "text-emerald-600", width: "w-full" };
  }, [password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate with Zod
    const validationResult = registerSchema.safeParse({
      name,
      email,
      password,
      agreeTerms,
    });

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      const issues = validationResult.error.issues || [];
      issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast.error(issues[0]?.message || "Please fix validation errors");
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
          description: "Welcome to AS Portfolio Builder! Redirecting to dashboard...",
        });
        router.push("/dashboard");
      }
    } catch {
      toast.error("Could not reach authentication server. Please ensure backend is active.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setIsLoading(true);
      const callbackURL = typeof window !== "undefined" ? `${window.location.origin}/dashboard` : "/dashboard";
      const res = await signIn.social({
        provider: "google",
        callbackURL,
      });

      if (res?.error) {
        toast.error(res.error.message || "Google sign-up failed");
      } else if (res?.data?.url) {
        window.location.href = res.data.url;
      }
    } catch (err: any) {
      toast.error(err?.message || "Failed to initialize Google Sign-In");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 bg-[#10291D] relative overflow-hidden">
      
      {/* Ambient background accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#136968]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#249492]/15 rounded-full blur-3xl pointer-events-none" />

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
        MAIN CARD CONTAINER (Solid styling, zero gradient per user instructions)
        ========================================================================
      */}
      <div className="w-full max-w-5xl rounded-[32px] sm:rounded-[36px] bg-white shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px] z-10 border border-[#B8DFDF]/40">
        
        {/* LEFT SIDE: Welcome Hero (Solid #136968 with #249492 accents) */}
        <div className="lg:col-span-6 relative bg-[#136968] p-8 sm:p-12 lg:p-14 flex flex-col justify-between overflow-hidden text-white select-none">
          
          {/* Flat Geometric Decorative Circles */}
          <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#249492]/25 pointer-events-none" />
          <div className="absolute bottom-8 right-6 w-52 h-52 rounded-full bg-[#0c4a49]/40 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#249492]/15 pointer-events-none" />

          {/* Top Brand Pill with Authentic AS Triangle Logo */}
          <div className="relative z-10">
            <BrandLogo inverted size="sm" />
          </div>

          {/* Center Welcome Typography */}
          <div className="relative z-10 my-auto py-10 max-w-sm">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight text-white uppercase">
              JOIN US
            </h2>
            <p className="text-sm sm:text-base font-bold text-[#B8DFDF] uppercase tracking-wider mt-1">
              START YOUR JOURNEY
            </p>
            <p className="text-xs sm:text-sm text-white/85 mt-4 leading-relaxed font-normal">
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

        {/* RIGHT SIDE: Auth Registration Form */}
        <div className="lg:col-span-6 relative p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white">
          <div className="max-w-md w-full mx-auto my-auto relative z-10">
            <div className="space-y-1 mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#10291D]">
                Create account
              </h1>
              <p className="text-xs sm:text-sm text-[#10291D]/65">
                Sign up with strong credentials to secure your workspace.
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
                    className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 bg-[#F8F9FA] text-sm text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#136968] focus:ring-2 focus:ring-[#136968]/20 transition-all"
                  />
                </div>
                {errors.name && <p className="text-[11px] text-red-500 pl-1">{errors.name}</p>}
              </div>

              {/* Field 2: Email with Strict Domain Validation */}
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
                    placeholder="Valid Email (e.g. name@gmail.com)"
                    className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 bg-[#F8F9FA] text-sm text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#136968] focus:ring-2 focus:ring-[#136968]/20 transition-all"
                  />
                </div>
                {errors.email && <p className="text-[11px] text-red-500 pl-1">{errors.email}</p>}
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
                    className="w-full h-11 pl-11 pr-20 rounded-xl border border-gray-200 bg-[#F8F9FA] text-sm text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#136968] focus:ring-2 focus:ring-[#136968]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-xs font-bold text-gray-400 hover:text-[#136968] tracking-wider uppercase transition-colors"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>

                {/* VISUAL PASSWORD STRENGTH METER (Red -> Yellow -> Green) */}
                {password.length > 0 && (
                  <div className="space-y-1.5 pt-1 px-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-gray-500">Password Strength:</span>
                      <span className={`font-semibold ${passwordStrength.text}`}>
                        {passwordStrength.label}
                      </span>
                    </div>
                    {/* Visual Segmented Progress Bar */}
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex gap-1">
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          passwordStrength.score >= 1 ? passwordStrength.color : "bg-transparent"
                        } w-1/3`}
                      />
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          passwordStrength.score >= 2 ? passwordStrength.color : "bg-transparent"
                        } w-1/3`}
                      />
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          passwordStrength.score >= 3 ? passwordStrength.color : "bg-transparent"
                        } w-1/3`}
                      />
                    </div>
                    <div className="text-[10px] text-gray-400 flex flex-wrap gap-2 pt-0.5">
                      <span className={password.length >= 8 ? "text-emerald-600 font-medium" : ""}>✓ 8+ chars</span>
                      <span className={/[A-Z]/.test(password) ? "text-emerald-600 font-medium" : ""}>✓ Uppercase</span>
                      <span className={/[0-9]/.test(password) ? "text-emerald-600 font-medium" : ""}>✓ Number</span>
                      <span className={/[^A-Za-z0-9]/.test(password) ? "text-emerald-600 font-medium" : ""}>✓ Symbol</span>
                    </div>
                  </div>
                )}
                {errors.password && <p className="text-[11px] text-red-500 pl-1">{errors.password}</p>}
              </div>

              {/* Agree to Terms */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none text-xs text-[#10291D]/75 leading-tight">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-[#136968] focus:ring-[#136968] accent-[#136968] mt-0.5"
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#136968] font-medium hover:text-[#249492] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#136968] font-medium hover:text-[#249492] hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.agreeTerms && <p className="text-[11px] text-red-500 pl-1">{errors.agreeTerms}</p>}
              </div>

              {/* Primary Action Button: "Sign up" */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 rounded-xl text-sm font-bold bg-[#136968] hover:bg-[#0c4a49] text-white shadow-md hover:shadow-lg transition-all mt-2 cursor-pointer"
              >
                {isLoading ? "Creating account..." : "Sign up"}
              </Button>

              {/* "Or" Divider */}
              <div className="relative flex items-center justify-center my-3">
                <div className="border-t border-gray-200 w-full" />
                <span className="bg-white px-3 text-xs text-gray-400 font-medium">Or</span>
                <div className="border-t border-gray-200 w-full" />
              </div>

              {/* Google Sign Up Button */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="w-full h-11 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-sm font-semibold text-[#10291D] flex items-center justify-center gap-3 transition-colors shadow-xs"
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

            <div className="mt-5 text-center text-xs text-[#10291D]/70">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-[#136968] hover:text-[#249492] hover:underline">
                Sign in
              </Link>
            </div>
          </div>

          <div className="text-[11px] text-gray-400 text-center mt-3">
            © 2025 AS Portfolio Builder. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
