"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ProjectItem } from "../types";
import { Button } from "@/components/ui/button";

export function ThemeProjects({ projects }: { projects: ProjectItem[] }) {
  return (
    <section id="work" className="bg-[#FAF6F3] py-24 sm:py-28 text-[#181716]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase font-bold tracking-widest text-[#C25E34] mb-2">
              Featured Projects
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-[#181716]">
              Some Things I&apos;ve Built
            </h2>
          </div>

          <a href="#work">
            <Button
              variant="outline"
              className="rounded-full border-stone-300 hover:border-[#C25E34] hover:text-[#C25E34] text-xs font-semibold h-10 px-5 gap-1.5 transition-colors cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Project Preview Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  src={project.image || "/images/theme-creative-designer.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Bottom Meta */}
              <div className="p-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#181716] group-hover:text-[#C25E34] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-500 mt-0.5">
                    {project.category}
                  </p>
                </div>

                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-stone-200 group-hover:border-[#C25E34] group-hover:bg-[#C25E34] text-stone-500 group-hover:text-white flex items-center justify-center transition-all flex-shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
