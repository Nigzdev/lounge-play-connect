import { CircleDot, Gamepad2, Sofa, Sparkles, Users } from "lucide-react";
import { SectionHeader } from "./Pricing";

const facilities = [
  { icon: CircleDot, title: "2 Pool Tables", desc: "Tournament-grade tables for the perfect break." },
  { icon: Gamepad2, title: "2 PS5 Consoles", desc: "Latest gen consoles on crisp 4K displays." },
  { icon: Sofa, title: "Comfy Seating", desc: "Sink in and play for hours without a thought." },
  { icon: Sparkles, title: "Chill Environment", desc: "Neon lights, great music, perfect vibe." },
  { icon: Users, title: "Multiplayer Games", desc: "FIFA, Tekken, COD — bring your squad." },
];

export function Facilities() {
  return (
    <section id="facilities" className="relative py-16 sm:py-24 px-4 sm:px-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-purple)]/40 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Facilities" title="Built for serious play" />
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {facilities.map((f, i) => (
            <div
              key={f.title}
              className="group relative rounded-2xl p-6 bg-card/50 border border-border hover:border-[var(--neon-blue)]/40 hover:bg-card transition-all hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[var(--neon-purple)]/10 blur-2xl group-hover:bg-[var(--neon-purple)]/30 transition-colors" />
              <f.icon className="w-9 h-9 text-[var(--neon-blue)] mb-4 group-hover:text-[var(--neon-purple)] transition-colors" />
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
