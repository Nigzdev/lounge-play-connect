import heroImg from "@/assets/hero.jpg";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      <img
        src={heroImg}
        alt="Neon-lit gaming and pool cafe with PS5 setup and pool table"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[var(--neon-blue)] opacity-20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[var(--neon-purple)] opacity-20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 py-12 sm:py-20 text-center w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mb-6 sm:mb-8 animate-[fade-up_0.6s_ease-out]">
          <span className="w-2 h-2 rounded-full bg-[var(--neon-blue)] animate-pulse" />
          Play. Relax. Compete.
        </div>
        <h1 className="text-[2.5rem] leading-[1] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight animate-[fade-up_0.7s_ease-out_0.1s_both]">
          Ultimate <span className="text-gradient-neon">Gaming</span>
          <br />
          & <span className="text-gradient-neon">Pool</span> Experience
        </h1>
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-[fade-up_0.7s_ease-out_0.2s_both] px-2">
          2 Pool Tables · 2 PS5 Setups · Premium Setup
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-[fade-up_0.7s_ease-out_0.3s_both] max-w-xs sm:max-w-none mx-auto">
          <a href="#book" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-neon text-primary-foreground font-semibold shadow-[var(--shadow-glow-purple)] hover:scale-105 transition-transform animate-[glow-pulse_2.5s_ease-in-out_infinite]">
            Book Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card/40 backdrop-blur hover:bg-card/80 transition-colors font-semibold">
            <MapPin className="w-4 h-4" />
            Visit Us
          </a>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto animate-[fade-up_0.7s_ease-out_0.4s_both]">
          {[
            { v: "2", l: "Pool Tables" },
            { v: "2", l: "PS5 Setups" },
            { v: "24/7", l: "Vibes" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient-neon">{s.v}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
