import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)",
  ],
};

const RESERVED_SUBDOMAINS = [
  "app",
  "admin",
  "api",
  "dashboard",
  "auth",
  "static",
  "mail",
  "login",
  "register",
  "preview",
  "www",
];

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // Environment root domain (default to localhost:3001 for local dev or production domain)
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3001";
  const internalApiUrl = process.env.INTERNAL_API_URL || "http://localhost:5000";

  // Normalize hostnames (strip port if rootDomain doesn't include port, or match exact)
  const hostWithoutPort = hostname.split(":")[0];
  const rootWithoutPort = rootDomain.split(":")[0];

  // 1. Main Root Domain or Localhost (e.g., localhost:3001, 127.0.0.1:3001, asportfolio.com, www.asportfolio.com)
  if (
    hostname === rootDomain ||
    hostWithoutPort === rootWithoutPort ||
    hostname === "localhost:3001" ||
    hostname === "127.0.0.1:3001" ||
    hostname === `www.${rootDomain}`
  ) {
    return NextResponse.next();
  }

  // 2. Subdomain Handling (e.g., rohan.localhost:3001 or rohan.asportfolio.com)
  const isSubdomain =
    hostname.endsWith(`.${rootDomain}`) ||
    (rootWithoutPort !== "localhost" && hostWithoutPort.endsWith(`.${rootWithoutPort}`)) ||
    (hostWithoutPort.endsWith(".localhost") && hostWithoutPort !== "localhost");

  if (isSubdomain) {
    let subdomain = "";
    if (hostname.endsWith(`.${rootDomain}`)) {
      subdomain = hostname.replace(`.${rootDomain}`, "").toLowerCase();
    } else if (hostWithoutPort.endsWith(".localhost")) {
      subdomain = hostWithoutPort.replace(".localhost", "").toLowerCase();
    } else if (hostWithoutPort.endsWith(`.${rootWithoutPort}`)) {
      subdomain = hostWithoutPort.replace(`.${rootWithoutPort}`, "").toLowerCase();
    }

    // Reserved Subdomain Protection (route to standard dashboard/admin/auth)
    if (RESERVED_SUBDOMAINS.includes(subdomain)) {
      if (url.pathname.startsWith(`/${subdomain}`)) {
        return NextResponse.next();
      }
      return NextResponse.rewrite(new URL(`/${subdomain}${url.pathname}${url.search}`, req.url));
    }

    // Don't double rewrite if already on /p/[subdomain]
    if (url.pathname.startsWith(`/p/${subdomain}`)) {
      return NextResponse.next();
    }

    // Internal rewrite to tenant portfolio route (/p/[subdomain]) without altering browser URL
    return NextResponse.rewrite(
      new URL(`/p/${subdomain}${url.pathname}${url.search}`, req.url)
    );
  }

  // 3. Custom Domain Handling (e.g., asmual.dev, portfolio.johndoe.com)
  try {
    const res = await fetch(
      `${internalApiUrl}/api/v1/domains/resolve?domain=${encodeURIComponent(hostWithoutPort)}`,
      {
        next: { revalidate: 3600 }, // Cache resolution for 1 hour at edge
      }
    );

    if (res.ok) {
      const json = await res.json();
      const tenantSubdomain = json?.data?.subdomain;

      if (tenantSubdomain) {
        return NextResponse.rewrite(
          new URL(`/p/${tenantSubdomain}${url.pathname}${url.search}`, req.url)
        );
      }
    }
  } catch (err) {
    console.error("Custom domain lookup error:", err);
  }

  // Unmapped or pending verification domain
  return NextResponse.rewrite(
    new URL(`/unmapped-domain?domain=${encodeURIComponent(hostname)}`, req.url)
  );
}
