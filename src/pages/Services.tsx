import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Briefcase, Building, DollarSign, LineChart, User, Target, Scale, FileText, Cloud, Settings, ClipboardList } from "lucide-react";

const serviceCategories = [
  {
    id: "wealth",
    title: "Wealth & Business Optimization",
    subtitle: "Strategic guidance designed to elevate performance and protect long-term value.",
    services: [
      {
        icon: Briefcase,
        title: "Strategic Wealth Management",
        description: "Sophisticated strategies for long-term prosperity.",
      },
      {
        icon: Building,
        title: "Business Formation & Consulting",
        description: "Structure, scale, and protect your ventures with confidence.",
      },
      {
        icon: DollarSign,
        title: "Financing & Capital Advisory",
        description: "Access opportunities that elevate sustainable growth.",
      },
      {
        icon: LineChart,
        title: "Cash Flow & Performance Analytics",
        description: "Data-driven insights to maximize operational results.",
      },
    ],
  },
  {
    id: "tax",
    title: "Tax Strategy & Compliance",
    subtitle: "Precision-driven tax solutions aligned with your financial goals.",
    services: [
      {
        icon: User,
        title: "Personal & Corporate Tax Advisory",
        description: "Expert guidance to preserve and grow wealth.",
      },
      {
        icon: Target,
        title: "Strategic Tax Planning",
        description: "Tailored solutions aligned with your goals and lifestyle.",
      },
      {
        icon: Scale,
        title: "CRA Representation",
        description: "Confident, discreet advocacy on your behalf.",
      },
      {
        icon: FileText,
        title: "Government Filings Assistance",
        description: "Accurate, timely, and fully compliant support.",
      },
    ],
  },
  {
    id: "accounting",
    title: "Accounting & Advisory",
    subtitle: "Clarity, control, and confidence through intelligent financial systems.",
    services: [
      {
        icon: Cloud,
        title: "Cloud Accounting & Bespoke Bookkeeping",
        description: "Seamless, secure, and customized to your business.",
      },
      {
        icon: Settings,
        title: "Advanced Accounting Systems & Training",
        description: "Optimized workflows for precision and efficiency.",
      },
      {
        icon: ClipboardList,
        title: "Compiled Financial Information & Financial Reporting",
        description: "Insightful reports to guide strategic decision-making.",
      },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative luxury-container">
          <div className="max-w-3xl">
            <div className="gold-divider mb-8" />
            <h1 className="luxury-heading text-cream-100 mb-6">
              Comprehensive{" "}
              <span className="text-primary">Advisory Services</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-cream-100/70 max-w-2xl">
              Expert solutions tailored to protect, grow, and optimize your 
              financial position.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-20 md:py-28 ${
            categoryIndex % 2 === 1 ? "bg-muted/30" : "bg-background"
          }`}
        >
          <div className="luxury-container">
            <div className="max-w-3xl mb-12 md:mb-16">
              <h2 className="luxury-subheading text-foreground mb-4">
                {category.title}
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-xl text-muted-foreground">
                {category.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {category.services.map((service, index) => (
                <div
                  key={service.title}
                  className="card-luxury p-8 group hover:border-primary/30 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-600 to-navy-700" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative luxury-container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="gold-divider mx-auto mb-8" />
            <h2 className="luxury-subheading text-cream-100 mb-6">
              Ready to Elevate Your Financial Strategy?
            </h2>
            <p className="text-cream-100/70 text-lg mb-8">
              Schedule a confidential consultation to discuss how we can 
              help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold tracking-wide px-10 py-4 rounded-sm hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
