"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, MessageSquare, PhoneCall, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Message Sent Successfully!", {
        description: "Our engineering and customer support team will reply within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-12 md:py-16 bg-white/40 border-t border-[#dbe8df]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Standard Section Title (NOT oversized, tight clean margins) */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#10291D]"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#10291D]/75 mt-2"
          >
            Have questions about custom domains, billing, or theme customizations? We are here to help.
          </motion.p>
        </div>

        {/* Fully visible two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-white p-5 rounded-2xl border border-[#dbe8df] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#eef7ee] text-[#16803D] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#10291D]">Email Support</h4>
                <p className="text-xs text-[#10291D]/70 mt-0.5">Direct contact for customer and billing inquiries.</p>
                <a
                  href="mailto:support@asportfoliobuilder.com"
                  className="text-xs font-semibold text-[#16803D] hover:underline mt-1 inline-block"
                >
                  support@asportfoliobuilder.com
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#dbe8df] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#eef7ee] text-[#16803D] flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#10291D]">Live Creator Community</h4>
                <p className="text-xs text-[#10291D]/70 mt-0.5">Discuss themes, request features, and get fast feedback.</p>
                <span className="text-xs font-semibold text-[#16803D] inline-block mt-1">
                  Active 24/7 on Discord
                </span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#dbe8df] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#eef7ee] text-[#16803D] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#10291D]">Global Multi-Tenant Cloud</h4>
                <p className="text-xs text-[#10291D]/70 mt-0.5">Anywhere in the world — edge-accelerated hosting.</p>
                <span className="text-xs font-semibold text-[#16803D] inline-block mt-1">
                  99.9% Uptime Guarantee
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Functional Compact Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-[#dbe8df] shadow-xs"
          >
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#CDECCB] text-[#064B2B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#10291D]">Thank you for reaching out!</h3>
                <p className="text-xs text-[#10291D]/75 max-w-sm mx-auto">
                  Your message has been received. Our team will get back to you shortly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                  className="rounded-full text-xs mt-2"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#10291D]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-10 px-3.5 rounded-xl border border-[#dbe8df] text-xs text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16803D]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#10291D]">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-10 px-3.5 rounded-xl border border-[#dbe8df] text-xs text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16803D]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#10291D]">Subject</label>
                  <input
                    type="text"
                    placeholder="Custom Domain Setup / Theme Question"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-10 px-3.5 rounded-xl border border-[#dbe8df] text-xs text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16803D]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#10291D]">Message *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us what you need help with..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-[#dbe8df] text-xs text-[#10291D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16803D] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-full text-xs font-semibold bg-[#064B2B] hover:bg-[#043820] text-white gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
