import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, MapPin, Mail, Phone, Code, Cloud, Star, Edit } from 'react-feather';

const About = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-black via-blue-900/30 to-black overflow-hidden">
      {/* Starry background */}
      <div className="fixed inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.7,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 text-transparent bg-clip-text text-center">
            About Me
          </h1>

          <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-xl backdrop-blur-sm border border-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
            >
              <h2 className="text-2xl font-semibold mb-6 text-blue-100">Biography</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Software Engineering undergraduate at KDU with a deep fascination for space technology and cloud computing. Currently working as a Software Engineer Intern at Avantrio, I blend my technical skills with creative problem-solving to build innovative solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in software development is complemented by my interest in astronomical studies, where I explore the intersection of technology and space science. I'm also actively involved in technical writing, sharing knowledge and insights with the developer community.
              </p>

              {/* Core Skills */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { icon: <Code />, text: "Full Stack Development" },
                  { icon: <Cloud />, text: "Cloud Computing" },
                  { icon: <Star />, text: "Astronomical Studies" },
                  { icon: <Edit />, text: "Technical Writing" }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-blue-200 p-2 rounded-lg bg-blue-500/10"
                  >
                    {skill.icon}
                    <span>{skill.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact & Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-xl backdrop-blur-sm border border-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-blue-100">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-200">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:mudipakishanimayanga@gmail.com" className="hover:text-blue-300 transition-colors">
                      mudipakishanimayanga@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-blue-200">
                    <Phone className="w-5 h-5" />
                    <span>+94712416779</span>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-xl backdrop-blur-sm border border-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
                <h2 className="text-2xl font-semibold mb-6 text-blue-100">Education</h2>
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Calendar className="text-blue-300 mt-1" />
                  <div>
                    <h3 className="text-xl text-blue-100">Bachelor of Software Engineering</h3>
                    <p className="text-blue-200/70">KDU • 2020 - Present</p>
                    <p className="text-gray-300 mt-2">
                      Focusing on full-stack development, AI/ML, and software architecture. 
                      Actively involved in research projects and technical competitions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .animate-twinkle {
          animation: twinkle infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default About;
