export interface SocialLink {
  platform: "linkedin" | "github" | "behance" | "dribbble" | "twitter" | "instagram" | "youtube" | "website";
  url: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  tags?: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string; // e.g. "HELLO, I'M"
    title: string; // e.g. "Rohan Sharma"
    role: string; // e.g. "UI/UX Designer"
    shortBio: string;
    fullBio: string;
    avatarUrl?: string;
    aboutPhotoUrl?: string;
    signatureText?: string;
    availabilityStatus?: string; // e.g. "Available for Freelance"
    experienceYears?: number;
    experienceSubtitle?: string;
    resumeUrl?: string;
  };
  socialLinks: SocialLink[];
  stats: {
    projectsCompleted: number;
    happyClients: number;
    yearsExperience: number;
  };
  services: ServiceItem[];
  skills: {
    tools: SkillItem[];
    expertise: SkillItem[];
  };
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  contact: {
    email: string;
    phone: string;
    address: string;
    ctaHeadline: string;
    ctaSubtext: string;
  };
}

export interface ThemeConfig {
  primaryColor?: string;
  accentColor?: string;
  fontFamily?: string;
  darkMode?: boolean;
}

export interface ThemeManifest {
  id: string;
  name: string;
  category: "Design" | "Developer" | "Minimal" | "Agency";
  description: string;
  previewUrl: string;
  badge?: string;
  isPremium: boolean;
  requiredPlan: "STARTER" | "PRO" | "AGENCY";
  version: string;
  defaultConfig: ThemeConfig;
  component: React.ComponentType<{
    data: PortfolioData;
    config?: ThemeConfig;
    isEditorPreview?: boolean;
  }>;
}
