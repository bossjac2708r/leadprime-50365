import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-solar-100 via-background to-solar-200 opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Opening Line */}
          <div className="text-lg md:text-xl text-night-800 mb-4 animate-fade-in">
            Tired of expensive solar leads that don't convert?
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-night-900 leading-tight animate-slide-up">
            LeadPrime: Complete Meta Ads to Appointment System That Fills Your Solar Calendar{" "}
            <span className="text-sky-300">On Autopilot</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-night-800 mb-8 max-w-4xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We build, launch and manage your complete solar lead generation funnel - from Meta ads to booked appointments - so you focus on closing deals, not chasing prospects.
          </p>
          
          {/* Key Promise */}
          <div className="text-xl font-bold text-primary mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            From Click to Calendar in Under 60 Seconds ⚡
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Custom Solar System
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="solar-outline" 
              size="lg"
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Our Process
            </Button>
          </div>
          
          {/* Trust Badge */}
          <div className="text-lg font-semibold text-night-900 mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            500+ Solar Appointments Booked This Month
          </div>
          
          {/* Workflow Diagram */}
          <div id="process" className="relative w-full max-w-4xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-solar-300 via-sky-300 to-solar-500 rounded-3xl blur-lg opacity-70 animate-glow-pulse"></div>
            <div className="relative w-full rounded-2xl shadow-xl overflow-hidden bg-white p-8">
              <img 
                src="https://drive.google.com/thumbnail?id=1X3P-KQmF-dRMegEjw53K39ZriYJ1lkPo&sz=w4000" 
                alt="LeadPrime Client Workflow - Complete lead generation process from ads to appointments"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;