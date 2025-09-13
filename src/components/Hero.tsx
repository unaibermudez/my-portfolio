import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/retro-hero.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "> Hello, I'm Unai Bermudez_";

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-20 pt-40 lg:py-12 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 px-2 sm:px-6">
        {/* Left Column - Text Content */}
        <div className="space-y-6 lg:space-y-8 animate-fade-in-up text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-retro leading-tight">
              <span className="text-primary block">Welcome to</span>
              <span className="text-secondary block">My Portfolio</span>
            </h1>

            <div className="terminal p-4 sm:p-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-terminal text-base lg:text-lg">
                {displayText}
                <span className="animate-terminal-blink">|</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <p className="text-base lg:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl mx-auto lg:mx-0">
              Passionate about creating robust, user-friendly applications with modern technologies and strong engineering principles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mx-6 md:mx-0">
              <Button
                className="retro-button pixel-hover"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="font-mono"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Retro Computer Window */}
        <div
          className="animate-fade-in-up order-last"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="mac-window max-w-lg sm:max-w-md mx-auto">
            <div className="mac-titlebar">
              <div className="mac-buttons">
                <div className="mac-button mac-button-red"></div>
                <div className="mac-button mac-button-yellow"></div>
                <div className="mac-button mac-button-green"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                  Terminal - portfolio.exe
                </span>
              </div>
            </div>

            <div className="terminal min-h-[250px] sm:min-h-[300px] space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <div className="text-terminal">$ whoami</div>
              <div className="text-amber">Junior Full Stack Developer</div>
              <div className="text-terminal">$ ls skills/</div>
              <div className="text-amber"> React TypeScript Java SpringBoot Python</div>
              <div className="text-terminal">$ cat experience.txt</div>
              <div className="text-amber">
                1+ years building web applications
              </div>
              <div className="text-terminal">$ ./portfolio --show-projects</div>
              <div className="text-amber">Loading projects...</div>
              <div className="text-terminal terminal-cursor">$ </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
