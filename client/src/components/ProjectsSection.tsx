import { motion } from "framer-motion";
import HologramCard from "./HologramCard";
import NeonButton from "./NeonButton";
import { ExternalLink, Github, Server, Database, Shield, Code, Calendar, FileText } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  icon: any;
  color: "cyan" | "magenta" | "green" | "amber";
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Ticket Booking Service",
      description: "Full-scale backend system with Spring Boot for ticket management. Features user authentication, booking management, and real-time availability tracking with MySQL database integration.",
      tech: ["Spring Boot", "Java", "MySQL", "REST API", "JPA"],
      github: "https://github.com/rs3011",
      icon: Server,
      color: "cyan"
    },
    {
      title: "Expense Tracker",
      description: "Secure expense tracking backend with robust authentication and validation. Implements JWT-based security, expense categorization, and reporting features with MongoDB.",
      tech: ["Spring Boot", "MongoDB", "JWT", "Security", "Validation"],
      github: "https://github.com/rs3011",
      icon: Shield,
      color: "magenta"
    },
    {
      title: "Journal CMS",
      description: "Content management system backend for journal applications. Features CRUD operations, user management, and API documentation with comprehensive testing suite.",
      tech: ["Spring Boot", "REST API", "MySQL", "Testing", "Documentation"],
      github: "https://github.com/rs3011",
      icon: FileText,
      color: "green"
    },
    {
      title: "JPMC Forage Project",
      description: "Professional development project completed through JPMorgan Chase's virtual experience program. Implemented financial data processing and analysis systems.",
      tech: ["Java", "Spring Boot", "Financial APIs", "Data Processing"],
      github: "https://github.com/rs3011",
      icon: Database,
      color: "amber"
    },
    {
      title: "TechXtra Portal",
      description: "Early web portal project showcasing foundational web development skills. Features user registration, content management, and responsive design principles.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/rs3011",
      icon: Code,
      color: "cyan"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent"
              data-testid="heading-projects">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto"
             data-testid="text-projects-description">
            A collection of backend systems and applications showcasing my expertise in 
            Java development, security implementation, and scalable architecture.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <HologramCard 
                className="p-6 h-full flex flex-col" 
                glowColor={project.color}
                testId={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex-grow space-y-4">
                  {/* Project icon and title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-neon-${project.color}/20 to-neon-${project.color}/10 flex items-center justify-center`}>
                      <project.icon className={`w-6 h-6 text-neon-${project.color}`} />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold"
                        data-testid={`heading-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm"
                     data-testid={`text-project-description-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="bg-secondary/30 text-secondary-foreground px-2 py-1 rounded text-xs border border-secondary/50"
                          data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-border/30">
                  <NeonButton
                    variant="outline"
                    size="sm"
                    href={project.github}
                    className="flex-1"
                    testId={`button-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </NeonButton>
                  {project.demo && (
                    <NeonButton
                      variant="secondary"
                      size="sm"
                      href={project.demo}
                      className="flex-1"
                      testId={`button-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </NeonButton>
                  )}
                </div>
              </HologramCard>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6" data-testid="text-more-projects">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <NeonButton
            variant="primary"
            href="https://github.com/rs3011"
            testId="button-view-all-projects"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
}