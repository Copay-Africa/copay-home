import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TeamSection } from "@/components/sections/team";
import { DownloadsSection } from "@/components/sections/downloads";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <TeamSection />
      <DownloadsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
