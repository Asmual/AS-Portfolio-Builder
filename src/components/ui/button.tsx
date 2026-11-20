import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#136968] text-white shadow-sm border border-[#136968]",
        secondary:
          "bg-[#E8F4F4] text-[#136968] border border-[#B8DFDF] hover:border-[#136968]",
        outline:
          "border-2 border-[#136968] bg-[#F8F8EF] text-[#10291D]",
        ghost:
          "bg-transparent text-[#10291D] hover:text-[#136968]",
        brand:
          "bg-[#249492] text-white shadow-sm",
        link:
          "text-primary underline-offset-4 hover:underline !p-0 !h-auto",
      },
      size: {
        default: "h-11 px-5 py-2 rounded-full",
        sm: "h-9 px-4 py-1.5 text-xs rounded-full",
        lg: "h-12 px-7 py-2.5 text-base rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    // Slider color by variant
    const sliderBg =
      variant === "outline"
        ? "bg-[#136968]"
        : variant === "default"
        ? "bg-[#0A4241]"
        : variant === "secondary"
        ? "bg-[#136968]"
        : variant === "brand"
        ? "bg-[#136968]"
        : "bg-[#E8F4F4]";

    const textHover =
      variant === "outline"
        ? "group-hover:text-white"
        : variant === "secondary"
        ? "group-hover:text-white"
        : "";

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Sliding Door / Curtain Overlay */}
        <span
          className={cn(
            "absolute inset-0 z-0 h-full w-full rounded-full transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0",
            sliderBg
          )}
          aria-hidden="true"
        />
        {/* Content */}
        <span
          className={cn(
            "relative z-10 inline-flex items-center justify-center gap-2 transition-colors duration-300",
            textHover
          )}
        >
          {children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
