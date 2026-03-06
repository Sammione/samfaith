import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="story" className="bg-bg-secondary overflow-hidden">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative">
                        <img
                            src="/images/Snapchat-1166569472.jpg"
                            alt="Samuel & Faith Together"
                            className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
                        />
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent-soft p-4 hidden md:block">
                            <div className="border border-white/50 w-full h-full flex items-center justify-center p-4">
                                <p className="font-serif italic text-white text-center text-sm">
                                    "In your arms, I have found my forever home."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="text-accent-muted uppercase tracking-widest text-xs mb-4 block">The Beginning</span>
                    <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
                        A Story Written <br /> <span className="italic font-serif">in the Stars</span>
                    </h2>
                    <div className="space-y-6 text-text-secondary font-light leading-relaxed text-lg">
                        <p>
                            It started with a simple hello, but quickly grew into something neither Samuel nor Faith could have predicted. Their journey together is a testament to the power of shared laughter, quiet understanding, and an unwavering support for each other's dreams.
                        </p>
                        <p>
                            From spontaneous weekend getaways to the simple joy of a morning coffee together, every moment has been a brick in the foundation of their love story. This space is a collection of those fragments—frozen in time, yet vibrating with the life they share.
                        </p>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                        <div className="text-center">
                            <span className="block text-3xl font-serif">2024</span>
                            <span className="text-[10px] uppercase tracking-widest text-accent-muted">When it started</span>
                        </div>
                        <div className="w-[1px] h-12 bg-accent-soft"></div>
                        <div className="text-center">
                            <span className="block text-3xl font-serif">∞</span>
                            <span className="text-[10px] uppercase tracking-widest text-accent-muted">How long it lasts</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
