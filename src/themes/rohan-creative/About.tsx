"use client";

import * as React from "react";
import Image from "next/image";
import { FolderCheck, Smile, Award, Sparkles } from "lucide-react";
import { PortfolioData } from "../types";

export function ThemeAbout({ data }: { data: PortfolioData }) {
  const { personal, stats } = data;

  return (
    <section id="about" className="relative bg-[#F5EFEB] text-[#181716] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo + Floating quote card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background dot pattern accent */}
            <div className="absolute -top-6 -left-6 w-24 h-24 opacity-25 grid grid-cols-6 gap-1.5 pointer-events-none">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#181716]" />
              ))}
            </div>

            {/* Main Arch/Rounded Image container */}
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={personal.aboutPhotoUrl || "/images/theme-creative-designer.jpg"}
                alt={personal.name}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Floating Dark Glass Badge */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 max-w-[220px] bg-[#181716] text-white p-4 rounded-2xl shadow-xl border border-white/10 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C25E34] flex-shrink-0 flex items-center justify-center text-white mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-[11px] leading-snug text-gray-300 font-sans">
                Passionate about solving problems through design and creating meaningful connections.
              </p>
            </div>
          </div>

          {/* Right Column: Copy + Stats + Signature */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <p className="text-xs uppercase font-bold tracking-widest text-[#C25E34] mb-3">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-[1.15] text-[#181716]">
                Designing with Empathy,
                <br />
                Building with Purpose.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans max-w-xl">
              {personal.fullBio}
            </p>

            {/* 3 Stat Counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-2 max-w-xl">
              {/* Stat 1 */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/80 flex flex-col items-start gap-2 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFEB] text-[#C25E34] flex items-center justify-center">
                  <FolderCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#181716]">
                    {stats.projectsCompleted}+
                  </span>
                  <p className="text-[11px] font-medium text-gray-600 leading-tight mt-0.5">
                    Projects Completed
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/80 flex flex-col items-start gap-2 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFEB] text-[#C25E34] flex items-center justify-center">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#181716]">
                    {stats.happyClients}+
                  </span>
                  <p className="text-[11px] font-medium text-gray-600 leading-tight mt-0.5">
                    Happy Clients
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-stone-200/80 flex flex-col items-start gap-2 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFEB] text-[#C25E34] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#181716]">
                    {stats.yearsExperience}+
                  </span>
                  <p className="text-[11px] font-medium text-gray-600 leading-tight mt-0.5">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Handwritten Signature */}
            <div className="pt-4">
              <span
                className="font-serif italic text-3xl sm:text-4xl text-[#C25E34]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {personal.signatureText || personal.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
