import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold leading-tight">
                  Bertus van Tonder
                </h3>
                <p className="text-xs text-primary-foreground/60 tracking-wider uppercase">
                  Town Planners
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Expert land use planning services in Pretoria and across South Africa. 
              SACPLAN registered professionals delivering exceptional results since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Our Story", "Services", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {["Rezoning", "Subdivisions", "Consent Uses", "Township Est.", "Feasibility"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Bertus van Tonder Town Planners. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
