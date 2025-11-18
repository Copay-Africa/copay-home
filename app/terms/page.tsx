import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Scale, FileText, UserCheck, Shield, AlertTriangle, Clock } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <section
        className="bg-gradient-to-b from-muted/50 to-background py-12 sm:py-16 lg:py-20"
        aria-labelledby="terms-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-copay-green/10 dark:bg-copay-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Scale className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-copay-green" />
          </div>
          <h1
            id="terms-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-copay-primary dark:text-foreground mb-3 sm:mb-4 leading-tight px-2"
          >
            Terms & Conditions
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed px-2">
            Please read these terms and conditions carefully before using our cooperative payment platform.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">Last updated: November 18, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Introduction */}
          <div>
            <Card className="bg-muted/50 dark:bg-muted/20 border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-copay-primary dark:text-foreground mb-2">
                  Agreement to Terms
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  These Terms and Conditions govern your relationship with Copay cooperative payment platform
                  operated by Copay Ltd. By accessing and using our service, you accept and agree to be bound
                  by these terms.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Service Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-copay-green/10 dark:bg-copay-green/20 rounded-xl flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-copay-green" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-copay-primary dark:text-foreground">Service Description</h2>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed max-w-3xl">
                  Copay is a cooperative payment platform that enables members to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base max-w-3xl">
                  <li>Make secure payments for cooperative contributions</li>
                  <li>Manage rent, cleaning, security, and other cooperative fees</li>
                  <li>Access payment services through mobile app, USSD, and web portal</li>
                  <li>Utilize IremboPay integration for payment processing</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* User Accounts */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-copay-green/10 dark:bg-copay-green/20 rounded-xl flex items-center justify-center mr-3">
                <UserCheck className="h-5 w-5 text-copay-green" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-copay-primary dark:text-foreground">User Accounts</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-copay-primary dark:text-foreground mb-3">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
                    <li>Must be a member of a registered cooperative</li>
                    <li>Provide accurate information</li>
                    <li>Valid phone number required</li>
                    <li>Must be 18 years or older</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-copay-primary dark:text-foreground mb-3">Security</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
                    <li>Keep your PIN confidential</li>
                    <li>Notify us of unauthorized access</li>
                    <li>Log out from shared devices</li>
                    <li>Report suspicious activities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Payment Terms */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-copay-green/10 dark:bg-copay-green/20 rounded-xl flex items-center justify-center mr-3">
                <Shield className="h-5 w-5 text-copay-green" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-copay-primary dark:text-foreground">Payment Terms</h2>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-copay-primary dark:text-foreground mb-2">Processing</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                      <li>Payments via IremboPay</li>
                      <li>Real-time confirmation</li>
                      <li>Secure encryption</li>
                      <li>Transaction fees apply</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-copay-primary dark:text-foreground mb-2">Disputes</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                      <li>Resolved within 5 days</li>
                      <li>Evidence required</li>
                      <li>Third-party mediation</li>
                      <li>Final decisions binding</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Prohibited Activities */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/10 dark:bg-red-500/20 rounded-xl flex items-center justify-center mr-3">
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-copay-primary dark:text-foreground">Prohibited Activities</h2>
            </div>
            
            <Card className="border-0 shadow-lg border-l-4 border-l-red-500">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  You agree not to use Copay for:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                    <li>Fraudulent transactions</li>
                    <li>Money laundering</li>
                    <li>Unauthorized access</li>
                    <li>Sharing credentials</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                    <li>Circumventing security</li>
                    <li>Commercial purposes</li>
                    <li>Violating laws</li>
                    <li>Providing false information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Termination */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-copay-green/10 dark:bg-copay-green/20 rounded-xl flex items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-copay-green" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-copay-primary dark:text-foreground">Termination</h2>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-copay-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-copay-primary dark:text-foreground text-sm sm:text-base">User Termination</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">You may terminate your account by contacting support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-copay-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-copay-primary dark:text-foreground text-sm sm:text-base">Service Termination</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">We may suspend accounts for violations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-copay-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-copay-primary dark:text-foreground text-sm sm:text-base">Data Retention</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">Records retained as required by law</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact */}
          <div>
            <Card className="bg-gradient-to-r from-copay-green to-blue-600 border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center text-white">
                <h2 className="text-lg sm:text-xl font-bold mb-3">Questions About These Terms?</h2>
                <p className="mb-4 text-sm sm:text-base opacity-90">
                  Our legal team is available to clarify any questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto w-full">
                  <Button
                    className="bg-white text-copay-green hover:bg-gray-100 rounded-full px-4 sm:px-6 py-3 text-sm sm:text-base font-medium w-full sm:w-auto"
                    aria-label="Contact Legal Team"
                  >
                    Contact Legal Team
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 rounded-full px-4 sm:px-6 py-3 text-sm sm:text-base font-medium w-full sm:w-auto"
                    aria-label="Download Terms PDF"
                  >
                    Download Terms PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Governing Law */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h2 className="text-lg sm:text-xl font-bold text-copay-primary dark:text-foreground mb-2">Governing Law</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  These Terms are governed by the laws of Rwanda. Any disputes shall be subject to the exclusive
                  jurisdiction of Rwandan courts.
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