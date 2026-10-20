export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  lineupUrl: string;
  passesUrl: string;
  appUrl: string;
  heroVideoId?: string;
  social?: {
    facebook?: string;
    instagram?: string;
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
  tagline: "2027 Lineup, Passes & Festival Guide",
  description: "Independent GoldenSky Festival 2027 guide covering dates, lineup, passes, daily schedules, venue maps, and visitor planning for Sacramento, California.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://golden-sky-festival.wiki",
  supportEmail: "support@golden-sky-festival.wiki",
  gameUrl: "https://goldenskyfestival.com/",
  lineupUrl: "https://goldenskyfestival.com/lineup/",
  passesUrl: "https://goldenskyfestival.com/passes/",
  appUrl: "https://play.google.com/store/apps/details?id=com.greencopper.goldensky",
  heroVideoId: "0ENtSMZIwS4",
  social: {
    facebook: "https://www.facebook.com/GoldenSkyFest/",
    instagram: "https://www.instagram.com/goldenSkyfest/",
    youtube: "https://www.youtube.com/@DannyWimmerPresents",
    twitter: "https://x.com/goldenSkyfest",
  },
  locales: ["en", "es", "fr", "de"],
  defaultLocale: "en",
};
