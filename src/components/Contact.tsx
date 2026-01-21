import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "074 582 8820",
    href: "tel:+27745828820",
    secondary: "012 342 7911",
    secondaryHref: "tel:+27123427911",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Quick Response",
    href: "https://wa.me/27745828820",
    primary: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "Get in Touch",
    href: "mailto:info@bvtplanners.co.za",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const scriptSrc = "https://link.dnasupersystems.com/js/form_embed.js";
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSrc}"]`,
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Keep script loaded for other pages; no cleanup needed
    };
  }, []);

  return (
    <section id="contact" className="py-24 lg:py-36 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
              Contact Us
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 mb-6 leading-[1.05] tracking-tight">
              Let's Start Your
              <br />
              <span className="text-gradient-brand">Project.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Ready to transform your property vision? Reach out today for a 
              free consultation with our expert planning team.
            </p>

            {/* Contact Methods */}
            <div className="grid gap-3 mb-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.label === "WhatsApp" ? "_blank" : undefined}
                  rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 group ${
                    method.primary
                      ? "bg-accent border-transparent shadow-lg hover:bg-accent/90 hover:shadow-xl hover:scale-[1.02]"
                      : "bg-secondary border-border/50 hover:border-accent/30 hover:shadow-md"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    method.primary 
                      ? "bg-primary-foreground/20" 
                      : "bg-accent shadow-lg"
                  }`}>
                    <method.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <span className={`block text-sm font-medium ${method.primary ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {method.label}
                    </span>
                    <span className={`block font-bold ${method.primary ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {method.value}
                    </span>
                    {method.secondary && (
                      <a href={method.secondaryHref} className="text-xs text-muted-foreground hover:text-accent">
                        {method.secondary}
                      </a>
                    )}
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                    method.primary ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-accent'
                  }`} />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <Button variant="brand" size="xl" asChild>
              <a href="https://wa.me/27745828820" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Now
              </a>
            </Button>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl bg-card border border-border/60">
              <iframe
                src="https://link.dnasupersystems.com/widget/form/fe8cigj1boKMd09Q7lVi"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "12px",
                }}
                id="inline-fe8cigj1boKMd09Q7lVi"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Form"
                data-height="492"
                data-layout-iframe-id="inline-fe8cigj1boKMd09Q7lVi"
                data-form-id="fe8cigj1boKMd09Q7lVi"
                title="Website Form"
              />
            </div>
          </motion.div>
        </div>

        {/* Map Section Below Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Find Us on the Map
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Visit our office in Lynnwood, Pretoria.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>373 Queen&apos;s Crescent, Lynnwood, Pretoria</span>
            </div>
          </div>
          <div className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4849726379837!2d28.2617513!3d-25.7721767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955f5d3e6d7f3d%3A0x8f9d8f8f8f8f8f8f8f!2s373%20Queen&#39;s%20Cres%2C%20Lynnwood%2C%20Pretoria%2C%200081!5e0!3m2!1sen!2sza!4v1629900000000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};