import { Layout } from "@/components/layout/Layout";

const values = [
  { title: "Discretion", description: "Your affairs, protected." },
  { title: "Precision", description: "Every detail matters." },
  { title: "Strategy", description: "Forward-thinking solutions." },
  { title: "Trust", description: "Relationships that last." },
];

const About = () => {
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
              Trusted Advisors.{" "}
              <span className="text-primary">Strategic Partners.</span>{" "}
              Lasting Impact.
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground/95 leading-relaxed mb-8">
                  For over 20 years, RK AccTx has partnered with discerning clients 
                  to deliver sophisticated accounting and tax solutions that drive 
                  long-term success and preserve wealth.
                </p>
                
                <p className="text-lg text-foreground/95 leading-relaxed mb-8">
                  Our team works intimately with each client, combining deep expertise 
                  with strategic insight to accelerate business growth, mitigate complex 
                  risks, and unlock high-value opportunities. With unwavering dedication 
                  to excellence, we cultivate relationships built on trust, discretion, 
                  and measurable results.
                </p>

                <p className="text-lg text-foreground/95 leading-relaxed">
                  Leveraging extensive experience across diverse industries, we provide 
                  bespoke tax planning and advisory services, crafted to align with your 
                  unique objectives. Our proactive approach ensures your business adapts 
                  seamlessly to change, seizes opportunities swiftly, and maintains a 
                  competitive edge in an ever-evolving landscape.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-border/30">
                <blockquote className="relative">
                  <div className="text-6xl text-primary/30 font-sans absolute -top-4 -left-2">"</div>
                  <p className="text-lg font-sans text-foreground/95 italic pl-8">
                    Excellence is not a destination but a continuous journey of 
                    dedication, precision, and unwavering commitment to our clients.
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Right Column - Values */}
            <div className="lg:col-span-5">
              <div className="card-luxury p-8 md:p-10 sticky top-32">
                <h3 className="font-sans text-2xl text-foreground/95 mb-8">
                  Our Values
                </h3>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div
                      key={value.title}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary font-sans text-lg">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-sans text-lg text-foreground/95 mb-1">
                          {value.title}
                        </h4>
                        <p className="text-foreground/95 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="py-16 bg-muted/50 border-y border-border/30">
        <div className="luxury-container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <span className="text-primary font-sans text-xl text-foreground/95">
                  {value.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
