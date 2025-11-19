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
      description: "Built for copay team"
    },
    {
      icon: CheckCircle,
      title: "Easy to Use",
      description: "Simple interface for everyone"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 leading-tight">
            Why Choose Copay?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed">
            Built specifically for copay team with security and simplicity in mind
          </p>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300 p-4 sm:p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900/50">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-copay-green rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black dark:text-white mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}