import React from 'react';
import { Container, Typography, Box, LinearProgress } from '@mui/material';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'C++', level: 85 },
  { name: 'React Js', level: 85 },
  { name: 'Cloud Computing', level: 65 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'Figma', level: 90 },
  { name: 'WordPress', level: 70 },
  { name: 'Javascript', level: 80 },
];

const Skills = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          My Skills
        </Typography>
        {skills.map((skill) => (
          <Box key={skill.name} sx={{ mb: 2 }}>
            <Typography variant="h6">{skill.name}</Typography>
            <LinearProgress variant="determinate" value={skill.level} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Skills;
