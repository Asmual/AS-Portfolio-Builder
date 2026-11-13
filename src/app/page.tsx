import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-accent/20 selection:text-brand-accent">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <HeroSection />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
