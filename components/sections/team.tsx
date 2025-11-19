import { Card, CardContent } from "@/components/ui/card";

export function TeamSection() {
  const teamMembers = [
    { name: "John Uwimana", role: "CEO & Founder", description: "10+ years in fintech and cooperative development", image: "/images/team/john.jpg" },
    { name: "Marie Mukamana", role: "CTO", description: "Expert in mobile payments and security systems", image: "/images/team/marie.jpg" },
    { name: "David Nkurunziza", role: "Head of Product", description: "Specialized in user experience and community engagement", image: "/images/team/david.jpg" },
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
            <Card key={index} className="bg-background dark:bg-card border border-gray-200 dark:border-gray-800 rounded-[20px] transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-copay-green/10 to-blue-600/10">
                <div className="absolute inset-0 bg-gradient-to-r from-copay-green/20 to-blue-600/20"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-copay-green to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
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