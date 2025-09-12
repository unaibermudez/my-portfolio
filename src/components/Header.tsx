import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Terminal } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border">
      <div className="mac-window mx-4 mt-4 overflow-visible">
        <div className="mac-titlebar">
          <div className="mac-buttons">
            <div className="mac-button mac-button-red"></div>
            <div className="mac-button mac-button-yellow"></div>
            <div className="mac-button mac-button-green"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-sm font-mono text-muted-foreground">
              Portfolio v2.1 - Navigator
            </span>
          </div>
        </div>
        
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="font-retro font-bold text-lg text-terminal">
                Dev.Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="font-mono text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border">
              <div className="terminal p-4">
                <div className="space-y-2">
                  <div className="text-terminal text-sm">$ ls navigation/</div>
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      className="block w-full text-left text-amber text-sm font-mono hover:text-primary transition-colors"
                      onClick={() => scrollToSection(item.href)}
                    >
                      • {item.label.toLowerCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;