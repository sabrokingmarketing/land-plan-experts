import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadPDF } from "@/lib/utils";

import teamBertus from "@/assets/team-bertus.png";
import teamNdumiso from "@/assets/team-ndumiso.png";
import teamAldrich from "@/assets/team-aldrich.png";
import teamAllen from "@/assets/team-allen.png";
import teamElliouse from "@/assets/team-elliouse.png";

const team = [
  {
    name: "Bertus Van Tonder",
    role: "Principal & Managing Director",
    title: "Professional Planner",
    image: teamBertus,
    cvFile: "7309145013080-SACPLAN-2.pdf",
  },
  {
    name: "Ndumiso Nkosi",
    role: "Senior Planner",
    title: "Professional Planner",
    image: teamNdumiso,
    cvFile: "9512055386085-SACPLAN_2.pdf",
  },
  {
    name: "Aldrich van de Merwe",
    role: "Planning Associate",
    title: "Candidate Planner",
    image: teamAldrich,
    cvFile: "SACPLAN_CERTIFICATE-_CANDIDATE_PLANNER_2026_-_2027.pdf",
  },
  {
    name: "Allen van Vollenstee",
    role: "Planning Associate",
    title: "Candidate Planner",
    image: teamAllen,
    cvFile: "7309145013080-SACPLAN-3.pdf",
  },
  {
    name: "Elliouse Flynn",
    role: "Operations",
    title: "Administrative Assistant",
    image: teamElliouse,
  },
];

const TeamCard = ({ member, index, isInView }: { member: typeof team[0]; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
    className="group h-full"
  >
    <div className="h-full flex flex-col items-center text-center p-6 md:p-6 bg-background rounded-3xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
      {/* Photo */}
      <div className="w-36 h-36 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      {/* Info */}
      <div className="mt-5 flex flex-col flex-1 justify-start">
        <h3 className="font-bold text-foreground text-base md:text-sm lg:text-base tracking-tight leading-tight min-h-[2.5rem] flex items-center justify-center">
          {member.name}
        </h3>
        <p className="text-accent text-sm md:text-xs font-medium mt-1 min-h-[1rem]">
          {member.role}
        </p>
        <p className="text-muted-foreground text-sm md:text-xs mt-1 min-h-[1rem]">
          {member.title}
        </p>
        
        {/* CV Download Button */}
        <div className="mt-auto pt-4">
          {member.cvFile ? (
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs"
              onClick={() => downloadPDF(member.cvFile!)}
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </Button>
          ) : (
            <div className="h-9"></div>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    containScroll: "trimSnaps"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  // Update selected index on scroll
  emblaApi?.on("select", () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  });

  return (
    <section id="team" className="py-24 lg:py-36 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
            Our Team
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 leading-[1.05] tracking-tight">
            Meet the
            <br />
            <span className="text-gradient-brand">Experts.</span>
          </h2>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {team.map((member, index) => (
                <div 
                  key={member.name} 
                  className="flex-[0_0_85%] min-w-0 px-2"
                >
                  <TeamCard member={member} index={index} isInView={isInView} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-background border border-border/50 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index 
                      ? "bg-accent w-6" 
                      : "bg-border hover:bg-accent/50"
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-background border border-border/50 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              aria-label="Next team member"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};
