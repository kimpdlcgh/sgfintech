import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Kubernetes", category: "Infrastructure" },
  { name: "Apache Kafka", category: "Messaging" },
  { name: "WebRTC", category: "Media" },
  { name: "TensorFlow", category: "ML/AI" },
];

export const Technology = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 glass-effect">
            ⚡ Technology Stack
          </Badge>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Built with Industry-Leading Technology
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform leverages the most advanced and reliable technologies 
            to ensure scalability, security, and performance at enterprise scale.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="px-6 py-3 text-base font-semibold glass-effect hover:bg-gradient-stats hover:border-primary/30 hover:shadow-card hover:scale-105 transition-all duration-300 cursor-default group"
            >
              <span className="group-hover:gradient-text transition-all duration-300">{tech.name}</span>
              <span className="ml-3 text-sm text-muted-foreground font-normal opacity-70 group-hover:opacity-100 transition-opacity">
                {tech.category}
              </span>
            </Badge>
          ))}
        </div>

        {/* Additional Tech Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { metric: "99.99%", label: "System Reliability", icon: "🔧" },
            { metric: "< 100ms", label: "API Response Time", icon: "⚡" },
            { metric: "Enterprise", label: "Security Standards", icon: "🛡️" }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-stats rounded-xl p-6 glass-effect hover:shadow-card transition-all duration-300">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-2xl font-bold gradient-text mb-1">{item.metric}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};