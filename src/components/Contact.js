import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Link } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" gutterBottom>
          I am eager to learn new technologies, contribute to projects, and build relationships with senior team members. As a team player, I am committed to giving my best and making a positive impact.
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Phone:" secondary="+94712416779" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email:" secondary="mudipakishanimayanga@gmail.com" />
          </ListItem>
        </List>
        <Typography variant="h6" gutterBottom>
          Links
        </Typography>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/mudipa-kishan/" target="_blank">
              LinkedIn
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/mk1shan" target="_blank">
              GitHub
            </Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Contact;
