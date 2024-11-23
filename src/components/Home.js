import React, { useEffect, useState } from 'react';

import bgImage from '../components/bg_1.png';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket,
  Terminal, 
  Github,
  Linkedin,
  Mail,
  Code,
  BoxIcon,
  Star,
  BookOpen,
  Activity,
  Brain,
  Globe,
  Video,
  Box
} from 'lucide-react';

// Enhanced StarField with different star sizes and colors
const StarField = () => {
  const [stars] = useState(() => 
    [...Array(200)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      color: Math.random() > 0.5 ? 'white' : '#64B5F6'
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color
          }}
        />
      ))}
    </div>
  );
};
const skillBoxes = [
    { 
        icon: <Terminal className="w-8 h-8" />, 
        title: 'Full Stack Development',
        desc: 'MERN Stack, REST APIs, GraphQL',
        gradient: 'from-purple-600 to-blue-600'
    },
    { 
        icon: <Video className="w-8 h-8" />, 
        title: 'Video Editing',
        desc: 'DaVinci Resolve, Post-production',
        gradient: 'from-blue-600 to-cyan-500'
    },
    { 
        icon: <Box className="w-8 h-8" />, 
        title: '3D Design',
        desc: 'Blender, 3D Modeling',
        gradient: 'from-cyan-500 to-teal-500'
    },
    { 
        icon: <Activity className="w-8 h-8" />,
        title: 'AI & NLP',
        desc: 'Rasa Framework, Chatbots, Natural Language Processing',
        gradient: 'from-teal-500 to-green-500'
    },
    { 
        icon: <Star className="w-8 h-8" />, 
        title: 'Astronomy',
        desc: 'Technical Writing, Research, Space Science',
        gradient: 'from-green-500 to-yellow-500'
    },
    { 
        icon: <BookOpen className="w-8 h-8" />,
        title: 'Mental Health Projects',
        desc: 'Healthcare Solutions, Research Analysis',
        gradient: 'from-yellow-500 to-orange-500'
    }
];

const ProfessionalSummary = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const summaryPoints = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation Drive",
      content: "Passionate about leveraging cutting-edge technologies to solve complex problems and create intuitive user experiences."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      content: "Experience working with diverse, international teams and contributing to open-source projects worldwide."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Learning",
      content: "Quick to adapt to new technologies and frameworks, with a proven track record of learning and implementing new skills effectively."
    }
  ];

  return (
    <div className="space-y-8">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl text-blue-200/80 leading-relaxed max-w-3xl mx-auto text-center mb-12"
      >
        A passionate Software Engineering Intern with expertise in full-stack development, AI integration, and creative problem-solving. Committed to building innovative solutions that make a positive impact.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {summaryPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)"
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/10 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div 
                animate={{
                  rotateY: hoveredIndex === index ? 360 : 0
                }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              >
                {point.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-blue-100"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1
                }}
              >
                {point.title}
              </motion.h3>
              <p className="text-blue-200/70">{point.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20
        });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      
      // Simulate loading time
      const timer = setTimeout(() => setIsLoading(false), 1000);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(timer);
      };
    }, []);
  
    if (isLoading) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          />
        </div>
      );
    }
  
    return (
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden relative"
        >
          <StarField />
          
          <div className="container mx-auto px-4 py-16 relative">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-64 h-64 md:w-96 md:h-96"
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                  }}
                />
                
                <motion.img
                  src={bgImage}
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover relative z-10 border-4 border-blue-500/30"
                  style={{
                    transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
  
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left md:flex-1"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Mudipa Kishan
                </motion.h1>
                <motion.h2 
                  className="text-xl md:text-2xl text-blue-200 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Software Engineering Intern
                </motion.h2>
                
                <div className="flex gap-4 justify-center md:justify-start mb-8">
                  <motion.button 
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300"
                  >
                    View Projects
                  </motion.button>
                  <motion.button 
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-blue-500 rounded-full transition-all duration-300"
                  >
                    Contact Me
                  </motion.button>
                </div>
  
                <div className="flex gap-4 justify-center md:justify-start">
                  {[
                    { Icon: Github, href: "https://github.com/mk1shan" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/mudipa-kishan" },
                    { Icon: Mail, href: "mailto:mudipakishan@gmail.com" }
                  ].map(({ Icon, href }, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-blue-500/10 transition-all duration-300"
                    >
                      <Icon className="w-6 h-6 text-blue-400" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
  
            {/* Expertise Section */}
            <section className="mb-24">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                My Expertise
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillBoxes.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 0 25px rgba(59, 130, 246, 0.3)"
                    }}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500"
                >
                  <div className="space-y-4">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-r ${skill.gradient} w-fit`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold text-blue-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.title}
                    </motion.h3>
                    <p className="text-blue-200/70">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* About Me Section */}
          <section className="mb-24">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Professional Summary
            </motion.h2>
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none" />
              <ProfessionalSummary />
            </motion.div>
          </section>

          {/* Contact Section */}
          <motion.section 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <motion.p 
              className="text-blue-200/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </motion.p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.section>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Custom styles */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }

        .gradient-text {
          background-size: 200% auto;
          animation: gradient 5s linear infinite;
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3B82F6, #8B5CF6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563EB, #7C3AED);
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Selection color */
        ::selection {
          background: rgba(59, 130, 246, 0.3);
          color: #fff;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default Home;
