import { Card, CardContent } from "@/components/ui/card";
import { Users, CreditCard, Shield } from "lucide-react";

export function HowItWorksSection() {
    const steps = [
        {
            icon: Users,
            title: "Join Your Cooperative",
            description: "Enter your phone number and PIN to securely access your cooperative account and start managing payments."
        },
        {
            icon: CreditCard,
            title: "Select Payment Type",
            description: "Choose from rent, cleaning, security fees, or other cooperative payments with just a few taps."
        },
        {
            icon: Shield,
            title: "Pay Securely",
            description: "Complete payments through IremboPay using MTN, Airtel, or your preferred bank account."
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-muted/50 dark:bg-muted/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-copay-primary dark:text-foreground mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Three simple steps to start managing your cooperative payments
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <Card key={index} className="bg-background dark:bg-card border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 bg-copay-green/10 dark:bg-copay-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <IconComponent className="h-8 w-8 text-copay-green" />
                                    </div>
                                    <div className="w-8 h-8 bg-copay-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold text-copay-primary dark:text-foreground mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}