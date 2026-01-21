import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import {
  Building2,
  Split,
  FileKey,
  ClipboardCheck,
  Home,
  MapPin,
  FileCheck,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Rezoning",
    description: "Unlock your property's full development potential with expert rezoning applications.",
  },
  {
    icon: Split,
    title: "Subdivisions",
    description: "Divide your property into separate portions for individual development or sale.",
  },
  {
    icon: FileKey,
    title: "Removal of Restrictions",
    description: "Remove restrictive conditions on title deeds to enable new opportunities.",
  },
  {
    icon: ClipboardCheck,
    title: "Consent Uses",
    description: "Obtain consent for land uses requiring special approval under existing zoning.",
  },
  {
    icon: Home,
    title: "Second Dwelling",
    description: "Applications for additional residential units on existing properties.",
  },
  {
    icon: MapPin,
    title: "Township Establishment",
    description: "Comprehensive planning for new township developments from concept to approval.",
  },
  {
    icon: FileCheck,
    title: "SPLUMA Certificates",
    description: "Certificates confirming compliance with spatial planning legislation.",
  },
  {
    icon: LineChart,
    title: "Feasibility Studies",
    description: "Expert analysis to evaluate the viability of your development projects.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth * 0.85 + 16;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : services.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < services.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section id="services" className="py-24 lg:py-36 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 leading-[1.05] tracking-tight">
              Expert Planning
              <br />
              <span className="text-gradient-brand">Solutions.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <Button variant="brand" size="lg" asChild className="group btn-shimmer">
              <a href="#contact" className="flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group"
            >
              <div className="h-full p-7 bg-secondary rounded-3xl border border-transparent hover:border-accent/20 hover:bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 shadow-brand group-hover:scale-105 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-6 px-6"
            onScroll={(e) => {
              const target = e.target as HTMLDivElement;
              const cardWidth = target.offsetWidth * 0.85 + 16;
              const index = Math.round(target.scrollLeft / cardWidth);
              setCurrentIndex(index);
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
                className="flex-shrink-0 w-[85%] snap-start"
              >
                <div className="h-full p-6 bg-secondary rounded-3xl border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 shadow-brand">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-brand shadow-brand"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center shadow-brand hover:scale-105 transition-transform"
              >
                <ChevronRight className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Button variant="brand" size="lg" className="w-full btn-shimmer" asChild>
              <a href="#contact" className="flex items-center justify-center gap-2">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};