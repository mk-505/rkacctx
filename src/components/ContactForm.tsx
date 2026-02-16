import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "service_pckd1bb";
const EMAILJS_TEMPLATE_ID = "template_cydxpvv";
const EMAILJS_PUBLIC_KEY = "SgkcX_RCED3oAOS0B";

interface ContactFormProps {
  variant?: "default" | "expanded" | "dark";
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = [
      formData.message,
      formData.phone && `\n\nPhone: ${formData.phone}`,
      formData.company && `Company: ${formData.company}`,
    ]
      .filter(Boolean)
      .join("\n");

    const templateParams = {
      title: "RK AccTx Website",
      name: formData.name,
      email: formData.email,
      message: fullMessage,
      time: new Date().toLocaleString("en-CA", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll be in touch shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch {
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isDark = variant === "dark";
  const inputClasses = isDark 
    ? "bg-navy-800/50 border-cream-100/20 focus:border-primary/50 h-12 text-cream-100 placeholder:text-cream-100/40"
    : "bg-muted/30 border-border/50 focus:border-primary/50 h-12";
  
  const labelClasses = isDark
    ? "text-sm font-medium text-cream-100/70"
    : "text-sm font-medium text-muted-foreground";

  const textareaClasses = isDark
    ? "bg-navy-800/50 border-cream-100/20 focus:border-primary/50 resize-none text-cream-100 placeholder:text-cream-100/40"
    : "bg-muted/30 border-border/50 focus:border-primary/50 resize-none";

  return (
    <form onSubmit={handleSubmit} className={`space-y-${variant === "expanded" ? "6" : "5"}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className={labelClasses}>
            Full Name <span className="text-primary">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={labelClasses}>
            Email Address <span className="text-primary">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="phone" className={labelClasses}>
            Phone Number <span className="text-primary">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="(XXX) XXX-XXXX"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className={labelClasses}>
            Company <span className={isDark ? "text-cream-100/40" : "text-muted-foreground/50"}>(Optional)</span>
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-primary">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className={`${textareaClasses} ${
            variant === "expanded" ? "min-h-[180px]" : "min-h-[140px]"
          }`}
          placeholder="How can we assist you?"
        />
      </div>

      <Button
        type="submit"
        variant="luxury"
        size="xl"
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
