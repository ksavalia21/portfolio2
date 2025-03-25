import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';
import { MdDesignServices } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';

const Home = ({ setCurrentSection }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  // Animated background particles
  const particles = Array.from({ length: 45 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2
  }));

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cream/10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Design Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-cream/5 text-8xl"
        animate={{ 
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <MdDesignServices />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 text-cream/5 text-8xl"
        animate={{ 
          rotate: [0, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <HiOutlineCode />
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 right-1/5 text-cream/5 text-7xl"
        animate={{ 
          rotate: [0, 15, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <BiSearchAlt />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - Name and Title with Creative Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-7xl font-bold text-cream mb-2 relative z-10"
            >
              Keyur Savalia
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-1 bg-cream/60 mb-4"
            />
            
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-2xl text-cream/70 block"
            >
              Product Designer
            </motion.span>
          </div>
        </motion.div>

        {/* Right Side - Interactive Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1"
        >
          <div className="grid grid-cols-1 gap-6 max-w-md">
            {/* Card 1 - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="bg-cream/5 backdrop-blur-sm p-6 rounded-lg border border-cream/10 hover:border-cream/20 transition-all relative overflow-hidden group hover-shadow cursor-pointer"
              onClick={() => setCurrentSection('experience')}
            >
              <motion.div
                className="absolute -bottom-10 -right-10 text-cream/5 text-9xl transition-transform duration-700 ease-in-out"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <MdDesignServices className="group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              </motion.div>
              <h3 className="text-cream font-medium text-lg mb-2 relative z-10">About My Work</h3>
              <p className="text-cream/80 relative z-10">
                Product Designer and Software Engineer focused on developing and maintaining design systems
              </p>
            </motion.div>

            {/* Card 2 - Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
              className="bg-cream/5 backdrop-blur-sm p-6 rounded-lg border border-cream/10 hover:border-cream/20 transition-all hover-shadow cursor-pointer"
              onClick={() => setCurrentSection('contact')}
            >
              <h3 className="text-cream font-medium text-lg mb-3">Connect</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://linkedin.com/in/keyursavalia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-cream hover:text-cream/80 transition-colors"
                  whileHover={{ y: -2 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaLinkedinIn className="mr-2" /> LinkedIn
                </motion.a>
                <motion.a
                  href="mailto:savalia.keyur1091@gmail.com"
                  className="flex items-center text-cream hover:text-cream/80 transition-colors"
                  whileHover={{ y: -2 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaEnvelope className="mr-2" /> Email
                </motion.a>
                <motion.a
                  href="https://github.com/ksavalia21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-cream hover:text-cream/80 transition-colors"
                  whileHover={{ y: -2 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="mr-2" /> GitHub
                </motion.a>
              </div>
            </motion.div>

            {/* Card 3 - Looking for Internships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-cream/5 backdrop-blur-sm p-6 rounded-lg border border-cream/10 hover:border-cream/20 transition-all hover-shadow"
            >
              <h3 className="text-cream font-medium text-lg mb-2">Opportunities</h3>
              <p className="text-cream/80">
                Currently looking for Product Design, UI/UX internships for summer 2025
              </p>
            </motion.div>

            {/* Card 4 - Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-cream/5 backdrop-blur-sm p-6 rounded-lg border border-cream/10 hover:border-cream/20 transition-all hover-shadow"
            >
              <h3 className="text-cream font-medium text-lg mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Location
              </h3>
              <p className="text-cream/80">
                Based in San Francisco, CA
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
