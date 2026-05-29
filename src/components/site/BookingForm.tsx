import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { SectionHeader } from "./Pricing";
import { WHATSAPP_NUMBER } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  time: z.string().trim().min(1, "Choose a time"),
  choice: z.enum(["Pool Table", "PS5 Gaming", "Both"]),
});

export function BookingForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      time: fd.get("time"),
      choice: fd.get("choice"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { name, phone, time, choice } = parsed.data;
    const msg = `Hi! I'd like to book at NeonPlay.%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ATime: ${encodeURIComponent(time)}%0AGame: ${encodeURIComponent(choice)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener");
    toast.success("Opening WhatsApp to confirm your booking…");
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <section id="book" className="relative py-16 sm:py-24 px-4 sm:px-5 pb-28 sm:pb-24">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="Booking" title="Reserve your slot" subtitle="Quick form — we'll confirm on WhatsApp." />
        <form
          onSubmit={onSubmit}
          className="mt-10 sm:mt-12 rounded-3xl p-5 sm:p-10 bg-[var(--gradient-card)] border border-border backdrop-blur shadow-[var(--shadow-glow-purple)]"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <Field label="Your Name">
              <input name="name" required maxLength={80} placeholder="John Doe" className={inputCls} />
            </Field>
            <Field label="Phone Number">
              <input name="phone" required maxLength={20} placeholder="+91 98765 43210" className={inputCls} />
            </Field>
            <Field label="Preferred Time">
              <input name="time" required type="datetime-local" className={inputCls} />
            </Field>
            <Field label="Game Choice">
              <select name="choice" required className={inputCls} defaultValue="Pool Table">
                <option>Pool Table</option>
                <option>PS5 Gaming</option>
                <option>Both</option>
              </select>
            </Field>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-8 w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-neon text-primary-foreground font-bold tracking-wide hover:scale-[1.01] transition-transform shadow-[var(--shadow-neon)] disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            {submitting ? "Sending…" : "Send Booking via WhatsApp"}
          </button>
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-input/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--neon-blue)] focus:ring-2 focus:ring-[var(--neon-blue)]/30 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
