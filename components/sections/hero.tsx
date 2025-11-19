"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
    {
        id: 1,
        badge: "Cooperative Payment Platform",
        title: "Simplify Cooperative",
        highlight: "Payments",
        description: "Join your cooperative, select your payment type, and pay securely with IremboPay. Manage rent, cleaning, security fees, and more in one simple platform.",
        primaryButton: "Get Started",
        secondaryButton: "Watch Demo",
        backgroundImage: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        overlay: "bg-black/50"
    },
    {
        id: 2,
        badge: "Community Focused",
        title: "Built for",
        highlight: "Cooperatives",
        description: "Designed specifically for copay team with features that strengthen financial management and member engagement across all payment channels.",
        primaryButton: "Join Community",
        secondaryButton: "Learn More",
        backgroundImage: "https://images.unsplash.com/photo-1741991110666-88115e724741?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        overlay: "bg-black/50"
    },
    {
        id: 3,
        badge: "Secure & Reliable",
        title: "Bank-Level",
        highlight: "Security",
        description: "Advanced encryption and security protocols ensure your cooperative's financial transactions are protected with the highest standards of digital security.",
        primaryButton: "Secure Payment",
        secondaryButton: "Security Info",
        backgroundImage: "https://images.unsplash.com/photo-1708772565599-2c4e4b3ed9db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        overlay: "bg-black/50"
    }
];

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000); // Auto-advance every 6 seconds

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <section className="relative h-screen min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] overflow-hidden">
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                        />

                        {/* Overlay */}
                        <div className={`absolute inset-0 ${slide.overlay}`} />

                        {/* Content */}
                        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center text-white">
                                    <Badge className="mb-4 sm:mb-6 lg:mb-8 bg-copay-green/90 text-white border-copay-green/50 backdrop-blur-sm text-xs sm:text-sm">
                                        {slide.badge}
                                    </Badge>
                                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-0">
                                        {slide.title}
                                        <span className="block text-copay-green drop-shadow-lg">{slide.highlight}</span>
                                    </h1>
                                    <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto leading-relaxed text-white/90 drop-shadow-md px-4 sm:px-0">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
                                        <Button asChild className="bg-copay-green hover:bg-[#026055] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm w-full sm:w-auto min-h-11 touch-manipulation rounded-lg">
                                            <a href="#download" aria-label={`${slide.primaryButton} - Navigate to downloads`}>
                                                {slide.primaryButton}
                                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                            </a>
                                        </Button>
                                        <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-h-11 touch-manipulation rounded-lg bg-transparent" aria-label={`${slide.secondaryButton} - Learn more`}>
                                            <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                            {slide.secondaryButton}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 z-10 min-h-11 min-w-11 touch-manipulation"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 z-10 min-h-11 min-w-11 touch-manipulation"
                aria-label="Next slide"
            >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div
                    className="h-full bg-copay-green transition-all duration-75 ease-linear"
                    style={{
                        width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
                    }}
                />
            </div>
        </section>
    );
}