import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface HologramCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "magenta" | "green" | "amber";
  testId?: string;
}

export default function HologramCard({ 
  children, 
  className = "", 
  glowColor = "cyan",
  testId 
}: HologramCardProps) {
  const glowColors = {
    cyan: "shadow-neon-cyan/20 border-neon-cyan/30 hover:shadow-neon-cyan/40",
    magenta: "shadow-neon-magenta/20 border-neon-magenta/30 hover:shadow-neon-magenta/40",
    green: "shadow-neon-green/20 border-neon-green/30 hover:shadow-neon-green/40",
    amber: "shadow-neon-amber/20 border-neon-amber/30 hover:shadow-neon-amber/40"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      data-testid={testId || "card-hologram"}
    >
      <Card 
        className={`
          relative backdrop-blur-sm bg-card/50 border 
          ${glowColors[glowColor]}
          shadow-lg transition-all duration-300
          ${className}
        `}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-white/0 pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </Card>
    </motion.div>
  );
}