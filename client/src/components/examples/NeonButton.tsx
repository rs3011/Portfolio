import NeonButton from '../NeonButton';
import { Mail, Download, Github } from 'lucide-react';

export default function NeonButtonExample() {
  return (
    <div className="p-8 bg-background space-y-4">
      <div className="flex flex-wrap gap-4">
        <NeonButton variant="primary">
          <Mail className="w-4 h-4 mr-2" />
          Primary Button
        </NeonButton>
        <NeonButton variant="secondary">
          <Download className="w-4 h-4 mr-2" />
          Secondary Button
        </NeonButton>
        <NeonButton variant="outline">
          <Github className="w-4 h-4 mr-2" />
          Outline Button
        </NeonButton>
      </div>
    </div>
  );
}