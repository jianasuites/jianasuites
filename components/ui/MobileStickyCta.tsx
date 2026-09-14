"use client";

import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

export function MobileStickyCta() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:hidden">
      <a
        href={whatsappHref("Hi, I'd like to book a stay at Jiana Suites.")}
        className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-sage text-white px-5 py-3 shadow-2xl border border-white/20 font-nav text-xs font-bold tracking-[0.12em] uppercase transition active:scale-95"
        aria-label="Book Now on WhatsApp"
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span>Book Now</span>
      </a>
    </div>
  );
}
