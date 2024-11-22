// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GitHub, Linkedin } from 'react-feather';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text text-center">
            Get In Touch
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-blue-500/10"
            >
              <form className="space-y-6">
                <div>
                  <label className="text-gray-200 mb-2 block">Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-900/50 border border-blue-500/20 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-200 mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full bg-slate-900/50 border border-blue-500/20 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-200 mb-2 block">Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-slate-900/50 border border-blue-500/20 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-blue-500/10"
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-400">mudipakishan@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/mk1shan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900/50 rounded-lg hover:bg-blue-500/20 transition"
                  >
                    <GitHub className="text-gray-200" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mudipa-kishan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900/50 rounded-lg hover:bg-blue-500/20 transition"
                  >
                    <Linkedin className="text-gray-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
