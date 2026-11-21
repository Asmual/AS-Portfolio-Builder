/**
 * Tenant Theme Configuration Type Definitions
 * Config-Driven Architecture for AS Portfolio Builder
 * Spec: DASHBOARD_THEME_EDITOR_SPEC.md Section 4
 */

export interface GlobalStylesConfig {
  primaryColor: string;       // e.g. "#136968"
  accentColor: string;        // e.g. "#249492"
  backgroundColor: string;    // e.g. "#181716" (Dark) or "#F8F8EF" (Cream)
  textColor: string;          // e.g. "#FFFFFF" or "#10291D"
  fontFamily: string;         // e.g. "Inter, sans-serif"
  borderRadius: "none" | "sm" | "md" | "lg" | "full";
  darkMode: boolean;
}

export interface HeroSectionConfig {
  enabled: boolean;
  headline: string;
  name: string;
  role: string;
  shortBio: string;
  ctaText: string;
  ctaLink: string;
  avatarUrl: string;
  availabilityStatus: string;
  experienceYears: number;
}

export interface AboutSectionConfig {
  enabled: boolean;
  title: string;
  bio: string;
  aboutPhotoUrl: string;
  experienceYears: number;
  experienceSubtitle: string;
  signatureText: string;
  resumeUrl: string;
  highlights: string[];
}

export interface ProjectConfigItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  tags: string[];
}

export interface ProjectsSectionConfig {
  enabled: boolean;
  title: string;
  subtitle: string;
  items: ProjectConfigItem[];
}

export interface SkillConfigItem {
  name: string;
  percentage: number;
}

export interface SkillsSectionConfig {
  enabled: boolean;
  title: string;
  tools: SkillConfigItem[];
  expertise: SkillConfigItem[];
}

export interface ContactSectionConfig {
  enabled: boolean;
  headline: string;
  subtext: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

export interface TenantThemeConfig {
  portfolioId: string;
  subdomain: string;
  customDomain?: string | null;
  themeId: string;
  globalStyles: GlobalStylesConfig;
  sectionsOrder: string[]; // ["hero", "about", "projects", "skills", "contact"]
  sections: {
    hero: HeroSectionConfig;
    about: AboutSectionConfig;
    projects: ProjectsSectionConfig;
    skills: SkillsSectionConfig;
    contact: ContactSectionConfig;
  };
}

export const defaultThemeConfig: TenantThemeConfig = {
  portfolioId: "demo-portfolio",
  subdomain: "asmual",
  customDomain: "asmual.dev",
  themeId: "creative-designer",
  globalStyles: {
    primaryColor: "#136968",
    accentColor: "#249492",
    backgroundColor: "#181716",
    textColor: "#FFFFFF",
    fontFamily: "Inter, sans-serif",
    borderRadius: "lg",
    darkMode: true,
  },
  sectionsOrder: ["hero", "about", "projects", "skills", "contact"],
  sections: {
    hero: {
      enabled: true,
      headline: "HELLO, I'M",
      name: "Asmual Obaidul",
      role: "Lead Full-Stack Architect & Product Designer",
      shortBio: "Crafting scalable multi-tenant SaaS products and high-impact digital experiences.",
      ctaText: "Get in Touch",
      ctaLink: "#contact",
      avatarUrl: "/images/hero-card-1.jpg",
      availabilityStatus: "Available for Q1 Projects",
      experienceYears: 6,
    },
    about: {
      enabled: true,
      title: "Design Philosophy & Engineering Mindset",
      bio: "Full-Stack Software Engineer & UI/UX Specialist with deep experience architecting scalable distributed systems, Next.js web applications, and intuitive design systems.",
      aboutPhotoUrl: "/images/hero-card-2.jpg",
      experienceYears: 6,
      experienceSubtitle: "Years building world-class platforms",
      signatureText: "Asmual Obaidul",
      resumeUrl: "#",
      highlights: [
        "Multi-Tenant SaaS Architecture",
        "Next.js Turbopack & Edge Middleware",
        "Prisma, PostgreSQL & Supabase",
        "Clean Design Tokens & 8pt Grid Systems",
      ],
    },
    projects: {
      enabled: true,
      title: "Featured Works",
      subtitle: "A selection of recent platforms, applications, and design systems.",
      items: [
        {
          id: "proj-1",
          title: "AS Portfolio Builder Multi-Tenant SaaS",
          category: "Full-Stack SaaS Platform",
          description: "Production multi-tenant portfolio engine with reverse-proxy edge routing, dynamic themes, and live customizer.",
          imageUrl: "/images/hero-card-1.jpg",
          liveUrl: "https://asportfolio.site",
          caseStudyUrl: "#",
          tags: ["Next.js 16", "TypeScript", "Prisma", "Tailwind CSS v4"],
        },
        {
          id: "proj-2",
          title: "EcoBuild Studio Architecture Portal",
          category: "Brand & Web Application",
          description: "High-conversion design system and client collaboration portal for architectural design studios.",
          imageUrl: "/images/hero-card-3.jpg",
          liveUrl: "https://ecobuild-studio.dev",
          caseStudyUrl: "#",
          tags: ["UI/UX Design", "Figma", "Framer Motion"],
        },
        {
          id: "proj-3",
          title: "CloudScale DevOps Analytics Engine",
          category: "Cloud Infrastructure Tool",
          description: "Real-time telemetry and cluster performance observability platform for containerized workloads.",
          imageUrl: "/images/hero-card-2.jpg",
          liveUrl: "#",
          caseStudyUrl: "#",
          tags: ["Go", "React 19", "Docker", "GraphQL"],
        },
      ],
    },
    skills: {
      enabled: true,
      title: "Core Expertise & Tools",
      tools: [
        { name: "Next.js & React 19", percentage: 95 },
        { name: "TypeScript & Node.js", percentage: 92 },
        { name: "PostgreSQL & Prisma ORM", percentage: 90 },
        { name: "Tailwind CSS & Design Tokens", percentage: 96 },
        { name: "Docker & Cloud Infrastructure", percentage: 84 },
      ],
      expertise: [
        { name: "Multi-Tenant SaaS Architecture", percentage: 95 },
        { name: "Design Systems & UI Engineering", percentage: 92 },
        { name: "Edge Middleware & Reverse Proxy", percentage: 94 },
        { name: "API Security & Data Isolation", percentage: 90 },
      ],
    },
    contact: {
      enabled: true,
      headline: "Let's Collaborate on Your Next Big Idea",
      subtext: "I am available for freelance architecture, full-stack consulting, and advisory roles.",
      email: "asmual@asportfolio.site",
      phone: "+880 1700 000000",
      address: "Dhaka, Bangladesh",
      socialLinks: [
        { platform: "github", url: "https://github.com/Asmual" },
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://x.com" },
      ],
    },
  },
};
