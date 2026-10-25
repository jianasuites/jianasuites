import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { hospitalsPage as page } from "@/lib/landing/hospitals";

export const metadata = landingMetadata(page);

export default function HospitalsPage() {
  return <LandingPage page={page} />;
}
