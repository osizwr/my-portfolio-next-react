import { motion } from 'framer-motion';
import {
  SiVuedotjs,
  SiNextdotjs,
  SiDjango,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiFigma,
  SiGit,
  SiVercel

} from '@icons-pack/react-simple-icons';

const techStack = [
  {
    name: 'Vue.js',
    icon: SiVuedotjs,
    category: 'Framework',
    color: 'text-[#4FC08D]'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    category: 'Framework',
    color: 'text-[#000000]'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    category: 'Language',
    color: 'text-[#3178C6]'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    category: 'Styling',
    color: 'text-[#06B6D4]'
  },
  {
    name: 'Figma',
    icon: SiFigma,
    category: 'Design',
    color: 'text-[#F24E1E]'
  },
  {
    name: 'Git',
    icon: SiGit,
    category: 'Version Control',
    color: 'text-[#F05032]'
  },
  {
    name: 'Django',
    icon: SiDjango,
    category: 'Backend',
    color: 'text-[#092E20]'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    category: 'Backend',
    color: 'text-[#5FA04E]'
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    category: 'Deployment',
    color: 'text-[#000000]'
  },

];

export function TechStackCarousel() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
          My Tech Stack
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
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"]
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
              className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl min-w-[160px] mr-6 group hover:shadow-lg transition-all duration-300"
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