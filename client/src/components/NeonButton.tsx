import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface NeonButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
  href?: string;
  size?: "sm" | "default" | "lg" | "icon";
  testId?: string;
}

export default function NeonButton({ 
  children, 
  variant = "primary", 
  onClick, 
  className = "",
  href,
  size = "default",
  testId
}: NeonButtonProps) {
  const baseClasses = "relative overflow-hidden transition-all duration-300 font-medium";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-neon-cyan to-neon-magenta text-white border-0 shadow-lg shadow-neon-cyan/25",
    secondary: "bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black",
    outline: "bg-transparent border border-neon-green text-neon-green hover:bg-neon-green/10"
  };

  const glowClasses = {
    primary: "hover:shadow-xl hover:shadow-neon-cyan/40",
    secondary: "hover:shadow-lg hover:shadow-neon-cyan/30",
    outline: "hover:shadow-lg hover:shadow-neon-green/30"
  };

  const ButtonComponent = motion(Button);

  const buttonProps = {
    className: `${baseClasses} ${variantClasses[variant]} ${glowClasses[variant]} ${className}`,
    onClick,
    size,
    "data-testid": testId || `button-${variant}`,
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 25 }
  };

  if (href) {
    return (
      <ButtonComponent asChild {...buttonProps}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </ButtonComponent>
    );
  }

  return (
    <ButtonComponent {...buttonProps}>
      {children}
    </ButtonComponent>
  );
}