import React from 'react';
import { Container, Grid, Card, CardContent, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Award, Cloud, Code, Book, Monitor, Brain } from 'react-feather';

const certificates = [
  {
    title: "JavaScript Essentials 1",
    issuer: "CISCO",
    date: "2023",
    description: "Fundamentals of JavaScript programming and web development",
    category: "Web Development",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Getting Started with Compute",
    issuer: "AWS Educate",
    date: "2023",
    description: "Introduction to AWS compute services and cloud infrastructure",
    category: "Cloud Computing",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: "Getting Started with Storage",
    issuer: "AWS Educate",
    date: "2023",
    description: "AWS storage solutions and best practices",
    category: "Cloud Computing",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: "Introduction to Cloud 101",
    issuer: "AWS Educate",
    date: "2023",
    description: "Fundamentals of cloud computing and AWS services",
    category: "Cloud Computing",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: "SIMPLILEARN Certification",
    issuer: "SIMPLILEARN",
    date: "2023",
    description: "Advanced technology and digital transformation training",
    category: "Professional Development",
    icon: <Award className="w-6 h-6" />
  }
];

const getCategoryColor = (category) => {
  const colors = {
    'Web Development': 'from-blue-400 to-cyan-400',
    'Cloud Computing': 'from-blue-400 to-purple-400',
    'Professional Development': 'from-purple-400 to-pink-400'
  };
  return colors[category] || 'from-blue-400 to-purple-400';
};

const Certificates = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-black via-blue-900/30 to-black overflow-hidden">
      {/* Keep existing starry background and glowing orbs code */}
      
      <Container className="relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 text-transparent bg-clip-text text-center">
            Certificates & Achievements
          </h1>

          <Grid container spacing={4}>
            {certificates.map((cert, index) => (
              <Grid item xs={12} md={6} key={cert.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card 
                    className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm 
                              border border-blue-500/10 hover:border-blue-400/30 
                              hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
                  >
                    <CardContent className="p-6">
                      <Box className="flex flex-col space-y-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(cert.category)} bg-opacity-10`}>
                            {cert.icon}
                          </div>
                          <div>
                            <h3 className="text-xl text-blue-100 font-semibold mb-1">{cert.title}</h3>
                            <p className="text-blue-200/70">{cert.issuer}</p>
                          </div>
                        </div>
                        <p className="text-gray-300">{cert.description}</p>
                        <div className="flex items-center justify-between">
                          <Chip 
                            label={cert.category}
                            size="small"
                            className="bg-blue-500/10 text-blue-300"
                          />
                          <span className="text-blue-200/70">{cert.date}</span>
                        </div>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

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
