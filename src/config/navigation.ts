import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES: string[] = [];
