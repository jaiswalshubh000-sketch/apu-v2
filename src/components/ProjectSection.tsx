import { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export function ProjectSection({ title, children, delay = 0 }: ProjectSectionProps) {
  return (
    <FadeIn delay={delay} className="mb-16">
      <div className="border-l-4 border-primary pl-6 py-2 mb-6 bg-gradient-to-r from-primary/10 to-transparent rounded-r-lg">
        <h3 className="text-2xl font-bold text-primary uppercase tracking-widest">{title}</h3>
      </div>
      <div className="text-gray-300 leading-relaxed text-lg space-y-4">
        {children}
      </div>
    </FadeIn>
  );
}
