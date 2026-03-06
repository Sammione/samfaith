import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Hero />

            <section className="bg-bg-primary py-32">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl mb-8 font-serif italic">Every Picture Tells a Story</h2>
                        <p className="text-text-secondary font-light leading-relaxed mb-12">
                            Welcome to the digital memoir of Samuel and Faith.
                            A collection of captured glances, shared laughter, and
                            the quiet moments that define our journey together.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/story" className="px-8 py-4 bg-text-primary text-white uppercase tracking-widest text-xs hover:bg-black transition-all">
                                Discover Our Story
                            </Link>
                            <Link to="/gallery" className="px-8 py-4 border border-text-primary text-text-primary uppercase tracking-widest text-xs hover:bg-text-primary hover:text-white transition-all">
                                View Full Gallery
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};
