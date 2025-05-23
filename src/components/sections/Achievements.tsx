import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { achievements } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Award, ExternalLink } from 'lucide-react';

const Achievements = () => {
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
      id="achievements"
      ref={sectionRef}
      className="py-20"
    >
      <div className={cn(
        "transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Recognition and milestones in my professional journey that showcase my dedication and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.id}
              className={cn(
                "transition-all duration-500 transform border-l-4 border-l-primary/70 hover:shadow-md",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                { "delay-100": index % 2 === 0, "delay-200": index % 2 === 1 }
              )}
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {achievement.icon && <achievement.icon className="h-6 w-6 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                      <span className="text-sm text-muted-foreground">{achievement.date}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    
                    {achievement.certificateUrl && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Award className="h-4 w-4" />
                            View Certificate
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{achievement.title}</DialogTitle>
                          </DialogHeader>
                          <div className="mt-4">
                            <div className="aspect-[4/3] relative bg-muted rounded-lg overflow-hidden">
                              <img 
                                src={achievement.certificateUrl} 
                                alt={`${achievement.title} Certificate`}
                                className="absolute inset-0 w-full h-full object-contain"
                              />
                            </div>
                            <div className="mt-4 flex justify-end">
                              <Button asChild variant="outline" size="sm" className="gap-2">
                                <a 
                                  href={achievement.certificateUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  Open in New Tab
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;