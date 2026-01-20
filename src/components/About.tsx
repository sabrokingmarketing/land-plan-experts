import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Shield, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "SACPLAN Registered",
    description: "All planners registered with the South African Council for Planners",
  },
  {
    icon: Shield,
    title: "SAACPP Member",
    description: "Member of the South African Association of Professional Planners",
  },
  {
    icon: TrendingUp,
    title: "30+ Years Experience",
    description: "Principal Bertus van Tonder brings decades of expertise",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              Excellence in
              <br />
              <span className="text-gradient-gold">Land Use Planning</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Established in 2018, our firm is led by Bertus van Tonder, who brings 
              over 30 years of experience in land use planning. Our dedicated team of 
              planners specializes in all types of land use applications, striving to 
              provide clients with excellent service and unmatched expertise.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {[
                "Comprehensive land use application services",
                "Expert guidance through regulatory processes",
                "Personalized solutions for every project",
                "Proven track record of successful applications",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                className="flex gap-5 p-6 bg-background rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
