import { Phone, Mail, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-cream-100/70 max-w-2xl">
              Begin a confidential conversation with our advisory team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-6 mb-12">
                  <a
                    href="tel:905-792-9229"
                    className="flex items-start gap-4 group p-4 -ml-4 rounded-sm hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="text-foreground text-lg">905-792-9229</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@rkacctx.com"
                    className="flex items-start gap-4 group p-4 -ml-4 rounded-sm hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="text-foreground text-lg">info@rkacctx.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 -ml-4">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Address</p>
                      <p className="text-foreground text-lg">
                        RK AccTx<br />
                        Unit 237, 2130 N Park Dr<br />
                        Brampton, ON L6S 5M4
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="card-luxury overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.8621392736!2d-79.74367692344498!3d43.72883517109918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d2c5e0c3f6d%3A0x7d7f8f7f7f7f7f7f!2s2130%20N%20Park%20Dr%2C%20Brampton%2C%20ON%20L6S%205M4%2C%20Canada!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RK AccTx Location"
                    className="opacity-90"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="card-luxury p-8 md:p-12">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Complete the form below and we'll respond within one business day.
                </p>
                
                <ContactForm variant="expanded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
