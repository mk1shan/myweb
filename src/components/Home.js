import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../components/bg_1.png';
import { motion } from 'framer-motion';
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
        title: 'Web Design & Development',
        desc: 'Full-stack web development, WordPress, React, Custom themes & plugins',
        gradient: 'from-yellow-500 to-orange-500'
    }
];

const ProfessionalSummary = () => {
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
        className="text-xl text-blue-200/80 leading-relaxed max-w-3xl mx-auto text-center mb-12"
      >
        A passionate Software Engineering Intern with expertise in full-stack development, AI integration, and creative problem-solving. Committed to building innovative solutions that make a positive.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {summaryPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-100">{point.title}</h3>
              <p className="text-blue-200/70">{point.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
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

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleContact = () => {
    navigate('/contact');
  };

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
                  onClick={handleViewProjects}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                >
                  View Projects
                </motion.button>
                <motion.button 
                  onClick={handleContact}
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
          <section className="mb-24">
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
          </section>

          {/* About Me Section */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Professional Summary
            </h2>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none" />
              <ProfessionalSummary />
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-24 relative">
  {/* Floating orbs background */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed" />
  </div>

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
    Always Open to New Opportunities!
  </h2>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative max-w-2xl mx-auto"
  >
    <div className="relative flex flex-col items-center bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-400/10 backdrop-blur-sm rounded-2xl p-8 space-y-6 shadow-lg">
      {/* Gradient border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl -z-10" />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl text-blue-100/90 leading-relaxed text-center"
      >
        I'm always excited to work with new technologies and collaborate on interesting projects. Feel free to connect with me!
      </motion.p>

      <motion.button
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 20px rgba(147, 197, 253, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleContact}
        className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
          rounded-full hover:from-blue-400 hover:via-indigo-400 hover:to-purple-400 
          transition-all duration-300 shadow-lg hover:shadow-blue-500/25 
          text-white font-medium tracking-wide"
      >
        Let's Connect
      </motion.button>
    </div>
  </motion.div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-delayed {
      animation: float 6s ease-in-out infinite;
      animation-delay: 2s;
    }
  `}</style>
</section>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;
