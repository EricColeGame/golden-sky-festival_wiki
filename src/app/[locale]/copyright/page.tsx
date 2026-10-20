import { LegalPage } from "@/components/legal-page";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>GoldenSky Festival, artist names, logos, photographs, videos, and related media belong to their respective owners.</p>
      <p>Golden Sky Festival Wiki is an independent fan guide. Original site text is provided for informational purposes, and third-party material remains subject to its owner&apos;s rights and terms.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="font-medium text-foreground underline" href="mailto:support@golden-sky-festival.wiki">support@golden-sky-festival.wiki</a> for review.</p>
    </LegalPage>
  );
}
