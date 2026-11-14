import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ThemesSection } from "@/components/home/ThemesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-accent/20 selection:text-brand-accent">
      {/* Navigation Header */}
      <Navbar />

      {/* Main SaaS Showcase Sections */}
      <main className="flex-1 space-y-4">
        {/* Hero Section */}
        <HeroSection />

        {/* Theme Marketplace Preview */}
        <ThemesSection />

        {/* Core Multi-Tenant Features */}
        <FeaturesSection />

        {/* Transparent Pricing Plans */}
        <PricingSection />

        {/* Clean, Fully-Visible Contact Support */}
        <ContactSection />
      </main>

      {/* Organic Scalloped Wavy Footer */}
      <Footer />
    </div>
  );
}
