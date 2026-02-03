import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Who do you serve?",
    answer:
      "We partner with discerning individuals, business owners, and family offices who seek sophisticated accounting, tax, and wealth management solutions. Our clients value discretion, expertise, and strategic guidance.",
  },
  {
    question: "What makes RK AccTx different from other accounting firms?",
    answer:
      "We combine over 20 years of experience with a bespoke, high-touch approach. Our focus is on delivering tailored strategies that preserve and grow wealth, optimize business performance, and provide a competitive advantage in an evolving landscape.",
  },
  {
    question: "How do you approach wealth management and business advisory?",
    answer:
      "We take a proactive, strategic approach—aligning your financial and business goals with actionable solutions. From cash flow forecasting to business structuring and capital advisory, every recommendation is personalized for maximum impact.",
  },
  {
    question: "Can you help with complex tax matters?",
    answer:
      "Absolutely. Our team provides comprehensive personal and corporate tax advisory, strategic tax planning, CRA representation, and government filing support—all designed to minimize risk and maximize opportunities.",
  },
  {
    question: "Do you offer digital accounting and bookkeeping solutions?",
    answer:
      "Yes. We provide cloud-based accounting, bespoke bookkeeping, and advanced system implementation with training, allowing you to access real-time insights while maintaining full control and security.",
  },
  {
    question: "How do you ensure confidentiality and discretion?",
    answer:
      "We treat every client relationship with the highest level of discretion and professionalism. Confidentiality is central to our service, ensuring your personal and business information is protected at all times.",
  },
  {
    question: "How can I get started with RK AccTx?",
    answer:
      "Simply contact us to schedule a confidential consultation. We will discuss your goals, understand your unique needs, and design a tailored plan to help you preserve, grow, and optimize your wealth and business.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative luxury-container">
          <div className="max-w-3xl">
            <div className="gold-divider mb-8" />
            <h1 className="luxury-heading text-cream-100 mb-6">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-cream-100/70 max-w-2xl">
              Find answers to common questions about our services, approach, and how we can help you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-luxury px-6 py-2 border border-border/50"
                >
                  <AccordionTrigger className="text-left font-sans text-lg font-semibold text-foreground hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="luxury-subheading text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team is here to help. Schedule a confidential consultation to discuss your specific needs and learn how we can support your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="luxury" size="xl">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="luxuryOutline" size="xl">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
