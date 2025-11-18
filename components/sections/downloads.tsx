import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Phone, Globe, Download } from "lucide-react";

export function DownloadsSection() {
  return (
    <section id="download" className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 leading-tight">
            Download Copay
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed">
            Get started with Copay on your mobile device
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          {/* iOS App */}
          <Card className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02] hover:border-copay-green/30">
            <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-copay-green rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Smartphone className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black dark:text-white mb-4 sm:mb-6">iOS App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">Download our iOS app from the App Store</p>
              <Button className="w-full bg-copay-green hover:bg-green-700 text-white py-3 sm:py-4 lg:py-5 text-base sm:text-lg font-medium min-h-12 sm:min-h-14 touch-manipulation transition-all duration-300 hover:shadow-lg">
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                App Store
              </Button>
            </CardContent>
          </Card>

          {/* Android App */}
          <Card className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02] hover:border-copay-green/30">
            <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-copay-green rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Smartphone className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black dark:text-white mb-4 sm:mb-6">Android App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">Download our Android app from Google Play</p>
              <Button className="w-full bg-copay-green hover:bg-green-700 text-white py-3 sm:py-4 lg:py-5 text-base sm:text-lg font-medium min-h-12 sm:min-h-14 touch-manipulation transition-all duration-300 hover:shadow-lg">
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Google Play
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}