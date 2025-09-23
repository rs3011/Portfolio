// Simple CSS-based particle background for cyberpunk aesthetic
export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Animated stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-60 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute border border-neon-magenta/30 animate-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
}