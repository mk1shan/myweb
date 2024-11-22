import React from 'react';
import { Container, Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Cloud, Palette } from '@mui/icons-material';

const skillCategories = [
  {
    title: 'Development',
    icon: <Code />,
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 70 }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud />,
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 65 }
    ]
  },
  {
    title: 'Design',
    icon: <Palette />,
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'WordPress', level: 70 },
      { name: 'UI/UX', level: 85 }
    ]
  }
];

const Skills = () => {
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
          My Skills
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, idx) => (
            <Grid item xs={12} md={4} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.1)',
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                    <Box sx={{ 
                      color: '#3b82f6',
                      p: 1,
                      borderRadius: 1,
                      bgcolor: 'rgba(59,130,246,0.1)'
                    }}>
                      {category.icon}
                    </Box>
                    <Typography variant="h5" sx={{ color: '#f8fafc' }}>
                      {category.title}
                    </Typography>
                  </Box>
                  
                  {category.skills.map((skill) => (
                    <Box key={skill.name} sx={{ mb: 3 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        mb: 1 
                      }}>
                        <Typography sx={{ color: '#f8fafc' }}>
                          {skill.name}
                        </Typography>
                        <Typography sx={{ color: '#3b82f6' }}>
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 5,
                          bgcolor: 'rgba(59,130,246,0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                            borderRadius: 5
                          }
                        }}
                      />
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Skills;
