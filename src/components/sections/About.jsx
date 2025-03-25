import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaDownload, FaInstagram, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Image Container with reduced height */}
          <motion.div 
            className="overflow-hidden rounded-lg shadow-lg w-full max-w-sm mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-[3/4] w-full">
              <img
                src="keyur.jpeg"
                alt="Keyur Savalia"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg border border-cream/10 pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Content */}
        <div className="space-y-8">
          {/* Summary Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-cream">About Me</h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "20%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-cream/60 mb-6"
            />
            <p className="text-cream/80 leading-relaxed">
              {/* Replace with your actual summary */}
              I am a passionate Product Designer and Software Engineer with a keen eye for detail
              and a strong focus on creating seamless user experiences. My expertise lies in
              developing and maintaining design systems that ensure consistency and efficiency
              across products.
            </p>
            <motion.a
              href="/KEYUR-SAVALIA-RESUME.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-cream text-black rounded-lg font-semibold hover:bg-cream/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2" /> Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 bg-cream/5 backdrop-blur-sm p-6 rounded-lg border border-cream/10 hover-shadow"
          >
            <h3 className="text-xl font-semibold text-cream">Connect With Me</h3>
            <div className="flex flex-wrap gap-6">
              <motion.a
                href="https://linkedin.com/in/keyursavalia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cream hover:text-cream/80 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaLinkedinIn className="mr-2" /> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/ksavalia21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cream hover:text-cream/80 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaGithub className="mr-2" /> GitHub
              </motion.a>
              <motion.a
                href="https://instagram.com/keyur.savalia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cream hover:text-cream/80 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaInstagram className="mr-2" /> Instagram
              </motion.a>
              <motion.a
                href="mailto:savalia.keyur1091@gmail.com"
                className="flex items-center text-cream hover:text-cream/80 transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaEnvelope className="mr-2" /> Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
