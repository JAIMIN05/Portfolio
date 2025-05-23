import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
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
      id="resume"
      ref={sectionRef}
      className="py-20"
    >
      <div className={cn(
        "transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            View and download my resume to get a comprehensive overview of my skills, experience, and education.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-primary/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-background p-4 rounded-full">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">My Resume</h3>
                  <p className="text-muted-foreground">Up-to-date resume with all details</p>
                </div>
              </div>
              <Button 
                className="gap-2 min-w-[140px]" 
                size="lg" 
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
            
            <div className="aspect-[4/5] max-h-[600px] bg-muted flex items-center justify-center border-t">
              <div className="text-center p-8">
                <div className="bg-muted-foreground/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">Resume Preview</h3>
                <p className="text-muted-foreground mb-6">Preview would appear here with an embedded PDF viewer</p>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Open Full Resume
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;