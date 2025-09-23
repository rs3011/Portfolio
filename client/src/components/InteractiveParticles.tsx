import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  color: string;
}

interface InteractiveParticlesProps {
  className?: string;
  particleCount?: number;
}

export default function InteractiveParticles({ 
  className = "", 
  particleCount = 15 
}: InteractiveParticlesProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ["#00d4ff", "#ff00ff", "#00ff7f", "#ffae00"];
    const initialParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: i * 0.1,
      color: colors[i % colors.length],
    }));
    setParticles(initialParticles);
  }, [particleCount]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none z-10 ${className}`} data-testid="interactive-particles">
      {particles.map((particle) => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) + 
          Math.pow(mousePosition.y - particle.y, 2)
        );
        const isNear = distance < 200;
        
        return (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: particle.color,
              boxShadow: `0 0 10px ${particle.color}`,
            }}
            animate={{
              x: isNear ? mousePosition.x - 4 : particle.x,
              y: isNear ? mousePosition.y - 4 : particle.y,
              scale: isNear ? [1, 1.5, 1] : [1, 1.2, 1],
              opacity: isNear ? [0.8, 1, 0.8] : [0.4, 0.7, 0.4],
            }}
            transition={{
              x: { duration: isNear ? 0.3 : 2, ease: "easeOut" },
              y: { duration: isNear ? 0.3 : 2, ease: "easeOut" },
              scale: { duration: 1, repeat: Infinity },
              opacity: { duration: 1.5, repeat: Infinity },
            }}
          />
        );
      })}

      {/* Cursor trail effect */}
      <motion.div
        className="absolute w-6 h-6 rounded-full border-2 border-neon-cyan pointer-events-none"
        style={{
          boxShadow: "0 0 20px #00d4ff",
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { duration: 0.1 },
          y: { duration: 0.1 },
          scale: { duration: 1, repeat: Infinity },
        }}
      />
    </div>
  );
}