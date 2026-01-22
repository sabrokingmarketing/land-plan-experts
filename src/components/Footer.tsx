import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pb-12 border-b border-primary-foreground/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Expert land use planning and development consulting in Pretoria and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {["Rezoning", "Subdivisions", "Township", "SPLUMA"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+27745828820"
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  074 582 8820
                </a>
              </li>
              <li>
                <a
                  href="tel:+27123427911"
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  012 342 7911
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27745828820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-primary-foreground/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Bertus van Tonder Town Planners. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center shadow-brand hover:scale-105 hover:shadow-glow transition-all"
          >
            <ArrowUp className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};