
import { useState } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectsBackground } from './ProjectsBackground';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Uplift Media Attendance Tracker',
    description: 'Uplift Media Attendance Tracker is a smart attendance management system designed to simplify tracking, boost accountability, and reward consistency through built-in achievements.',
    image: '/assets/image/uplift-media/uplift-thumbnail.png',
    gallery: ['/assets/image/uplift-media/uplift1.png', '/assets/image/uplift-media/uplift2.png', '/assets/image/uplift-media/uplift3.png', '/assets/image/uplift-media/uplift4.png', '/assets/image/uplift-media/uplift5.png'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'Web Application',
    code: 'https://github.com/osizwr',
    livedemo: 'https://uplift-media-demo.vercel.app/'
  },
  {
    title: 'Design System',
    description: 'Comprehensive design system and component library for consistent user interfaces across multiple products.',
    image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU3OTE4NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU3OTE4NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    technologies: ['Figma', 'Storybook', 'React', 'CSS-in-JS'],
    category: 'Design System',
    code: 'https://github.com/osizwr',
    livedemo: ''
  },
  {
    title: 'Dashboard Analytics',
    description: 'Real-time analytics dashboard with interactive charts, data visualization, and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTc5NDA5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTc5NDA5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
    category: 'Data Visualization',
    code: 'https://github.com/osizwr',
    livedemo: ''
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <ProjectsBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Recent <span className="font-medium">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My recent work showcasing approach to design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
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
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md">+{project.technologies.length - 3}</span>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 cursor-pointer z-20 relative"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.code, '_blank');
                    }}
                  >
                    <SiGithub className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 cursor-pointer z-20 relative"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.livedemo || '#', '_blank');
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full cursor-pointer" asChild>
            <Link href="projects">View All Projects</Link>
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-7xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-accent transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
                {/* Image Gallery Section */}
                <div className="lg:w-2/3 bg-black/5 relative group h-64 lg:h-auto min-h-[300px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageWithFallback
                      src={selectedProject.gallery[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1} `}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {selectedProject.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.gallery.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-primary w-4' : 'bg-primary/30'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="lg:w-1/3 p-8 flex flex-col overflow-y-auto">
                  <div className="mb-6">
                    <Badge className="mb-3">{selectedProject.category}</Badge>
                    <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-medium mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent text-accent-foreground rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <Button size="lg" className="w-full text-lg h-12" onClick={() => window.open(selectedProject.livedemo || '#', '_blank')}>
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="lg" variant="outline" className="w-full text-lg h-12" onClick={() => window.open(selectedProject.code, '_blank')}>
                      <SiGithub className="w-5 h-5 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
