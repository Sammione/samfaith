import { motion } from 'framer-motion';
import { Moments } from '../components/Moments';
import { BackButton } from '../components/BackButton';

export const MomentsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-24 min-h-screen" // Static header spacing
        >
            <BackButton />
            <Moments />

            <section className="bg-bg-secondary py-32">
                <div className="container text-center max-w-2xl mx-auto italic font-serif">
                    <h2 className="text-3xl mb-8">Memories are the only things that last.</h2>
                    <p className="text-text-secondary leading-loose">We're so blessed to have each other, and these pictures remind us every single day of the beautiful journey we are on together.</p>
                </div>
            </section>
        </motion.div>
    );
};
