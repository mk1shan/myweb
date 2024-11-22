import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';

const projects = [
  {
    title: 'Inventory Management System',
    description: 'Java & Mysql',
    image: 'images/project-4.jpg',
    link: 'https://github.com/mk1shan/Inventory--Management-system',
  },
  {
    title: 'Dental Hospital Management system',
    description: 'Web Design -Html ,Css ,Javascript',
    image: 'images/project-5.jpg',
    link: 'https://github.com/mk1shan/Denatl-Hospital-Mnagaement-System',
  },
  {
    title: 'Weather Application',
    description: 'React js & Api',
    image: 'images/project-1.jpg',
    link: 'https://github.com/mk1shan/react_weatherapp',
  },
  {
    title: 'Student Management System',
    description: 'MERN',
    image: 'images/project-6.jpg',
    link: 'https://github.com/mk1shan/CRUD_REACT',
  },
  {
    title: 'EmoCare: Chatbot system for Depressed youngsters',
    description: 'In progress-python & Rasa',
    image: 'images/project-2.jpg',
    link: 'https://github.com/mk1shan/rasa',
  },
  {
    title: 'Cinema++: online film watching Ui',
    description: 'Figma',
    image: 'images/project-2.jpg',
    link: 'https://github.com/mk1shan/rasa',
  },
];

const Projects = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <Card>
                <CardActionArea href={project.link} target="_blank">
                  <CardMedia component="img" height="140" image={project.image} alt={project.title} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
