/* eslint-disable react/no-unescaped-entities */
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, UserCheck, Lock, Database, Globe } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">

            <Navigation />

            {/* Header */}
            <section className="bg-gradient-to-b from-[#F8FAFC] dark:from-gray-900 to-white dark:to-black py-12 sm:py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#16A34A]/10 dark:bg-[#16A34A]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8">
                        <Shield className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[#16A34A]" />
                    </div>
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0F172B] dark:text-white mb-3 sm:mb-4 lg:mb-8 leading-tight px-1 sm:px-2 lg:px-0">
                        Privacy Policy
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 lg:px-0 leading-relaxed">
                        Your privacy and security are our top priorities. Learn how we protect your data.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        Last updated: November 18, 2025
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-8">

                    {/* Introduction */}
                    <div className="mb-12 sm:mb-16">
                        <Card className="bg-[#F8FAFC] border-0 shadow-lg">
                            <CardContent className="p-4 sm:p-6 lg:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172B] mb-3 sm:mb-4">Introduction</h2>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Copay ("we," "our," or "us") is committed to protecting your privacy and personal information.
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                    when you use our cooperative payment platform, mobile application, and related services.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Data We Collect */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center mb-6 sm:mb-8 px-1">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#16A34A]/10 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                                <Database className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#16A34A]" />
                            </div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172B]">Information We Collect</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-4 sm:p-6 lg:p-8">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0F172B] dark:text-white mb-3 sm:mb-4 lg:mb-6">Personal Information</h3>
                                    <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                                        <li>• Full name and contact information</li>
                                        <li>• Phone number for account verification</li>
                                        <li>• Cooperative membership details</li>
                                        <li>• National identification numbers (where required)</li>
                                        <li>• Payment preferences and history</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-4 sm:p-6 lg:p-8">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0F172B] dark:text-white mb-3 sm:mb-4 lg:mb-6">Usage Data</h3>
                                    <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                                        <li>• Device information and IP address</li>
                                        <li>• App usage patterns and preferences</li>
                                        <li>• Transaction records and timestamps</li>
                                        <li>• Location data (with consent)</li>
                                        <li>• Customer support interactions</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* How We Use Your Data */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center mb-6 sm:mb-8 px-1">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#16A34A]/10 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                                <UserCheck className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#16A34A]" />
                            </div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172B]">How We Use Your Information</h2>
                        </div>

                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-4 sm:p-6 lg:p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                    <div>
                                        <h3 className="text-base sm:text-lg font-semibold text-[#0F172B] mb-3 sm:mb-4">Primary Uses</h3>
                                        <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                                            <li>✓ Process cooperative payments securely</li>
                                            <li>✓ Verify your identity and prevent fraud</li>
                                            <li>✓ Maintain accurate transaction records</li>
                                            <li>✓ Provide customer support services</li>
                                            <li>✓ Send payment confirmations and receipts</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-base sm:text-lg font-semibold text-[#0F172B] mb-3 sm:mb-4">Additional Uses</h3>
                                        <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                                            <li>✓ Improve our services and user experience</li>
                                            <li>✓ Comply with legal and regulatory requirements</li>
                                            <li>✓ Send important service updates</li>
                                            <li>✓ Analyze usage patterns for security</li>
                                            <li>✓ Facilitate cooperative management functions</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Data Protection */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center mb-6 sm:mb-8 px-1">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#16A34A]/10 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                                <Lock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#16A34A]" />
                            </div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172B]">Data Protection & Security</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-4 sm:p-6 text-center">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#16A34A]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <Shield className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#16A34A]" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-[#0F172B] mb-2 sm:mb-3">Encryption</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        All sensitive data is encrypted in transit and at rest using industry-standard protocols.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-4 sm:p-6 text-center">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#16A34A]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <Lock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#16A34A]" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-[#0F172B] mb-2 sm:mb-3">Access Control</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        Strict access controls ensure only authorized personnel can access your data.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-lg sm:col-span-2 lg:col-span-1">
                                <CardContent className="p-4 sm:p-6 text-center">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#16A34A]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#16A34A]" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-[#0F172B] mb-2 sm:mb-3">Monitoring</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        Continuous security monitoring to detect and prevent unauthorized access.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Data Sharing */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center mb-6 sm:mb-8 px-1">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#16A34A]/10 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                                <Globe className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#16A34A]" />
                            </div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172B]">Data Sharing & Disclosure</h2>
                        </div>

                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-4 sm:p-6 lg:p-8">
                                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                    We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#16A34A] rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-[#0F172B] text-sm sm:text-base">Payment Processing</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm">With trusted payment partners like IremboPay to facilitate transactions</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#16A34A] rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-[#0F172B] text-sm sm:text-base">Legal Compliance</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm">When required by law, regulation, or court order</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#16A34A] rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-[#0F172B] text-sm sm:text-base">Service Providers</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm">With vetted third-party service providers under strict confidentiality agreements</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#16A34A] rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-[#0F172B] text-sm sm:text-base">Fraud Prevention</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm">To protect against fraud and ensure platform security</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Your Rights */}
                    <div className="mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172B] mb-6 sm:mb-8 px-1">Your Rights</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0F172B] mb-3 sm:mb-4">Access & Control</h3>
                                    <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-xs sm:text-sm">
                                        <li>• Request access to your personal data</li>
                                        <li>• Update or correct inaccurate information</li>
                                        <li>• Request deletion of your account data</li>
                                        <li>• Withdraw consent for data processing</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-lg">
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0F172B] mb-3 sm:mb-4">Communication Preferences</h3>
                                    <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-xs sm:text-sm">
                                        <li>• Opt-out of marketing communications</li>
                                        <li>• Choose notification preferences</li>
                                        <li>• Request data portability</li>
                                        <li>• File complaints with supervisory authorities</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-12 sm:mb-16">
                        <Card className="bg-gradient-to-r from-[#16A34A] to-blue-600 border-0 shadow-lg">
                            <CardContent className="p-6 sm:p-8 text-center text-white">
                                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Questions About Your Privacy?</h2>
                                <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                                    Our privacy team is here to help you understand how we protect your data.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                    <Button className="bg-white text-[#16A34A] hover:bg-gray-100 rounded-full text-sm sm:text-base px-4 sm:px-6">
                                        Contact Privacy Team
                                    </Button>
                                    <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full text-sm sm:text-base px-4 sm:px-6">
                                        Download Privacy Guide
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Updates to Policy */}
                    <div className="mb-12 sm:mb-16">
                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-4 sm:p-6 lg:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172B] mb-3 sm:mb-4">Policy Updates</h2>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or
                                    applicable laws. We will notify you of any material changes by posting the new Privacy Policy
                                    on this page and updating the "Last updated" date. We encourage you to review this Privacy
                                    Policy periodically for any changes.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}