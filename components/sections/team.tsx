import { Card, CardContent } from "@/components/ui/card";

export function TeamSection() {
  const teamMembers = [
    { name: "John Uwimana", role: "CEO & Founder", description: "10+ years in fintech and cooperative development" },
    { name: "Marie Mukamana", role: "CTO", description: "Expert in mobile payments and security systems" },
    { name: "David Nkurunziza", role: "Head of Product", description: "Specialized in user experience and community engagement" },
    { name: "Grace Ingabire", role: "Lead Developer", description: "Full-stack engineer with payment platform expertise" },
    { name: "Paul Habimana", role: "Operations Manager", description: "Cooperative management and customer success specialist" },
    { name: "Claudine Uwera", role: "Marketing Director", description: "Community outreach and digital marketing expert" }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-copay-primary dark:text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate experts dedicated to revolutionizing cooperative payments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-background dark:bg-card border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-copay-green to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-semibold text-copay-primary dark:text-foreground mb-1">{member.name}</h3>
                <p className="text-copay-green font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}