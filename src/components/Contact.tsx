import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "012 342 7911",
    href: "tel:0123427911",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "074 582 8820",
    href: "https://wa.me/27745828820",
    primary: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bvtplanners.co.za",
    href: "mailto:info@bvtplanners.co.za",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mt-4 mb-6 leading-[1.1]">
              Let's Start
              <br />
              <span className="text-gradient-brand">Your Project</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Ready to transform your property vision into reality? 
              Contact us for a free consultation.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${
                    method.primary 
                      ? "bg-accent/10 border border-accent/20 hover:bg-accent/20" 
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    method.primary ? "bg-accent/20" : "bg-background"
                  }`}>
                    <method.icon className={`w-5 h-5 ${method.primary ? "text-accent" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">
                      {method.label}
                    </p>
                    <p className={`font-semibold truncate ${method.primary ? "text-accent" : "text-foreground"}`}>
                      {method.value}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
                    method.primary ? "text-accent" : "text-muted-foreground"
                  }`} />
                </motion.a>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button variant="brand" size="xl" className="w-full sm:w-auto justify-center" asChild>
                <a href="https://wa.me/27745828820" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Now
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-secondary rounded-2xl overflow-hidden border border-border/50">
              {/* Map */}
              <div className="h-64 lg:h-80 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1234567890123!2d28.2578056!3d-25.7691667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561234567890%3A0x1234567890abcdef!2s373%20Queen&#39;s%20Cres%2C%20Lynnwood%2C%20Pretoria%2C%200081!5e0!3m2!1sen!2sza!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Address */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                      Our Office
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      373 Queen's Cres, Lynnwood
                      <br />
                      Pretoria, 0081, South Africa
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Mon – Fri: 8:00 – 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
