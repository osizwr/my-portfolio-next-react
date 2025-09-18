import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.3
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}