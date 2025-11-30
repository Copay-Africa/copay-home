import { Zap, Smartphone, Shield, TrendingUp } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Instant Pay",
      description: "Lightning-fast transfers. Money moves in seconds."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Seamless experience. Designed for your phone."
    },
    {
      icon: Shield,
      title: "Bank Security",
      description: "Military-grade protection. Your money is safe."
    },
    {
      icon: TrendingUp,
      title: "Smart Insights",
      description: "Track spending. Make better financial decisions."
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 xl:py-28 surface-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#212121] mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 leading-tight heading-fintech">
            Why Choose <span className="text-gradient-emerald">Copay?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed font-medium">
            Built for modern teams. Engineered for speed. Designed for trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="card-fintech text-center group p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#006F4F] to-[#FF6A30] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <IconComponent className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#212121] mb-3 sm:mb-4 heading-fintech">{feature.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}