import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, TrendingUp } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "SACPLAN",
    description: "Registered Planners",
  },
  {
    icon: Shield,
    title: "SAACPP",
    description: "Member Association",
  },
  {
    icon: TrendingUp,
    title: "30+ Years",
    description: "Industry Experience",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mt-4 leading-[1.1]">
            Planning Excellence
            <br />
            <span className="text-gradient-brand">Since 2018</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              Our firm is led by Bertus van Tonder, bringing over 30 years of 
              experience in land use planning. We specialize in all types of 
              land use applications, delivering excellent service and unmatched 
              expertise to every client.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              As members of The South African Association of Professional 
              Planners (SAACPP), with all planners registered with SACPLAN, 
              we uphold the highest professional standards in every project.
            </p>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-flex items-center gap-3 text-accent font-semibold hover:gap-4 transition-all group"
            >
              Start Your Project
              <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Credentials Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            {credentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-5 p-6 bg-background rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
