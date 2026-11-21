import { TenantThemeConfig } from "@/types/themeEditor";
import { PortfolioData } from "@/themes/types";

export function configToPortfolioData(config: TenantThemeConfig): PortfolioData {
  const { sections } = config;

  return {
    personal: {
      name: sections.hero.name,
      headline: sections.hero.headline,
      title: sections.hero.name,
      role: sections.hero.role,
      shortBio: sections.hero.shortBio,
      fullBio: sections.about.bio,
      avatarUrl: sections.hero.avatarUrl,
      aboutPhotoUrl: sections.about.aboutPhotoUrl,
      signatureText: sections.about.signatureText,
      availabilityStatus: sections.hero.availabilityStatus,
      experienceYears: sections.about.experienceYears || sections.hero.experienceYears,
      experienceSubtitle: sections.about.experienceSubtitle,
      resumeUrl: sections.about.resumeUrl,
    },
    socialLinks: sections.contact.socialLinks.map((s) => ({
      platform: s.platform as any,
      url: s.url,
    })),
    stats: {
      projectsCompleted: sections.projects.items.length * 4,
      happyClients: 18,
      yearsExperience: sections.about.experienceYears || 6,
    },
    services: [
      {
        id: "srv-1",
        title: "Full-Stack Web Architecture",
        description: "Modern, high-performance Next.js and Node.js web applications with robust database modeling.",
      },
      {
        id: "srv-2",
        title: "Design Systems & UI/UX",
        description: "Consistent 8pt design token systems, responsive interfaces, and accessible web experiences.",
      },
      {
        id: "srv-3",
        title: "Multi-Tenant SaaS Engineering",
        description: "Dynamic subdomains, reverse proxies, and secure multi-tenant data isolation architecture.",
      },
    ],
    skills: {
      tools: sections.skills.tools,
      expertise: sections.skills.expertise,
    },
    projects: sections.projects.items.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      description: item.description,
      image: item.imageUrl,
      liveUrl: item.liveUrl,
      caseStudyUrl: item.caseStudyUrl,
      tags: item.tags,
    })),
    testimonials: [
      {
        id: "t-1",
        clientName: "Alex Morgan",
        role: "VP of Engineering",
        company: "VentureScale Labs",
        quote: "Asmual delivered an exceptional multi-tenant system ahead of schedule. The codebase is clean, well-architected, and incredibly fast.",
      },
      {
        id: "t-2",
        clientName: "Sarah Chen",
        role: "Product Director",
        company: "Craft Studios",
        quote: "The visual customizer and design token system made launching our client portfolios effortless.",
      },
    ],
    contact: {
      email: sections.contact.email,
      phone: sections.contact.phone,
      address: sections.contact.address,
      ctaHeadline: sections.contact.headline,
      ctaSubtext: sections.contact.subtext,
    },
  };
}
