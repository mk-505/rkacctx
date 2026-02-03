import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Important Links",
    href: "#",
    dropdown: [
      {
        name: "Canada Revenue Agency (CRA)",
        href: "https://www.canada.ca/en/revenue-agency.html",
        external: true,
      },
      {
        name: "Service Canada",
        href: "https://www.canada.ca/en.html",
        external: true,
      },
      {
        name: "Workplace Safety and Insurance Board (WSIB)",
        href: "https://www.wsib.ca/en",
        external: true,
      },
    ],
  },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg shadow-foreground/5">
      <nav className="luxury-container">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="RK AccTx Inc."
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`absolute top-full left-0 w-72 pt-2 transition-all duration-300 ${dropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                  >
                    <div className="bg-background border border-border rounded-sm shadow-elevated overflow-hidden">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-3 text-sm text-foreground/70 hover:text-primary hover:bg-muted/50 transition-all"
                        >
                          {subItem.name}
                          <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Client Login Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant="clientLogin"
              size="lg"
            >
              <a
                href="https://taxfolder.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Login
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 bg-white/95 ${isOpen ? "max-h-[500px] pb-6" : "max-h-0"
            }`}
        >
          <div className="flex flex-col gap-1 pt-4 border-t border-border/30">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="flex flex-col">
                  <button
                    className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground/70"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${dropdownOpen ? "max-h-48" : "max-h-0"
                      }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-8 py-2.5 text-sm text-foreground/60 hover:text-primary"
                      >
                        {subItem.name}
                        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 text-sm font-medium ${location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground/70"
                    }`}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="px-4 pt-4">
              <Button
                asChild
                variant="clientLogin"
                className="w-full"
                size="lg"
              >
                <a
                  href="https://taxfolder.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Login
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
