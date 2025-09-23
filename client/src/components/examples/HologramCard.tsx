import HologramCard from '../HologramCard';
import { Shield, Code, Database, Cloud } from 'lucide-react';

export default function HologramCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid md:grid-cols-2 gap-6">
        <HologramCard glowColor="cyan" className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/10 flex items-center justify-center">
              <Code className="w-6 h-6 text-neon-cyan" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Backend Development</h3>
              <p className="text-sm text-muted-foreground">Java, Spring Boot, APIs</p>
            </div>
          </div>
        </HologramCard>

        <HologramCard glowColor="magenta" className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-magenta/20 to-neon-magenta/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-neon-magenta" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Cybersecurity</h3>
              <p className="text-sm text-muted-foreground">Security Analysis, Testing</p>
            </div>
          </div>
        </HologramCard>
      </div>
    </div>
  );
}