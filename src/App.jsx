import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import LoadingScreen from './components/layout/LoadingScreen';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './styles/globals.css';
import './styles/animations.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  
  // Background gradient orbs - Shared across all sections
  const gradientOrbs = [
    { x: 15, y: 20, size: 300, color: 'from-purple-500/10 to-transparent' },
    { x: 85, y: 70, size: 250, color: 'from-blue-500/10 to-transparent' },
    { x: 50, y: 60, size: 200, color: 'from-pink-500/5 to-transparent' }
  ];

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Add event listener for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Arrow navigation between sections
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        navigateNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        navigatePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection]);

  const sections = ['home', 'about', 'experience', 'projects', 'contact'];
  
  const navigateNext = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    }
  };
  
  const navigatePrev = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home setCurrentSection={setCurrentSection} />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-cream font-sans">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
          
          {/* Background Elements (common across all sections) */}
          <div className="fixed inset-0 overflow-hidden z-0">
            {/* Gradient Orbs */}
            {gradientOrbs.map((orb, index) => (
              <motion.div
                key={`orb-${index}`}
                className={`absolute rounded-full bg-gradient-radial ${orb.color} blur-3xl`}
                style={{
                  left: `${orb.x}%`,
                  top: `${orb.y}%`,
                  width: orb.size,
                  height: orb.size,
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-6 opacity-5">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={`vline-${i}`} className="border-l border-cream/20 h-full"></div>
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-6 opacity-5">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={`hline-${i}`} className="border-t border-cream/20 w-full"></div>
              ))}
            </div>
            
            {/* Decorative Corner Elements */}
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cream/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cream/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="container mx-auto px-4 py-8 h-screen overflow-hidden relative z-10"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Indicators */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
            <div className="flex flex-col space-y-4">
              {sections.map((section, index) => (
                <motion.button
                  key={section}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSection === section 
                      ? 'bg-cream scale-125' 
                      : 'bg-cream/30 hover:bg-cream/50'
                  }`}
                  onClick={() => setCurrentSection(section)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title={section.charAt(0).toUpperCase() + section.slice(1)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
