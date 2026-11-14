import { z } from "zod";

// Strict email regex requiring proper domain and valid 2+ letter TLD (e.g. .com, .dev, .org)
const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .regex(validEmailRegex, "Please enter a valid email address (e.g. yourname@gmail.com)")
  .refine(
    (email) => {
      const parts = email.split("@");
      if (parts.length !== 2) return false;
      const domain = parts[1].toLowerCase();
      const domainParts = domain.split(".");
      // Domain name must be at least 2 chars before TLD (e.g., rejects a.com, x.co)
      if (domainParts[0].length < 2) return false;
      return true;
    },
    {
      message: "Invalid email domain. Please use a real email address (e.g. @gmail.com).",
    }
  );

export const strongPasswordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter (A-Z)")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter (a-z)")
  .regex(/[0-9]/, "Password must contain at least one number (0-9)")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character (!@#$%^&*)");

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: emailSchema,
  password: strongPasswordSchema,
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the Terms of Service & Privacy Policy" }),
  }),
});
