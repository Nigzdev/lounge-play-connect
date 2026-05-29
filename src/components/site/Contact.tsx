import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { SectionHeader } from "./Pricing";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER, ADDRESS, MAPS_EMBED, HOURS } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Visit Us" title="Drop by or ring us up" />
        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden border border-border bg-card/40 p-2">
            <iframe
              src={MAPS_EMBED}
              title="Our location on Google Maps"
              className="w-full h-[380px] rounded-2xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="grid gap-4 content-start">
            <ContactCard icon={MapPin} title="Address" value={ADDRESS} />
            <a href={`tel:${PHONE_TEL}`}>
              <ContactCard icon={Phone} title="Call Us" value={PHONE_DISPLAY} />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener">
              <ContactCard icon={MessageCircle} title="WhatsApp" value="Chat with us instantly" accent />
            </a>
            <ContactCard icon={Clock} title="Open Hours" value={HOURS} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, value, accent }: { icon: typeof Phone; title: string; value: string; accent?: boolean }) {
  return (
    <div className={`group p-5 rounded-2xl border flex items-center gap-4 transition-all hover:-translate-y-0.5 ${accent ? "border-[var(--whatsapp)]/40 bg-[var(--whatsapp)]/5 hover:bg-[var(--whatsapp)]/10" : "border-border bg-card/40 hover:bg-card"}`}>
      <div className={`w-12 h-12 rounded-xl grid place-items-center flex-shrink-0 ${accent ? "bg-[var(--whatsapp)]/20 text-[var(--whatsapp)]" : "bg-gradient-neon text-primary-foreground shadow-[var(--shadow-neon)]"}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );
}
