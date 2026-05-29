import poolImg from "@/assets/pool.jpg";
import ps5Img from "@/assets/ps5.jpg";
import cafeImg from "@/assets/cafe.jpg";
import playersImg from "@/assets/players.jpg";
import controllerImg from "@/assets/controller.jpg";
import heroImg from "@/assets/hero.jpg";
import { SectionHeader } from "./Pricing";

const shots = [
  { src: poolImg, alt: "Pool table with billiard balls under neon lights", span: "md:col-span-2 md:row-span-2" },
  { src: ps5Img, alt: "PS5 controller setup glowing", span: "" },
  { src: cafeImg, alt: "Cozy gaming cafe interior with neon lighting", span: "" },
  { src: playersImg, alt: "Friends playing pool and laughing", span: "md:col-span-2" },
  { src: controllerImg, alt: "Close-up gaming controller in neon glow", span: "" },
  { src: heroImg, alt: "Wide shot of cafe with pool and PS5", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Gallery" title="A glimpse inside" subtitle="Step into the neon. Where every shot counts." />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {shots.map((s, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group border border-border ${s.span}`}>
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
