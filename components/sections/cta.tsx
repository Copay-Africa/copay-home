import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-copay-green">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-0">
          Ready to Transform Your Cooperative Payments?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 leading-relaxed">
          Join thousands of cooperative members who are already enjoying secure, simple payments with Copay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-6 lg:px-0 max-w-2xl mx-auto">
          <Button asChild className="bg-white text-copay-green hover:bg-gray-100 active:bg-gray-200 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-semibold w-full sm:w-auto min-h-12 sm:min-h-14 lg:min-h-16 touch-manipulation transition-all duration-300 hover:shadow-xl hover:scale-105">
            <a href="#download" aria-label="Get started with Copay today">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </a>
          </Button>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 active:bg-white/20 backdrop-blur-sm px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-semibold w-full sm:w-auto min-h-12 sm:min-h-14 lg:min-h-16 touch-manipulation transition-all duration-300 hover:shadow-xl hover:scale-105" aria-label="Contact our sales team">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}