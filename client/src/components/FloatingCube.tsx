import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingCubeProps {
  size?: number;
  color?: string;
  speed?: number;
  className?: string;
}

export default function FloatingCube({ 
  size = 100, 
  color = "#00d4ff", 
  speed = 1,
  className = "" 
}: FloatingCubeProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const rotateX = (mousePosition.y - window.innerHeight / 2) * 0.01;
  const rotateY = (mousePosition.x - window.innerWidth / 2) * 0.01;

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ perspective: "1000px" }}
      animate={{
        y: [0, -20, 0],
        rotateX: [0, 360],
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotateX: { duration: 20 * speed, repeat: Infinity, ease: "linear" },
      }}
      data-testid="floating-cube"
    >
      <motion.div
        className="relative"
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        transition={{ duration: 0.1 }}
      >
        {/* Cube faces */}
        <div
          className="absolute border-2 bg-gradient-to-br from-transparent to-current opacity-20"
          style={{
            width: size,
            height: size,
            borderColor: color,
            transform: `translateZ(${size / 2}px)`,
          }}
        />
        <div
          className="absolute border-2 bg-gradient-to-br from-transparent to-current opacity-20"
          style={{
            width: size,
            height: size,
            borderColor: color,
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
          }}
        />
        <div
          className="absolute border-2 bg-gradient-to-br from-transparent to-current opacity-20"
          style={{
            width: size,
            height: size,
            borderColor: color,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          }}
        />
        <div
          className="absolute border-2 bg-gradient-to-br from-transparent to-current opacity-20"
          style={{
            width: size,
            height: size,
            borderColor: color,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
          }}
        />
        <div
          className="absolute border-2 bg-gradient-to-br from-transparent to-current opacity-20"
          style={{
            width: size,
            height: size,
            borderColor: color,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          }}
        />
        <div
          className="absolute border-2 bg-gradient-to-br from-transparent to-current opacity-20"
          style={{
            width: size,
            height: size,
            borderColor: color,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}