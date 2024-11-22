import React from 'react';
import { 
  Container, Grid, Card, CardContent, CardMedia, Typography,
  Box, Chip, IconButton, CardActions, CardActionArea
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Space Weather App",
      description: "Real-time space weather monitoring dashboard using NASA API",
      image: "/space-weather.jpg",
      github: "https://github.com/yourusername/space-weather",
      demo: "https://space-weather-demo.com",
      stack: ["React", "Node.js", "NASA API"]
    },
    // Add more projects...
  ];

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
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
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
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      sx={{ 
                        color: '#f8fafc',
                        fontWeight: 600
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(248,250,252,0.8)',
                        mb: 2
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.stack.map((tech) => (
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
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
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
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;
