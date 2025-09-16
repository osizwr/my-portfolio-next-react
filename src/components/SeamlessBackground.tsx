import { motion, useScroll, useTransform } from 'motion/react';
import { HeroBackground } from './HeroBackground';
import { ServicesBackground } from './ServicesBackground';
import { ProjectsBackground } from './ProjectsBackground';
import { ContactBackground } from './ContactBackground';

export function SeamlessBackground() {
  const { scrollYProgress } = useScroll();
  
  // Define scroll positions for each section based on viewport scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const servicesOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.5, 0.65], [0, 1, 1, 0]);
  const projectsOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.75, 0.9], [0, 1, 1, 0]);
  const contactOpacity = useTransform(scrollYProgress, [0.6, 0.75, 1], [0, 1, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Hero Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: heroOpacity }}
      >
        <HeroBackground />
      </motion.div>

      {/* Services Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: servicesOpacity }}
      >
        <ServicesBackground />
      </motion.div>

      {/* Projects Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: projectsOpacity }}
      >
        <ProjectsBackground />
      </motion.div>

      {/* Contact Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: contactOpacity }}
      >
        <ContactBackground />
      </motion.div>
    </div>
  );
}