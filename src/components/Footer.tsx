import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">        
        <div className="mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Jaimin Kaneriya. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;