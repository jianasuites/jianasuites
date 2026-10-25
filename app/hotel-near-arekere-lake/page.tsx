import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { arekereLakePage as page } from "@/lib/landing/arekere-lake";

export const metadata = landingMetadata(page);

export default function ArekereLakePage() {
  return <LandingPage page={page} />;
}
