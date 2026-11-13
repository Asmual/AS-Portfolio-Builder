"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full border-border/80 bg-background/50"
        aria-label="Toggle theme"
      >
        <span className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-full border-border/80 bg-background/50 hover:bg-accent transition-all duration-200 cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px] text-amber-400 transition-all rotate-0 scale-100" />
      ) : (
        <Moon className="h-[18px] w-[18px] text-zinc-700 transition-all rotate-0 scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
