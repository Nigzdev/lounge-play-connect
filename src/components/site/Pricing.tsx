import { CircleDot, Gamepad2, Check } from "lucide-react";

const plans = [
  {
    icon: CircleDot,
    name: "Pool Table",
    price: "200",
    perks: ["Premium felt table", "Pro cues & chalk", "Up to 4 players", "Comfy lounge seating"],
  },
  {
    icon: Gamepad2,
    name: "PS5 Gaming",
    price: "140",
    perks: ["Latest PS5 console", "4K display", "Massive game library", "Dual controllers"],
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 px-4 sm:px-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Pricing" title="Simple, hourly rates" subtitle="No hidden charges. Just pure play." />
        <div className="mt-10 sm:mt-16 grid md:grid-cols-2 gap-5 sm:gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`group relative rounded-2xl p-8 transition-all hover:-translate-y-2 ${
                p.featured
                  ? "bg-[var(--gradient-card)] border border-[var(--neon-purple)]/40 shadow-[var(--shadow-glow-purple)]"
                  : "bg-card border border-border hover:border-[var(--neon-blue)]/50"
              }`}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-neon text-primary-foreground font-bold">
                  Popular
                </span>
              )}
              <div className="w-14 h-14 rounded-xl bg-gradient-neon grid place-items-center shadow-[var(--shadow-neon)] mb-6 group-hover:rotate-6 transition-transform">
                <p.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-display font-black text-gradient-neon">₹{p.price}</span>
                <span className="text-muted-foreground">/ hour</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-[var(--neon-blue)]/15 grid place-items-center">
                      <Check className="w-3 h-3 text-[var(--neon-blue)]" />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a href="#book" className="mt-8 block text-center py-3 rounded-full bg-gradient-neon text-primary-foreground font-semibold hover:scale-[1.02] transition-transform">
                Book {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--neon-blue)] font-semibold">
        <span className="w-8 h-px bg-[var(--neon-blue)]" />
        {eyebrow}
        <span className="w-8 h-px bg-[var(--neon-blue)]" />
      </div>
      <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
