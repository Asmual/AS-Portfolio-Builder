/**
 * Core Application TypeScript Interfaces & Types
 */

export type UserRole = "SUPER_ADMIN" | "USER" | "VISITOR";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt: string;
}

export interface PortfolioSummary {
  id: string;
  title: string;
  slug: string;
  subdomain: string;
  customDomain?: string;
  isPublished: boolean;
  themeId: string;
  updatedAt: string;
}
