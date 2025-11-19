"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-copay-green rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs sm:text-sm">C</span>
                        </div>
                        <span className="text-lg sm:text-xl font-bold text-black dark:text-white">Copay</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                        <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm lg:text-base font-medium py-2 px-1">Features</a>
                        <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm lg:text-base font-medium py-2 px-1">How It Works</a>
                        <a href="#team" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm lg:text-base font-medium py-2 px-1">Team</a>
                        <a href="#download" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm lg:text-base font-medium py-2 px-1">Download</a>
                        <ThemeToggle />
                        <Button asChild className="bg-copay-green hover:bg-[#026055] text-white px-4 lg:px-6 py-2 text-sm lg:text-base font-medium rounded-lg">
                            <a href="#download">Get Started</a>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-1 sm:space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-11 min-w-11 touch-manipulation flex items-center justify-center"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black animate-in slide-in-from-top-2 duration-300">
                        <div className="flex flex-col space-y-1 px-2">
                            <a
                                href="#features"
                                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 font-medium text-base min-h-12 flex items-center touch-manipulation"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 font-medium text-base min-h-12 flex items-center touch-manipulation"
                                onClick={() => setIsOpen(false)}
                            >
                                How It Works
                            </a>
                            <a
                                href="#team"
                                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 font-medium text-base min-h-12 flex items-center touch-manipulation"
                                onClick={() => setIsOpen(false)}
                            >
                                Team
                            </a>
                            <a
                                href="#download"
                                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-4 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 font-medium text-base min-h-12 flex items-center touch-manipulation"
                                onClick={() => setIsOpen(false)}
                            >
                                Download
                            </a>
                            <Button asChild className="w-full bg-copay-green hover:bg-[#026055] text-white mt-4 py-4 text-base font-medium min-h-12 touch-manipulation rounded-lg">
                                <a href="#download" onClick={() => setIsOpen(false)}>Get Started</a>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}