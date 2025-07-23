export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SG</span>
              </div>
              <span className="text-xl font-bold">SG Fintech</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Delivering scalable, secure, and intelligent financial technology 
              solutions for the modern enterprise.
            </p>
            <div className="text-sm text-primary-foreground/60">
              © 2024 SG Fintech, LLC. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Voice Communication</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Enterprise Apps</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Data Analytics</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};