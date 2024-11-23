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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    // Handle body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileOpen]);

    return (
        <div className="sticky top-0 z-50 w-full">
            <div className="w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
                {/* Main Navbar */}
                <div className="flex h-16 items-center justify-between px-4">
                    {/* Logo - Left Side */}
                    <div className="w-[200px] lg:w-[200px] md:w-[180px] sm:w-[160px]">
                        <Link 
                            to="/" 
                            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent whitespace-nowrap"
                        >
                            MUDIPA KISHAN
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex items-center justify-center flex-1">
                        <div className="flex space-x-6">
                            {pages.map((page) => (
                                <Link
                                    key={page.title}
                                    to={page.path}
                                    className={`px-3 py-2 text-sm font-medium
                                        ${isActive(page.path) 
                                            ? 'text-blue-500 font-semibold' 
                                            : 'text-gray-300 hover:text-white'
                                        }
                                        transition-colors duration-200
                                    `}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right side spacer to balance logo */}
                    <div className="w-[200px] lg:w-[200px] md:w-[180px] sm:w-[160px] flex justify-end">
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={handleDrawerToggle}
                                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                {mobileOpen && (
                    <div className="md:hidden fixed inset-0 z-50">
                        <div 
                            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm" 
                            onClick={handleDrawerToggle}
                            aria-hidden="true"
                        />
                        <div 
                            className="fixed right-0 top-0 w-64 h-full bg-slate-900 border-l border-slate-800 p-6 overflow-y-auto"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="flex justify-end mb-6">
                                <button
                                    onClick={handleDrawerToggle}
                                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50"
                                    aria-label="Close menu"
                                >
                                    <CloseIcon size={24} />
                                </button>
                            </div>
                            <nav className="space-y-2">
                                {pages.map((page) => (
                                    <Link
                                        key={page.title}
                                        to={page.path}
                                        onClick={handleDrawerToggle}
                                        className={`block px-4 py-2 rounded-lg text-sm font-medium
                                            ${isActive(page.path)
                                                ? 'text-blue-500 bg-blue-500/10'
                                                : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                                            }
                                        `}
                                    >
                                        {page.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
