export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Golden Sky Festival Wiki",
  shortName: "Golden Sky Festival",
  logoText: "G",
  tagline: "2027 Lineup, Tickets & Festival Guide",
  description: "Explore GoldenSky Festival 2027 dates, country music lineup, daily schedules, tickets, venue maps, and visitor planning tips for Sacramento, California.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://golden-sky-festival.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://golden-sky-festival.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://goldenskyfestival.com/",
  heroVideoId: "0ENtSMZIwS4",
  social: {
    youtube: "https://www.youtube.com/@DannyWimmerPresents",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
