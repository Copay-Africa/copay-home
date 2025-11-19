import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black dark:bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Cooperative Payments?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Join thousands of cooperative members who trust Copay for secure, simple payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-copay-green hover:bg-[#026055] text-white px-8 py-4 text-lg font-semibold min-h-12 rounded-lg">
              <a href="#download">Download Now</a>
            </Button>
            <Button asChild variant="outline" className="border-2 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 px-8 py-4 text-lg font-semibold min-h-12 rounded-lg bg-transparent">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <div className="w-10 h-10 bg-copay-green rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-base">C</span>
              </div>
              <span className="text-2xl font-bold text-white">Copay</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-xs mx-auto md:mx-0">
              Secure cooperative payment platform for community financial management.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-gray-400 hover:text-copay-green transition-colors text-base font-medium">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-copay-green transition-colors text-base font-medium">Privacy Policy</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-copay-green transition-colors text-base font-medium">Help Center</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6">Connect</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-copay-green transition-all duration-300 text-sm font-bold hover:scale-110" aria-label="Facebook">
                f
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-copay-green transition-all duration-300 text-sm font-bold hover:scale-110" aria-label="Twitter">
                t
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-copay-green transition-all duration-300 text-sm font-bold hover:scale-110" aria-label="LinkedIn">
                in
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Copay. All rights reserved. Made with ❤️ for copay team.
          </p>
        </div>
      </div>
    </footer>
  );
}