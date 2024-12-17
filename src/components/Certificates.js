import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Cloud, 
  Code, 
  Book, 
  Monitor, 
  Brain,
  Terminal,
  Database,
  Server,
  Coffee
} from 'lucide-react';
import { FaJsSquare, FaAws, FaPython, FaJava } from 'react-icons/fa';

const certificates = [
  {
    title: "JavaScript Essentials 1",
    issuer: "CISCO",
    date: "2023",
    description: "Complete understanding of JavaScript fundamentals, DOM manipulation, and modern ES6+ features",
    category: "Web Development",
    icon: <FaJsSquare className="w-6 h-6 text-[#F7DF1E]" />
  },
  {
    title: "Getting Started with Compute",
    issuer: "AWS Educate",
    date: "2023",
    description: "Mastery in AWS compute services including EC2, Lambda, and elastic computing principles",
    category: "Cloud Computing",
    icon: <FaAws className="w-6 h-6 text-[#FF9900]" />
  },
  {
    title: "Getting Started with Storage",
    issuer: "AWS Educate",
    date: "2023",
    description: "Comprehensive knowledge of AWS storage solutions including S3, EBS, and EFS",
    category: "Cloud Computing",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Introduction to Cloud 101",
    issuer: "AWS Educate",
    date: "2023",
    description: "Foundation in cloud computing concepts, AWS global infrastructure, and service models",
    category: "Cloud Computing",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: "Programming Essentials in Python",
    issuer: "SIMPLILEARN",
    date: "2023",
    description: "Advanced Python programming concepts, data structures, and application development",
    category: "Programming",
    icon: <FaPython className="w-6 h-6 text-[#3776AB]" />
  },
  {
    title: "Java Development",
    issuer: "SIMPLILEARN",
    date: "2023",
    description: "Comprehensive Java programming, OOP concepts, and enterprise application development",
    category: "Programming",
    icon: <FaJava className="w-6 h-6 text-[#007396]" />
  }
];

const getCategoryColor = (category) => {
  const colors = {
    'Web Development': 'from-blue-400 to-cyan-400',
    'Cloud Computing': 'from-blue-400 to-purple-400',
    'Programming': 'from-purple-400 to-pink-400',
    'Professional Development': 'from-pink-400 to-orange-400'
  };
  return colors[category] || 'from-blue-400 to-purple-400';
};

const Certificates = () => {
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
            Certificates & Achievements
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-6 rounded-xl 
                          backdrop-blur-sm border border-blue-400/20 
                          hover:border-blue-300/40 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${getCategoryColor(cert.category)} bg-opacity-10 text-blue-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-blue-100 mb-1">{cert.title}</h3>
                    <p className="text-blue-300/80 text-sm">{cert.issuer}</p>
                  </div>
                  <div className="text-blue-300/60 text-sm">
                    {cert.date}
                  </div>
                </div>
                
                <p className="text-blue-100/70 text-sm mb-4">
                  {cert.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                               bg-gradient-to-r opacity-80 text-white"
                     style={{
                       backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                       '--tw-gradient-from': '#60A5FA',
                       '--tw-gradient-to': '#818CF8'
                     }}>
                  {cert.category}
                </div>
              </motion.div>
            ))}
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

export default Certificates;
