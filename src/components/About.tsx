import { Code, Coffee, Gamepad2, Monitor } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Monitor, items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', icon: Code, items: ['Java', 'Spring Boot', 'PostgreSQL', 'Prisma'] },
    { name: 'Tools', icon: Coffee, items: ['Git', 'Docker/Podman', 'CI/CD', 'Redux'] },
    { name: 'Learning', icon: Gamepad2, items: ['AI/ML', 'Cybersecurity', 'ROS2', 'Python'] },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-retro mb-4">
            <span className="text-primary">About</span> <span className="text-secondary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="mac-window">
            <div className="mac-titlebar">
              <div className="mac-buttons">
                <div className="mac-button mac-button-red"></div>
                <div className="mac-button mac-button-yellow"></div>
                <div className="mac-button mac-button-green"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm font-mono text-muted-foreground">
                  About.md - ReadMe
                </span>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="space-y-4 font-mono text-sm leading-relaxed">
                <div>
                  <span className="text-terminal"># </span>
                  <span className="text-amber">Education & Background</span>
                </div>
                
                <p className="text-muted-foreground pl-4">
                  BSc in Computer Engineering from UPV/EHU (University of the Basque Country). 
                  Final Year Project: SkillAtlas - a web platform for CV and knowledge management 
                  in consulting firms, built with Spring Boot, React, and PostgreSQL.
                </p>
                
                <div>
                  <span className="text-terminal">## </span>
                  <span className="text-amber">Professional Journey</span>
                </div>
                
                <p className="text-muted-foreground pl-4">
                  Software Engineering Intern at LKS NEXT (2024-2025), working on projects like 
                  Metaposta, Hazi, and Euskalmet. Previously contributed to Formula Student Bizkaia 
                  developing path-planning algorithms for autonomous driving with Python and ROS2.
                </p>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-terminal text-xs">
                    Last updated: {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {skills.map((category, index) => (
              <div
                key={category.name}
                className="mac-window pixel-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mac-titlebar">
                  <div className="mac-buttons">
                    <div className="mac-button mac-button-red"></div>
                    <div className="mac-button mac-button-yellow"></div>
                    <div className="mac-button mac-button-green"></div>
                  </div>
                </div>
                
                <div className="p-4 lg:p-6 text-center">
                  <category.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary mx-auto mb-3 lg:mb-4" />
                  <h3 className="font-retro font-medium text-base lg:text-lg mb-3 lg:mb-4 text-primary">
                    {category.name}
                  </h3>
                  <div className="space-y-1 lg:space-y-2">
                    {category.items.map((item) => (
                      <div key={item} className="font-mono text-xs lg:text-sm text-muted-foreground">
                        <span className="text-secondary">•</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;