import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Binary,
  Cloud, 
  Paintbrush,
  Database, 
  Globe,
  Terminal
} from 'lucide-react';
import { FaJava, FaPython, FaDatabase, FaCode, FaAws, FaFigma, FaWordpress, FaVideo, FaPalette, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "Java", level: 85, icon: <FaJava className="w-6 h-6 text-[#007396]" /> },
      { name: "Python", level: 80, icon: <FaPython className="w-6 h-6 text-[#3776AB]" /> },
      { name: "SQL", level: 75, icon: <FaDatabase className="w-6 h-6 text-[#003B57]" /> },
      { name: "C++", level: 70, icon: <FaCode className="w-6 h-6 text-[#00599C]" /> }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <Binary className="w-6 h-6" />,
    skills: [
      { name: "NLP", level: 85 },
      { name: "Rasa", level: 80 }
    ]
  },
  {
    title: "AWS & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: "AWS Storage", level: 80, icon: <FaAws className="w-6 h-6 text-[#FF9900]" /> },
      { name: "AWS Compute", level: 75, icon: <FaAws className="w-6 h-6 text-[#FF9900]" /> },
      { name: "Cloud Computing", level: 70, icon: <FaAws className="w-6 h-6 text-[#FF9900]" /> }
    ]
  },
  {
    title: "Design & Development",
    icon: <Paintbrush className="w-6 h-6" />,
    skills: [
      { name: "Figma", level: 85, icon: <FaFigma className="w-6 h-6 text-[#F24E1E]" /> },
      { name: "WordPress", level: 80, icon: <FaWordpress className="w-6 h-6 text-[#21759B]" /> },
      { name: "Video Editing", level: 75, icon: <FaVideo className="w-6 h-6 text-[#FF0000]" /> },
      { name: "Graphic Design", level: 80, icon: <FaPalette className="w-6 h-6 text-[#FF6347]" /> }
    ]
  },
  {
    title: "Web Development",
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      { name: "HTML", level: 90, icon: <FaHtml5 className="w-6 h-6 text-[#E34F26]" /> },
      { name: "CSS", level: 85, icon: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" /> },
      { name: "JavaScript", level: 80, icon: <FaJsSquare className="w-6 h-6 text-[#F7DF1E]" /> },
      { name: "React", level: 75, icon: <FaReact className="w-6 h-6 text-[#61DAFB]" /> },
      { name: "Node.js", level: 70, icon: <FaNodeJs className="w-6 h-6 text-[#339933]" /> }
    ]
  },
  {
    title: "Core Concepts",
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      { name: "OOP", level: 85 },
      { name: "DSA", level: 80 },
    ]
  },
  {
    title: "Languages",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: "English", level: 90 },
      { name: "Sinhala (Native)", level: 100 }
    ]
  }
];

const Skills = () => {
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
            Skills & Expertise
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-6 rounded-xl 
                          backdrop-blur-sm border border-blue-400/20 
                          hover:border-blue-300/40 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-400/10 text-blue-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-100">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + skillIdx * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-blue-200 flex items-center gap-2">
                          {skill.icon}
                          {skill.name}
                        </span>
                        <span className="text-blue-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-blue-900/20 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: idx * 0.2 + skillIdx * 0.1,
                            ease: "easeOut"
                          }}
                          className="bg-gradient-to-r from-blue-400 to-purple-400 h-full rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
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

export default Skills;
