"use client";

import * as React from "react";
import { Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioData } from "../types";

export function ThemeSkills({ data }: { data: PortfolioData }) {
  const { personal, skills } = data;

  return (
    <section className="bg-[#FAF6F3] py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#181716] text-white rounded-[32px] p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle warm glow background accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C25E34]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Left Column (4 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs uppercase font-bold tracking-widest text-[#D46938]">
                Skills & Experience
              </p>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-black tracking-tight leading-[1.15] text-white">
                Tools I Use &<br />
                My Expertise
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed font-sans max-w-md">
                I combine creativity with the right tools to deliver exceptional digital experiences.
              </p>

              <div className="pt-2">
                <a href={personal.resumeUrl || "#"} download>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/20 bg-white/5 hover:bg-white hover:text-[#181716] text-white text-xs font-semibold h-11 px-6 gap-2 transition-all cursor-pointer"
                  >
                    <span>Download Resume</span>
                    <Download className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column: Two Sub-Columns (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              
              {/* Column 1: Design Tools */}
              <div className="space-y-5">
                <h3 className="font-serif font-bold text-lg text-white border-b border-white/10 pb-2">
                  Design Tools
                </h3>
                
                <div className="space-y-4">
                  {skills.tools.map((tool) => (
                    <div key={tool.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C25E34]" />
                          <span className="font-medium text-gray-200">{tool.name}</span>
                        </div>
                        <span className="text-gray-400 font-mono text-[11px]">{tool.percentage}%</span>
                      </div>
                      {/* Progress Track */}
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#C25E34] rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${tool.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Expertise */}
              <div className="space-y-5">
                <h3 className="font-serif font-bold text-lg text-white border-b border-white/10 pb-2">
                  Expertise
                </h3>

                <div className="space-y-4">
                  {skills.expertise.map((exp) => (
                    <div key={exp.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C25E34]" />
                          <span className="font-medium text-gray-200">{exp.name}</span>
                        </div>
                        <span className="text-gray-400 font-mono text-[11px]">{exp.percentage}%</span>
                      </div>
                      {/* Progress Track */}
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#C25E34] rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${exp.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
