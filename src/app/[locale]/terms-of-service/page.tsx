import { LegalPage } from "@/components/legal-page";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site is an independent fan-made guide hub for GoldenSky Festival 2027. Content is provided for informational and entertainment purposes only.</p>
      <p>Festival dates, performers, passes, schedules, venue rules, and event policies may change without notice. Always verify important information through the official GoldenSky Festival website and your ticket provider.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this independent wiki as an official GoldenSky Festival property.</p>
      <p>Questions about these terms can be sent to <a className="font-medium text-foreground underline" href="mailto:support@golden-sky-festival.wiki">support@golden-sky-festival.wiki</a>.</p>
    </LegalPage>
  );
}
