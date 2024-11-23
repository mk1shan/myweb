import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    return (
        <div className="fixed top-0 z-50 w-full">
            <motion.div 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`w-full backdrop-blur-md border-b transition-all duration-300 ${
                    scrolled 
                        ? 'bg-slate-900/90 border-slate-700/50' 
                        : 'bg-transparent border-transparent'
                }`}
            >
                {/* Desktop Navigation */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex h-16 items-center justify-between px-4">
                        {/* Logo/Brand */}
                        <Link to="/" className="flex-shrink-0">
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                MK
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {pages.map((page) => (
                                <Link
                                    key={page.path}
                                    to={page.path}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                                        isActive(page.path)
                                            ? 'text-blue-400'
                                            : 'text-gray-300 hover:text-blue-400'
                                    }`}
                                >
                                    {page.title}
                                    {isActive(page.path) && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={handleDrawerToggle}
                                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                            >
                                {mobileOpen ? (
                                    <CloseIcon className="w-6 h-6" />
                                ) : (
                                    <MenuIcon className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-slate-800"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md">
                                {pages.map((page) => (
                                    <Link
                                        key={page.path}
                                        to={page.path}
                                        className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                                            isActive(page.path)
                                                ? 'bg-blue-500/10 text-blue-400'
                                                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                        }`}
                                    >
                                        {page.title}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Navbar;
