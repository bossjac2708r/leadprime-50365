import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import metaLogo from "@/assets/meta-logo.png";
import whatsappLogo from "@/assets/whatsapp-logo.png";
import aiCallingLogo from "@/assets/ai-calling-logo.png";

const services = [
  {
    icon: <img src={metaLogo} alt="Meta Logo" className="w-10 h-10 mx-auto transform hover:scale-110 transition-transform duration-300" style={{ transform: 'rotateY(15deg)', transformStyle: 'preserve-3d' }} />,
    title: "High-Converting Solar Meta Ads",
    features: [
      "Custom solar audience targeting",
      "Homeowner demographic analysis", 
      "A/B tested ad creatives",
      "Budget optimization & scaling"
    ],
    result: "2.5x Lower Cost Per Lead"
  },
  {
    icon: (
      <div className="flex items-center justify-center space-x-2">
        <img src={aiCallingLogo} alt="AI Calling Logo" className="w-8 h-8 transform hover:scale-110 transition-transform duration-300" style={{ transform: 'rotateY(10deg)', transformStyle: 'preserve-3d' }} />
        <span className="text-night-800 font-bold">+</span>
        <img src={whatsappLogo} alt="WhatsApp Logo" className="w-8 h-8 transform hover:scale-110 transition-transform duration-300" style={{ transform: 'rotateY(-10deg)', transformStyle: 'preserve-3d' }} />
      </div>
    ),
    title: "WhatsApp + AI Calling System", 
    features: [
      "Instant WhatsApp qualification",
      "AI voice appointment booking",
      "24/7 automated follow-up",
      "CRM integration & tracking"
    ],
    result: "85% Faster Response Time"
  },
  {
    icon: <span className="text-4xl">🌐</span>,
    title: "Conversion-Optimized Solar Pages",
    features: [
      "Solar-specific messaging",
      "Mobile-optimized design",
      "Lead capture optimization", 
      "Real-time analytics"
    ],
    result: "40% Higher Conversion Rate"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-card" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-night-900 mb-6">
            Services Ecosystem
          </h2>
          <p className="text-xl text-night-800 max-w-3xl mx-auto">
            Three core pillars that work together to fill your solar calendar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-solar-300 hover:border-solar-500 transition-all duration-300 hover:-translate-y-2 elevation group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-night-900 mb-4">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-night-800 text-sm flex items-center justify-center">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm">
                  {service.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-solar-100 border-2 border-solar-300 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-night-900 mb-4">
              Fully Managed Service
            </h3>
            <p className="text-lg text-night-800">
              We handle everything from setup to optimization. You focus on closing deals while our AI agents fill your calendar with qualified solar appointments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;