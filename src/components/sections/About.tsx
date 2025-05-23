import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { aboutMe } from '@/lib/data';
import { cn } from '@/lib/utils';
import { MapPin, GraduationCap, Lightbulb } from 'lucide-react';

const About = () => {
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

  const paragraphs = aboutMe.bio.split('\n\n');

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12"
    >
      <div className={cn(
        "transition-all duration-1000 transform max-w-5xl mx-auto px-4", // added max-w-5xl and mx-auto for centering
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">About Me</h2>
          <div className="h-1 w-14 bg-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-1 overflow-hidden group max-w-sm mx-auto">
            <div className="overflow-hidden">
              <div className="aspect-[8/7] bg-primary/10 rounded-t-lg flex items-center justify-center">
                <img 
                  src="/Me2.png" 
                  alt="My photo"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-1">{aboutMe.name}</h3>
              <p className="text-primary font-medium mb-3">{aboutMe.title}</p>
              
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary/70" />
                  <span>{aboutMe.education}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary/70" />
                  <span>{aboutMe.location}</span>
                </div>
                {/* <div className="flex items-start gap-2">
                  <Lightbulb className="h-5 w-5 text-primary/70 mt-0.5" />
                  <span>{aboutMe.funFact}</span>
                </div> */}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2">
            <CardContent className="p-4 md:p-6">
              <div className="space-y-3">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-sm">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;