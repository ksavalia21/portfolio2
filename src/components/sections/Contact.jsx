import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaEnvelope, FaPhone, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-cream mb-4"
        >
          Contact
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "10%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-cream/60 mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 p-6 bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-lg hover:border-cream/20 transition-all"
            whileHover={{ scale: 1.01 }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-cream mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream/60 mb-2 flex items-center">
                      <FaEnvelope className="mr-2" /> Email
                    </h4>
                    <a
                      href="mailto:savalia.keyur1091@gmail.com"
                      className="text-cream hover:text-cream/80 transition-colors"
                    >
                      savalia.keyur1091@gmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-cream/60 mb-2 flex items-center">
                      <FaPhone className="mr-2" /> Phone
                    </h4>
                    <a
                      href="tel:+14153491732"
                      className="text-cream hover:text-cream/80 transition-colors"
                    >
                      +1 (415) 349-1732
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 p-6 bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-lg hover:border-cream/20 transition-all"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-semibold text-cream mb-4">Connect With Me</h3>
            <div className="space-y-4">
              <motion.a
                href="https://linkedin.com/in/keyursavalia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cream hover:text-cream/80 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaLinkedinIn className="mr-3 text-xl" /> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/ksavalia21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cream hover:text-cream/80 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaGithub className="mr-3 text-xl" /> GitHub
              </motion.a>
              <motion.a
                href="https://instagram.com/keyur.savalia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cream hover:text-cream/80 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaInstagram className="mr-3 text-xl" /> Instagram
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
