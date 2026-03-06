import { motion } from 'framer-motion';
import mediaData from '../data/media.json';

const media = mediaData.map(item => ({
    src: `/images/${item.Name}`,
    type: item.Name.endsWith('.mp4') ? 'video' : 'image',
    id: item.Name
}));

export const Gallery = () => {
    return (
        <section id="gallery" className="bg-bg-primary">
            <div className="container">
                <header className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl mb-4"
                    >
                        Capturing the Chapters
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-secondary font-light max-w-xl mx-auto"
                    >
                        Every smile, every glance, and every shared moment tells the story of a journey that's only just beginning.
                    </motion.p>
                </header>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {media.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: (index % 5) * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="media-card break-inside-avoid"
                        >
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt="Samuel & Faith"
                                    loading="lazy"
                                    className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            ) : (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                                >
                                    <source src={item.src} type="video/mp4" />
                                </video>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
