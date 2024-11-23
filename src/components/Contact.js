import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-black via-indigo-600/20 to-black overflow-hidden">
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

      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_65%)]"
        style={{ mixBlendMode: 'screen' }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text text-center">
            Get In Touch
          </h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-8 rounded-xl 
                        backdrop-blur-sm border border-blue-400/20 
                        hover:border-blue-300/40 transition-all duration-300"
            >
              <form className="space-y-6">
                <div>
                  <label className="text-blue-200 mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-slate-900/50 border border-blue-500/20 rounded-lg p-3 
                             text-blue-100 placeholder-blue-300/50
                             focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50
                             transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-blue-200 mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full bg-slate-900/50 border border-blue-500/20 rounded-lg p-3 
                             text-blue-100 placeholder-blue-300/50
                             focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50
                             transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-blue-200 mb-2 block">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Your message"
                    className="w-full bg-slate-900/50 border border-blue-500/20 rounded-lg p-3 
                             text-blue-100 placeholder-blue-300/50
                             focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50
                             transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg
                           hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]
                           focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-8 rounded-xl 
                        backdrop-blur-sm border border-blue-400/20 
                        hover:border-blue-300/40 transition-all duration-300"
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <Mail className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-100">Email</h3>
                    <a 
                      href="mailto:mudipakishan@gmail.com"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      mudipakishan@gmail.com
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-100 mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/mk1shan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-all duration-300
                               transform hover:scale-110 group"
                    >
                      <Github className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mudipa-kishan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-all duration-300
                               transform hover:scale-110 group"
                    >
                      <Linkedin className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
                    </a>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-500/5 rounded-lg border border-blue-400/10">
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Feel free to reach out! I'm always open to discussing new projects, 
                    creative ideas, or opportunities to be part of your visions.
                  </p>
                </div>
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

export default Contact;
