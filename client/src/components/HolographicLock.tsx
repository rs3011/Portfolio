import { motion } from "framer-motion";
import { Lock, Shield, Eye } from "lucide-react";

interface HolographicLockProps {
  size?: number;
  className?: string;
}

export default function HolographicLock({ size = 120, className = "" }: HolographicLockProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
      animate={{
        rotateY: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      data-testid="holographic-lock"
    >
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-neon-cyan"
        style={{
          width: size,
          height: size,
          boxShadow: `0 0 30px #00d4ff, inset 0 0 30px #00d4ff`,
        }}
        animate={{
          rotate: [0, 360],
          borderColor: ["#00d4ff", "#ff00ff", "#00ff7f", "#00d4ff"],
        }}
        transition={{
          rotate: { duration: 6, repeat: Infinity, ease: "linear" },
          borderColor: { duration: 4, repeat: Infinity },
        }}
      />

      {/* Middle ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-neon-magenta opacity-60"
        style={{
          width: size * 0.7,
          height: size * 0.7,
          top: size * 0.15,
          left: size * 0.15,
          boxShadow: "0 0 20px #ff00ff",
        }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Inner content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          width: size,
          height: size,
        }}
        animate={{
          rotateX: [0, 180, 360],
        }}
        transition={{
          rotateX: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
      >
        <motion.div
          className="text-neon-green"
          animate={{
            scale: [1, 1.2, 1],
            rotateY: [0, 180, 360],
          }}
          transition={{
            scale: { duration: 2, repeat: Infinity },
            rotateY: { duration: 5, repeat: Infinity, ease: "linear" },
          }}
        >
          <Shield 
            size={size * 0.4} 
            className="drop-shadow-lg filter"
            style={{ filter: `drop-shadow(0 0 10px #00ff7f)` }}
          />
        </motion.div>
      </motion.div>

      {/* Orbiting elements */}
      <motion.div
        className="absolute"
        style={{
          width: size * 1.5,
          height: size * 1.5,
          top: -size * 0.25,
          left: -size * 0.25,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 text-neon-cyan"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            <Lock size={16} />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-neon-magenta"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <Eye size={16} />
          </motion.div>
          <motion.div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-neon-amber"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Shield size={16} />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-neon-green"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          >
            <Lock size={16} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}