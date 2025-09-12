import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Terminal } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'RetroOS Dashboard',
      description: 'A nostalgic dashboard inspired by classic operating systems',
      tech: ['React', 'TypeScript', 'CSS Grid'],
      type: 'Web App',
      status: 'Active'
    },
    {
      title: 'Terminal Portfolio',
      description: 'Interactive command-line interface portfolio',
      tech: ['JavaScript', 'Node.js', 'ASCII Art'],
      type: 'CLI Tool',
      status: 'Complete'
    },
    {
      title: 'Pixel Art Generator',
      description: 'Create retro-style pixel art with modern tools',
      tech: ['React', 'Canvas API', 'WebGL'],
      type: 'Creative Tool',
      status: 'Beta'
    },
    {
      title: 'Classic Mac Simulator',
      description: 'Web-based simulation of classic Macintosh interface',
      tech: ['Vue.js', 'CSS Animations', 'Web APIs'],
      type: 'Simulation',
      status: 'Active'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-primary';
      case 'Complete': return 'text-secondary';
      case 'Beta': return 'text-amber';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section className="py-12 max-w-7xl mx-auto sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-retro mb-4">
            <span className="text-primary">Featured</span> <span className="text-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto text-sm lg:text-base">
            A collection of projects that blend retro aesthetics with modern functionality
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="mac-window pixel-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mac-titlebar">
                <div className="mac-buttons">
                  <div className="mac-button mac-button-red"></div>
                  <div className="mac-button mac-button-yellow"></div>
                  <div className="mac-button mac-button-green"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-mono text-muted-foreground">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-retro font-bold text-terminal">
                      {project.title}
                    </h3>
                    <span className={`text-sm font-mono ${getStatusColor(project.status)}`}>
                      [{project.status}]
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="terminal p-4">
                    <div className="text-terminal text-sm mb-2">$ cat tech_stack.txt</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-amber text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="font-mono flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="font-mono flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="terminal inline-block p-6">
            <div className="text-terminal mb-2">$ ls ~/more-projects</div>
            <div className="text-amber mb-4">Found 12+ additional repositories...</div>
            <Button className="retro-button">
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;