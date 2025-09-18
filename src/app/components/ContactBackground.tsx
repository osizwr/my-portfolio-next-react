"use client";
import { motion } from 'framer-motion';

export function ContactBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Minimalist wave patterns */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(120, 119, 198, 0.02) 102px,
              rgba(120, 119, 198, 0.02) 104px
            )
          `,
          opacity: 0.8
        }}
        animate={{
          backgroundPosition: ['0px 0px', '200px 200px']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Gentle floating orbs */}
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute bg-primary rounded-full blur-sm"
          style={{
            width: `${40 + index * 15}px`,
            height: `${40 + index * 15}px`,
            left: `${15 + index * 15}%`,
            top: `${20 + index * 12}%`,
            opacity: 0.06
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.1, 0.04]
          }}
          transition={{
            duration: 20 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2
          }}
        />
      ))}

      {/* Professional connection lines */}
      {Array.from({ length: 4 }).map((_, index) => (
        <motion.div
          key={`connection-${index}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            width: '250px',
            left: `${20 + index * 20}%`,
            top: `${30 + index * 15}%`,
            opacity: 0.08
          }}
          animate={{
            scaleX: [0.3, 1, 0.3],
            opacity: [0.04, 0.12, 0.04]
          }}
          transition={{
            duration: 18 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 3
          }}
        />
      ))}

      {/* Subtle communication symbols */}
      {['@', '✉', '📱', '💬'].map((symbol, index) => (
        <motion.div
          key={`symbol-${index}`}
          className="absolute text-primary opacity-8 pointer-events-none select-none"
          style={{
            left: `${20 + index * 20}%`,
            top: `${25 + index * 15}%`,
            fontSize: '2rem'
          }}
          animate={{
            y: [-40, 40, -40],
            rotate: [-10, 10, -10],
            opacity: [0.03, 0.12, 0.03],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 25 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 4
          }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Calm gradient wash */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(120, 119, 198, 0.03) 0%, transparent 60%)
          `,
          opacity: 0.9
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating envelope/message elements */}
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={`message-${index}`}
          className="absolute w-6 h-4 bg-primary opacity-10 rounded-sm"
          style={{
            left: `${30 + index * 25}%`,
            top: `${35 + index * 15}%`
          }}
          animate={{
            y: [-25, 25, -25],
            rotate: [-3, 3, -3],
            opacity: [0.06, 0.15, 0.06]
          }}
          transition={{
            duration: 22 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 5
          }}
        />
      ))}
    </div>
  );
}