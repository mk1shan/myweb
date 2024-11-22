import React from 'react';
import { 
  Container, Box, Typography, List, ListItem, ListItemIcon, 
  ListItemText, Paper, Divider, LinearProgress,Grid
} from '@mui/material';
import { 
  Home as HomeIcon, 
  Mail as MailIcon, 
  Phone as PhoneIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  Star as StarIcon,
    
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const skillsList = [
  { name: "Full Stack Development", level: 85 },
  { name: "Cloud Computing", level: 80 },
  { name: "Astronomical Studies", level: 75 },
  { name: "Technical Writing", level: 70 },
];

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3
            }}
          >
            About Me
          </Typography>
          <Paper 
            elevation={3}
            sx={{
              p: 4,
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2
            }}
          >
            <Typography variant="body1" paragraph sx={{ color: '#f8fafc' }}>
              I'm a passionate Software Engineering undergraduate at KDU with a deep fascination 
              for space technology and cloud computing. Currently working as a Software Engineer 
              Intern at Avantrio, I blend my technical skills with creative problem-solving to 
              build innovative solutions.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#f8fafc' }}>
              My journey in software development is complemented by my interest in astronomical 
              studies, where I explore the intersection of technology and space science. I'm also 
              actively involved in technical writing, sharing knowledge and insights with the 
              developer community.
            </Typography>
          </Paper>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3}
              sx={{
                p: 4,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                height: '100%'
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3,
                  color: '#f8fafc',
                  borderBottom: '2px solid #3b82f6',
                  pb: 1
                }}
              >
                Contact Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HomeIcon sx={{ color: 'rgba(168, 85, 247, 0.8)' }} />
                  </ListItemIcon>
                  <ListItemText primary="Location:" secondary="82248" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MailIcon sx={{ color: 'rgba(168, 85, 247, 0.8)' }} />
                  </ListItemIcon>
                  <ListItemText primary="Email:" secondary="mudipakishanimayanga@gmail.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon sx={{ color: 'rgba(168, 85, 247, 0.8)' }} />
                  </ListItemIcon>
                  <ListItemText primary="Phone:" secondary="+94712416779" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3}
              sx={{
                p: 4,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                height: '100%'
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3,
                  color: '#f8fafc',
                  borderBottom: '2px solid #3b82f6',
                  pb: 1
                }}
              >
                Skills & Expertise
              </Typography>
              <Box sx={{ mt: 2 }}>
                {skillsList.map((skill, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="body1" sx={{ color: '#f8fafc', mb: 1 }}>
                      {skill.name}
                    </Typography>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    >
                      <LinearProgress 
                        variant="determinate" 
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          bgcolor: 'rgba(255,255,255,0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
                          }
                        }}
                      />
                    </motion.div>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About;
