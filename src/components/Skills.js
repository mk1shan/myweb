import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Binary,
  Cloud, 
  Paintbrush,
  Database, 
  Globe,
  BookOpen,
  Award,
  Terminal
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
      { name: "C++", level: 70 }
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
      { name: "AWS Storage", level: 80 },
      { name: "AWS Compute", level: 75 },
      { name: "Cloud Computing", level: 70 }
    ]
  },
  {
    title: "Design & Development",
    icon: <Paintbrush className="w-6 h-6" />,
    skills: [
      { name: "Figma", level: 85 },
      { name: "WordPress", level: 80 },
      { name: "Video Editing", level: 75 },
      { name: "Graphic Design", level: 80 }
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
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-600/20 to-black">
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_65%)]"
        style={{ mixBlendMode: 'screen' }}
      />
      
      <div className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text text-center">
            Skills & Expertise
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <span className="text-blue-200">{skill.name}</span>
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
    </div>
  );
};

export default Skills;
