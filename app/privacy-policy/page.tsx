// REVIEW(owner): Draft policy text for your review. Check that it matches how you
// actually collect and handle guest data (ideally with a legal adviser) before publishing.
import type { Metadata } from "next";
import Link from "next/link";
import { PolicyContact, PolicyPage } from "@/components/ui/PolicyPage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Jiana Suites collects, uses and protects personal data from website visitors, enquiries and hotel guests.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage title="Privacy Policy" lastUpdated="25 October 2026">
      <p>
        Jiana Suites — Luxury Living (&ldquo;Jiana Suites&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) runs this
        website and the hotel at 435, 8th Cross Road, Lakshmi Layout, JP Nagar 7th Phase, Arekere, Bangalore – 560076.
        This policy explains what personal data we collect when you use www.jianasuites.com, contact us or stay with
        us, how we use it, and the choices you have. We handle personal data in line with the Digital Personal Data
        Protection Act, 2023 and other applicable Indian law.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Reservation requests:</strong> when you use the reservation form on this website, we collect your
          name, mobile number, check-in and check-out dates, and the number of adults and children.
        </li>
        <li>
          <strong>Calls and messages:</strong> when you call, email or message us on WhatsApp, we receive the details
          you choose to share, such as your name, phone number and stay preferences.
        </li>
        <li>
          <strong>Online bookings:</strong> bookings made with the Book Now button are handled by our booking engine
          provider on its own secure website. It processes your booking and payment details under its own privacy
          policy and shares with us the details we need to host you.
        </li>
        <li>
          <strong>At check-in:</strong> identity document details for adult guests, which hotels in India are required
          by law to record. For foreign nationals this includes passport and visa details.
        </li>
        <li>
          <strong>Website use:</strong> Google Analytics collects information about how you use this website, such as
          the pages you visit, your device and browser type, and your approximate location. See our{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to enquiries and reservation requests.</li>
        <li>To confirm, manage and provide your stay.</li>
        <li>
          To meet our legal obligations, including guest registration and reporting the stay of foreign nationals to
          the immigration authorities.
        </li>
        <li>To understand how the website is used so we can improve it.</li>
        <li>
          To send you offers and updates, only if you ask for them (for example by signing up on WhatsApp). You can
          opt out at any time.
        </li>
      </ul>

      <h2>Who we share it with</h2>
      <p>We do not sell your personal data. We share it only with:</p>
      <ul>
        <li>
          service providers that help us run the website and the hotel, including Google (website analytics and
          storage of reservation requests), our booking engine provider, and WhatsApp (Meta) when you message us;
        </li>
        <li>government and law enforcement authorities, when the law requires it.</li>
      </ul>
      <p>Some of these providers may store data outside India.</p>

      <h2>How long we keep it</h2>
      <p>
        We keep personal data only for as long as we need it for the purposes above, or for longer where the law
        requires us to, for example guest registration records.
      </p>

      <h2>How we protect it</h2>
      <p>
        We use reasonable security measures to protect personal data. No method of sending or storing data over the
        internet is completely secure, so we cannot guarantee absolute security.
      </p>

      <h2>Your rights</h2>
      <p>Under the Digital Personal Data Protection Act, 2023 you can ask us to:</p>
      <ul>
        <li>give you a summary of the personal data we hold about you;</li>
        <li>correct, complete or update it;</li>
        <li>erase it, where the law does not require us to keep it;</li>
        <li>stop using it where you gave consent, by withdrawing that consent;</li>
        <li>let a person you nominate exercise these rights if you die or become unable to.</li>
      </ul>
      <p>
        To make a request or raise a concern, contact us using the details below. If you are not satisfied with our
        response, you can complain to the Data Protection Board of India.
      </p>

      <h2>Children</h2>
      <p>
        Bookings must be made by an adult. Personal data about children staying with us is provided by their parent or
        guardian.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The latest version will always be on this page, with the date it
        was last updated.
      </p>

      <h2>Contact us</h2>
      {/* TODO(owner): add the name of your grievance officer or data protection contact if you appoint one. */}
      <PolicyContact />
    </PolicyPage>
  );
}
