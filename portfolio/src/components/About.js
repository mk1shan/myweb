import React from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 12, position: 'relative', overflow: 'hidden' }}>
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url(/path-to-your-space-background.jpg) no-repeat center center/cover',
          zIndex: -1,
          filter: 'blur(2px)',
          opacity: 0.5
        }}
      />

      {/* Rocket animation */}
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: '100vw' }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
        style={{ position: 'absolute', top: '10%', left: 0, zIndex: 0 }}
      >
        <RocketLaunchIcon sx={{ fontSize: 50, color: 'white' }} />
      </motion.div>

      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Here is some information about me.
        </Typography>
      </Box>
      <Box sx={{ bgcolor: 'rgba(31, 41, 55, 0.5)', p: 4, borderRadius: 2, boxShadow: 3 }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon sx={{ color: 'rgba(168, 85, 247, 0.8)' }} />
            </ListItemIcon>
            <ListItemText primary="Address:" secondary="N0,147 kasagala, weeraketiya" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HomeIcon sx={{ color: 'rgba(168, 85, 247, 0.8)' }} />
            </ListItemIcon>
            <ListItemText primary="Zip code:" secondary="82248" />
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
      </Box>
    </Container>
  );
};

export default About;
