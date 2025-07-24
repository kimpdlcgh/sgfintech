export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary-glow to-accent text-primary-foreground py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-primary-foreground font-bold text-lg">SG</span>
              </div>
              <span className="text-2xl font-bold">SG Fintech</span>
            </div>
            <p className="text-primary-foreground/90 mb-8 max-w-md text-lg leading-relaxed">
              Delivering scalable, secure, and intelligent financial technology 
              solutions for the modern enterprise.
            </p>
            <div className="text-primary-foreground/70 font-medium">
              © 2022 SG Fintech, LLC. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-primary-foreground">Solutions</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 inline-block">Voice Communication</a></li>
              <li><a href="#" className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 inline-block">Enterprise Apps</a></li>
              <li><a href="#" className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 inline-block">Data Analytics</a></li>
              <li><a href="#" className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 inline-block">Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-primary-foreground">Company</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 inline-block">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 inline-block">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70">
          <p className="text-lg">Building the future of financial technology, one solution at a time.</p>
        </div>
      </div>
    </footer>
  );
};
