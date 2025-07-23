import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Technology } from "@/components/Technology";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Pillars />
      <Technology />
      <Footer />
    </div>
  );
};

export default Index;
