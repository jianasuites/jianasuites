import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { metroPage as page } from "@/lib/landing/metro";

export const metadata = landingMetadata(page);

export default function MetroPage() {
  return <LandingPage page={page} />;
}
