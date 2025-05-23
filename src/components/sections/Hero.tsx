import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github as GitHub } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-pulse-slow absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="animate-pulse-slow absolute top-40 -left-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className={cn(
        "flex flex-col items-center text-center transition-all duration-1000 transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <p className="text-lg md:text-xl text-primary font-medium mb-4">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Jaimin Kaneriya
        </h1>
        <div className="h-1.5 w-24 bg-primary/50 rounded-full mb-6"></div>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
          MERN Stack Developer
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground mb-10">
          Passionate about building impactful web applications with modern technologies.
          Specializing in React, Node.js, and creating seamless user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="group" asChild>
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="/resume.pdf" download>
              Download CV
              <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/JAIMIN05" target="_blank" rel="noopener noreferrer">
              GitHub
              <GitHub className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full h-10 w-10"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;