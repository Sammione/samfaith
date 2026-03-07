import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navbarStyles = () => {
        if (isHomePage && !isMenuOpen) {
            return isScrolled ? 'py-4 glass border-b border-black/5 bg-white/70' : 'py-8 bg-transparent';
        }
        return 'py-4 glass border-b border-black/5 bg-white/70 text-text-primary';
    };

    const textColor = () => {
        if (isHomePage && !isMenuOpen) {
            return isScrolled ? 'text-text-primary' : 'text-white';
        }
        return 'text-text-primary';
    };

    const heartColor = () => {
        if (isHomePage && !isMenuOpen) {
            return isScrolled ? 'text-accent-muted' : 'text-white';
        }
        return 'text-accent-muted';
    };

    const navLinks = [
        { name: 'Our Story', path: '/story' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Moments', path: '/moments' }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${navbarStyles()}`}
            >
                <div className="container flex justify-between items-center">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 group transition-opacity">
                        <Heart size={18} className={`${heartColor()} transition-colors`} fill="currentColor" />
                        <span className={`font-serif text-xl ${textColor()} transition-colors`}>
                            S&F
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className={`hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium ${textColor()} transition-colors`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`hover:text-accent-muted transition-colors ${pathname === link.path ? 'text-accent-muted' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <Link to="/" className={`hidden md:block px-5 py-2 text-xs uppercase tracking-widest border transition-all ${isHomePage && !isScrolled ? 'border-white text-white hover:bg-white hover:text-black' : 'border-text-primary text-text-primary hover:bg-text-primary hover:text-white'
                        }`}>
                        Wish Them Well
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden p-2 transition-colors ${textColor()}`}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[90] bg-white flex flex-col justify-center items-center gap-8 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 px-4 w-full">
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-3xl font-serif italic text-text-primary hover:text-accent-muted transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8"
                            >
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-8 py-3 bg-text-primary text-white uppercase tracking-widest text-xs"
                                >
                                    Wish Them Well
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
