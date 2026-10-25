// REVIEW(owner): Draft policy text for your review. Check that it matches the cookies and
// tools the website actually uses (ideally with a legal adviser) before publishing.
import type { Metadata } from "next";
import Link from "next/link";
import { PolicyContact, PolicyPage } from "@/components/ui/PolicyPage";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How the Jiana Suites website uses cookies and similar technologies, and how you can control them.",
  alternates: {
    canonical: `${siteUrl}/cookie-policy`,
  },
};

export default function CookiePolicyPage() {
  return (
    <PolicyPage title="Cookie Policy" lastUpdated="25 October 2026">
      <p>
        This policy explains how www.jianasuites.com uses cookies and similar technologies. Please read it together
        with our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files that a website stores on your device. Similar technologies, such as your
        browser&rsquo;s local storage, work in the same way. They help a website work, remember your choices, and
        understand how it is used.
      </p>

      <h2>Cookies and storage we use</h2>
      <h3>Strictly necessary</h3>
      <ul>
        <li>
          <strong>jiana_cookie_consent</strong> (local storage): remembers that you have closed the cookie banner. It
          stays until you clear your browser data.
        </li>
        <li>
          <strong>reservationPopupShown</strong> (session storage): stops the reservation pop-up from appearing again
          during the same visit. It is deleted when you close the browser tab.
        </li>
      </ul>
      <h3>Analytics</h3>
      <ul>
        <li>
          <strong>_ga</strong> and <strong>_ga_&lt;ID&gt;</strong> (Google Analytics cookies): help us understand how
          visitors use the website, for example which pages are viewed and for how long. They expire after up to 2
          years. Google processes this information on our behalf; see{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&rsquo;s Privacy Policy
          </a>
          .
        </li>
      </ul>

      <h2>Third-party services</h2>
      <p>Some parts of this website are provided by other companies, which may set their own cookies:</p>
      <ul>
        <li>the Google Maps embed in the Location section;</li>
        <li>our booking engine, when you click Book Now;</li>
        <li>WhatsApp, Facebook, Instagram and YouTube, when you follow links to them.</li>
      </ul>
      <p>These cookies are covered by those companies&rsquo; own policies.</p>

      <h2>Managing cookies</h2>
      <p>
        You can block or delete cookies in your browser settings. Blocking cookies may affect how some parts of the
        website work. You can also stop Google Analytics from collecting data about your visits by installing the{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics Opt-out Browser Add-on
        </a>
        .
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The latest version will always be on this page, with the date it
        was last updated.
      </p>

      <h2>Contact us</h2>
      <PolicyContact />
    </PolicyPage>
  );
}
