import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Pricing } from "@/components/site/Pricing";
import { Facilities } from "@/components/site/Facilities";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { BookingForm } from "@/components/site/BookingForm";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeonPlay Cafe — Ultimate Gaming & Pool Experience" },
      { name: "description", content: "Premium gaming & pool cafe with 2 pool tables and 2 PS5 setups. Play. Relax. Compete. Book your slot now." },
      { property: "og:title", content: "NeonPlay Cafe — Ultimate Gaming & Pool Experience" },
      { property: "og:description", content: "Premium gaming & pool cafe with 2 pool tables and 2 PS5 setups. Play. Relax. Compete." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Facilities />
        <Gallery />
        <WhyUs />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster richColors theme="dark" position="top-center" />
    </div>
  );
}
