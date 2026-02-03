import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import rkSymbol from "@/assets/rk_symbol.png";

export function Footer() {
  return (
    <footer className="bg-navy-800 text-cream-100">
      <div className="luxury-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Trust Statement */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={rkSymbol}
                alt="RK Symbol"
                className="h-10 w-auto opacity-90"
              />
            </div>
            <p className="text-cream-100/70 leading-relaxed max-w-md mb-6">
              Trusted advisors delivering sophisticated accounting and tax solutions 
              with discretion and precision. Your success is our commitment.
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/30" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-lg mb-6 text-cream-100">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-cream-100/70 hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-cream-100/70 hover:text-primary transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-cream-100/70 hover:text-primary transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-cream-100/70 hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="text-cream-100/70 hover:text-primary transition-colors text-sm"
              >
                FAQ
              </Link>
              <a
                href="https://taxfolder.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Client Login
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-sans text-lg mb-6 text-cream-100">Contact</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:905-792-9229"
                className="flex items-start gap-3 text-cream-100/70 hover:text-primary transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 mt-0.5 text-primary/70 group-hover:text-primary" />
                905-792-9229
              </a>
              <a
                href="mailto:info@rkacctx.com"
                className="flex items-start gap-3 text-cream-100/70 hover:text-primary transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 mt-0.5 text-primary/70 group-hover:text-primary" />
                info@rkacctx.com
              </a>
              <div className="flex items-start gap-3 text-cream-100/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary/70 flex-shrink-0" />
                <span>
                  Unit 237, 2130 N Park Dr<br />
                  Brampton, ON L6S 5M4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-100/10">
        <div className="luxury-container py-6">
          <p className="text-center text-cream-100/50 text-sm">
            © {new Date().getFullYear()} RK AccTx Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
