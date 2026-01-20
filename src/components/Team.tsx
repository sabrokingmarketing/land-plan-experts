import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Bertus van Tonder",
    role: "Principal & Managing Director",
    title: "Professional Planner",
    initials: "BVT",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Ndumiso Nkosi",
    role: "Professional Planner",
    title: "SACPLAN Registered",
    initials: "NN",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Aldrich van de Merwe",
    role: "Candidate Planner",
    title: "In Training",
    initials: "AVM",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Allen van Vollenstee",
    role: "Candidate Planner",
    title: "In Training",
    initials: "AVV",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    name: "Elliouse Flynn",
    role: "Administrative Assistant",
    title: "Client Relations",
    initials: "EF",
    gradient: "from-rose-500 to-pink-600",
  },
];

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Meet the Experts
            <br />
            <span className="text-gradient-gold">Behind Our Success</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our dedicated team of qualified professionals is committed to 
            delivering exceptional results for every project.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card variant="team" className="h-full bg-background">
                <div className="p-6 text-center">
                  {/* Avatar */}
                  <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>

                  {/* Info */}
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-1">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {member.title}
                  </p>

                  {/* Social */}
                  <div className="flex justify-center gap-3 mt-5 pt-5 border-t border-border">
                    <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
