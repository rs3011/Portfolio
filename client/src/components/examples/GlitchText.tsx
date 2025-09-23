import GlitchText from '../GlitchText';

export default function GlitchTextExample() {
  return (
    <div className="p-8 bg-background">
      <GlitchText 
        text="CYBERPUNK TEXT" 
        className="text-4xl font-orbitron font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
      />
    </div>
  );
}