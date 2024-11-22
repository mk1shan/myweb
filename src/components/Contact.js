import React from 'react';
import {
  Container, Box, Typography, TextField, Button, Grid,
  Paper, IconButton, Divider, List, ListItem, ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  GitHub, LinkedIn, Mail, Phone, LocationOn,
  Send as SendIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
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
          Get in Touch
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Box component="form" noValidate>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: '#f8fafc',
                    mb: 3,
                    borderBottom: '2px solid #3b82f6',
                    pb: 1
                  }}
                >
                  Send Message
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#f8fafc',
                          '& fieldset': {
                            borderColor: 'rgba(248,250,252,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#3b82f6',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(248,250,252,0.6)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#f8fafc',
                          '& fieldset': {
                            borderColor: 'rgba(248,250,252,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#3b82f6',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(248,250,252,0.6)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Message"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#f8fafc',
                          '& fieldset': {
                            borderColor: 'rgba(248,250,252,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#3b82f6',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(248,250,252,0.6)',
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    mt: 3,
                    bgcolor: '#3b82f6',
                    '&:hover': {
                      bgcolor: '#2563eb',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#f8fafc',
                  mb: 3,
                  borderBottom: '2px solid #3b82f6',
                  pb: 1
                }}
              >
                Contact Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Mail sx={{ color: '#3b82f6' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email"
                    secondary="mudipakishanimayanga@gmail.com"
                    sx={{
                      '& .MuiListItemText-primary': { color: '#f8fafc' },
                      '& .MuiListItemText-secondary': { color: 'rgba(248,250,252,0.6)' }
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone sx={{ color: '#3b82f6' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Phone"
                    secondary="+94712416779"
                    sx={{
                      '& .MuiListItemText-primary': { color: '#f8fafc' },
                      '& .MuiListItemText-secondary': { color: 'rgba(248,250,252,0.6)' }
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOn sx={{ color: '#3b82f6' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Location"
                    secondary="82248"
                    sx={{
                      '& .MuiListItemText-primary': { color: '#f8fafc' },
                      '& .MuiListItemText-secondary': { color: 'rgba(248,250,252,0.6)' }
                    }}
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 3, borderColor: 'rgba(248,250,252,0.1)' }} />

              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#f8fafc',
                  mb: 2
                }}
              >
                Social Links
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton 
                  href="https://github.com/mk1shan" 
                  target="_blank"
                  sx={{
                    color: '#f8fafc',
                    bgcolor: 'rgba(59,130,246,0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(59,130,246,0.2)',
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton 
                  href="https://www.linkedin.com/in/mudipa-kishan/"
                  target="_blank"
                  sx={{
                    color: '#f8fafc',
                    bgcolor: 'rgba(59,130,246,0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(59,130,246,0.2)',
                    },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Contact;
