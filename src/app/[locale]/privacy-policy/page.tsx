import { LegalPage } from "@/components/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Golden Sky Festival Wiki is an independent information site for GoldenSky Festival 2027 at Discovery Park in Sacramento, California. We do not request account credentials, payment card details, or private ticket information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to the official GoldenSky Festival site, its ticketing provider, the official mobile app, YouTube, Facebook, Instagram, or X. Those services are governed by their own privacy policies.</p>
      <p>Questions about this policy can be sent to <a className="font-medium text-foreground underline" href="mailto:support@golden-sky-festival.wiki">support@golden-sky-festival.wiki</a>.</p>
    </LegalPage>
  );
}
