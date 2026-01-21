import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, TrendingUp, ArrowRight, Clock, CheckCircle, Users } from "lucide-react";
import pretoriaSunset from "@/assets/pretoria-sunset.jpg";

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

const stats = [
  { value: "30+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Projects Completed", icon: CheckCircle },
  { value: "100%", label: "Client Satisfaction", icon: Users },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-secondary overflow-hidden" ref={ref}>
      {/* Stats Section - Full Width */}
      <div className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <stat.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div className="text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main About Content */}
      <div className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={pretoriaSunset}
                  alt="Pretoria skyline at sunset"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute bottom-6 left-6 px-5 py-3 rounded-xl bg-accent text-primary-foreground font-bold text-sm shadow-lg"
                >
                  Pretoria, South Africa
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 mb-6 leading-[1.05] tracking-tight">
                Planning Excellence
                <br />
                <span className="text-accent">Since 2018.</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our firm is led by Bertus van Tonder, bringing over 30 years of 
                experience in land use planning. We specialize in all types of 
                land use applications, delivering excellent service and unmatched 
                expertise to every client.
              </p>
              
              <p className="text-base text-muted-foreground/80 leading-relaxed mb-10">
                As members of The South African Association of Professional 
                Planners (SAACPP), with all planners registered with SACPLAN, 
                we uphold the highest professional standards in every project.
              </p>

              {/* Credentials */}
              <div className="grid gap-3 mb-10">
                {credentials.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="inline-flex items-center gap-3 text-accent font-semibold hover:gap-4 transition-all group"
              >
                Start Your Project
                <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <ArrowRight className="w-4 h-4 text-primary-foreground" />
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};