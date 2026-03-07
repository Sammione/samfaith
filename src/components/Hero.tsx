import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => {
    const navLinks = [
        { name: 'Our Story', path: '/story' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Moments', path: '/moments' }
    ];

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden p-0">
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Video (Hidden on Mobile) */}
                <div className="hidden md:block w-full h-full">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/images/Snapchat-1355185705.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Couple Rings Image (The "Hardcoded" one - using stable Pexels High-res URL) */}
                <div className="absolute inset-0 block">
                    <img
                        src="https://images.unsplash.com/photo-1541250848049-b4f71413cc30?q=80&w=2574&auto=format&fit=crop"
                        alt="Couple Rings Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="uppercase tracking-[0.5em] text-[10px] md:text-xs font-light mb-6 block opacity-80"
                >
                    A Union of Souls & Faith
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-serif italic mb-8 leading-tight"
                >
                    Samuel & Faith
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="space-y-6"
                >
                    <p className="text-base md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed opacity-90 italic font-serif">
                        "In the circle of these rings, we find our eternity. A promise made in grace,
                        nurtured by deep devotion, and celebrated in every heartbeat we share."
                    </p>
                    <div className="w-12 h-[1px] bg-white/30 mx-auto mt-8"></div>

                    {/* Mobile Only: Navigation Links listed on Home Page */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="md:hidden flex flex-col items-center gap-6 mt-12"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-lg font-serif italic tracking-widest text-accent-soft hover:text-white transition-colors border-b border-accent-soft/20 pb-1 w-32"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>

                    <p className="hidden md:block text-[10px] uppercase tracking-[0.3em] font-light opacity-60">
                        Forever is just the beginning
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
