import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black dark:bg-black text-white py-16 sm:py-20 lg:py-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-copay-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">C</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">Copay</span>
            </div>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto sm:mx-0 text-sm sm:text-base lg:text-lg leading-relaxed">
              Secure, simple cooperative payment platform designed to strengthen community financial management.
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-copay-green transition-colors cursor-pointer touch-manipulation min-h-11 min-w-11 group" aria-label="Follow us on Facebook">
                <span className="text-sm sm:text-base group-hover:scale-110 transition-transform">f</span>
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-copay-green transition-colors cursor-pointer touch-manipulation min-h-11 min-w-11 group" aria-label="Follow us on Twitter">
                <span className="text-sm sm:text-base group-hover:scale-110 transition-transform">t</span>
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-copay-green transition-colors cursor-pointer touch-manipulation min-h-11 min-w-11 group" aria-label="Connect with us on LinkedIn">
                <span className="text-sm sm:text-base group-hover:scale-110 transition-transform">in</span>
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors py-1 sm:py-2 block text-sm sm:text-base touch-manipulation">About</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-white transition-colors py-1 sm:py-2 block text-sm sm:text-base touch-manipulation">Team</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors py-1 sm:py-2 block text-sm sm:text-base touch-manipulation">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors py-1 sm:py-2 block text-sm sm:text-base touch-manipulation">Contact</Link></li>
            </ul>
          </div>
          
          {/* Legal & Support */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Legal & Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors py-1 sm:py-2 block text-sm sm:text-base touch-manipulation">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors py-1 sm:py-2 block text-sm sm:text-base touch-manipulation">Privacy Policy</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors py-1 sm:py-2 block text-sm sm:text-base touch-manipulation">Support</Link></li>
              <li><Link href="/admin-login" className="text-gray-400 hover:text-white transition-colors py-1 sm:py-2 block text-sm sm:text-base touch-manipulation">Login (Admin)</Link></li>
              <li><Link href="/super-admin-login" className="text-gray-400 hover:text-white transition-colors py-1 sm:py-2 block text-sm sm:text-base touch-manipulation">Login (Super Admin)</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Copay. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
            Made with ❤️ for cooperative communities
          </p>
        </div>
      </div>
    </footer>
  );
}