import { Enquire } from "@/components/sections/Enquire";
import { FaqSection } from "@/components/sections/FaqSection";
import { AmenitiesFacilities } from "@/components/sections/AmenitiesFacilities";
import { CookieConsent } from "@/components/sections/CookieConsent";
import { Footer } from "@/components/sections/Footer";
import { GallerySlider } from "@/components/sections/GallerySlider";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ImageBand } from "@/components/sections/ImageBand";
import { Intro } from "@/components/sections/Intro";
import { Neighborhood } from "@/components/sections/Neighborhood";
import { RateInfo } from "@/components/sections/RateInfo";
import { SuitesGrid } from "@/components/sections/SuitesGrid";
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <SuitesGrid />
        <RateInfo />
        <ImageBand />
        <GallerySlider />
        <AmenitiesFacilities />
        <Neighborhood />
        <FaqSection />
        <Enquire />
      </main>
      <Footer />
      <CookieConsent />
      <MobileStickyCta />
    </>
  );
}
