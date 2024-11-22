import React, { useEffect, useState } from 'react';
import bgImage from '../components/bg_1.png';
import { motion } from 'framer-motion';
import {
  Rocket,
  Terminal, 
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Cloud,
  Layout,
  Server,
  Shield,
  Video,
  Box as BoxIcon,
  Star,
  BookOpen,
  Activity
} from 'lucide-react';

// StarField and OrbitingPlanet components remain the same
const StarField = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(200)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`,
            opacity: Math.random()
          }}
        />
      ))}
    </div>
  );
};

const OrbitingPlanet = ({ delay = 0, size = 8, orbit = 20, color = "bg-blue-500" }) => {
  return (
    <div 
      className="absolute rounded-full opacity-75"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animation: `orbit ${orbit}s infinite linear ${delay}s`
      }}
    >
      <div className={`w-full h-full rounded-full ${color}`} />
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
        icon: <BoxIcon className="w-8 h-8" />, 
        title: '3D Design',
        desc: 'Blender, 3D Modeling, Animation',
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

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden relative">
      <StarField />
      
      <div className="container mx-auto px-4 py-16 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
              />
              <div className="absolute inset-0">
                <OrbitingPlanet delay={0} size={12} orbit={15} color="bg-blue-400" />
                <OrbitingPlanet delay={2} size={8} orbit={20} color="bg-purple-400" />
                <OrbitingPlanet delay={4} size={10} orbit={25} color="bg-cyan-400" />
              </div>
              <img
                src={bgImage}
                alt="Profile"
                className="rounded-full w-full h-full object-cover relative z-10 border-4 border-blue-500/30"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                }}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left md:flex-1"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                Mudipa Kishan
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-200 mb-8">
                Software Engineering Intern
              </h2>
              
              <div className="flex gap-4 justify-center md:justify-start mb-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                >
                  View Projects
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-blue-500 rounded-full hover:bg-blue-500/20 transition-all duration-300"
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
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-blue-400" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Expertise Section */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            My Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillBoxes.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.gradient} w-fit group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-100">
                    {skill.title}
                  </h3>
                  <p className="text-blue-200/70">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
    0%, 100% { 
      opacity: 0.1; /* Reduced from 0.2 */
    }
    50% { 
      opacity: 0.5; /* Reduced from 1 */
    }
  }
  
  @keyframes orbit {
    from { 
      transform: rotate(0deg) translateX(60px) rotate(0deg); /* Reduced from 100px */
    }
    to { 
      transform: rotate(360deg) translateX(60px) rotate(-360deg);
    }
  }
      `}</style>
    </div>
  );
};

export default Home;
