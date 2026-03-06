import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass border-b border-black/5' : 'py-8'
                }`}
        >
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Heart size={18} className={isScrolled ? 'text-accent-muted' : 'text-white'} fill="currentColor" />
                    <span className={`font-serif text-xl ${isScrolled ? 'text-text-primary' : 'text-white'}`}>
                        S&F
                    </span>
                </div>

                <div className={`hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium ${isScrolled ? 'text-text-secondary' : 'text-white/80'
                    }`}>
                    <a href="#" className="hover:text-accent-muted transition-colors">Our Story</a>
                    <a href="#gallery" className="hover:text-accent-muted transition-colors">Gallery</a>
                    <a href="#moments" className="hover:text-accent-muted transition-colors">Moments</a>
                </div>

                <button className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all ${isScrolled
                    ? 'border-text-primary text-text-primary hover:bg-text-primary hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-black'
                    }`}>
                    Wish Them Well
                </button>
            </div>
        </motion.nav>
    );
};
