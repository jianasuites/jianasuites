import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { bannerghattaRoadPage as page } from "@/lib/landing/bannerghatta-road";

export const metadata = landingMetadata(page);

export default function BannerghattaRoadPage() {
  return <LandingPage page={page} />;
}
