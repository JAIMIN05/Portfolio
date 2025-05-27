import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  Code2,
  Coffee,
  CircleDot,
  Globe,
  Paintbrush,
  LayoutGrid,
  Atom,
  BoxSelect,
  Wind,
  Server,
  Rocket,
  Cable,
  RefreshCw,
  Database,
  TableProperties,
  GitBranch,
  Github,
  Code,
} from 'lucide-react';


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
                      <div className="text-2xl mb-2 group-hover:text-primary transition-colors">
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
  const iconConfig: Record<string, { icon: any; color: string }> = {
    // Programming Languages
    'JavaScript': { icon: Code2, color: 'text-yellow-400' },
    'Java': { icon: Coffee, color: 'text-red-500' },
    'C': { icon: Code, color: 'text-blue-500' },
    
    // Web Technologies
    'HTML': { icon: Globe, color: 'text-orange-500' },
    'CSS': { icon: Paintbrush, color: 'text-blue-400' },
    'Bootstrap': { icon: LayoutGrid, color: 'text-purple-500' },
    'ReactJS': { icon: Atom, color: 'text-cyan-400' },
    'Material UI': { icon: BoxSelect, color: 'text-blue-400' },
    'Tailwind CSS': { icon: Wind, color: 'text-cyan-500' },
    
    // Backend Development
    'Node.js': { icon: Server, color: 'text-green-500' },
    'Express.js': { icon: Rocket, color: 'text-gray-500' },
    'Socket.io': { icon: Cable, color: 'text-yellow-500' },
    'Langflow': { icon: RefreshCw, color: 'text-purple-400' },
    
    // Database Systems
    'MongoDB': { icon: Database, color: 'text-green-600' },
    'SQL': { icon: TableProperties, color: 'text-orange-400' },
    
    // Developer Tools
    'Git': { icon: GitBranch, color: 'text-orange-600' },
    'GitHub': { icon: Github, color: 'text-gray-700 dark:text-gray-300' },
    'VS Code': { icon: Code, color: 'text-blue-600' },
  };

  const config = iconConfig[skillName] || { icon: Code, color: 'text-primary' };
  const IconComponent = config.icon;
  return <IconComponent className={`w-6 h-6 ${config.color}`} />;
};

export default Skills;