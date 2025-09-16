import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { HeroBackground } from './HeroBackground';
import { TechStackCarousel } from './TechStackCarousel';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <HeroBackground />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto mb-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 ">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                Front-End Developer
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-6">
              Hi, I&apos;m <span className="text-primary font-medium">Marvin</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              I design and develop beautiful, functional interfaces that bring ideas to life through clean code and thoughtful user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-6 text-lg rounded-full cursor-pointer"
              >
                Let&apos;s Work Together
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-full cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div> 

          {/* Right Content - Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
                <ImageWithFallback
                  src="#"
                  alt="Portfolio Owner"
                  className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute -inset-4 rounded-full border border-primary/10" />
            </div>
          </div>
        </div>

        {/* Tech Stack Carousel */}
        <div className="max-w-7xl mx-auto w-full">
          <TechStackCarousel />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className="cursor-pointer"
          onClick={scrollToProjects}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}