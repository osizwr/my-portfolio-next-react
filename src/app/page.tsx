"use client";

import { useState, useEffect } from 'react';
import { Toaster } from '../components/ui/sonner';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check for saved theme preference or default to light mode
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster richColors position="top-right" />
    </div>
  );
}