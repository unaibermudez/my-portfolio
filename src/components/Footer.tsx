import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="terminal p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            {/* Left Column */}
            <div className="space-y-2">
              <div className="text-terminal">$ cat signature.txt</div>
              <div className="text-amber">Built with passion</div>
              <div className="text-amber">Inspired by retro computing</div>
              <div className="text-amber">Powered by modern tech</div>
            </div>

            {/* Middle Column */}
            <div className="space-y-2">
              <div className="text-terminal">$ echo $TECH_STACK</div>
              <div className="text-amber">React + TypeScript</div>
              <div className="text-amber">Tailwind CSS</div>
              <div className="text-amber">Vite + Lovable</div>
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              <div className="text-terminal">$ date && uptime</div>
              <div className="text-amber">{new Date().getFullYear()}</div>
              <div className="text-amber">Always learning, always building</div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-retro text-terminal">
                  © {new Date().getFullYear()} Developer Portfolio
                </span>
              </div>
              
              <div className="flex items-center space-x-1 text-amber text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and lots of coffee</span>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <div className="text-terminal text-xs">
                $ echo "Thanks for visiting! Feel free to fork this portfolio."
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;