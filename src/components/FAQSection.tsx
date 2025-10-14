import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly will I see results?",
    answer: "Most solar companies see qualified leads within 48 hours of launch. Full system optimization typically takes 2-3 weeks, with consistent appointment flow established by week 4."
  },
  {
    question: "What makes your system different from other solar marketing?",
    answer: "We provide a complete funnel - not just lead generation. From Meta ads to AI qualification to appointment booking, everything is automated and optimized specifically for the solar industry."
  },
  {
    question: "Do you work with residential or commercial solar?",
    answer: "We specialize in residential solar lead generation. Our targeting, messaging, and qualification process is specifically designed for homeowners considering solar installation."
  },
  {
    question: "What's included in the setup?",
    answer: "Complete Meta ads account setup, custom landing pages, WhatsApp automation, AI calling system integration, calendar syncing, and full team training. We handle everything so you can focus on closing deals."
  },
  {
    question: "How do you ensure lead quality?",
    answer: "Our AI qualification system asks specific questions about home ownership, roof condition, energy bills, and purchase timeline. Only prospects who meet your criteria get booked as appointments."
  },
  {
    question: "Can I customize the AI responses and qualification questions?",
    answer: "Absolutely. We customize all messaging, qualification criteria, and appointment booking flows to match your company's process and requirements."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-solar-100" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-night-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-night-800 max-w-3xl mx-auto">
            Everything you need to know about our solar lead generation system
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-solar-300 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-night-900 font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-night-800 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-night-800 mb-4">
            Have more questions? Book a strategy call to get personalized answers.
          </p>
          <button 
            onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary font-semibold hover:underline"
          >
            Schedule Your Call →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;