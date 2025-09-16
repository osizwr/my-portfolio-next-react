import { motion } from 'framer-motion';
import { 
  Code2,
  Pyramid,
  Globe, 
  Palette, 
  DatabaseBackup, 
  Zap,
  Layers,
  Terminal,
  GitBranch,
  Cloud
} from 'lucide-react';

const techStack = [
  {
    name: 'React',
    icon: Pyramid,
    category: 'Frontend',
    color: 'text-blue-500'
  },
  {
    name: 'Vue.js',
    icon: Code2,
    category: 'Frontend',
    color: 'text-green-500'
  },
  {
    name: 'TypeScript',
    icon: Terminal,
    category: 'Language',
    color: 'text-blue-600'
  },
  {
    name: 'Next.js',
    icon: Globe,
    category: 'Framework',
    color: 'text-gray-900 dark:text-white'
  },
  {
    name: 'Tailwind CSS',
    icon: Palette,
    category: 'Styling',
    color: 'text-cyan-500'
  },
  {
    name: 'Node.js',
    icon: Zap,
    category: 'Backend',
    color: 'text-green-500'
  },
  {
    name: 'Figma',
    icon: Layers,
    category: 'Design',
    color: 'text-purple-500'
  },
  {
    name: 'Git',
    icon: GitBranch,
    category: 'Version Control',
    color: 'text-orange-500'
  },
  {
    name: 'Vercel',
    icon: Cloud,
    category: 'Deployment',
    color: 'text-gray-900 dark:text-white'
  },
  {
    name: 'Django',
    icon: DatabaseBackup,
    category: 'Backend',
    color: 'text-green-400'
  }
];

export function TechStackCarousel() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
          Tech Stack
        </span>
        <p className="text-muted-foreground">
          Technologies I work with daily
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [-1920, 0] // Adjust based on total width
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedTechStack.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl min-w-[160px] group hover:shadow-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
            >
              <div className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-3 group-hover:bg-muted transition-colors ${tech.color}`}>
                <tech.icon className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-sm mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}