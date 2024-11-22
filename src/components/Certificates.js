import React from 'react';
import { 
  Container, Typography, Grid, Paper, Box,
  Card, CardContent, Chip, Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Cloud, School } from '@mui/icons-material';

const Certificates = () => {
  const certifications = {
    AWS: [
      "AWS Educate Getting Started with Compute",
      "AWS Educate Getting Started with Storage",
      "AWS Services Overview for IT Professionals",
      "AWS Educate Introduction to Cloud 101"
    ],
    CISCO: [
      "JavaScript Essentials 1"
    ],
    SIMPLILEARN: [
      "Become job-ready in coding Basics of Data Structures and Algorithms"
    ]
  };

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
          Certifications
        </Typography>

        <Grid container spacing={4}>
          {Object.entries(certifications).map(([provider, certs], index) => (
            <Grid item xs={12} md={6} key={provider}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <CardContent>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2, 
                      mb: 3 
                    }}>
                      {provider === 'AWS' && <Cloud sx={{ color: '#3b82f6' }} />}
                      {provider === 'CISCO' && <Code sx={{ color: '#3b82f6' }} />}
                      {provider === 'SIMPLILEARN' && <School sx={{ color: '#3b82f6' }} />}
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          color: '#f8fafc',
                          fontWeight: 600
                        }}
                      >
                        {provider}
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 3, borderColor: 'rgba(248,250,252,0.1)' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {certs.map((cert, i) => (
                        <Paper
                          key={i}
                          sx={{
                            p: 2,
                            background: 'rgba(59,130,246,0.1)',
                            borderRadius: 2,
                            border: '1px solid rgba(59,130,246,0.2)'
                          }}
                        >
                          <Typography 
                            variant="body2" 
                            sx={{ color: '#f8fafc' }}
                          >
                            {cert}
                          </Typography>
                        </Paper>
                      ))}
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <Chip 
                        label={`${certs.length} Certificates`}
                        size="small"
                        sx={{
                          background: 'rgba(59,130,246,0.2)',
                          color: '#3b82f6',
                          borderRadius: '4px'
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Certificates;
