import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company name is required").max(100, "Company name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

const LeadCaptureForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = leadSchema.parse(formData);

      // Submit form data to Google Sheets via Apps Script
      const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyQE8bc986HkpzyqIcyA9buf6gKWdxUd8uJjDy0IkXb8OSqB48s5pytXbitZ6blAagG9A/exec";
      
      console.log("Submitting form data:", validatedData);
      
      const formBody = new URLSearchParams({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        phone: validatedData.phone,
        message: validatedData.message || "",
        source: "LeadPrime Solar Website",
        timestamp: new Date().toISOString(),
      });

      console.log("Form body:", formBody.toString());
      
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
        redirect: "follow",
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const responseData = await response.text();
      console.log("Response data:", responseData);

      // Show success message
      toast({
        title: "Success! Check Your Email for Calendar Link",
        description: "We'll analyze your solar business and show you exactly how to 3x your appointments.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-solar-300/20 via-sky-300/20 to-solar-500/20" id="strategy-form">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-night-900 mb-4">
              Get Your Custom Solar Lead Generation System
            </h2>
            <p className="text-lg text-night-800">
              Book a strategy call to see how we'll fill your calendar with qualified solar appointments
            </p>
          </div>

          <Card className="border-solar-300 elevation">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-night-900">
                60-Second Response Time Guaranteed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-night-800 font-medium">
                      Company Owner Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`bg-input border-solar-300 focus:border-primary focus:ring-primary ${
                        errors.name ? "border-destructive" : ""
                      }`}
                      placeholder="John Smith"
                      required
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-night-800 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`bg-input border-solar-300 focus:border-primary focus:ring-primary ${
                        errors.email ? "border-destructive" : ""
                      }`}
                      placeholder="john@solarcompany.com"
                      required
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-night-800 font-medium">
                      Solar Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`bg-input border-solar-300 focus:border-primary focus:ring-primary ${
                        errors.company ? "border-destructive" : ""
                      }`}
                      placeholder="ABC Solar Solutions"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-night-800 font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`bg-input border-solar-300 focus:border-primary focus:ring-primary ${
                        errors.phone ? "border-destructive" : ""
                      }`}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-night-800 font-medium">
                    Current Monthly Solar Leads & Biggest Challenge
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-input border-solar-300 focus:border-primary focus:ring-primary min-h-[100px]"
                    placeholder="We're generating 50 leads/month but only 10% qualify. Our biggest challenge is..."
                    rows={4}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant={isSubmitting ? "success" : "solar"}
                  size="lg"
                  className="w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking Your Strategy Call..." : "Book My Solar Strategy Call"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm font-semibold text-primary mb-2">
                  ✅ We'll show you exactly how to 3x your qualified solar appointments
                </p>
                <p className="text-sm text-night-700">
                  Join 200+ solar companies generating qualified leads on autopilot
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;