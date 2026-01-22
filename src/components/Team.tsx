import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    cvFile: "CV JA van Tonder Jan 2026.pdf",
  },
  {
    name: "Ndumiso Nkosi",
    role: "Senior Planner",
    title: "Professional Planner",
    image: teamNdumiso,
    cvFile: "9512055386085-SACPLAN CERT.pdf",
  },
  {
    name: "Aldrich van de Merwe",
    role: "Planning Associate",
    title: "Candidate Planner",
    image: teamAldrich,
    cvFile: "SACPLAN SERTIFIKAAT - CANDIDATE PLANNER.pdf",
  },
  {
    name: "Allen van Vollenstee",
    role: "Planning Associate",
    title: "Candidate Planner",
    image: teamAllen,
    cvFile: "7309145013080-SACPLAN.pdf",
  },
  {
    name: "Elliouse Flynn",
    role: "Operations",
    title: "Administrative Assistant",
    image: teamElliouse,
  },
];

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 lg:py-36 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
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

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="text-center p-6 bg-background rounded-3xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                {/* Photo */}
                <div className="w-36 h-36 mx-auto mb-5 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Info */}
                <h3 className="font-bold text-foreground text-base mb-1 tracking-tight leading-tight">
                  {member.name}
                </h3>
                <p className="text-accent text-xs font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs mb-4">
                  {member.title}
                </p>
                
                {/* CV Download Button */}
                <div className="mt-auto">
                  {member.cvFile ? (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                    >
                      <a
                        href={`/${member.cvFile}`}
                        download={member.cvFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download CV
                      </a>
                    </Button>
                  ) : (
                    <div className="h-9"></div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
