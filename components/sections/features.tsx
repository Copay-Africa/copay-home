import { Shield, Smartphone, Users, CheckCircle } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-level security for all transactions"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Optimized for mobile devices"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Built for cooperative communities"
    },
    {
      icon: CheckCircle,
      title: "Easy to Use",
      description: "Simple interface for everyone"
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6 px-4">
            Why Choose Copay?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Built specifically for cooperative communities with security and simplicity in mind
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-copay-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}