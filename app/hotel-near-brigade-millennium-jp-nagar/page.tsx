import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { brigadeMillenniumPage as page } from "@/lib/landing/brigade-millennium";

export const metadata = landingMetadata(page);

export default function BrigadeMillenniumPage() {
  return <LandingPage page={page} />;
}
