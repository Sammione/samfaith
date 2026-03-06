import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { pathname } = useLocation();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyles = () => {
        if (isHomePage) {
            return isScrolled ? 'py-4 glass border-b border-black/5 bg-white/70' : 'py-8 bg-transparent';
        }
        return 'py-4 glass border-b border-black/5 bg-white/70 text-text-primary';
    };

    const textColor = () => {
        if (isHomePage) {
            return isScrolled ? 'text-text-primary' : 'text-white';
        }
        return 'text-text-primary';
    };

    const heartColor = () => {
        if (isHomePage) {
            return isScrolled ? 'text-accent-muted' : 'text-white';
        }
        return 'text-accent-muted';
    };

    const buttonStyles = () => {
        const base = "px-5 py-2 text-xs uppercase tracking-widest border transition-all";
        if (isHomePage) {
            return isScrolled
                ? `${base} border-text-primary text-text-primary hover:bg-text-primary hover:text-white`
                : `${base} border-white text-white hover:bg-white hover:text-black`;
        }
        return `${base} border-text-primary text-text-primary hover:bg-text-primary hover:text-white`;
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarStyles()}`}
        >
            <div className="container flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group transition-opacity">
                    <Heart size={18} className={`${heartColor()} transition-colors`} fill="currentColor" />
                    <span className={`font-serif text-xl ${textColor()} transition-colors`}>
                        S&F
                    </span>
                </Link>

                <div className={`hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium ${textColor()} transition-colors`}>
                    <Link to="/story" className={`hover:text-accent-muted transition-colors ${pathname === '/story' ? 'text-accent-muted' : ''}`}>Our Story</Link>
                    <Link to="/gallery" className={`hover:text-accent-muted transition-colors ${pathname === '/gallery' ? 'text-accent-muted' : ''}`}>Gallery</Link>
                    <Link to="/moments" className={`hover:text-accent-muted transition-colors ${pathname === '/moments' ? 'text-accent-muted' : ''}`}>Moments</Link>
                </div>

                <Link to="/" className={buttonStyles()}>
                    Wish Them Well
                </Link>
            </div>
        </motion.nav>
    );
};
