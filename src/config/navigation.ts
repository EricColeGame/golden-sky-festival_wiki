import { BookOpen, MapPin, Music2, Newspaper, Star, Ticket, type LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "lineup", path: "/lineup", icon: Music2, isContentType: true },
  { key: "tickets", path: "/tickets", icon: Ticket, isContentType: true },
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "location", path: "/location", icon: MapPin, isContentType: true },
  { key: "reviews", path: "/reviews", icon: Star, isContentType: true },
  { key: "updates", path: "/updates", icon: Newspaper, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.key);
