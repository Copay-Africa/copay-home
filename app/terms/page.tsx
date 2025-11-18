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
      <section className="bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-copay-green/10 dark:bg-copay-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Scale className="h-8 w-8 text-copay-green" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-copay-primary dark:text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Please read these terms and conditions carefully before using our cooperative payment platform.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: November 18, 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16">
            <Card className="bg-muted/50 dark:bg-muted/20 border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-copay-primary dark:text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions govern your relationship with 
                  Copay cooperative payment platform operated by Copay Ltd. 
                  By accessing and using our service, you accept and agree to be bound by these terms.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Service Description */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-copay-green/10 dark:bg-copay-green/20 rounded-xl flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-copay-green" />
              </div>
              <h2 className="text-3xl font-bold text-copay-primary dark:text-foreground">Service Description</h2>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Copay is a cooperative payment platform that enables members to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Make secure payments for cooperative contributions</li>
                  <li>• Manage rent, cleaning, security, and other cooperative fees</li>
                  <li>• Access payment services through mobile app, USSD, and web portal</li>
                  <li>• Utilize IremboPay integration for payment processing</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* User Accounts */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-copay-green/10 dark:bg-copay-green/20 rounded-xl flex items-center justify-center mr-4">
                <UserCheck className="h-6 w-6 text-copay-green" />
              </div>
              <h2 className="text-3xl font-bold text-copay-primary dark:text-foreground">User Accounts</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-copay-primary dark:text-foreground mb-4">Requirements</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Must be a member of a registered cooperative</li>
                    <li>• Provide accurate information</li>
                    <li>• Valid phone number required</li>
                    <li>• Must be 18 years or older</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-copay-primary dark:text-foreground mb-4">Security</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Keep your PIN confidential</li>
                    <li>• Notify us of unauthorized access</li>
                    <li>• Log out from shared devices</li>
                    <li>• Report suspicious activities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-copay-green/10 dark:bg-copay-green/20 rounded-xl flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-copay-green" />
              </div>
              <h2 className="text-3xl font-bold text-copay-primary dark:text-foreground">Payment Terms</h2>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-copay-primary dark:text-foreground mb-4">Processing</h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li>✓ Payments via IremboPay</li>
                      <li>✓ Real-time confirmation</li>
                      <li>✓ Secure encryption</li>
                      <li>✓ Transaction fees apply</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-copay-primary dark:text-foreground mb-4">Disputes</h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li>✓ Resolved within 5 days</li>
                      <li>✓ Evidence required</li>
                      <li>✓ Third-party mediation</li>
                      <li>✓ Final decisions binding</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Prohibited Activities */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-red-500/10 dark:bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-copay-primary dark:text-foreground">Prohibited Activities</h2>
            </div>
            
            <Card className="border-0 shadow-lg border-l-4 border-l-red-500">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  You agree not to use Copay for:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li>• Fraudulent transactions</li>
                    <li>• Money laundering</li>
                    <li>• Unauthorized access</li>
                    <li>• Sharing credentials</li>
                  </ul>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li>• Circumventing security</li>
                    <li>• Commercial purposes</li>
                    <li>• Violating laws</li>
                    <li>• Providing false information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Termination */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-copay-green/10 dark:bg-copay-green/20 rounded-xl flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-copay-green" />
              </div>
              <h2 className="text-3xl font-bold text-copay-primary dark:text-foreground">Termination</h2>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-copay-green rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-copay-primary dark:text-foreground">User Termination</h4>
                      <p className="text-muted-foreground text-sm">You may terminate your account by contacting support</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-copay-green rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-copay-primary dark:text-foreground">Service Termination</h4>
                      <p className="text-muted-foreground text-sm">We may suspend accounts for violations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-copay-green rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-copay-primary dark:text-foreground">Data Retention</h4>
                      <p className="text-muted-foreground text-sm">Records retained as required by law</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-copay-green to-blue-600 border-0 shadow-lg">
              <CardContent className="p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                <p className="mb-6 opacity-90">
                  Our legal team is available to clarify any questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-copay-green hover:bg-gray-100 rounded-full">
                    Contact Legal Team
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
                    Download Terms PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Governing Law */}
          <div className="mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-copay-primary dark:text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of Rwanda. Any disputes shall be subject to 
                  the exclusive jurisdiction of Rwandan courts.
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