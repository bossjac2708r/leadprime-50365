import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";

import FAQSection from "@/components/FAQSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <ResultsSection />
        
        <FAQSection />
        <LeadCaptureForm />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
