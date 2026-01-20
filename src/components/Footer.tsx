import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-base">B</span>
              </div>
              <span className="font-serif text-lg font-semibold">BVT Planners</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Expert land use planning services. SACPLAN registered professionals 
              delivering results since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Team", href: "#team" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Services
            </h4>
            <ul className="space-y-2.5">
              {["Rezoning", "Subdivisions", "Consent Uses", "Township Est.", "Feasibility"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:0745828820" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  074 582 8820
                </a>
              </li>
              <li>
                <a href="tel:0123427911" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  012 342 7911
                </a>
              </li>
              <li>
                <a href="mailto:info@bvtplanners.co.za" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  info@bvtplanners.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Bertus van Tonder Town Planners. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-primary-foreground/40 hover:text-accent transition-colors group"
            >
              Back to top
              <span className="w-6 h-6 rounded-full border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent transition-colors">
                <ArrowUp className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
