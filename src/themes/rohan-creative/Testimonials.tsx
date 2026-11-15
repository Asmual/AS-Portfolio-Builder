"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialItem } from "../types";

export function ThemeTestimonials({ testimonials }: { testimonials: TestimonialItem[] }) {
  return (
    <section id="testimonials" className="bg-[#FAF6F3] py-20 sm:py-24 text-[#181716] border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-14">
          <div>
            <p className="text-xs uppercase font-bold tracking-widest text-[#C25E34] mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-[#181716]">
              What Clients Say
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-stone-300 hover:border-[#C25E34] hover:bg-[#C25E34] hover:text-white text-stone-600 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-stone-300 hover:border-[#C25E34] hover:bg-[#C25E34] hover:text-white text-stone-600 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid with Giant Quotation Mark */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Giant Serif Quotation Mark */}
          <div className="hidden md:flex md:col-span-1 text-7xl lg:text-8xl font-serif font-black text-[#C25E34] leading-none select-none">
            “
          </div>

          {/* 3 Testimonial Cards */}
          <div className="col-span-1 md:col-span-11 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all border border-stone-200/80 flex flex-col justify-between"
              >
                {/* Quote Text */}
                <p className="text-sm text-gray-700 leading-relaxed font-sans italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6F3] border border-stone-200 flex items-center justify-center font-bold text-xs text-[#C25E34] flex-shrink-0">
                    {item.clientName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#181716]">
                      {item.clientName}
                    </h4>
                    <p className="text-[11px] text-gray-500 font-sans">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
