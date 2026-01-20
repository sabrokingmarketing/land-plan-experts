import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Bertus van Tonder",
    role: "Principal & Managing Director",
    title: "Professional Planner",
    initials: "BVT",
  },
  {
    name: "Ndumiso Nkosi",
    role: "Professional Planner",
    title: "SACPLAN Registered",
    initials: "NN",
  },
  {
    name: "Aldrich van de Merwe",
    role: "Candidate Planner",
    title: "In Training",
    initials: "AVM",
  },
  {
    name: "Allen van Vollenstee",
    role: "Candidate Planner",
    title: "In Training",
    initials: "AVV",
  },
  {
    name: "Elliouse Flynn",
    role: "Administrative Assistant",
    title: "Client Relations",
    initials: "EF",
  },
];

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-20 lg:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 leading-[1.1]">
            Meet the <span className="text-gradient-gold">Experts</span>
          </h2>
        </motion.div>

        {/* Team Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-5 lg:p-6 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center">
                {/* Avatar */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold/20 shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-lg lg:text-xl font-bold text-primary">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-serif text-sm lg:text-base font-bold text-foreground mb-1 leading-tight">
                  {member.name}
                </h3>
                <p className="text-accent text-xs lg:text-sm font-medium mb-0.5">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-[10px] lg:text-xs">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
