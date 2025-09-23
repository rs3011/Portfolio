import { motion } from "framer-motion";
import HologramCard from "./HologramCard";
import { Code, Shield, Database, Cloud, Users, Target } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  color: "cyan" | "magenta" | "green" | "amber";
}

export default function AboutSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Development",
      icon: Code,
      skills: ["Java", "Spring Boot", "Python", "REST APIs", "MySQL", "MongoDB"],
      color: "cyan"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Network Security", "Ethical Hacking", "Security Analysis", "Vulnerability Assessment"],
      color: "magenta"
    },
    {
      title: "Cloud & Deployment",
      icon: Cloud,
      skills: ["Render", "Railway", "Git", "CI/CD", "Docker"],
      color: "green"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Leadership", "Problem Solving", "Public Speaking", "Team Collaboration"],
      color: "amber"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
              data-testid="heading-about">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HologramCard className="p-8" glowColor="cyan" testId="card-profile">
              <div className="space-y-6">
                <h3 className="text-2xl font-orbitron font-semibold text-neon-cyan"
                    data-testid="heading-intro">
                  Backend Developer & Security Enthusiast
                </h3>
                <p className="text-muted-foreground leading-relaxed"
                   data-testid="text-bio">
                  I'm an enthusiastic Backend Developer with strong foundations in Java, Spring Boot, and Python. 
                  Currently pursuing Computer Science Engineering at Meghnad Saha Institute of Technology, Kolkata, 
                  I bring hands-on experience in building scalable APIs, integrating databases, and automating tasks.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As an aspiring cybersecurity analyst, I'm passionate about solving real-world problems using 
                  clean, maintainable code and am eager to contribute to impactful backend solutions that make a difference.
                </p>
                
                {/* Key stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-orbitron font-bold text-neon-cyan"
                         data-testid="stat-experience">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-orbitron font-bold text-neon-magenta"
                         data-testid="stat-projects">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </div>
                </div>
              </div>
            </HologramCard>
          </motion.div>

          {/* Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <HologramCard className="p-6" glowColor="magenta" testId="card-education">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-magenta/20 to-neon-magenta/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-neon-magenta" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2" data-testid="heading-education">Education</h4>
                  <p className="text-neon-magenta font-medium">Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground">Meghnad Saha Institute of Technology, Kolkata</p>
                  <p className="text-sm text-muted-foreground">Pursuing (2022 - 2026)</p>
                </div>
              </div>
            </HologramCard>

            <HologramCard className="p-6" glowColor="green" testId="card-experience">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2" data-testid="heading-experience">Current Role</h4>
                  <p className="text-neon-green font-medium">Java Backend Developer</p>
                  <p className="text-sm text-muted-foreground">Feb 2024 - Present</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Spring Boot APIs • Database Integration • Deployment
                  </p>
                </div>
              </div>
            </HologramCard>

            <HologramCard className="p-6" glowColor="amber" testId="card-leadership">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-amber/20 to-neon-amber/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-neon-amber" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2" data-testid="heading-leadership">Leadership</h4>
                  <p className="text-neon-amber font-medium">Event Coordinator - PARIDHI 25</p>
                  <p className="text-sm text-muted-foreground">Tech Fest with 2000+ participants</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Backend setup • Event execution management
                  </p>
                </div>
              </div>
            </HologramCard>
          </motion.div>
        </div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12 text-neon-cyan"
              data-testid="heading-skills">
            Technical Arsenal
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <HologramCard 
                  className="p-6 h-full" 
                  glowColor={category.color}
                  testId={`card-skill-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-neon-${category.color}/20 to-neon-${category.color}/10 flex items-center justify-center`}>
                      <category.icon className={`w-8 h-8 text-neon-${category.color}`} />
                    </div>
                    <h4 className="font-semibold text-lg" data-testid={`heading-skill-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {category.title}
                    </h4>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="inline-block bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm mr-2 mb-2"
                          data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </HologramCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}