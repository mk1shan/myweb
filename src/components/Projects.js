import React from 'react';
import { 
  Container, Grid, Card, CardContent, Typography,
  Box, Chip, IconButton, CardActions
} from '@mui/material';
import { 
  GitHub, Launch, Inventory, MedicalServices,
  School, MusicNote, Psychology, Code
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "StockWise",
    description: "A comprehensive inventory management system designed to streamline shop operations. Features include real-time stock tracking, user management, customer database, and order processing with detailed analytics.",
    year: "2024",
    tech: ["Java", "MySQL", "Spring Boot", "React JS"],
    features: [
      "Real-time Inventory Tracking",
      "User Role Management",
      "Customer Database",
      "Order Processing",
      "Analytics Dashboard"
    ],
    github: "https://github.com/mk1shan/stockwise",
    demo: "#",
    icon: <Inventory />,
    gradient: "linear-gradient(135deg, #1a237e, #0d47a1)"
  },
  {
    title: "Tiny Teeth",
    description: "Advanced dental hospital management system with integrated patient records, appointment scheduling, and treatment tracking. Streamlines dental practice operations and enhances patient care.",
    year: "2024",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Patient Records Management",
      "Appointment Scheduling",
      "Treatment Planning",
      "Billing System",
      "Doctor Dashboard"
    ],
    github: "https://github.com/mk1shan/tiny-teeth",
    demo: "#",
    icon: <MedicalServices />,
    gradient: "linear-gradient(135deg, #00897b, #006064)"
  },
  {
    title: "Student Management System",
    description: "Full-stack application for managing student information, course enrollments, and academic performance. Features include attendance tracking and progress monitoring.",
    year: "2022",
    tech: ["React JS", "Node JS", "Express JS", "MongoDB"],
    features: [
      "Student Profile Management",
      "Course Registration",
      "Attendance Tracking",
      "Grade Management",
      "Progress Reports"
    ],
    github: "https://github.com/mk1shan/student-mgmt",
    demo: "#",
    icon: <School />,
    gradient: "linear-gradient(135deg, #ad1457, #880e4f)"
  },
  {
    title: "Music Web App",
    description: "Modern music streaming platform with customizable playlists, genre-based libraries, and personalized recommendations. Built with modern web technologies for optimal performance.",
    year: "2024",
    tech: ["React JS", "Vite.js", "Tailwind CSS", "Node.js"],
    features: [
      "Custom Playlists",
      "Genre Categories",
      "Music Player",
      "User Profiles",
      "Song Recommendations"
    ],
    github: "https://github.com/mk1shan/music-app",
    demo: "mudipakishan.me",
    icon: <MusicNote />,
    gradient: "linear-gradient(135deg, #311b92, #4527a0)"
  },
  {
    title: "EmoCare",
    description: "AI-powered mental health support platform featuring an intelligent chatbot for depression assessment and personalized support. Includes mood tracking, therapeutic activities, and professional connections.",
    year: "2024",
    tech: ["Python", "Rasa Framework", "React JS", "Node.js", "MongoDB"],
    features: [
      "AI Chatbot Assessment",
      "Mood Tracking",
      "Therapeutic Activities",
      "Media Recommendations",
      "Community Support",
      "Professional Help Network"
    ],
    github: "https://github.com/mk1shan/emocare",
    demo: "#",
    icon: <Psychology />,
    gradient: "linear-gradient(135deg, #c2185b, #d32f2f)"
  }
];

const ProjectCard = ({ project }) => (
  <Card 
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: 2,
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 20px rgba(0,0,0,0.2)'
      }
    }}
  >
    <Box 
      sx={{ 
        p: 3, 
        background: project.gradient,
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}
    >
      {project.icon}
      <Typography variant="h5" sx={{ color: '#fff', fontWeight: 600 }}>
        {project.title}
      </Typography>
    </Box>
    
    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="body1" sx={{ color: '#f8fafc', mb: 3 }}>
        {project.description}
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ color: '#f8fafc', mb: 1, fontWeight: 600 }}>
          Key Features:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.features.map((feature) => (
            <Chip
              key={feature}
              label={feature}
              size="small"
              sx={{
                background: 'rgba(255,255,255,0.05)',
                color: '#f8fafc',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            />
          ))}
        </Box>
      </Box>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" sx={{ color: '#f8fafc', mb: 1, fontWeight: 600 }}>
          Technologies:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.tech.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                background: 'rgba(59,130,246,0.1)',
                color: '#3b82f6',
                borderRadius: '4px'
              }}
            />
          ))}
        </Box>
      </Box>
      
      <Typography 
        variant="caption" 
        sx={{ 
          color: 'rgba(248,250,252,0.6)',
          display: 'block'
        }}
      >
        Year: {project.year}
      </Typography>
    </CardContent>
    
    <CardActions sx={{ p: 2, justifyContent: 'space-between' }}>
      <IconButton 
        href={project.github}
        target="_blank"
        sx={{ 
          color: '#f8fafc',
          '&:hover': { color: '#3b82f6' }
        }}
      >
        <GitHub />
      </IconButton>
      <IconButton 
        href={project.demo}
        target="_blank"
        sx={{ 
          color: '#f8fafc',
          '&:hover': { color: '#3b82f6' }
        }}
      >
        <Launch />
      </IconButton>
    </CardActions>
  </Card>
);

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h2" 
          sx={{
            textAlign: 'center',
            mb: 6,
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          My Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} lg={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;
