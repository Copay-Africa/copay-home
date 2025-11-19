import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Users, Shield } from "lucide-react";

export function DownloadsSection() {
  return (
    <section id="download" className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-copay-green/10 rounded-2xl mb-6">
            <Download className="h-8 w-8 text-copay-green" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
            Download Copay
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience secure cooperative payments with our award-winning mobile app
          </p>
        </div>

        {/* Download Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* iOS App */}
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl transition-all duration-500 group hover:border-copay-green/50 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8 lg:p-10 text-center">
                {/* Header with Logo */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09999 22C7.78999 22.05 6.79999 20.68 5.95999 19.47C4.24999 17 2.93999 12.45 4.69999 9.39C5.56999 7.87 7.12999 6.91 8.81999 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">iOS App</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Available on App Store</p>

                <Button className="w-full bg-copay-green hover:bg-[#026055] text-white py-4 text-lg font-semibold min-h-14 touch-manipulation transition-all duration-300 rounded-xl group-hover:bg-[#026055]">
                  <Download className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
              </CardContent>
            </Card>

            {/* Android App */}
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl transition-all duration-500 group hover:border-copay-green/50 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8 lg:p-10 text-center">
                {/* Header with Logo */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Android App</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Available on Google Play</p>

                <Button className="w-full bg-copay-green hover:bg-[#026055] text-white py-4 text-lg font-semibold min-h-14 touch-manipulation transition-all duration-300 rounded-xl group-hover:bg-[#026055]">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}