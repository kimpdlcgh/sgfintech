import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <section id="pillars" className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 glass-effect">
            💼 Our Solutions
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            Four Pillars of Innovation
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our comprehensive platform delivers enterprise-grade solutions across 
            four critical business domains, powered by cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card key={index} className="group bg-gradient-card border-primary/10 hover:shadow-float transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <CardContent className="p-8 lg:p-10 relative z-10">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                    <pillar.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-4">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {pillar.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-stats hover:bg-primary/5 transition-colors">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="enterprise" className="w-full h-12 text-lg font-semibold hover:shadow-card transition-all duration-300">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};