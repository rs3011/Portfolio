import TypewriterText from '../TypewriterText';

export default function TypewriterTextExample() {
  return (
    <div className="p-8 bg-background">
      <TypewriterText
        text="Backend Developer & Cybersecurity Enthusiast"
        className="text-2xl text-neon-cyan font-medium"
        speed={100}
      />
    </div>
  );
}