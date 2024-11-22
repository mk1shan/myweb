import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const Certificates = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Certificates
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="CISCO:" secondary="JavaScript Essentials 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="AWS:" secondary="AWS Educate Getting Started with Compute" />
          </ListItem>
          <ListItem>
            <ListItemText primary="AWS:" secondary="AWS Educate Getting Started with Storage" />
          </ListItem>
          <ListItem>
            <ListItemText primary="AWS:" secondary="AWS Services Overview for IT Professionals" />
          </ListItem>
          <ListItem>
            <ListItemText primary="AWS:" secondary="AWS Educate Introduction to Cloud 101" />
          </ListItem>
          <ListItem>
            <ListItemText primary="SIMPLILEARN:" secondary="Become job-ready in coding Basics of Data Structures and Algorithms" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Certificates;
