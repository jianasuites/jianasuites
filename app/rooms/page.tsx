import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { roomsPage as page } from "@/lib/landing/rooms";

export const metadata = landingMetadata(page);

export default function RoomsPage() {
  return <LandingPage page={page} />;
}
