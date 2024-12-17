import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Database,
  Store,
  Stethoscope,
  Music2,
  Heart,
  Container,
  FileJson,
  Boxes,
  GitBranch,
  Cable,
  Cpu,
  MonitorSmartphone,
  Code
} from 'lucide-react';

const TechIcon = ({ name }) => {
  const icons = {
    'React': <Code className="w-4 h-4" />,
    'Node.js': <FileJson className="w-4 h-4" />,
    'MongoDB': <Database className="w-4 h-4" />,
    'MySQL': <Database className="w-4 h-4" />,
    'Spring': <Container className="w-4 h-4" />,
    'Python': <Boxes className="w-4 h-4" />,
    'Git': <GitBranch className="w-4 h-4" />,
    'API': <Cable className="w-4 h-4" />,
    'AI': <Cpu className="w-4 h-4" />,
    'Responsive': <MonitorSmartphone className="w-4 h-4" />
  };

  return icons[name] || null;
};

const projects = [
  {
    title: "StockWise",
    description: "Intelligent inventory management system with real-time analytics and predictive stock management.",
    icon: <Store className="w-6 h-6" />,
    gradient: "from-blue-600 to-cyan-600",
    mainTech: ["Java", "MySQL"],
    features: [
      "Manage categories, users, customers, and orders",
      "Real-time Analytics Dashboard",
      "Predictive Stock Management",
      "Multi-branch Support",
      "Advanced Reporting"
    ],
    github: "https://github.com/mk1shan/Inventory--Management-system",
    live: "#",
    priority: "Featured"
  },
  {
    title: "EmoCare",
    description: "AI-powered mental health platform with real-time emotion analysis and support system.",
    icon: <Heart className="w-6 h-6" />,
    gradient: "from-purple-600 to-pink-600",
    mainTech: ["RASA framework", "Python", "React", "Firebase", "LLM (cohere)"],
    features: [
      "Selfcare plan tailored to the user's mental health level and suggest songs and movies",
      "Measures and monitors depression, anxiety, and stress levels",
      "Mini-game for stress relief and a diary to log emotions",
      "Progress Tracking"
    ],
    github: "https://github.com/mk1shan/mental-health-project",
    live: "#",
    priority: "Featured"
  },
  {
    title: "Skillshare",
    description: "Skillshare platform for peer groups",
    icon: <Heart className="w-6 h-6" />,
    gradient: "from-purple-600 to-pink-600",
    mainTech: ["React", "Firebase", "Node.js", "Express.js"],
    features: [
      "Users can share their ideas about specific topics",
      "Users can make their profile by including their skills and personal details",
      "Users can post articles about their skillful areas and all users can read them",
      "Users can search other users by name, and they can see their profiles with their skills",
      "Feed section",
      "Profile section",
      "Article section",
      "Search section"
    ],
    github: "https://github.com/mk1shan/skill_share",
    live: "#",
    priority: "Featured"
  },
  {
    title: "Tiny Teeth",
    description: "Modern dental clinic management system with integrated patient care workflows.",
    icon: <Stethoscope className="w-6 h-6" />,
    gradient: "from-cyan-600 to-teal-600",
    mainTech: ["HTML", "CSS", "JavaScript", "PHP"],
    features: [
      "Manage Doctor details, patient details, and user details",
      "Smart Scheduling",
      "Treatment Tracking",
      "Patient Portal",
      "Billing System"
    ],
    github: "https://github.com/mk1shan/Denatl-Hospital-Mnagaement-System",
    live: "#"
  },
  
];

const ProjectCard = ({ project }) => (
  <div className="group relative h-full">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
    <div className="relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl 
                    backdrop-blur-sm border border-blue-400/20 
                    group-hover:border-blue-300/40 transition-all duration-300
                    overflow-hidden flex flex-col justify-between h-full">
      <div className={`bg-gradient-to-r ${project.gradient} p-4 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/10">
            {project.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            {project.priority === "Featured" && (
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Featured Project</span>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4 flex-grow">
        <p className="text-blue-100/80 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.mainTech.map((tech) => (
            <div key={tech} 
                 className="flex items-center gap-1.5 bg-blue-400/10 text-blue-300 px-3 py-1 rounded-full text-sm">
              <TechIcon name={tech} />
              {tech}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="text-blue-200 font-medium">Key Features</h4>
          <ul className="space-y-1">
            {project.features.map((feature) => (
              <li key={feature} className="text-blue-100/70 text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex gap-3 p-6 pt-0">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-400/20 
                   text-blue-300 rounded-lg transition-all duration-300"
        >
          <Github className="w-4 h-4" />
          Code
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-400/20 
                   text-blue-300 rounded-lg transition-all duration-300"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </motion.a>
      </div>
    </div>
  </div>
);

const Projects = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 text-transparent bg-clip-text text-center">
            Featured Projects
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* GitHub View More Projects Button */}
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: projects.length * 0.2 }}
          >
            <motion.a
              href="https://github.com/mk1shan"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                       rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300
                       shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
              <span className="text-lg font-semibold">View More Projects</span>
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center
                            group-hover:bg-white/20 transition-all duration-300">
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          </motion.div>
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

export default Projects;
