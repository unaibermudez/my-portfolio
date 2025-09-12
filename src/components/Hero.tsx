import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/retro-hero.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = '> Hello, I\'m a developer_';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold font-retro">
              <span className="text-terminal block">Welcome to</span>
              <span className="text-amber block">My Portfolio</span>
            </h1>
            
            <div className="terminal p-6 max-w-lg">
              <div className="text-terminal text-lg">
                {displayText}
                <span className="animate-terminal-blink">|</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground font-mono leading-relaxed">
              Crafting digital experiences with the precision of classic computing 
              and the innovation of modern development.
            </p>
            
            <div className="flex gap-4">
              <Button className="retro-button pixel-hover">
                View Projects
              </Button>
              <Button variant="outline" className="font-mono">
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Retro Computer Window */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="mac-window max-w-md mx-auto">
            <div className="mac-titlebar">
              <div className="mac-buttons">
                <div className="mac-button mac-button-red"></div>
                <div className="mac-button mac-button-yellow"></div>
                <div className="mac-button mac-button-green"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-mono text-muted-foreground">
                  Terminal - portfolio.exe
                </span>
              </div>
            </div>
            
            <div className="terminal min-h-[300px] space-y-2">
              <div className="text-terminal">$ whoami</div>
              <div className="text-amber">Full Stack Developer</div>
              <div className="text-terminal">$ ls skills/</div>
              <div className="text-amber">React TypeScript Node.js Python</div>
              <div className="text-terminal">$ cat experience.txt</div>
              <div className="text-amber">5+ years building web applications</div>
              <div className="text-terminal">$ ./portfolio --show-projects</div>
              <div className="text-amber">Loading projects...</div>
              <div className="text-terminal terminal-cursor">$ </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;