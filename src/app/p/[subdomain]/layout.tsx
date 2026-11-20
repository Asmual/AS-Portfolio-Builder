import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";

interface LayoutProps {
  params: Promise<{ subdomain: string }>;
  children: ReactNode;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { subdomain } = await params;
  return {
    title: `${subdomain.toUpperCase()} | Portfolio`,
    description: "Personal professional portfolio powered by AS Portfolio Builder",
  };
}

async function ThemedTenantContainer({
  params,
  children,
}: {
  params: Promise<{ subdomain: string }>;
  children: ReactNode;
}) {
  const { subdomain } = await params;
  let themeConfig: any = null;

  try {
    const internalApiUrl = process.env.INTERNAL_API_URL || "http://localhost:5000";
    const res = await fetch(`${internalApiUrl}/api/v1/portfolios/by-subdomain/${subdomain}`);
    if (res.ok) {
      const json = await res.json();
      themeConfig = json.data?.styleConfig;
    }
  } catch {
    // Fallback if backend is unreachable
  }

  const themeVariables = {
    "--tenant-primary": themeConfig?.primaryColor || "#C25E34",
    "--tenant-accent": themeConfig?.accentColor || "#136968",
    "--tenant-bg": themeConfig?.darkMode !== false ? "#181716" : "#ffffff",
    "--tenant-font": themeConfig?.fontFamily || "inherit",
  } as React.CSSProperties;

  return (
    <div style={themeVariables} className="tenant-root min-h-screen">
      {children}
    </div>
  );
}

export default function TenantLayout({ params, children }: LayoutProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#181716]">{children}</div>}>
      <ThemedTenantContainer params={params}>{children}</ThemedTenantContainer>
    </Suspense>
  );
}
