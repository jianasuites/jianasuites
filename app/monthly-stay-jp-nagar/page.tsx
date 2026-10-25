import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { monthlyPage as page } from "@/lib/landing/monthly";

export const metadata = landingMetadata(page);

export default function MonthlyPage() {
  return <LandingPage page={page} />;
}
