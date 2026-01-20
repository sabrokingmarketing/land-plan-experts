import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-pretoria.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pretoria cityscape"
          className="w-full h-full object-cover scale-105"
        />
        {/* Sophisticated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
        
        {/* Subtle pattern overlay for depth */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="max-w-5xl mx-auto lg:mx-0">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm mb-8 lg:mb-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-sm font-medium text-primary-foreground/90 tracking-wide">
              SACPLAN Registered • Est. 2018
            </span>
          </motion.div>

          {/* Main Headline - Clean Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 lg:mb-8"
          >
            <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-primary-foreground leading-[1.05] tracking-tight">
              Land Use
              <br />
              <span className="text-gradient-gold">Excellence</span>
            </h1>
          </motion.div>

          {/* Subheadline - Refined Copy */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/75 max-w-xl leading-relaxed mb-10 lg:mb-12 font-light"
          >
            30+ years transforming property visions into reality. Expert planning 
            solutions for Pretoria and beyond.
          </motion.p>

          {/* CTA Buttons - Perfectly Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            <Button variant="gold" size="xl" asChild className="group justify-center">
              <a href="#services" className="flex items-center gap-3">
                View Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="justify-center">
              <a href="#contact">Free Consultation</a>
            </Button>
          </motion.div>
        </div>

        {/* Stats Row - Desktop Only */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden lg:flex items-center gap-16 mt-20 pt-10 border-t border-primary-foreground/10"
        >
          {[
            { value: "30+", label: "Years Experience" },
            { value: "500+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-4xl xl:text-5xl font-serif font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/50 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - Premium Design */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-primary-foreground/40 uppercase tracking-widest font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>

      {/* Mobile Stats - Below Hero */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/95 to-transparent py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "30+", label: "Years" },
              { value: "500+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-serif font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-[10px] text-primary-foreground/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
