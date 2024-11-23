import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';

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
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    // Prevent scrolling when the menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
    }, [mobileOpen]);

    return (
        <nav className="sticky top-0 z-50 w-full">
            <div className="w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
                        >
                            MUDIPA KISHAN
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex space-x-6">
                            {pages.map((page) => (
                                <Link
                                    key={page.title}
                                    to={page.path}
                                    className={`px-3 py-2 rounded-md font-medium text-sm lg:text-base ${
                                        isActive(page.path)
                                            ? 'text-blue-500 bg-blue-500/10'
                                            : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                                    }`}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={handleDrawerToggle}
                            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800/50"
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
<div
    className={`fixed inset-0 z-50 transition-all ${
        mobileOpen ? 'visible' : 'invisible'
    }`}
>
    {/* Backdrop */}
    <div
        className={`fixed inset-0 bg-slate-900 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleDrawerToggle}
    />

    {/* Drawer */}
                    <div
                        className={`fixed right-0 top-0 w-64 h-full bg-slate-900 shadow-lg border-l border-slate-800 transform transition-transform duration-300 ${
                            mobileOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="p-4 border-b border-slate-800 flex justify-between">
                            <Link
                                to="/"
                                className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                                onClick={handleDrawerToggle}
                            >
                                MUDIPA KISHAN
                            </Link>
                            <button
                                onClick={handleDrawerToggle}
                                className="p-2 text-gray-400 hover:text-white hover:bg-slate-800/50"
                            >
                                <CloseIcon size={24} />
                            </button>
                        </div>

                        <nav className="px-4 py-4 space-y-2">
                            {pages.map((page) => (
                                <Link
                                    key={page.title}
                                    to={page.path}
                                    className={`block px-3 py-2 rounded-md font-medium ${
                                        isActive(page.path)
                                            ? 'text-blue-500 bg-blue-500/10'
                                            : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                                    }`}
                                    onClick={handleDrawerToggle}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
