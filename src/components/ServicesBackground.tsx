import { motion } from 'framer-motion';

export function ServicesBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Technical grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120, 119, 198, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 119, 198, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating code blocks */}
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={`code-${index}`}
          className="absolute w-8 h-6 bg-primary opacity-10"
          style={{
            left: `${15 + (index * 15)}%`,
            top: `${10 + (index * 12)}%`,
            clipPath: 'polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)'
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, 0],
            rotate: [0, 5, 0],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{
            duration: 12 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 1.5
          }}
        />
      ))}

      {/* Binary floating numbers */}
      {['0', '1', '0', '1', '1', '0', '1', '0'].map((digit, index) => (
        <motion.div
          key={`binary-${index}`}
          className="absolute text-primary opacity-20 pointer-events-none select-none"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 80 + 10}%`,
            fontSize: '1.5rem'
          }}
          animate={{
            y: [-100, 100],
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "linear",
            delay: index * 2.5
          }}
        >
          {digit}
        </motion.div>
      ))}

      {/* Geometric tech shapes */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={`tech-${index}`}
          className="absolute w-4 h-4 bg-primary opacity-15"
          style={{
            left: `${20 + (index * 10)}%`,
            top: `${20 + (index * 8)}%`,
            clipPath: index % 3 === 0 
              ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' // Diamond
              : index % 3 === 1 
              ? 'polygon(0% 0%, 100% 0%, 50% 100%)' // Triangle
              : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' // Square
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 15 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.8
          }}
        />
      ))}

      {/* Subtle gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 70%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(120, 200, 255, 0.05) 0%, transparent 50%)
          `,
          opacity: 0.8
        }}
        animate={{
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}