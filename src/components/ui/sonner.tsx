"use client";

import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#064B2B] group-[.toaster]:text-[#F8F8EF] group-[.toaster]:border group-[.toaster]:border-[#16803D]/60 group-[.toaster]:shadow-2xl group-[.toaster]:rounded-2xl font-sans py-3.5 px-4",
          description: "group-[.toast]:text-[#CDECCB]/85 text-xs mt-0.5",
          actionButton:
            "group-[.toast]:bg-[#16803D] group-[.toast]:text-white font-semibold rounded-full px-3 py-1",
          cancelButton:
            "group-[.toast]:bg-white/10 group-[.toast]:text-white/80 rounded-full",
          success:
            "group-[.toaster]:!bg-[#064B2B] group-[.toaster]:!text-white group-[.toaster]:!border-[#16803D]",
          error:
            "group-[.toaster]:!bg-[#1a0f0f] group-[.toaster]:!text-white group-[.toaster]:!border-red-500/50",
          info:
            "group-[.toaster]:!bg-[#064B2B] group-[.toaster]:!text-white group-[.toaster]:!border-[#16803D]/70",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
