import { motion } from 'framer-motion';

const Navbar = ({ currentSection, setCurrentSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-cream hover:text-cream/80 transition-colors"
          onClick={() => setCurrentSection('home')}
        >
          KS
        </motion.button>
        <div className="flex space-x-4 md:space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setCurrentSection(item.id)}
              className={`text-cream hover:text-cream/80 transition-colors text-sm md:text-base ${
                currentSection === item.id ? 'font-bold' : ''
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
