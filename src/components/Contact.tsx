import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', username: '@username' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', username: '/in/username' },
    { icon: Twitter, label: 'Twitter', href: '#', username: '@username' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com', username: 'hello@example.com' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-retro mb-4">
            <span className="text-primary">Get In</span> <span className="text-secondary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto text-sm lg:text-base">
            Ready to collaborate? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="mac-window">
            <div className="mac-titlebar">
              <div className="mac-buttons">
                <div className="mac-button mac-button-red"></div>
                <div className="mac-button mac-button-yellow"></div>
                <div className="mac-button mac-button-green"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-mono text-muted-foreground">
                  MessageComposer.app
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="terminal p-4 mb-6">
                <div className="text-terminal text-sm">$ ./send_message --to developer</div>
                <div className="text-amber text-sm">Initializing secure communication...</div>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-terminal">Name:</label>
                  <Input 
                    placeholder="John Doe" 
                    className="font-mono bg-muted border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-mono text-terminal">Email:</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="font-mono bg-muted border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-mono text-terminal">Message:</label>
                  <Textarea 
                    placeholder="Hello! I'd like to discuss a project..." 
                    rows={5}
                    className="font-mono bg-muted border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button className="w-full retro-button flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Terminal Contact Info */}
            <div className="terminal p-8">
              <div className="space-y-3 text-sm">
                <div className="text-terminal">$ whoami --contact</div>
                <div className="text-amber">Available for new opportunities</div>
                <div className="text-terminal">$ location</div>
                <div className="text-amber">Remote / Your City</div>
                <div className="text-terminal">$ timezone</div>
                <div className="text-amber">UTC-5 (EST)</div>
                <div className="text-terminal">$ preferred_contact</div>
                <div className="text-amber">Email, LinkedIn, or GitHub</div>
                <div className="text-terminal terminal-cursor">$ </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <Card 
                  key={social.label}
                  className="p-6 pixel-hover cursor-pointer bg-card border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <social.icon className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-mono font-medium text-terminal">
                        {social.label}
                      </div>
                      <div className="text-sm text-muted-foreground font-mono">
                        {social.username}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Contact Terminal */}
            <div className="mac-window">
              <div className="mac-titlebar">
                <div className="mac-buttons">
                  <div className="mac-button mac-button-red"></div>
                  <div className="mac-button mac-button-yellow"></div>
                  <div className="mac-button mac-button-green"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-mono text-muted-foreground">
                    QuickContact.sh
                  </span>
                </div>
              </div>
              
              <div className="terminal p-6">
                <div className="space-y-2 text-sm">
                  <div className="text-terminal">$ echo "Let's connect!"</div>
                  <div className="text-amber">Let's connect!</div>
                  <div className="text-terminal">$ curl -X GET developer/coffee</div>
                  <div className="text-amber">☕ Always ready for a chat</div>
                  <div className="text-terminal">$ ./schedule_meeting</div>
                  <div className="text-amber">Calendar link available on request</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;