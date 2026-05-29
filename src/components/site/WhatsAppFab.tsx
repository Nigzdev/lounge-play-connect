import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";

export function WhatsAppFab() {
  const msg = encodeURIComponent("Hi! I'd like to book a slot at NeonPlay.");
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
      target="_blank"
      rel="noopener"
      aria-label="Book on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-[var(--whatsapp)] text-background font-semibold shadow-[0_10px_40px_-10px_oklch(0.72_0.18_150/0.7)] hover:scale-105 transition-transform animate-[float_3s_ease-in-out_infinite]"
    >
      <span className="relative grid place-items-center">
        <span className="absolute inset-0 rounded-full bg-background/30 animate-ping" />
        <MessageCircle className="w-5 h-5 relative" />
      </span>
      <span className="hidden sm:inline text-sm">Book Now</span>
    </a>
  );
}
