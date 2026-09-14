import { business } from "@/lib/business";

export function whatsappHref(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
