import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  animate?: boolean;
}

export default function GlitchText({ text, className = "", animate = true }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!animate) return;

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const glitchedText = text
        .split("")
        .map(char => Math.random() > 0.8 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
        .join("");
      
      setDisplayText(glitchedText);
      
      setTimeout(() => {
        setDisplayText(text);
        setIsGlitching(false);
      }, 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [text, animate]);

  return (
    <motion.span
      className={`${className} ${isGlitching ? 'animate-glitch' : ''}`}
      style={{
        textShadow: isGlitching 
          ? "2px 0 #ff00ff, -2px 0 #00d4ff" 
          : "0 0 10px currentColor"
      }}
      data-testid="text-glitch"
    >
      {displayText}
    </motion.span>
  );
}