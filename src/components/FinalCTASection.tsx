import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Target } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-solar-300/20 via-sky-300/20 to-solar-500/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-night-900 mb-6 animate-fade-in">
            Ready to Fill Your Solar Calendar?
          </h2>
          
          <p className="text-xl md:text-2xl text-night-800 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Join 200+ solar companies generating qualified appointments on autopilot
          </p>
          
          <div className="text-lg font-semibold text-primary mb-12 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            Average Client Gets 3x More Appointments in 30 Days
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-night-900">Instant Response</h3>
              <p className="text-night-800 text-sm">60-second response guarantee</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-night-900">24/7 Operation</h3>
              <p className="text-night-800 text-sm">AI works while you sleep</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-night-900">Qualified Leads</h3>
              <p className="text-night-800 text-sm">Pre-qualified solar prospects</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="mb-6 text-xl px-12 py-6"
              onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Solar System Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="space-y-2">
              <p className="text-lg font-semibold text-night-900">
                60-Second Response + 90-Day Results Guarantee
              </p>
              <p className="text-night-800">
                Free strategy call • Custom solar plan • Proven system
              </p>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="mt-12 inline-block bg-solar-100 border-2 border-primary rounded-xl p-6 animate-glow-pulse">
            <div className="flex items-center justify-center space-x-3 text-night-900">
              <span className="text-primary text-xl">⚡</span>
              <span className="font-semibold">
                Limited spots available for Q4 2025 implementation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;