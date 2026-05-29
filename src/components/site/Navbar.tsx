import { useState } from "react";
import { Menu, X, Gamepad2 } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#pricing", label: "Pricing" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-lg bg-gradient-neon grid place-items-center shadow-[var(--shadow-neon)] group-hover:scale-110 transition-transform">
            <Gamepad2 className="w-5 h-5 text-primary-foreground" />
          </span>
          <span className="font-display font-bold tracking-wider text-lg">
            NEON<span className="text-gradient-neon">PLAY</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-neon hover:after:w-full after:transition-all">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#book" className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-gradient-neon text-primary-foreground font-medium text-sm hover:scale-105 transition-transform shadow-[var(--shadow-neon)]">
          Book Now
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/50 px-5 py-4 space-y-3 bg-background/95">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-foreground">{l.label}</a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="block text-center px-5 py-2 rounded-full bg-gradient-neon text-primary-foreground font-medium">Book Now</a>
        </div>
      )}
    </header>
  );
}
