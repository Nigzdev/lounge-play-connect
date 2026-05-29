import { Gamepad2, Instagram, Facebook, Twitter } from "lucide-react";
import { HOURS, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 px-5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-lg bg-gradient-neon grid place-items-center shadow-[var(--shadow-neon)]">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </span>
            <span className="font-display font-bold tracking-wider">
              NEON<span className="text-gradient-neon">PLAY</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            {SITE_NAME} — your premium gaming & pool destination. Play. Relax. Compete.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-muted-foreground">Opening Hours</h4>
          <p className="mt-4 font-semibold">{HOURS}</p>
          <p className="mt-2 text-sm text-muted-foreground">Walk-ins welcome. Booking recommended on weekends.</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-muted-foreground">Follow</h4>
          <div className="mt-4 flex gap-3">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((s, i) => (
              <a key={i} href={s.href} aria-label="Social link" className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-colors">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border/60 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
        <span>Crafted with neon & caffeine.</span>
      </div>
    </footer>
  );
}
