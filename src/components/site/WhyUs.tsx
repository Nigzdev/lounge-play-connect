import { Wallet, Trophy, Coffee, Heart } from "lucide-react";
import { SectionHeader } from "./Pricing";

const reasons = [
  { icon: Wallet, title: "Affordable Pricing", desc: "Premium experience without burning your wallet." },
  { icon: Trophy, title: "High-End Gaming", desc: "Pro-grade setups for casual & competitive play." },
  { icon: Coffee, title: "Perfect Hangout", desc: "The go-to spot to unwind with your crew." },
  { icon: Heart, title: "Friendly Vibes", desc: "Warm staff and a community that feels like home." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 px-5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.28_300/0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader eyebrow="Why Choose Us" title="More than just a cafe" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="group text-center p-6 rounded-2xl border border-border bg-card/30 hover:bg-card transition-all hover:-translate-y-2">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-neon grid place-items-center shadow-[var(--shadow-neon)] group-hover:scale-110 transition-transform">
                <r.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
