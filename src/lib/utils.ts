import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard utility function to combine Tailwind CSS classes safely
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
