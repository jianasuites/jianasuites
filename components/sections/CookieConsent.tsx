"use client";

import { useEffect, useState } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("jiana_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("jiana_cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-0 inset-x-0 z-50 bg-black/95 text-white py-3.5 px-4 sm:px-6 shadow-2xl border-t border-charcoal/40 backdrop-blur-sm transition-all duration-300"
    >
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-[13px] leading-relaxed text-offwhite text-center sm:text-left">
          This site uses cookies as explained in our{" "}
          <a href="#privacy" className="underline hover:text-white transition">
            cookie policy
          </a>
          . If you agree to our use of cookies, please close this message and continue to use the site.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleAccept}
            className="btn-lakeside px-6 py-2 text-xs text-white bg-sage hover:bg-charcoal border-sage"
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}
