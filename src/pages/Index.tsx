import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/ContactForm";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    title: "Wealth & Business Optimization",
    description:
      "Strategic guidance designed to elevate performance and protect long-term value.",
    icon: TrendingUp,
    href: "/services#wealth",
  },
  {
    title: "Tax Strategy & Compliance",
    description:
      "Precision-driven tax solutions aligned with your financial goals.",
    icon: Shield,
    href: "/services#tax",
  },
  {
    title: "Accounting & Advisory",
    description:
      "Clarity, control, and confidence through intelligent financial systems.",
    icon: BarChart3,
    href: "/services#accounting",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative luxury-container py-32 md:py-40">
          <div className="max-w-4xl">
            <div className="animate-fade-up">
              <div className="gold-divider mb-8" />
              <h1 className="luxury-heading text-cream-100 mb-6">
                Preserve Wealth.{" "}
                <span className="text-primary">Accelerate Growth.</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-cream-100/80 max-w-2xl mb-10">
                Strategic tax and accounting solutions built on discretion, 
                precision, and two decades of trusted expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild variant="luxury" size="xl">
                <Link to="/contact">
                  Schedule a Confidential Consultation
                </Link>
              </Button>
              <Button asChild variant="luxuryOutline" size="xl" className="border-cream-100/30 text-cream-100 hover:bg-cream-100/10 hover:border-cream-100/50">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-cream-100/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cream-100/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-24 md:py-32 bg-background">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-serif">
              RK AccTx is your trusted, long-term partner for sophisticated 
              accounting, strategic tax planning, and bespoke advisory services. 
              We cultivate relationships built on{" "}
              <span className="text-primary">trust</span>,{" "}
              <span className="text-primary">discretion</span>, and{" "}
              <span className="text-primary">measurable results</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Service Banners */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="luxury-subheading text-foreground mb-4">
              Our Expertise
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group card-luxury p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-32 bg-navy-900">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="luxury-subheading text-cream-100 mb-4">
                Begin the Conversation
              </h2>
              <div className="gold-divider mx-auto mb-6" />
              <p className="text-cream-100/70 text-lg">
                Begin a confidential conversation with our advisory team.
              </p>
            </div>

            <div className="card-luxury-dark p-8 md:p-12 border border-cream-100/10">
              <ContactForm variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
