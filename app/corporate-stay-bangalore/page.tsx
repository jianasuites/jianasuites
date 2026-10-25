import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { corporatePage as page } from "@/lib/landing/corporate";

export const metadata = landingMetadata(page);

export default function CorporatePage() {
  return <LandingPage page={page} />;
}
