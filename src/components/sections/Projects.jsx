import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaChartBar, FaSitemap, FaSearch, FaTasks, FaLightbulb } from 'react-icons/fa';

// Custom component to properly render bullet points with indentation
const BulletList = ({ text }) => {
  if (!text) return null;
  
  const lines = text.split('\n');
  
  return (
    <div className="text-cream/80 leading-relaxed">
      {lines.map((line, index) => {
        if (line.startsWith('  -')) {
          // This is a sub-bullet point (indented bullet)
          return (
            <div key={index} className="ml-6 mb-1 flex">
              <span className="mr-2">-</span>
              <span>{line.substring(3)}</span>
            </div>
          );
        } else if (line.startsWith('•')) {
          // This is a main bullet point
          return (
            <div key={index} className="mb-2 flex">
              <span className="mr-2">•</span>
              <span>{line.substring(1).trim()}</span>
            </div>
          );
        } else {
          // This is a heading or other text
          return <div key={index} className="mb-2 font-semibold">{line}</div>;
        }
      })}
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Flow Party",
      company: "Virtual Event Platform",
      description: "Designed to enhance remote team engagement, Flow Party provides customizable event templates, real-time analytics, and interactive features to create immersive virtual experiences.",
      image: "/flowparty.png",
      links: {
        github: "https://github.com/ksavalia21/flowparty-clone",
        liveDemo: "https://flowparty-clone.vercel.app/"
      },
      details: {
        companyDescription: "Flow Party is a cutting-edge virtual event platform that specializes in creating immersive digital experiences for remote and hybrid teams, enabling meaningful connections in a virtual space.",
        projectObjectives: "• Create an immersive virtual event platform that combats remote team disconnection and isolation\n• Design intuitive team-building activities accessible for users with varying technical abilities\n• Develop customizable event templates that allow hosts to personalize experiences\n• Implement real-time analytics to measure engagement and participation metrics\n• Build interactive features like polls, breakout rooms, and collaborative challenges",
        designProcess: "• User Research Phase:\n  - Conducted 15+ in-depth interviews with remote team leaders\n  - Analyzed 5 competitor platforms to identify strengths and shortcomings\n  - Created detailed user journey maps for both hosts and participants\n• Ideation & Concept Development:\n  - Ran collaborative workshops with stakeholders\n  - Developed low-fidelity wireframes for key user flows\n  - Created interactive prototypes using Figma\n• Testing & Iteration:\n  - Conducted 3 rounds of usability testing with 8-10 participants each\n  - Implemented feedback loops with beta testers\n  - Refined UI based on heatmap analysis and session recordings",
        challenges: "• Technical Complexity:\n  - Supporting simultaneous multi-user interactions without performance degradation\n  - Maintaining connection stability across different network conditions\n• User Experience Hurdles:\n  - Creating intuitive onboarding for less tech-savvy users\n  - Designing experiences that worked equally well for teams of 5 or 500\n• Engagement Obstacles:\n  - Overcoming 'Zoom fatigue' with novel interaction patterns\n  - Balancing structured activities with spontaneous social interaction\n  - Creating meaningful digital experiences that rivaled in-person connection",
        lessonsLearned: "We learned that successful virtual engagement requires a balance between structure and spontaneity, and that customization options are crucial for team leaders to tailor experiences to their unique team culture.",
        images: {
          main: "/flowparty.png",
          process1: "/flowparty/process1.jpg",
          process2: "/flowparty/process2.jpg",
          challenge1: "/flowparty/challenge1.jpg",
          challenge2: "/flowparty/challenge2.jpg"
        }
      }
    },
    {
      id: 2,
      title: "SupaDupa",
      company: "Fashion E-commerce Platform",
      description: "A fashion e-commerce platform that offers personalized shopping experiences using AI-powered recommendations.",
      image: "/supadupa.png",
      links: {
        github: "https://github.com/ksavalia21/supadupa-clone",
        liveDemo: "https://supadupa-clone.vercel.app/"
      },
      details: {
        companyDescription: "SupaDupa is an innovative fashion e-commerce platform that leverages artificial intelligence to create hyper-personalized shopping experiences tailored to individual style preferences and shopping habits.",
        projectObjectives: "• Develop an AI-powered recommendation system that accurately predicts user style preferences\n• Create a visually engaging interface that showcases fashion products effectively\n• Design an inclusive shopping experience accessible to diverse user demographics\n• Implement a visual search functionality allowing users to find products by image\n• Build a personalized user profile system that improves with continued platform usage",
        designProcess: "• Discovery & Analysis:\n  - Conducted comprehensive market research across fashion e-commerce platforms\n  - Analyzed shopping behavior patterns from 5,000+ user sessions\n  - Created detailed user personas representing different shopping styles\n• Design Development:\n  - Mapped the ideal customer journey from discovery to purchase\n  - Created mood boards and visual direction for the interface\n  - Developed information architecture prioritizing product discovery\n• Prototyping & Testing:\n  - Built interactive prototypes with varied recommendation layouts\n  - Conducted A/B testing of different product presentation formats\n  - Performed accessibility audits to ensure inclusive design\n• Refinement:\n  - Optimized the mobile shopping experience\n  - Fine-tuned recommendation algorithms based on user feedback\n  - Streamlined the checkout process to reduce abandonment",
        challenges: "• Algorithm Complexity:\n  - Developing AI recommendations that balanced accuracy with discovery\n  - Creating a system that could learn quickly from limited initial user data\n• Visual Design Challenges:\n  - Designing for vastly different fashion aesthetics within one cohesive interface\n  - Maintaining brand consistency while showcasing diverse product styles\n• UX Hurdles:\n  - Presenting AI-powered recommendations without overwhelming users\n  - Balancing personalization with user privacy concerns\n  - Designing intuitive category navigation for thousands of products",
        lessonsLearned: "This project taught us the importance of balancing algorithmic recommendations with user autonomy, and how subtle design cues can significantly impact purchasing decisions in e-commerce environments.",
        images: {
          main: "/supadupa.png",
          process1: "/supadupa/process1.jpg",
          process2: "/supadupa/process2.jpg",
          challenge1: "/supadupa/challenge1.jpg",
          challenge2: "/supadupa/challenge2.jpg"
        }
      }
    },
    {
      id: 3,
      title: "Fusion Flow",
      company: "Productivity App",
      description: "A productivity app that integrates task management, calendar scheduling, and collaboration tools for individuals and teams.",
      image: "/fusionflow.png",
      links: {
        github: "https://github.com/ksavalia21/fusion-flow",
        liveDemo: "https://fusion-flow-rho.vercel.app/"
      },
      details: {
        companyDescription: "Fusion Flow develops productivity solutions that seamlessly integrate task management, scheduling, and team collaboration in one unified platform, helping individuals and teams optimize their workflow and communication.",
        projectObjectives: "• Create a unified productivity platform that reduces tool switching and context shifting\n• Design an adaptable interface that scales from individual users to enterprise teams\n• Develop intelligent task management with priority-based organizing\n• Build seamless calendar integration with conflict resolution\n• Implement collaborative spaces with real-time updates and notifications",
        designProcess: "• Problem Definition:\n  - Shadowed 12 professionals across different industries to observe productivity pain points\n  - Conducted workflow analysis to identify inefficiencies in existing systems\n  - Created task analysis maps for common productivity scenarios\n• Concept Development:\n  - Sketched unified interface concepts with modular components\n  - Developed information architecture that bridged tasks, calendar, and communication\n  - Created user flows for cross-functional team collaboration\n• Iterative Design:\n  - Built progressive mockups from low to high fidelity\n  - Conducted comparative usability tests against leading productivity apps\n  - Designed and tested notification systems for optimal awareness without distraction\n• Implementation Support:\n  - Created comprehensive design system with reusable components\n  - Developed responsive layouts for desktop, tablet, and mobile\n  - Collaborated with developers on animation and interaction specifications",
        challenges: "• Integration Complexity:\n  - Combining disparate productivity functions without overwhelming the interface\n  - Creating seamless transitions between planning, executing, and communicating\n• Information Architecture:\n  - Designing an intuitive navigation system for complex nested data\n  - Balancing information density with clarity and focus\n• Team Dynamics:\n  - Accommodating various team structures and workflow methodologies\n  - Designing permissions and privacy controls for collaborative work\n  - Supporting asynchronous work across different time zones and schedules",
        lessonsLearned: "The project reinforced that in productivity tools, thoughtful information hierarchy and visual organization are as important as feature richness, and that customization options greatly enhance user adoption.",
        images: {
          main: "/fusionflow.png",
          process1: "/fusionflow/process1.jpg",
          process2: "/fusionflow/process2.jpg",
          challenge1: "/fusionflow/challenge1.jpg",
          challenge2: "/fusionflow/challenge2.jpg"
        }
      }
    },
    {
      id: 4,
      title: "Kromin",
      company: "Digital Business Solutions",
      description: "A comprehensive digital transformation platform that helps businesses streamline operations, enhance customer experiences, and drive growth through innovative technology solutions.",
      image: "/kromin.png",
      links: {
        github: "https://github.com/ksavalia21/kromin-clone",
        liveDemo: "https://kromin-clone.vercel.app/"
      },
      details: {
        companyDescription: "Kromin is a forward-thinking digital solutions provider that empowers businesses to thrive in the digital age by offering tailored technology implementations, data-driven strategies, and seamless digital experiences for both internal teams and customers.",
        projectObjectives: "• Develop an integrated business platform that centralizes operations and customer data\n• Create intuitive dashboards for real-time business intelligence and decision making\n• Design scalable solutions that accommodate businesses from SMEs to enterprise-level\n• Implement secure data management systems compliant with industry regulations\n• Build customizable workflow automation tools to increase operational efficiency",
        designProcess: "• Discovery & Business Analysis:\n  - Conducted in-depth interviews with 25+ stakeholders across different business functions\n  - Analyzed existing business processes to identify inefficiencies and bottlenecks\n  - Mapped current digital infrastructure and integration points\n• Strategic Planning:\n  - Developed comprehensive digital transformation roadmaps\n  - Created information architecture diagrams for optimal data flow\n  - Designed user-centered workflows prioritizing efficiency and clarity\n• Solution Design:\n  - Built modular component systems adaptable to various business needs\n  - Developed interactive prototypes for key business operations\n  - Implemented responsive interfaces for both desktop and mobile workforce\n• Testing & Optimization:\n  - Conducted usability testing with actual business users across departments\n  - Performed performance testing for high-volume data scenarios\n  - Iterated designs based on real-world business implementation feedback",
        challenges: "• Integration Complexity:\n  - Connecting disparate legacy systems without disrupting operations\n  - Ensuring seamless data flow between different business functions\n  - Maintaining consistent user experience across varied system components\n• Security & Compliance:\n  - Implementing robust security while maintaining system accessibility\n  - Ensuring compliance with industry-specific regulations and data protection laws\n  - Creating appropriate role-based access controls for sensitive business data\n• Change Management:\n  - Designing intuitive interfaces to minimize learning curve for business users\n  - Developing training protocols for different user proficiency levels\n  - Creating adoption strategies to ensure successful implementation",
        lessonsLearned: "This project demonstrated that successful digital transformation requires not just technological excellence but also deep understanding of business processes and user needs. The most impactful digital solutions are those that blend seamlessly into existing workflows while incrementally improving efficiency and providing clear business value.",
        images: {
          main: "/kromin.png",
          process1: "/kromin/process1.jpg",
          process2: "/kromin/process2.jpg",
          challenge1: "/kromin/challenge1.jpg",
          challenge2: "/kromin/challenge2.jpg"
        }
      }
    }
  ];

  const sections = [
    { title: 'Company Description', key: 'companyDescription', icon: <FaSitemap className="mr-2" /> },
    { title: 'Project Objectives', key: 'projectObjectives', icon: <FaTasks className="mr-2" /> },
    { title: 'Design Process', key: 'designProcess', icon: <FaChartBar className="mr-2" /> },
    { title: 'Challenges', key: 'challenges', icon: <FaSearch className="mr-2" /> },
    { title: 'Lessons Learned', key: 'lessonsLearned', icon: <FaLightbulb className="mr-2" /> }
  ];

  return (
    <div className="min-h-screen py-20 overflow-y-auto max-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-cream mb-4"
      >
        Projects
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "10%" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-1 bg-cream/60 mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-y-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative cursor-pointer rounded-lg overflow-hidden"
            onClick={() => setSelectedProject(project)}
            whileHover={{ y: -5 }}
          >
            <div className="relative">
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-cream/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
              </div>
              
              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-semibold text-cream mb-2">{project.title}</h3>
                <p className="text-cream/60 mb-4">{project.company}</p>
                
                {/* Description (visible on hover) */}
                <motion.p 
                  className="text-cream/80 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-300"
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                >
                  {project.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[90] overflow-hidden"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 overflow-y-auto modal-scrollable pt-16" onClick={(e) => e.stopPropagation()}>
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-5xl mx-auto my-20 px-4 py-8"
              >
                <div className="sticky top-16 z-30 flex justify-between items-center mb-8 pt-4 pb-4 bg-black/90 backdrop-blur-sm border-b border-cream/10">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-cream hover:text-cream/80 flex items-center"
                  >
                    ← Back to Projects
                  </button>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={selectedProject.links?.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream hover:text-cream/80 flex items-center"
                      whileHover={{ y: -2 }}
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </motion.a>
                    <motion.a
                      href={selectedProject.links?.liveDemo || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream hover:text-cream/80 flex items-center"
                      whileHover={{ y: -2 }}
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </motion.a>
                  </div>
                </div>
                
                {/* Company Name and Description - Centered */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-cream mb-4">{selectedProject.title}</h2>
                  <p className="text-cream/60 mb-6">{selectedProject.company}</p>
                  <div className="max-w-3xl mx-auto">
                    <p className="text-cream/80 leading-relaxed">
                      {selectedProject.details.companyDescription}
                    </p>
                  </div>
                </div>
                
                {/* Main Image */}
                <div className="mb-12">
                  <div className="rounded-lg overflow-hidden bg-cream/5 border border-cream/10">
                    <img
                      src={selectedProject.details.images?.main || selectedProject.image}
                      alt={`${selectedProject.title} - Main`}
                      className="w-full h-auto object-cover"
                      style={{ minHeight: "350px" }}
                    />
                  </div>
                </div>
                
                {/* Project Objectives */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-cream mb-4 flex items-center">
                    <FaTasks className="mr-2" /> Project Objectives
                  </h3>
                  <BulletList text={selectedProject.details.projectObjectives} />
                </div>
                
                {/* Two Side-by-Side Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="rounded-lg overflow-hidden bg-cream/5 border border-cream/10">
                    <img
                      src={selectedProject.details.images?.process1 || '/process-image1.jpg'}
                      alt={`${selectedProject.title} - Process 1`}
                      className="w-full h-auto object-cover"
                      style={{ minHeight: "250px" }}
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden bg-cream/5 border border-cream/10">
                    <img
                      src={selectedProject.details.images?.process2 || '/process-image2.jpg'}
                      alt={`${selectedProject.title} - Process 2`}
                      className="w-full h-auto object-cover"
                      style={{ minHeight: "250px" }}
                    />
                  </div>
                </div>
                
                {/* Design Process */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-cream mb-4 flex items-center">
                    <FaChartBar className="mr-2" /> Design Process
                  </h3>
                  <BulletList text={selectedProject.details.designProcess} />
                </div>
                
                {/* Challenges */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-cream mb-4 flex items-center">
                    <FaSearch className="mr-2" /> Challenges
                  </h3>
                  <BulletList text={selectedProject.details.challenges} />
                </div>
                
                {/* Two More Side-by-Side Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="rounded-lg overflow-hidden bg-cream/5 border border-cream/10">
                    <img
                      src={selectedProject.details.images?.challenge1 || '/challenge-image1.jpg'}
                      alt={`${selectedProject.title} - Challenge 1`}
                      className="w-full h-auto object-cover"
                      style={{ minHeight: "250px" }}
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden bg-cream/5 border border-cream/10">
                    <img
                      src={selectedProject.details.images?.challenge2 || '/challenge-image2.jpg'}
                      alt={`${selectedProject.title} - Challenge 2`}
                      className="w-full h-auto object-cover"
                      style={{ minHeight: "250px" }}
                    />
                  </div>
                </div>
                
                {/* Lessons Learned */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-cream mb-4 flex items-center">
                    <FaLightbulb className="mr-2" /> Lessons Learned
                  </h3>
                  <div className="text-cream/80 leading-relaxed whitespace-pre-line">
                    {selectedProject.details.lessonsLearned}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
