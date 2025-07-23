import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-mesh"></div>
        <img 
          src={heroImage} 
          alt="SG Fintech Technology Background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/95 to-accent/5" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 floating-card"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-accent to-primary-glow rounded-full opacity-15 floating-card" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/20 rounded-full floating-card" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center animate-fade-in-up">
        <Badge variant="outline" className="mb-8 glass-effect text-primary border-primary/30 hover:bg-primary/10 transition-smooth">
          🚀 Enterprise Fintech Solutions
        </Badge>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text leading-tight">
          SG Fintech
        </h1>
        
        <p className="text-2xl md:text-3xl text-foreground/90 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
          Scalable, secure, and intelligent financial technology solutions
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Empowering businesses with voice communication, enterprise applications, 
          data analytics, and compliance solutions built for the future.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button variant="hero" size="lg" className="text-lg px-10 py-6 shadow-float hover:shadow-elegant hover:scale-105 transition-all duration-300">
            Explore Solutions
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-10 py-6 glass-effect hover:bg-primary/10 transition-smooth">
            Schedule Demo
          </Button>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { label: "Enterprise Clients", value: "500+", icon: "🏢" },
            { label: "Daily Transactions", value: "1M+", icon: "⚡" },
            { label: "Uptime SLA", value: "99.9%", icon: "🛡️" },
            { label: "Security Certified", value: "ISO 27001", icon: "🔐" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-stats rounded-2xl p-6 glass-effect hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};