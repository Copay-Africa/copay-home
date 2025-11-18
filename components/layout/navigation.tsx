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
            <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-copay-green rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs sm:text-sm">C</span>
                        </div>
                        <span className="text-lg sm:text-xl font-bold text-black dark:text-white">Copay</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm lg:text-base">Features</a>
                        <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm lg:text-base">How It Works</a>
                        <a href="#team" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm lg:text-base">Team</a>
                        <a href="#download" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm lg:text-base">Download</a>
                        <ThemeToggle />
                        <Button asChild className="bg-copay-green hover:bg-green-700 text-white px-4 lg:px-6 py-2 text-sm lg:text-base">
                            <a href="#download">Get Started</a>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white p-1"
                        >
                            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-3 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
                        <div className="flex flex-col space-y-2">
                            <a
                                href="#features"
                                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-3 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-3 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900"
                                onClick={() => setIsOpen(false)}
                            >
                                How It Works
                            </a>
                            <a
                                href="#team"
                                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-3 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900"
                                onClick={() => setIsOpen(false)}
                            >
                                Team
                            </a>
                            <a
                                href="#download"
                                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-3 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900"
                                onClick={() => setIsOpen(false)}
                            >
                                Download
                            </a>
                            <Button asChild className="w-full bg-copay-green hover:bg-green-700 text-white mt-3">
                                <a href="#download" onClick={() => setIsOpen(false)}>Get Started</a>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}