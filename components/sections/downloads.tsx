import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Phone, Globe, Download } from "lucide-react";

export function DownloadsSection() {
  return (
    <section id="download" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 px-4">
            Download Copay
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Get started with Copay on your mobile device
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* iOS App */}
          <Card className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4 sm:mx-0">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-copay-green rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4">iOS App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Download our iOS app from the App Store</p>
              <Button className="w-full bg-copay-green hover:bg-green-700 text-white py-2.5 sm:py-3">
                <Download className="mr-2 h-4 w-4" />
                App Store
              </Button>
            </CardContent>
          </Card>

          {/* Android App */}
          <Card className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4 sm:mx-0">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-copay-green rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Smartphone className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 sm:mb-4">Android App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Download our Android app from Google Play</p>
              <Button className="w-full bg-copay-green hover:bg-green-700 text-white py-2.5 sm:py-3">
                <Download className="mr-2 h-4 w-4" />
                Google Play
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}