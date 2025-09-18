"use client";
import { motion } from 'framer-motion';

export function ProjectsBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Creative paint splashes */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`splash-${index}`}
          className="absolute bg-primary rounded-full blur-md"
          style={{
            width: `${80 + index * 20}px`,
            height: `${80 + index * 20}px`,
            left: `${10 + index * 20}%`,
            top: `${15 + index * 15}%`,
            opacity: 0.08,
            clipPath: `polygon(${Math.random() * 30}% ${Math.random() * 30}%, ${70 + Math.random() * 30}% ${Math.random() * 20}%, ${80 + Math.random() * 20}% ${60 + Math.random() * 40}%, ${Math.random() * 40}% ${70 + Math.random() * 30}%)`
          }}
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 20 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2
          }}
        />
      ))}

      {/* Floating creative elements */}
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={`creative-${index}`}
          className="absolute bg-primary"
          style={{
            width: `${6 + Math.random() * 8}px`,
            height: `${6 + Math.random() * 8}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.2,
            borderRadius: index % 4 === 0 ? '50%' : index % 4 === 1 ? '0' : '25%',
            clipPath: index % 4 === 2 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 40, 0],
            rotate: [0, 360],
            scale: [1, 1.8, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 18 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8
          }}
        />
      ))}

      {/* Artistic brush strokes */}
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={`brush-${index}`}
          className="absolute h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-15"
          style={{
            width: `${150 + index * 50}px`,
            left: `${index * 15}%`,
            top: `${25 + index * 12}%`,
            transform: `rotate(${-30 + index * 15}deg)`
          }}
          animate={{
            scaleX: [0.5, 1.5, 0.5],
            opacity: [0.05, 0.25, 0.05],
            x: [-20, 20, -20]
          }}
          transition={{
            duration: 14 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 1.8
          }}
        />
      ))}

      {/* Color burst gradients */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 119, 198, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(120, 200, 255, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 60% 40%, rgba(255, 200, 120, 0.04) 0%, transparent 40%)
          `,
          opacity: 0.7
        }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating portfolio pieces */}
      {Array.from({ length: 4 }).map((_, index) => (
        <motion.div
          key={`portfolio-${index}`}
          className="absolute w-12 h-8 bg-primary opacity-12 rounded-sm"
          style={{
            left: `${25 + index * 18}%`,
            top: `${30 + index * 10}%`
          }}
          animate={{
            y: [-30, 30, -30],
            rotate: [-5, 5, -5],
            scale: [0.9, 1.1, 0.9],
            opacity: [0.08, 0.18, 0.08]
          }}
          transition={{
            duration: 16 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2.5
          }}
        />
      ))}
    </div>
  );
}