import { LegalPage } from "@/components/legal-page";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>Golden Sky Festival Wiki is an independent fan-built guide hub covering festival dates, lineup news, tickets, schedules, venue information, and practical visitor planning.</p>
      <p>This guide brings together publicly available GoldenSky Festival 2027 information for visitors planning a weekend at Discovery Park in Sacramento, California. Event details should always be confirmed with the official organizer before travel or purchase.</p>
      <p>Contact the site team at <a className="font-medium text-foreground underline" href="mailto:support@golden-sky-festival.wiki">support@golden-sky-festival.wiki</a>.</p>
    </LegalPage>
  );
}
