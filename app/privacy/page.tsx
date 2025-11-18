/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, UserCheck, Lock, Database, Globe } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#16A34A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-[#0F172B]">Copay</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="text-[#0F172B] border-gray-200">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-[#16A34A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-[#16A34A]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172B] mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your privacy and security are our top priorities. Learn how we protect your data.
          </p>
          <p className="text-sm text-gray-500">
            Last updated: November 18, 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16">
            <Card className="bg-[#F8FAFC] border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0F172B] mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Copay ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you use our cooperative payment platform, mobile application, and related services.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Data We Collect */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#16A34A]/10 rounded-xl flex items-center justify-center mr-4">
                <Database className="h-6 w-6 text-[#16A34A]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172B]">Information We Collect</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#0F172B] mb-4">Personal Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Full name and contact information</li>
                    <li>• Phone number for account verification</li>
                    <li>• Cooperative membership details</li>
                    <li>• National identification numbers (where required)</li>
                    <li>• Payment preferences and history</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#0F172B] mb-4">Usage Data</h3>
                  <ul className="space-y-2 text-gray-600">
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
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#16A34A]/10 rounded-xl flex items-center justify-center mr-4">
                <UserCheck className="h-6 w-6 text-[#16A34A]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172B]">How We Use Your Information</h2>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172B] mb-4">Primary Uses</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>✓ Process cooperative payments securely</li>
                      <li>✓ Verify your identity and prevent fraud</li>
                      <li>✓ Maintain accurate transaction records</li>
                      <li>✓ Provide customer support services</li>
                      <li>✓ Send payment confirmations and receipts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172B] mb-4">Additional Uses</h3>
                    <ul className="space-y-3 text-gray-600">
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
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#16A34A]/10 rounded-xl flex items-center justify-center mr-4">
                <Lock className="h-6 w-6 text-[#16A34A]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172B]">Data Protection & Security</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#16A34A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-[#16A34A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172B] mb-3">Encryption</h3>
                  <p className="text-gray-600 text-sm">
                    All sensitive data is encrypted in transit and at rest using industry-standard protocols.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#16A34A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-6 w-6 text-[#16A34A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172B] mb-3">Access Control</h3>
                  <p className="text-gray-600 text-sm">
                    Strict access controls ensure only authorized personnel can access your data.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#16A34A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-[#16A34A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172B] mb-3">Monitoring</h3>
                  <p className="text-gray-600 text-sm">
                    Continuous security monitoring to detect and prevent unauthorized access.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#16A34A]/10 rounded-xl flex items-center justify-center mr-4">
                <Globe className="h-6 w-6 text-[#16A34A]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172B]">Data Sharing & Disclosure</h2>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#16A34A] rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-[#0F172B]">Payment Processing</h4>
                      <p className="text-gray-600 text-sm">With trusted payment partners like IremboPay to facilitate transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#16A34A] rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-[#0F172B]">Legal Compliance</h4>
                      <p className="text-gray-600 text-sm">When required by law, regulation, or court order</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#16A34A] rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-[#0F172B]">Service Providers</h4>
                      <p className="text-gray-600 text-sm">With vetted third-party service providers under strict confidentiality agreements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#16A34A] rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-[#0F172B]">Fraud Prevention</h4>
                      <p className="text-gray-600 text-sm">To protect against fraud and ensure platform security</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Your Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F172B] mb-8">Your Rights</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#0F172B] mb-4">Access & Control</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Request access to your personal data</li>
                    <li>• Update or correct inaccurate information</li>
                    <li>• Request deletion of your account data</li>
                    <li>• Withdraw consent for data processing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#0F172B] mb-4">Communication Preferences</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
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
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-[#16A34A] to-blue-600 border-0 shadow-lg">
              <CardContent className="p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
                <p className="mb-6 opacity-90">
                  Our privacy team is here to help you understand how we protect your data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-[#16A34A] hover:bg-gray-100 rounded-full">
                    Contact Privacy Team
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
                    Download Privacy Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Updates to Policy */}
          <div className="mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0F172B] mb-4">Policy Updates</h2>
                <p className="text-gray-600 leading-relaxed">
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

      {/* Footer */}
      <footer className="bg-[#0F172B] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-[#16A34A] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold">Copay</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Secure, simple cooperative payment platform designed to strengthen community financial management.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Legal & Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal & Support</h3>
              <ul className="space-y-3">
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Copay. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for cooperative communities
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}