import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ThemeRenderer } from "@/themes/ThemeRenderer";
import { defaultRohanData } from "@/themes/defaultData";
import { PortfolioData } from "@/themes/types";

interface PageProps {
  params: Promise<{
    subdomain: string;
  }>;
}

async function PortfolioLoader({ params }: PageProps) {
  const { subdomain } = await params;

  let portfolio: any = null;

  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/portfolios/by-subdomain/${subdomain}`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const json = await res.json();
      portfolio = json.data;
    }
  } catch (err) {
    console.error("Failed to fetch tenant portfolio:", err);
  }

  // Fallback demo mapping if viewing a demo subdomain like 'rohan'
  if (!portfolio && (subdomain === "rohan" || subdomain === "demo")) {
    return (
      <ThemeRenderer
        themeId="creative-designer"
        data={defaultRohanData}
      />
    );
  }

  if (!portfolio) {
    notFound();
  }

  // Transform backend portfolio data into universal PortfolioData format
  const portfolioData: PortfolioData = {
    ...defaultRohanData,
    personal: {
      ...defaultRohanData.personal,
      name: portfolio.title || defaultRohanData.personal.name,
      role: portfolio.contentData?.hero?.tagline || defaultRohanData.personal.role,
      shortBio: portfolio.contentData?.hero?.tagline || defaultRohanData.personal.shortBio,
      fullBio: portfolio.contentData?.about?.bio || defaultRohanData.personal.fullBio,
    },
  };

  return (
    <ThemeRenderer
      themeId={portfolio.themeId || "creative-designer"}
      data={portfolioData}
      config={portfolio.styleConfig}
    />
  );
}

export default function TenantPortfolioPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#181716] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-[#C25E34] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs tracking-wider uppercase text-gray-400">Loading Portfolio...</p>
          </div>
        </div>
      }
    >
      <PortfolioLoader params={params} />
    </Suspense>
  );
}
