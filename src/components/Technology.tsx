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
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Built with Industry-Leading Technology
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform leverages the most advanced and reliable technologies 
            to ensure scalability, security, and performance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="px-4 py-2 text-sm backdrop-blur-sm hover:bg-primary/5 transition-smooth"
            >
              <span className="font-medium">{tech.name}</span>
              <span className="ml-2 text-xs text-muted-foreground">
                {tech.category}
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};