import { Suspense } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/common/BrandLogo";

interface PageProps {
  searchParams: Promise<{
    domain?: string;
  }>;
}

async function UnmappedDomainContent({ searchParams }: PageProps) {
  const { domain } = await searchParams;
  const targetDomain = domain || "Your domain";

  return (
    <div className="min-h-screen bg-[#0E1514] text-white flex flex-col justify-between p-6 md:p-12">
      {/* Header */}
      <header className="flex items-center justify-between max-w-5xl mx-auto w-full">
        <Link href="http://localhost:3001/" className="flex items-center gap-3">
          <BrandLogo size="md" />
        </Link>
        <Link
          href="http://localhost:3001/dashboard/domains"
          className="text-xs uppercase tracking-wider font-semibold text-[#249492] hover:text-white transition-colors"
        >
          Domain Settings &rarr;
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto w-full my-auto text-center py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#136968]/20 border border-[#136968]/40 text-[#249492] text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-[#249492] animate-pulse" />
          Domain Not Pointed or Pending Verification
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          <span className="text-gray-400">Welcome to </span>
          <span className="text-[#249492] font-mono break-all">{targetDomain}</span>
        </h1>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
          This domain is not yet active or associated with a published portfolio on AS Portfolio Builder.
          If this is your custom domain, please ensure your DNS records are configured properly.
        </p>

        {/* DNS Setup Card */}
        <div className="bg-[#15201E] border border-white/10 rounded-2xl p-6 text-left mb-8 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Required DNS Record</span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">CNAME</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <p className="text-gray-400 mb-1">Host / Name</p>
              <p className="p-2.5 rounded-lg bg-[#0E1514] border border-white/5 text-gray-200">@ or portfolio</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Target / Points to</p>
              <p className="p-2.5 rounded-lg bg-[#0E1514] border border-white/5 text-[#249492]">cname.asportfolio.com</p>
            </div>
          </div>

          <p className="text-[11px] text-gray-400">
            Note: DNS propagation can take anywhere from a few minutes up to 24 hours. SSL certificates are provisioned automatically once verified.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="http://localhost:3001/dashboard/domains"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#136968] hover:bg-[#249492] text-white font-semibold text-sm transition-all shadow-lg shadow-[#136968]/20"
          >
            Configure in Dashboard
          </Link>
          <Link
            href="http://localhost:3001/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-medium text-sm transition-all border border-white/10"
          >
            Return to Homepage
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 max-w-5xl mx-auto w-full pt-8 border-t border-white/5">
        &copy; 2026 AS Portfolio Builder. All rights reserved.
      </footer>
    </div>
  );
}

export default function UnmappedDomainPage({ searchParams }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0E1514] text-white flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#249492] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <UnmappedDomainContent searchParams={searchParams} />
    </Suspense>
  );
}
