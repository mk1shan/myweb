import React from 'react';
import bgImage from './bg_1.png';
import { 
    Terminal, GitHub, Linkedin, Mail, Code, Database,
    Cloud, Layout, Server, Shield, Video, 
    Box as BoxIcon, Star, BookOpen, Activity
} from 'react-feather';
import { motion } from 'framer-motion';
import { 
    Container, Box, Typography, Grid, IconButton, 
    Paper, Button, Avatar
} from '@mui/material';

const skillBoxes = [
    { 
        icon: <Code size={24} />, 
        title: 'Full Stack Development',
        desc: 'MERN Stack, REST APIs, GraphQL',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    { 
        icon: <Video size={24} />, 
        title: 'Video Editing',
        desc: 'DaVinci Resolve, Post-production',
        gradient: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)'
    },
    { 
        icon: <BoxIcon size={24} />, 
        title: '3D Design',
        desc: 'Blender, 3D Modeling, Animation',
        gradient: 'linear-gradient(135deg, #b721ff 0%, #21d4fd 100%)'
    },
    { 
        icon: <Activity size={24} />,
        title: 'AI & NLP',
        desc: 'Rasa Framework, Chatbots, Natural Language Processing',
        gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
    },
    { 
        icon: <Star size={24} />, 
        title: 'Astronomy',
        desc: 'Technical Writing, Research, Space Science',
        gradient: 'linear-gradient(135deg, #4158D0 0%, #C850C0 100%)'
    },
    { 
        icon: <BookOpen size={24} />,
        title: 'Mental Health Projects',
        desc: 'Healthcare Solutions, Research Analysis',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
];

const Home = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Hero Section with Image */}
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 6,
                    mb: 12 
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box
                            component="img"
                            src={bgImage}  // Update with your image path
                            sx={{
                                width: { xs: '280px', md: '320px' },
                                height: { xs: '280px', md: '320px' },
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '4px solid rgba(59, 130, 246, 0.5)',
                                boxShadow: '0 0 25px rgba(59, 130, 246, 0.3)',
                            }}
                            alt="Profile"
                        />
                    </motion.div>

                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography 
                            variant="h1" 
                            fontWeight="bold" 
                            sx={{ 
                                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 3
                            }}
                        >
                            Mudipa Kishan
                        </Typography>
                        
                        <Typography 
                            variant="h5" 
                            sx={{ 
                                color: 'rgba(255, 255, 255, 0.9)',
                                mb: 4,
                                maxWidth: '600px'
                            }}
                        >
                            Software Engineering Inter
                        </Typography>

                        <Box sx={{ 
                            display: 'flex', 
                            gap: 2, 
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            mb: 4 
                        }}>
                            <Button 
                                variant="contained" 
                                href="/projects"
                                sx={{
                                    bgcolor: '#3b82f6',
                                    px: 4,
                                    py: 1.5,
                                    '&:hover': { bgcolor: '#2563eb' }
                                }}
                            >
                                View Projects
                            </Button>
                            <Button 
                                variant="outlined"
                                href="#contact"
                                sx={{
                                    borderColor: '#3b82f6',
                                    color: '#3b82f6',
                                    px: 4,
                                    py: 1.5
                                }}
                            >
                                Contact Me
                            </Button>
                        </Box>

                        <Box sx={{ 
                            display: 'flex', 
                            gap: 3, 
                            justifyContent: { xs: 'center', md: 'flex-start' } 
                        }}>
                            {[
                                { Icon: GitHub, href: "https://github.com/mk1shan" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/mudipa-kishan" },
                                { Icon: Mail, href: "mailto:mudipakishan@gmail.com" }
                            ].map(({ Icon, href }, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <IconButton
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: 'rgba(59, 130, 246, 0.1)',
                                            color: '#3b82f6',
                                            '&:hover': {
                                                bgcolor: 'rgba(59, 130, 246, 0.2)',
                                            },
                                            p: 2
                                        }}
                                    >
                                        <Icon size={24} />
                                    </IconButton>
                                </motion.div>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Skills Grid */}
                <Typography 
                    variant="h3" 
                    sx={{ 
                        textAlign: 'center', 
                        mb: 6,
                        background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    My Expertise
                </Typography>

                <Grid container spacing={4}>
                    {skillBoxes.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Paper 
                                    elevation={0}
                                    sx={{ 
                                        p: 4,
                                        height: '100%',
                                        borderRadius: 3,
                                        bgcolor: 'rgba(17, 24, 39, 0.6)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(59, 130, 246, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.1)',
                                            border: '1px solid rgba(59, 130, 246, 0.2)'
                                        }
                                    }}
                                >
                                    <Box 
                                        sx={{ 
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 2
                                        }}
                                    >
                                        <Box 
                                            sx={{
                                                p: 2,
                                                borderRadius: 2,
                                                bgcolor: 'rgba(59, 130, 246, 0.1)',
                                                width: 'fit-content',
                                                color: '#3b82f6'
                                            }}
                                        >
                                            {skill.icon}
                                        </Box>
                                        <Typography variant="h6" fontWeight="600">
                                            {skill.title}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                        >
                                            {skill.desc}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Container>
    );
};

export default Home;
