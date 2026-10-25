// REVIEW(owner): Draft terms for your review. The booking, payment, cancellation and ID sections
// only describe where those rules are shown; add your actual rules at each TODO (ideally with a
// legal adviser) before publishing.
import type { Metadata } from "next";
import Link from "next/link";
import { PolicyContact, PolicyPage } from "@/components/ui/PolicyPage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for booking and staying at Jiana Suites, JP Nagar 7th Phase, and for using this website.",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <PolicyPage title="Terms & Conditions" lastUpdated="25 October 2026">
      <p>
        These terms apply when you book a room at Jiana Suites, stay with us, or use www.jianasuites.com. Please
        read them together with our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
        <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2>Booking</h2>
      {/* TODO(owner): add your booking rules, e.g. when a booking counts as confirmed, group bookings,
          and whether bookings made for someone else need anything extra. */}
      <p>
        You can book online with the Book Now button, by phone or on WhatsApp. Please check your dates, room type and
        guest details before you confirm.
      </p>

      <h2>Payment</h2>
      {/* TODO(owner): add your payment rules, e.g. advance or deposit, accepted payment methods, when the
          balance is due, and whether quoted rates include GST. */}
      <p>
        The amount payable for your stay is shown in the booking engine before you confirm, or shared by our team when
        you book by phone or WhatsApp.
      </p>

      <h2>Cancellation and changes</h2>
      {/* TODO(owner): add your cancellation policy, e.g. free cancellation window, charges for late
          cancellation or no-show, and how to change dates. */}
      <p>
        The cancellation terms for your booking are shown before you confirm and in your booking confirmation. To
        cancel or change a booking, contact us using the details below.
      </p>

      <h2>Identity documents at check-in</h2>
      {/* TODO(owner): list the ID documents you accept for Indian guests, and any other ID rules. */}
      <p>
        Hotels in India are required by law to record guest identity details at check-in. Foreign nationals will need
        their passport and visa.
      </p>

      <h2>Use of this website</h2>
      <p>
        We try to keep the information on this website accurate and up to date, but room details, photos and amenities
        may change. The details in your booking confirmation apply to your stay.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may revise these terms occasionally. The current version is always published here with its last updated
        date.
      </p>

      <h2>Contact us</h2>
      <PolicyContact />
    </PolicyPage>
  );
}
