import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DataStreamProps {
  className?: string;
  lineCount?: number;
}

export default function DataStream({ className = "", lineCount = 5 }: DataStreamProps) {
  const [streamData, setStreamData] = useState<string[][]>([]);

  useEffect(() => {
    const generateStreamData = () => {
      const chars = "0123456789ABCDEF";
      const lines = Array.from({ length: lineCount }, () =>
        Array.from({ length: 20 }, () => chars[Math.floor(Math.random() * chars.length)])
      );
      setStreamData(lines);
    };

    generateStreamData();
    const interval = setInterval(generateStreamData, 200);
    return () => clearInterval(interval);
  }, [lineCount]);

  return (
    <motion.div
      className={`font-mono text-xs opacity-60 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1 }}
      data-testid="data-stream"
    >
      <div className="relative">
        {streamData.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            className="mb-1 overflow-hidden"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ 
              duration: 2, 
              delay: lineIndex * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1
            }}
          >
            {line.map((char, charIndex) => (
              <motion.span
                key={`${lineIndex}-${charIndex}`}
                className="inline-block"
                style={{
                  color: charIndex % 3 === 0 ? "#00d4ff" : 
                        charIndex % 3 === 1 ? "#00ff7f" : "#ff00ff"
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  delay: (lineIndex * 0.1) + (charIndex * 0.05),
                  repeat: Infinity,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        ))}
        
        {/* Scanning line effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
          animate={{
            y: [0, streamData.length * 20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
}