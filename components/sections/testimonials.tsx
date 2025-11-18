import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Immaculée Murekatete",
      role: "Cooperative Secretary",
      content: "Copay has simplified our payment collection process. Members can now pay their contributions easily and we have better tracking.",
      rating: 5
    },
    {
      name: "Jean Baptiste Nzeyimana",
      role: "Treasurer, Ubwiyunge Coop",
      content: "The security and transparency of payments through Copay has increased trust among our members.",
      rating: 5
    },
    {
      name: "Vestine Umutoni",
      role: "Member",
      content: "I love how easy it is to pay my monthly contributions. No more carrying cash or missing payment deadlines.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-copay-primary dark:text-foreground mb-6">
            Trusted by Communities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what cooperative members are saying about Copay
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background dark:bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-copay-green text-copay-green" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-copay-green to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-copay-primary dark:text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}