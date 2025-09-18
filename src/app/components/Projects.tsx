import { ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectsBackground } from './ProjectsBackground';
import Link from "next/link";

const projects = [
  {
    title: 'FarmLinq',
    description: 'A farm-to-table marketplace that bridges local farmers and consumers, making fresh, sustainable, and organic produce more accessible while supporting local communities.',
    image: '/assets/image/farmlinq.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Web Application',
    code: 'https://github.com/osizwr',
    livedemo: ''
  },
  {
    title: 'Design System',
    description: 'Comprehensive design system and component library for consistent user interfaces across multiple products.',
    image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU3OTE4NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Figma', 'Storybook', 'React', 'CSS-in-JS'],
    category: 'Design System',
    code: 'https://github.com/osizwr',
    livedemo: ''
  },
  {
    title: 'Dashboard Analytics',
    description: 'Real-time analytics dashboard with interactive charts, data visualization, and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTc5NDA5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
    category: 'Data Visualization',
    code: 'https://github.com/osizwr',
    livedemo: ''
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <ProjectsBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Featured <span className="font-medium">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing my approach to design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.code} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 cursor-pointer"
                    >
                      <SiGithub className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  <Button
                    size="sm"
                    className="flex-1 cursor-pointer"
                  >
                    <ExternalLink  className="w-4 h-4 mr-2" />
                    <a href="{project.livedemo}">Live Demo</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full cursor-pointer" >
            <Link href="projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}