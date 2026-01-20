import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "012 342 7911",
    href: "tel:0123427911",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "074 582 8820",
    href: "https://wa.me/27745828820",
    highlight: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bvtplanners.co.za",
    href: "mailto:info@bvtplanners.co.za",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon - Fri: 8:00 - 17:00",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              Let's Discuss
              <br />
              <span className="text-gradient-gold">Your Project</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Ready to start your land use planning project? Contact us for a free 
              consultation. We're here to guide you through every step of the process.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}>
                      <Card className={`h-full transition-all hover:shadow-md ${item.highlight ? "border-accent bg-accent/5" : ""}`}>
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.highlight ? "bg-accent/20" : "bg-secondary"}`}>
                              <item.icon className={`w-5 h-5 ${item.highlight ? "text-accent" : "text-muted-foreground"}`} />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">
                                {item.label}
                              </p>
                              <p className={`font-medium ${item.highlight ? "text-accent" : "text-foreground"}`}>
                                {item.value}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ) : (
                    <Card className="h-full">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">
                              {item.label}
                            </p>
                            <p className="font-medium text-foreground">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-8"
            >
              <Button variant="gold" size="lg" asChild className="w-full sm:w-auto">
                <a href="https://wa.me/27745828820" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Send us a WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Card variant="elevated" className="overflow-hidden h-full min-h-[400px]">
              {/* Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1234567890123!2d28.2578056!3d-25.7691667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561234567890%3A0x1234567890abcdef!2s373%20Queen&#39;s%20Cres%2C%20Lynnwood%2C%20Pretoria%2C%200081!5e0!3m2!1sen!2sza!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Address Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/95 to-transparent">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      Our Office
                    </h3>
                    <p className="text-muted-foreground">
                      373 Queen's Cres, Lynnwood
                      <br />
                      Pretoria, 0081, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
