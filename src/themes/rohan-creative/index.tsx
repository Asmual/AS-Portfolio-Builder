"use client";

import * as React from "react";
import { PortfolioData, ThemeConfig } from "../types";
import { ThemeNavbar } from "./Navbar";
import { ThemeHero } from "./Hero";
import { ThemeAbout } from "./About";
import { ThemeServices } from "./Services";
import { ThemeSkills } from "./Skills";
import { ThemeProjects } from "./Projects";
import { ThemeTestimonials } from "./Testimonials";
import { ThemeContactCTA } from "./ContactCTA";
import { ThemeFooter } from "./Footer";

interface RohanCreativeThemeProps {
  data: PortfolioData;
  config?: ThemeConfig;
  isEditorPreview?: boolean;
}

export default function RohanCreativeTheme({
  data,
  config,
  isEditorPreview,
}: RohanCreativeThemeProps) {
  return (
    <div className="min-h-screen bg-[#F5EFEB] text-[#181716] font-sans selection:bg-[#C25E34] selection:text-white">
      {/* Navbar */}
      <ThemeNavbar name={data.personal.name} role={data.personal.role} />

      {/* Main Sections */}
      <main>
        <ThemeHero data={data} />
        <ThemeAbout data={data} />
        <ThemeServices services={data.services} />
        <ThemeSkills data={data} />
        <ThemeProjects projects={data.projects} />
        <ThemeTestimonials testimonials={data.testimonials} />
        <ThemeContactCTA data={data} />
      </main>

      {/* Footer */}
      <ThemeFooter data={data} />
    </div>
  );
}
