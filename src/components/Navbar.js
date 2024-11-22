import React, { useState } from 'react';
import { 
    AppBar, 
    Box, 
    Toolbar, 
    IconButton, 
    Typography, 
    Menu, 
    Container, 
    Button, 
    MenuItem,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, X as CloseIcon } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';

const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Skills', path: '/skills' },
    { title: 'Projects', path: '/projects' },
    { title: 'Certificates', path: '/certificates' },
    { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    // Mobile drawer content
    const drawer = (
        <Box 
            onClick={handleDrawerToggle}
            sx={{ 
                width: 250,
                height: '100%',
                bgcolor: 'background.paper',
                pt: 8
            }}
        >
            <List>
                {pages.map((page) => (
                    <ListItem 
                        key={page.title}
                        component={Link}
                        to={page.path}
                        sx={{
                            color: isActive(page.path) ? 'primary.main' : 'text.primary',
                            '&:hover': {
                                bgcolor: 'rgba(59, 130, 246, 0.08)',
                            },
                            borderRight: isActive(page.path) ? 3 : 0,
                            borderColor: 'primary.main'
                        }}
                    >
                        <ListItemText 
                            primary={page.title}
                            primaryTypographyProps={{
                                fontSize: '1rem',
                                fontWeight: isActive(page.path) ? 600 : 400
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar 
            position="sticky"
            elevation={0}
            sx={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: 64 }}>
                    {/* Logo/Brand - visible on all screens */}
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontWeight: 700,
                            color: 'text.primary',
                            textDecoration: 'none',
                            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        MUDIPA KISHAN
                    </Typography>

                    {/* Mobile menu icon */}
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ ml: 'auto' }}
                        >
                            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    )}

                    {/* Desktop menu */}
                    {!isMobile && (
                        <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.title}
                                    component={Link}
                                    to={page.path}
                                    sx={{
                                        my: 2,
                                        color: isActive(page.path) ? 'primary.main' : 'text.primary',
                                        display: 'block',
                                        fontWeight: isActive(page.path) ? 600 : 400,
                                        position: 'relative',
                                        '&:after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: isActive(page.path) ? '100%' : '0%',
                                            height: '2px',
                                            bottom: 0,
                                            left: '0',
                                            backgroundColor: 'primary.main',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover:after': {
                                            width: '100%',
                                        }
                                    }}
                                >
                                    {page.title}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </Container>

            {/* Mobile drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better mobile performance
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
                        backgroundColor: 'background.paper',
                        backgroundImage: 'none',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
