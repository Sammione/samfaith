import { motion } from 'framer-motion';
import { About } from '../components/About';

export const StoryPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="pt-24" // Spacing for static header
        >
            <About />

            <section className="bg-bg-primary py-20 pb-32">
                <div className="container max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-serif mb-6 italic">A Harmonious Rhythm</h3>
                            <p className="text-text-secondary font-light leading-loose">
                                Love is not just about the grand gestures; it's the rhythm we find
                                together. For Samuel and Faith, it's those quiet mornings,
                                the shared dreams for the future, and the simple comfort
                                of presence. Our story is still being written, every single day.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-3xl font-serif mb-6 italic">Looking Forward</h3>
                            <p className="text-text-secondary font-light leading-loose">
                                We've only just begun. From the first spark in 2024 to the
                                unbreakable bond we share today, we're excited for every
                                horizon that awaits us. This journey belongs to us, and
                                we're so glad you're here to witness a part of it.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};
