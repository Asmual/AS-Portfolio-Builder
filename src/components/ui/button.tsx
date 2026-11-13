import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:opacity-90 hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/40",
        outline:
          "border border-border/80 bg-background/80 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm",
        ghost:
          "hover:bg-accent/60 hover:text-accent-foreground",
        brand:
          "bg-brand-accent text-white hover:bg-brand-accent/90 shadow-sm",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
