import { Button } from "@/components/ui/button";
import LogoWithBackgroundRemoval from "@/components/LogoWithBackgroundRemoval";

const Header = () => {
  return (
    <header className="bg-card border-b border-solar-300/30 sticky top-0 z-50 elevation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <LogoWithBackgroundRemoval />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-night-900">LeadPrime</span>
              <span className="text-xs text-night-700">Solar Lead Generation Specialists</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#process" className="text-night-800 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#services" className="text-night-800 hover:text-primary transition-colors">
              Process
            </a>
            <a href="#results" className="text-night-800 hover:text-primary transition-colors">
              Results
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Strategy Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;