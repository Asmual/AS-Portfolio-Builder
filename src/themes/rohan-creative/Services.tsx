"use client";

import * as React from "react";
import { PenTool, Smartphone, Monitor, Layers, Sparkles } from "lucide-react";
import { ServiceItem } from "../types";

export function ThemeServices({ services }: { services: ServiceItem[] }) {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "pen-tool":
        return <PenTool className="w-5 h-5 text-white" />;
      case "smartphone":
        return <Smartphone className="w-5 h-5 text-white" />;
      case "monitor":
        return <Monitor className="w-5 h-5 text-white" />;
      case "layers":
        return <Layers className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="services" className="relative bg-[#FAF6F3] py-24 sm:py-28 text-[#181716] border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase font-bold tracking-widest text-[#C25E34] mb-2">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-[#181716]">
            What I Can Do For You
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/60 hover:-translate-y-1.5 flex flex-col group cursor-default"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full bg-[#C25E34] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:bg-[#A84F2A] transition-all">
                {getIcon(service.icon)}
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-xl text-[#181716] mb-3 group-hover:text-[#C25E34] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
