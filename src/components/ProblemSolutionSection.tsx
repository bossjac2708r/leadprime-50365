import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import metaLogo from "@/assets/meta-logo.png";
import whatsappLogo from "@/assets/whatsapp-logo.png";
import aiCallingLogo from "@/assets/ai-calling-logo.png";

const problems = [
  {
    icon: "💸",
    title: "Expensive leads that don't qualify",
    description: "Wasting budget on unqualified prospects"
  },
  {
    icon: "⏰",
    title: "Slow response times losing hot prospects",
    description: "Missing opportunities while leads go cold"
  },
  {
    icon: "📞",
    title: "Manual follow-up eating up your day",
    description: "Spending time on tasks instead of selling"
  },
  {
    icon: "📅",
    title: "Empty calendars and missed revenue",
    description: "Not enough qualified appointments"
  }
];

const processSteps = [
  {
    step: "1",
    icon: <img src={metaLogo} alt="Meta Logo" className="w-10 h-10 transform hover:scale-110 transition-transform duration-300" style={{ transform: 'rotateY(10deg)', transformStyle: 'preserve-3d' }} />,
    title: "META ADS",
    subtitle: "High-Converting Solar Ads", 
    description: "Target homeowners ready for solar",
    detail: "Qualified traffic to your landing page"
  },
  {
    step: "2",
    icon: "🌐",
    title: "LANDING PAGE",
    subtitle: "Solar-Specific Landing Pages",
    description: "Convert visitors into qualified leads",
    detail: "Optimized for solar industry"
  },
  {
    step: "3",
    icon: <img src={whatsappLogo} alt="WhatsApp Logo" className="w-10 h-10 transform hover:scale-110 transition-transform duration-300" style={{ transform: 'rotateY(-10deg)', transformStyle: 'preserve-3d' }} />,
    title: "WHATSAPP AI",
    subtitle: "Instant Lead Qualification",
    description: "24/7 automated responses",
    detail: "Pre-qualify before human contact"
  },
  {
    step: "4", 
    icon: <img src={aiCallingLogo} alt="AI Calling Logo" className="w-10 h-10 transform hover:scale-110 transition-transform duration-300" style={{ transform: 'rotateY(5deg)', transformStyle: 'preserve-3d' }} />,
    title: "AI CALLING",
    subtitle: "Smart Appointment Booking",
    description: "AI agents book qualified appointments",
    detail: "Automatically sync to your calendar"
  },
  {
    step: "5",
    icon: "📅",
    title: "YOUR CALENDAR",
    subtitle: "Qualified Solar Appointments",
    description: "Pre-warmed prospects ready to buy",
    detail: "Focus on closing, not prospecting"
  }
];

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-background" id="process">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-night-900 mb-12">
            Solar Companies Are Struggling With:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className="border-destructive/20 hover:border-destructive/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-2">
                  <div className="text-4xl mb-2">{problem.icon}</div>
                  <CardTitle className="text-lg text-night-900 leading-tight">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-night-800 text-center text-sm">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-night-900 mb-12">
            LeadPrime Solves This With Our Complete Solar Funnel:
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <Card 
                  className="bg-card border-solar-300 elevation hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-2">
                          {step.step}
                        </div>
                        <div className="flex justify-center items-center">
                          {typeof step.icon === 'string' ? (
                            <div className="text-4xl">{step.icon}</div>
                          ) : (
                            step.icon
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-night-900 mb-2">
                          {step.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {step.subtitle}
                        </h4>
                        <p className="text-night-800 mb-1">
                          {step.description}
                        </p>
                        <p className="text-night-700 text-sm">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <div className="w-1 h-8 bg-primary rounded-full animate-glow-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;