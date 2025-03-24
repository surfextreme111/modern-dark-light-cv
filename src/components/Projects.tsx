
import { Code, ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React, TypeScript and Tailwind CSS",
    technologies: ["React", "TypeScript", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce application with product management and payment processing",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Mobile-first web application for task and project management",
    technologies: ["React Native", "Firebase", "Redux"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

export default function Projects() {
  const { t } = useLanguage();
  
  return (
    <div id="projects" className="space-y-6 opacity-0 animate-fade-up" style={{"--delay": "8"} as React.CSSProperties}>
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">{t('section.projects')}</h2>
        <div className="flex-1 decoration-gold"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{"--delay": index + 9} as React.CSSProperties}
          >
            <div className="p-6 bg-card border border-border rounded-lg h-full flex flex-col hover-shadow-gold transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="h-6 w-6 text-gold-500" />
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>
              <p className="text-sm mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-muted rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-3">
                <a 
                  href={project.githubUrl} 
                  className="text-sm flex items-center hover:text-gold-500 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
                <a 
                  href={project.liveUrl} 
                  className="text-sm flex items-center hover:text-gold-500 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
