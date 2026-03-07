import { motion } from 'framer-motion';
import { Gallery } from '../components/Gallery';
import { BackButton } from '../components/BackButton';

export const GalleryPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-24 min-h-screen" // Static header spacing
        >
            <BackButton />
            <Gallery />

            <section className="bg-bg-primary py-24 border-t border-black/5">
                <div className="container text-center">
                    <p className="text-accent-muted italic font-serif">A snapshot of the moments that made us.</p>
                </div>
            </section>
        </motion.div>
    );
};
