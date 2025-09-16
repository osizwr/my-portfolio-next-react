import { motion } from 'motion/react';

export function BackgroundAnimation() {
  const shapes = [
    { 
      id: 1, 
      size: 'w-32 h-32', 
      position: 'top-10 left-10', 
      delay: 0,
      duration: 15,
      opacity: 0.15
    },
    { 
      id: 2, 
      size: 'w-20 h-20', 
      position: 'top-1/4 right-20', 
      delay: 2,
      duration: 18,
      opacity: 0.12
    },
    { 
      id: 3, 
      size: 'w-40 h-40', 
      position: 'bottom-1/4 left-1/4', 
      delay: 4,
      duration: 22,
      opacity: 0.14
    },
    { 
      id: 4, 
      size: 'w-24 h-24', 
      position: 'bottom-20 right-1/3', 
      delay: 1,
      duration: 16,
      opacity: 0.18
    },
    { 
      id: 5, 
      size: 'w-16 h-16', 
      position: 'top-1/3 left-1/2', 
      delay: 3,
      duration: 20,
      opacity: 0.10
    },
    { 
      id: 6, 
      size: 'w-36 h-36', 
      position: 'top-2/3 right-10', 
      delay: 5,
      duration: 25,
      opacity: 0.16
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 h-screen">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: 0.6 }}
        animate={{
          background: [
            'radial-gradient(800px circle at 0% 0%, rgba(120, 119, 198, 0.2), transparent 70%)',
            'radial-gradient(800px circle at 100% 100%, rgba(120, 119, 198, 0.2), transparent 70%)',
            'radial-gradient(800px circle at 100% 0%, rgba(255, 119, 198, 0.15), transparent 70%)',
            'radial-gradient(800px circle at 0% 100%, rgba(120, 200, 255, 0.15), transparent 70%)',
            'radial-gradient(800px circle at 50% 50%, rgba(120, 119, 198, 0.2), transparent 70%)',
            'radial-gradient(800px circle at 0% 0%, rgba(120, 119, 198, 0.2), transparent 70%)'
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.position} bg-primary rounded-full blur-sm`}
          style={{ opacity: shape.opacity }}
          animate={{
            y: [-40, 40, -40],
            x: [-30, 30, -30],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [shape.opacity * 0.5, shape.opacity * 1.5, shape.opacity * 0.5]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay
          }}
        />
      ))}

      {/* Moving geometric shapes */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={`geo-${index}`}
          className="absolute w-3 h-3 bg-primary"
          style={{
            left: `${10 + (index * 12)}%`,
            top: `${20 + (index * 8)}%`,
            opacity: 0.25,
            clipPath: index % 2 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 360],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.8
          }}
        />
      ))}

      {/* Enhanced floating dots */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`dot-${index}`}
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-25, 25, -25],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Dynamic mesh gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: 0.4,
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.05) 0%, transparent 50%)
          `
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Flowing lines */}
      {Array.from({ length: 4 }).map((_, index) => (
        <motion.div
          key={`line-${index}`}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            width: '300px',
            left: `${index * 25}%`,
            top: `${20 + index * 20}%`,
            opacity: 0.2
          }}
          animate={{
            x: [-200, 1400],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            ease: "linear",
            delay: index * 3
          }}
        />
      ))}
    </div>
  );
}