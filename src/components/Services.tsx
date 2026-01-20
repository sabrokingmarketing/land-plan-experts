import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
    description: "Change the zoning of your property to unlock its full development potential.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Split,
    title: "Subdivisions",
    description: "Divide your property into separate portions for individual development or sale.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: FileKey,
    title: "Removal of Restrictions",
    description: "Remove restrictive conditions on title deeds to enable new development opportunities.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: ClipboardCheck,
    title: "Consent Uses",
    description: "Obtain consent for land uses that require special approval under existing zoning.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Home,
    title: "Second Dwelling House",
    description: "Applications for additional residential units on existing properties.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: MapPin,
    title: "Township Establishment",
    description: "Comprehensive planning for new township developments from concept to approval.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: FileCheck,
    title: "SPLUMA Certificates",
    description: "Obtain certificates confirming compliance with spatial planning legislation.",
    color: "from-cyan-500 to-sky-600",
  },
  {
    icon: LineChart,
    title: "Feasibility Studies",
    description: "Expert analysis to evaluate the viability of your development projects.",
    color: "from-orange-500 to-amber-600",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
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
    <section id="services" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Comprehensive Planning
            <br />
            <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We handle all aspects of land use planning, from initial consultation to 
            final approval, ensuring your projects succeed.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <Card variant="service" className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={(e) => {
              const target = e.target as HTMLDivElement;
              const index = Math.round(target.scrollLeft / target.offsetWidth);
              setCurrentIndex(index);
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <Card variant="service" className="h-full">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-accent"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
