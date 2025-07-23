import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Building2, BarChart3, Shield } from "lucide-react";

const pillars = [
  {
    icon: PhoneCall,
    title: "Voice Communication",
    subtitle: "Advanced Call Center Solutions",
    description: "Comprehensive VoIP, video conferencing, and call routing systems with real-time analytics and AI-powered insights.",
    features: ["WebRTC Integration", "IVR & ACD", "Real-time Dashboards", "Multi-channel Support"]
  },
  {
    icon: Building2,
    title: "Enterprise Applications",
    subtitle: "Integrated Business Solutions",
    description: "Scalable CRM and financial management systems designed for modern enterprises with seamless workflow automation.",
    features: ["CRM & Lead Management", "Financial Planning", "Workflow Automation", "Multi-tenant Architecture"]
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    subtitle: "Intelligent Business Intelligence",
    description: "Advanced BI dashboards and predictive ML models that transform your data into actionable business insights.",
    features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "ETL Pipelines"]
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    subtitle: "Enterprise-grade Protection",
    description: "Comprehensive risk management and data protection solutions ensuring regulatory compliance and security.",
    features: ["PCI DSS Compliance", "GDPR Protection", "Risk Management", "Audit Trails"]
  }
];

export const Pillars = () => {
  return (
    <section id="pillars" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Four Pillars of Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform delivers enterprise-grade solutions across 
            four critical business domains, powered by cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card key={index} className="group bg-gradient-card border-primary/10 hover:shadow-elegant transition-smooth hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-smooth">
                    <pillar.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="enterprise" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};