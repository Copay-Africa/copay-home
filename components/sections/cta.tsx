import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-copay-green">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Ready to Transform Your Cooperative Payments?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Join thousands of cooperative members who are already enjoying secure, simple payments with Copay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Button asChild className="bg-white text-copay-green hover:bg-gray-100 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto">
            <a href="#download">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}