import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/10">
      <div className="container-custom py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold">SG</span>
            </div>
            <span className="text-2xl font-bold gradient-text">SG Fintech</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a href="#pillars" className="text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-300 font-medium">
              Solutions
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-300 font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-300 font-medium">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex hover:bg-primary/10">
              Sign In
            </Button>
            <Button variant="default" className="shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};