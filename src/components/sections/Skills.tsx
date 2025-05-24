import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/data';
import { cn } from '@/lib/utils';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20"
    >
      <div className={cn(
        "transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A comprehensive overview of my technical expertise across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <Card 
              key={category.category} 
              className={cn(
                "transition-all duration-500 transform", 
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                { "delay-100": index % 3 === 0, "delay-200": index % 3 === 1, "delay-300": index % 3 === 2 }
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-2.5 rounded-md">
                    {category.icon && <category.icon className="h-5 w-5 text-primary" />}
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {category.items.map(skill => (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                    >
                      <div className="text-2xl mb-2 text-primary/70 group-hover:text-primary transition-colors">
                        {getSkillIcon(skill.name)}
                      </div>
                      <span className="text-sm text-center font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to get skill icons
const getSkillIcon = (skillName: string) => {
  // Using emoji as fallback icons for technologies
  const icons: Record<string, string> = {
    // Programming Languages
    'JavaScript': '⚡',
    'Java': '☕',
    'C': '©️',
    
    // Web Technologies
    'HTML': '🌐',
    'CSS': '🎨',
    'Bootstrap': '🅱️',
    'ReactJS': '⚛️',
    'Material UI': '📱',
    'Tailwind CSS': '🌊',
    
    // Backend Development
    'Node.js': '📦',
    'Express.js': '⚡',
    'Socket.io': '🔌',
    'Langflow': '🔄',
    
    // Database Systems
    'MongoDB': '🍃',
    'SQL': '💾',
    
    // Developer Tools
    'Git': '📝',
    'GitHub': '🐙',
    'VS Code': '💻',
  };

  return icons[skillName] || '🔧';
};

export default Skills;