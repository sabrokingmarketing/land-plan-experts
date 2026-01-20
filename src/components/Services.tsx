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
    <section id="services" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header with CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mt-4 leading-[1.1]">
              Expert Planning
              <br />
              <span className="text-gradient-brand">Solutions</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <Button variant="brand" size="lg" asChild className="group">
              <a href="#contact" className="flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group"
            >
              <div className="h-full p-6 lg:p-7 bg-secondary rounded-2xl border border-transparent hover:border-accent/20 hover:bg-background transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg lg:text-xl font-bold text-foreground mb-2">
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
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
                <div className="h-full p-6 bg-secondary rounded-2xl border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
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
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-1.5">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="w-10 h-10 rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Button variant="brand" size="lg" className="w-full justify-center" asChild>
              <a href="#contact" className="flex items-center gap-2">
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
