import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GlitchText from "./GlitchText";
import TypewriterText from "./TypewriterText";
import NeonButton from "./NeonButton";
import FloatingCube from "./FloatingCube";
import HolographicLock from "./HolographicLock";
import DataStream from "./DataStream";
import InteractiveParticles from "./InteractiveParticles";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNameComplete = () => {
    setTimeout(() => setShowButtons(true), 500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive particles */}
      <InteractiveParticles />

      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>

      {/* 3D Elements positioned around the hero */}
      {/* Top left floating cube */}
      <FloatingCube 
        size={80} 
        color="#00d4ff" 
        speed={0.8}
        className="top-20 left-10 lg:left-20" 
      />

      {/* Top right holographic lock */}
      <HolographicLock 
        size={100} 
        className="top-16 right-10 lg:right-20" 
      />

      {/* Bottom left data stream */}
      <DataStream 
        className="absolute bottom-20 left-10 lg:left-20 max-w-xs" 
        lineCount={8}
      />

      {/* Bottom right floating cube (different color) */}
      <FloatingCube 
        size={60} 
        color="#ff00ff" 
        speed={1.2}
        className="bottom-32 right-20 lg:right-32" 
      />

      {/* Additional floating elements */}
      <FloatingCube 
        size={40} 
        color="#00ff7f" 
        speed={1.5}
        className="top-1/3 left-1/4 hidden lg:block" 
      />

      <FloatingCube 
        size={50} 
        color="#ffae00" 
        speed={0.6}
        className="bottom-1/3 right-1/4 hidden lg:block" 
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Name with glitch effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-orbitron font-black mb-6"
          data-testid="heading-name"
        >
          <GlitchText 
            text="ROSHAN SHAH" 
            className="bg-gradient-to-r from-neon-cyan via-white to-neon-magenta bg-clip-text text-transparent"
          />
        </motion.h1>

        {/* Animated subtitle */}
        {showSubtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <TypewriterText
              text="Java Backend Developer & Cybersecurity Enthusiast"
              className="text-xl md:text-2xl text-neon-cyan font-medium"
              speed={50}
              onComplete={handleNameComplete}
            />
          </motion.div>
        )}

        {/* Floating description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          data-testid="text-description"
        >
          Building scalable APIs and secure applications with Spring Boot, 
          passionate about solving real-world problems through clean, maintainable code.
        </motion.p>

        {/* Action buttons */}
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <NeonButton 
              variant="primary" 
              size="lg"
              onClick={() => console.log('Contact clicked')}
              testId="button-contact"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => console.log('Resume clicked')}
              testId="button-resume"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </NeonButton>
          </motion.div>
        )}

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-6 justify-center"
        >
          <motion.a
            href="https://github.com/rs3011"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-cyan transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            data-testid="link-github"
          >
            <Github className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/roshanshah-cs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-cyan transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            data-testid="link-linkedin"
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="mailto:roshanpro3011@gmail.com"
            className="text-muted-foreground hover:text-neon-cyan transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            data-testid="link-email"
          >
            <Mail className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </div>

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 border border-neon-magenta"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 border border-neon-green"
        animate={{ 
          rotate: -360,
          y: [-10, 10, -10],
        }}
        transition={{ 
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity }
        }}
      />
    </section>
  );
}