"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-0 py-24">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a3d] via-[#1a3d2e] to-[#0f1419]"></div>
            
            {/* Background Elements - Hidden on mobile for performance */}
            <div className="absolute inset-0 z-5 hidden md:block">
                <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-[#006F4F]/20 to-[#FF6A30]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-[#FF6A30]/20 to-[#006F4F]/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">                    {/* Left Content */}
                    <div className="text-center lg:text-left px-4 sm:px-0">
                        <Badge className="mb-4 sm:mb-6 bg-white/20 text-white border-white/30 font-semibold px-3 sm:px-4 py-2 rounded-full inline-flex items-center gap-2 backdrop-blur-sm text-sm sm:text-base">
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                            Trusted by 50K+ users
                        </Badge>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight heading-fintech">
                            Pay Smart.
                            <span className="block text-gradient-orange">Live Better.</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                            Instant payments. Business stay working. Complete control.
                            <span className="block mt-2 text-[#30ffb0] font-semibold">Your money, simplified.</span>
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                            <Button asChild className="btn-primary text-base sm:text-lg font-bold px-9 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 min-h-[48px]">
                                <a href="#download">
                                    Start Free
                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" className="border-2 border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-9 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 min-h-[48px]">
                                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                Watch Demo
                            </Button>
                        </div>

                        {/* Trust Indicators - Hidden on very small screens */}
                        <div className="hidden xs:flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8">
                            <div className="text-center lg:text-left">
                                <div className="text-xl sm:text-2xl font-bold text-white text-financial">4.9⭐</div>
                                <div className="text-xs sm:text-sm text-white/70 font-medium">App Store</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl sm:text-2xl font-bold text-white text-financial">50K+</div>
                                <div className="text-xs sm:text-sm text-white/70 font-medium">Users</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl sm:text-2xl font-bold text-white text-financial">100%</div>
                                <div className="text-xs sm:text-sm text-white/70 font-medium">Secure</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative flex justify-center mt-8 lg:mt-0">
                        <div className="relative mx-auto w-60 sm:w-72 md:w-80">
                            {/* Main Phone Mockup - iPhone Style */}
                            <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] p-1 sm:p-1.5 shadow-2xl transform rotate-3 sm:rotate-6 hover:rotate-1 sm:hover:rotate-3 transition-transform duration-500 mx-auto">
                                {/* iPhone Frame */}
                                <div className="bg-black rounded-[1.8rem] sm:rounded-[2.3rem] p-0.5">
                                    {/* Screen */}
                                    <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative w-56 sm:w-64 md:w-72 h-[480px] sm:h-[550px] md:h-[600px]">
                                        {/* Dynamic Island */}
                                        <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-black rounded-full z-20"></div>

                                        <div className="h-full flex flex-col p-3 sm:p-4 pt-8 sm:pt-12">
                                            {/* Status Bar */}
                                            <div className="flex justify-between items-center mb-4 sm:mb-6 px-1">
                                                <div className="text-[10px] sm:text-xs font-semibold text-gray-900">9:41</div>
                                                <div className="flex items-center gap-1">
                                                    <div className="flex gap-0.5">
                                                        <div className="w-0.5 h-0.5 bg-gray-900 rounded-full"></div>
                                                        <div className="w-0.5 h-0.5 bg-gray-900 rounded-full"></div>
                                                        <div className="w-0.5 h-0.5 bg-gray-900 rounded-full"></div>
                                                    </div>
                                                    <svg className="w-3 h-2 sm:w-4 sm:h-3 ml-1" viewBox="0 0 24 12" fill="none">
                                                        <rect x="2" y="3" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1" />
                                                        <rect x="20" y="4" width="2" height="4" rx="0.5" fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* App Content */}
                                            <div className="flex-1 flex flex-col">
                                                <div className="text-center mb-4 sm:mb-6">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#006F4F] to-[#FF6A30] rounded-lg sm:rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center shadow-lg">
                                                        <span className="text-white font-bold text-base sm:text-lg">C</span>
                                                    </div>
                                                    <h3 className="font-bold text-base sm:text-lg text-gray-900">My Cooperatives</h3>
                                                    <p className="text-gray-600 text-xs sm:text-sm">Choose your cooperative</p>
                                                </div>

                                                {/* Cooperative List */}
                                                <div className="flex-1 space-y-2 sm:space-y-3">
                                                    {/* Active Cooperative */}
                                                    <div className="bg-gradient-to-br from-[#006F4F] to-[#004A36] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white shadow-lg">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <div className="font-semibold text-sm sm:text-base">Tech Workers Coop</div>
                                                                <div className="text-xs sm:text-sm opacity-80">Active • 124 members</div>
                                                            </div>
                                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                        </div>
                                                    </div>

                                                    {/* Other Cooperatives */}
                                                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <div className="font-semibold text-xs sm:text-sm text-gray-900">Community Garden</div>
                                                                <div className="text-[8px] sm:text-[10px] text-gray-600">67 members</div>
                                                            </div>
                                                            <div className="text-[10px] sm:text-xs text-[#006F4F] font-semibold">Join</div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <div className="font-semibold text-xs sm:text-sm text-gray-900">Local Artists Guild</div>
                                                                <div className="text-[8px] sm:text-[10px] text-gray-600">89 members</div>
                                                            </div>
                                                            <div className="text-[10px] sm:text-xs text-[#006F4F] font-semibold">Join</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Quick Action */}
                                                <div className="mt-3 sm:mt-4">
                                                    <div className="bg-[#FF6A30]/10 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                                                        <div className="font-semibold text-[#FF6A30] text-xs sm:text-sm">Ready to Pay</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Home Indicator */}
                                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-0.5 bg-black rounded-full opacity-60"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats - Mobile responsive */}
                            <div className="absolute top-1 sm:top-2 left-1 sm:left-2 stat-card backdrop-blur-sm bg-white/90">
                                <div className="text-xs sm:text-sm font-bold text-[#212121] text-financial">$1M+</div>
                                <div className="text-[8px] sm:text-[10px] text-gray-600">Processed</div>
                            </div>

                            <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 stat-card backdrop-blur-sm bg-white/90">
                                <div className="text-xs sm:text-sm font-bold text-[#212121] text-financial">2.3s</div>
                                <div className="text-[8px] sm:text-[10px] text-gray-600">Avg Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}