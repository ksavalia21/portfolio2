import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      period: "Jan 2024 - May 2024",
      company: "Krishna Engineering",
      role: "Software Engineer Intern",
      description: "Automated React components, reducing page load times & boosting user engagement. Enhanced API efficiency & implemented Jest tests. Optimized SQL queries, improving database performance."
    },
    {
      period: "May 2023 - August 2023",
      company: "BrainyBeam Technologies PVT. LTD.",
      role: "Product Design Intern",
      description: "Conducted user research to drive major design iterations. Reduced drop-off rates by redesigning the onboarding flow. Performed A/B testing & delivered wireframes that streamlined workflows."
    },
    // Add more experiences as needed
  ];

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-cream mb-4"
        >
          Experience
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "10%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-cream/60 mb-12"
        />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 p-6 bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-lg hover:border-cream/20 transition-all hover-shadow"
              whileHover={{ scale: 1.01 }}
            >
              <div className="space-y-2">
                <p className="text-cream/60">{exp.period}</p>
                <h3 className="text-xl font-semibold text-cream">{exp.role}</h3>
                <p className="text-cream/80">{exp.company}</p>
              </div>
              <div>
                <p className="text-cream/80 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
