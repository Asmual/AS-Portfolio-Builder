"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { PortfolioData } from "../types";

export function ThemeFooter({ data }: { data: PortfolioData }) {
  const { personal, contact, socialLinks } = data;

  return (
    <footer className="bg-[#181716] text-white pt-16 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl border border-[#C25E34]/40 bg-[#25221F] flex items-center justify-center font-serif font-black text-sm text-[#E07A4B] shadow-inner">
                RS
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base tracking-tight text-white">
                  {personal.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-gray-400 font-sans">
                  {personal.role}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-sm">
              Designing meaningful digital experiences that inspire and engage users.
            </p>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#home" className="hover:text-[#E07A4B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E07A4B] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E07A4B] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#E07A4B] transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#E07A4B] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E07A4B] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs text-gray-400 font-sans">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C25E34] flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C25E34] flex-shrink-0" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C25E34] flex-shrink-0" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white">
              Let&apos;s Connect
            </h4>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-[#C25E34] hover:border-[#C25E34] text-gray-300 hover:text-white flex items-center justify-center text-xs transition-colors"
                >
                  <span className="capitalize text-[11px] font-bold">
                    {s.platform.substring(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-gray-500 font-sans">
          &copy; {new Date().getFullYear()} {personal.name}. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
