import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/component/landing/Hero";
import { Benefits } from "@/component/landing/Benefits";
import { Products } from "@/component/landing/Products";
import { WhyUs } from "@/component/landing/WhyUs";
import { Testimonials } from "@/component/landing/Testimonials";
import { FinalCta } from "@/component/landing/FinalCta";
import { Nav } from "@/component/landing/Nav";
import { Footer } from "@/component/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veggie Vibes — Freshness You Can Feel" },
      {
        name: "description",
        content:
          "Cold-pressed vegetable & fruit juice made fresh daily. No added sugar. Order Veggie Vibes on GrabFood.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <WhyUs />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}