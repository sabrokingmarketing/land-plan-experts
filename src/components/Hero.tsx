import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Play } from "lucide-react";
import pretoriaJacaranda from "@/assets/pretoria-jacaranda.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={pretoriaJacaranda}
          alt="Pretoria cityscape with Jacaranda trees"
          className="w-full h-full object-cover"
        />
        {/* Sophisticated multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
        
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 opacity-30 bg-gradient-brand" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-5xl">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-medium text-primary-foreground/90 tracking-wide uppercase">
              SACPLAN Registered • Established 2018
            </span>
          </motion.div>

          {/* Main Headline - Apple-inspired clean typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-extrabold text-primary-foreground leading-[0.95] tracking-tight">
              Land Use
              <br />
              <span className="text-gradient-brand">Excellence.</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/70 max-w-xl leading-relaxed mb-10 font-normal"
          >
            30+ years transforming property visions into reality. 
            Expert planning solutions for Pretoria and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button variant="brand" size="xl" asChild className="group">
              <a href="#services" className="flex items-center justify-center gap-3">
                Explore Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#contact" className="flex items-center justify-center gap-3">
                <Play className="w-4 h-4" />
                Free Consultation
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges - Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 lg:hidden"
          >
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "30+", label: "Years" },
                { value: "500+", label: "Projects" },
                { value: "100%", label: "Success" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                  <div className="text-2xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-primary-foreground/50 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="hidden lg:flex items-center gap-20 mt-24 pt-12 border-t border-primary-foreground/10"
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
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="group"
            >
              <div className="text-5xl xl:text-6xl font-extrabold text-primary-foreground mb-2 transition-colors group-hover:text-gradient-brand">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/40 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-primary-foreground/30 uppercase tracking-[0.3em] font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center"
        >
          <ArrowDown className="w-4 h-4 text-primary-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};