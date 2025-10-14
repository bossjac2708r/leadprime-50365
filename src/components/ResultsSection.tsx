import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    value: "127",
    label: "Solar Leads Generated",
    description: "This month alone"
  },
  {
    value: "Under 90",
    label: "Second Response",
    description: "Average response time"
  },
  {
    value: "65%",
    label: "Show Rate",
    description: "Qualified appointment attendance"
  }
];

const testimonials = [
  {
    quote: "LeadPrime's complete system generated 180 qualified solar appointments in our first 90 days. Our revenue increased by 250% with higher-quality leads.",
    author: "David Rodriguez",
    title: "Owner, Southwest Solar",
    location: "Texas",
    metrics: "$850K in new pipeline"
  },
  {
    quote: "We went from 12 leads per month to 120+ qualified appointments. The AI calling system alone saved us 40 hours per week on follow-up.",
    author: "Jennifer Kim",
    title: "Sales Director, Coastal Solar Solutions", 
    location: "Florida",
    metrics: "10x lead volume increase"
  }
];

const ResultsSection = () => {
  return (
    <section className="py-20 bg-solar-100" id="results">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-night-900 mb-6">
            Real Results from Real Solar Companies
          </h2>
          <p className="text-xl text-night-800 max-w-3xl mx-auto">
            Live metrics from our active solar lead generation campaigns
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="bg-card border-primary border-2 text-center elevation hover:-translate-y-1 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-night-900 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-night-800">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-solar-300 elevation animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-lg text-night-800 mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-solar-300 pt-4">
                  <div className="font-semibold text-night-900">
                    {testimonial.author}
                  </div>
                  <div className="text-night-800">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-night-700 mb-2">
                    {testimonial.location}
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    {testimonial.metrics}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-solar-300 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-8 text-night-800">
              <div className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>200+ Solar Companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>500+ Appointments This Month</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">✓</span>
                <span>Average 3x ROI in 30 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;